import { prisma } from "@/lib/prisma";

export async function getAllPaginationJobs(page: number = 1, limit: number = 6) {

  const skip = (page - 1) * limit;

  const jobs = await prisma.job.findMany({
    skip: skip,
    take: limit,
    orderBy: {
      createdAt: "desc"
    }
  });

  const totalJobs = await prisma.job.count();

  return {
    status: "SUCCESS",
    data: jobs,
    pagination: {
      totalJobs,
      page,
      limit,
      totalPages: Math.ceil(totalJobs / limit)
    }
  };
}