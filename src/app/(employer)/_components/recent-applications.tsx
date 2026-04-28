import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatPostedTime } from "./format-posted";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface RecentApplicationsProps {
  applications: any[];
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  shortlisted: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  interview: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  rejected: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  hired: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
};

export function RecentApplications({ applications }: RecentApplicationsProps) {
  if (applications.length === 0) {
    return (
      <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Recent Applications</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-10 text-muted-foreground">
          <p>No applications received yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold text-foreground">Recent Applications</CardTitle>
        <Link 
          href="/employer-dashboard/applications" 
          className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center gap-1 transition-colors"
        >
          View all <ArrowUpRight className="h-4 w-4" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {applications.map((app) => (
            <div key={app.id} className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                  <AvatarImage src={app.applicant.user.avatarUrl} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                    {app.applicant.user.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                    {app.applicant.user.name}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    Applied for <span className="font-medium text-foreground/80">{app.job.title}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {formatPostedTime(app.appliedAt)}
                  </p>
                </div>
              </div>
              <Badge variant="outline" className={`capitalize font-medium px-2.5 py-0.5 ${statusColors[app.status.toLowerCase()] || ""}`}>
                {app.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
