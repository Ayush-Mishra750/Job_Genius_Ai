import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Bookmark, Bell } from "lucide-react";
import { redirect } from "next/navigation";
import { getAppliedJobsForApplicant } from "../actions/applicant.queries";
import { getSavedJobs } from "../actions/savedjobaction";
import { totaljob } from "../actions/getjob";

export const ApplicantStats = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const applications = await getAppliedJobsForApplicant(user.id);
  const savedJobs = await getSavedJobs(user.id);
  const result = await totaljob();

  const stats = [
    {
      count: applications.length,
      label: applications.length === 1 ? "Applied Job" : "Applied Jobs",
      icon: Briefcase,
      gradient: "from-blue-500 to-blue-600",
      bgLight: "bg-blue-50 dark:bg-blue-950/40",
      borderLight: "border-blue-100 dark:border-blue-900/50",
      iconBg: "bg-blue-100 dark:bg-blue-900/60",
      iconColor: "text-blue-600 dark:text-blue-400",
      countColor: "text-blue-700 dark:text-blue-300",
    },
    {
      count: savedJobs.length,
      label: "Saved Jobs",
      icon: Bookmark,
      gradient: "from-orange-500 to-amber-500",
      bgLight: "bg-orange-50 dark:bg-orange-950/40",
      borderLight: "border-orange-100 dark:border-orange-900/50",
      iconBg: "bg-orange-100 dark:bg-orange-900/60",
      iconColor: "text-orange-500 dark:text-orange-400",
      countColor: "text-orange-700 dark:text-orange-300",
    },
    {
      count: result,
      label: result === 1 ? "Available Job" : "Available Jobs",
      icon: Bell,
      gradient: "from-emerald-500 to-green-600",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/40",
      borderLight: "border-emerald-100 dark:border-emerald-900/50",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/60",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      countColor: "text-emerald-700 dark:text-emerald-300",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {stats.map(({ count, label, icon: Icon, bgLight, borderLight, iconBg, iconColor, countColor }) => (
        <Card
          key={label}
          className={`${bgLight} ${borderLight} border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group`}
        >
          <CardContent className="p-5 sm:p-6 flex items-center justify-between">
            <div className="space-y-1">
              <p className={`text-3xl sm:text-4xl font-bold tracking-tight ${countColor}`}>
                {count}
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                {label}
              </p>
            </div>
            <div className={`p-3 sm:p-4 ${iconBg} rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
              <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${iconColor}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};