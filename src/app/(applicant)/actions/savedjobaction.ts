"use server"
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { redirect } from "next/navigation";

export async function toggleSaveJob(jobId: number) {

  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  // check if already saved
  const existing = await prisma.savedJob.findFirst({
    where: {
      userId: user.id,
      jobId: jobId,
    },
  });

  // UNSAVE
  if (existing) {
    await prisma.savedJob.deleteMany({
      where: {
        userId: user.id,
        jobId: jobId,
      },
    });

    return { saved: false };
  }

  // SAVE
  await prisma.savedJob.create({
    data: {
      userId: user.id,
      jobId: jobId,
    },
  });

  return { saved: true };
}

export async function getSavedJobs(userId: number) {
    const user=await getCurrentUser();
    if(!user || user.role!=="applicant"){
       redirect("/login");
    }
  return await prisma.savedJob.findMany({
  where: {
    userId: userId,
  },
  select: {
    job: {
      select: {
        id: true,
        title: true,
        description: true,
        minSalary: true,
        maxSalary: true,
        salaryCurrency: true,
        salaryPeriod: true,
        location: true,
        jobType: true,
        jobLevel: true,
        workType: true,
        createdAt: true,
        employer: {
          select: {
            name: true,
          },
        },
      },
    },
  },
});
}

// delete unsave job
export async function unsaveJob(jobId: number) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

 
    await prisma.savedJob.deleteMany({
  where: {
    userId: user.id,
    jobId: jobId,
  },
});

  
}