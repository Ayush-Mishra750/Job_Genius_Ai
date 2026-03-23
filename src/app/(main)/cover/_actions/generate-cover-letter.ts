"use server";

import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { prisma } from "@/lib/prisma";
import { coverLetterSchema } from "@/lib/schema";

import { GoogleGenAI } from "@google/genai";




  const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });


export async function generateCoverLetter(data: coverLetterSchema) {
    const user = await getCurrentUser();
    console.log(user)

    if (!user || user.role!=="applicant") {
      throw new Error("Unauthorized");
    }
    const applicant=await prisma.applicant.findUnique({
      where:{
        id:user?.id
      },
      include:{
        user:true
      }
      
    })
    if (!applicant) {
      throw new Error("user not found");
    }
  try {
    const prompt=`You are a professional career coach and expert resume writer.

Your task is to generate a highly personalized, ATS-friendly cover letter based on the provided candidate and job details.

---
 Write a professional cover letter for a position at 

## Candidate Information:
- Name: ${applicant.user.name}
-Education:${applicant.education}
-experience: ${applicant.experience}

## Job Information:
- Company Name: ${
    data.companyName
  }. 
- Job Title: ${data.jobTitle} 
- Job Description:${data.jobDescription} 

## Instructions:

1. Write a professional and engaging cover letter tailored specifically to the job role and company.
2. Start with a strong opening that mentions the job title and company name.
3. Highlight the most relevant skills and experiences that match the job description.
4. Include 1–2 specific examples or achievements to demonstrate impact.
5. Keep the tone confident, concise, and human-like (avoid robotic or generic phrases).
6. Do NOT repeat the resume. Instead, complement it.
7. Keep the length between 250–400 words.
8. Avoid placeholders like "I am writing to apply..." — be more natural and impactful.
9. End with a strong closing statement and a call to action.

## Output Format (STRICT):

Return ONLY the cover letter text. Do not include explanations or extra formatting.

Structure:
- Greeting
- Introduction
- Body (skills + experience + alignment)
- Closing paragraph
- Signature (Candidate Name)

## Additional Notes:
- Make it sound tailored and unique, not generic.
- Prioritize relevance over length.
- Use simple, clear, and professional English.`


  
const result = await ai.models.generateContent({
   
    model: "gemini-2.5-flash",
    contents:prompt,
  });
  const content=  result.text?.trim();
  // console.log(content);
  //  const coverLetter = await prisma.coverLetter.create({
  //     data: {
  //       content,
  //       jobDescription: data.jobDescription,
  //       companyName: data.companyName,
  //       jobTitle: data.jobTitle,
  //       status: "completed",
  //       userId: user.id,
  //     },
  //   });

  } catch (error) {
    //  console.error("Error generating cover letter:", error.message);
    throw new Error("Failed to generate cover letter");
  }
  
}
