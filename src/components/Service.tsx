"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
// REMOVED: import { ReactLenis } from "lenis/react";
import Image from "next/image";
import { useRef } from "react";
// Assuming TimelineContent is in './ui/animation'
import { TimelineContent } from "./ui/aniation";

const projects = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "I build responsive and modern websites using HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS.",
    includes: [
      "Business Sites",
      "Portfolios",
      "Landing Pages",
      "Product Pages",
    ],
    url: "https://www.sectorlink.com/img/blog/web-devel-important.jpg",
    color: "#ffffff",
  },
  {
    title: "UX/UI DESIGN",
    description:
      "I create intuitive and aesthetically pleasing digital interfaces grounded in user-centered design principles. This followed by designing clean, accessible, and functional wireframes and high-fidelity mockups in Figma",
    includes: [
      "Full Website UI",
      "Landing Pages",
      "Wireframes",
      "Prototypes",
      "Style Guides",
    ],
    url: "https://www.almondsolutions.com/images/blog-ui-ux-150223.jpg",
    color: "#ffffff",
  },
  {
    title: "WEB / APP DESIGN (FIGMA)",
    description:
      "I deliver polished, modern mobile application designs for both iOS and Android platforms. Focusing on established platform guidelines and seamless user flows.",
    includes: [
      "App Screens",
      "User Flows",
      "UI Kits",
      "Interactive Prototypes",
    ],
    url: "https://buildfire.com/wp-content/uploads/2024/09/mobile-app-design-1.jpg",
    color: "#ffffff",
  },
];

export default function ServiceSection(){
  const container = useRef(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    // <ReactLenis root> was removed here to fix global scroll conflicts
    <main className="bg-black relative" ref={container}>
      <section className="lg:h-[30vh] w-full p-6 md:p-16 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
          Services
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-4xl pt-2">
          Focused on high performance and measurable results. I provide
          end-to-end digital solutions that transform ideas into polished,
          high-functioning web experiences...
        </p>
      </section>

      <TimelineContent
        className="
        absolute inset-0 
        bg-[linear-gradient(to_right,#a3a3a32e_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a32e_1px,transparent_1px)]
        bg-[size:70px_70px]
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_110%)]
      "
        animationNum={3}
        timelineRef={heroRef}
      />

      {/* RESPONSIVE CARDS */}
      <section className="bg-black relative z-10">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;

          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project.url}
              title={project.title}
              color={project.color}
              description={project.description}
              includes={project.includes}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </main>
    // </ReactLenis> was removed here
  );
}

// CARD COMPONENT REMAINS THE SAME
interface CardProps {
  i: number;
  title: string;
  description: string;
  includes: string[];
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  includes,
  url,
  // color, // Removed unused color prop
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);

  // Scroll trigger only for image zoom, relative to its own container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="
      min-h-[90vh] 
      md:h-screen
      flex items-center justify-center 
      sticky top-0 
      px-4 sm:px-6 md:px-10
    ">
      <motion.div
        style={{ scale }}
        className="
        flex flex-col lg:flex-row 
        h-auto lg:h-[480px] 
        w-full max-w-6xl 
        rounded-xl 
        p-4 sm:p-6 lg:p-10 
        origin-top 
        shadow-xl 
        bg-neutral-50
      ">
        {/* TEXT */}
        <div className="lg:w-1/2 flex flex-col justify-center gap-4 text-black">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg">{description}</p>

          <p className="text-lg font-semibold mt-2">Includes:</p>

          <div className="flex flex-wrap gap-2 mt-1">
            {includes.map((item, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm bg-blue-500 rounded-full px-3 py-1 text-white">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* IMAGE: The parent div has explicit height/width and 'relative' which is correct for `fill` */}
        <div className="lg:w-1/2 h-[250px] sm:h-[300px] lg:h-full relative rounded-lg overflow-hidden mt-6 lg:mt-0">
          <motion.div className="w-full h-full" style={{ scale: imageScale }}>
            <Image
              fill
              src={url}
              alt={title}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={i === 0}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
