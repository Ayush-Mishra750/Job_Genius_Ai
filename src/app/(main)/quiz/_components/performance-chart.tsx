"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JsonValue } from "@prisma/client/runtime/client";
import { format } from "date-fns";
import { useTheme } from "next-themes";
import { useRouter } from "next/dist/client/components/navigation";
// import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type AssessmentResult = {
  category: string;
  topic: string;
  difficulty: string | null;
  id: number;
  applicantId: number;
  quizScore: number;
  questions: JsonValue[];
  answers: (string | null)[];
  improvementTip: string | null;
  createdAt: Date;
  updatedAt: Date;
};

const CustomXTick = ({ x, y, payload }: any) => {
 
  const isMobile = window.innerWidth < 768;
const { theme } = useTheme();

  return (
    <text
      x={x}
      y={y + (isMobile ? 8 : 16)}
      textAnchor="middle"
      fill={theme === "dark" ? "#fff" : "#000"}
      fontSize={isMobile ? 8 : 16}
    >
      {payload.value}
    </text>
  );
};

const CustomYTick = ({ x, y, payload }: any) => {
 

  const isMobile = window.innerWidth < 768;
const { theme } = useTheme();

  return (
    <text
      x={x}
      y={y}
      textAnchor="end"
      fill={theme === "dark" ? "#fff" : "#000"}
      fontSize={isMobile ? 8 : 16}
    >
      {payload.value}%
    </text>
  );
};

const PerformanceCharts = ({
  assessments,
}: {
  assessments: AssessmentResult[] | null;
}) => {


  const chartData = (assessments || [])
    .slice()
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    )
    .map((assessment) => ({
      date: format(new Date(assessment.createdAt), "MMM dd"),
      score: assessment.quizScore,
    }));


  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl">
          Performance Trend
        </CardTitle>
        <CardDescription>Your Quiz Scores over Time</CardDescription>
      </CardHeader>

      <CardContent>
        <div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={chartData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={<CustomXTick />} />
              <YAxis domain={[0, 100]} tick={<CustomYTick />} width={50} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="bg-background border rounded-lg p-2 shadow-md">
                        <p className="text-sm font-medium text-blue-500">
                          Score: {payload[0].value}%
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {payload[0].payload.date}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceCharts;
