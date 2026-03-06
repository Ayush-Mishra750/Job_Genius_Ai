import { prisma } from "@/lib/prisma";

export async function getApplicantProfileData(userId: number) {

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      applicant: {
        include: {
          resumes: true,
        },
      },
    },
  });

  if (!user) return null;

  const applicant = user.applicant;
  const resume = applicant?.resumes?.[0]; // first resume

  return {
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber ?? "",
    avatarUrl: user.avatarUrl ?? "",
    location: applicant?.location ?? "",
    dateOfBirth: applicant?.dateOfBirth
      ? new Date(applicant.dateOfBirth).toISOString().split("T")[0]
      : "",
    nationality: applicant?.nationality ?? "",
    gender: applicant?.gender ?? undefined,
    maritalStatus: applicant?.maritalStatus ?? undefined,
    education: applicant?.education ?? undefined,
    experience: applicant?.experience ?? "",
    websiteUrl: applicant?.websiteUrl ?? "",
    biography: applicant?.biography ?? "",
    resumeUrl: resume?.fileUrl ?? "",
    resumeName: resume?.fileName ?? "",
    resumeSize: resume?.fileSize ?? undefined,
  };
}

export type ApplicantProfileType = NonNullable<
  Awaited<ReturnType<typeof getApplicantProfileData>>
>;




export async function getAppliedJobsForApplicant(userId: number) {

  const applications = await prisma.jobApplication.findMany({
    where: {
      applicantId: userId,
    },
    include: {
      job: {
        include: {
          employer: true, // left join employer
        },
      },
    },
    orderBy: {
      appliedAt: "desc",
    },
  });

  return applications;
}