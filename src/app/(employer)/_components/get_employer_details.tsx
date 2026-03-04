"use server";

import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { prisma } from "@/lib/prisma";

export const getCurrentEmployerDetails = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return null;
  if (currentUser.role !== "employer") return null;

  const employer = await prisma.employer.findUnique({
    where: {
      id: currentUser.id,
    },
  });

  if (!employer) return null;

  const isProfileCompleted =
    employer.name &&
    employer.description &&
    employer.location &&
    employer.organizationType &&
    employer.yearOfEstablishment &&
    currentUser.avatarUrl;

  return {
    ...currentUser,
    employerDetails: employer,
    isProfileCompleted,
  };
};