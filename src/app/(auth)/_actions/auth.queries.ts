"use server"
import { cookies } from "next/headers";
import { cache } from "react";
import { validateSessionAndGetUser } from "./session";

export const getCurrentUser = cache(async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;            
//  console.log(session)
  if (!session) return null;

  const user = await validateSessionAndGetUser(session);
  // console.log(user)
  return user;
});

