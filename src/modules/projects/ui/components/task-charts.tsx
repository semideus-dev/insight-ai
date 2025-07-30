"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Tasks } from "../../utils/types";

const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444"];

export function TaskCharts({ tasks }: { tasks: Tasks[] }) {
  const statusData = [
    {
      name: "Completed",
      value: tasks.filter((t) => t.status === "completed").length,
    },
    {
      name: "Pending",
      value: tasks.filter((t) => t.status === "pending").length,
    },
  ];

  const tagCountMap: Record<string, number> = {};
  tasks.forEach((task) => {
    task.tags?.forEach((tag) => {
      tagCountMap[tag] = (tagCountMap[tag] || 0) + 1;
    });
  });

  const tagData = Object.entries(tagCountMap).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card>
        <CardContent className="h-[300px]">
          <h3 className="text-md font-medium mb-4">Tasks by Status</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statusData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="h-[300px]">
          <h3 className="text-md font-medium mb-4">Tasks by Tags</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={tagData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {tagData.map((_, index) => (
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
