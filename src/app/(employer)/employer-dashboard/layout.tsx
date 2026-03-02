import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { redirect } from "next/navigation";
import EmployerSidebar from "../_components/employer-sidebar";

export default async  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
      const user = await getCurrentUser();

      if(!user){
        return redirect("/login");
      }
      if(user.role !== "employer")return redirect("/dashboard");
  
          
  return (
        
       <div className="flex min-h-screen bg-background ">
      <EmployerSidebar />
      <main className="container mx-auto mt-5 ml-70 mr-5">{children}</main>
    </div>
   
  );
}
