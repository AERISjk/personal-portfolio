"use client";

import { motion } from "framer-motion";
import { Mail, MoveUpRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6 md:p-16">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col justify-center">
          <motion.div variants={titleVariants} className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-4">
              Get in Touch
              <span className="text-white/40">
                <img
                  src="https://icons.iconarchive.com/icons/iconarchive/wild-camping/512/Flower-icon.png"
                  alt="icon"
                  className="w-12 h-12 mb-8  inline-block"
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base md:text-lg mb-12 max-w-md leading-relaxed">
            Thank you for visiting my portfolio. I'm always open to discussing
            new opportunities, potential collaborations, or challenging projects
            that align with my skills!
          </motion.p>

          <motion.div variants={containerVariants} className="space-y-6">
            {/* <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                <Phone className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                +102 002 0023
              </span>
            </motion.div> */}

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full group-hover:bg-white/10 transition-colors duration-300">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                chhenglysiek@gmail.com
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col justify-center">
          <form
            className="space-y-6"
            action="https://formspree.io/f/xgvvpnkp"
            method="POST">
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/10 py-4 px-0 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors duration-300"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/10 py-4 px-0 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors duration-300"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={1}
                className="w-full bg-transparent border-b border-white/10 py-4 px-0 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors duration-300 resize-none"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6">
              <motion.button
                type="submit"
                className="group flex items-center gap-3 text-black bg-white rounded-full py-2 px-3 hover:gap-5 transition-all duration-300"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}>
                <span className="text-lg font-medium ">Get in touch</span>
                <div className="w-12 h-12 flex items-center justify-center bg-black rounded-full">
                  <MoveUpRight className="w-5 h-5 text-white" />
                </div>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
