"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, IndianRupee, Calendar, Search, SlidersHorizontal, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { getAllJobs } from "../../actions/getjob";
import { formatPostedTime } from "@/app/(employer)/_components/format-posted";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface JobProps {
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
  companyLogo: string | null;
}

const JobDetails = () => {
  const [jobs, setJobs] = useState<JobProps[]>([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function loadJobs() {
      setIsLoading(true);
      try {
        const result = await getAllJobs();
        if (result.status === "SUCCESS") {
          setJobs(result.data);
        }
      } catch (error) {
        console.error("Failed to load jobs", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" ||
        job.location?.toLowerCase().includes(location.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen sticky top-0  ">
      {/* HEADER SECTION */}
      <div className=" backdrop-blur-md border-b sticky top-0 z-30  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Find your next role
              </h1>
              <p className="text-muted-foreground mt-1">
                Browse through the latest opportunities in tech.
              </p>
            </div>
            <Badge variant="outline" className="w-fit px-3 py-1 bg-blue-500 shadow-sm">
              {filteredJobs.length} Positions Available
            </Badge>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* FILTER SIDEBAR */}
          <aside className="lg:col-span-3 space-y-6 ">
            <Card className="sticky top-40 border-slate-200 shadow-sm overflow-hidden ">
              <div className="p-2 border-b flex items-center gap-2 ">
                <SlidersHorizontal className="w-4 h-4 text-slate-500" />
                <h2 className="font-semibold text-sm">Filters</h2>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-slate-500">Keyword</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="e.g. React Developer"
                      className="pl-9 bg-slate-50/50 hover:border-slate-200 focus:bg-white transition-colors"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-slate-500">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="City or Remote"
                      className="pl-9 bg-slate-50/50 hover:border-slate-200 focus:bg-white transition-colors"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                <Button
                  variant="destructive"
                  className="w-full  text-xs"
                  onClick={() => {
                    setSearch("");
                    setLocation("");
                  }}
                >
                  Clear all filters
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* JOB LIST AREA */}
          <div className="lg:col-span-9 space-y-4">
            {isLoading ? (
              // SUSPENSE SKELETON STATE
              Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="p-6  shadow-sm animate-pulse">
                  <div className="flex gap-4">
                    <Skeleton className="h-14 w-14 rounded-xl" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-5 w-1/3" />
                      <Skeleton className="h-4 w-1/4" />
                      <div className="flex gap-2 pt-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <AnimatePresence mode="popLayout">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-md  overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-6">
                            <div className="flex items-start gap-5">
                              {/* LOGO WITH SAAS STYLE BORDER */}
                              <div className="h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-xl border bg-white shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                <Image
                                  src={job.companyLogo || "/company.png"}
                                  alt="logo"
                                  width={64}
                                  height={64}
                                  className="object-contain p-2"
                                />
                              </div>

                              <div className="space-y-1">
                                <h2 className="text-xl font-bold  group-hover:text-primary transition-colors">
                                  {job.title}
                                </h2>
                                <p className="font-medium text-slate-600 flex items-center gap-2">
                                  {job.companyName}
                                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                                  <span className="text-sm text-slate-400 font-normal">
                                    {formatPostedTime(job.createdAt)}
                                  </span>
                                </p>

                                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3">
                                  {job.location && (
                                    <div className="flex items-center gap-1.5 text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                                      <MapPin className="w-3.5 h-3.5" />
                                      {job.location}
                                    </div>
                                  )}
                                  {job.jobType && (
                                    <div className="flex items-center gap-1.5 text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                                      <Briefcase className="w-3.5 h-3.5" />
                                      {job.jobType}
                                    </div>
                                  )}
                                  {(job.minSalary || job.maxSalary) && (
                                    <div className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                                      <IndianRupee className="w-3.5 h-3.5" />
                                      {job.minSalary?.toLocaleString()} - {job.maxSalary?.toLocaleString()}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 w-full md:w-auto pt-4 md:pt-0 border-t md:border-none">
                              {job.workType && (
                                <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none">
                                  {job.workType}
                                </Badge>
                              )}
                              <Link href={`/dashboard/find-jobs/${job.id}`} className="flex-1 md:flex-none">
                                <Button className="w-full md:w-auto shadow-sm group-hover:shadow-md transition-all">
                                  View Details
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-slate-300"
                  >
                    <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                      <Search className="h-8 w-8 text-slate-400" />
                    </div>
                    <h2 className="text-xl font-semibold text-slate-900">No matching jobs</h2>
                    <p className="text-slate-500 mt-1">Try adjusting your search or filters to find what you&apos;re looking for.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobDetails;