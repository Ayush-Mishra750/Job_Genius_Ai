"use server"
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { prisma } from "@/lib/prisma";
import {  QuizSchemaData } from "@/lib/schema";
import { GoogleGenAI } from "@google/genai";
import { JsonValue } from "@prisma/client/runtime/client";

  const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });


export async function generateQuiz({category,topic,difficulty}:QuizSchemaData){
const user=await getCurrentUser();

if(!user ||user.role!='applicant'){
    throw new Error("user not found");
}

  const prompt = `
   Generate the 10 quiz on the bases of  their ${category} ,${topic} and ${difficulty}.
Create a quiz with questions that reflect real interview patterns, inspired by previously asked questions from product-based companies, startups, and service-based companies, maintaining a realistic difficulty level.
    
    Each question should be multiple choice with 4 options.
    
    Return the response in this JSON format only, no additional text:
    {
      "questions": [
        {
          "question": "string",
          "options": ["string", "string", "string", "string"],
          "correctAnswer": "string",
          "explanation": "string"
        }
      ]
    }
    Analyze user performance to pinpoint specific weak areas and deliver personalized improvement strategies, including recommended topics, practice methods, and resources. 
  `;

  try {
    const result = await ai.models.generateContent({
   
    model: "gemini-2.5-flash",
    contents:prompt,
  });
  // console.log(result)
  const response=result.text;
  // console.log("respinse",response);
    const cleanedText = response?.replace(/```(?:json)?\n?/g, "").trim() || "";
    console.log("cleanedtext",cleanedText)
    const quiz = JSON.parse(cleanedText);
    console.log(quiz);
   return quiz.questions;

  } catch (error) {
    console.error("Error generating quiz:", error);
    throw new Error("Failed to generate quiz questions");
  }

}




export async function getAssessments() {
  const user= await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  const data = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!data) throw new Error("User not found");

  try {
    const assessments = await prisma.assessment.findMany({
      where: {
        id: user.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return assessments;
  } catch (error) {
    console.error("Error fetching assessments:", error);
    throw new Error("Failed to fetch assessments");
  }
}


