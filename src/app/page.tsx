import AboutSection from "~/components/AboutSection";
import AchievementSection from "~/components/AchievementSection";
import HeroSection from "~/components/HeroSection";
import ProjectSection from "~/components/ProjectSection";
import SkillSection from "~/components/SkillSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
      </div>
    </main>
  );
}
