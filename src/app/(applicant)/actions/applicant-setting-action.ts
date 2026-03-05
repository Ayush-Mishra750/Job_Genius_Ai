"use server";

import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import {
  applicantSettingsSchema,
  ApplicantSettingsSchema,
} from "../_utils/setting-schema";
import { prisma } from "@/lib/prisma";

export const createApplicantProfile = async (
  data: ApplicantSettingsSchema
) => {
  try {
    const user = await getCurrentUser();
    if (!user) return { status: "ERROR", message: "Unauthorized" };

    const { data: validatedData, error } =
      applicantSettingsSchema.safeParse(data);

    if (error) {
      return { status: "ERROR", message: error.issues[0].message };
    }

    const {
      name,
      phoneNumber,
      avatarUrl,
      location,
      dateOfBirth,
      nationality,
      gender,
      maritalStatus,
      education,
      experience,
      websiteUrl,
      biography,
      resumeUrl,
      resumeName,
      resumeSize,
    } = validatedData;

    await prisma.$transaction(async (tx) => {

      // 1️⃣ Update user table
      await tx.user.update({
        where: { id: user.id },
        data: {
          name,
          phoneNumber,
          avatarUrl,
        },
      });

      // 2️⃣ Create applicant profile
     await tx.applicant.upsert({
  where: { id: user.id },
  update: {
    location,
    dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
    nationality,
    gender,
    maritalStatus,
    education: "high_school",
    experience,
    websiteUrl,
    biography,
  },
  create: {
    id: user.id,
    location,
    dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
    nationality,
    gender,
    maritalStatus,
    education: "high_school",
    experience,
    websiteUrl,
    biography,
  },
});

      // 3️⃣ Save resume if uploaded
      if (resumeUrl) {
        await tx.resume.create({
          data: {
            applicantId: user.id,
            fileUrl: resumeUrl,
            fileName: resumeName || "Resume",
            fileSize: resumeSize || 0,
          },
        });
      }

    });

    return {
      status: "SUCCESS",
      message: "Profile created successfully!",
    };

  } catch (error) {
    console.error("CREATE PROFILE ERROR:", error);
    return {
      status: "ERROR",
      message: "Failed to create Profile.",
    };
  }
};