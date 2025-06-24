import { NextResponse } from "next/server";
import { scopes, clientId } from '../../../config.js'
import { connectToDatabase } from "../../../lib/mongodb";
import UserWeb from "../../../models/userWeb.js";

export async function GET(request: Request) {
  await connectToDatabase();

  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = Object.fromEntries(cookieHeader.split(";").map(c => {
    const [k, ...v] = c.trim().split("=");
    return [k, v.join("=")];
  }));

  const sessionToken = cookies.session;

  let sessionValid = false;
  if (sessionToken) {
    const user = await UserWeb.findOne({ session: sessionToken });
    if (user && user.sessionCreatedAt && (Date.now() - user.sessionCreatedAt.getTime()) < 1000 * 60 * 60 * 24 * 7) {
      sessionValid = true;
    }
  }

  if (sessionValid) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const host = request.headers.get("host");
  const protocol = host?.startsWith("localhost") ? "http" : "https";
  const redirect_uri = `${protocol}://${host}/api/callback`;

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri,
    response_type: "code",
    scope: scopes.join(" "),
  }).toString();

  const url = `https://discord.com/oauth2/authorize?${params}`;
  return NextResponse.redirect(url);
}