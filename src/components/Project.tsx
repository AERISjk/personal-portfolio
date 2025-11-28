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

export default function ProjectSection() {
  const cards = data.map((card: CardData, index: number) => (
    <Card key={card.src} card={card} index={index} layout />
  ));

  return (
    <div className="w-full h-full p-6 md:p-16">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white pl-16">
        All Projects
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

  {
    category: "Web Development",
    title: "Personal Portfolio Website V1",
    src: "/images/scroll-image/my-website.png",
    tags: ["React Js", "Tailwind Css"],
    content: (
      <>
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-12">
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700"></span>
            Responsive React portfolio with Tailwind CSS, showcasing skills,
            experience, resume, and contact.
          </p>
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-4">
            <a
              href="https://github.com/AERISjk/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors pl-6">
              Project Repository
            </a>

            <span>&#x2197;</span>
          </p>
        </div>
      </>
    ),
  },
  {
    category: "Game Development",
    title: "QuizVenture Mobile Game",
    src: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/5f/78/23/5f78239a-3a06-4c63-d3dd-0a8fbe05cf0a/AppIcon-0-0-1x_U007emarketing-0-10-0-sRGB-85-220.jpeg/1200x630wa.png",
    tags: ["Unity", "C#"],
    content: (
      <>
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-12">
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700"></span>
            QuizVenture is an interactive quiz game that challenges players with
            a variety of questions across multiple categories. Test your
            knowledge and compete with friends to see who can score the highest!
          </p>
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-4">
            <a
              href="https://github.com/CADT-REPO/QuizVenture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors pl-6">
              Project Repository
            </a>

            <span>&#x2197;</span>
          </p>
        </div>
      </>
    ),
  },
  {
    category: "Data Sciences",
    title: "Resume Ranking with Semantic",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYh5140P7NWNUhtWkYonxWB30eWoyhGNEP5w&s",
    tags: ["Python", "Jupyter Notebook"],
    content: (
      <>
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-12">
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700"></span>
            This project is part of the Final Year coursework for the CADT
            program. It involves the application of various data science
            techniques to solve a specific problem.
          </p>
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-4">
            <a
              href="https://github.com/CADT-REPO/Resume-Ranking-Semantic-Search-FinalProjectDS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors pl-6">
              Project Repository
            </a>

            <span>&#x2197;</span>
          </p>
        </div>
      </>
    ),
  },
  {
    category: "Web Development",
    title: "Ebook Website",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-AQcb3zGSajuRl9TTrT80-LsELyd_xEwVapRoMvJn0dQoQJO2jFLrbOXZ6si-3m39_l8&usqp=CAU",
    tags: ["Laravel", "Vue Js", "Tailwind Css", "Figma"],
    content: (
      <>
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-12">
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              E-books is a web project power by Laravel with Vue,and Inertia.
            </span>
            It is a website for book enjoyers. A place where people can read and
            publish books directly on the web. Developed a web application using
            Laravel, Tailwind CSS, HTML, CSS, and JavaScript. Created a
            user-friendly interface with responsive
          </p>
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-4">
            <a
              href="https://github.com/CADT-CAPSTONE-PROJECTS-I/E-Books"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors pl-6">
              Project Repository
            </a>

            <span>&#x2197;</span>
          </p>
        </div>
      </>
    ),
  },
  {
    category: "Web Development",
    title: "FSA Redesign Website",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-UqMKF1Phvdxt3SvFKCcrV0vMOijn-BWKg&s",
    tags: ["Laravel", "Tailwind Css", "MySQL"],
    content: (
      <>
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-12">
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700"></span>
            Developed a web application using technology laravel for backend
            Using MySQL as a database and github as a version control system
          </p>
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-4">
            <a
              href="https://github.com/tykealy/web-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors pl-6">
              Project Repository
            </a>

            <span>&#x2197;</span>
          </p>
        </div>
      </>
    ),
  },
];
