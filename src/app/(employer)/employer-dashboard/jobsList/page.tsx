import { Suspense } from "react";
import JobListPage from "../../_components/job-listing-page";

export default function EmployerJobsListPage() {
  return (
    <Suspense fallback={<div className="p-8 animate-pulse text-muted-foreground font-medium">Loading your job listings...</div>}>
      <JobListPage />
    </Suspense>
  );
}