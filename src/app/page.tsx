import AboutSection from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestProjectSection from "@/components/LatestWork";
import { Navbar } from "@/components/Navbar";
import ServiceSection from "@/components/Service";
import SkillsSection from "@/components/Skills";
import { LogoSkillLoopAnimation } from "@/components/skills-animation-logo";
import ScrollBasedVelocitySection from "@/components/TextScrollVictory";
import { WorkExperienceSection } from "@/components/WorkExperienceV1";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollBasedVelocitySection />
      <AboutSection />
      <SkillsSection />
      <LogoSkillLoopAnimation />
      <WorkExperienceSection />

      <div className="pt-12">
        <LatestProjectSection />
        <ServiceSection />
      </div>

      <Contact />
      <Footer />
    </>
  );
}
