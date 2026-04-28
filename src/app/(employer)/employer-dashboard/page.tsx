import { redirect } from "next/navigation";
import { StatsCards } from "../_components/employer-stats";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { EmployerProfileCompletionStatus } from "../_components/employer-profile-status";
import { getEmployerDashboardStats } from "../_actions/dashboard-stats";
import { RecentApplications } from "../_components/recent-applications";
import { JobActivityChart } from "../_components/job-activity-chart";

const EmployerDashboard = async () => {
  const user = await getCurrentUser();

  if (!user) return redirect("/login");

  // Fetch real data from Prisma
  const {
    totalJobs,
    totalApplications,
    recentApplications,
    statusCounts
  } = await getEmployerDashboardStats(user.id);

  return (
    <div className="space-y-10 pb-10">
      {/* Header Section */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Welcome back, <span className="text-blue-600 dark:text-blue-400 capitalize">{user?.name.toLowerCase()}</span> 👋
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Here's what's happening with your job postings and applications today.
          </p>
        </div>

        <div className="flex items-center gap-4">

          <div className="hidden lg:block">
            <EmployerProfileCompletionStatus />
          </div>

        </div>
      </section>


      <div className="lg:hidden">
        <EmployerProfileCompletionStatus />
      </div>

      {/* Stats Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground/90 px-1">Overview</h2>
        <StatsCards
          totalJobs={totalJobs}
          totalApplications={totalApplications}
          savedCandidates={0}
        />
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Analytics Section */}
        <section className="xl:col-span-7 space-y-4">
          <h2 className="text-xl font-bold text-foreground/90 px-1">Recruitment Analytics</h2>
          <JobActivityChart statusCounts={statusCounts} />
        </section>

        {/* Recent Activity Section */}
        <section className="xl:col-span-5 space-y-4">
          <h2 className="text-xl font-bold text-foreground/90 px-1">Recent Applications</h2>
          <RecentApplications applications={recentApplications} />
        </section>
      </div>
    </div>
  );
};

export default EmployerDashboard;

