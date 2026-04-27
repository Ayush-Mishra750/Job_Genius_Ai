import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SaveJobButton from "@/components/general/savedbutton";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import {
  checkIfApplied,
  getJobIDDetails,
} from "@/app/(applicant)/_components/find-job-components";
import { formatJobDescription } from "@/app/(applicant)/_utils/json-to-text";
import { ApplyJobModal } from "@/app/(applicant)/_utils/apply-job-modal";
import { prisma } from "@/lib/prisma";
import { ArrowLeft, Building2, Clock, IndianRupee, MapPin } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await getCurrentUser();
  const { id } = await params;
  const jobId = Number(id);

  if (!Number.isFinite(jobId)) {
    redirect("/find-jobs");
  }

  const { status, data: job } = await getJobIDDetails(jobId);
  if (status === "ERROR" || !job) {
    redirect("/find-jobs");
  }

  const isApplied = user ? await checkIfApplied(jobId) : false;

  const savedJob = user
    ? await prisma.savedJob.findFirst({
      where: {
        userId: user.id,
        jobId: job.id,
      },
      select: { id: true },
    })
    : null;

  const isSaved = Boolean(savedJob);

  const userResumes = user
    ? await prisma.resume.findMany({
      where: { applicantId: user.id },
      select: {
        id: true,
        fileName: true,
      },
    })
    : [];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#121212] dark:text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-[#121212]">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/find-jobs">
            <Button
              variant="ghost"
              className="gap-2 text-slate-700 hover:text-primary dark:text-slate-300"
            >
              <ArrowLeft size={18} />
              <span className="hidden font-medium sm:inline">Back to Jobs</span>
            </Button>
          </Link>

          <SaveJobButton jobId={job.id} initialSaved={isSaved} />
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-12 lg:px-8">
        <section className="space-y-6 lg:col-span-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Building2 size={16} />
              Verified Employer
            </div>

            <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
                {job.jobType}
              </Badge>
              <Badge variant="outline" className="dark:border-slate-700 dark:text-slate-300">
                {job.workType}
              </Badge>
              <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                {job.jobLevel}
              </Badge>
            </div>
          </div>

          <Card className="border-slate-200 shadow-sm dark:border-slate-800 dark:bg-[#121212]">
            <CardContent className="p-5 sm:p-8 lg:p-10">
              <h2 className="mb-5 flex items-center gap-2 text-xl font-bold">
                <span className="h-6 w-1.5 rounded-full bg-primary" />
                Detailed Description
              </h2>
              <div
                className="prose prose-sm max-w-none break-words prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 dark:prose-invert sm:prose-base lg:prose-lg"
                dangerouslySetInnerHTML={{
                  __html: formatJobDescription(job.description),
                }}
              />
            </CardContent>
          </Card>

          {job.tags ? (
            <Card className="border-slate-200 shadow-sm dark:border-slate-800 dark:bg-[#121212]">
              <CardContent className="p-5 sm:p-8 lg:p-10">
                <h2 className="mb-5 text-xl font-bold">Skills & Tech Stack</h2>
                <div className="flex flex-wrap gap-2.5">
                  {job.tags.split(",").map((tag) => (
                    <Badge
                      key={tag}
                      className="rounded-md bg-blue-100 px-3 py-1 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300"
                    >
                      {tag.trim()}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : null}
        </section>

        <aside className="space-y-6 lg:col-span-4">
          <Card className="overflow-hidden border-slate-200 shadow-lg dark:border-slate-800 dark:bg-[#121212] lg:sticky lg:top-24">
            <div className="h-1.5 w-full bg-primary" />
            <CardContent className="space-y-5 p-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:bg-[#121212]">
                Job Overview
              </h3>

              <InfoRow
                icon={<IndianRupee size={18} className="text-primary" />}
                label="Salary"
                value={`${job.minSalary?.toLocaleString() ?? "Not specified"} - ${job.maxSalary?.toLocaleString() ?? "Not specified"}`}
              />

              <InfoRow
                icon={<MapPin size={18} className="text-primary" />}
                label="Location"
                value={job.location || "Remote / Flexible"}
              />

              <InfoRow
                icon={<Clock size={18} className="text-primary" />}
                label="Job Type"
                value={job.jobType}
              />

              <div className="pt-2">
                {user ? (
                  <ApplyJobModal
                    jobId={job.id}
                    jobTitle={job.title}
                    hasApplied={isApplied}
                    resumes={userResumes}
                  />
                ) : (
                  <Button asChild className="w-full">
                    <Link href="/login">Login to Apply</Link>
                  </Button>
                )}
              </div>

              <div className="space-y-1 border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <div className="flex justify-between gap-4">
                  <span>Posted</span>
                  <span>{new Date(job.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Updated</span>
                  <span>{new Date(job.updatedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5">{icon}</div>
      <div>
        <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
        <p className="font-semibold text-slate-900 dark:text-slate-100">{value}</p>
      </div>
    </div>
  );
}