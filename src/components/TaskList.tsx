import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export type Task = {
  id: string;
  text: string;
  status: "pending" | "completed";
  createdAt: string;
};

export default function TaskList({
  tasks,
  onStatusChange,
  onDelete,
}: {
  tasks: Task[];
  onStatusChange: (id: string, status: "pending" | "completed") => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="space-y-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500">
          No tasks yet. Submit a transcript to generate action items.
        </p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-2 border rounded"
            >
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={task.status === "completed"}
                  onCheckedChange={(checked) =>
                    onStatusChange(task.id, checked ? "completed" : "pending")
                  }
                />
                <span
                  className={
                    task.status === "completed"
                      ? "line-through text-gray-500"
                      : ""
                  }
                >
                  {task.text}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(task.id)}
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
