import Link from "next/link";
import ProjectCards from "~/components/ProjectCard";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Hi, I'm Lukas.<br></br> I call myself  <span className="text-[hsl(280,100%,70%)]">LR-Projects</span>
        </h1>
        
        <section className="w-full max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-[hsl(280,100%,70%)]">About Me</h2>
          <p className="mb-8 text-lg leading-relaxed">
            I'm a passionate developer focused on creating elegant solutions to complex problems. 
            With expertise in web development and software engineering, I bring ideas to life through code.
          </p>
        </section>

        <section className="w-full max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-[hsl(280,100%,70%)]">Projects</h2>
          <ProjectCards />
        </section>

        <section className="w-full max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-[hsl(280,100%,70%)]">Skills</h2>
          <div className="flex flex-wrap gap-4">
            <span className="rounded-full bg-white/10 px-4 py-2">TypeScript</span>
            <span className="rounded-full bg-white/10 px-4 py-2">React</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Next.js</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Tailwind CSS</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Node.js</span>
          </div>
        </section>

      </div>
    </main>
  );
}
