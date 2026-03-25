"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { ApplicationStatus } from "../../../../generated/prisma";


export async function updateApplicationStatus(appId: number, status: ApplicationStatus) {
  const user = await getCurrentUser();

  if (!user || user.role !== "employer") {
    throw new Error("Unauthorized");
  }

  await prisma.jobApplication.update({
    where: { id: appId },
    data: {
      status,
    },
  });

  return { success: true };
}