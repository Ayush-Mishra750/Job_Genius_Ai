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


  const [status, setStatus] = useState(currentStatus || "PENDING");

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

  return (
    <Select value={status} onValueChange={handleChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {statusOptions.map((s) => (
          <SelectItem key={s} value={s}>
            {s}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}