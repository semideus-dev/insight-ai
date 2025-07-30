
import { ArrowRightIcon } from "@/components/icons";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  id: string;
}

export default function ProjectCard({ title, id }: ProjectCardProps) {
  return (
    <div className="h-[200px] w-full flex flex-col justify-between rounded-xl border p-4">
      <span className="font-semibold capitalize tracking-wide text-2xl">
        {title}
      </span>
      <Link
        className="underline underline-offset-4 hover:underline-offset-8 text-muted-foreground transition-all"
        href={`/projects/${id}`}
      >
        View
      </Link>
    </div>
  );
}
