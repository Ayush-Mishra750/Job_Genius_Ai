// "use client";

import { Trophy, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { JsonValue } from "@prisma/client/runtime/client";
// import { Question } from "../_actions/quiz";
import { useEffect } from "react";
import { getAssessments } from "../_actions/quiz";


type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};
type AssessmentResult = {
  category: string;
  topic: string;
  difficulty: string | null;
  id: number;
  applicantId: number;
  quizScore: number;
  questions: JsonValue[];
  answers: (string | null)[];
  improvementTip: string | null;
  createdAt: Date;
  updatedAt: Date;
};





export default async function QuizList({assessments}: { assessments: AssessmentResult[] | null }) {
    // const assessments=await getAssessments();
    const {questions,improvementTip,quizScore,answers}=assessments ?.[0] || {};
  
    const typedQuestions = (questions || []).map((q: any) => {
  // handle nested case also (important!)
  const realQ = typeof q.question === "object" ? q.question : q;

  return {
    question: realQ.question,
    options: realQ.options,
    correctAnswer: realQ.correctAnswer,
    explanation: realQ.explanation,
  };
});
 
  

  return (
    <div className="mx-auto">
      <h1 className="flex items-center gap-2 text-3xl text-primary">
        <Trophy className="h-6 w-6" />
        Quiz Results
      </h1>

      <CardContent className="space-y-6">
        {/* Score Overview */}
        <div className="text-center space-y-2">
          <h1 className="font-bold text-primary">
                     {quizScore}%

            <p></p>
          </h1>
          <Progress value={quizScore} className="w-full" />
        </div>

        {/* Improvement Tip */}
        {improvementTip && (
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-medium">Improvement Tip:</p>
            <p className="text-muted-foreground">{improvementTip}</p>
          </div>
        )}

        {/* Questions Review */}
        <div className="space-y-4">
          <h3 className="font-medium">Question Review</h3>
          {typedQuestions?.map((q, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 space-y-2 bg-background"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium">{index+1}.{q.question}</p>
                {/* <p>{JSON.stringify(q.question)}</p>  */}
                {answers?.[index] === q.correctAnswer ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                )}
              </div>
              <div
                className={`text-sm p-2 rounded ${
                  q.correctAnswer === answers?.[index]
                    ? "bg-green-100 dark:bg-green-950"
                    : "bg-destructive/20"
                }`}
              >
                <p className="font-medium">Your answer:</p>
                <p>{answers?.[index] ?? "Not answered"}</p>
              </div>
              {
                <div className="text-sm bg-green-100 dark:bg-green-950 p-2 rounded">
                  <p className="font-medium">Correct answer:</p>
                  <p>{q.correctAnswer}</p>
                </div>
              }
              <div className="text-sm bg-muted p-2 rounded">
                <p className="font-medium">Explanation:</p>
                <p>{q.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  );
}
