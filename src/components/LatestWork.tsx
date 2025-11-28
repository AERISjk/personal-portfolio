"use client";

import React from "react";
import { Card, Carousel } from "./ui/apple-cards-carousel";

interface CardData {
  category: string;
  title: string;
  src: string;
  tags: string[];
  content: React.ReactNode;
}
const figmaLink1 =
  "https://www.figma.com/design/aMu4L9Y2azFbheKqNXPtFr/AURURA-EARBUDS?node-id=166-2315&t=gBUSUozyjHjdj0t3-1";
const figmaLink2 =
  "https://www.figma.com/design/aMu4L9Y2azFbheKqNXPtFr/AURURA-EARBUDS?node-id=166-3306&t=gBUSUozyjHjdj0t3-1";
const figmaLink3 =
  "https://www.figma.com/design/aMu4L9Y2azFbheKqNXPtFr/AURURA-EARBUDS?node-id=0-1&t=gBUSUozyjHjdj0t3-1";
const figmaLink4 =
  "https://www.figma.com/design/aMu4L9Y2azFbheKqNXPtFr/AURURA-EARBUDS?node-id=166-2316&t=gBUSUozyjHjdj0t3-1";
const figmaLink5 =
  "https://www.figma.com/design/fRWN6QLrJakgvWLe7FRj04/Explorify-App?node-id=0-1&t=L4iwTTi9t6DJ7dYp-1";
const DummyContent = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={"dummy-content-" + index}
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-12">
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              This website was carefully designed using Figma
            </span>
            , focusing on identifying key problems and developing effective
            solutions. Throughout the process, ChatGPT was used to help generate
            and refine the content, ensuring clarity, relevance, and engagement
            for users.
          </p>
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            Figma Link :
          </p>

          <img
            src="/images/scroll-image/test.png"
            alt="Macbook mockup"
            height={800}
            width={800}
            className="md:w-full md:h-1/2 h-full w-full mx-auto object-contain mt-12"
          />
        </div>
      ))}
    </>
  );
};

export default function LatestProjectSection() {
  const cards = data.map((card: CardData, index: number) => (
    <Card key={card.src} card={card} index={index} layout />
  ));

  return (
    <div className="w-full h-full p-6 md:p-16">
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl text-white">
        Recent Works
      </h1>
      <p className="text-neutral-300 dark:text-neutral-300 text-sm md:text-base pl-16 pt-4">
        Scroll down to explore my key contributions and technical achievements
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const data: CardData[] = [
  {
    category: "Website Design",
    title: "Digital Agency’s Website",
    src: "/images/scroll-image/cover1.png",
    tags: ["Figma"],
    content: (
      <>
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-12">
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              This website was carefully designed using Figma
            </span>
            , focusing on identifying key problems and developing effective
            solutions. Throughout the process, ChatGPT was used to help generate
            and refine the content, ensuring clarity, relevance, and engagement
            for users.
          </p>
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-4">
            <a
              href={figmaLink1}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors">
              Figma Link
            </a>

            <span>&#x2197;</span>
          </p>

          <img
            src="/images/scroll-image/cover1-full.png"
            alt="Macbook mockup"
            height={800}
            width={800}
            className="md:w-full md:h-1/2 h-full w-full mx-auto object-contain mt-12"
          />
        </div>
      </>
    ),
  },
  {
    category: "Website Design",
    title: "Software Agency's Website",
    src: "/images/scroll-image/cover2.png",
    tags: ["Figma"],
    content: (
      <>
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-12">
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              Crafted with Figma
            </span>
            , the website focuses on solving identified problems through
            well-considered solutions. ChatGPT assisted in developing the
            content, ensuring it is clear, meaningful, and engaging.
          </p>
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-4">
            <a
              href={figmaLink2}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors">
              Figma Link
            </a>

            <span>&#x2197;</span>
          </p>

          <img
            src="/images/scroll-image/cover2-full.png"
            alt="Macbook mockup"
            height={800}
            width={800}
            className="md:w-full md:h-1/2 h-full w-full mx-auto object-contain mt-12"
          />
        </div>
      </>
    ),
  },
  {
    category: "Website Design",
    title: "Earbuds Lending Website",
    src: "/images/scroll-image/cover3.png",
    tags: ["Figma"],
    content: (
      <>
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-12">
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              The website was developed using Figma
            </span>
            , emphasizing problem-solving and solution design. Content was
            generated and refined with the help of ChatGPT to enhance clarity
            and user experience.
          </p>
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-4">
            <a
              href={figmaLink3}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors">
              Figma Link
            </a>

            <span>&#x2197;</span>
          </p>

          <img
            src="/images/scroll-image/cover3-full.png"
            alt="Macbook mockup"
            height={800}
            width={800}
            className="md:w-full md:h-1/2 h-full w-full mx-auto object-contain mt-12"
          />
        </div>
      </>
    ),
  },
  {
    category: "Website Design",
    title: "Banking Dashboard Design",
    src: "/images/scroll-image/cover4.png",
    tags: ["Figma"],
    content: (
      <>
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-12">
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              The website was developed using Figma
            </span>
            , emphasizing problem-solving and solution design. Content was
            generated and refined with the help of ChatGPT to enhance clarity
            and user experience.
          </p>
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-4">
            <a
              href={figmaLink4}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors">
              Figma Link
            </a>

            <span>&#x2197;</span>
          </p>

          <img
            src="/images/scroll-image/cover4-full.png"
            alt="Macbook mockup"
            height={800}
            width={800}
            className="md:w-full md:h-1/2 h-full w-full mx-auto object-contain mt-12"
          />
        </div>
      </>
    ),
  },
  {
    category: "Mobile App Design",
    title: "Explorify  Mobile App Design",
    src: "/images/scroll-image/cover5.jpg",
    tags: ["Figma", "Django", "Flutter"],
    content: (
      <>
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-12">
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              This application is designed to support students in their
              internship search journey
            </span>
            by simplifying the process through a centralized mobile platform. It
            includes features such as internship listings from various sources,
            CV and profile creation tools, application tracking, and
            employer-student interaction, making it easier for students to find
            and apply for relevant opportunities.This project provides a
            full-stack solution with a Django backend API, a Flutter mobile
            frontend, and a React web frontend, enabling to build robust and
            interactive applications.
          </p>
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-4">
            <a
              href={figmaLink5}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors">
              Figma Link
            </a>
            <a
              href="https://github.com/CADT-CAPSTONE-PROJECT-II-GEN-8/Explorify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors pl-8">
              Project Repository
            </a>
            <span>&#x2197;</span>
          </p>

          <img
            src="/images/scroll-image/cover5-full.jpg"
            alt="Macbook mockup"
            height={800}
            width={800}
            className="md:w-full md:h-1/2 h-full w-full mx-auto object-contain mt-12"
          />
        </div>
      </>
    ),
  },
  {
    category: "Website Design",
    title: "Explorify Lending Website",
    src: "/images/scroll-image/cover6.png",
    tags: ["Figma", "Django", "React Js"],
    content: (
      <>
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-12">
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              This application is designed to support students in their
              internship search journey
            </span>
            by simplifying the process through a centralized mobile platform. It
            includes features such as internship listings from various sources,
            CV and profile creation tools, application tracking, and
            employer-student interaction, making it easier for students to find
            and apply for relevant opportunities.This project provides a
            full-stack solution with a Django backend API, a Flutter mobile
            frontend, and a React web frontend, enabling to build robust and
            interactive applications.
          </p>
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-4">
            <a
              href={figmaLink5}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors">
              Figma Link
            </a>
            <a
              href="https://github.com/CADT-CAPSTONE-PROJECT-II-GEN-8/Explorify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors pl-6">
              Project Repository
            </a>

            <span>&#x2197;</span>
          </p>

          <img
            src="/images/scroll-image/cover6-full.png"
            alt="Macbook mockup"
            height={800}
            width={800}
            className="md:w-full md:h-1/2 h-full w-full mx-auto object-contain mt-12"
          />
        </div>
      </>
    ),
  },
];
