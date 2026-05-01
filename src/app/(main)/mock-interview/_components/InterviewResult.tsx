"use client";

import { Trophy, CheckCircle2, XCircle } from "lucide-react";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export type QuestionResult = {
  question: string;
  answer: string;
  userAnswer: string;
  score: number;
  explanation: string;
};

export type InterviewResultType = {
  interviewScore: number;
  improvementTip?: string | null;
  questions: QuestionResult[];
};

type InterviewResultProps = {
  result: InterviewResultType | null;
  onStartNew: () => void;
  hideStartNew?: boolean;
};

export const InterviewResult: React.FC<InterviewResultProps> = ({
  result,
  onStartNew,
  hideStartNew,
}) => {
  if (!result) return null;

  return (
    <div className="mx-auto">
      <h1 className="flex items-center gap-2 text-3xl text-primary">
        <Trophy className="h-6 w-6" />
        Interview Results
      </h1>

      <CardContent className="space-y-6">
        {/* Score Overview */}
        <div className="text-center space-y-2">
          <h1 className="font-bold text-primary">
            {Number(result.interviewScore).toFixed(1)}%
          </h1>
          <Progress value={result.interviewScore} className="w-full" />
        </div>

        {/* Improvement Tip */}
        {result.improvementTip && (
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-medium">Improvement Tip:</p>
            <p className="text-muted-foreground">{result.improvementTip}</p>
          </div>
        )}

        {/* Questions Review */}
        <div className="space-y-4">
          <h3 className="font-medium">Question Review</h3>
          {result.questions.map((q, index) => {
            const isCorrect = q.score >= 7;
            return (
              <div
                key={index}
                className="border rounded-lg p-4 space-y-2 bg-background">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex gap-2">
                    <span className="font-bold">{index + 1}.</span>
                    <p className="font-medium">{q.question}</p>
                  </div>
                  {isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                  )}
                </div>
                <div
                  className={`text-sm p-2 rounded ${
                    isCorrect
                      ? "bg-green-100 dark:bg-green-950"
                      : "bg-destructive/20"
                  }`}>
                  <p className="font-medium">Your answer (Score: {q.score}/10):</p>
                  <p>{q.userAnswer}</p>
                </div>
                {!isCorrect && (
                  <div className="text-sm bg-green-100 dark:bg-green-950 p-2 rounded">
                    <p className="font-medium">Correct answer:</p>
                    <p>{q.answer}</p>
                  </div>
                )}
                <div className="text-sm p-2 bg-muted rounded">
                  <p className="font-medium">Explanation:</p>
                  <p>{q.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </div>
  );
};
