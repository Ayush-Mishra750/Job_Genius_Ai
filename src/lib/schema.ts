import z from "zod";

export const difficultyLevel=[
"easy",
"medium",
"hard"
]
export const coverLetterSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  jobDescription: z.string().min(1, "Job description is required"),
});

export type coverLetterSchema = z.infer<typeof coverLetterSchema>;

export const QuizSchema=z.object({
  category:z.string().min(1,"category is required"),
  topic:z.string().min(1,"topic is required"),
  difficulty:z.enum(difficultyLevel,{
    error:"please select valid difficulty level."
  })

})

export type QuizSchemaData=z.infer<typeof QuizSchema>;
