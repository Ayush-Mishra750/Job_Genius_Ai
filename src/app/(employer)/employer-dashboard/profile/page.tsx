
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { htmlToText } from "@/components/general/htmlTotext";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { getCurrentEmployerDetails } from "../../_components/get_employer_details";

export default async function EmployerProfilePage() {
  const user = await getCurrentEmployerDetails();
  if (user?.role !== "employer") throw new Error("unauthorized");

  if (!user) {
    return (
      <div className="p-6 text-xl text-red-500 text-center">
        No employer profile found.
      </div>
    );
  }

 return (
  <div className="mx-auto max-w-6xl px-6 py-12 space-y-12">

    {/* ======================
        BANNER
    ======================= */}
    <div className="relative w-full h-60 rounded-2xl overflow-hidden">
      <Image
        src={user.employerDetails.bannerImageUrl || "/placeholder-banner.jpg"}
        alt="Company Banner"
        fill
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </div>

 
    <div className="relative -mt-16 flex flex-col md:flex-row gap-6 items-start md:items-end ">

      <Avatar className="w-32 h-32 border-4 border-background shadow-xl ring-4 ring-background">
        <AvatarImage src={user.avatarUrl || "/avatar.png"} />
        <AvatarFallback>EMP</AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {user.employerDetails.name}
            </h1>

            <p className="text-muted-foreground text-sm max-w-xl mt-2">
              {htmlToText(user.employerDetails.description?.slice(0, 150) || "") ||
                "No description added yet."}
            </p>
          </div>

          <Link href="/employer-dashboard/settings">
            <Button className="h-10 px-6">
              Edit Profile
            </Button>
          </Link>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">
            {user.employerDetails.organizationType || "N/A"}
          </Badge>

          <Badge variant="outline">
            Team: {user.employerDetails.teamSize || "N/A"}
          </Badge>

          <Badge
            className={
              user.isProfileCompleted
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "border-yellow-500 text-yellow-600 dark:text-yellow-400"
            }
          >
            {user.isProfileCompleted
              ? "Profile Completed"
              : "Profile Incomplete"}
          </Badge>
        </div>
      </div>
    </div>

 
    <Card className="rounded-2xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 shadow-sm hover:shadow-md transition-all hover:ring-2 hover:ring-primary">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Company Overview
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Detail label="Organization Type" value={user.employerDetails.organizationType} />
        <Detail label="Team Size" value={user.employerDetails.teamSize} />
        <Detail label="Founded" value={user.employerDetails.yearOfEstablishment} />
        <Detail label="Website" value={user.employerDetails.websiteUrl} isLink />
        <Detail label="Location" value={user.employerDetails.location} />
      </CardContent>
    </Card>

  
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all hover:ring-2 hover:ring-primary">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          About Company
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {htmlToText(user.employerDetails.description || "")}
        </p>
      </CardContent>
    </Card>


    <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all hover:ring-2 hover:ring-primary">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Employer Personal Info
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Detail label="Full Name" value={user.name} />
        <Detail label="Username" value={user.userName} />
        <Detail label="Email" value={user.email} />
        <Detail label="Role" value={user.role} />
        <Detail label="Account Created" value={user.createdAt.toDateString()} />
      </CardContent>
    </Card>
  </div>
);
}

function Detail({ label, value, isLink = false }) {
  return (
    <div className="space-y-1">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </p>

      {isLink && value ? (
        <a
          href={value}
          target="_blank"
          className="text-sm font-medium text-primary hover:underline break-all"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm font-medium text-foreground">
          {value || "N/A"}
        </p>
      )}
    </div>
  );
}