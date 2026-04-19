"use client";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { interviewSchema, MockSchemaData } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { generateInterview, saveInterviewResult } from "../_actions/interview";
import SpeechRecorder from "./SpeechRecoder";
import { InterviewResult } from "./InterviewResult";
import { Volume2 } from "lucide-react";


type Question = {
  question: string;
  correctAnswer: string;
  explanation: string;
};
type QuestionResult = {
  question: string;
  answer: string;
  userAnswer: string;
  interviewScore: number;
  explanation: string;
  isCorrect: boolean;
};
type InterviewResultType = {
  interviewScore: number;
  improvementTip?: string | null;
 questions: QuestionResult[];
};


const Interview = () => {
  const [interviewStarted, setInterviewStarted] = useState(false);
 const [interviewData, setInterviewData] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatingInterview, setGeneratingInterview] = useState(false);
  const [resultData, setResultData] = useState<InterviewResultType | null>(null);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(interviewSchema),
  });

  const onSubmit = async (data: MockSchemaData) => {
    try {
      const interview = await generateInterview(data);
      //   console.log(interview);
      setInterviewStarted(true);
      setInterviewData(interview);
      setGeneratingInterview(true);
    } catch (error:unknown) {
      toast.error((error as Error).message || "Failed to generate interview");
    }
  };

  const handleNext = () => {
    if (!interviewData) return;

    if (currentQuestion < interviewData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      finishInterview();
    }
  };

   const finishInterview = async () => {
    if (!interviewData) return;

    setIsSubmitting(true);
    try {
    const result =  await saveInterviewResult(interviewData, answers);
      toast.success("Interview completed!");
     setResultData({
  interviewScore: result.interviewScore,
  improvementTip: result.improvementTip,
  questions: (result.questions as QuestionResult[]) ?? [],
});
    } catch (error:unknown) {
      toast.error((error as Error).message || "Failed to save interview results");
      setIsSubmitting(false);
    }
  };

   if (resultData) {
    return (
      <InterviewResult
        result={resultData}
        onStartNew={() => {
          setInterviewStarted(false);
          setCurrentQuestion(0);
          setAnswers([]);
        }}
      />
    );
  }
  const speakText = (text: string) => {
  if (!("speechSynthesis" in window)) {
    alert("Your browser does not support TTS");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);

  // Optional settings
  utterance.rate = 1; // speed (0.5 - 2)
  utterance.pitch = 1; // tone
  utterance.lang = "en-US"; // language

  window.speechSynthesis.cancel(); // stop previous speech
  window.speechSynthesis.speak(utterance);
};

  if (!interviewStarted) {
    return (
      <Card className="m-4  ">
        <CardHeader>
          <CardTitle>Enter Job Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label>Job Title</Label>
              <Input
                {...register("position")}
                placeholder="eg.Full stack Developer"
              />
              {errors.position && (
                <p className="text-sm text-destructive">
                  {errors.position.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Job Description</Label>
              <Textarea
                {...register("description")}
                placeholder="eg. Responsible for developing and maintaining web applications using React and Node.js"
              />
              {errors.description && (
                <p className="text-sm text-destructive">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Years of Experience</Label>
              <Input
                {...register("experience")}
                type="number"
                placeholder="eg. 5"
              />
            </div>

            <div className="space-y-2">
              <Label>Tech Stack</Label>
              <Input
                {...register("techStack")}
                placeholder="eg. React, Node.js"
              />
            </div>

            <Button
              type="submit"
              disabled={generatingInterview}
              className="w-full cursor-pointer mt-3"
            >
              {generatingInterview ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Start Interview"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
   if (!interviewData) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="animate-spin" />
      </div>
    );
  }
  // interview page
  return (
    <Card className="space-y-4">
      <CardHeader>
        <CardTitle className="text-center">
          Question :-{currentQuestion + 1} of {interviewData?.length}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
               <div className="relative w-full max-w-md mx-auto">
  {/* Glow Background */}
  <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-purple-500/40 blur-lg opacity-70 rounded-2xl"></div>

  {/* Webcam Container */}
  <div className="relative bg-background rounded-2xl overflow-hidden border shadow-xl">
    
    {/* Header */}
    <div className="flex items-center justify-between px-3 py-2 bg-muted/50 backdrop-blur-sm">
      <span className="text-sm font-medium">Live Interview</span>
      <span className="flex items-center gap-1 text-xs text-green-500">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Recording
      </span>
    </div>

    {/* Webcam */}
    <Webcam className="w-full aspect-video object-cover" />

    {/* Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
  </div>
</div>


        <p className="text-lg font-medium">
          {interviewData?.[currentQuestion]?.question}
        </p>

        <SpeechRecorder
          key={currentQuestion}
          onAnswer={(answer) => {
            setAnswers((prev) => {
              const updated = [...prev];
              updated[currentQuestion] = answer;
              return updated;
            });
          }}
        />

        <Button
          onClick={handleNext}
          disabled={!answers[currentQuestion] || isSubmitting}
          className="w-full"
        >
          {currentQuestion < interviewData?.length - 1 ? (
            "Next Question"
          ) : isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Finish Interview"
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Interview;
