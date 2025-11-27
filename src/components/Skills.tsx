"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const tools = [
  {
    name: "Figma",
    category: "DESIGN TOOL",
    percentage: 90,
    icon: "https://cdn.simpleicons.org/figma",
  },
  {
    name: "HTML",
    category: "FRONT-END",
    percentage: 95,
    icon: "https://cdn.simpleicons.org/html5/E34F26",
  },
  {
    name: "CSS",
    category: "FRONT-END",
    percentage: 90,
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDwBd9LoQzBAZigXXxzQ0kKn6TwyrE0Y7Rg&s",
  },
  {
    name: "JavaScript",
    category: "FRONT-END",
    percentage: 90,
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    name: "NestJS",
    category: "BACKEND",
    percentage: 85,
    icon: "https://cdn.simpleicons.org/nestjs/E0234E",
  },
  {
    name: "Django",
    category: "BACKEND",
    percentage: 80,
    icon: "https://cdn.simpleicons.org/django/092E20",
  },
  {
    name: "React",
    category: "JAVASCRIPT LIBRARY",
    percentage: 95,
    icon: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Next.js",
    category: "FULL STACK FRAMEWORK",
    percentage: 90,
    icon: "https://cdn.simpleicons.org/nextdotjs",
  },
  {
    name: "Tailwind CSS",
    category: "CSS FRAMEWORK",
    percentage: 90,
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  {
    name: "MUI",
    category: "CSS FRAMEWORK",
    percentage: 85,
    icon: "https://cdn.simpleicons.org/mui/007FFF",
  },
  {
    name: "MySQL",
    category: "DATABASE",
    percentage: 85,
    icon: "https://cdn.simpleicons.org/mysql/4479A1",
  },
  {
    name: "PostgreSQL",
    category: "DATABASE",
    percentage: 80,
    icon: "https://cdn.simpleicons.org/postgresql/336791",
  },
  {
    name: "MS SQL Server",
    category: "DATABASE",
    percentage: 75,
    icon: "data:image/png;base64,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",
  },
  {
    name: "GitHub",
    category: "VERSION CONTROL",
    percentage: 90,
    icon: "https://cdn.simpleicons.org/github/181717",
  },
  {
    name: "GitLab",
    category: "VERSION CONTROL",
    percentage: 85,
    icon: "https://cdn.simpleicons.org/gitlab/FC6D26",
  },
  {
    name: "Postman",
    category: "API TOOL",
    percentage: 80,
    icon: "https://cdn.simpleicons.org/postman/FF6C37",
  },
  {
    name: "Unity",
    category: "GAME ENGINE",
    percentage: 75,
    icon: "https://cdn.simpleicons.org/unity/000000",
  },
  {
    name: "Vite",
    category: "BUILD TOOL",
    percentage: 80,
    icon: "https://cdn.simpleicons.org/vite/646CFF",
  },
];

export default function SkillsSection() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Tools & Stack
        </h1>

        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}>
              <Card className="group relative overflow-hidden border-none p-4 md:p-6 transition-all hover:shadow-lg">
                <div className="absolute inset-0 opacity-[0.03]" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="flex h-10 w-10 md:h-10 md:w-10 items-center justify-center ">
                      <img
                        src={tool.icon}
                        alt={`${tool.name} icon`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-1xl md:text-1xl lg:text-2xl font-bold tracking-tight">
                        {tool.name}
                      </h2>
                      <p className="mt-1 text-xs md:text-sm lg:text-sm font-medium uppercase tracking-wider text-muted-foreground">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                  <div className="text-1xl md:text-1xl lg:text-2xl font-bold tracking-tight">
                    {tool.percentage}%
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
