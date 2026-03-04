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
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { updateEmployerProfileAction } from "@/features/server/employer.action";
import { toast } from "sonner";
// import {
//   EmployerProfileData,
//   employerProfileSchema,
//   organizationTypes,
//   teamSizes,
// } from "../employers.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { ComponentProps, useState } from "react";
import { UploadButton, useUploadThing } from "@/lib/uploadthing";
import { useDropzone } from "@uploadthing/react";
import { EmployerProfileData, employerProfileSchema, organizationTypes, teamSizes } from "./employer-profile-schema";
import { updateEmployerProfileAction } from "../_actions/employer-profile-action";
import Tiptap from "@/components/richTextEditor/text-editor";
import Image from "next/image";


const EmployerSettingsForm = ({
  initialData,
}: {
  initialData?: Partial<EmployerProfileData>; // Key: Type
}) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch, //Give me the current value of this field in the form state, and re-render this component when it changes.
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

  const avatarUrl = watch("avatarUrl");

  const handleRemoveAvatar = () => {
    setValue("avatarUrl", ""); //Programmatically update a form field’s value inside react-hook-form.
  };

  const handleFormSubmit = async (data: EmployerProfileData) => {

    const response = await updateEmployerProfileAction(data);
    if (response.status === "SUCCESS") {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
    
  };

  return (
   <Card className="mx-auto w-full  rounded-2xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 shadow-sm mb-6">
  <CardContent className="p-8 space-y-12">

   <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold tracking-tight">
          Company Branding
        </h2>
        <p className="text-sm text-muted-foreground">
          Upload your company logo and banner image
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_3fr] gap-8">
        {/* Logo */}
        <Controller
          name="avatarUrl"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-2">
              <Label>Company Logo *</Label>
              <ImageUpload
                value={field.value}
                onChange={field.onChange}
                boxText="Recommended size 400x400px. Max size 4MB."
                className="h-56 w-56"
              />
              {fieldState.error && (
                <p className="text-sm text-destructive">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        {/* Banner */}
        <Controller
          name="bannerImageUrl"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-2">
              <Label>Banner Image</Label>
              <ImageUpload
                value={field.value}
                onChange={field.onChange}
                boxText="Optimal 1520×400px. JPEG/PNG. Max 4MB."
                className="h-56 w-full"
              />
              {fieldState.error && (
                <p className="text-sm text-destructive">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
    </div>

   
    <div className="space-y-6 p-6 rounded-xl border bg-muted/30 dark:bg-muted/10">
      <div>
        <h2 className="text-lg font-semibold tracking-tight">
          Company Information
        </h2>
        <p className="text-sm text-muted-foreground">
          Provide key information about your organization
        </p>
      </div>

      {/* Company Name */}
      <div className="space-y-2">
        <Label>Company Name *</Label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
          <Input
            className="pl-10 h-11 rounded-lg focus-visible:ring-2 focus-visible:ring-primary/60"
            placeholder="Enter company name"
            {...register("name")}
          />
        </div>
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Description */}
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <div className="space-y-2">
            <Label>Description *</Label>
            <div className="rounded-lg border bg-background p-3">
              <Tiptap content={field.value} onChange={field.onChange} />
            </div>
            {fieldState.error && (
              <p className="text-sm text-destructive">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

      {/* Organization + Team */}
      <div className="grid md:grid-cols-2 gap-6">
        <Controller
          name="organizationType"
          control={control}
          render={({ field }) => (
            <div className="space-y-2">
              <Label>Organization Type *</Label>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="h-11 rounded-lg">
                  <SelectValue placeholder="Select organization type" />
                </SelectTrigger>
                <SelectContent>
                  {organizationTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        />

        <Controller
          name="teamSize"
          control={control}
          render={({ field }) => (
            <div className="space-y-2">
              <Label>Team Size *</Label>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="h-11 rounded-lg">
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                <SelectContent>
                  {teamSizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </div>

      {/* Year + Location */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Year of Establishment *</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
            <Input
              className="pl-10 h-11 rounded-lg"
              placeholder="e.g. 2020"
              maxLength={4}
              {...register("yearOfEstablishment")}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Location *</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
            <Input
              className="pl-10 h-11 rounded-lg"
              placeholder="e.g. Bangalore"
              {...register("location")}
            />
          </div>
        </div>
      </div>

      {/* Website */}
      <div className="space-y-2">
        <Label>Website URL</Label>
        <div className="relative">
          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
          <Input
            className="pl-10 h-11 rounded-lg"
            placeholder="https://yourcompany.com"
            {...register("websiteUrl")}
          />
        </div>
      </div>
    </div>

    
    <div className="flex items-center justify-between pt-6 border-t pb-2 ">
      <p className="text-sm text-muted-foreground">
        {isDirty ? "You have unsaved changes" : "No changes to save"}
      </p>

      <Button
        type="submit"
        disabled={!isDirty || isSubmitting}
        className="h-11 px-6"
      >
        {isSubmitting && (
          <Loader className="w-4 h-4 mr-2 animate-spin" />
        )}
        {isSubmitting ? "Saving..." : "Save Changes"}
      </Button>
    </div>
</form>
  </CardContent>
</Card>
  );
};

export default EmployerSettingsForm;

type ImageUploadProps = Omit<ComponentProps<"div">, "onChange"> & {
  value?: string;
  boxText?: string;
  onChange: (url: string) => void;
};

export const ImageUpload = ({
  value,
  onChange,
  className,
  boxText,
  ...props
}: ImageUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
// console.log(previewUrl,"preview")
  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      if (res && res[0]) {
        onChange(res[0].ufsUrl);
        toast.success("Image uploaded successfully!");
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

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 4MB");
      return;
    }

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
      <div
        className={cn(
          "overflow-hidden border-2 border-border relative group rounded-lg",
          className
        )}
        {...props}
      >
        <Image
          src={previewUrl || value || ""}
          alt="Uploaded image"
          height={200}
          width={200}
          className="w-full h-full object-cover"
        />

        {isUploading && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
              <p className="text-sm text-white font-medium">Uploading...</p>
            </div>
          </div>
        )}

        {!isUploading && (
          <div
            {...getRootProps()}
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
          >
             <input {...getInputProps()} /> 
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Upload className="w-4 h-4 mr-2" />
              Change
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={handleRemove}
            >
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
        "border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors",
        isDragActive
          ? "border-primary bg-primary/5"
          : "border-muted-foreground/25 hover:border-primary/50",
        isUploading && "opacity-50 pointer-events-none",
        className
      )}
      {...props}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center ">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
          <Upload className="w-6 h-6 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground mb-1">
          <span className="text-primary">Browse photo</span> or drop here
        </p>
        {boxText && (
          <p className="text-xs text-muted-foreground text-center px-4 max-w-xs">
            {boxText}
          </p>
        )}
      </div>
    </div>
  );
};


