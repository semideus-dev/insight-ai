import { ProjectDetailsHeader } from "@/modules/projects/ui/components/headers";
import { getProjectbyId } from "../../actions";
import { redirect } from "next/navigation";
import { TaskList } from "../components/new-task-list";

export async function ProjectDetailsView({ projectId }: { projectId: string }) {
  const { tasks, project } = await getProjectbyId(projectId);

  if (!project) {
    redirect("/projects");
  }
  return (
    <div className="flex flex-col gap-4">
      <ProjectDetailsHeader title={project.name} />
      <TaskList tasks={tasks} />
    </div>
  );
}
