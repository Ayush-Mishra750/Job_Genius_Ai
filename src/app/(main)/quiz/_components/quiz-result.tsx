"use client";

import { Trophy, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { JsonValue } from "@prisma/client/runtime/client";
import { Question } from "../_actions/quiz";
// import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
// import { prisma } from "@/lib/prisma";
import { useEffect } from "react";

type AssessmentResult = {
  category: string;
  topic: string;
  difficulty: string | null;
  id: number;
  applicantId: number;
  quizScore: number;
  questions: JsonValue[];
  improvementTip: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type ErrorResult = {
  message: string;
};

export default function QuizResult({
  result,
  answers,
  resultData,
}: {
  result: Question[] | null;
  answers: (string | null)[] | null;
  resultData: AssessmentResult  | null;
}) {
  if (!result) return null;
  // const getAssessment = async () => {
  //   const user = await getCurrentUser();
  //   if (!user) throw new Error("Unauthorized");
  //   const data = await prisma.assessment.findUnique({
  //     where: {
  //       id: user.id,
  //     },
  //   });
  //   return data;
  // };

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
                     {resultData?.quizScore.toFixed(1)}%

            <p></p>
          </h1>
          <Progress value={resultData?.quizScore} className="w-full" />
        </div>

        {/* Improvement Tip */}
        {resultData?.improvementTip && (
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-medium">Improvement Tip:</p>
            <p className="text-muted-foreground">{resultData?.improvementTip}</p>
          </div>
        )}

        {/* Questions Review */}
        <div className="space-y-4">
          <h3 className="font-medium">Question Review</h3>
          {result?.map((q, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 space-y-2 bg-background"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium">{index+1}.{q?.question}</p>
                {answers?.[index] === q.correctAnswer ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                )}
              </div>
              <div
                className={`text-sm p-2 rounded ${
                  q.correctAnswer===answers?.[index]
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
