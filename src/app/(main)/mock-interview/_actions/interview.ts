"use server"
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { MockSchemaData } from "@/lib/schema";
import { GoogleGenAI } from "@google/genai";

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateInterview (data:MockSchemaData){
  // console.log("Generating interview with data:", data);
     const prompt = `
    Generate 5 open-ended technical interview questions along with ideal answer explanations 
    based on the following job details:

    - Job Position: ${data?.position}
    - Job Description: ${data?.description}
    - Years of Experience Required: ${data?.experience}
    - Tech Stacks: ${data?.techStack}

    The questions should assess problem-solving, design thinking, and real-world application 
    in ${data?.techStack} development.

    Return the response in this JSON format only, no additional text:
    {
      "questions": [
        {
          "question": "string",
          "correctAnswer": "string",
          "explanation": "string"
        }
      ]
    }
  `;
try {
      const user=await getCurrentUser();
      if(!user ||user.role!='applicant'){
          throw new Error("user not found");
      }

      const result = await ai.models.generateContent({
   
    model: "gemini-3-flash-preview",
    contents:prompt,
  });
  const response=result.text;
    const cleanedText = response?.replace(/```(?:json)?\n?/g, "").trim() || "";
    const interview = JSON.parse(cleanedText);
    // console.log("Generated interview questions:", interview);
    return interview.questions;
} catch (error) {
  throw new Error("Failed to generate interview");
}

}