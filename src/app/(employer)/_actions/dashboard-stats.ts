"use server";

import { prisma } from "@/lib/prisma";

export async function getEmployerDashboardStats(employerId: number) {
  try {
    // 1. Get all job IDs for this employer first to avoid nested joins in subsequent queries
    const employerJobs = await prisma.job.findMany({
      where: { 
        employerId,
        deletedAt: null 
      },
      select: { id: true }
    });

    const jobIds = employerJobs.map(j => j.id);

    if (jobIds.length === 0) {
      return {
        totalJobs: 0,
        totalApplications: 0,
        recentApplications: [],
        statusCounts: []
      };
    }

    // 2. Fetch stats in parallel using the job IDs
    const [totalApplications, recentApplications, statusCounts] = await Promise.all([
      prisma.jobApplication.count({
        where: { jobId: { in: jobIds } },
      }),
      prisma.jobApplication.findMany({
        where: { jobId: { in: jobIds } },
        include: {
          applicant: {
            include: {
              user: true,
            },
          },
          job: {
            select: { title: true }
          },
        },
        orderBy: {
          appliedAt: "desc",
        },
        take: 5,
      }),
      prisma.jobApplication.groupBy({
        by: ['status'],
        where: { jobId: { in: jobIds } },
        _count: true
      })
    ]);

    return {
      totalJobs: jobIds.length,
      totalApplications,
      recentApplications,
      statusCounts
    };
  } catch (error) {
    console.error("Dashboard Stats Error:", error);
    return {
      totalJobs: 0,
      totalApplications: 0,
      recentApplications: [],
      statusCounts: []
    };
  }
}

