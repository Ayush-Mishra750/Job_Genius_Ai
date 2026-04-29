"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Briefcase,
  Calendar,
  DollarSign,
  MapPin,
  MoreHorizontal,
  Pencil,
  Search,
  Trash,
  Plus,
  Clock,
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { formatPostedTime } from './format-posted'
import { deleteAction, getJobs } from '../_actions/Job_action'

interface JobProps {
  id: number;
  employerId: number;
  title: string;
  description: string;
  tags: string | null;
  minSalary: number | null;
  maxSalary: number | null;
  salaryCurrency: string | null;
  salaryPeriod: string | null;
  jobType: string | null;
  workType: string | null;
  jobLevel: string | null;
  minEducation: string | null;
  experience: string | null;
  location: string | null;
  expiresAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const JobListPage = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState<JobProps[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await getJobs();
        setJobs(data || []);
      } catch (error) {
        console.error("Failed to load jobs", error);
        toast.error("Failed to load job listings");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleDelete = async (jobId: number) => {
    if (!confirm("Are you sure you want to delete this job?")) return;
    const result = await deleteAction(jobId);
    if (result.status === "SUCCESS") {
      toast.success(result.message);
      setJobs((prev) => prev.filter((job) => job.id !== jobId));
    } else {
      toast.error(result.message);
    }
  }

  const handleEdit = (jobId: number) => {
    router.push(`/employer-dashboard/jobsList/${jobId}`)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground flex items-center gap-3">
            <div className="rounded-2xl bg-primary/10 p-2.5">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            Manage Jobs
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base font-medium">
            You have <span className="text-primary font-bold">{jobs.length}</span> active job listings
          </p>
        </div>

        <Link href="jobs">
          <Button className="h-12 px-8 rounded-2xl shadow-lg shadow-primary/20 transition-all hover:shadow-xl active:scale-95 font-bold">
            <Plus className="mr-2 h-5 w-5" />
            Post New Job
          </Button>
        </Link>
      </div>

      {/* Search & Stats Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-card/40 backdrop-blur-xl p-2 rounded-[2rem] border border-border/50 shadow-sm">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by job title..."
            className="pl-11 h-12 rounded-3xl bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="hidden sm:flex items-center gap-2 pr-4">
          <Badge variant="secondary" className="h-8 px-4 rounded-full font-bold bg-muted/50">
            {filteredJobs.length} Results
          </Badge>
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
            <Filter className="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-[280px] rounded-3xl bg-muted/20 animate-pulse border border-border/50" />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredJobs.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 px-4 rounded-[3rem] border-2 border-dashed border-border/50 bg-muted/5">
          <div className="rounded-3xl bg-primary/5 p-6 mb-6">
            <Search className="w-12 h-12 text-primary/40" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight mb-2 text-center">No matching jobs found</h3>
          <p className="text-muted-foreground text-center max-w-sm mb-8 font-medium">
            We couldn't find any jobs matching your current search. Try a different keyword or post a new one.
          </p>
          <Button variant="outline" className="rounded-full px-8 font-bold" onClick={() => setSearch("")}>
            Clear Search
          </Button>
        </div>
      )}

      {/* Job Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {filteredJobs.map((job) => (
          <Card
            key={job.id}
            className="group relative rounded-[2rem] border-border/50 bg-white dark:bg-card/40 dark:backdrop-blur-xl shadow-lg shadow-black/[0.03] dark:shadow-none transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 hover:ring-1 hover:ring-primary/20 overflow-hidden"
          >
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <CardHeader className="pb-4 relative z-10">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-primary/70">
                    <Clock className="w-3 h-3" />
                    {formatPostedTime(job.createdAt)}
                  </div>
                  <h2 className="text-xl font-extrabold tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                    {job.title}
                  </h2>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/5 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-2xl p-2 border-border/50 shadow-xl">
                    <DropdownMenuItem onClick={() => handleEdit(job.id)} className="rounded-xl cursor-pointer">
                      <Pencil className="w-4 h-4 mr-2" />
                      Edit Details
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(job.id)}
                      className="rounded-xl text-destructive cursor-pointer focus:bg-destructive/10 focus:text-destructive"
                    >
                      <Trash className="w-4 h-4 mr-2" />
                      Delete Job
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 relative z-10">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="rounded-lg font-bold bg-muted/60">
                  {job.workType || "Full-time"}
                </Badge>
                <Badge variant="outline" className="rounded-lg font-bold border-primary/20 bg-primary/5 text-primary">
                  {job.jobType || "Remote"}
                </Badge>
                {job.jobLevel && (
                  <Badge className="rounded-lg font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shadow-none">
                    {job.jobLevel}
                  </Badge>
                )}
              </div>

              {/* Info Section */}
              <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-muted-foreground/80">
                <div className="flex items-center gap-2 truncate">
                  <MapPin className="w-4 h-4 text-primary" />
                  {job.location || "Anywhere"}
                </div>
                <div className="flex items-center gap-2 truncate">
                  <DollarSign className="w-4 h-4 text-emerald-500" />
                  {job.minSalary ? `${job.minSalary / 1000}k` : "0"} - {job.maxSalary ? `${job.maxSalary / 1000}k` : "0"}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center gap-3 pt-2">
                <Link href={`/employer-dashboard/jobsList/${job.id}`} className="flex-1">
                  <Button className="w-full h-11 rounded-2xl font-bold transition-all active:scale-95 group/btn">
                    View & Manage
                    <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default JobListPage;
