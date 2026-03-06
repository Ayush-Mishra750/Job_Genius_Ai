
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
  if (!html) return "";

  return html
    // convert list items to bullet points
    .replace(/<li>/gi, "\n• ")
    .replace(/<\/li>/gi, "")

    // convert headings to new sections
    .replace(/<h[1-6][^>]*>/gi, "\n\n")
    .replace(/<\/h[1-6]>/gi, "\n")

    // convert paragraphs
    .replace(/<p[^>]*>/gi, "")
    .replace(/<\/p>/gi, "\n")

    // convert line breaks
    .replace(/<br\s*\/?>/gi, "\n")

    // remove remaining tags
    .replace(/<[^>]*>/g, "")

    // remove extra spaces
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

