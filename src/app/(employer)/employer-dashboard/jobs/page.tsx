import { Briefcase, Info, Sparkles } from "lucide-react";
import JobForm from "../../_components/employer-job-form";
import { Separator } from "@/components/ui/separator";

const JobsPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">

      {/* Premium Header Section */}
      <div className="relative overflow-hidden rounded-3xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 p-8 sm:p-12 shadow-sm">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 bg-primary/5 rounded-full blur-2xl opacity-30" />

        <div className="relative z-10 space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            Employer Dashboard
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
              Post a New <span className="text-primary">Job Opportunity</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-medium">
              Find the perfect talent for your team. Fill out the details below to reach thousands of qualified candidates.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground/80">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              Reach Thousands
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground/80">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Easy Management
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground/80">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              AI-Powered Matching
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center gap-3 px-2">
            <div className="rounded-xl bg-primary/10 p-2.5">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight">Job Details</h2>
              <p className="text-xs text-muted-foreground">Provide comprehensive information about the role.</p>
            </div>
          </div>

          <div className="rounded-3xl bg-card border-border/50 p-6 sm:p-8 shadow-xl shadow-black/[0.03] dark:shadow-none ring-1 ring-black/5 dark:ring-white/10 transition-all">
            <JobForm />
          </div>
        </div>

        {/* Sidebar for Tips & Info */}
        <div className="space-y-8">
          <div className="rounded-3xl border border-border/50 bg-card p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-xl text-primary shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Posting Tips</h3>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Clear Job Title
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Use standard titles like "Senior Frontend Engineer" instead of creative ones. This helps in better search visibility.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-extrabold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Define Compensation
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Providing a salary range can increase application rates by up to 30%. It builds trust with potential candidates.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-extrabold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Add Relevant Tags
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Include 3-5 tags for core technologies. This makes your job easier to find through our filter system.
                </p>
              </div>
            </div>

            <Separator className="opacity-50" />

            <div className="bg-primary/5 rounded-2xl p-4 space-y-3">
              <p className="text-xs font-semibold leading-relaxed">
                Need help writing a job description? Our AI can assist you in the next version!
              </p>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40" />
                  </div>
                ))}
                <div className="w-6 h-6 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                  +1k
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground font-medium">Join 1,000+ employers hiring today.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;