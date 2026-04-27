"use client";

import { format } from "date-fns";
import { Eye, Trash2, FileText, Plus } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { deleteCoverLetter } from "../_actions/getcover-letter";
import Link from "next/link";
import { useRouter } from "next/navigation";

type CoverLetter = {
  id: number;
  applicantId: number;
  content: string;
  jobDescription: string | null;
  companyName: string;
  jobTitle: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

interface coverLetterProps {
  coverLetters: CoverLetter[];
}

export default function CoverLetterList({ coverLetters }: coverLetterProps) {
  const router = useRouter();

  const handleDelete = async (id: number) => {
    try {
      const data = await deleteCoverLetter(id);
      if (data) {
        toast.success("Cover letter deleted successfully!");
        router.refresh();
      }
    } catch {
      toast.error("Failed to delete cover letter");
    }
  };

  // ── Empty State ──────────────────────────────────────────────────────────
  if (!coverLetters?.length) {
    return (
      <div className="flex flex-col items-center justify-center py-24 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 bg-white dark:bg-[#2f2f2f] text-center px-6">
        <div className="relative mb-5">
          <div className="h-16 w-16 rounded-2xl bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 flex items-center justify-center">
            <FileText className="w-8 h-8 text-violet-500 dark:text-violet-400" />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-violet-500/5 blur-xl" />
        </div>
        <p className="text-lg font-bold text-slate-800 dark:text-[#ececec] mb-1">
          No cover letters yet
        </p>
        <p className="text-sm text-slate-500 dark:text-[#8e8ea0] mb-6 max-w-xs leading-relaxed">
          Generate a tailored, AI-powered cover letter for any job in seconds.
        </p>
        <Link href="/cover/new">
          <Button className="gap-2 bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-500 text-white font-semibold rounded-xl shadow-sm transition-all duration-200">
            <Plus className="w-4 h-4" />
            Create Your First
          </Button>
        </Link>
      </div>
    );
  }

  // ── Card Grid ────────────────────────────────────────────────────────────
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {coverLetters.map((letter) => (
        <Card
          key={letter.id}
          className="group flex flex-col border border-slate-200 dark:border-white/10 bg-white dark:bg-[#2f2f2f] shadow-sm hover:shadow-md hover:border-violet-300 dark:hover:border-violet-500/40 transition-all duration-200 rounded-2xl overflow-hidden"
        >
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <CardTitle className="text-base font-semibold text-slate-800 dark:text-[#ececec] leading-snug line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {letter.jobTitle}
                  <span className="text-slate-400 dark:text-[#8e8ea0] font-normal"> at </span>
                  {letter.companyName}
                </CardTitle>
                <CardDescription className="text-xs text-slate-400 dark:text-[#8e8ea0] mt-1">
                  {format(new Date(letter.createdAt), "MMM d, yyyy")}
                </CardDescription>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                {/* View */}
                <Link href={`/cover/${letter.id}`}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg text-slate-500 dark:text-[#8e8ea0] hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all"
                    title="View"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </Link>

                {/* Delete */}
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-lg text-slate-500 dark:text-[#8e8ea0] hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-white dark:bg-[#2f2f2f] border border-slate-200 dark:border-white/10 rounded-2xl">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-slate-800 dark:text-[#ececec]">
                        Delete Cover Letter?
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-slate-500 dark:text-[#8e8ea0]">
                        This will permanently delete your cover letter for{" "}
                        <span className="font-semibold text-slate-700 dark:text-[#ececec]">
                          {letter.jobTitle}
                        </span>{" "}
                        at{" "}
                        <span className="font-semibold text-slate-700 dark:text-[#ececec]">
                          {letter.companyName}
                        </span>
                        . This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="cursor-pointer rounded-xl border-slate-200 dark:border-white/10 dark:bg-[#404040] dark:text-[#ececec] dark:hover:bg-[#4a4a4a]">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(letter.id)}
                        className="bg-red-600 hover:bg-red-700 text-white rounded-xl cursor-pointer"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>

            {/* Status badge */}
            <Badge className="w-fit mt-1 text-[10px] font-semibold rounded-full bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20 px-2.5 py-0.5">
              {letter.status}
            </Badge>
          </CardHeader>

          <CardContent className="pt-0 flex-1">
            <p className="text-sm text-slate-500 dark:text-[#8e8ea0] line-clamp-3 leading-relaxed">
              {letter.jobDescription || letter.content}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
