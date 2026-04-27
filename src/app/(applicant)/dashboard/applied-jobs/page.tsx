// import { getCurrentUser } from "@/features/auth/server/auth.queries";
// import { getAppliedJobsForApplicant } from "@/features/applicants/server/applicant.queries";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Building2, MapPin, Clock, Banknote, CheckCircle2, Briefcase, ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { getAppliedJobsForApplicant } from "../../actions/applicant.queries";
import { ApplicationStatus } from "../../../../../generated/prisma";

const statusStyles: Record<ApplicationStatus, { pill: string; dot: string; label: string }> = {
  pending:     { pill: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",  dot: "bg-yellow-400",  label: "Pending" },
  shortlisted: { pill: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",          dot: "bg-blue-400",    label: "Shortlisted" },
  interview:   { pill: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20", dot: "bg-emerald-400", label: "Interview" },
  rejected:    { pill: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",              dot: "bg-red-400",     label: "Rejected" },
  hired:       { pill: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",  dot: "bg-violet-400",  label: "Hired 🎉" },
};

export default async function AppliedJobsPage() {
  // 1. Auth Check
  const user = await getCurrentUser();
  if (!user) return redirect("/login");

  // 2. Fetch all applications for THIS specific user using SQL-like syntax
  const applications = await getAppliedJobsForApplicant(user.id);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">

        {/* ── Hero Header ── */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-900/90 dark:via-teal-900/90 dark:to-cyan-900/80" />
          {/* Glow orbs */}
          <div className="pointer-events-none absolute -top-14 -right-14 h-64 w-64 rounded-full bg-white/10 dark:bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-cyan-300/20 dark:bg-cyan-500/10 blur-3xl" />
          {/* Bottom shimmer line */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 px-3 py-1 text-[11px] font-semibold text-white uppercase tracking-widest">
                    <Sparkles className="h-3 w-3 text-cyan-200" />
                    {applications.length} {applications.length === 1 ? "application" : "applications"}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  Applied{" "}
                  <span className="bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent">
                    Jobs
                  </span>
                </h1>
                <p className="text-emerald-100/80 dark:text-emerald-200/60 mt-1.5 text-sm sm:text-base">
                  Track all your job applications in one place.
                </p>
              </div>
              <div className="hidden sm:flex items-center justify-center h-18 w-18 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 shadow-xl shrink-0 p-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Empty State ── */}
        {applications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 rounded-3xl border border-dashed border-border bg-card/50 text-center px-6 backdrop-blur-sm">
            <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mb-4 shadow-sm">
              <Building2 className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground">No applications yet</h3>
            <p className="text-muted-foreground mt-1 mb-6 max-w-xs text-sm leading-relaxed">
              You haven&apos;t applied to any jobs yet. Start exploring opportunities!
            </p>
            <Button
              asChild
              className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-500/20 transition-all hover:scale-105"
            >
              <Link href="/find-jobs">Browse Jobs</Link>
            </Button>
          </div>
        ) : (
          /* ── Jobs Grid ── */
          <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => {
              // Because we used SQL joins, the data is grouped by table alias!
              // const { JobApplication, job, employer } = app;
              // console.log(app);
              const { job } = app;
              const employer = job?.employer ?? null;
              const status = statusStyles[app.status];

              return (
                <div
                  key={job.id}
                  className="group relative flex flex-col rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.1),0_8px_32px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-blue-500/0 group-hover:bg-blue-500/8 dark:group-hover:bg-blue-500/10 blur-2xl transition-all duration-500" />

                  {/* ── Card Body ── */}
                  <div className="p-5 flex-grow space-y-4">
                    {/* Top row: logo + status badge */}
                    <div className="flex items-start justify-between gap-3">
                      {/* Company logo */}
                      <div className="h-12 w-12 relative rounded-xl border border-border bg-muted overflow-hidden flex-shrink-0 flex items-center justify-center">
                        {app?.job.employer?.user.avatarUrl ? (
                          <Image
                            src={app.job.employer?.user.avatarUrl || "/placeholder-avatar.png"}
                            alt={app.job.employer.name || "Company"}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500/20 to-violet-500/20 dark:from-blue-500/15 dark:to-violet-500/15 font-bold text-blue-500 dark:text-blue-400 text-sm">
                            {employer?.name?.slice(0, 2).toUpperCase() || "CO"}
                          </div>
                        )}
                      </div>

                      {/* Status badge */}
                      <Badge
                        variant="secondary"
                        className={`flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold border ${status.pill}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${status.dot} shrink-0`} />
                        <CheckCircle2 className="w-3 h-3" />
                        {status.label}
                      </Badge>
                    </div>

                    {/* Job title + company */}
                    <div>
                      <h3 className="font-semibold text-base text-foreground line-clamp-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium line-clamp-1 mt-0.5">
                        {employer?.name || "Unknown Company"}
                      </p>
                    </div>

                    {/* Meta info */}
                    <div className="space-y-1.5 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="line-clamp-1">{job.location || "Remote"}</span>
                      </div>
                      {(job.minSalary || job.maxSalary) && (
                        <div className="flex items-center gap-2">
                          <Banknote className="w-3.5 h-3.5 shrink-0" />
                          <span className="line-clamp-1">
                            {job.salaryCurrency} {job.minSalary} – {job.maxSalary}{" "}
                            / {job.salaryPeriod?.toLowerCase()}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>
                          Applied{" "}
                          {formatDistanceToNow(new Date(app.appliedAt), {
                            addSuffix: true,
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ── Footer Action ── */}
                  <div className="px-5 pb-5 mt-auto">
                    <div className="h-px bg-border mb-4" />
                    <Button
                      variant="ghost"
                      className="w-full justify-between rounded-xl bg-blue-500/8 dark:bg-blue-500/10 hover:bg-blue-500/15 dark:hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-medium border border-blue-500/15 transition-all group/btn"
                      asChild
                    >
                      <Link href={`/find-jobs/${app.job.id}`}>
                        View Job Details
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}