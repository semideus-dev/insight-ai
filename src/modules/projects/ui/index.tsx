import React from "react";
import { ProjectsHeader } from "./components/headers";
import ProjectGrid from "./components/project-grid";

export default function ProjectsView() {
  return (
    <div className="flex flex-col gap-4">
      <ProjectsHeader />
      <ProjectGrid />
    </div>
  );
}
