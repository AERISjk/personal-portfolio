"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TextReveal() {
  const text =
    "As a Web Developer and UX/UI Designer, I specialize in building solutions that are both functional and delightful.What Drives Me";
  const containerRef = useRef(null);

  // Scroll progress from 0 → 1
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <main className=" ">
      <section ref={containerRef} className="about  flex items-start">
        <div className="w-full flex justify-center ha-cool-split">
          <h2
            className="
              text-[2rem] md:text-[2.5rem]
              font-bold
              w-[100%]
              flex flex-wrap
              opacity-80
              text-black
              uppercase
              
            "
            style={{ color: "rgba(0,0,0,0.125)" }}>
            {text.split("").map((char, i) => {
              const start = i * 0.009;
              const end = start + 0.2;

              const color = useTransform(
                scrollYProgress,
                [start, end],
                ["rgba(0,0,0,0.125)", "black"]
              );

              return (
                <motion.span key={i} style={{ color }} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
          </h2>
        </div>
      </section>
    </main>
  );
}
