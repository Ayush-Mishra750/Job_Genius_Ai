import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Bookmark, Bell } from "lucide-react";
import { redirect } from "next/navigation";
import { getAppliedJobsForApplicant } from "../actions/applicant.queries";
import { getSavedJobs } from "../actions/savedjobaction";
import {  totaljob } from "../actions/getjob";

export const ApplicantStats =async () => {
  const user =await getCurrentUser();
  if(!user)redirect("/login");
    const applications = await getAppliedJobsForApplicant(user.id);
     const savedJobs = await getSavedJobs(user.id);
      const result = await totaljob();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1: Applied Jobs (Blue) */}
      <Card className="bg-blue-50 border-blue-100 shadow-sm">
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">{applications.length}</p>
            <p className="text-sm font-medium text-gray-500"> <span className="font-bold text-gray-850 ">
           
            {applications.length === 1 ? "Applied job" : "Applied jobs"}.
          </span></p>
          </div>
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <Briefcase className="h-6 w-6 text-blue-600" />
          </div>
        </CardContent>
      </Card>

      {/* Card 2: Favorite Jobs (Yellow/Orange) */}
      <Card className="bg-orange-50 border-orange-100 shadow-sm">
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">{savedJobs.length}</p>
            <p className="text-sm font-medium text-gray-500">Favorite jobs</p>
          </div>
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <Bookmark className="h-6 w-6 text-orange-500" />
          </div>
        </CardContent>
      </Card>

      {/* Card 3: Job Alerts (Green) */}
      <Card className="bg-green-50 border-green-100 shadow-sm">
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">{result}</p>
            <p className="text-sm font-medium text-gray-500"> {result=== 1 ? "Total Available job" : "Total Available jobs"}.</p>
          </div>
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <Bell className="h-6 w-6 text-green-600" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};