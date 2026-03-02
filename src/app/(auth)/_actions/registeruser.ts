"use server";
import { prisma } from "@/lib/prisma";
import argon2 from "argon2";
// import {
//   loginUserSchema,
//   registerUserSchema,
//   LoginUserData,
//   RegisterUserData,
// } from "../auth.schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";
// import {
//   createSessionAndSetCookies,
//   invalidateSession,
// } from "./use-cases/session";
import { LoginUserData, loginUserSchema, RegisterUserData, registerUserSchema } from "@/components/_auth-form/auth-schema/auth.schema";
import { createSessionAndSetCookies, invalidateSession } from "./session";


// 👉 Server Actions in Next.js are special functions that run only on the server, not in the user’s browser.

// They let you perform things like database queries, API calls, form submissions, or data mutations directly from your React components — without creating a separate API route.

// You just mark a function with "use server", and Next.js automatically runs it on the server.

//*When you submit a <form> in Next.js using action={yourServerAction}, the framework sends a FormData object to that server function.

// FormData is a built-in Web API type (just like Request, Response, or URLSearchParams).

// It provides methods like .get(), .set(), .append(), and .entries() — which you’re already using here.

export const registerUserAction = async (data: RegisterUserData) => {
  try {
    const { data: validatedData, error } =
      registerUserSchema.safeParse(data);

    if (error)
      return { status: "ERROR", message: error.issues[0].message };

    const { name, userName, email, password, role } = validatedData;

    // Check existing user
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { userName }],
      },
    });

    if (existingUser) {
      if (existingUser.email === email)
        return { status: "ERROR", message: "Email Already Exists" };

      return { status: "ERROR", message: "Username Already Exists" };
    }

    const hashPassword = await argon2.hash(password);

    const user = await prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: {
          name,
          userName,
          email,
          password: hashPassword,
          role,
        },
      });

      if (role === "applicant") {
        await tx.applicant.create({
          data: { id: newUser.id },
        });
      } else if (role === "employer") {
        await tx.employer.create({
          data: { id: newUser.id },
        });
      }

      return newUser;
    });

    await createSessionAndSetCookies(user.id);

    return {
      status: "SUCCESS",
      message: "Registration Completed Successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      status: "ERROR",
      message: "Unknown Error Occurred! Please Try Again Later",
    };
  }
};

// type LoginData = {
//   email: string;
//   password: string;
// };

export const loginUserAction = async (data: LoginUserData) => {
  try {
    const { data: validatedData, error } =
      loginUserSchema.safeParse(data);

    if (error)
      return { status: "ERROR", message: error.issues[0].message };

    const { email, password } = validatedData;
        // console.log(email);
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user)
      return { status: "ERROR", message: "Invalid Email or Password" };

    const isValidPassword = await argon2.verify(
      user.password,
      password
    );

    if (!isValidPassword)
      return { status: "ERROR", message: "Invalid Email or Password" };

    await createSessionAndSetCookies(user.id);

    return {
      status: "SUCCESS",
      message: "Login Successful",
    };
  } catch (error) {
    console.error(error);
    return {
      status: "ERROR",
      message: "Unknown Error Occurred! Please Try Again Later",
    };
  }
};

// logout user
export const logoutUserAction = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) return redirect("/login");

  const hashedToken = crypto
    .createHash("sha256")
    .update(session)
    .digest("hex");

  await invalidateSession(hashedToken);

  cookieStore.delete("session");

  return redirect("/login");
};
