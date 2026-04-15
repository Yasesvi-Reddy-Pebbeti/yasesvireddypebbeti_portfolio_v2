import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import SkillsSection from "@/components/home/SkillsSection";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import LeadershipSection from "@/components/home/LeadershipSection";
import EducationSection from "@/components/home/EducationSection";
import AchievementsPreview from "@/components/home/AchievementsPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <ProjectsPreview />
      <SkillsSection />
      <ExperiencePreview />
      <LeadershipSection />
      <EducationSection />
      <AchievementsPreview />
      <ContactCTA />
    </div>
  );
}