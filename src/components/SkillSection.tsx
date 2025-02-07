import React from 'react'

const SkillSection = () => {
  return (
    <section className="w-full max-w-4xl" id="skills">
        <h2 className="mb-6 text-3xl font-bold text-[hsl(280,100%,70%)]">Skills</h2>
        <div className="flex flex-wrap gap-4">
        <span className="rounded-full bg-white/10 px-4 py-2">TypeScript</span>
        <span className="rounded-full bg-white/10 px-4 py-2">React</span>
        <span className="rounded-full bg-white/10 px-4 py-2">Next.js</span>
        <span className="rounded-full bg-white/10 px-4 py-2">Tailwind CSS</span>
        <span className="rounded-full bg-white/10 px-4 py-2">Node.js</span>
        </div>
    </section>
  )
}

export default SkillSection