import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { getSavedJobs } from "../../actions/savedjobaction";
import SavedJobCard from "../../_components/saved-job-card";
import Link from "next/link";
import { Bookmark, Sparkles, Search, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function SavedJobsPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const savedJobs = await getSavedJobs(user.id);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">

        {/* ── Hero Header ── */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Layered gradient - Amber/Orange/Rose theme for Saved */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-rose-600 dark:from-amber-900/40 dark:via-orange-900/40 dark:to-rose-900/40" />

          {/* Glow orbs */}
          <div className="pointer-events-none absolute -top-14 -right-14 h-64 w-64 rounded-full bg-white/10 dark:bg-amber-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-rose-300/20 dark:bg-rose-500/10 blur-3xl" />

          {/* Bottom shimmer line */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 px-3 py-1 text-[11px] font-semibold text-white uppercase tracking-widest">
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
                <p className="text-orange-100/80 dark:text-orange-200/60 mt-1.5 text-sm sm:text-base">
                  Jobs you&apos;ve bookmarked — revisit anytime and apply when ready.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ── Content ── */}
        {savedJobs.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-6">
            {/* Result count bar */}
            <div className="flex items-center justify-between px-1">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{savedJobs.length}</span> {savedJobs.length === 1 ? "saved job" : "saved jobs"}
              </p>
            </div>

            {/* Cards grid (3 columns like Applied Jobs) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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
                    companyName: item.job.employer?.name ?? null,
                    companyLogo: item.job.employer?.user?.avatarUrl ?? null
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 rounded-3xl border border-dashed border-border bg-card/50 text-center px-6 backdrop-blur-sm">
      <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mb-4 shadow-sm">
        <Bookmark className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-bold text-foreground">No saved jobs yet</h3>
      <p className="text-muted-foreground mt-1 mb-6 max-w-xs text-sm leading-relaxed">
        When you find a job you like, hit the bookmark icon to save it here for later.
      </p>
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
  );
}