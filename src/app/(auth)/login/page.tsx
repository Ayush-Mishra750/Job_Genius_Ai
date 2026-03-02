

import LoginForm from "@/components/_auth-form/login-form";
// import { getCurrentUser } from "@/features/auth/server/auth.queries";

import { redirect } from "next/navigation";
import { getCurrentUser } from "../_actions/auth.queries";
import { toast } from "sonner";

const LoginPage = async () => {
  const user = await getCurrentUser();
    
  if (user) {
    if (user.role === "applicant") return redirect("/dashboard");
    if (user.role === "employer") return redirect("/employer-dashboard");
  }
  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;