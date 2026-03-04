import { getJobIDAction } from "@/app/(employer)/_actions/Job_action";
import JobForm from "@/app/(employer)/_components/employer-job-form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function JobId({ params }: { params: { jobId: number } }) {
  const { jobId } = await params;
  const id = Number(jobId);

  const { status, data: job } = await getJobIDAction(id);

  if (status == "ERROR" || !job) {
    redirect("/employer-dashboard/jobsList");
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col gap-6">

      {/* Back Button */}
      <Link
        href="/employer-dashboard/jobsList"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Job List
      </Link>

      {/* Header */}
      <div className="flex items-center justify-between">
       <h1 className="text-3xl font-semibold">
  Edit Job: <span className="text-primary">{job.title}</span>
</h1>

<p className="text-muted-foreground text-sm">
  Update the job details and save your changes.
</p>
      </div>

      {/* Form */}
      <JobForm initialData={job} isEditMode={true} />
    </div>
  );
}