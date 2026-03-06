import {z} from "zod";

export const applyJobSchema=z.object({
    jobId:z.number(),
    resumeId:z.number().min(1,"Resume is required"),
    coverLetter:z.string().max(1000,"Cover letter must be less than 500 characters").optional(),

})

export type ApplyJobSchemaType=z.infer<typeof applyJobSchema>;