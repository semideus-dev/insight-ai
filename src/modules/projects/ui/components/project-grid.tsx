import React from "react";
import ProjectCard from "./cards";
import { getProjects } from "../../actions";

export default async function ProjectGrid() {
  try {
    const projects = await getProjects();
    return (
      <div className="grid grid-cols-3 gap-4 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} title={project.name} id={project.id} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return <div>Error fetching projects</div>;
  }
}
