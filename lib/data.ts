import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import dedundesk from "@/public/dedundesk.jpeg";
import advAise from "@/public/advAise.jpeg";
import posters from "@/public/posters.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Lossfilter - Software Developer Intern",
    location: "Bangalore, India",
    description:
      "Developed multiple user flows for the company website using Next.js, ensuring smooth user experiences and timely delivery. Collaborated with backend engineers to integrate APIs via Swagger,maintaining efficient communication. Gained proficiency in Bitbucket for managing repositories, workflows, and pull requests.",
    icon: React.createElement(CgWorkAlt),
    date: "2024(AUG-SEP)",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Dedundesk",
    description:
      "Built a full-stack financial management application using Next.js, leveraging API Routes and ServerActions for robust backend services.",
    tags: ["Next.js", "Clerk", "TailwindCSS", "PrismaORM", "PostgreSQL", "Shadcn UI", "Recharts"],
    imageUrl: dedundesk,
    link: "https://dedundesk.vercel.app/",
  },
  {
    title: "advAise- consultancy portfolio",
    description:
      "Corporate consultancy portfolio featuring the company’s branding, logomark, and key services in a clean, professional layout.",
    tags: ["Adobe Photoshop", "Adobe Illustrator"],
    imageUrl: advAise,
    link: "https://www.behance.net/gallery/225291561/advAIse-consultancies-portfolio",
  },
  {
    title: "Poster works",
    description:
      "Some artworks I created for Contests and Prints.",
    tags: ["Adobe Photoshop", "Adobe Illustrator"],
    imageUrl: posters,
    link: "https://www.behance.net/gallery/225290949/Random-Posters",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JAVA",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Bootstrap",
  "React Query",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Photoshop",
  "Illustrator"

] as const;