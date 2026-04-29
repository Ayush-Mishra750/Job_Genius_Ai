"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { updateApplicationStatus } from "../_actions/application-status";
import { useState } from "react";
import { ApplicationStatus } from "../../../../generated/prisma";
import { cn } from "@/lib/utils";

const statusOptions: ApplicationStatus[] = [
  "pending",
  "shortlisted",
  "interview",
  "rejected",
  "hired"
];

export default function ApplicationStatusSelect({
  appId,
  currentStatus,
}: {
  appId: number;
  currentStatus: ApplicationStatus;
}) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus || "pending");

  const handleChange = async (value: ApplicationStatus) => {
    setStatus(value); 
    try {
      await updateApplicationStatus(appId, value);
      toast.success("Status updated");
      router.refresh();
    } catch {
      toast.error("Failed to update");
    }
  };

  const getStatusStyles = (s: string) => {
    switch (s.toLowerCase()) {
      case 'hired': return 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800';
      case 'accepted': return 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800';
      case 'shortlisted': return 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800';
      case 'rejected': return 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:border-rose-800';
      case 'interview': return 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800';
      default: return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700';
    }
  };

  return (
    <Select value={status} onValueChange={handleChange}>
      <SelectTrigger className={cn(
        "h-8 w-auto min-w-[110px] max-w-[130px] rounded-full px-3 text-[10px] font-black uppercase tracking-wider border transition-all active:scale-95",
        getStatusStyles(status)
      )}>
        <SelectValue />
      </SelectTrigger>

      <SelectContent className="rounded-2xl border-border/50 shadow-xl">
        {statusOptions.map((s) => (
          <SelectItem key={s} value={s} className="rounded-xl text-[10px] font-bold uppercase tracking-wider my-1 cursor-pointer">
            {s}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}