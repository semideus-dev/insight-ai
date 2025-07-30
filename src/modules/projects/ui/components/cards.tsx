import { ArrowRightIcon } from "@/components/icons";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  id: string;
  createdAt: Date | null
}

export default function ProjectCard({ title, id, createdAt }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${id}`}
      className="hover:scale-105 transition-all"
    >
      <div className="h-[200px] w-full flex flex-col justify-between rounded-xl border p-4 border-b-primary">
        <span className="font-semibold capitalize tracking-wide text-2xl">
          {title}
        </span>
        <span className="text-muted-foreground">{createdAt?.toDateString()}</span>
      </div>

    </Link>
  );
}
