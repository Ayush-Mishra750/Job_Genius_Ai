"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Building2,
  Calendar,
  FileText,
  Globe,
  Loader,
  Loader2,
  MapPin,
  Upload,
  X,
  Sparkles,
  Info,
  CheckCircle2
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
import { ComponentProps, useState } from "react";
import { useUploadThing } from "@/lib/uploadthing";
import { useDropzone } from "@uploadthing/react";
import { EmployerProfileData, employerProfileSchema, organizationTypes, teamSizes } from "./employer-profile-schema";
import { updateEmployerProfileAction } from "../_actions/employer-profile-action";
import Tiptap from "@/components/richTextEditor/text-editor";
import Image from "next/image";

const EmployerSettingsForm = ({
  initialData,
}: {
  initialData?: Partial<EmployerProfileData>;
}) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<EmployerProfileData>({
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      organizationType: initialData?.organizationType || undefined,
      teamSize: initialData?.teamSize || undefined,
      yearOfEstablishment: initialData?.yearOfEstablishment || undefined,
      websiteUrl: initialData?.websiteUrl || "",
      location: initialData?.location || "",
      avatarUrl: initialData?.avatarUrl || "",
      bannerImageUrl: initialData?.bannerImageUrl || "",
    },
    resolver: zodResolver(employerProfileSchema),
  });

  const handleFormSubmit = async (data: EmployerProfileData) => {
    try {
      const response = await updateEmployerProfileAction(data);
      if (response.status === "SUCCESS") {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <Card className="mx-auto w-full rounded-[2.5rem] border-border/50 bg-white/40 dark:bg-card/40 backdrop-blur-xl shadow-2xl shadow-black/[0.03] overflow-hidden animate-in zoom-in-95 duration-500">
      <CardContent className="p-0">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          
          {/* Section: Visual Identity */}
          <div className="p-8 sm:p-12 space-y-10">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-primary/10 p-3">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tight text-foreground">Company Branding</h2>
                <p className="text-muted-foreground text-sm font-medium">How your company looks to potential candidates.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-4">
                <Label className="text-base font-bold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Company Logo
                </Label>
                <Controller
                  name="avatarUrl"
                  control={control}
                  render={({ field }) => (
                    <ImageUpload
                      value={field.value}
                      onChange={field.onChange}
                      boxText="Min 400x400px recommended."
                      className="aspect-square w-full sm:w-64 rounded-3xl"
                    />
                  )}
                />
                {errors.avatarUrl && <p className="text-xs text-destructive font-medium italic">{errors.avatarUrl.message}</p>}
              </div>

              <div className="lg:col-span-8 space-y-4">
                <Label className="text-base font-bold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Banner Image
                </Label>
                <Controller
                  name="bannerImageUrl"
                  control={control}
                  render={({ field }) => (
                    <ImageUpload
                      value={field.value}
                      onChange={field.onChange}
                      boxText="Optimal size: 1520x400px. High resolution."
                      className="aspect-[3/1] sm:aspect-[1520/400] w-full rounded-3xl"
                    />
                  )}
                />
                {errors.bannerImageUrl && <p className="text-xs text-destructive font-medium italic">{errors.bannerImageUrl.message}</p>}
              </div>
            </div>
          </div>

          {/* Section: Core Info */}
          <div className="p-8 sm:p-12 bg-muted/20 dark:bg-muted/5 border-y border-border/50 space-y-10">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-primary/10 p-3">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tight text-foreground">Core Information</h2>
                <p className="text-muted-foreground text-sm font-medium">Essential details about your organization.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3 md:col-span-2">
                <Label htmlFor="name" className="text-sm font-bold">Company Display Name *</Label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    className="pl-12 h-14 rounded-2xl bg-background border-border/50 focus-visible:ring-primary/40 font-medium"
                    placeholder="e.g. Acme Tech Solutions"
                    {...register("name")}
                  />
                </div>
                {errors.name && <p className="text-xs text-destructive font-medium italic">{errors.name.message}</p>}
              </div>

              <div className="space-y-3 md:col-span-2">
                <Label className="text-sm font-bold">Company Bio & Description *</Label>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <div className="rounded-[2rem] border border-border/50 bg-background p-6 shadow-inner">
                      <Tiptap content={field.value} onChange={field.onChange} />
                    </div>
                  )}
                />
                {errors.description && <p className="text-xs text-destructive font-medium italic">{errors.description.message}</p>}
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-bold">Organization Type *</Label>
                <Controller
                  name="organizationType"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="h-14 rounded-2xl bg-background border-border/50 shadow-sm font-medium">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        {organizationTypes.map((type) => (
                          <SelectItem key={type} value={type} className="rounded-xl my-1">{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-bold">Team Size *</Label>
                <Controller
                  name="teamSize"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="h-14 rounded-2xl bg-background border-border/50 shadow-sm font-medium">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        {teamSizes.map((size) => (
                          <SelectItem key={size} value={size} className="rounded-xl my-1">{size}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-bold">Year of Establishment *</Label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    className="pl-12 h-14 rounded-2xl bg-background border-border/50 font-medium"
                    placeholder="e.g. 2020"
                    {...register("yearOfEstablishment")}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-bold">Headquarters Location *</Label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    className="pl-12 h-14 rounded-2xl bg-background border-border/50 font-medium"
                    placeholder="e.g. San Francisco, CA"
                    {...register("location")}
                  />
                </div>
              </div>

              <div className="space-y-3 md:col-span-2">
                <Label className="text-sm font-bold">Official Website URL</Label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    className="pl-12 h-14 rounded-2xl bg-background border-border/50 font-medium"
                    placeholder="https://company.com"
                    {...register("websiteUrl")}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {isDirty ? (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-widest border border-amber-500/20 animate-pulse">
                  <AlertCircle className="w-3 h-3" />
                  Unsaved Changes
                </div>
              ) : (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  All caught up
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Button
                type="submit"
                disabled={!isDirty || isSubmitting}
                className="w-full sm:w-auto h-14 px-10 rounded-[1.25rem] font-bold text-base shadow-xl shadow-primary/20 transition-all hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Saving Changes...
                  </>
                ) : (
                  "Update Profile"
                )}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EmployerSettingsForm;

/* --- Sub-Component: ImageUpload --- */

type ImageUploadProps = Omit<ComponentProps<"div">, "onChange"> & {
  value?: string;
  boxText?: string;
  onChange: (url: string) => void;
};

const ImageUpload = ({
  value,
  onChange,
  className,
  boxText,
  ...props
}: ImageUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      if (res && res[0]) {
        onChange(res[0].ufsUrl);
        toast.success("Identity visuals updated!");
      }
      setIsUploading(false);
      setPreviewUrl(null);
    },
    onUploadError: (error: Error) => {
      toast.error(`Upload failed: ${error.message}`);
      setIsUploading(false);
      setPreviewUrl(null);
    },
  });

  const handleFileSelect = async (files: File[]) => {
    const file = files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setPreviewUrl(reader.result as string);
    reader.readAsDataURL(file);

    setIsUploading(true);
    await startUpload([file]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFileSelect,
    accept: { "image/*": [".png", ".jpg", ".jpeg", ".webp"] },
    maxFiles: 1,
    disabled: isUploading,
  });

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
    setPreviewUrl(null);
  };

  if (value || previewUrl)
    return (
      <div className={cn("overflow-hidden border-2 border-border relative group rounded-3xl bg-muted/10 shadow-inner", className)} {...props}>
        <Image
          src={previewUrl || value || ""}
          alt="Preview"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {isUploading && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
              <p className="text-xs font-black uppercase tracking-widest text-foreground">Uploading Identity...</p>
            </div>
          </div>
        )}

        {!isUploading && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
            <div {...getRootProps()} className="cursor-pointer">
              <input {...getInputProps()} />
              <Button type="button" variant="secondary" size="sm" className="rounded-xl font-bold shadow-lg">
                <Upload className="w-4 h-4 mr-2" />
                Change
              </Button>
            </div>
            <Button type="button" variant="destructive" size="sm" className="rounded-xl font-bold shadow-lg" onClick={handleRemove}>
              <X className="w-4 h-4 mr-2" />
              Remove
            </Button>
          </div>
        )}
      </div>
    );

  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all duration-300 rounded-3xl group",
        isDragActive ? "border-primary bg-primary/5 scale-[0.98]" : "border-muted-foreground/25 hover:border-primary/50 hover:bg-primary/[0.02]",
        isUploading && "opacity-50 pointer-events-none",
        className
      )}
      {...props}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center px-6 text-center">
        <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500">
          <Upload className="w-8 h-8 text-primary" />
        </div>
        <p className="text-sm font-bold text-foreground mb-1">
          <span className="text-primary underline-offset-4 group-hover:underline">Browse identity visuals</span>
        </p>
        <p className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground/60">{boxText || "Supports JPG, PNG, WEBP (Max 4MB)"}</p>
      </div>
    </div>
  );
};

import { AlertCircle } from "lucide-react";
