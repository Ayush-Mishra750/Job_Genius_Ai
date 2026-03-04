// features/employers/employer.queries.ts
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { prisma } from "@/lib/prisma";

export async function getEmployerProfile(employerId: number) {
    const currentUser=await getCurrentUser();
    if(!currentUser ||currentUser.role!=="employer"){
         return {
        status:"ERROR",
        message:"employer not found"
      }
    }

const result = await prisma.employer.findUnique({
    where: {
        id: employerId,
    },
})
  return result || null;
}

 export function htmlToText(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

