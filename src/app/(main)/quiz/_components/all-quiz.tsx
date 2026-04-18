"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import QuizList from "./quiz-list";
import { JsonValue } from "@prisma/client/runtime/client";
// import QuizList from "./quiz-result";

type AssessmentResult = {
  category: string;
  topic: string;
  difficulty: string | null;
  id: number;
  applicantId: number;
  quizScore: number;
  questions: JsonValue[]; // 👈 keep simple here
  answers: (string | null)[];
  improvementTip: string | null;
  createdAt: Date;
  updatedAt: Date;
};

const AllQuiz = ({ assessments }: { assessments: AssessmentResult[] }) => {
  const router = useRouter();
  const [selectedQuiz, setSelectedQuiz] =
    useState<AssessmentResult | null>(null);

  return (
    <>
      <Card className="m-2">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="font-bold text-2xl">
                Recent Quizzes
              </CardTitle>
              <CardDescription>
                Review your past quiz performance
              </CardDescription>
            </div>

            <Button
              onClick={() => router.push("/quiz/mock")}
              className="w-48 h-10 cursor-pointer"
            >
              Start New Quiz
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {assessments
              ?.slice()
              .sort(
                (a, b) =>
                  Number(new Date(b.createdAt)) -
                  Number(new Date(a.createdAt))
              )
              .map((assessment, i) => (
                <Card
                  key={assessment.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => setSelectedQuiz(assessment)}
                >
                  <CardHeader>
                    <CardTitle>
                      {i + 1}.{" "}
                      {format(
                        new Date(assessment.createdAt),
                        "MMMM dd, yyyy - HH:mm"
                      )}
                    </CardTitle>

                    <CardDescription className="flex justify-between">
                      <div>
                        Score: {assessment.quizScore.toFixed(1)}%
                      </div>

                      {/* ✅ SAFE (no object render) */}
                      <div>
                        {assessment.questions?.length} Questions
                      </div>
                    </CardDescription>
                  </CardHeader>

                  {assessment.improvementTip && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {assessment.improvementTip}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* 🔥 Dialog */}
      <Dialog
        open={!!selectedQuiz}
        onOpenChange={() => setSelectedQuiz(null)}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Quiz Result</DialogTitle>
          </DialogHeader>

          {/* ✅ PASS SELECTED QUIZ ONLY */}
         
            <QuizList assessments={assessments} />
          
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllQuiz;