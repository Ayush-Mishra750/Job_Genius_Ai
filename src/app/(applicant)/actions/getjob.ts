"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllJobs() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return {
        status: "ERROR",
        message: "Unauthorized",
        data: [],
      };
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const jobsData = await prisma.job.findMany({
      where: {
        deletedAt: null,
        OR: [
          { expiresAt: null },
          { expiresAt: { gte: today } },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        employer: {
          include: {
            user: {
              select: {
                avatarUrl: true,
              },
            },
          },
        },
      },
    });

    const jobs = jobsData.map((job) => ({
      id: job.id,
      title: job.title,
      description: job.description,
      minSalary: job.minSalary,
      maxSalary: job.maxSalary,
      salaryCurrency: job.salaryCurrency,
      salaryPeriod: job.salaryPeriod,
      location: job.location,
      jobType: job.jobType,
      jobLevel: job.jobLevel,
      workType: job.workType,
      createdAt: job.createdAt,
      companyName: job.employer.name,
      companyLogo: job.employer.user.avatarUrl,
    }));

    return {
      status: "SUCCESS",
      data: jobs,
    };

  } catch (error) {
    console.error(error);

    return {
      status: "ERROR",
      message: "Failed to fetch jobs",
      data: [],
    };
  }
}



export type jobCardType = Awaited<ReturnType<typeof getAllJobs>>["data"][number];



export async function getJobIDDetails(id: number) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return {
        status: "ERROR",
        message: "Unauthorized",
      };
    }

    const job = await prisma.job.findUnique({
      where: { id },
      include: {
        employer: {
          include: {
            user: {
              select: {
                avatarUrl: true,
              },
            },
          },
        },
      },
    });

    if (!job) {
      return {
        status: "ERROR",
        message: "Job not found",
      };
    }

    return {
      status: "SUCCESS",
      data: job,
    };

  } catch (error) {
    console.error(error);

    return {
      status: "ERROR",
      message: "Failed to fetch job details",
    };
  }
}


export async function appliedJob(){
   noStore(); 
 const user=await getCurrentUser();
    if(!user || user.role!=="applicant"){
       redirect("/login");
    }
 const result=await prisma.jobApplication.findMany({
  where:{
    applicantId: user.id
  },
 include:{
    job:true,
     resume:true
 }
 })

  if(!result){
    return {
      status:"ERROR",
      message:"invalid job"
    }
  }

    return{status:"SUCCESS",data: result};
}