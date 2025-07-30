"use server";

import { db } from "@/lib/db";
import { projects, tasks } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function getDashboardStats(userId: string) {
  const userProjects = await db
    .select({ id: projects.id, createdAt: projects.createdAt })
    .from(projects)
    .where(eq(projects.userId, userId));

  const userTasks = await db
    .select({ status: tasks.status })
    .from(tasks)
    .where(eq(tasks.userId, userId));

  const totalProjects = userProjects.length;
  const totalTasks = userTasks.length;
  const totalPending = userTasks.filter((t) => t.status === "pending").length;

  // Area chart: projects by date
  const projectData: { [key: string]: number } = {};
  userProjects.forEach((p) => {
    const date = new Date(p.createdAt!).toISOString().split("T")[0];
    projectData[date] = (projectData[date] || 0) + 1;
  });

  const formattedProjectData = Object.entries(projectData).map(
    ([date, count]) => ({
      date,
      projects: count,
    })
  );

  // Pie chart: task completion
  const pending = userTasks.filter((t) => t.status === "pending").length;
  const completed = userTasks.filter((t) => t.status === "completed").length;

  const taskData = [
    { name: "Pending", value: pending },
    { name: "Completed", value: completed },
  ];

  return {
    totalProjects,
    totalTasks,
    totalPending,
    projectData: formattedProjectData,
    taskData,
  };
}
