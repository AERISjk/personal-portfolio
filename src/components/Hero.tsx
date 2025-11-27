"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-black to-[#8a5c2f]">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/flowers-intro.mp4"
        autoPlay
        loop
        muted
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="
          absolute 
          left-4 top-10
          sm:left-6 sm:top-14
          md:left-10 md:top-20
          lg:left-16 lg:top-24
          xl:left-20 xl:top-28
          text-white leading-none
        ">
        <h1 className="text-[14vw] sm:text-[12vw] md:text-[6vw] font-extrabold uppercase tracking-tight whitespace-nowrap">
          Seak
        </h1>

        <h2
          style={{ fontFamily: "Editorial" }}
          className="italic text-[12vw] sm:text-[10vw] md:text-[5vw] font-light mt-2 tracking-tight whitespace-nowrap uppercase">
          Chhengly
        </h2>
      </motion.div>

      {/* RIGHT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-4/7 md:bottom-1/8 right-8 md:right-8 lg:right-16 xl:right-24 text-white leading-none text-right ">
        <h2 className="text-[13vw] md:text-[6vw] font-extrabold uppercase tracking-[-0.05em] whitespace-nowrap">
          Web
        </h2>
        <h2
          style={{ fontFamily: "Editorial" }}
          className="italic text-[11vw] md:text-[5vw] font-light mt-2 tracking-[-0.05em] whitespace-nowrap uppercase">
          Developer
        </h2>
      </motion.div>

      {/* IMAGE CENTER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
        className="relative z-10 flex items-end justify-center h-full w-full pointer-events-none">
        <Image
          src="/images/MyPic.png"
          alt="My Pic"
          width={900}
          height={900}
          className="
            object-contain
            max-h-[100vh] 
            sm:max-h-[100vh]
            md:max-h-[100vh]
            lg:max-h-[100vh]
            xl:max-h-[100vh]
            sm:pl-4
          "
        />
      </motion.div>
    </section>
  );
}
