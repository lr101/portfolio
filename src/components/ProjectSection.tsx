import React from 'react'
import ProjectCards from './ProjectCards'

const ProjectSection = () => {
  return (
    <section className="w-full max-w-4xl" id="projects">
        <h2 className="mb-6 text-3xl font-bold text-[hsl(280,100%,70%)]">Projects</h2>
        <ProjectCards />
    </section>
  )
}

export default ProjectSection