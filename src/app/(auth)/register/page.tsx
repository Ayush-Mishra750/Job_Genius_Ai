
import RegistrationForm from "@/components/_auth-form/register-form";

import { redirect } from "next/navigation";
import { getCurrentUser } from "../_actions/auth.queries";

const Registration = async () => {
  const user = await getCurrentUser();
  console.log(user);

  if (user) {
    if (user.role === "applicant") return redirect("/dashboard");
    if (user.role === "employer") return redirect("/employer-dashboard");
  }

  return (
    <>
      <RegistrationForm />
    </>
  );
};

export default Registration;