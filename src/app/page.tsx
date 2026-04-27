import Link from "next/link";
import Image from "next/image";
import {
  Search,
  MapPin,
  Building2,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Users,
  CheckCircle,
  Sparkles,
  Code2,
  Heart,
  BarChart3,
  Palette,
  Globe,
  ShieldCheck,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "./(auth)/_actions/auth.queries";

// ─── Data fetching (logic unchanged) 
async function getFeaturedJobs() {
  return await prisma.job.findMany({
    take: 9,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      employer: {
        select: {
          name: true,
          user: {
            select: {
              avatarUrl: true,
            },
          },
        },
      },
    },
  });
}

//  Static data for UI sections 
const stats = [
  { label: "Jobs Posted", value: "50K+", icon: Briefcase },
  { label: "Companies Hiring", value: "10K+", icon: Building2 },
  { label: "Candidates Placed", value: "200K+", icon: Users },
  { label: "Success Rate", value: "94%", icon: TrendingUp },
];

const categories = [
  { label: "Technology", icon: Code2, count: "12,400 jobs", color: "text-blue-500 bg-blue-500/10" },
  { label: "Healthcare", icon: Heart, count: "8,200 jobs", color: "text-rose-500 bg-rose-500/10" },
  { label: "Finance", icon: BarChart3, count: "6,800 jobs", color: "text-emerald-500 bg-emerald-500/10" },
  { label: "Design", icon: Palette, count: "4,500 jobs", color: "text-violet-500 bg-violet-500/10" },
  { label: "Marketing", icon: Globe, count: "5,100 jobs", color: "text-orange-500 bg-orange-500/10" },
  { label: "Security", icon: ShieldCheck, count: "3,200 jobs", color: "text-cyan-500 bg-cyan-500/10" },
];

const steps = [
  {
    step: "01",
    title: "Create Your Profile",
    desc: "Sign up and build a compelling profile that highlights your skills, experience, and career goals.",
    icon: Users,
  },
  {
    step: "02",
    title: "Discover Opportunities",
    desc: "Browse thousands of curated job listings from top companies across every industry.",
    icon: Search,
  },
  {
    step: "03",
    title: "Apply with One Click",
    desc: "Submit applications instantly with your saved profile. Track every application in real-time.",
    icon: CheckCircle,
  },
];


export default async function HomePage() {
  const featuredJobs = await getFeaturedJobs();
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-1">


        <section className="relative overflow-hidden">
          {/* Background gradient blobs */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-7xl px-4 py-24 lg:py-36 text-center">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 animate-pulse">
              <Sparkles className="w-4 h-4" />
              AI-Powered Job Matching — Now Live
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 ">
              Find a Job That{" "}
              <span className="relative inline-block">
                <span className="font-bold text-blue-500">
                  Fuels Your
                </span>

              </span>
              <br />
              <span className="text-foreground">Ambition & Skills</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover thousands of opportunities at top companies worldwide.
              Our AI matches your profile to the perfect role — so you apply smarter, not harder.
            </p>

            {/* Search Bar */}
            <form
              action="/find-jobs"
              method="GET"
              className="max-w-2xl mx-auto bg-background/80 dark:bg-card/80 backdrop-blur-sm p-2 rounded-2xl shadow-2xl shadow-blue-500/10 flex flex-col sm:flex-row items-center gap-2 border border-border"
            >
              <div className="flex-1 flex items-center pl-4 w-full gap-2">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <Input
                  name="search"
                  type="text"
                  placeholder="Job title, keyword or company..."
                  className="border-0 focus-visible:ring-0 shadow-none text-base bg-transparent"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02]"
              >
                Search Jobs
              </Button>
            </form>

            {/* Popular searches */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium">Popular:</span>
              {["Frontend Dev", "Data Science", "UI/UX", "Product Manager", "DevOps"].map((kw) => (
                <Link
                  key={kw}
                  href={`/find-jobs?search=${encodeURIComponent(kw)}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:underline underline-offset-2"
                >
                  {kw}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats Strip  */}
        <section className="border-y border-border bg-muted/40 dark:bg-card/40">
          <div className="container mx-auto max-w-7xl px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Browse Categories  */}
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-blue-600 border-blue-500/30 bg-blue-500/10 dark:text-blue-400">
                Explore Categories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Browse by Job Category
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Find jobs in the field you're passionate about across every industry.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map(({ label, icon: Icon, count, color }) => (
                <Link
                  key={label}
                  href={`/find-jobs?search=${encodeURIComponent(label)}`}
                  className="group flex flex-col items-center text-center p-5 rounded-2xl border border-border bg-card hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold text-foreground mb-1">{label}</span>
                  <span className="text-xs text-muted-foreground">{count}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Jobs  */}
        <section className="py-20 bg-muted/30 dark:bg-card/20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
              <div>
                <Badge variant="outline" className="mb-3 text-indigo-600 border-indigo-500/30 bg-indigo-500/10 dark:text-indigo-400">
                  Latest Openings
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Featured Jobs
                </h2>
                <p className="text-muted-foreground mt-2">
                  Hand-picked opportunities from top companies, updated daily.
                </p>
              </div>
              <Button
                variant="outline"
                className="shrink-0 gap-2 rounded-xl border-border hover:border-blue-500/40 transition-colors"
                asChild
              >
                <Link href="/find-jobs">
                  View All Jobs <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {featuredJobs.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg">No jobs posted yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {featuredJobs.map((app) => (
                  <Card
                    key={app.id}
                    className="group relative overflow-hidden border-border hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 bg-card"
                  >
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-violet-500/0 group-hover:from-blue-500/3 group-hover:to-violet-500/3 transition-all duration-500 pointer-events-none rounded-xl" />

                    <CardContent className="p-6">
                      {/* Header: Logo + Title */}
                      <div className="flex gap-4 mb-5">
                        <div className="h-14 w-14 rounded-xl bg-muted border border-border flex items-center justify-center overflow-hidden relative shrink-0 shadow-sm">
                          {app.employer.user?.avatarUrl ? (
                            <Image
                              src={app.employer.user.avatarUrl}
                              alt="Logo"
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                              <Building2 className="w-6 h-6 text-blue-500" />
                            </div>
                          )}
                        </div>

                        <div className="min-w-0">
                          <h3 className="font-bold text-base text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mb-1">
                            {app.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {app.employer?.name || "Company"}
                          </p>
                        </div>
                      </div>

                      {/* Badges row */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        <Badge
                          variant="secondary"
                          className="text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border-none"
                        >
                          {app.jobType}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs font-medium bg-muted text-muted-foreground border-none flex items-center gap-1"
                        >
                          <Clock className="w-3 h-3" />
                          {formatDistanceToNow(new Date(app.createdAt))} ago
                        </Badge>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                        <MapPin className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                        <span className="truncate">{app.location || "Remote"}</span>
                      </div>

                      {/* CTA */}
                      <Link href={`/jobs/${app.id}`}>
                        <Button
                          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:scale-[1.02] gap-2"
                        >
                          Apply Now <ChevronRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4 text-sm">
                Can&apos;t find what you&apos;re looking for?
              </p>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-xl gap-2 border-border hover:border-blue-500/40"
              >
                <Link href="/find-jobs">
                  Browse All Jobs <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── How It Works  */}
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-14">
              <Badge variant="outline" className="mb-4 text-violet-600 border-violet-500/30 bg-violet-500/10 dark:text-violet-400">
                Simple Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Get Hired in 3 Easy Steps
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Our streamlined process makes finding and landing your dream job faster than ever.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector line (desktop) */}
              <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              {steps.map(({ step, title, desc, icon: Icon }) => (
                <div key={step} className="relative text-center group">
                  {/* Step number */}
                  <div className="inline-flex flex-col items-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:shadow-blue-500/40 transition-all duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-background border-2 border-border rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600">
                        {step}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
              <Button
                size="lg"
                asChild
                className="rounded-xl px-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 hover:scale-[1.02] transition-all duration-200 gap-2"
              >
                {
                  user && user?.role === "applicant" ? (
                    <Link href="/find-jobs">
                      Get Started Free <Sparkles className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link href="/sign-up">
                      Get Started Free <Sparkles className="w-4 h-4" />
                    </Link>
                  )
                }

              </Button>
              <p className="text-muted-foreground text-xs mt-3">
                No credit card required • Free forever for candidates
              </p>
            </div>
          </div>
        </section>

        {/* ── Trust Banner  */}
        <section className="py-14 border-y border-border bg-muted/30 dark:bg-card/20 overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">4.9/5 from 12,000+ reviews</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Trusted by Thousands of Job Seekers
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Join a community of professionals who found their dream job through Job Genius AI.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 hover:scale-[1.02] transition-all"
                >
                  <Link href="/find-jobs">Find Jobs Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-xl border-border hover:border-blue-500/40"
                >
                  {
                    user && user?.role === "applicant" ? (
                      <Link href="/sign-up">Post a Job</Link>
                    ) : (
                      <Link href="/employer-dashboard">Post a Job</Link>
                    )
                  }

                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer  */}
      <footer className="bg-gray-950 dark:bg-black text-gray-400 pt-14 pb-8">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-800">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl text-white mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                Job_Genius_AI
              </div>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                AI-powered job portal connecting talented professionals with the world&apos;s best companies.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-white font-semibold text-sm mb-4">For Job Seekers</p>
              <ul className="space-y-2.5 text-sm">
                {["Browse Jobs", "Career Advice", "AI Resume Builder", "Mock Interviews", "Salary Insights"].map((l) => (
                  <li key={l}>
                    <Link href="/find-jobs" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold text-sm mb-4">For Employers</p>
              <ul className="space-y-2.5 text-sm">
                {["Post a Job", "Manage Listings", "Find Talent", "Pricing", "Help Center"].map((l) => (
                  <li key={l}>
                    <Link href="/post-job" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-gray-600">
            <p>© {new Date().getFullYear()} Job_Genius_AI. All rights reserved.</p>
            <div className="flex gap-5">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
                <Link key={l} href="#" className="hover:text-gray-400 transition-colors">{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}