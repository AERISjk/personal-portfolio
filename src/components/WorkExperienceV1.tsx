"use client";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";

export function WorkExperienceSection() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12">
            <motion.div className="space-y-4 border-b border-border pb-12 last:border-0 last:pb-0">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-normal text-white">
                    Internship II (SATHAPANA BANK)
                  </h3>
                  <h4 className="text-2xl font-semibold tracking-tight sm:text-3xl text-white">
                    Web Developer
                  </h4>
                </div>

                <div className="text-sm text-muted-foreground sm:text-right whitespace-nowrap">
                  Feb 2025 - Now
                </div>
              </div>

              <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl mb-3">
                Collaborated with the UX/UI team and implemented designs with
                Material UI (MUI) to ensure a consistent and user-friendly
                experience. Developed frontend with Next.js, integrated REST
                APIs, and assisted backend team using NestJS.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://www.accesscreative.ac.uk/wp-content/uploads/2025/04/Coding-on-a-laptop.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    // ------------------------ 2024 ------------------------
    {
      title: "2024",
      content: (
        <div className="space-y-12">
          {/* Project 1 */}
          <div className="space-y-4 border-b border-border pb-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-normal text-white">
                  Capstone II (School's Project)
                </h3>
                <h4 className="text-2xl font-semibold tracking-tight sm:text-3xl text-white">
                  Frontend Web Developer / UX UI Designer
                </h4>
              </div>

              <div className="text-sm text-muted-foreground sm:text-right whitespace-nowrap">
                3 months
              </div>
            </div>

            <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl mb-3">
              Designed and developed mobile and web UI using Figma. Created a
              full-stack solution using Django backend, Flutter mobile app, and
              React web frontend.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/scroll-image/cover5.jpg"
                alt="bento template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
              />
              <img
                src="/images/scroll-image/cover6.png"
                alt="cards template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-normal text-white">
                  Internship I
                </h3>
                <h4 className="text-2xl font-semibold tracking-tight sm:text-3xl text-white">
                  Web Developer
                </h4>
              </div>

              <div className="text-sm text-muted-foreground sm:text-right whitespace-nowrap">
                3 months
              </div>
            </div>

            <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl mb-3">
              Developed a secure internal system using Django + PostgreSQL.
              Designed the frontend with Tailwind CSS focusing on clean UI and
              responsive experience.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://static-media.hotmart.com/cutIaciHqU2eWJmKfhbt5P_18eg=/705x0/https://uploads.teachablecdn.com/attachments/ifds6EEZQBizBLn4mjj2_django-course-thumbnail.jpg"
                alt="bento template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
              />
              <img
                src="https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp"
                alt="cards template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
              />
            </div>
          </div>
        </div>
      ),
    },

    // ------------------------ 2023 ------------------------
    {
      title: "2023",
      content: (
        <div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <h3 className="text-base font-normal text-white">
                Capstone I (School's Project)
              </h3>
              <h4 className="text-2xl font-semibold tracking-tight sm:text-3xl text-white">
                Frontend Web Developer
              </h4>
            </div>

            <div className="text-sm text-muted-foreground sm:text-right whitespace-nowrap">
              3 months
            </div>
          </div>

          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl mt-3">
            Developed a web application using Laravel, Tailwind CSS, HTML, CSS,
            and JavaScript. Created a user-friendly interface with responsive
            design using HTML, CSS, and Tailwind CSS. Collaborated with a team
            to integrate backend functionalities, including database management
            .
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between pt-16">
            <div className="space-y-2">
              <h3 className="text-base font-normal text-white">
                Web Application School's project
              </h3>
              <h4 className="text-2xl font-semibold tracking-tight sm:text-3xl text-white">
                Web Developer
              </h4>
            </div>

            <div className="text-sm text-muted-foreground sm:text-right whitespace-nowrap">
              3 months
            </div>
          </div>

          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl mt-3">
            Developed a web application using technology laravel for backend
            Created a user-friendly interface with responsive design using HTML,
            CSS, and Tailwind CSS. Using MySQL as a database and github as a
            version control system
          </p>

          <div className="grid grid-cols-2 gap-4 pt-6">
            <img
              src="https://www.designveloper.com/wp-content/uploads/2021/09/the-future-of-frontend-web-development-in-2020.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://cdn-strapi.sayonetech.com/media/Is_React_Js_JS_Frontend_Or_Backend_7b44f24e13.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
          </div>
          <div></div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
