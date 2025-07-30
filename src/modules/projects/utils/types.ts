export interface Tasks {
  id: string;
  text: string;
  status: "pending" | "completed";
  priority: "high" | "medium" | "low";
  owner: string;
  dueDate: Date | string | null;
  tags: Array<string>;
  createdAt: string;
}
