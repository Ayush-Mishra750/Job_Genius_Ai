"use server"
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getCoverLetters() {

  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  const applicant = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!applicant || user.role!=="applicant") throw new Error("User not found");

  return await prisma.coverLetter.findMany({
    where: {
      // id: user.id,
      applicantId:applicant.id
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getCoverLetter(id:number) {
  const user= await getCurrentUser();
  if (!user?.id) throw new Error("Unauthorized");

  const data = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!data) throw new Error("User not found");

  return await prisma.coverLetter.findUnique({
    where: {
      id: id,
    },
  });
}

export async function deleteCoverLetter(id:number){
  const user=await getCurrentUser();
  if(!user)throw new Error("Unauthorized");
  try {
    const data= await prisma.coverLetter.delete({
      where:{
        id:id
      }
    })
    if(data){
      return data;
    }
    revalidatePath("/cover");
  } catch (error) {
    console.log(error,"delete error in cover letter")
    throw new Error("user not found")
  }
}