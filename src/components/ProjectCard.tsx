"use client";

import React from "react";
import { motion } from "framer-motion";
import { type ProjectType } from "./ProjectSection";
import Image from "next/image";

const ProjectCard = ({
  project,
}: {
  project: ProjectType;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="relative flex flex-col w-full h-full"
    >
      <a
        href={project.link ?? undefined}
        className="relative flex flex-col rounded-2xl border border-white/20  p-6 shadow-lg transition-transform hover:scale-105"
      >
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} image`}
            width={400}
            height={400}
            className="mb-4 w-full rounded-lg object-cover"
          />
        )}
        <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
        {project.description.map((paragraph, index) => (
            <p key={index} className="mt-1 text-gray-400">
              {paragraph}
            </p>
          ))
        }
      </a>
    </motion.div>
  );
};

export default ProjectCard;
