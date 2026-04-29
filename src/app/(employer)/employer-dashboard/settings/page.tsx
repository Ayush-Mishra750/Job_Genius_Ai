import { redirect } from "next/navigation";
import { getCurrentEmployerDetails } from "../../_components/get_employer_details";
import EmployerSettingsForm from "../../_components/employer-setting-form";
import { EmployerProfileData } from "../../_components/employer-profile-schema";
import { Settings, ShieldCheck, Sparkles } from "lucide-react";

const EmployerSettings = async () => {
  const employer = await getCurrentEmployerDetails();
  if (!employer) return redirect("/login");

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">

      {/* Premium Header Section */}
      <div className="relative overflow-hidden rounded-3xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 p-8 sm:p-12 shadow-sm">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3" />
            Employer Settings
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
              Configure Your <span className="text-primary">Workspace</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-medium">
              Update your company profile, visuals, and preferences to attract top-tier talent.
            </p>
          </div>
        </div>
      </div>

      <EmployerSettingsForm
        initialData={
          {
            name: employer.employerDetails.name,
            description: employer.employerDetails.description,
            organizationType: employer.employerDetails.organizationType,
            teamSize: employer.employerDetails.teamSize,
            location: employer.employerDetails.location,
            websiteUrl: employer.employerDetails.websiteUrl,
            yearOfEstablishment: employer.employerDetails.yearOfEstablishment?.toString(),
            avatarUrl: employer.avatarUrl,
            bannerImageUrl: employer.employerDetails.bannerImageUrl,
          } as EmployerProfileData
        }
      />
    </div>
  );
};

export default EmployerSettings;