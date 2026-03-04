import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { getSavedJobs } from "../../actions/savedjobaction";
import SavedJobCard from "../../_components/saved-job-card";

export default async function SavedJobsPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const savedJobs = await getSavedJobs(user.id);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      <h1 className="text-2xl font-semibold mb-6">
        Saved Jobs ({savedJobs.length})
      </h1>

      {savedJobs.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-4">
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
      )}

    </div>
  );
}

function EmptyState() {
  return (
    <div className="border rounded-lg p-10 text-center text-gray-500">
      <p className="text-lg font-medium">No saved jobs yet</p>
      <p className="text-sm mt-1">
        Save jobs to view them here later.
      </p>
    </div>
  );
}