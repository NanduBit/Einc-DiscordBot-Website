import { NextResponse } from "next/server";
import crypto from "crypto";
import { clientId, clientSecret, guild } from "../../../config.js";
import { connectToDatabase } from "../../../lib/mongodb";
import UserWeb from "../../../models/userWeb.js";
import User from "../../../models/user.js";

export async function GET(request: Request) {
  await connectToDatabase();
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  const host = request.headers.get("host");
  const protocol = host?.startsWith("localhost") ? "http" : "https";

  const basicAuth =
    "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: basicAuth,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: `${protocol}://${host}/api/callback`,
    }).toString(),
  });

  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok) {
    return NextResponse.json(tokenData, { status: 400 });
  }
  if (
    !(
      tokenData.scope.includes("identify") &&
      tokenData.scope.includes("guilds") &&
      tokenData.scope.includes("guilds.join")
    )
  ) {
    return NextResponse.redirect(new URL("/api/login", request.url));
  }

  const userInfoResponse = await fetch("https://discord.com/api/users/@me", {
    method: "GET",
    headers: {
      Authorization: `${tokenData.token_type} ${tokenData.access_token}`,
    },
  });

  const userInfo = await userInfoResponse.json();

  if (!userInfoResponse.ok) {
    return NextResponse.json(userInfo, { status: 400 });
  }

  const userGuildsResponse = await fetch(
    "https://discord.com/api/users/@me/guilds",
    {
      method: "GET",
      headers: {
        Authorization: `${tokenData.token_type} ${tokenData.access_token}`,
      },
    }
  );

  const userGuilds = await userGuildsResponse.json();
  if (!userGuildsResponse.ok) {
    return NextResponse.json(userGuilds, { status: 400 });
  }

  const guildMember = userGuilds.find(
    (guildObj: { id: string }) => guildObj.id === guild
  );
  if (!guildMember) {
    await fetch(
      `https://discord.com/api/guilds/${guild}/members/${userInfo.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bot ${process.env.TOKEN}`,
        },
        body: JSON.stringify({
          access_token: tokenData.access_token,
        }),
      }
    );
  }
  let sessionToken = "";
  try {
    const existing = await UserWeb.findOne({ id: userInfo.id });
    sessionToken = crypto.randomBytes(12).toString("hex");

    await UserWeb.findOneAndUpdate(
      { id: userInfo.id },
      {
        access_token: tokenData.access_token,
        expires_in: tokenData.expires_in,
        refresh_token: tokenData.refresh_token,
        session: sessionToken,
        ...userInfo,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    if (!existing) {
      await User.findOneAndUpdate(
        { userId: userInfo.id, username: userInfo.username },
        { $inc: { balance: 10000 } },
        { upsert: true, new: true }
      );
    }
  } catch (error) {
    console.error("Error updating user in database:", error);
    return NextResponse.json(
      { error: "Failed to update user in database" },
      { status: 500 }
    );
  }

  // Create response and set cookie
  const response = NextResponse.redirect(new URL("/", request.url));

  response.cookies.set("session", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return response;
}
