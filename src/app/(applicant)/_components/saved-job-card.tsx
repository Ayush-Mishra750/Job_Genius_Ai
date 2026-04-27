"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UnsaveButton } from "@/components/general/savedbutton";
import {
  MapPin,
  Briefcase,
  Building2,
  Clock,
  ExternalLink,
  Banknote,
} from "lucide-react";

interface savedProps {
  job: {
    id: number;
    title: string;
    description: string;
    minSalary: number | null;
    maxSalary: number | null;
    salaryCurrency: string | null;
    salaryPeriod: string | null;
    location: string | null;
    jobType: string | null;
    jobLevel: string | null;
    workType: string | null;
    createdAt: Date;
    companyName: string | null;
  };
}

export default function SavedJobCard({ job }: savedProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">

      {/* Left accent bar on hover */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Hover glow */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-blue-400 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 blur-2xl transition-all duration-500" />

      {/* ── Main Content ── */}
      <div className="flex-1 p-5 sm:p-6 space-y-4">

        {/* Company + Title */}
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 shrink-0" />
            {job.companyName || "Verified Employer"}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
            {job.title}
          </h3>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-500 dark:text-slate-400">
          {job.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400 dark:text-slate-500" />
              {job.location}
            </div>
          )}
          {job.jobType && (
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 shrink-0 text-slate-400 dark:text-slate-500" />
              {job.jobType}
            </div>
          )}
          {(job.minSalary || job.maxSalary) && (
            <div className="flex items-center gap-1.5">
              <Banknote className="w-3.5 h-3.5 shrink-0 text-slate-400 dark:text-slate-500" />
              {job.salaryCurrency} {job.minSalary} – {job.maxSalary}
              {job.salaryPeriod && (
                <span className="text-slate-400 dark:text-slate-500">
                  &nbsp;/ {job.salaryPeriod.toLowerCase()}
                </span>
              )}
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 shrink-0 text-slate-400 dark:text-slate-500" />
            {new Date(job.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>

        {/* Description */}
        <div
          className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: job.description ?? "" }}
        />

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {job.jobLevel && (
            <Badge
              variant="secondary"
              className="rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 font-medium text-[11px] px-2.5 py-0.5"
            >
              {job.jobLevel}
            </Badge>
          )}
          {job.workType && (
            <Badge
              variant="outline"
              className="rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium text-[11px] px-2.5 py-0.5 uppercase tracking-tight"
            >
              {job.workType}
            </Badge>
          )}
        </div>
      </div>

      {/* ── Action Strip (always visible, full-width buttons) ── */}
      <div className="border-t border-slate-100 dark:border-slate-800 px-5 py-4 sm:px-6 flex flex-col sm:flex-row gap-2">
        {/* View Details */}
        <Link href={`/find-jobs/${job.id}`} className="flex-1">
          <Button
            variant="ghost"
            className="w-full justify-center gap-2 rounded-xl
              bg-blue-50 hover:bg-blue-100
              dark:bg-blue-950 dark:hover:bg-blue-900
              text-blue-700 dark:text-blue-300
              border border-blue-200 dark:border-blue-700
              font-semibold text-sm transition-all duration-200"
          >
            View Details
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </Button>
        </Link>

        {/* Unsave */}
        <div className="flex-1">
          <UnsaveButton jobId={job.id} />
        </div>
      </div>
    </div>
  );
}