"use client";

import { useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
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
import { InterviewResult } from "./InterviewResult";

// import { Interview } from "../../../../../generated/prisma";

type Question = {
  question: string;
  correctAnswer: string;
  explanation: string;
};

interface Interview {
  id: number;
  applicantId: number;
  interviewScore: number;
  questions: Question[];
  category: string;
  improvementTip: string | null;
  createdAt: Date;
  updatedAt: Date;
}
type StatsCardsProps = {
  interviews: Interview[];
};

export default function InterviewList({ interviews }: StatsCardsProps) {
  const router = useRouter();
  const [selectedInterview, setSelectedInterview] = useState<Interview | null>(null);

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex md:items-center justify-between flex-col md:flex-row gap-4 items-start">
            <div>
              <CardTitle className="gradient-title text-3xl md:text-4xl">
                Recent interviews
              </CardTitle>
              <CardDescription>
                Review your past interview performance
              </CardDescription>
            </div>
            <Button
              onClick={() => {
                router.push("/mock-interview/mock");
              }}
              className=" w-48 h-10 cursor-pointer">
              Start New Interview
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {interviews
              ?.slice()
              .sort(
  (a, b) =>
    new Date(b.createdAt).getTime() -
    new Date(a.createdAt).getTime()
)
              .map((interview, i) => (
                <Card
                  key={interview.id}
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setSelectedInterview(interview)}>
                  <CardHeader>
                    <CardTitle>
                      {i + 1}
                      {". "}
                      {format(
                        new Date(interview.createdAt),
                        "MMMM dd, yyyy - HH:mm"
                      )}
                    </CardTitle>
                    <CardDescription className="flex justify-between w-full">
                      <div>Grades: {interview.interviewScore.toFixed(1)}%</div>
                    </CardDescription>
                  </CardHeader>
                  {interview.improvementTip && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {interview.improvementTip}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={!!selectedInterview}
        onOpenChange={() => setSelectedInterview(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <InterviewResult
            result={selectedInterview}
            hideStartNew
            onStartNew={() => router.push("/mock-interview/mock")}
          /> 
        </DialogContent>
      </Dialog>
    </>
  );
}
