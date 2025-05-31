"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  I’m currently a final-year student at{" "}
  <span className="font-medium">Motilal Nehru National Institute of Technology, Prayagraj</span>. 
  I've always been fascinated by the world of programming.{" "}
  <span className="italic">My favorite part of programming</span> is the creative process—building solutions, 
  exploring new ideas, and discovering better ways to solve problems. I’m passionate about how{" "}
  <span className="font-medium">development can simplify life</span> and open doors to innovation.
  I enjoy working with technologies like{" "}
  <span className="font-medium">React, Next.js, PostgreSQL, and MongoDB</span>, 
  and I’m always eager to explore new tools and frameworks that expand my skill set.
</p>

<p className="mb-3">
  Outside of coding, I have a deep passion for{" "}
  <span className="font-medium">graphic design</span>. I've worked on numerous projects—
  both personal and commercial—using tools like{" "}
  <span className="font-medium">Photoshop</span> and{" "}
  <span className="font-medium">Illustrator</span>. 
  Freelancing has helped me grow creatively and collaborate effectively.
</p>

<p>
  <span className="italic">When I'm not working</span>, you can find me playing video games, 
  watching movies, or reading{" "}
  <span className="font-medium">comic books</span>. 
  I love staying curious and exploring new subjects.
  
</p>

    </motion.section>
  );
}