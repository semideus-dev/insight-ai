"use client";

import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import PageHeader from "@/components/custom/page-header";
import { AddIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { NewProjectDialog } from "./dialogs";

export function ProjectsHeader() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex items-center justify-between">
      <NewProjectDialog open={isOpen} onOpenChange={setIsOpen} />
      <PageHeader
        header="Your Projects"
        description="Turn your meeting notes into actionable tasks."
      />
      <Button
        onClick={() => setIsOpen(true)}
        className="rounded-full font-semibold tracking-wide uppercase"
        size={isMobile ? "icon" : "default"}
      >
        <AddIcon />
        {!isMobile && "Create"}
      </Button>
    </div>
  );
}

export function ProjectDetailsHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-xl font-semibold md:text-3xl"
              href="/projects"
            >
              Your Projects
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-xl font-semibold md:text-3xl">
              {title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
