"use server";
export interface JobFilterParams {
  search?: string;
  jobType?: string;
  jobLevel?: string;
  workType?: string;
  page?: number;
  limit?: number;
}


import { prisma } from "@/lib/prisma";

export async function getAllJobs(filters: JobFilterParams) {
  // console.log("filters real:", filters);

  const page = filters.page || 1;
  const limit = filters.limit || 9;
  const skip = (page - 1) * limit;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  //  Dynamic WHERE
  const where: any = {
    deletedAt: null,

    // expiresAt condition
    OR: [
      { expiresAt: null },
      { expiresAt: { gte: today } },
    ],
  };

  //  Search
  if (filters?.search) {
    const search = filters.search;

    where.AND = [
      ...(where.AND || []),
      {
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            employer: {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
          },
          {
            tags: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
    ];
  }

  //  Filters
  if (filters?.jobType && filters.jobType !== "all") {
    where.jobType = filters.jobType;
  }

  if (filters?.jobLevel && filters.jobLevel !== "all") {
    where.jobLevel = filters.jobLevel;
  }

  if (filters?.workType && filters.workType !== "all") {
    where.workType = filters.workType;
  }

  //  Main Query
  const jobsData = await prisma.job.findMany({
    where,

    include: {
      employer: {
        select: {
          name: true,
          user: {
            select: {
              avatarUrl: true,
            },
          },
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },

    skip,
    take: limit,
  });


  const totalCount = await prisma.job.count({
    where,
  });


  const formattedJobs = jobsData.map((job) => ({
    id: job.id,
    title: job.title,
    description: job.description,
    minSalary: job.minSalary,
    maxSalary: job.maxSalary,
    salaryCurrency: job.salaryCurrency,
    salaryPeriod: job.salaryPeriod,
    location: job.location,
    jobType: job.jobType,
    workType: job.workType,
    createdAt: job.createdAt,
    companyName: job.employer?.name,
    companyLogo: job.employer?.user?.avatarUrl,
  }));

  return {
    jobs: formattedJobs,
    totalCount,
  };
}
// Ensure the type only extracts the job object shape for JobCards
export type JobCardType = Awaited<
  ReturnType<typeof getAllJobs>
>["jobs"][number];