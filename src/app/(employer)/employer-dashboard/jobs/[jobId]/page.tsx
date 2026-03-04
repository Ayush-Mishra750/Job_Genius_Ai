import { notFound, redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Briefcase,
  Zap,
  Calendar,
  DollarSign,
  GraduationCap,
  ArrowLeft
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { getJobIDAction } from "@/app/(employer)/_actions/Job_action";
import { formatPostedTime } from "@/app/(employer)/_components/format-posted";
import Link from "next/link";

export default async function ViewJobPage({ params }: { params: { jobId: number } }) {

 const { jobId } = await params;
 const id = Number(jobId)

 const {status,data:job} = await getJobIDAction(id);
  
  if(status=="ERROR" ||!job){
    redirect("/employer-dashboard/jobsList");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background dark:from-muted/10 dark:to-background">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

      {/* HEADER */}
      <div className="space-y-6">

        {/* Back Button */}
        <Link
          href="/employer-dashboard/jobsList"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Job List
        </Link>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            {job.title}
          </h1>
        </div>

        <Card className="rounded-2xl border bg-card/70 backdrop-blur shadow-sm p-6 hover:shadow-lg transition-all duration-300">
          <div
            className="prose dark:prose-invert max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: job.description.slice(0,100) }}
          />

          <div className="flex flex-wrap gap-2 pt-4">
            {job.workType && (
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 transition-colors">
                {job.workType}
              </Badge>
            )}
            {job.jobType && (
              <Badge variant="secondary" className="px-3 py-1">
                {job.jobType}
              </Badge>
            )}
            {job.jobLevel && (
              <Badge variant="outline" className="px-3 py-1">
                {job.jobLevel}
              </Badge>
            )}
          </div>
        </Card>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-10">

          {/* INFO CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            <InfoCard
              icon={<DollarSign className="w-5 h-5 text-primary" />}
              title="Salary"
              value={
                job.minSalary
                  ? `${job.minSalary} - ${job.maxSalary} ${job.salaryCurrency}/${job.salaryPeriod}`
                  : "Not specified"
              }
            />

            <InfoCard
              icon={<MapPin className="w-5 h-5 text-primary" />}
              title="Location"
              value={job.location || "Remote"}
            />

            <InfoCard
              icon={<Briefcase className="w-5 h-5 text-primary" />}
              title="Job Level"
              value={job.jobLevel || ""}
            />

            <InfoCard
              icon={<Zap className="w-5 h-5 text-primary" />}
              title="Work Type"
              value={job.workType || ""}
            />

            <InfoCard
              icon={<GraduationCap className="w-5 h-5 text-primary" />}
              title="Education"
              value={job.minEducation || "Not required"}
            />

            <InfoCard
              icon={<Calendar className="w-5 h-5 text-primary" />}
              title="Expires On"
              value={
                job.expiresAt
                  ? job.expiresAt.toISOString().split("T")[0]
                  : "No deadline"
              }
            />
          </div>

          {/* DESCRIPTION */}
          <Card className="rounded-2xl border bg-card/70 backdrop-blur shadow-sm p-8 space-y-6 hover:shadow-lg transition-all duration-300">
            <h2 className="text-xl font-semibold tracking-tight">
              Full Job Description
            </h2>

            <div
              className="
                prose dark:prose-invert
                max-w-none
                text-muted-foreground
                break-words whitespace-normal
              "
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </Card>

          {/* SKILLS */}
          {job.tags && (
            <section className="rounded-2xl border bg-card/70 backdrop-blur shadow-sm p-8 space-y-6 hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold tracking-tight">
                Required Skills
              </h2>

              <div className="flex flex-wrap gap-2">
                {job.tags.split(",").map((tag, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1 text-sm hover:bg-muted transition">
                    {tag.trim()}
                  </Badge>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-6 lg:sticky lg:top-24 h-fit">
          <div className="rounded-2xl border bg-card/70 backdrop-blur shadow-sm p-6 space-y-5 text-sm hover:shadow-lg transition-all duration-300">

            <h2 className="text-lg font-semibold">Job Summary</h2>

            <ul className="space-y-3 text-muted-foreground">
              <li>🗓 Posted: {job.createdAt.toISOString().split("T")[0]}</li>
              <li>📌 Location: {job.location || "Remote"}</li>
              <li>💼 Job Type: {job.jobType}</li>
              <li>🚀 Work Type: {job.workType}</li>
              <li>🎯 Level: {job.jobLevel}</li>
              <li>
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Posted {formatPostedTime(job.createdAt)}
                </p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-card border rounded-xl p-5 flex flex-col gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <p className="text-sm font-medium">{title}</p>
      </div>

      <p className="text-foreground text-sm font-semibold">
        {value}
      </p>
    </div>
  );
}