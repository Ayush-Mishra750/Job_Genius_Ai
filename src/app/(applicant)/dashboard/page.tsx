//* Route Groups in Next.js are a feature introduced to help you organize routes inside the app/ directory without affecting the actual URL structure. They are created by wrapping a folder name inside parentheses, for example:
//! app/(auth)/login/page.js
//! app/(dashboard)/users/page.js

//! What Route Groups Do
// 1. Organize your project without changing URLs

//? 2. Apply different layouts to different sections
//! Route groups allow you to define multiple layouts inside a single Next.js project.
// app/(auth)/layout.js       → used for login, register pages
// app/(dashboard)/layout.js  → used for dashboard pages

// 3. Better code splitting and maintainability

import { redirect } from "next/navigation";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { ApplicantStats } from "../_components/applicant-stats";
import { ApplicantProfileStatus } from "../_components/applicant-profile-stats";
import { RecentApplications } from "../_components/recent-applicants";
import { Sparkles } from "lucide-react";


export default async function ApplicantDashboard() {
  const user = await getCurrentUser();

  // Redirect if not logged in
  if (!user) return redirect("/login");

  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-800 dark:via-blue-900 dark:to-indigo-950 p-6 sm:p-8 shadow-xl">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute bottom-[-40px] left-10 h-32 w-32 rounded-full bg-indigo-400/20 blur-2xl" />

          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="h-4 w-4 text-blue-200" />
                <span className="text-blue-200 text-sm font-medium tracking-wide uppercase">
                  Welcome back
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Hello,{" "}
                <span className="capitalize bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  {user.name}
                </span>{" "}
                👋
              </h1>
              <p className="text-blue-200 mt-1 text-sm sm:text-base">
                Here are your daily activities and job alerts
              </p>
            </div>

            <div className="flex-shrink-0 hidden sm:flex items-center justify-center h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
              <span className="text-3xl">💼</span>
            </div>
          </div>
        </div>

        {/* 1. Stats Row */}
        <ApplicantStats />

        {/* 2. Red Alert Banner (Profile Incomplete) */}
        <ApplicantProfileStatus />

        {/* 3. Recently Applied Table */}
        <RecentApplications />
      </div>
    </div>
  );
}