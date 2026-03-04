"use server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { JobFormData } from "../_components/job_form_schema";
import { Prisma } from "@/generated/prisma/browser";

export const createJobAction = async (data: JobFormData) => {
  try {
    const currentUser = await getCurrentUser();
console.log(currentUser)
    if (!currentUser || currentUser.role !== "employer") {
      return { status: "ERROR", message: "Unauthorized" };
    }

    await prisma.job.create({
      data: {
        title: data.title,
        description: data.description,
        location: data.location,
        workType: data.workType,
        jobLevel: data.jobLevel,
        jobType: data.jobType,
        maxSalary: data.maxSalary,
        minSalary: data.minSalary,
        minEducation: data.minEducation,
        salaryCurrency: data.salaryCurrency,
        salaryPeriod: data.salaryPeriod,
        experience: data.experience,
        tags: data.tags,
        expiresAt: data.expiresAt,
        employerId: currentUser.id,
      },
    });

    return { status: "SUCCESS", message: "Job created successfully" };
  } catch (error) {
    console.error("Create Job Error:", error);
    return {
      status: "ERROR",
      message: "Something went wrong, please try again",
    };
  }
};

export const updateJobAction = async (
  jobId: number,
  values: Prisma.JobUpdateInput
) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== "employer") {
      return { status: "ERROR", message: "Unauthorized" };
    }

    // Check job ownership first
    const existingJob = await prisma.job.findFirst({
      where: {
        id: jobId,
        employerId: currentUser.id,
      },
    });

    if (!existingJob) {
      return { status: "ERROR", message: "Job not found or unauthorized" };
    }

    await prisma.job.update({
      where: { id: jobId },
      data: {
        ...values,
        updatedAt: new Date(),
      },
    });

    return { status: "SUCCESS", message: "Job updated successfully" };
  } catch (error) {
    console.error("Update Job Error:", error);
    return {
      status: "ERROR",
      message: "Failed to update job",
    };
  }
};



export async function getJobs() {
  return await prisma.job.findMany({
    where: {

      deletedAt: null,
    },
  })
}


export async function deleteAction(jobId: number) {
  try {
    await prisma.job.update({
      where: { id: jobId },
      data: {
        deletedAt: new Date(),
      },
    });

    return {
      status: "SUCCESS",
      message: "Job deleted successfully!",
    };
  } catch (error) {
    return {
      status: "ERROR",
      message: "Failed to delete job",
    };
  }
}



export async function getJobIDAction(jobId: number) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== "employer") {
      return {
        status: "ERROR",
        message: "Unauthorized",
      };
    }

    const job = await prisma.job.findFirst({
      where: {
        id: jobId,
        employerId: currentUser.id,
        deletedAt: null,
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
    return {
      status: "ERROR",
      message: "Failed to fetch job details",
    };
  }
}

