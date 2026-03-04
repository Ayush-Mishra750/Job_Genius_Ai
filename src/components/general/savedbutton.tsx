"use client";

import { useTransition, useState } from "react";
// import { toggleSaveJob } from "@/actions/saveJob.action";
import { Bookmark, BookmarkCheck } from "lucide-react";
// import { toggleSaveJob, unsaveJob } from "../actions/savedjobs";
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




export  function UnsaveButton({ jobId }: { jobId: number }) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      onClick={() =>
        startTransition(() => unsaveJob(jobId))
      }
      disabled={isPending}
      variant={"destructive"}
      className="text-lg  cursor-pointer"
    >
      {isPending ? "Removing..." : "Unsave"}
    </Button>
  );
}


