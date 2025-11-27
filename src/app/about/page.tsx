import AboutSection from "@/components/About";
import AboutSectionV2 from "@/components/AboutV2";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ProjectSection from "@/components/Project";
import SkillsSection from "@/components/Skills";
import { LogoSkillLoopAnimation } from "@/components/skills-animation-logo";
import { WorkExperienceSection } from "@/components/WorkExperienceV1";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutSectionV2 />
      <AboutSection />
      <SkillsSection />
      <LogoSkillLoopAnimation />
      <WorkExperienceSection />

      <div className="pt-12">
        <ProjectSection />
      </div>

      <Footer />
    </>
  );
}
