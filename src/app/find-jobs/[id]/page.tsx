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
import {
  ArrowLeft,
  Building2,
  Clock,
  IndianRupee,
  MapPin,
  Briefcase,
  Calendar,
  Zap,
  CheckCircle2,
  TrendingUp,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
    <div className="min-h-screen bg-white transition-colors duration-500 dark:bg-[#0f0f0f] relative overflow-hidden">

      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 blur-[120px] pointer-events-none" />

      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">

        {/* Navigation & Header */}
        <div className="flex flex-col gap-12">

          <div className="flex items-center justify-between">
            <Link href="/find-jobs">
              <Button
                variant="ghost"
                size="sm"
                className="group gap-2 rounded-2xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-black text-xs uppercase tracking-widest">Discover Jobs</span>
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="hidden sm:flex rounded-full px-4 py-1 border-emerald-500/20 bg-emerald-500/5 text-emerald-500 font-bold text-[10px] uppercase tracking-wider">
                <CheckCircle2 size={12} className="mr-1.5" /> Actively Hiring
              </Badge>
              <SaveJobButton jobId={job.id} initialSaved={isSaved} />
            </div>
          </div>

          {/* Hero Section */}
          <div className="space-y-8">
            <div className="space-y-6 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-primary/80">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Verified Opportunity</span>
              </div>

              <h1 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-6xl lg:text-7xl leading-[1.05] break-words">
                {job.title}
              </h1>

              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
                <Badge className="rounded-xl bg-slate-100 dark:bg-[#1a1a1a] border-none px-5 py-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                  {job.jobType}
                </Badge>
                <Badge className="rounded-xl bg-slate-100 dark:bg-[#1a1a1a] border-none px-5 py-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                  {job.workType}
                </Badge>
                <Badge className="rounded-xl bg-primary/10 border-none px-5 py-2 text-xs font-bold text-primary">
                  {job.jobLevel}
                </Badge>
              </div>
            </div>

            {/* Premium Data Action Bar - Horizontal slider on mobile */}
            <div className="relative group">
              <div className="flex sm:grid sm:grid-cols-3 gap-4 border-y border-slate-100 dark:border-[#1a1a1a] py-10 overflow-x-auto sm:overflow-x-visible no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="min-w-[280px] sm:min-w-0 flex-1">
                  <DataCard
                    icon={<IndianRupee className="text-primary" size={24} />}
                    label="Annual Compensation"
                    value={job.minSalary ? `₹${(job.minSalary / 100000).toFixed(1)}L - ₹${(job.maxSalary! / 100000).toFixed(1)}L` : "Competitive"}
                    subValue="Based on experience"
                  />
                </div>
                <div className="min-w-[280px] sm:min-w-0 flex-1">
                  <DataCard
                    icon={<MapPin className="text-primary" size={24} />}
                    label="Primary Location"
                    value={job.location || "Remote"}
                    subValue={job.workType || "Full-time"}
                  />
                </div>
                <div className="min-w-[280px] sm:min-w-0 flex-1">
                  <DataCard
                    icon={<TrendingUp className="text-primary" size={24} />}
                    label="Growth Potential"
                    value="High"
                    subValue={`Posted ${new Date(job.createdAt).toLocaleDateString()}`}
                  />
                </div>
              </div>
              {/* Optional mobile indicator */}
              <div className="flex sm:hidden justify-center gap-1 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/10" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/10" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 pb-24">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-16 max-w-full overflow-hidden">

              {/* Job Description section */}
              <section className="space-y-8 max-w-full">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white shrink-0">
                    The Opportunity
                  </h2>
                  <div className="h-px w-full bg-slate-100 dark:bg-[#1a1a1a]" />
                </div>

                <div
                  className={cn(
                    "prose prose-slate max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:font-medium",
                    "prose-p:text-slate-600 dark:prose-p:text-slate-400",
                    "prose-li:text-slate-600 dark:prose-li:text-slate-400",
                    "prose-headings:text-slate-900 dark:prose-headings:text-white prose-headings:font-black",
                    "dark:prose-invert overflow-x-auto break-words"
                  )}
                  dangerouslySetInnerHTML={{
                    __html: formatJobDescription(job.description),
                  }}
                />
              </section>

              {/* Skills section */}
              {job.tags && (
                <section className="space-y-8">
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white shrink-0">
                      Ideal Tech Stack
                    </h2>
                    <div className="h-px w-full bg-slate-100 dark:bg-[#1a1a1a]" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {job.tags.split(",").map((tag) => (
                      <Badge
                        key={tag}
                        className="rounded-2xl border-2 border-slate-100 bg-transparent px-6 py-3 text-sm font-bold text-slate-600 transition-all hover:border-primary hover:text-primary hover:bg-primary/5 dark:border-[#1a1a1a] dark:text-slate-300 dark:hover:border-primary whitespace-nowrap"
                      >
                        {tag.trim()}
                      </Badge>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Sidebar Apply Column */}
            <div className="lg:col-span-4">
              <div className="sticky top-12 space-y-6">
                <Card className="rounded-[3rem] border border-slate-100 bg-slate-50/30 p-2 dark:border-[#1a1a1a] dark:bg-[#121212]/50 backdrop-blur-xl max-w-full">
                  <CardContent className="p-6 sm:p-8 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
                        <Briefcase size={14} /> Application Portal
                      </div>
                      <h3 className="text-2xl font-black tracking-tight dark:text-white">Start your journey</h3>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                        Join a fast-growing team of innovators. We review every application carefully.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {user ? (
                        <ApplyJobModal
                          jobId={job.id}
                          jobTitle={job.title}
                          hasApplied={isApplied}
                          resumes={userResumes}
                        />
                      ) : (
                        <Button asChild className="w-full h-16 rounded-[2rem] font-black text-lg shadow-2xl shadow-primary/30 transition-all active:scale-95 group">
                          <Link href="/login" className="flex items-center justify-center gap-2">
                            Apply for Role <ArrowLeft size={20} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      )}

                      <div className="pt-4 border-t border-slate-100 dark:border-[#1a1a1a] flex flex-col gap-3">
                        <BenefitItem icon={<CheckCircle2 size={16} />} text="Health insurance coverage" />
                        <BenefitItem icon={<CheckCircle2 size={16} />} text="Flexible remote policy" />
                        <BenefitItem icon={<CheckCircle2 size={16} />} text="Professional development fund" />
                      </div>
                    </div>
                  </CardContent>
                </Card>


              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function DataCard({ icon, label, value, subValue }: { icon: ReactNode; label: string; value: string; subValue: string }) {
  return (
    <div className="flex flex-col h-full gap-4 p-5 sm:p-6 rounded-[2.5rem] bg-slate-50/50 dark:bg-[#121212]/30 border border-transparent hover:border-primary/20 transition-all group">
      <div className="h-12 w-12 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-sm border border-slate-100 dark:border-none flex items-center justify-center transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
        <p className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight break-words">{value}</p>
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">{subValue}</p>
      </div>
    </div>
  );
}

function BenefitItem({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
      <div className="text-emerald-500">{icon}</div>
      <span className="text-xs font-bold">{text}</span>
    </div>
  );
}
