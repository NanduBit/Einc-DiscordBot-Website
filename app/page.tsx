import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  BarChart3,
  Star,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg"
              alt="Einc Bot Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">Einc Bot</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Link
              href="https://discord.com/api/oauth2/authorize?client_id=1384432556652499055&scope=bot&permissions=322624"
              passHref
              legacyBehavior
            >
              <Button size="sm" asChild>
                <a target="_blank" rel="noopener noreferrer">
                  Add to Discord
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    🚨 New: Still barely works!
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Ruin, Spam, and Lose
                    <br />
                    <span className="text-primary">with Einc Bot</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-[600px]">
                    Einc Bot is the only Discord bot guaranteed to make your
                    server worse. Lose your coins, annoy your friends, and
                    question your life choices—all in one package!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://discord.com/api/oauth2/authorize?client_id=1384432556652499055&scope=bot&permissions=322624"
                    passHref
                    legacyBehavior
                  >
                    <Button size="lg" className="text-lg px-8" asChild>
                      <a target="_blank" rel="noopener noreferrer">
                        Add Regret
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    passHref
                    legacyBehavior
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg px-8 bg-white text-black"
                      asChild
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        Watch Disaster
                      </a>
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Free (for a reason)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>No setup (no features)</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Einc Bot Dashboard (if you can call it that)"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="secondary" className="w-fit mx-auto">
                Features (if you can call them that)
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                The Most Useless Discord Bot Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Einc Bot: For when you want your server to be slightly worse
                than before. Try these "features" at your own risk!
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Currency Exchange - left */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Currency Exchange</CardTitle>
                  <CardDescription>
                    Seamlessly lose your virtual money by trading currencies
                    between bots like Owo Bot and more. The fastest way to
                    regret your decisions!
                  </CardDescription>
                </CardHeader>
              </Card>
              {/* Economy System - middle */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Economy System</CardTitle>
                  <CardDescription>
                    Compete with friends, maybe win (probably not), and climb a
                    leaderboard that barely works. Einc Bot’s economy is as
                    stable as a Jenga tower in an earthquake.
                  </CardDescription>
                </CardHeader>
              </Card>
              {/* Fun Commands - right */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Fun Commands*</CardTitle>
                  <CardDescription>
                    Try commands like <b>/annoy</b>, <b>/spam</b>,{" "}
                    <b>/rickroll</b>, and <b>/crash</b> to instantly lose
                    friends and dignity.
                    <br />
                    <span className="text-xs text-muted-foreground">
                      *Disclaimer: Haha get scammed none of these work.
                    </span>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="text-center mt-10 text-muted-foreground">
              <span>
                More questionable features coming soon. Or not. We honestly
                don't know.
              </span>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="secondary" className="w-fit mx-auto">
                Testimonials (Roast Edition)
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Hated by Discord Communities
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                *Warning: These are real (fake) reviews. Viewer discretion is
                advised.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(1)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i + 1}
                        className="h-4 w-4 text-muted-foreground"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Installed Einc Bot and my server activity dropped by 90%.
                    Even my alt left. Would not recommend."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/reviewer1.png?height=40&width=40"
                      alt="Chris"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Chris</p>
                      <p className="text-sm text-muted-foreground">
                        Regretful Admin
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(2)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    {[...Array(3)].map((_, i) => (
                      <Star
                        key={i + 2}
                        className="h-4 w-4 text-muted-foreground"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "I used the currency exchange and lost all my coins. Turns
                    out, that's the only feature that works."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/reviewer2.png?height=40&width=40"
                      alt="Taylor"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Taylor</p>
                      <p className="text-sm text-muted-foreground">
                        Former Millionaire
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(1)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i + 1}
                        className="h-4 w-4 text-muted-foreground"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Fun commands? More like run commands. My friends ran away.
                    Thanks, Einc Bot."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/reviewer3.png?height=40&width=40"
                      alt="Morgan"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Morgan</p>
                      <p className="text-sm text-muted-foreground">
                        Server of One
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="secondary" className="w-fit mx-auto">
                Pricing (Why would you pay for this?)
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                No Tricks. Just Free. (Nobody would buy it anyway)
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Einc Bot is—and always will be—100% free for everyone. No hidden
                fees, no premium tiers, just pure Discord chaos.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {/* Left Card */}
              <Card className="border-2 hover:border-primary/50 transition-colors opacity-60">
                <CardHeader>
                  <CardTitle>Maybe Someday?</CardTitle>
                  <CardDescription>
                    Who knows what the future holds? (Hopefully not more
                    features)
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">-</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline" disabled>
                    Not Available
                  </Button>
                </CardContent>
              </Card>

              {/* Middle Card - Free Forever */}
              <Card className="border-2 border-primary relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Free Forever*
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>
                    Thought this was paid? Nope—Einc Bot is{" "}
                    <span className="font-bold text-primary">free forever</span>
                    . Enjoy all the "features" with no cost, ever. Refunds not
                    available (because you paid nothing).
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" asChild>
                    <a
                      href="https://discord.com/api/oauth2/authorize?client_id=1384432556652499055&scope=bot&permissions=322624"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Add to Discord (if you dare)
                    </a>
                  </Button>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>
                        All features unlocked (not that you want them)
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>No paywalls, just pain</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Unlimited servers & regrets</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Right Card */}
              <Card className="border-2 hover:border-primary/50 transition-colors opacity-60">
                <CardHeader>
                  <CardTitle>Just Vibes</CardTitle>
                  <CardDescription>
                    Nothing to see here. Enjoy the freedom!
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">∞</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline" disabled>
                    No Limits (No Features)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to ruin your Discord server?
              </h2>
              <p className="text-xl opacity-90">
                Add Einc Bot and watch your friends leave, your coins disappear,
                and your sanity fade. More "features" coming soon (maybe).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8"
                  asChild
                >
                  <a
                    href="https://discord.com/api/oauth2/authorize?client_id=1384432556652499055&scope=bot&permissions=322624"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add to Discord (Regret Instantly)
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Demo (if you dare)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-muted/50 py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Einc Bot Logo"
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                </div>
                <span className="text-xl font-bold">Einc Bot</span>
              </div>
              <p className="text-muted-foreground">
                Einc Bot is your Discord companion for trading currencies, fun
                commands, and a growing economy. More features coming soon!
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://dsc.gg/einc"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Users className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </Link>
                <Link
                  href="https://github.com/NanduBit"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Bot</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Commands
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://dsc.gg/einc"
                    className="hover:text-primary"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="https://dsc.gg/einc"
                    className="hover:text-primary"
                  >
                    Discord Server
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Updates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>no-support@you-dumb.idiot</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (699) 696-6969</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Internet, Earth</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-muted-foreground/20 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Einc Bot. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground mt-4 sm:mt-0">
              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
