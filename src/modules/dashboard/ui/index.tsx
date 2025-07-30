import PageHeader from "@/components/custom/page-header";
import React from "react";
import { DashboardStats } from "./components/stats";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getDashboardStats } from "../actions";

export default async function DashboardView() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized");
  }

  const stats = await getDashboardStats(session.user.id);

  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        header="Dashboard"
        description="Track your projects and tasks."
      />
      <DashboardStats {...stats} />
    </div>
  );
}
