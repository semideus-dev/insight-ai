"use client";
import { useState } from "react";
import { PieChart } from "@/components/charts";
import TaskList, { type Task } from "@/components/TaskList";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [transcript, setTranscript] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateTasks = async () => {
    if (!transcript.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transcript }),
      });

      const data = await response.json();
      setTasks(data.tasks);
    } catch (error) {
      console.error("Error generating tasks:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateTaskStatus = (id: string, status: "pending" | "completed") => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">InsightBoard AI Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Meeting Transcript</h2>
          <Textarea
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            placeholder="Paste your meeting transcript here..."
            rows={10}
          />
          <Button onClick={generateTasks} disabled={isLoading}>
            {isLoading ? "Generating..." : "Generate Action Items"}
          </Button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Action Items</h2>
          <TaskList
            tasks={tasks}
            onStatusChange={updateTaskStatus}
            onDelete={deleteTask}
          />

          {tasks.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-2">Progress</h3>
              <PieChart
                completed={tasks.filter((t) => t.status === "completed").length}
                pending={tasks.filter((t) => t.status === "pending").length}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
