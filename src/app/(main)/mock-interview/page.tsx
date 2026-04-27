import { getInterviews } from "./_actions/interview";
import InterviewList from "./_components/InterviewList";
import PerformanceChart from "./_components/PerformanceChart";
import StatsCards from "./_components/StatsCards";


export default async function InterviewPrepPage() {
  const interviews = await getInterviews();

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-5xl font-bold text-primary m-4">AI Mock Interview</h1>
      </div>
      <div className="space-y-6">
        <StatsCards interviews={interviews} />
        <PerformanceChart interviews={interviews} />
        <InterviewList interviews={interviews} />
      </div>
    </div>
  );
}
