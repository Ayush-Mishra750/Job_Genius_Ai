import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, FileText } from "lucide-react";

interface StatsCardsProps {
  totalJobs: number;
  totalApplications: number;
  savedCandidates?: number; // Placeholder for now if not in DB
}

export function StatsCards({ totalJobs, totalApplications, savedCandidates = 0 }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
      {/* Total Jobs Card */}
      <Card className="relative overflow-hidden border-none bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Jobs</p>
              <h3 className="text-3xl font-bold mt-1">{totalJobs.toLocaleString()}</h3>
            </div>
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Total Applications Card */}
      <Card className="relative overflow-hidden border-none bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Applications</p>
              <h3 className="text-3xl font-bold mt-1">{totalApplications.toLocaleString()}</h3>
            </div>
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Saved Candidates Card (Mocked for now as per user request for premium feel) */}
      <Card className="relative overflow-hidden border-none bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Saved Candidates</p>
              <h3 className="text-3xl font-bold mt-1">{savedCandidates.toLocaleString()}</h3>
            </div>
            <div className="p-3 bg-orange-500/20 rounded-xl">
              <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}