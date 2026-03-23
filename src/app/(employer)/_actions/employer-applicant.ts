"use server";

import { prisma } from "@/lib/prisma";

export const getEmployerApplications = async (employerId: number) => {
  try {
    const applications = await prisma.jobApplication.findMany({
      where: {
        job: {
          employerId: employerId,
        },
      },

      include: {
        job: true,

        applicant: true,

        resume: true,
      },

      orderBy: {
        appliedAt: "desc",
      },
    });

    return applications || [];
  } catch (error) {
    console.log("error occur in job applications");
    return [];
  }
};
