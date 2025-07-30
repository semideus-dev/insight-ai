"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown, Filter, Search } from "lucide-react";
import { Tasks } from "../../utils/types";


export function TaskList({ tasks: initialTasks }: { tasks: Tasks[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    priority: null as string | null,
    status: null as string | null,
    tag: null as string | null,
  });
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Tasks;
    direction: "ascending" | "descending";
  } | null>(null);

  // Get all unique tags for filter options
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    initialTasks.forEach((task) => {
      task.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, [initialTasks]);

  // Filter and sort tasks
  const filteredTasks = useMemo(() => {
    let result = [...initialTasks];

    // Apply search
    if (searchTerm) {
      result = result.filter((task) =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply filters
    if (filters.priority) {
      result = result.filter((task) => task.priority === filters.priority);
    }
    if (filters.status) {
      result = result.filter((task) => task.status === filters.status);
    }
    if (filters.tag) {
      result = result.filter((task) => task.tags?.includes(filters.tag!));
    }

    // Apply sorting
    if (sortConfig) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue === undefined || bValue === undefined) return 0;

        if (aValue instanceof Date && bValue instanceof Date) {
          return sortConfig.direction === "ascending"
            ? aValue.getTime() - bValue.getTime()
            : bValue.getTime() - aValue.getTime();
        }

        // if (aValue < bValue) {
        //   return sortConfig.direction === "ascending" ? -1 : 1;
        // }
        // if (aValue > bValue) {
        //   return sortConfig.direction === "ascending" ? 1 : -1;
        // }
        return 0;
      });
    }

    return result;
  }, [initialTasks, searchTerm, filters, sortConfig]);

  const requestSort = (key: keyof Tasks) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig?.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const priorityColors = {
    high: "bg-red-100 text-red-800",
    medium: "bg-yellow-100 text-yellow-800",
    low: "bg-green-100 text-green-800",
  };

  return (
    <div className="space-y-4">
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tasks..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuRadioGroup
              value={filters.priority || ""}
              onValueChange={(value) =>
                setFilters({ ...filters, priority: value || null })
              }
            >
              <p className="px-2 py-1 text-sm font-medium">Priority</p>
              <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="medium">
                Medium
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>

            <DropdownMenuSeparator />

            <DropdownMenuRadioGroup
              value={filters.status || ""}
              onValueChange={(value) =>
                setFilters({ ...filters, status: value || null })
              }
            >
              <p className="px-2 py-1 text-sm font-medium">Status</p>
              <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="pending">
                Pending
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="completed">
                Completed
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>

            <DropdownMenuSeparator />

            <DropdownMenuRadioGroup
              value={filters.tag || ""}
              onValueChange={(value) =>
                setFilters({ ...filters, tag: value || null })
              }
            >
              <p className="px-2 py-1 text-sm font-medium">Tags</p>
              <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
              {allTags.map((tag) => (
                <DropdownMenuRadioItem key={tag} value={tag}>
                  {tag}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Task List */}
      <div className="space-y-2">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No tasks found matching your criteria
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-start gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
            >
              <Checkbox
                checked={task.status === "completed"}
                onCheckedChange={(checked) => {
                  // Add your update task status logic here
                }}
                className="mt-1"
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <Badge className={priorityColors[task.priority]}>
                    {task.priority}
                  </Badge>
                  {task.tags?.map((tag) => (
                    <Badge variant="outline" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p
                  className={`font-medium ${
                    task.status === "completed"
                      ? "line-through text-muted-foreground"
                      : ""
                  }`}
                >
                  {task.text}
                </p>
                {task.dueDate && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
