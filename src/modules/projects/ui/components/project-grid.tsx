import React from "react";
import ProjectCard from "./cards";
import { getProjects } from "../../actions";

export default async function ProjectGrid() {
  try {
    const projects = await getProjects();

    if (projects.length === 0) {
      return <div className="text-muted-foreground text-center text-sm my-4">Projects created by you will be displayed here.</div>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} title={project.name} id={project.id} createdAt={project.createdAt} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return <div>Error fetching projects</div>;
  }
}

