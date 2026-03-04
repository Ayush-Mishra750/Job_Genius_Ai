"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UploadCloud } from "lucide-react";
import { useUploadThing } from "@/lib/uploadthing";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";
import { applyToJob } from "./ApplyJob";



export default function ApplyJob({
  jobId,
  isApplied,
}: {
  jobId: number;
  isApplied: boolean;
}) {
  const router=useRouter();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
 
  const { startUpload, isUploading } = useUploadThing("resumeUploader");
  // console.log("start",startUpload,isUploading);

  const onApply = async () => {
    try {
       if (!file) {
      toast.error("upload valid pdf")
      return null;
    };

    // 🔥 THIS IS startUpload
    const uploaded = await startUpload([file]);

    const resumeUrl = uploaded?.[0]?.url;
    if (!resumeUrl) throw new Error("Upload failed");

   const result= await applyToJob(jobId, resumeUrl);
   if(result){
     toast.success(result.message);
     setFile(null);
   router.push(`/dashboard/find-jobs/${jobId}`)
    }

    } catch (error) {
       console.log(error)
      toast.error("something went wrong")
    }
  };
    return (
    <div className="flex items-center justify-center">
      {/* Apply Button */}
     <Button
  onClick={() => {
    if (!isApplied) setOpen(true);
  }}
  disabled={isApplied}
  className={`rounded-2xl shadow-md px-6 cursor-pointer
    ${isApplied 
      ? "bg-green-600 hover:bg-green-600 text-white cursor-not-allowed" 
      : "bg-red-600 hover:bg-red-700 text-white"
    }
  `}
>
  {isApplied ? "Applied" : "Apply Now"}
</Button>



      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Card className=" h-80 w-150 rounded-2xl shadow-xl">
                <CardHeader>
                  <CardTitle>Apply for Job</CardTitle>
                </CardHeader>

                <CardContent className="space-y-5">
                  {/* Resume Upload */}
                  <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer hover:bg-muted transition">
                    <UploadCloud className="mb-2" />
                    <span className="text-sm text-muted-foreground">
                      {file ? file.name : "Upload Resume (PDF/DOC)"}
                    </span>
                    <Input
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        setFile(e.target.files ? e.target.files[0] : null)
                      }
                    />
                  </label>

                  {/* Buttons */}
                  <div className="flex justify-center gap-3 cursor-pointer">
                    <Button
                      variant="outline"
                      onClick={() =>{ setOpen(false) ,setFile(null)}}
                     
                      disabled={isUploading}
                      className="cursor-pointer"
                    >
                      Cancel
                    </Button>

                    <Button  disabled={isUploading} onClick={onApply} className="cursor-pointer">
                      {isUploading ? "Applying..." : "Apply"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

