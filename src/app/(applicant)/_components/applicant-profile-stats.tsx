import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { redirect } from "next/navigation";
import { getApplicantProfileData } from "../actions/applicant.queries";

export async function ApplicantProfileStatus() {
  const user = await getCurrentUser();

  // Redirect if not logged in
  if (!user) return redirect("/login");

  const profileData = await getApplicantProfileData(user.id);
  const isCompleted = !!(
    profileData?.location &&
    profileData?.dateOfBirth &&
    profileData?.experience &&
    profileData?.biography &&
    profileData?.resumeUrl
  );
  if (isCompleted) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 via-red-500 to-red-600 dark:from-rose-700 dark:via-red-700 dark:to-red-800 p-5 sm:p-6 text-white shadow-lg">
      {/* Decorative Circles */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute right-20 bottom-[-50px] h-24 w-24 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-20 w-20 rounded-full bg-white/5 blur-xl" />

      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-md">
            <AlertCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
              Your profile is incomplete
            </h3>
            <p className="text-red-100 dark:text-red-200 text-xs sm:text-sm mt-0.5 max-w-md leading-relaxed">
              Complete your profile &amp; build your custom Resume to get better
              job recommendations and stand out to employers.
            </p>
          </div>
        </div>

        <Link href="/dashboard/settings" className="shrink-0 w-full sm:w-auto">
          <Button
            variant="secondary"
            className="w-full sm:w-auto whitespace-nowrap bg-white text-red-600 hover:bg-red-50 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 rounded-xl px-5 py-2.5"
          >
            Edit Profile
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}