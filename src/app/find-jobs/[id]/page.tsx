import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Clock,
  IndianRupee,
  MapPin,
  ArrowLeft,
  Calendar,
  Share2,
  Building2,
} from "lucide-react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import {
  checkIfApplied,
  getJobIDDetails,
} from "@/app/(applicant)/_components/find-job-components";
import { prisma } from "@/lib/prisma";
import SaveJobButton from "@/components/general/savedbutton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatJobDescription } from "@/app/(applicant)/_utils/json-to-text";
import { ApplyJobModal } from "@/app/(applicant)/_utils/apply-job-modal";


export default async function JobDetailsPage({
  params,
}: {
  params: { id: number };
}) {
  const user = await getCurrentUser();
  // if (!user || user?.role !== "applicant") {
  //   redirect("/login");
  // }

  const { id } = await params;
  const jobId = Number(id);

  const isApplied = await checkIfApplied(jobId);
  const { status, data: job } = await getJobIDDetails(jobId);


  if (status === "ERROR" || !job) {
    redirect("/jobs");
  }
  //get saved status
  const saved =async()=>{
  const user = await getCurrentUser();
if(!user){
  redirect("/login");
}
await prisma.savedJob.findMany({
    where: {
      userId:id,
      jobId: job.id,
    },
  });
  } 
  
  const isSaved = saved.length > 0;
  //apply status
  let hasApplied = false;
  let userResumes:{id:number ,fileName:string}[]=[];

 if (user) {
  // Check if user already applied
  const existingApplication = await prisma.jobApplication.findFirst({
    where: {
      jobId: jobId,
      applicantId: user.id,
    },
  });

   hasApplied = !!existingApplication;

  // Fetch resumes for dropdown
   userResumes = await prisma.resume.findMany({
    where: {
      applicantId: user.id,
    },
    select: {
      id: true,
      fileName: true,
    },
  });
}
  // console.log(job.description)
  return (
    <div className="min-h-screen ">
      {/* STICKY TOP NAVIGATION */}
      <div className="sticky top-0 z-40 w-full  backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/find-jobs">
            <Button
              variant="ghost"
              className="gap-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-all"
            >
              <ArrowLeft size={18} />
              <span className="font-medium hidden sm:inline">Back to Jobs</span>
            </Button>
          </Link>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 size={16} />
            </Button>

            <SaveJobButton jobId={job.id} initialSaved={isSaved} />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: MAIN CONTENT (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            {/* HERO SECTION */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary font-medium">
                <Building2 size={20} />
                <span className="tracking-wide uppercase text-xs">
                  {"Verified Employer"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
                {job.title}
              </h1>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-none px-3 py-1"
                >
                  {job.jobType}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 px-3 py-1"
                >
                  {job.workType}
                </Badge>
                <Badge className="bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-none px-3 py-1">
                  {job.jobLevel}
                </Badge>
              </div>
            </div>

            {/* DESCRIPTION CARD */}
            <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <CardContent className="p-6 sm:p-10">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  Detailed Description
                </h2>
                <section>
                  <h3 className="font-semibold text-lg mb-4">
                    Job Description
                  </h3>

                  <div
                    className="prose max-w-none break-words"
                    dangerouslySetInnerHTML={{
                      __html: formatJobDescription(job.description),
                    }}
                  />
                </section>
              </CardContent>
            </Card>

            {/* SKILLS CARD */}
            {job.tags && (
              <Card className="border-slate-200 dark:border-slate-800  shadow-sm">
                <CardContent className="p-6 sm:p-10">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                    Skills & Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {job.tags.split(",").map((tag: string) => (
                      <div
                        key={tag}
                        className=" text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl text-sm font-medium border border-transparent hover:border-primary/30 transition-all"
                      >
                        <Badge className="bg-blue-300"> {tag.trim()}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* RIGHT: SIDEBAR (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6">
            <Card className="border-slate-200 dark:border-slate-800  sticky top-24 shadow-lg overflow-hidden">
              <div className="h-1.5 bg-primary w-full" />
              <CardContent className="p-6 space-y-8">
                <div className="space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 uppercase text-xs tracking-widest">
                    Job Overview
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 rounded-lg">
                        <IndianRupee size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">
                          Salary Range
                        </p>
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-200">
                          {job.minSalary?.toLocaleString()} -{" "}
                          {job.maxSalary?.toLocaleString()}
                          <span className="text-[10px] ml-1 opacity-60">
                            / {job.salaryPeriod}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 dark:bg-blue-500/10 text-blue-600 rounded-lg">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">
                          Location
                        </p>
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-200">
                          {job.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-purple-50 dark:bg-purple-500/10 text-purple-600 rounded-lg">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">
                          Job Type
                        </p>
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-200">
                          {job.jobType}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="pt-6 border-t dark:border-slate-800">
                  <ApplyJob jobId={id} isApplied={hasApplied} />
                  <p className="text-[11px] text-center text-slate-400 mt-4 px-4 leading-tight">
                    By applying, you agree to share your profile with Recuritor
                    .
                  </p>
                </div> */}
                <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                  {
                    user?(
                      <ApplyJobModal jobId={job.id} jobTitle={job.title} hasApplied={hasApplied} resumes={userResumes} />
                    ):(
                        <Button
                        size="lg"
                        className="w-full md:mx-auto font-semibold"
                        asChild
                      >
                        <Link href="/login">Login to Apply</Link>
                        </Button>
                    )
                  }

                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> Posted
                  </span>
                  <span className="font-medium">
                    {new Date(job.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> Updated
                  </span>
                  <span className="font-medium">
                    {new Date(job.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
