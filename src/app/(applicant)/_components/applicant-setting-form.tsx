"use client";

import { useForm, Controller } from "react-hook-form";
import {
  User,
  MapPin,
  Calendar,
  Flag,
  Briefcase,
  Globe,
  Loader,
  Mail,
  Phone,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { applicantSettingsSchema, ApplicantSettingsSchema } from "../_utils/setting-schema";
import { createApplicantProfile } from "../actions/applicant-setting-action";
import { ImageUpload } from "@/app/(employer)/_components/employer-setting-form";
import Tiptap from "@/components/richTextEditor/text-editor";
import { ResumeUpload } from "./resume-upload";
import { ApplicantProfileType } from "../actions/applicant.queries";

// ── ChatGPT-style dark palette helpers ──────────────────────────────────────
// bg: #212121  |  card: #2f2f2f  |  input: #404040
// text: #ececec |  muted: #8e8ea0 |  border: rgba(255,255,255,0.1)

const cardCls =
  "border border-slate-200 dark:border-white/10 bg-white dark:bg-[#2f2f2f] shadow-sm";

const cardTitleCls = "text-slate-800 dark:text-[#ececec] text-base font-semibold";

const cardDescCls = "text-slate-500 dark:text-[#8e8ea0] text-sm";

const labelCls = "text-slate-700 dark:text-[#ececec] text-sm font-medium";

const inputCls =
  "bg-white dark:bg-[#404040] border-slate-200 dark:border-white/10 text-slate-800 dark:text-[#ececec] placeholder:text-slate-400 dark:placeholder:text-[#8e8ea0] focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400";

const iconCls = "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-[#8e8ea0]";

// ─────────────────────────────────────────────────────────────────────────────

interface ApplicantSettingsFormProps {
  initialData: ApplicantProfileType | null;
}

const ApplicantSettingsForm = ({ initialData }: ApplicantSettingsFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<ApplicantSettingsSchema>({
    resolver: zodResolver(applicantSettingsSchema),
    defaultValues: {
      name: initialData?.name || "",
      email: initialData?.email || "",
      phoneNumber: initialData?.phoneNumber || "",
      location: initialData?.location || "",
      dateOfBirth: initialData?.dateOfBirth || "",
      nationality: initialData?.nationality || "",
      gender: initialData?.gender || undefined,
      maritalStatus: initialData?.maritalStatus || undefined,
      education: initialData?.education || undefined,
      experience: initialData?.experience || "",
      websiteUrl: initialData?.websiteUrl || "",
      biography: initialData?.biography || "",
      avatarUrl: initialData?.avatarUrl || "",
      resumeUrl: initialData?.resumeUrl || "",
      resumeName: initialData?.resumeName || "",
      resumeSize: initialData?.resumeSize || undefined,
    },
  });

  const onSubmit = async (data: ApplicantSettingsSchema) => {
    try {
      const res = await createApplicantProfile(data);
      if (res.status === "SUCCESS") {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Form Submission Error:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* ── Basic Information ── */}
        <Card className={cardCls}>
          <CardHeader className="pb-4">
            <CardTitle className={cardTitleCls}>Basic Information</CardTitle>
            <CardDescription className={cardDescCls}>
              This is how employers will see you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">

            {/* Avatar upload */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Controller
                name="avatarUrl"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="space-y-1">
                    <Label className={labelCls}>Profile Photo</Label>
                    <ImageUpload
                      value={field.value}
                      onChange={field.onChange}
                      className={cn(
                        fieldState.error && "ring-1 ring-destructive/50 rounded-full",
                        "h-24 w-24"
                      )}
                    />
                    {fieldState.error && (
                      <p className="text-sm text-destructive">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />
              <p className="text-xs text-slate-400 dark:text-[#8e8ea0] leading-relaxed">
                Max 5 MB · JPG or PNG · Min 150×150 px
              </p>
            </div>

            {/* Fields grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Full Name */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className={labelCls}>Full Name</Label>
                <div className="relative">
                  <User className={iconCls} />
                  <Input
                    {...register("name")}
                    placeholder="John Doe"
                    className={cn("pl-10", inputCls, errors.name && "border-destructive focus-visible:ring-destructive")}
                  />
                </div>
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
              </div>

              {/* Email (read-only) */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className={labelCls}>Email</Label>
                <div className="relative">
                  <Mail className={iconCls} />
                  <Input
                    {...register("email")}
                    placeholder="john@example.com"
                    className={cn(
                      "pl-10 cursor-not-allowed opacity-60",
                      "bg-slate-100 dark:bg-[#333333] border-slate-200 dark:border-white/10",
                      "text-slate-500 dark:text-[#8e8ea0]"
                    )}
                    readOnly
                  />
                </div>
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="phoneNumber" className={labelCls}>Phone</Label>
                <div className="relative">
                  <Phone className={iconCls} />
                  <Input
                    {...register("phoneNumber")}
                    placeholder="+1 234 567 890"
                    className={cn("pl-10", inputCls, errors.phoneNumber && "border-destructive focus-visible:ring-destructive")}
                  />
                </div>
                {errors.phoneNumber && <p className="text-xs text-destructive">{errors.phoneNumber.message}</p>}
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <Label htmlFor="location" className={labelCls}>Location</Label>
                <div className="relative">
                  <MapPin className={iconCls} />
                  <Input
                    {...register("location")}
                    placeholder="New York, USA"
                    className={cn("pl-10", inputCls, errors.location && "border-destructive focus-visible:ring-destructive")}
                  />
                </div>
                {errors.location && <p className="text-xs text-destructive">{errors.location.message}</p>}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Personal Details ── */}
        <Card className={cardCls}>
          <CardHeader className="pb-4">
            <CardTitle className={cardTitleCls}>Personal Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* DOB */}
            <div className="space-y-1.5">
              <Label className={labelCls}>Date of Birth</Label>
              <div className="relative">
                <Calendar className={iconCls} />
                <Input
                  type="date"
                  {...register("dateOfBirth")}
                  className={cn("pl-10", inputCls, errors.dateOfBirth && "border-destructive focus-visible:ring-destructive")}
                />
              </div>
              {errors.dateOfBirth && <p className="text-xs text-destructive">{errors.dateOfBirth.message}</p>}
            </div>

            {/* Nationality */}
            <div className="space-y-1.5">
              <Label className={labelCls}>Nationality</Label>
              <div className="relative">
                <Flag className={iconCls} />
                <Input
                  {...register("nationality")}
                  placeholder="American"
                  className={cn("pl-10", inputCls, errors.nationality && "border-destructive focus-visible:ring-destructive")}
                />
              </div>
              {errors.nationality && <p className="text-xs text-destructive">{errors.nationality.message}</p>}
            </div>

            {/* Gender */}
            <div className="space-y-1.5">
              <Label className={labelCls}>Gender</Label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className={cn(inputCls, errors.gender && "border-destructive focus:ring-destructive")}>
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-[#2f2f2f] border-slate-200 dark:border-white/10">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.gender && <p className="text-xs text-destructive">{errors.gender.message}</p>}
            </div>

            {/* Marital Status */}
            <div className="space-y-1.5">
              <Label className={labelCls}>Marital Status</Label>
              <Controller
                name="maritalStatus"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className={cn(inputCls, errors.maritalStatus && "border-destructive focus:ring-destructive")}>
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-[#2f2f2f] border-slate-200 dark:border-white/10">
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.maritalStatus && <p className="text-xs text-destructive">{errors.maritalStatus.message}</p>}
            </div>
          </CardContent>
        </Card>

        {/* ── Professional Profile ── */}
        <Card className={cardCls}>
          <CardHeader className="pb-4">
            <CardTitle className={cardTitleCls}>Professional Profile</CardTitle>
            <CardDescription className={cardDescCls}>
              Highlight your skills and experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Education */}
              <div className="space-y-1.5">
                <Label className={labelCls}>Highest Education</Label>
                <Controller
                  name="education"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className={cn(inputCls, errors.education && "border-destructive focus:ring-destructive")}>
                        <SelectValue placeholder="Select Education" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-[#2f2f2f] border-slate-200 dark:border-white/10">
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="high school">High School</SelectItem>
                        <SelectItem value="undergraduate">Undergraduate</SelectItem>
                        <SelectItem value="masters">Masters</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.education && <p className="text-xs text-destructive">{errors.education.message}</p>}
              </div>

              {/* Experience */}
              <div className="space-y-1.5">
                <Label className={labelCls}>Experience</Label>
                <div className="relative">
                  <Briefcase className={iconCls} />
                  <Input
                    {...register("experience")}
                    placeholder="e.g. 5 Years"
                    className={cn("pl-10", inputCls, errors.experience && "border-destructive focus-visible:ring-destructive")}
                  />
                </div>
                {errors.experience && <p className="text-xs text-destructive">{errors.experience.message}</p>}
              </div>
            </div>

            {/* Portfolio */}
            <div className="space-y-1.5">
              <Label className={labelCls}>Portfolio Website</Label>
              <div className="relative">
                <Globe className={iconCls} />
                <Input
                  {...register("websiteUrl")}
                  placeholder="https://yourportfolio.com"
                  className={cn("pl-10", inputCls, errors.websiteUrl && "border-destructive focus-visible:ring-destructive")}
                />
              </div>
              {errors.websiteUrl && <p className="text-xs text-destructive">{errors.websiteUrl.message}</p>}
            </div>

            {/* Biography */}
            <Controller
              name="biography"
              control={control}
              render={({ field, fieldState }) => (
                <div className="space-y-1.5">
                  <Label className={labelCls}>Biography</Label>
                  <Tiptap content={field.value} onChange={field.onChange} />
                  {fieldState.error && (
                    <p className="text-xs text-destructive">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />

            <Separator className="bg-slate-100 dark:bg-white/10" />

            {/* Resume Upload */}
            <div className="space-y-1.5">
              <Label className={cn(labelCls, "text-base")}>CV / Resume</Label>
              <Controller
                name="resumeUrl"
                control={control}
                render={({ field, fieldState }) => (
                  <div>
                    <ResumeUpload
                      value={field.value}
                      onChange={(url, name, size) => {
                        field.onChange(url);
                        setValue("resumeName", name, { shouldDirty: true, shouldValidate: true });
                        setValue("resumeSize", size, { shouldDirty: true, shouldValidate: true });
                      }}
                    />
                    {fieldState.error && (
                      <p className="text-xs text-destructive mt-2">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* ── Footer Actions ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1 pb-6">
          <Button
            type="submit"
            disabled={isSubmitting || !isDirty}
            className="min-w-[150px] bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-40"
          >
            {isSubmitting && <Loader className="w-4 h-4 mr-2 animate-spin" />}
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>

          {!isDirty && (
            <p className="text-sm text-slate-400 dark:text-[#8e8ea0]">No unsaved changes</p>
          )}
          {isDirty && !isSubmitting && (
            <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">You have unsaved changes</p>
          )}
        </div>

      </form>
    </div>
  );
};

export default ApplicantSettingsForm;