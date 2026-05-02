"use server";

import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";
import { GoogleGenAI } from "@google/genai";
import { getSubscription } from "./subscription";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export type ResumeEvaluationResult = {
  matchScore: number;
  summary: string;
  matchedSkills: string[];
  missingSkills: string[];
  experienceMatch: "Low" | "Medium" | "High";
  recommendation: "Shortlist" | "Consider" | "Reject";
};

/**
 * AI Resume Matcher Action with Credit Control
 */
export async function evaluateResumeAction(applicationId: number) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== "employer") {
      throw new Error("Unauthorized: Only employers can evaluate resumes.");
    }

    // 1. Fetch Subscription & Application
    const [subscription, application] = await Promise.all([
      getSubscription(),
      prisma.jobApplication.findUnique({
        where: { id: applicationId },
        include: {
          job: true,
          resume: true,
          aiEvaluation: true,
        },
      }),
    ]);

    if (!application) throw new Error("Application not found.");
    if (!subscription) throw new Error("Subscription not found.");

    // 2. Check if already evaluated (No double charge)
    if (application.aiEvaluation) {
      return application.aiEvaluation as unknown as ResumeEvaluationResult;
    }

    // 3. Check Credits
    if (subscription.aiCredits !== -1 && subscription.aiCreditsUsed >= subscription.aiCredits) {
      throw new Error("CREDIT_EXHAUSTED");
    }

    // 4. Extract Text and Call Gemini
    const resumeUrl = application.resume.fileUrl;
    const resumeResponse = await fetch(resumeUrl);
    const resumeBuffer = await resumeResponse.arrayBuffer();
    const resumeBase64 = Buffer.from(resumeBuffer).toString("base64");

    const prompt = `
    You are an AI hiring assistant. Evaluate the candidate's resume against the Job Description.
    JD: ${application.job.description}
    (Resume content is in the provided PDF data)

    Return STRICT JSON:
    {
      "matchScore": number (0-100),
      "summary": "2-3 line summary",
      "matchedSkills": ["skill1"],
      "missingSkills": ["skill2"],
      "experienceMatch": "Low | Medium | High",
      "recommendation": "Shortlist | Consider | Reject"
    }
    `;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: "application/pdf",
                data: resumeBase64,
              },
            },
          ],
        },
      ],
    });

    const responseText = result.text || "";
    const cleanedJson = responseText.replace(/```(?:json)?\n?/g, "").trim();
    const evaluationData: ResumeEvaluationResult = JSON.parse(cleanedJson);

    // 5. Transaction: Save Evaluation & Deduct Credit
    const finalEvaluation = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Save evaluation
      const savedEval = await tx.aIEvaluation.create({
        data: {
          applicationId: application.id,
          employerId: user.id,
          jobId: application.jobId,
          matchScore: evaluationData.matchScore,
          summary: evaluationData.summary,
          recommendation: evaluationData.recommendation,
          matchedSkills: evaluationData.matchedSkills,
          missingSkills: evaluationData.missingSkills,
          experienceMatch: evaluationData.experienceMatch,
        },
      });

      // Deduct credit
      await tx.subscription.update({
        where: { employerId: user.id },
        data: { aiCreditsUsed: { increment: 1 } },
      });

      return savedEval;
    });

    return finalEvaluation as unknown as ResumeEvaluationResult;

  } catch (error) {
    console.error("Error in evaluateResumeAction:", error);

    throw new Error("Failed to evaluate resume. Please try again.");
  }
}
