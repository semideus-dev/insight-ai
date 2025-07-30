"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#7c3aed", "#e2e8f0"]; // violet and gray

type StatsProps = {
  totalProjects: number;
  totalTasks: number;
  totalPending: number;
  projectData: { date: string; projects: number }[];
  taskData: { name: string; value: number }[];
};

export function DashboardStats({
  totalProjects,
  totalTasks,
  totalPending,
  projectData,
  taskData,
}: StatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Projects</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold">
          {totalProjects}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Tasks</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold">{totalTasks}</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pending Tasks</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold">{totalPending}</CardContent>
      </Card>

      {/* Area Chart: spans 2 columns */}
      <Card className="md:col-span-2 h-80">
        <CardHeader>
          <CardTitle>Projects Created Over Time</CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={projectData}>
              <defs>
                <linearGradient id="colorViolet" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="projects"
                stroke="#7c3aed"
                fillOpacity={1}
                fill="url(#colorViolet)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Pie Chart */}
      <Card className="h-80">
        <CardHeader>
          <CardTitle>Task Completion</CardTitle>
        </CardHeader>
        <CardContent className="h-full flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={taskData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#7c3aed"
                label
              >
                {taskData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
