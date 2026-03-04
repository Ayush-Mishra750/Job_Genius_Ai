import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { prisma } from "@/lib/prisma";

export async function checkIfApplied(jobId: number) {
  const session = await getCurrentUser();

  if (!session?.id) return false;

  const result = await prisma.application.findFirst({
    where: {
      jobId: jobId,
      applicantId: session.id,
    },
    select: {
      id: true,
    },
  });

  return !!result;
}

export const getJobIDDetails = async (id: number) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return {
        status: "ERROR",
        message: "Unauthorized",
      };
    }

    const job = await prisma.job.findUnique({
      where: {
        id: id,
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
};