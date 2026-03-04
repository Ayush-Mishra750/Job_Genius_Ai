"use server";

import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { prisma } from "@/lib/prisma";

export async function applyToJob(jobId: number, resumeUrl: string) {

  const session = await getCurrentUser();

  if (!session?.id) {
    return {
      status: "ERROR",
      message: "Unauthorized",
    };
  }

  const userId = session.id;

  // 1️⃣ Check if already applied
  const existing = await prisma.application.findFirst({
    where: {
      jobId: jobId,
      applicantId: userId,
    },
  });

  if (existing) {
    return {
      status: "ERROR",
      message: "Already applied",
    };
  }

  // 2️⃣ Insert application
  const data = await prisma.application.create({
    data: {
      jobId: jobId,
      applicantId: userId,
      resumeUrl: resumeUrl,
      status: "pending",
    },
  });

  if (data) {
    return {
      status: "SUCCESS",
      message: "Applied Successfully",
    };
  }

  return {
    status: "ERROR",
    message: "Application failed",
  };
}