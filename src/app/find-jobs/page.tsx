import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getAllJobs, JobFilterParams } from "../_actions/getalljobs";
import { JobFilters } from "@/components/general/jobFilter";
import { JobCard } from "@/components/general/jobCard";
import { Briefcase, SearchX, Sparkles } from "lucide-react";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function JobsPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;

  // 1. Pagination Constants
  const currentPage = Number(resolvedParams.page) || 1;
  const ITEMS_PER_PAGE = 9;

  const filters: JobFilterParams = {
    search:
      typeof resolvedParams.search === "string"
        ? resolvedParams.search
        : undefined,
    jobType:
      typeof resolvedParams.jobType === "string"
        ? resolvedParams.jobType
        : undefined,
    jobLevel:
      typeof resolvedParams.jobLevel === "string"
        ? resolvedParams.jobLevel
        : undefined,
    workType:
      typeof resolvedParams.workType === "string"
        ? resolvedParams.workType
        : undefined,
    page: currentPage,
    limit: ITEMS_PER_PAGE,
  };

  // 2. Fetch data directly on the server
  const { jobs, totalCount } = await getAllJobs(filters);

  // 3. Pagination Math
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  // 4. Calculate the 3-page Sliding Window
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, currentPage + 1);

  if (currentPage === 1) {
    endPage = Math.min(totalPages, 3);
  } else if (currentPage === totalPages) {
    startPage = Math.max(1, totalPages - 2);
  }

  const visiblePages = [];
  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  // 5. Helper to preserve search filters in the URL when changing pages
  const createPageUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    Object.entries(resolvedParams).forEach(([key, value]) => {
      if (value && key !== "page") {
        params.set(key, String(value));
      }
    });
    params.set("page", pageNum.toString());
    return `/find-jobs?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">

        {/* ── Ultra-fancy Hero Header ── */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Multi-stop gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 dark:from-violet-900/90 dark:via-blue-900/90 dark:to-cyan-900/80" />

          {/* Animated mesh / glow orbs */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-white/10 dark:bg-blue-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-cyan-300/20 dark:bg-cyan-500/10 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/3 h-40 w-40 rounded-full bg-violet-400/10 blur-2xl" />

          {/* Glass overlay strip at bottom */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Content */}
          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 px-3 py-1 text-[11px] font-semibold text-white uppercase tracking-widest">
                    <Sparkles className="h-3 w-3 text-cyan-200" />
                    {totalCount.toLocaleString()} opportunities
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Find your Next{" "}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-violet-200 bg-clip-text text-transparent">
                      Dream Job
                    </span>
                    {/* Underline glow */}
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-300/60 to-cyan-400/0" />
                  </span>
                </h1>
                <p className="text-blue-100/80 dark:text-blue-200/60 mt-2 text-sm sm:text-base max-w-md">
                  Browse the latest openings from top companies around the world.
                </p>
              </div>

              {/* Icon tile */}
              <div className="hidden sm:flex items-center justify-center h-20 w-20 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 shadow-xl shrink-0">
                <Briefcase className="h-9 w-9 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Filter bar ── */}
        <JobFilters />

        {/* ── Results meta row ── */}
        {jobs.length > 0 && (
          <div className="flex items-center justify-between px-1">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
                {Math.min(currentPage * ITEMS_PER_PAGE, totalCount)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-foreground">
                {totalCount.toLocaleString()}
              </span>{" "}
              jobs
            </p>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        )}

        {/* ── Job Cards ── */}
        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-card/50 text-center px-6 backdrop-blur-sm">
            <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mb-4 shadow-sm">
              <SearchX className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              No jobs found
            </h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-xs leading-relaxed">
              Try adjusting your filters or search term. New jobs are posted daily — check back soon!
            </p>
          </div>
        )}

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="pt-4 border-t border-border mt-4">
            <Pagination>
              <PaginationContent className="flex-wrap gap-1">
                <PaginationItem>
                  <PaginationPrevious
                    href={currentPage > 1 ? createPageUrl(currentPage - 1) : "#"}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-40"
                        : "hover:bg-muted transition-colors rounded-xl"
                    }
                  />
                </PaginationItem>

                {visiblePages.map((pageNum) => (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      href={createPageUrl(pageNum)}
                      isActive={currentPage === pageNum}
                      className={
                        currentPage === pageNum
                          ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20"
                          : "hover:bg-muted text-muted-foreground transition-colors rounded-xl"
                      }
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href={
                      currentPage < totalPages
                        ? createPageUrl(currentPage + 1)
                        : "#"
                    }
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-40"
                        : "hover:bg-muted transition-colors rounded-xl"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}