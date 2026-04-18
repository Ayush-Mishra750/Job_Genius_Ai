"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { interviewSchema, MockSchemaData } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Webcam } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { generateInterview } from '../_actions/interview';

type InterviewQuestion = {
  question: string;
  correctAnswer: string;
  explanation: string;
};
const Interview = () => {

  const [interviewStarted, setInterviewStarted] = useState(false);
 const [interviewData, setInterviewData] = useState<InterviewQuestion[] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatingInterview, setGeneratingInterview] = useState(false);

 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(interviewSchema),
  });

  const onSubmit = async (data:MockSchemaData) => {
    try {
     const interview=  await generateInterview(data);
     //   console.log(interview);
      setInterviewStarted(true);
      setInterviewData(interview);
      setGeneratingInterview(true);
    } catch (error) {
      toast.error(error.message || "Failed to generate interview");
    }
  };
  const handleNext = () => {
    if (!interviewData) return;

    if (currentQuestion < interviewData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // finishInterview();
    }
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
              <Input {...register("position")} placeholder='eg.Full stack Developer' />
              {errors.position && (
                <p className="text-sm text-destructive">
                  {errors.position.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Job Description</Label>
              <Textarea {...register("description")}  placeholder='eg. Responsible for developing and maintaining web applications using React and Node.js' />
              {errors.description && (
                <p className="text-sm text-destructive">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Years of Experience</Label>
              <Input {...register("experience")} type="number" placeholder='eg. 5' />
            </div>

            <div className="space-y-2">
              <Label>Tech Stack</Label>
              <Input {...register("techStack")} placeholder='eg. React, Node.js' />
            </div>

            <Button type="submit" disabled={generatingInterview} className="w-full cursor-pointer mt-3">
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
  // interview page
 return (
    <Card className="space-y-4">
      <CardHeader>
        <CardTitle>
          Question {currentQuestion + 1} of {interviewData?.length}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Webcam className="w-full max-w-sm border rounded" />

        <p className="text-lg font-medium">
          {interviewData?.[currentQuestion]?.question}
        </p>

        {/* <SpeechRecorder
          key={currentQuestion}
          onAnswer={(answer) => {
            setAnswers((prev) => {
              const updated = [...prev];
              updated[currentQuestion] = answer;
              return updated;
            });
          }}
        /> */}

        {/* <Button
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
        </Button> */}
      </CardContent>
    </Card>
  );
}

export default Interview
