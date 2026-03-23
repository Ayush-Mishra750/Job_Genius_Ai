"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {   Briefcase, Calendar, DollarSign, MapPin, MoreHorizontal, Pencil, Search, Trash } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {  useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
// import { deleteAction, getJobs } from '../_actions/Job_action'
import { formatPostedTime } from './format-posted'
import { getCurrentUser } from '@/app/(auth)/_actions/auth.queries'
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
  
  const router=useRouter();
   const [jobs, setJobs] = useState<JobProps[]>([]);
  const [search, setSearch] = useState("");

    const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

   useEffect(() => {
    async function load() {
      const user =await getCurrentUser();
      const data = await getJobs();
      setJobs(data);
    }
    load();
  }, []);

  const handleDelete=async (jobId:number)=>{
 const result=await deleteAction(jobId);

  if (result.status === "SUCCESS") {
    toast.success(result.message);
    setJobs((prev) => prev.filter((job) => job.id !== jobId));
  } else {
    toast.error(result.message);
  }

  }
  const handleEdit=async(jobId:number)=>{
   console.log(jobId);
    router.push(`/employer-dashboard/jobsList/${jobId}`)
  }

 return (
  <div className="mx-auto max-w-7xl px-6 py-10 space-y-8">

    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-primary" />
          Job Listings
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Manage and track your posted jobs
        </p>
      </div>

      <Link href="jobs">
        <Button className="px-6 h-11">
          + Post New Job
        </Button>
      </Link>
    </div>

    {/* Search */}
    <div className="relative max-w-md">
      <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
      <Input
        placeholder="Search jobs..."
        className="pl-10 h-11"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {/* Empty State */}
    {filteredJobs.length === 0 && (
      <div className="border rounded-xl p-10 text-center bg-muted/30">
        <Briefcase className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
        <p className="text-lg font-medium">No jobs found</p>
        <p className="text-muted-foreground text-sm">
          Try adjusting your search or create a new job
        </p>
      </div>
    )}

    {/* Job Grid */}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredJobs.map((job) => (
        <Card
          key={job.id}
          className="group border hover:border-primary/40 transition-all duration-200 hover:shadow-lg"
        >
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {job.title}
                </h2>
                <p className="text-xs text-muted-foreground mt-3">
                 <Badge className="mr-2 " variant={"destructive"}> Posted {formatPostedTime(job.createdAt)}</Badge>
                </p>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleEdit(job.id)}>
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleDelete(job.id)}
                    className="text-destructive"
                  >
                    <Trash className="w-4 h-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {job.workType && (
                <Badge variant="secondary">{job.workType}</Badge>
              )}
              {job.jobType && (
                <Badge variant="outline">{job.jobType}</Badge>
              )}
              {job.jobLevel && (
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                  {job.jobLevel}
                </Badge>
              )}
            </div>

            {/* Info Section */}
            <div className="space-y-2 text-sm text-muted-foreground">

              {job.location && (
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </p>
              )}

              {(job.minSalary || job.maxSalary) && (
                <p className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  {job.minSalary ?? 0} - {job.maxSalary ?? 0}{" "}
                  {job.salaryCurrency}/{job.salaryPeriod}
                </p>
              )}
            </div>

            {/* Action Button */}
            <Link href={`/employer-dashboard/jobs/${job.id}`}>
              <Button className="w-full h-10">
                View Details
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);
}

export default JobListPage





