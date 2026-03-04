"use server";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { EmployerProfileData } from "../_components/employer-profile-schema";
import { prisma } from "@/lib/prisma";


export const updateEmployerProfileAction = async (
  data: EmployerProfileData
) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== "employer") {
      return { status: "ERROR", message: "Unauthorized" };
    }

    const {
      name,
      description,
      yearOfEstablishment,
      location,
      websiteUrl,
      organizationType,
      teamSize,
      avatarUrl,
      bannerImageUrl,
    } = data;

   await prisma.$transaction([
  prisma.employer.update({
    where: { id: currentUser.id },
    data: {
      name,
      description,
      location,
      websiteUrl,
      organizationType,
      teamSize,
      bannerImageUrl,
      yearOfEstablishment: yearOfEstablishment
        ? Number(yearOfEstablishment)
        : null,
    },
  }),

  prisma.user.update({
    where: { id: currentUser.id },
    data: { avatarUrl },
  }),
]);

    return { status: "SUCCESS", message: "Profile updated successfully" };
  } catch (error) {
    return {
      status: "ERROR",
      message: "Something went wrong, please try again",
    };
  }
};