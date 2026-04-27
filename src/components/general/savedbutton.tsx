"use client";

import { useTransition, useState, useEffect } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toggleSaveJob, unsaveJob } from "@/app/(applicant)/actions/savedjobaction";

export default function SaveJobButton({
  jobId,
  initialSaved,
}: {
  jobId: number;
  initialSaved: boolean;
}) {
  const [saved, setSaved] = useState(initialSaved);
  const [isPending, startTransition] = useTransition();

  const handleSave = () => {
    startTransition(async () => {
      const res = await toggleSaveJob(jobId);
      setSaved(res.saved);
    });
  };

  return (
    <Button
      onClick={handleSave}
      disabled={isPending}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all cursor-pointer
        ${
          saved
            ? "bg-green-50 border-green-500 text-green-600"
            : "bg-white border-gray-300 text-gray-700"
        }
        ${isPending}
      `}
    >
      {saved ? (
        <BookmarkCheck className="w-5 h-5" />
      ) : (
        <Bookmark className="w-5 h-5" />
      )}

      <span className="text-sm font-medium">
        {isPending ? "Saving..." : saved ? "Saved" : "Save Job"}
      </span>
    </Button>
  );
}






export function UnsaveButton({ jobId }: { jobId: number }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleUnsave = () => {
    startTransition(async () => {
      await unsaveJob(jobId);
      router.refresh(); // refresh data
    });
  };

  return (
    <Button
      onClick={handleUnsave}
      disabled={isPending}
      variant="ghost"
      className="w-full justify-center gap-2 rounded-xl
        bg-red-50 hover:bg-red-100
        dark:bg-red-950 dark:hover:bg-red-900
        text-red-600 dark:text-red-300
        border border-red-200 dark:border-red-700
        font-semibold text-sm transition-all duration-200 disabled:opacity-50 cursor-pointer"
    >
      <Bookmark className="w-3.5 h-3.5 shrink-0" />
      {isPending ? "Removing..." : "Unsave"}
    </Button>
  );
}
