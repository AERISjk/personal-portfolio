"use client";
import { useInView } from "framer-motion"; // Corrected import
import { FormEvent, useRef, useState } from "react";

// import useNewsLetter, { ClientData } from '@/lab/hooks/useNewsLetter'
import Link from "next/link";

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  // const [Send, cilentData] = useNewsLetter()
  const [openPopup, setOpenPopUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: (i: number) => ({
      translateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),

    hidden: { translateY: 200 },
  };

  // Corrected function signature and logic
  const handleNewsLetterData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Removed duplicate call
    console.log(e);

    const target = e.currentTarget as HTMLFormElement;
    const formData = new FormData(target);

    const clientEmail = formData.get("newsletter_email");

    if (!clientEmail) {
      console.error("Newsletter email field not found or empty.");
      return;
    }

    // const data: ClientData = {
    // 	 email: clientEmail.toString(),
    // }

    // Send(data)
    setOpenPopUp(true);
    target.reset();

    // Corrected popup timeout logic
    setTimeout(() => {
      setOpenPopUp(false);
    }, 2000);
  };

  return (
    <>
      <div
        className="relative h-full p-8 md:p-6 lg:p-6 pt-8 bg-[#f7f7f7] text-black"
        ref={container}>
        <div className="sm:container 	mx-auto">
          <div className="md:flex justify-between w-full">
            <div>
              <h1 className="md:text-4xl text-2xl font-semibold">
                Let&lsquo;s do great work together
              </h1>
            </div>
            <div className="flex gap-10">
              <ul>
                <li className="text-2xl pb-2 text-black font-semibold">
                  SITEMAP
                </li>
                <li className="text-xl font-medium">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="/about">About Me</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="/services">Services</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
              <ul>
                <li className="text-2xl pb-2 text-black font-semibold">
                  SOCIAL
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.linkedin.com/in/chhengly-siek-5b475323b/"
                    target="_blank"
                    className="underline">
                    LinkedIn
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.behance.net/chhenglyseak"
                    target="_blank"
                    className="underline">
                    Behance
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://dribbble.com/HelloAeris123"
                    target="_blank"
                    className="underline">
                    Dribble
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.tiktok.com/@aerisjk8?_r=1&_t=ZS-91dzxoPcRLk"
                    target="_blank"
                    className="underline">
                    Tiktok
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-y-2 md:py-4 border-gray-200">
            {/* Corrected: Replaced motion.svg with motion.div wrapping an img tag */}
            {/* <motion.div
              ref={ref}
              className="sm:h-fit h-20 md:px-8 px-2 footer-logo w-full"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={variants} // Ensure variants are passed to motion component
            > */}
            <img
              src="/images/text.svg"
              alt="NextCodez Logo Text"
              className="w-full h-full object-contain"
            />
            {/* </motion.div> */}
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-3 justify-between py-2">
            <span className="font-medium">&copy; 2025 by Chhengly Seak..</span>
            <a href="#" className="font-semibold">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
