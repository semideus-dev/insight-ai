import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import React from "react";
import SettingsView from "@/modules/settings/ui";

export const metadata: Metadata = {
  title: "InsightAI - Settings",
  description: "Settings for editing profile",
};

export default async function SettingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }
  return <SettingsView />
}
