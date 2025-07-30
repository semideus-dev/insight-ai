import { ProjectDetailsView } from "@/modules/projects/ui/views/project-details-view";
import React from "react";

interface ProjectDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;

  return <ProjectDetailsView projectId={id} />
}
