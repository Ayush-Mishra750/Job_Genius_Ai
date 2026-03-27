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
import { generateQuiz } from "../_actions/quiz";
import { toast } from "sonner";

const difficulty = ["easy", "medium", "hard"];

const Quiz = () => {
const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);

   const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isLoading, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(QuizSchema),
  });

//    useEffect(() => {
//     if (quizData) {
//     //   setAnswers(new Array(quizData.length).fill(null));
//     }
//   }, [quizData]);

  const onSubmit = async (data: QuizSchemaData) => {
    try {
      const res = await generateQuiz(data);
      console.log(res);

      toast.success("Quiz generated successfully!");

      // router.push(`/cover/${res.id}`);
      reset();
    } catch (error) {
      toast.error( "Failed to generate cover letter");
    }
  };

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
              <Label htmlFor="companyName" className="font-bold">Category</Label>
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
              <Label htmlFor="jobTitle" className="font-bold">Topic</Label>
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
            <Label htmlFor="DifficultyLevel" className="font-bold">Difficulty Level</Label>
            <Select  onValueChange={(value) => setValue("difficulty", value)}>
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
            <Button type="submit" size='lg' className="cursor-pointer w-full">
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
};

export default Quiz;


// "use client";

// import { useState, useEffect } from "react";
// import { toast } from "sonner";
// import { Icons } from "@/components/ui/icons";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// // import { generateQuiz, saveQuizResult } from "@/actions/quiz";
// import QuizResult from "./quiz-result";
// import { BarLoader } from "react-spinners";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { QuizSchema, QuizSchemaData } from "@/lib/schema";
// import { Input } from "@/components/ui/input";
// import { Loader2 } from "lucide-react";
// import { generateQuiz } from "../_actions/quiz";

// const difficulty = ["easy", "medium", "hard"];


// export default function Quiz() {
//   const [quizData, setQuizData] = useState<[]>([]);
//   const [resultData, setResultData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState<[]>([]);
//   const [showExplanation, setShowExplanation] = useState(false);

//   // 🔥 Generate Quiz
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors, isLoading, isSubmitting },
//     reset,
//   } = useForm({
//     resolver: zodResolver(QuizSchema),
//   });


//    const onSubmit = async (data: QuizSchemaData) => {
//     try {
//       setLoading(true);

//       const res = await generateQuiz(data);
//       setQuizData(res.questions);
//     //   setAnswers(new Array(res.questions.length).fill(null));
//       toast.success("Quiz generated successfully!");
//       reset();
//     }
//     catch (error) {
//       toast.error("Failed to generate quiz");
//     } finally {
//       setLoading(false);
//     }


//   // 🔥 Answer select
//   const handleAnswer = (answer: string) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = answer;
//     setAnswers(newAnswers);
//   };

//   // 🔥 Next question
//   const handleNext = () => {
//     if (currentQuestion < quizData.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setShowExplanation(false);
//     } else {
//       finishQuiz();
//     }
//   };

//   // 🔥 Score calculation
//   const calculateScore = () => {
//     let correct = 0;
//     answers.forEach((ans, i) => {
//       if (ans === quizData[i].correctAnswer) correct++;
//     });
//     return (correct / quizData.length) * 100;
//   };

//   // 🔥 Save Result
//   const finishQuiz = async () => {
//     try {
//       const score = calculateScore();

//       const res = await saveQuizResult({
//         quiz: quizData,
//         answers,
//         score,
//       });

//       setResultData(res);
//       toast.success("Quiz completed!");
//     } catch (error) {
//       toast.error("Failed to save result");
//     }
//   };

//   // 🔥 Restart
//   const startNewQuiz = () => {
//     setQuizData([]);
//     setAnswers([]);
//     setCurrentQuestion(0);
//     setShowExplanation(false);
//     setResultData(null);
//   };

//   // 🔥 Loading
//   if (loading) {
//     return <BarLoader className="mt-4" width={"100%"} color="gray" />;
//   }

//   // 🔥 Result screen
//   if (resultData) {
//     return (
//       <div className="mx-2">
//         <QuizResult result={resultData} onStartNew={startNewQuiz} />
//       </div>
//     );
//   }

//   // 🔥 Start screen
//   if (!quizData.length) {
//     return (
//       <Card className="mx-2">
//         <CardHeader>
//           <CardTitle>Ready to test your knowledge?</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-muted-foreground">
//             This quiz contains 10 MCQs. Start when you&apos;re ready 🚀
//           </p>
//         </CardContent>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
//             <div className="space-y-2">
//               <Label htmlFor="companyName" className="font-bold">Category</Label>
//               <Input
//                 id="companyName"
//                 placeholder="e.g. Programming,Technical or Non-Technical"
//                 {...register("category")}
//               />
//               {errors.category && (
//                 <p className="text-sm text-destructive">
//                   {errors.category.message}
//                 </p>
//               )}
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="jobTitle" className="font-bold">Topic</Label>
//               <Input
//                 id="jobTitle"
//                 placeholder="e.g. Arrays,Time & work"
//                 {...register("topic")}
//               />
//               {errors.topic && (
//                 <p className="text-sm text-destructive">
//                   {errors.topic.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="DifficultyLevel" className="font-bold">Difficulty Level</Label>
//             <Select  onValueChange={(value) => setValue("difficulty", value)}>
//               <SelectTrigger className="h-11 rounded-lg">
//                 <SelectValue placeholder="Difficulty Level" />
//               </SelectTrigger>
//               <SelectContent>
//                 {difficulty.map((type) => (
//                   <SelectItem key={type} value={type}>
//                     {type}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             {errors.difficulty && (
//               <p className="text-sm text-destructive">
//                 {errors.difficulty.message}
//               </p>
//             )}
//           </div>

//           <div className="flex justify-end">
//             <Button type="submit" size='lg' className="cursor-pointer w-full">
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Generating...
//                 </>
//               ) : (
//                 "Start Quiz"
//               )}
//             </Button>
//           </div>
//         </form>
//       </Card>
//     );
//   }

//   const question = quizData[currentQuestion];

//   return (
//     <Card className="mx-2">
//       <CardHeader>
//         <CardTitle>
//           Question {currentQuestion + 1} of {quizData.length}
//         </CardTitle>
//       </CardHeader>

//       <CardContent className="space-y-4">
//         <p className="text-lg font-medium">{question.question}</p>

//         <RadioGroup
//           onValueChange={handleAnswer}
//           value={answers[currentQuestion]}
//           className="space-y-2"
//         >
//           {question.options.map((option: string, i: number) => (
//             <div key={i} className="flex items-center space-x-2">
//               <RadioGroupItem value={option} id={`opt-${i}`} />
//               <Label htmlFor={`opt-${i}`}>{option}</Label>
//             </div>
//           ))}
//         </RadioGroup>
//       </CardContent>

//       <CardFooter className="flex flex-col gap-4">
//         <Button
//           className="w-full"
//           onClick={handleNext}
//           disabled={!answers[currentQuestion]}
//         >
//           {currentQuestion < quizData.length - 1
//             ? "Next Question"
//             : "Finish Quiz"}
//         </Button>

//         {!showExplanation && (
//           <Button
//             variant="outline"
//             className="w-full"
//             onClick={() => setShowExplanation(true)}
//             disabled={!answers[currentQuestion]}
//           >
//             Show Explanation
//           </Button>
//         )}

//         {showExplanation && (
//           <div className="p-4 bg-muted rounded-lg w-full">
//             <p className="font-medium">Explanation:</p>
//             <p className="text-muted-foreground">
//               {question.explanation}
//             </p>
//           </div>
//         )}
//       </CardFooter>
//     </Card>
//   );
// }
// }
