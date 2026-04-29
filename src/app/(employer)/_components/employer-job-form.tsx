"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import {
    Award,
  Briefcase,
  Calendar,
  Clock,
  DollarSign,
  Globe,
  GraduationCap,
  Loader,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { JOB_LEVEL, JOB_TYPE, MIN_EDUCATION, SALARY_CURRENCY, SALARY_PERIOD, WORK_TYPE } from "@/app/_functions/constant";
import Tiptap from "@/components/richTextEditor/text-editor";
import { createJobAction, updateJobAction } from "../_actions/Job_action";
import { JobFormData, jobSchema } from "./job_form_schema";


interface JobPostFormProps{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData?:any;
  isEditMode?:boolean;
}
const JobForm = ({initialData,isEditMode}:JobPostFormProps) => {
  // console.log(initialData)
 const router=useRouter()
    const {
      register,
      handleSubmit,
      control,
      formState: { errors,isDirty,isSubmitting },
    } = useForm({
      resolver: zodResolver(jobSchema),

        defaultValues: initialData
       ? {
   ...initialData,
   jobType:initialData.jobType?"Hybrid":"",
   workType:initialData.workType?"Contract":"",
   jobLevel:initialData.jobLevel?"Internship":"",
   salaryPeriod:initialData.salaryPeriod?"Yearly":"",
   minEducation:initialData.minEducation?"None":"",
   experience:initialData.experience?"None":"",
   
   expiresAt:initialData.expiresAt
   ?new Date(initialData.expiresAt).toISOString().split("T")[0]
   :"",
  }:
  {
     title: "",
    description: "" ,
    jobLevel: "",
    jobType: "",
    workType: "",
    experience: "",
    minSalary: "",
    maxSalary: "",
    location: "",
    salaryPeriod: undefined,
    salaryCurrency: undefined,
    minEducation: undefined,
    tags: "",
    expiresAt: "",
  }
    });


  const handleFormSubmit = async (data: JobFormData) => {
    try {
      let response;
      if(isEditMode && initialData){
       response= await updateJobAction(initialData.id,data); 
      }
      else{
        response=await createJobAction(data);
        
      }
        if (response.status === "SUCCESS") {
      toast.success(response.message);
      router.push("/employer-dashboard/jobsList");
      // reset();
    } else {
      toast.error(response.message);
    }
    } catch (error) {
      console.log(error)
      toast.error("something went wrong")
    }
   
  };

  return (
    <Card className="border-none bg-transparent shadow-none" >
      <CardContent className="p-0">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
         
             {/* job title */}
          <div className="space-y-2 ">
            <Label htmlFor="companyName">Job Title *</Label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="title"
                type="text"
                placeholder="e.g. senior Full Stack Developer"
                className={`pl-10 ${errors.title ? "border-destructive" : ""} `}
                {...register("title")}
              />
            </div>
            {errors.title && (
              <p className="text-sm text-destructive">enter job title</p>
            )}
          </div>
               
          {/* Classification Section */}
          <div className="space-y-4">
            <Label className="text-base font-bold text-foreground/80">Job Classification</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="jobType" className="text-xs font-semibold">Job Type *</Label>
                <Controller
                  name="jobType"
                  control={control}
                  render={({ field }) => (
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id="jobType" className={cn("pl-10 w-full rounded-xl", errors.jobType && "border-destructive")}>
                          <SelectValue placeholder="Select job type" />
                        </SelectTrigger>
                        <SelectContent>
                          {JOB_TYPE.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                />
                {errors.jobType && <p className="text-[10px] text-destructive font-medium italic">{errors.root?.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="workType" className="text-xs font-semibold">Work Type *</Label>
                <Controller
                  name="workType"
                  control={control}
                  render={({ field }) => (
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id="workType" className={cn("pl-10 w-full rounded-xl", errors.workType && "border-destructive")}>
                          <SelectValue placeholder="Select work type" />
                        </SelectTrigger>
                        <SelectContent>
                          {WORK_TYPE.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                />
                {errors.workType && <p className="text-[10px] text-destructive font-medium italic">{errors.root?.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobLevel" className="text-xs font-semibold">Job Level *</Label>
                <Controller
                  name="jobLevel"
                  control={control}
                  render={({ field }) => (
                    <div className="relative">
                      <Award className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id="jobLevel" className={cn("pl-10 w-full rounded-xl", errors.jobLevel && "border-destructive")}>
                          <SelectValue placeholder="Select job level" />
                        </SelectTrigger>
                        <SelectContent>
                          {JOB_LEVEL.map((level) => (
                            <SelectItem key={level} value={level}>{level}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                />
                {errors.jobLevel && <p className="text-[10px] text-destructive font-medium italic">{errors.root?.message}</p>}
              </div>
            </div>
          </div>

          {/* Location and Tags Section */}
          <div className="space-y-4">
            <Label className="text-base font-bold text-foreground/80">Location & Search</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location" className="text-xs font-semibold">Location (Optional)</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="location" type="text" placeholder="e.g., Pune, Bangalore" className="pl-10 rounded-xl" {...register("location")} />
                </div>
                {errors.location && <p className="text-[10px] text-destructive font-medium italic">{errors.root?.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags" className="text-xs font-semibold">Tags (Optional)</Label>
                <div className="relative">
                  <Sparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="tags" type="text" placeholder="e.g., React, TypeScript, Node.js" className="pl-10 rounded-xl" {...register("tags")} />
                </div>
                {errors.tags && <p className="text-[10px] text-destructive font-medium italic">{errors.root?.message}</p>}
              </div>
            </div>
          </div>

          {/* Additional Details Section */}
          <div className="space-y-4">
            <Label className="text-base font-bold text-foreground/80">Additional Requirements</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="minEducation" className="text-xs font-semibold">Minimum Education (Optional)</Label>
                <Controller
                  name="minEducation"
                  control={control}
                  render={({ field }) => (
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id="minEducation" className={cn("pl-10 w-full rounded-xl", errors.minEducation && "border-destructive")}>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          {MIN_EDUCATION.map((level) => (
                            <SelectItem key={level} value={level}>{level}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expiresAt" className="text-xs font-semibold">Expiry Date *</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="expiresAt" type="date" className={cn("pl-10 rounded-xl", errors.expiresAt && "border-destructive")} {...register("expiresAt")} required />
                </div>
                {errors.expiresAt && <p className="text-[10px] text-destructive font-medium italic">{errors.root?.message}</p>}
              </div>
            </div>
          </div>
          
          {/* Salary Section: min salary | max salary | currency | period */}
          <div className="space-y-4">
            <Label className="text-base font-bold text-foreground/80">Salary & Compensation</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="minSalary" className="text-xs font-semibold">Min Salary</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="minSalary"
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g., 50000"
                    className={cn("pl-10 rounded-xl", errors.minSalary && "border-destructive")}
                    {...register("minSalary")}
                  />
                </div>
                {errors.minSalary && (
                  <p className="text-[10px] text-destructive font-medium italic">{errors.root?.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxSalary" className="text-xs font-semibold">Max Salary</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="maxSalary"
                    type="text"
                    placeholder="e.g., 80000"
                    className={cn("pl-10 rounded-xl", errors.maxSalary && "border-destructive")}
                    {...register("maxSalary")}
                  />
                </div>
                {errors.maxSalary && (
                  <p className="text-[10px] text-destructive font-medium italic">{errors.root?.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="salaryCurrency" className="text-xs font-semibold">Currency</Label>
                <Controller
                  name="salaryCurrency"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        id="salaryCurrency"
                        className={cn("w-full rounded-xl", errors.salaryCurrency && "border-destructive")}
                      >
                        <SelectValue placeholder="Currency" />
                      </SelectTrigger>
                      <SelectContent>
                        {SALARY_CURRENCY.map((currency) => (
                          <SelectItem key={currency} value={currency}>
                            {currency}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.salaryCurrency && (
                  <p className="text-[10px] text-destructive font-medium italic">{errors.root?.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="salaryPeriod" className="text-xs font-semibold">Period</Label>
                <Controller
                  name="salaryPeriod"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        id="salaryPeriod"
                        className={cn("w-full rounded-xl", errors.salaryPeriod && "border-destructive")}
                      >
                        <SelectValue placeholder="Period" />
                      </SelectTrigger>
                      <SelectContent>
                        {SALARY_PERIOD.map((period) => (
                          <SelectItem key={period} value={period}>
                            {period}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.salaryPeriod && (
                  <p className="text-[10px] text-destructive font-medium italic">{errors.root?.message}</p>
                )}
              </div>
            </div>
          </div>
           
          
          {/* Experience  Requirement */}
          <div className="space-y-2">
            <Label htmlFor="websiteUrl">Experience Requirement (Optional)*</Label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="experience"
                type="text"
                placeholder="experience"
                className="pl-10"
                {...register("experience")}
              />
            </div>
            {errors.experience && (
              <p className="text-sm text-destructive">
                                  {errors.root?.message}

              </p>
            )}
          </div>

          <div className="space-y-2">
            <Controller
              name="description"
              control={control}
              render={({ field, fieldState }) => (
                <div className="space-y-2">
                  <Label>Description *</Label>
                  <Tiptap content={field.value} onChange={field.onChange} />

                  {fieldState.error && (
                    <p className="text-sm text-destructive">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* When you run const { control } = useForm(), you create a specific instance of a form. The <Controller /> component is isolated; it doesn't know which form it belongs to. Passing control={control} connects this specific input to that specific useForm hook. */}
          {/* Organization Type and Team Size - Two columns */}
         
          <div className="flex items-center gap-4 pt-8">
            <Button type="submit" size="lg" className="h-12 px-10 rounded-xl font-bold shadow-lg shadow-primary/20">
              {isSubmitting && <Loader className="w-4 h-4 animate-spin mr-2" />}

            {
              isEditMode
              ?isSubmitting
                 ?"Saving..."
                 :"Update Job"
              :isSubmitting
                ?"Saving..."
                :"Post Job"
            }
            </Button>

            {!isDirty && (
              <p className="text-sm font-medium text-muted-foreground italic">
                No changes to save
              </p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default JobForm;

