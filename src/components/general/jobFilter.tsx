"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JOB_LEVEL, JOB_TYPE, WORK_TYPE } from "@/app/_functions/constant";
// import { JOB_TYPE, WORK_TYPE, JOB_LEVEL } from "@/config/constant";

export const JobFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
//   console.log("searchParams: ", searchParams)
//   console.log("searchParams string: ", searchParams.toString())

  // Local state for immediate UI feedback
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [jobType, setJobType] = useState(searchParams.get("jobType") || "");
  const [jobLevel, setJobLevel] = useState(searchParams.get("jobLevel") || "");
  const [workType, setWorkType] = useState(searchParams.get("workType") || "");

  const updateFilters = (newParams: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    // 1. Create a tracker to see if anything actually changed
    let filtersChanged = false;

    Object.entries(newParams).forEach(([key, value]) => {
      const actualValue = value?.trim();
      const currentValue = params.get(key) || "";

      if (!actualValue || actualValue === "all") {
        if (params.has(key)) {
          params.delete(key);
          filtersChanged = true;
        }
      } else {
        if (currentValue !== actualValue) {
          params.set(key, actualValue);
          filtersChanged = true;
        }
      }
    });

    // 2. ONLY reset the page and push to the router if a filter ACTUALLY changed
    if (filtersChanged) {
      // params.delete("page");
      params.set("page", "1");
      router.push(`?${params.toString()}`, { scroll: false });
    }
  };

  useEffect(() => {
    console.log("I am running");
    const delayDebounceFn = setTimeout(() => {
      updateFilters({ search: search });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const clearFilters = () => {
    setSearch("");
    setJobType("");
    setJobLevel("");
    setWorkType("");
    router.push("/find-jobs"); // Reset to base URL
  };

  const hasActiveFilters = search || jobType || jobLevel || workType;

  return (
    <div className="rounded-2xl bg-card border border-border shadow-sm p-4 sm:p-5 space-y-4 backdrop-blur-sm">
      {/* Header row */}
      <div className="flex items-center gap-2.5">
        <div className="p-1.5 rounded-lg bg-blue-500/10 dark:bg-blue-500/15">
          <SlidersHorizontal className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
        </div>
        <span className="text-sm font-semibold text-foreground">Filter Jobs</span>
        {hasActiveFilters && (
          <span className="inline-flex items-center rounded-full bg-blue-500/15 dark:bg-blue-500/20 px-2.5 py-0.5 text-[10px] font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20">
            Active
          </span>
        )}
      </div>

      {/* --- Row 1: Search --- */}
      <div className="relative group">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-blue-500 transition-colors" />
        <Input
          placeholder="Search by title, skill, or company..."
          className="pl-10 h-11 bg-background border-border focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            onClick={() => setSearch("")}
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* --- Row 2: Dropdowns + Reset --- */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {/* Job Type */}
        <Select
          value={jobType}
          onValueChange={(val) => {
            setJobType(val);
            updateFilters({ jobType: val });
          }}
        >
          <SelectTrigger className="w-full sm:w-[155px] h-9 text-xs rounded-xl border-border bg-background text-foreground hover:border-blue-500/40 transition-colors">
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {JOB_TYPE.map((type) => (
              <SelectItem key={type} value={type} className="capitalize">
                {type.replace(/-/g, " ")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Job Level */}
        <Select
          value={jobLevel}
          onValueChange={(val) => {
            setJobLevel(val);
            updateFilters({ jobLevel: val });
          }}
        >
          <SelectTrigger className="w-full sm:w-[155px] h-9 text-xs rounded-xl border-border bg-background text-foreground hover:border-blue-500/40 transition-colors">
            <SelectValue placeholder="Job Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            {JOB_LEVEL.map((type) => (
              <SelectItem key={type} value={type} className="capitalize">
                {type.replace(/-/g, " ")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Work Type */}
        <Select
          value={workType}
          onValueChange={(val) => {
            setWorkType(val);
            updateFilters({ workType: val });
          }}
        >
          <SelectTrigger className="w-full sm:w-[155px] h-9 text-xs rounded-xl border-border bg-background text-foreground hover:border-blue-500/40 transition-colors">
            <SelectValue placeholder="Work Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Work Styles</SelectItem>
            {WORK_TYPE.map((type) => (
              <SelectItem key={type} value={type} className="capitalize">
                {type.replace(/-/g, " ")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Reset Button */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="ml-auto text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 hover:bg-red-500/10 dark:hover:bg-red-500/15 rounded-xl transition-all font-medium"
          >
            <X className="mr-1.5 h-3 w-3" />
            Reset
          </Button>
        )}
      </div>
    </div>
  );
};