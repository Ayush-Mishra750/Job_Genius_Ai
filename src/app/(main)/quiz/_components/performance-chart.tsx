"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomXTick = ({ x, y, payload }:any) => {
  const isMobile = window.innerWidth < 768;
  return (
    <text
      x={x}
      y={y + (isMobile ? 8 : 16)}
      textAnchor="middle"
      fill="hsl(var(--foreground))"
      fontSize={isMobile ? 8 : 16}
    >
      {payload.value}
    </text>
  );
};

const CustomYTick = ({ x, y, payload }:any) => {
  const isMobile = window.innerWidth < 768;
  return (
    <text
      x={x}
      y={y}
      textAnchor="end"
      fill="hsl(var(--foreground))"
      fontSize={isMobile ? 8 : 16}
    >
      {payload.value}%
    </text>
  );
};

const PerformanceCharts = ({ assessments }:any) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (assessments) {
      const formattedData = assessments?.map((assessment) => ({
        date: format(new Date(assessment.createdAt), "MMM dd"),
        score: assessment.quizScore,
      }));
      setChartData(formattedData);
    }
  }, [assessments]);

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
          <ResponsiveContainer width="100%" height="100%">
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
                        <p className="text-sm font-medium text-primary">
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
