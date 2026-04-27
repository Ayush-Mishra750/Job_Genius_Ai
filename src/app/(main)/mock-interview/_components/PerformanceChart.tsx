"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Interview } from "../../../../../generated/prisma";
import { useTheme } from "next-themes";

const CustomXTick = ({ x, y, payload }: any) => {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;
const { theme } = useTheme();


  return (
    <text
      x={x}
      y={y + (isMobile ? 8 : 16)}
      textAnchor="middle"
          fill={theme === "dark" ? "#fff" : "#000"}

      fontSize={isMobile ? 10 : 14}
    >
      {payload.value}
    </text>
  );
};

const CustomYTick = ({ x, y, payload }: any) => {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;
const { theme } = useTheme();

  return (
    <text
      x={x}
      y={y}
      textAnchor="end"
      fill={theme === "dark" ? "#fff" : "#000"}
      fontSize={isMobile ? 10 : 14}
    >
      {payload.value}%
    </text>
  );
};

export default function PerformanceChart({
  interviews,
}: {
  interviews: Interview[];
}) {
  const chartData =
    interviews?.map((interview) => ({
      date: format(new Date(interview.createdAt), "MMM dd"),
      score: interview.interviewScore,
    })) || [];

  return (
    <Card className="shadow-xl border-none bg-gradient-to-br from-background to-muted/30">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl font-bold">
          Performance Trend
        </CardTitle>
        <CardDescription>
          Track your improvement over time
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              
              {/* 🔥 Gradient */}
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

              <XAxis dataKey="date" tick={<CustomXTick />} />
              <YAxis domain={[0, 100]} tick={<CustomYTick />} width={50} />

              {/* ✨ Modern Tooltip */}
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="bg-background/90 backdrop-blur-md border border-primary/20 rounded-xl p-3 shadow-lg">
                        <p className="text-sm font-semibold text-primary">
                          🚀 {payload[0].value}%
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

              {/* 🔥 Fancy Line */}
              <Line
                type="monotone"
                dataKey="score"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                fill="url(#colorScore)"
                animationDuration={800}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}