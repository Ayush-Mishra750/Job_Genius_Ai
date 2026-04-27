"use server"
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { prisma } from "@/lib/prisma";
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

type Question = {
  question: string;
  correctAnswer: string;
  explanation: string;
};

type EvaluatedAnswer = {
  question: string;
  answer: string;
  userAnswer: string;
  score: number;
  explanation: string;
};

export const saveInterviewResult = async (
  questions: Question[],
  answers: string[]
)=>{
  try{
      const user=await getCurrentUser();
      if(!user ||user.role!='applicant'){
          throw new Error("user not found");
      }
      //save result to database
  

   type AIResponse = {
  score: number;
};

async function evaluateAnswer(
  question: string,
  correctAnswer: string,
  userAnswer: string
): Promise<EvaluatedAnswer["score"]> {
  const evaluatePrompt = `
    Question: "${question}"
    Ideal Answer: "${correctAnswer}"
    User Answer: "${userAnswer}"

    Return a JSON object with a score from 0 to 10:
    {
      "score": number
    }
  `;

  try {
    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: evaluatePrompt,
    });

    const text =  result.text ?? "";

    if (!text) return 0;

    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

    let parsed: AIResponse;

    try {
      parsed = JSON.parse(cleanedText);
    } catch {
      return 0;
    }

    return Math.max(0, Math.min(10, parsed.score));
  } catch (error) {
    console.error("Error evaluating answer: ", error);
    return 0;
  }
}
  const evaluatedAnswers = await Promise.all(
  questions.map(async (q, index) => {
    const score = await evaluateAnswer(
      q.question,
      q.correctAnswer,
      answers[index]
    );

    return {
      question: q.question,
      answer: q.correctAnswer,
      userAnswer: answers[index],
      score,
      explanation: q.explanation,
    };
  })
);

const totalScore = evaluatedAnswers.reduce((sum, q) => sum + q.score, 0);
  const wrongAnswers = evaluatedAnswers.filter((q) => q.score < 5);
  let improvementTip = null;

 if (wrongAnswers.length > 0) {
    const wrongQuestionsText = wrongAnswers
      .map(
        (q) =>
          `Question: "${q.question}"\nCorrect Answer: "${q.answer}"\nUser Answer: "${q.userAnswer}"`
      )
      .join("\n\n");

    const improvementPrompt = `
      The user got the following technical interview questions wrong:

      ${wrongQuestionsText}

      Based on these mistakes, provide a concise, specific improvement tip.
      Keep the response under 2 sentences.
    `;

    try {
      const tipResult=await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents:improvementPrompt,
      })
      improvementTip =  tipResult.text?.replace(/```(?:json)?\n?/g, "").trim() || "Review the concepts related to the questions you missed.";
      improvementTip = improvementTip.trim();

       
    } catch (error) {
      console.error("Error generating improvement tip:", error);
    }

  }
   const interview = await prisma.interview.create({
      data: {
        applicantId: user.id,
        interviewScore: totalScore,
        questions: evaluatedAnswers,
        category: "Technical",
        improvementTip,
      },
    });
     return interview;

  }catch(error){
 console.error("Error saving interview result:", error);
    throw new Error("Failed to save interview result");
  }
}


export async function getInterviews() {
  const  user  = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

 

  if (!user) throw new Error("User not found");

  try {
    const interviews = await prisma.interview.findMany({
      where: {
        applicantId: user.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return interviews;
  } catch (error) {
    console.error("Error fetching interviews:", error);
    throw new Error("Failed to fetch interviews");
  }
}