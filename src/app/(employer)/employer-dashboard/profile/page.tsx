
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { htmlToText } from "@/components/general/htmlTotext";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { getCurrentEmployerDetails } from "../../_components/get_employer_details";
import {
  Building2,
  Users,
  Calendar,
  Globe,
  MapPin,
  Mail,
  User,
  ShieldCheck,
  Pencil,
  ExternalLink,
  Briefcase,
  History
} from "lucide-react";
import React from "react";


export default async function EmployerProfilePage() {
  const user = await getCurrentEmployerDetails();

  if (!user) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center p-6 text-center">
        <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/20">
          <ShieldCheck className="h-10 w-10 text-red-600 dark:text-red-400" />
        </div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight">No profile found</h2>
        <p className="mt-2 text-muted-foreground">We couldn't find your employer profile information.</p>
      </div>
    );
  }

  if (user?.role !== "employer") throw new Error("unauthorized");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12 space-y-8 sm:space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">

      {/* ======================
          BANNER
      ======================= */}
      <div className="group relative w-full h-48 sm:h-64 rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
        <Image
          src={user.employerDetails.bannerImageUrl || "/placeholder-banner.jpg"}
          alt="Company Banner"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent dark:from-background/80" />
      </div>

      {/* Profile Header Area */}
      <div className="relative -mt-16 sm:-mt-20 px-4 sm:px-8 flex flex-col md:flex-row gap-6 items-center md:items-end">
        <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-background shadow-2xl ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-500 hover:scale-105">
          <AvatarImage src={user.avatarUrl || "/avatar.png"} className="object-cover" />
          <AvatarFallback className="text-2xl font-bold bg-muted">
            {user.employerDetails.name?.slice(0, 2).toUpperCase() || "EMP"}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                {user.employerDetails.name}
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                <Badge variant="secondary" className="px-3 py-1 font-semibold border border-transparent dark:border-white/5">
                  <Building2 className="mr-1.5 h-3.5 w-3.5 opacity-70" />
                  {user.employerDetails.organizationType || "Organization"}
                </Badge>
                <Badge variant="outline" className="px-3 py-1 font-semibold bg-primary/5 dark:bg-white/5 border-primary/10 dark:border-white/10">
                  <Users className="mr-1.5 h-3.5 w-3.5 opacity-70" />
                  {user.employerDetails.teamSize || "N/A"} Employees
                </Badge>
                <Badge
                  className={`px-3 py-1 font-bold shadow-sm ${user.isProfileCompleted
                      ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20"
                    }`}
                >
                  <div className={`mr-2 h-1.5 w-1.5 rounded-full ${user.isProfileCompleted ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`} />
                  {user.isProfileCompleted ? "Verified Profile" : "Incomplete Profile"}
                </Badge>
              </div>
            </div>

            <Link href="/employer-dashboard/settings">
              <Button className="h-11 px-8 rounded-full shadow-lg shadow-primary/20 transition-all hover:shadow-xl active:scale-95 font-bold">
                <Pencil className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Separator className="opacity-50 dark:opacity-20" />

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 gap-8 sm:gap-12">

        {/* Overview Card */}
        <Card className="rounded-3xl border-border/50 bg-white dark:bg-card/40 dark:backdrop-blur-xl shadow-lg shadow-black/[0.03] dark:shadow-none transition-all hover:shadow-xl hover:ring-1 hover:ring-primary/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2.5">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">Company Overview</CardTitle>
            </div>
          </CardHeader>
          <Separator className="mx-6 opacity-50 dark:opacity-20" />
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            <Detail icon={<Building2 />} label="Organization Type" value={user.employerDetails.organizationType || ""} />
            <Detail icon={<Users />} label="Team Size" value={user.employerDetails.teamSize || ""} />
            <Detail icon={<Calendar />} label="Founded" value={user.employerDetails.yearOfEstablishment || ""} />
            <Detail icon={<Globe />} label="Website" value={user.employerDetails.websiteUrl || ""} isLink />
            <Detail icon={<MapPin />} label="Location" value={user.employerDetails.location || ""} />
          </CardContent>
        </Card>

        {/* About Section */}
        <Card className="rounded-3xl border-border/50 bg-white dark:bg-card/40 dark:backdrop-blur-xl shadow-lg shadow-black/[0.03] dark:shadow-none transition-all hover:shadow-xl hover:ring-1 hover:ring-primary/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2.5">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">About Company</CardTitle>
            </div>
          </CardHeader>
          <Separator className="mx-6 opacity-50 dark:opacity-20" />
          <CardContent className="pt-8">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground/90 font-medium">
              {htmlToText(user.employerDetails.description || "") || "Add a detailed description in settings to help candidates understand your mission and culture."}
            </p>
          </CardContent>
        </Card>

        {/* Personal Info */}
        <Card className="rounded-3xl border-border/50 bg-white dark:bg-card/40 dark:backdrop-blur-xl shadow-lg shadow-black/[0.03] dark:shadow-none transition-all hover:shadow-md hover:ring-1 hover:ring-primary/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2.5">
                <User className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">Employer Details</CardTitle>
            </div>
          </CardHeader>
          <Separator className="mx-6 opacity-50 dark:opacity-20" />
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
            <Detail icon={<User />} label="Full Name" value={user.name} />
            <Detail icon={<ShieldCheck />} label="Username" value={user.userName} />
            <Detail icon={<Mail />} label="Email Address" value={user.email} />
            <Detail icon={<History />} label="Joined Date" value={user.createdAt.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


function Detail({ label, value, isLink = false, icon = null }: { label: string, value?: string | number, isLink?: boolean, icon?: React.ReactNode }) {
  return (
    <div className="space-y-2 group">
      <div className="flex items-center gap-2 text-muted-foreground/70">
        <div className="transition-transform group-hover:scale-110">
          {icon && React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement, { className: "w-4 h-4" }) : null}
        </div>
        <p className="text-xs uppercase tracking-widest font-bold">
          {label}
        </p>
      </div>

      {isLink && value ? (
        <a
          href={value.toString().startsWith('http') ? value.toString() : `https://${value}`}
          target="_blank"
          className="flex items-center text-sm font-semibold text-primary hover:underline"
        >
          {value}
          <ExternalLink className="ml-1.5 h-3 w-3" />
        </a>
      ) : (
        <p className="text-sm font-semibold text-foreground/90">
          {value || "N/A"}
        </p>
      )}
    </div>
  );
}