// import ApplicantSidebar from "@/features/applicants/applicant-sidebar";
// import { getCurrentUser } from "@/features/auth/server/auth.queries";
// import EmployerSidebar from "@/features/employers/components/employer-sidebar";
import { redirect } from "next/navigation";
import { getCurrentUser } from "../(auth)/_actions/auth.queries";
import ApplicantSidebar from "./_components/applicant-sidebar";

export default async  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
      const user = await getCurrentUser();

      if(!user){
        return redirect("/login");
      }
      if(user.role == "employer")return redirect("/employer-dashboard");
  
          
  return (
        
       <div className="flex min-h-screen bg-background ">
     <ApplicantSidebar/>
      <main className="container mx-auto mt-5 ml-70 mr-5">{children}</main>
    </div>
   
  );
}
