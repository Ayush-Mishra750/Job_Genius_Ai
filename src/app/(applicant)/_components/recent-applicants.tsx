import Link from "next/link";
import Image from "next/image";
import { MapPin, CheckCircle2, ArrowRight, Building2, Calendar } from "lucide-react";
import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { redirect } from "next/navigation";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { getAppliedJobsForApplicant } from "../actions/applicant.queries";

export async function RecentApplications() {
  const user = await getCurrentUser();
  if (!user) return redirect("/login");

  const allApplications = await getAppliedJobsForApplicant(user.id);

  const recentApplications = allApplications.slice(0, 5);

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-5 sm:px-6 py-4 sm:py-5 bg-muted/30">
        <div>
          <h3 className="font-bold text-base sm:text-lg text-foreground">
            Recently Applied
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Your last {recentApplications.length} application{recentApplications.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link
          href="/dashboard/applied-jobs"
          className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
        >
          View all
          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {recentApplications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
          <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
            <Building2 className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="font-semibold text-foreground">No applications yet</p>
          <p className="text-sm text-muted-foreground mt-1">
            You haven&apos;t applied to any jobs yet.
          </p>
          <Link href="/find-jobs" className="mt-4">
            <Button size="sm" className="rounded-xl">
              Browse Jobs
            </Button>
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20 hover:bg-muted/20 border-border">
                  <TableHead className="w-[45%] pl-5 sm:pl-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Job
                  </TableHead>
                  <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Date Applied
                  </TableHead>
                  <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Status
                  </TableHead>
                  <TableHead className="text-right pr-5 sm:pr-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentApplications.map((app) => {
                  const { employer } = app.job;

                  return (
                    <TableRow
                      key={app.id}
                      className="hover:bg-muted/30 dark:hover:bg-muted/20 border-border transition-colors"
                    >
                      <TableCell className="pl-5 sm:pl-6 py-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-xs font-bold text-muted-foreground overflow-hidden border border-border">
                            {employer?.user.avatarUrl ? (
                              <Image
                                src={employer.user.avatarUrl}
                                alt={employer.name || "Company"}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <Building2 className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span className="font-semibold text-sm text-foreground line-clamp-1">
                                {app.job.title}
                              </span>
                              <Badge className="rounded-full px-2 py-0.5 text-[10px] font-medium border-0 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 hover:bg-blue-100 whitespace-nowrap">
                                {app.job.jobType}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3 shrink-0" />
                                {app.job.location || "Remote"}
                              </span>
                              {(app.job.minSalary || app.job.maxSalary) && (
                                <span className="font-medium text-foreground/70">
                                  {app.job.salaryCurrency} {app.job.minSalary}–
                                  {app.job.maxSalary}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell className="text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 shrink-0" />
                          {format(new Date(app.appliedAt), "MMM d, yyyy")}
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                          <CheckCircle2 className="h-4 w-4" />
                          Applied
                        </div>
                      </TableCell>

                      <TableCell className="text-right pr-5 sm:pr-6">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900 font-medium rounded-xl transition-all hover:scale-105"
                          asChild
                        >
                          <Link href={`/find-jobs/${app.job.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden divide-y divide-border">
            {recentApplications.map((app) => {
              const { employer } = app.job;
              return (
                <div key={app.id} className="p-4 hover:bg-muted/20 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted overflow-hidden border border-border">
                      {employer?.user.avatarUrl ? (
                        <Image
                          src={employer.user.avatarUrl}
                          alt={employer.name || "Company"}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <Building2 className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-semibold text-sm text-foreground line-clamp-2">
                          {app.job.title}
                        </p>
                        <Badge className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium border-0 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 hover:bg-blue-100">
                          {app.job.jobType}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                        <MapPin className="h-3 w-3 shrink-0" />
                        {app.job.location || "Remote"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium text-xs">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Applied
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(app.appliedAt), "MMM d, yyyy")}
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900 font-medium rounded-xl text-xs h-8 px-3"
                      asChild
                    >
                      <Link href={`/find-jobs/${app.job.id}`}>
                        Details
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}