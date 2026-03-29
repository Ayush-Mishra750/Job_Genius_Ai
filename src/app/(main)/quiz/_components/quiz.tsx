"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { QuizSchema, QuizSchemaData } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { generateQuiz, saveQuizResult } from "../_actions/quiz";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import QuizDisplay from "./quiz-display";
import { BarLoader } from "react-spinners";
import QuizResult from "./quiz-result";
import { JsonValue } from "@prisma/client/runtime/client";

const difficulty = ["easy", "medium", "hard"];
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
  improvementTip: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type ErrorResult = {
  message: string;
};

const Quiz = () => {
  const [quizData, setQuizData] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [quiz, setQuiz] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
   const [savingResult,setSavingResult]=useState(false);
const [resultData,setResultData]=useState(false);
const [result,setResult]=useState<AssessmentResult|null>(null);
 
 console.log(resultData)

useEffect(()=>{
setSavingResult(savingResult);
},[savingResult])

 useEffect(() => {
    const handleKeyDown = (event:any) => {
      if (event.key === "Enter" && answers[currentQuestion]) {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentQuestion, answers]);

  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors, isLoading, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(QuizSchema),
  });
  // console.log(getValues)

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: QuizSchemaData) => {
    setLoading(true);
    try {
      const res = await generateQuiz(data);
      console.log("res", res);

      toast.success("Quiz generated successfully!");
      setQuiz(true);
      setQuizData(res); 
      setResultData(res)
      setAnswers(new Array(res.questions.length).fill(null));
      reset();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

const startNewQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowExplanation(false);
    // await generateQuiz();
    // setResultData(null);
  };

  if (loading) {
    return <BarLoader className="mt-4" width={"100%"} color="gray" />;
  }

  if (!quiz) {
    return (
      <Card className="mx-2">
        <CardHeader>
          <CardTitle>Ready to test your knowledge?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This quiz contains 10 MCQ questions specific to your industry and
            skills. Take your time and choose the best answer for each question.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="font-bold">
                  Category
                </Label>
                <Input
                  id="companyName"
                  placeholder="e.g. Programming,Technical or Non-Technical"
                  {...register("category")}
                />
                {errors.category && (
                  <p className="text-sm text-destructive">
                    {errors.category.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle" className="font-bold">
                  Topic
                </Label>
                <Input
                  id="jobTitle"
                  placeholder="e.g. Arrays,Time & work"
                  {...register("topic")}
                />
                {errors.topic && (
                  <p className="text-sm text-destructive">
                    {errors.topic.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="DifficultyLevel" className="font-bold">
                Difficulty Level
              </Label>
              <Select onValueChange={(value) => setValue("difficulty", value)}>
                <SelectTrigger className="h-11 rounded-lg">
                  <SelectValue placeholder="Difficulty Level" />
                </SelectTrigger>
                <SelectContent>
                  {difficulty.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.difficulty && (
                <p className="text-sm text-destructive">
                  {errors.difficulty.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Button type="submit" size="lg" className="cursor-pointer w-full">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Start Quiz"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        correct++;
      }
    });
    return (correct / quizData.length) * 100;
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const finishQuiz = async () => {
    const score = calculateScore();
  try {
    console.log(quizData,answers,score)
const result=  await saveQuizResult(quizData, answers, score);
    toast.success("Quiz completed!");
    setResultData(true);
    setResult(result);
  } catch (error) {
    toast.error( "Failed to save quiz results");
  }
  finally{
    setResultData(false);
  }

  };

  if (!resultData) {
    return (
      <div className="mx-2">
        <QuizResult result={quizData} answers={answers} resultData={result} />
      </div>
    );
  }

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };
  

  const question = quizData[currentQuestion];
  // console.log("quz",quizData)

  return (
    <Card className="mx-2">
      <CardHeader>
        <CardTitle>
          Question {currentQuestion + 1} of {quizData.length}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium">{question.question}</p>
        <RadioGroup
          onValueChange={handleAnswer}
          value={answers[currentQuestion]}
          className="space-y-2">
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex flex-col gap-6 items-start">
        <Button
          className="w-full"
          onClick={handleNext}
          disabled={!answers[currentQuestion] || savingResult}>
          {savingResult && <Loader2 className="size-4 animate-spin" />}
          {currentQuestion < quizData.length - 1
            ? "Next Question"
            : "Finish Quiz"}
        </Button>

        {!showExplanation && (
          <Button
            className="w-full"
            onClick={() => setShowExplanation(true)}
            variant="outline"
            disabled={!answers[currentQuestion]}>
            Show Explanation
          </Button>
        )}
        {showExplanation && (
          <div className="p-4 bg-muted rounded-lg w-full">
            <p className="font-medium">Explanation:</p>
            <p className="text-muted-foreground">{question.explanation}</p>
          </div>
        )}
      </CardFooter>
    </Card>
  )
};

export default Quiz;
