import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { redirect } from "next/navigation";
import EmployerSidebar from "../_components/employer-sidebar";
import { MobileNav } from "../_components/mobile-nav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/login");
  }
  if (user.role !== "employer") return redirect("/dashboard");


  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Hidden on mobile, visible on medium screens and up */}
      <div className="hidden md:block w-72 fixed inset-y-0 z-50">
        <EmployerSidebar user={user} className="h-full" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-72">
        <MobileNav user={user} />
        <main className="flex-1">
          <div className="container mx-auto p-4 md:p-8 lg:p-10 max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}



