import { Suspense } from "react";
import JobListPage from "../../_components/job-listing-page";
// import JobList from "./JobList";

export default function Page() {
  return (
    <Suspense >
      <JobListPage />
    </Suspense>
  );
}