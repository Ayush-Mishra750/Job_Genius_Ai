"use client"
// import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Edit2, Eye, Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
// import { useRouter } from "next/navigation";
// import { revalidatePath } from "next/cache";
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
        router.refresh()
      }
    } catch (error) {
      toast.error("Failed to delete cover letter");
    }
  };

  if (!coverLetters?.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Cover Letters Yet</CardTitle>
          <CardDescription>
            Create your first cover letter to get started
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-3 md:grid-2 items-start ml-5 mt-5">
      {coverLetters.map((letter) => (
        <Card key={letter.id} className=" md:w-100 h-48 overflow-hidden">
          <CardHeader>
            <div className="flex gap-4 items-start justify-between">
              <div>
                <CardTitle className="text-xl gradient-title">
                  {letter.jobTitle} at {letter.companyName}
                </CardTitle>
                <CardDescription>
                  Created :{format(new Date(letter.createdAt), "PPP")}
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <AlertDialog>
                  <Link href={`/cover/${letter.id}`}>
                    <Button variant="outline" size="icon" onClick={()=>handleDelete(letter.applicantId)} className="cursor-pointer">
                      <Eye className="h-4 w-4 "/>
                    </Button>
                  </Link>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="icon" className="cursor-pointer">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Cover Letter?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your cover letter for {letter.jobTitle} at{" "}
                        {letter.companyName}.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(letter.id)}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90 cursor-pointer"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm overflow-hidden leading-tight line-clamp-2">
            {letter.jobDescription}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
