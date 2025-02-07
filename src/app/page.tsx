import AboutSection from "~/components/AboutSection";
import HeroSection from "~/components/HeroSection";
import ProjectSection from "~/components/ProjectSection";
import SkillSection from "~/components/SkillSection";
import TopNav from "~/components/TopNav";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <TopNav />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
      </div>
    </main>
  );
}
