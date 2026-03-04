"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UnsaveButton } from "@/components/general/savedbutton";
import { 
  MapPin, 
  Briefcase, 
  ChevronRight, 
  Building2, 
  Clock, 
  ExternalLink 
} from "lucide-react";

interface savedProps {
  job: {
    id: number;
    title: string;
    description: string;
    minSalary: number | null;
    maxSalary: number | null;
    salaryCurrency: string | null;
    salaryPeriod: string | null;
    location: string | null;
    jobType: string | null;
    jobLevel: string | null;
    workType: string | null;
    createdAt: Date;
    companyName: string | null;
  };
}

export default function SavedJobCard({ job }: savedProps) {
  return (
    <Card className="group relative overflow-hidden border-slate-200 dark:border-slate-800  hover:border-primary/50 hover:shadow-md transition-all duration-300">
      {/* Decorative accent bar on hover */}
      <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-2">
        <CardHeader className="space-y-4">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider">
                <Building2 className="w-3 h-3" />
                {job.companyName || "Verified Employer"}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">
                {job.title}
              </h3>
            </div>
            <UnsaveButton jobId={job.id} />
          </div>

          <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" />
              {job.location}
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-slate-400" />
              {job.jobType}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              {new Date(job.createdAt).toLocaleDateString()}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div
            className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: job.description ?? "",
            }}
          />
          
          <div className="flex gap-2 mt-4">
            <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-none font-medium">
              {job.jobLevel}
            </Badge>
            {job.workType && (
               <Badge variant="outline" className="text-[10px] uppercase tracking-tight border-slate-200 dark:border-slate-700">
                {job.workType}
               </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/50 mt-2">
          <Link
            href={`/dashboard/find-jobs/${job.id}`}
            className="w-full sm:w-auto"
          >
            <Button 
              variant="ghost" 
              className="w-full justify-center gap-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              View Details
              <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
          
          <Link
            href={`/dashboard/find-jobs/${job.id}`}
            className="w-full sm:flex-1"
          >
            <Button className="w-full gap-2 shadow-sm group/btn">
              Apply Now
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}