"use server"
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { prisma } from "@/lib/prisma";
import {  QuizSchemaData } from "@/lib/schema";
import { GoogleGenAI } from "@google/genai";
// import { JsonValue } from "@prisma/client/runtime/client";
// import { ca } from "zod/v4/locales";

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

  const response=result.text;

    const cleanedText = response?.replace(/```(?:json)?\n?/g, "").trim() || "";
   
    const quiz = JSON.parse(cleanedText);
   
   
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
        applicantId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return assessments;
  } catch (error) {
    console.error("Error fetching assessments:", error);
    throw new Error("Failed to fetch assessments");
  }
}
export type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};
export type SaveQuizResultInput = {
  quizData: Question[];              
  answers: (string | null)[];        
  score: number;                    
  category: string;
  topic: string;
  difficulty: string;
};

export async function saveQuizResult(
  quizData: Question[],
  answers: (string | null)[],
  score: number,
  category: string,
  topic: string,
  difficulty: string
) {
  const user= await getCurrentUser();
  if (!user|| user.role!="applicant") throw new Error("Unauthorized");

 

  // if (!data) throw new Error("User not found");

  // console.log("questions",quizData)
  // console.log("answers",answers)
  // console.log("score",score)


  const questionResults = quizData.map((q, index) => ({
    question: q.question,
    answer: q.correctAnswer,
    userAnswer: answers[index],
    isCorrect: q.correctAnswer === answers[index],
    explanation: q.explanation,
  }));

  // Get wrong answers
  const wrongAnswers = questionResults.filter((q) => !q.isCorrect);

  // Only generate improvement tips if there are wrong answers
  let improvementTip = null;
  if (wrongAnswers.length > 0) {
    const wrongQuestionsText = wrongAnswers
      .map(
        (q) =>
          `Question: "${q.question}"\nCorrect Answer: "${q.answer}"\nUser Answer: "${q.userAnswer}"`
      )
      .join("\n\n");

    const improvementPrompt = `
      The user got the following ${category} and ${topic} interview questions wrong:

      ${wrongQuestionsText}

      Based on these mistakes, provide a concise, specific improvement tip.
      Focus on the knowledge gaps revealed by these wrong answers.
      Keep the response under 2 sentences and make it encouraging.
      Don't explicitly mention the mistakes, instead focus on what to learn/practice.
    `;

    try {
      const result = await ai.models.generateContent({
   
    model: "gemini-2.5-flash",
    contents:improvementPrompt,
  });

      improvementTip = result.text;
    } catch (error) {
      console.error("Error generating improvement tip:", error);
      // Continue without improvement tip if generation fails
    }
  }

  try {
    const assessment = await prisma.assessment.create({
  data: {
    quizScore: score,
    questions: questionResults,
    category: category || "Unknown",
    topic: topic || "Unknown",
    difficulty: difficulty || "Unknown",
    answers: answers as string[], // Store user answers separately for easier analysis
    improvementTip:
      improvementTip || "Great job! Keep practicing to improve even more.",

    applicant: {
      connect: {
        id: user.id, // ✅ THIS FIXES ERROR
      },
    },
  },
});

    return assessment;
  } catch (error) {
    console.error("Error saving quiz result:", error);
    throw new Error("Failed to save quiz result");
    
  }
}


