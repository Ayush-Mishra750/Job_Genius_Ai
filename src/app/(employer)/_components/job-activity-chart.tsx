"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Cell } from "recharts";
import { useTheme } from "next-themes";

interface JobActivityChartProps {
  statusCounts: { status: string; _count: number }[];
}

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"];

export function JobActivityChart({ statusCounts }: JobActivityChartProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (statusCounts.length === 0) {
    return (
      <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Application Status</CardTitle>
          <CardDescription>Distribution of candidates across hiring stages</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-20 text-muted-foreground text-center">
           <p className="text-lg">No application data yet.</p>
           <p className="text-sm">Candidates applying to your jobs will appear here.</p>
        </CardContent>
      </Card>
    );
  }

  const chartData = statusCounts.map((item, index) => ({
    name: item.status.charAt(0).toUpperCase() + item.status.slice(1),
    value: item._count,
    fill: COLORS[index % COLORS.length]
  }));

  return (
    <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Application Status</CardTitle>
        <CardDescription>Distribution of candidates across hiring stages</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#333" : "#eee"} />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: isDark ? "#888" : "#666", fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: isDark ? "#888" : "#666", fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: isDark ? "#ffffff10" : "#00000005" }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-background/95 backdrop-blur-md border border-border p-3 shadow-xl rounded-xl">
                        <p className="text-sm font-bold">{payload[0].payload.name}</p>
                        <p className="text-sm text-blue-500 font-semibold">
                          {payload[0].value} Candidates
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} fillOpacity={0.8} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
