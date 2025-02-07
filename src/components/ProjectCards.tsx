import React from "react";
import { getProjects } from "~/server/db/projects";
import ProjectCard from "./ProjectCard";


export interface ProjectType {
    id: number;
    link: string | null;
    image: string | null;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date | null;
}

export const dynamic = "force-dynamic";

export default async function ProjectCards() {
  const projects = await getProjects();

  return (
    <div className="relative flex flex-col items-center p-8">
      {projects.length === 0 ? (
        <p className="text-gray-300 text-center">No projects found</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {projects.map((project: any, index: number) => (
            <ProjectCard index={index} project={project} key={project.id}/>
          ))}
        </div>
      )}
    </div>
  );
}
