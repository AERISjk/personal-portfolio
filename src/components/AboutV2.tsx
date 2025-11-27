"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react"; // Added Flower for the header icon
import { SiBehance, SiTiktok } from "react-icons/si";

export default function AboutSectionV2() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-10 py-20 bg-black text-white">
      {/* WHO I AM */}
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-sm font-semibold tracking-wide flex items-center gap-2">
        <span className="text-6xl font-bold text-white">WHO I AM</span>
        {/* Replaced img with a stylable Flower icon */}
        <img
          src="https://icons.iconarchive.com/icons/iconarchive/wild-camping/512/Flower-icon.png"
          alt="icon"
          className="w-10 h-10 inline-block"
        />
      </motion.p>

      {/* IMAGE + SOCIAL ICONS + STATS */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden mt-4">
        {/* Image */}
        <figure className="relative">
          <svg
            className="w-full"
            width="150%"
            height="150%"
            viewBox="0 0 100 40">
            <defs>
              <clipPath id="clip-inverted" clipPathUnits="objectBoundingBox">
                <path d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.775610 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.466030 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.0905880 1 0.0998072 1Z" />
              </clipPath>
            </defs>
            <image
              clipPath="url(#clip-inverted)"
              preserveAspectRatio="xMidYMid slice"
              width="100%"
              height="100%"
              xlinkHref="/images/MyPic3.jpg"></image>
          </svg>
        </figure>

        {/* Social Icons - HIDE ON MOBILE (NEW STYLING) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.3 }}
          className="hidden sm:flex absolute top-1 right-38 gap-3 px-4 py-2 rounded-xl ">
          {/* Behance Icon */}
          <a
            href="https://www.behance.net/chhenglyseak" // <-- Replace with your actual Behance URL
            target="_blank" // Optional: Opens the link in a new tab
            rel="noopener noreferrer" // Recommended for security and SEO when using target="_blank"
            className="group" // Use 'group' class to allow the parent 'a' tag to control hover states of children
          >
            <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-colors duration-300">
              <SiBehance
                size={18}
                // Use 'group-hover' to inherit the parent 'a' tag's hover state
                className="text-gray-400 group-hover:text-white transition-colors duration-300"
              />
            </div>
          </a>

          {/* Github Icon */}
          <a
            href="https://github.com/AERISjk" // <-- Replace with your actual Behance URL
            target="_blank" // Optional: Opens the link in a new tab
            rel="noopener noreferrer" // Recommended for security and SEO when using target="_blank"
            className="group" // Use 'group' class to allow the parent 'a' tag to control hover states of children
          >
            <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-colors duration-300 cursor-pointer">
              <Github
                size={18}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/chhengly-siek-5b475323b/" // <-- Replace with your actual Behance URL
            target="_blank" // Optional: Opens the link in a new tab
            rel="noopener noreferrer" // Recommended for security and SEO when using target="_blank"
            className="group" // Use 'group' class to allow the parent 'a' tag to control hover states of children
          >
            {/* Linkedin Icon */}
            <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-colors duration-300 cursor-pointer">
              <Linkedin
                size={18}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              />
            </div>
          </a>
          {/* Tiktok Icon */}
          <a
            href="https://www.tiktok.com/@aerisjk8?_r=1&_t=ZS-91dzxoPcRLk" // <-- Replace with your actual Behance URL
            target="_blank" // Optional: Opens the link in a new tab
            rel="noopener noreferrer" // Recommended for security and SEO when using target="_blank"
            className="group" // Use 'group' class to allow the parent 'a' tag to control hover states of children
          >
            <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-colors duration-300 cursor-pointer">
              <SiTiktok
                size={18}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              />
            </div>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-3 right-1 px-6 py-4 hidden sm:block">
          <p className="text-3xl font-bold text-blue-500">
            10+ <span className="text-white">PROJECT</span>
          </p>
          <p className="text-sm font-semibold text-blue-500 mt-1">
            50% {""}
            <span className="text-gray-300 font-normal">
              {" "}
              UX/UI Design Focus
            </span>
          </p>
        </motion.div>
      </motion.div>

      {/* EXPERIENCE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap gap-2 mt-6 text-gray-300 text-sm font-medium">
        <span className="text-blue-500 font-bold"> Welcome</span> to my space. |
        <span className="text-blue-500 font-bold">Designing</span> and
        developing with flow
      </motion.div>

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 leading-tight">
        I'm Seak Chhengly, a passionate Web Developer and UI/UX Designer{" "}
      </motion.h1>

      {/* TEXT GRID */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-10 mt-8 text-gray-300 leading-relaxed">
        <p>
          I specialize in creating user-friendly, visually engaging, and
          responsive digital experiences. With a strong foundation in both
          development and design, I bring a blend of technical skill and
          creative thinking to every project.
        </p>

        <p>
          I'm eager to learn, grow, and contribute to real-world projects. I
          enjoy turning ideas into meaningful digital experiences, and I'm
          always looking for opportunities to improve my skills and explore new
          technologies.
        </p>
      </motion.div>
    </section>
  );
}

/* * The original 'IconWrapper' component has been removed as its functionality
 * is now handled directly by Tailwind classes in the social media section.
 */
