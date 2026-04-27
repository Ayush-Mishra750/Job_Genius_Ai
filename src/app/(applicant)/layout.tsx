// import ApplicantSidebar from "@/features/applicants/applicant-sidebar";
// import { getCurrentUser } from "@/features/auth/server/auth.queries";
// import EmployerSidebar from "@/features/employers/components/employer-sidebar";
import { redirect } from "next/navigation";
import { getCurrentUser } from "../(auth)/_actions/auth.queries";
import ApplicantSidebar from "./_components/applicant-sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/login");
  }
  if (user.role == "employer") return redirect("/employer-dashboard");

  return (
    <div className="flex min-h-screen bg-background">
      <ApplicantSidebar />
      {/* Desktop: offset for fixed sidebar; Mobile: full width with top padding for hamburger */}
      <main className="flex-1 md:ml-64 pt-16 md:pt-0 min-w-0">
        {children}
      </main>
    </div>
  );
}
