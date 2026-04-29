import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { redirect } from "next/navigation";
import React from "react";
import { getEmployerApplications } from "../../_actions/employer-applicant";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";
import { 
  Download, 
  FileText, 
  UserCircle, 
  Briefcase, 
  Search, 
  Filter, 
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Inbox,
  Award
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import ApplicationStatusSelect from "../../_components/application-status";

const EmployerApplicantPage = async () => {
  const user = await getCurrentUser();
  if (!user || user.role !== "employer") redirect("/login");
  const applications = await getEmployerApplications(user.id);

  // Calculate stats
  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === "pending").length,
    shortlisted: applications.filter(a => a.status === "shortlisted").length,
    hired: applications.filter(a => a.status === "hired").length,
    rejected: applications.filter(a => a.status === "rejected").length,
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground flex items-center gap-3">
            <div className="rounded-2xl bg-primary/10 p-2.5">
              <Inbox className="w-6 h-6 text-primary" />
            </div>
            Applications
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base font-medium">
            Review and manage candidates who applied to your job postings.
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        <StatCard label="Total" count={stats.total} icon={<Inbox />} color="text-blue-500" />
        <StatCard label="Pending" count={stats.pending} icon={<Clock />} color="text-amber-500" />
        <StatCard label="Shortlisted" count={stats.shortlisted} icon={<CheckCircle2 />} color="text-emerald-500" />
        <StatCard label="Hired" count={stats.hired} icon={<Award />} color="text-purple-500" />
        <StatCard label="Rejected" count={stats.rejected} icon={<XCircle />} color="text-rose-500" />
      </div>

      {applications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 rounded-[3rem] border-2 border-dashed border-border/50 bg-muted/5 animate-in zoom-in duration-500">
          <div className="rounded-3xl bg-primary/5 p-6 mb-6">
            <Briefcase className="w-12 h-12 text-primary/40" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight mb-2">No applications yet</h3>
          <p className="text-muted-foreground text-center max-w-sm font-medium">
            When candidates apply to your jobs, they will appear here. Start by posting a new job opportunity!
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Mobile Card View */}
          <div className="lg:hidden grid grid-cols-1 gap-6">
            {applications.map((app) => (
              <Card key={app.id} className="rounded-3xl border-border/50 bg-white dark:bg-card/40 dark:backdrop-blur-xl shadow-lg shadow-black/[0.03]">
                <CardContent className="p-6 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 relative rounded-2xl overflow-hidden border border-border/50 bg-muted shadow-sm shrink-0">
                        {app.applicant.user.avatarUrl ? (
                          <Image src={app.applicant.user.avatarUrl} alt={app.applicant.user.name} fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-primary/5">
                            <UserCircle className="h-8 w-8 text-primary/40" />
                          </div>
                        )}
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <h4 className="font-bold text-lg tracking-tight truncate">{app.applicant.user.name}</h4>
                        <p className="text-xs text-muted-foreground font-medium truncate">{app.applicant.user.email}</p>
                      </div>
                    </div>
                    <div className="flex sm:justify-end">
                      <ApplicationStatusSelect appId={app.id} currentStatus={app.status}/>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Applied for</p>
                    <p className="font-bold text-foreground tracking-tight">{app.job.title}</p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {formatDistanceToNow(new Date(app.appliedAt), { addSuffix: true })}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    {app.resume?.fileUrl ? (
                      <Button asChild className="flex-1 rounded-2xl h-12 font-bold shadow-lg shadow-primary/10">
                        <a href={app.resume.fileUrl} target="_blank" rel="noreferrer">
                          <Download className="w-4 h-4 mr-2" />
                          Resume
                        </a>
                      </Button>
                    ) : (
                      <Button disabled variant="outline" className="flex-1 rounded-2xl h-12 font-bold border-dashed">No Resume</Button>
                    )}
                    {app.coverLetter && <CoverLetterDialog app={app} isMobile />}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-hidden rounded-[2rem] border border-border/50 bg-white dark:bg-card/40 dark:backdrop-blur-xl shadow-xl shadow-black/[0.02]">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow className="hover:bg-transparent border-border/50">
                  <TableHead className="py-5 pl-8 font-bold text-foreground">Candidate</TableHead>
                  <TableHead className="font-bold text-foreground">Applied Role</TableHead>
                  <TableHead className="font-bold text-foreground">Applied On</TableHead>
                  <TableHead className="font-bold text-foreground">Status</TableHead>
                  <TableHead className="text-right pr-8 font-bold text-foreground">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((app) => (
                  <TableRow key={app.id} className="border-border/50 hover:bg-muted/10 transition-colors">
                    <TableCell className="py-5 pl-8">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 relative rounded-2xl overflow-hidden shadow-sm border border-border/50 bg-muted shrink-0">
                          {app.applicant.user.avatarUrl ? (
                            <Image
                              src={app.applicant.user.avatarUrl}
                              alt={app.applicant.user.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-primary/5">
                              <UserCircle className="h-7 w-7 text-primary/40" />
                            </div>
                          )}
                        </div>
                        <div className="space-y-0.5">
                          <p className="font-bold text-foreground tracking-tight">
                            {app.applicant.user.name}
                          </p>
                          <p className="text-xs text-muted-foreground font-medium">{app.applicant.user.email}</p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="space-y-1">
                        <p className="font-bold text-primary tracking-tight">{app.job.title}</p>
                        <Badge variant="secondary" className="rounded-lg font-bold text-[10px] uppercase tracking-wider bg-muted/60">
                          {app.job.jobType}
                        </Badge>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground/80">
                          {formatDistanceToNow(new Date(app.appliedAt), { addSuffix: true })}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
                          {new Date(app.appliedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell>
                      <ApplicationStatusSelect appId={app.id} currentStatus={app.status}/>
                    </TableCell>

                    <TableCell className="text-right pr-8">
                      <div className="flex items-center justify-end gap-3">
                        {app.coverLetter && (
                          <CoverLetterDialog app={app} />
                        )}

                        {app.resume?.fileUrl ? (
                          <Button
                            size="sm"
                            asChild
                            className="rounded-xl h-10 px-4 font-bold shadow-md shadow-primary/10 transition-all hover:shadow-lg active:scale-95"
                          >
                            <a href={app.resume.fileUrl} target="_blank" rel="noreferrer">
                              <Download className="w-4 h-4 mr-2" />
                              Resume
                            </a>
                          </Button>
                        ) : (
                          <Badge variant="outline" className="rounded-xl h-10 px-4 flex items-center gap-2 border-dashed border-border/100">
                            <AlertCircle className="w-4 h-4 text-muted-foreground" />
                            No Resume
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

function StatCard({ label, count, icon, color }: { label: string, count: number, icon: React.ReactNode, color: string }) {
  return (
    <div className="rounded-3xl border border-border/50 bg-white dark:bg-card/40 dark:backdrop-blur-xl p-5 shadow-lg shadow-black/[0.02] space-y-3">
      <div className="flex items-center justify-between">
        <div className={`p-2 rounded-xl bg-muted/50 ${color}`}>
          {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5" })}
        </div>
        <span className="text-2xl font-black tracking-tight">{count}</span>
      </div>
      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{label}</p>
    </div>
  );
}

function CoverLetterDialog({ app, isMobile = false }: { app: any, isMobile?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size={isMobile ? "icon" : "sm"} 
          className={cn(
            "rounded-xl font-bold transition-all hover:bg-primary/5 hover:text-primary",
            isMobile ? "h-12 w-12 rounded-2xl shrink-0 shadow-lg shadow-black/[0.03]" : "h-10 px-4"
          )}
        >
          <FileText className={cn("w-4 h-4", !isMobile && "mr-2")} />
          {!isMobile && "Cover Letter"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden border-none bg-transparent shadow-none">
        <div className="relative w-full max-h-[90vh] overflow-y-auto rounded-[1.5rem] sm:rounded-[2.5rem] border border-border/50 bg-white dark:bg-card/95 dark:backdrop-blur-3xl shadow-2xl animate-in zoom-in-95 duration-300">
          
          {/* Header */}
          <DialogHeader className="p-6 sm:p-10 pb-4 sm:pb-6 border-b border-border/50">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="h-16 w-16 relative rounded-2xl overflow-hidden shadow-inner border border-border/50 bg-muted shrink-0 mx-auto sm:mx-0">
                {app.applicant.user.avatarUrl ? (
                  <Image src={app.applicant.user.avatarUrl} alt={app.applicant.user.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/5">
                    <UserCircle className="h-10 w-10 text-primary/40" />
                  </div>
                )}
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <DialogTitle className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
                  Candidate Statement
                </DialogTitle>
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 text-sm font-bold text-primary">
                  <span>{app.applicant.user.name}</span>
                  <span className="hidden sm:inline text-muted-foreground/30">&bull;</span>
                  <span className="text-muted-foreground/80">{app.job.title}</span>
                </div>
              </div>
            </div>
          </DialogHeader>

          {/* Content Body */}
          <div className="p-6 sm:p-10">
            <div className="relative">
              {/* Decorative Quote Icons */}
              <div className="absolute -top-4 -left-2 sm:-top-6 sm:-left-4 text-6xl sm:text-8xl text-primary/10 font-serif pointer-events-none select-none">"</div>
              <div className="absolute -bottom-10 -right-2 sm:-bottom-12 sm:-right-4 text-6xl sm:text-8xl text-primary/10 font-serif rotate-180 pointer-events-none select-none">"</div>
              
              <div className="relative z-10 px-4 sm:px-8 py-2 font-medium leading-relaxed text-foreground/90 text-base sm:text-lg whitespace-pre-wrap italic selection:bg-primary/20">
                {app.coverLetter || "No statement provided by the candidate."}
              </div>
            </div>
            
            {/* Footer / Meta */}
            <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3" />
                Submitted {formatDistanceToNow(new Date(app.appliedAt), { addSuffix: true })}
              </div>
              <div className="px-3 py-1 rounded-full bg-muted/50 border border-border/50">
                Application Ref: #{app.id}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EmployerApplicantPage;
