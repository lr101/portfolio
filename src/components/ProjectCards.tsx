
import React from "react";
import { getProjects } from "~/server/db/projects";

export const dynamic = "force-dynamic";

export default async function ProjectCards() {
  const projects = await getProjects();
  return (
    <div className="p-4">
      {projects.length === 0 ? (
        <p className="text-gray-300">No projects found</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: any) => (
            <a
              href={project.link}
              key={project.id}
              className="rounded-lg border border-white/20 p-6 transition-transform hover:scale-105 block"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} image`}
                  className="mb-4 rounded"
                />
              )}
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}