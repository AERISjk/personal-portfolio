"use client"
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiHtml5, SiCss3, SiJavascript,
  SiNestjs, SiDjango,
  SiMysql, SiPostgresql,
  SiGithub, SiGitlab,
  SiFigma, SiPostman, SiUnity, SiVite, SiMui
} from 'react-icons/si'
import LogoLoop from './ui/TextAnimation/Animation'

const techLogos = [
  // Front-end
  { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiMui />, title: "MUI", href: "https://mui.com" },

  // Backend
  { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },

  // Databases
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },

  // Version Control
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiGitlab />, title: "GitLab", href: "https://gitlab.com" },

  // Design / Tools
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiUnity />, title: "Unity", href: "https://unity.com" },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
]

export const LogoSkillLoopAnimation = () => {
  return (
    <div 
      style={{ height: '100px', position: 'relative', overflow: 'hidden', backgroundColor: 'white', paddingTop: '16px' }}
    >
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={54}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  )
}
