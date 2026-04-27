import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns"; // npm i date-fns
import { MapPin, Clock, Briefcase, Banknote, ArrowRight } from "lucide-react";
import { JobCardType } from "@/app/_actions/getalljobs";
// import { JobCardType } from "../server/jobs.queries"; // Import the inferred type

interface JobCardProps {
  job: JobCardType;
}

export const JobCard = ({ job }: JobCardProps) => {
  // Helper to format salary safely
  const formatSalary = () => {
    if (!job.minSalary || !job.maxSalary) return "Not Disclosed";
    return `${job.salaryCurrency} ${job.minSalary.toLocaleString()} - ${job.maxSalary.toLocaleString()}`;
  };

  return (
    <Link
      href={`/find-jobs/${job.id}`}
      className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 overflow-hidden"
    >
      {/* Top-right glow on hover */}
      <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-blue-500/0 group-hover:bg-blue-500/8 dark:group-hover:bg-blue-500/10 blur-2xl transition-all duration-500" />

      {/* Header: Logo & Title */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3 min-w-0">
          {/* Company Logo */}
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-border bg-muted">
            {job.companyLogo ? (
              <Image
                src={job.companyLogo}
                alt={job.companyName || "Company Logo"}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500/20 to-violet-500/20 dark:from-blue-500/15 dark:to-violet-500/15 font-bold text-blue-500 dark:text-blue-400 text-sm">
                {job.companyName?.slice(0, 2).toUpperCase() || "CO"}
              </div>
            )}
          </div>

          <div className="min-w-0">
            <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors truncate max-w-[180px] sm:max-w-[210px]">
              {job.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">
              {job.companyName}
            </p>
          </div>
        </div>

        {/* Arrow */}
        <div className="shrink-0 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 mt-1">
          <div className="p-1.5 rounded-lg bg-blue-500/10 dark:bg-blue-500/15">
            <ArrowRight className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-1.5 text-xs">
        {/* Location — neutral */}
        <div className="flex items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1 text-muted-foreground font-medium">
          <MapPin className="h-3 w-3 shrink-0" />
          <span className="truncate max-w-[100px]">{job.location || "Remote"}</span>
        </div>
        {/* Work Type — blue */}
        <div className="flex items-center gap-1.5 rounded-lg bg-blue-500/10 dark:bg-blue-500/15 px-2.5 py-1 text-blue-600 dark:text-blue-400 font-medium border border-blue-500/10 dark:border-blue-500/15">
          <Briefcase className="h-3 w-3 shrink-0" />
          {job.workType?.replace("-", " ").toUpperCase() || "FULL TIME"}
        </div>
        {/* Salary — emerald */}
        <div className="flex items-center gap-1.5 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/10 px-2.5 py-1 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-500/10 dark:border-emerald-500/10">
          <Banknote className="h-3 w-3 shrink-0" />
          <span className="truncate max-w-[120px]">{formatSalary()}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3 shrink-0" />
          {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
        </span>

        <span className="font-semibold text-blue-500 dark:text-blue-400 group-hover:underline flex items-center gap-1 transition-colors">
          View Details
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
};