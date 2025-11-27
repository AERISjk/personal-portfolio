"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Google",
    role: "Sr. Software Engineer",
    period: "Sep 2025 - Now",
    description:
      "Leading development of scalable web applications using React, TypeScript, and Node.js. Mentoring junior developers and implementing best practices.",
  },
  {
    company: "Microsoft",
    role: "Full Stack Developer",
    period: "Mar 2023 - Aug 2025",
    description:
      "Built and maintained multiple client websites and e-commerce platforms. Collaborated with design teams to implement pixel-perfect UI/UX designs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ExperienceSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col justify-start space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Experience
              </h2>
              <p className="text-muted-foreground text-pretty max-w-md leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                amet dolorem eum est voluptatem id repellendus ut laborum
                laboriosam debitis.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="group bg-background text-foreground border border-border hover:bg-accent">
                Contact now
                <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-12">
            <motion.div
              variants={itemVariants}
              className="text-sm text-muted-foreground">
              Solid 4 Years
            </motion.div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-4 border-b border-border pb-12 last:border-0 last:pb-0">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base font-normal text-foreground">
                      {experience.company}
                    </h3>
                    <h4 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {experience.role}
                    </h4>
                  </div>
                  <div className="text-sm text-muted-foreground sm:text-right whitespace-nowrap">
                    {experience.period}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
