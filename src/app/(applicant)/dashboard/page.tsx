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


export default async function ApplicantDashboard() {
  const user = await getCurrentUser();

  // Redirect if not logged in
  if (!user) return redirect("/login");


  

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold tracking-tight">
          Hello, <span className="capitalize text-2xl  text-blue-600">{user.name}</span>
        </h1>
        <p className="text-gray-500">
          Here is your daily activities and job alerts
        </p>
      </div>

      {/* 1. Stats Row */}
      <ApplicantStats />

      {/* 2. Red Alert Banner (Profile Incomplete) */}
      <ApplicantProfileStatus />

      {/* 3. Recently Applied Table */}
      <RecentApplications />
    </div>
  );
}