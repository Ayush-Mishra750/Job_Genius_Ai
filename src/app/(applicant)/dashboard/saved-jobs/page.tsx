import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { getSavedJobs } from "../../actions/savedjobaction";
import SavedJobCard from "../../_components/saved-job-card";
import Link from "next/link";
import { Bookmark, Sparkles, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function SavedJobsPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const savedJobs = await getSavedJobs(user.id);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">

        {/* ── Hero Header ── */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Layered gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 dark:from-amber-900/90 dark:via-orange-900/90 dark:to-rose-900/80" />
          {/* Glow orbs */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-white/10 dark:bg-orange-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-52 w-52 rounded-full bg-rose-300/20 dark:bg-rose-500/10 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/3 h-32 w-32 rounded-full bg-amber-300/10 blur-2xl" />
          {/* Bottom shimmer line */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                {/* Count pill */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 px-3 py-1 text-[11px] font-bold text-white uppercase tracking-widest">
                    <Sparkles className="h-3 w-3 text-amber-200" />
                    {savedJobs.length} {savedJobs.length === 1 ? "saved job" : "saved jobs"}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  Saved{" "}
                  <span className="bg-gradient-to-r from-amber-200 via-orange-200 to-rose-200 bg-clip-text text-transparent">
                    Jobs
                  </span>
                </h1>
                <p className="text-orange-100/80 dark:text-orange-200/60 mt-1.5 text-sm sm:text-base max-w-md">
                  Jobs you&apos;ve bookmarked for later — revisit anytime and apply when ready.
                </p>
              </div>

              {/* Icon tile */}
              <div className="hidden sm:flex items-center justify-center h-20 w-20 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 shadow-xl shrink-0">
                <Bookmark className="h-9 w-9 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        {savedJobs.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {/* Result count bar */}
            <div className="flex items-center justify-between px-1">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {savedJobs.length}
                </span>{" "}
                {savedJobs.length === 1 ? "saved job" : "saved jobs"}
              </p>
            </div>

            {/* Cards list */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {savedJobs.map((item) => (
                <SavedJobCard
                  key={item.job.id}
                  job={{
                    id: item.job.id,
                    title: item.job.title,
                    description: item.job.description,
                    minSalary: item.job.minSalary,
                    maxSalary: item.job.maxSalary,
                    salaryCurrency: item.job.salaryCurrency,
                    salaryPeriod: item.job.salaryPeriod,
                    location: item.job.location,
                    jobType: item.job.jobType,
                    jobLevel: item.job.jobLevel,
                    workType: item.job.workType,
                    createdAt: item.job.createdAt,
                    companyName: item.job.employer?.name ?? null
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 rounded-3xl border border-dashed border-border bg-card/40 text-center px-6">
      {/* Icon with ring */}
      <div className="relative mb-6">
        <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-amber-500/15 to-orange-500/10 dark:from-amber-500/10 dark:to-orange-500/8 flex items-center justify-center border border-amber-500/20 shadow-sm">
          <Bookmark className="w-9 h-9 text-amber-500 dark:text-amber-400" />
        </div>
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-3xl bg-amber-500/5 blur-xl" />
      </div>

      <p className="text-xl font-bold text-foreground mb-1">No saved jobs yet</p>
      <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
        When you find a job you like, hit the bookmark icon to save it here for later.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          asChild
          className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-500/20 transition-all hover:scale-105 px-6"
        >
          <Link href="/find-jobs">
            <Search className="w-4 h-4 mr-2" />
            Browse Jobs
          </Link>
        </Button>
      </div>
    </div>
  );
}