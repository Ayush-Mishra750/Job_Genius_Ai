"use server";


import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { applyJobSchema, ApplyJobSchemaType } from "../_utils/apply-job-schema";




export async function applyForJobAction(data:ApplyJobSchemaType){
try {
    const user=await getCurrentUser();

    if(!user){
        return {
            status:"ERROR",
            message:"Unauthorized. Please Login."
        }
    }
    const {data:validatedData,error}=applyJobSchema.safeParse(data);
    if(error){
        return {
            status:"ERROR",
            message:error.issues[0].message
        }
    }
    const {jobId,resumeId,coverLetter}=validatedData;

    const existingApplication=await prisma.jobApplication.findFirst({
        where:{
            jobId:jobId,
            applicantId:user.id,
        },
       
    })
    if(existingApplication){
        return {
            status:"ERROR",
            message:"You have already applied for this job."
        }
    }
    await prisma.jobApplication.create({
        data:{
            jobId,
            applicantId:user.id,
            resumeId,
            coverLetter:coverLetter||null,
        }
    })
    revalidatePath(`/jobs/${jobId}`);
    return {
        status:"SUCCESS",
        message:"Application submitted successfully!"
    }
} catch (error) {
    console.error("APPLY JOB ERROR:", error);
    return {
        status:"ERROR",
        message:"Failed to submit application."
    }
}
}