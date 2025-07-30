"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { projects, tasks } from "@/lib/db/schema";
import env from "@/lib/env";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { Tasks } from "../utils/types";

interface CreateProjectProps {
  name: string;
  transcript: string;
}

export async function createProject({ name, transcript }: CreateProjectProps) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    throw new Error("Unauthorized");
  }

  try {
    const [project] = await db
      .insert(projects)
      .values({
        name,
        transcript,
        userId: session.user.id,
      })
      .returning();

    const response = await fetch(`${env.appUrl}/api/generate-tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        transcript,
        projectId: project.id,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate tasks");
    }

    const data = await response.json();

    if (!data) {
      throw new Error("Failed to generate tasks");
    }

    await db
      .insert(tasks)
      .values(
        data.map((task: Tasks) => ({
          projectId: project.id,
          description: task.text,
          status: task.status || "pending",
          priority: task.priority || "medium",
          dueDate: task.dueDate ? new Date(task.dueDate) : null,
          owner: task.owner,
          tags: task.tags || [],
          userId: session.user.id,
        }))
      )
      .returning();

    return {
      ...project,
      data,
    };
  } catch (error) {
    console.error("Error creating project:", error);
    throw new Error("Failed to create project");
  }
}

export async function getProjects() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    throw new Error("Unauthorized");
  }
  return db
    .select()
    .from(projects)
    .orderBy(projects.createdAt)
    .where(eq(projects.userId, session.user.id));
}

export async function getProjectbyId(projectId: string) {
  const [project] = await db
    .select()
    .from(projects)
    .where(eq(projects.id, projectId));

  if (!project) {
    throw new Error("Project not found");
  }

  const projectTasks = await db
    .select()
    .from(tasks)
    .where(eq(tasks.projectId, projectId)); // remove array destructuring here

  const formattedTasks = projectTasks.map((task) => ({
    id: task.id,
    text: task.description ?? "", // ensure it's not null
    status: task.status as "pending" | "completed",
    priority: task.priority as "high" | "medium" | "low",
    owner: task.owner || "",
    dueDate: task.dueDate,
    tags: task.tags || [],
    createdAt: task.createdAt?.toISOString() ?? "",
  }));

  return {
    project,
    tasks: formattedTasks, // now it's a proper array
  };
}
export async function updateTaskStatus(
  id: string,
  status: "pending" | "completed"
) {
  await db.update(tasks).set({ status }).where(eq(tasks.id, id));
}

export async function deleteTask(id: string) {
  await db.delete(tasks).where(eq(tasks.id, id));
}
