"use client";

import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { UnsaveButton } from "@/components/general/savedbutton";
import {
  MapPin,
  Clock,
  Banknote,
  ArrowRight,
  Building2,
} from "lucide-react";

interface SavedJobCardProps {
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
    companyLogo: string | null;
  };
}

export default function SavedJobCard({ job }: SavedJobCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.1),0_8px_32px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 overflow-hidden">
      
      {/* Hover glow */}
      <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-blue-500/0 group-hover:bg-blue-500/8 dark:group-hover:bg-blue-500/10 blur-2xl transition-all duration-500" />

      {/* ── Card Body ── */}
      <div className="p-5 flex-grow space-y-4">
        
        {/* Top row: logo + Unsave button */}
        <div className="flex items-start justify-between gap-3">
          {/* Company logo */}
          <div className="h-12 w-12 relative rounded-xl border border-border bg-muted overflow-hidden flex-shrink-0 flex items-center justify-center">
            {job.companyLogo ? (
              <Image
                src={job.companyLogo}
                alt={job.companyName || "Company"}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-500/20 to-orange-500/20 dark:from-amber-500/15 dark:to-orange-500/15 font-bold text-amber-600 dark:text-amber-400 text-sm uppercase">
                {job.companyName?.slice(0, 2).toUpperCase() || "CO"}
              </div>
            )}
          </div>

          {/* Unsave action (top-right) */}
          <div className="w-28 shrink-0">
            <UnsaveButton jobId={job.id} />
          </div>
        </div>

        {/* Job title + company */}
        <div className="space-y-1">
          <h3 className="font-bold text-base sm:text-lg text-foreground line-clamp-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {job.title}
          </h3>
          <div className="flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 font-medium line-clamp-1">
            <Building2 className="w-3.5 h-3.5 shrink-0" />
            {job.companyName || "Verified Employer"}
          </div>
        </div>

        {/* Meta info */}
        <div className="grid grid-cols-1 gap-1.5 text-xs text-muted-foreground pt-1">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
            <span className="line-clamp-1">{job.location || "Remote"}</span>
          </div>
          
          {(job.minSalary || job.maxSalary) && (
            <div className="flex items-center gap-2">
              <Banknote className="w-3.5 h-3.5 shrink-0 text-slate-400" />
              <span className="line-clamp-1 font-medium">
                {job.salaryCurrency} {job.minSalary?.toLocaleString()} – {job.maxSalary?.toLocaleString()}
                {job.salaryPeriod && ` / ${job.salaryPeriod.toLowerCase()}`}
              </span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 shrink-0 text-slate-400" />
            <span>
              Saved {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
            </span>
          </div>
        </div>
      </div>

      {/* ── Footer Action ── */}
      <div className="px-5 pb-5 mt-auto">
        <div className="h-px bg-border mb-4" />
        <Button
          variant="ghost"
          className="w-full justify-between rounded-xl bg-blue-500/8 dark:bg-blue-500/10 hover:bg-blue-500/15 dark:hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold border border-blue-500/15 transition-all group/btn h-11"
          asChild
        >
          <Link href={`/find-jobs/${job.id}`}>
            View & Apply Now
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}