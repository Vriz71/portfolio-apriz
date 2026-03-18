"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "./components/nav";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [imageIndex, setImageIndex] = useState<{ [key: string]: number }>({})
  const nextImage = (key: string, total: number) => setImageIndex(prev => ({ ...prev, [key]: ((prev[key] ?? 0) + 1) % total }))
  const prevImage = (key: string, total: number) => setImageIndex(prev => ({ ...prev, [key]: ((prev[key] ?? 0) - 1 + total) % total }))

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = {
    web: [
      {
        title: "School Profile Website",
        desc: "Responsive website built with Next.js & Tailwind.",
        images: ["/projects/beranda.jpeg"],
        link: "https://ra-raihan.online",
      },
    ],
    uix: [
      {
        title: "Nutriscan",
        desc: "Food nutrition scanner with AR preview and dietary insights.",
        images: ["/projects/nutriscan.png"],
        link: "https://bit.ly/UINutriscan",
      },
    ],
    srs: [
      {
        title: "Student Complaint Management System Design",
        desc: "Created UML & SRS documentation for school system.",
        images: ["/projects/dfd.png", "/projects/erd.png"],
        link: "/",
      },
    ],
  };

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 px-6 md:px-20 flex flex-col">

        {/*  ABOUT  */}
        <motion.section
          id="about"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="min-h-screen flex items-center py-36 md:py-0 lg:px-4"
        >
          <div className="w-full grid md:grid-cols-2 gap-12 items-center">

            <div className="flex flex-col gap-3">

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold flex flex-wrap overflow-hidden">
                {"Welcome.".split("").map((char, index) => {
                  const directions = [
                    { x: -60, y: 0 },
                    { x: 60, y: 0 },
                    { x: 0, y: -60 },
                    { x: 0, y: 60 },
                  ];
                  const random = directions[index % directions.length];

                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, x: random.x, y: random.y, rotate: 10 }}
                      animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </h2>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-lg font-semibold leading-relaxed max-w-xl"
              >
                Hi, I&apos;m Aprizal, a <span className="text-blue-500 dark:text-blue-400">System Analyst</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-base md:text-lg font-medium leading-relaxed max-w-xl"
              >
                I transform ideas into structured requirements, intuitive designs, and scalable systems by connecting analysis, UI/UX, and development into one cohesive process.
              </motion.p>

              <Link href="#projects" className="w-fit mt-4 p-[1.5px] rounded-lg bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 hover:scale-105 transition-all duration-300">
                <span className="block px-6 py-3 rounded-lg bg-white dark:bg-black font-semibold">
                  See More
                </span>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex justify-center md:justify-end"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <img src="/pp.jpeg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/*  PROJECTS  */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="min-h-screen flex flex-col justify-center py-20"
        >
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Projects
            </h2>

            <p className="text-base md:text-lg opacity-70 max-w-2xl mx-auto mb-16">
              Selected works across development, design, and system analysis.
            </p>

            <div className="space-y-20 text-left">

              {/* WEB */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                  Web Development
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.web.map((project, i) => {
                    const key = `web-${i}`
                    const idx = imageIndex[key] ?? 0

                    return (
                      <div key={i} className="group rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 p-[1.5px]">

                        <div className="rounded-xl overflow-hidden bg-white dark:bg-neutral-900 transition-all duration-300">

                          {/* IMAGE */}
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src={project.images[idx]}
                              alt={project.title}
                              className="w-full h-full object-contain"
                            />

                            {project.images.length > 1 && (
                              <>
                                {/* LEFT ARROW */}
                                <div
                                  onClick={() => prevImage(key, project.images.length)}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-red-500 p-3"
                                >
                                  LEFT
                                </div>

                                {/* RIGHT ARROW */}
                                <div
                                  onClick={() => nextImage(key, project.images.length)}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-blue-500 p-3"
                                >
                                  RIGHT
                                </div>
                              </>
                            )}
                          </div>

                          {/* CONTENT */}
                          <div className="p-4">
                            <h4 className="font-semibold text-sm md:text-base mb-1">
                              {project.title}
                            </h4>

                            <p className="text-xs opacity-70 mb-3">
                              {project.desc}
                            </p>

                            <Link
                              href={project.link}
                              target="_blank"
                              className="text-sm font-semibold text-emerald-500 hover:underline"
                            >
                              View Project
                            </Link>
                          </div>

                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* UIX */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                  UI/UX Design
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.uix.map((project, i) => {
                    const key = `uix-${i}`
                    const idx = imageIndex[key] ?? 0

                    return (
                      <div key={i} className="group rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 p-[1.5px]">

                        <div className="rounded-xl overflow-hidden bg-white dark:bg-neutral-900 transition-all duration-300">

                          {/* IMAGE */}
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src={project.images[idx]}
                              alt={project.title}
                              className="w-full h-full object-contain"
                            />

                            {project.images.length > 1 && (
                              <>
                                {/* LEFT ARROW */}
                                <div
                                  onClick={() => prevImage(key, project.images.length)}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-1"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                                  </svg>
                                </div>

                                {/* RIGHT ARROW */}
                                <div
                                  onClick={() => nextImage(key, project.images.length)}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-1"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              </>
                            )}
                          </div>

                          {/* CONTENT */}
                          <div className="p-4">
                            <h4 className="font-semibold text-sm md:text-base mb-1">
                              {project.title}
                            </h4>

                            <p className="text-xs opacity-70 mb-3">
                              {project.desc}
                            </p>

                            <Link
                              href={project.link}
                              target="_blank"
                              className="text-sm font-semibold text-emerald-500 hover:underline"
                            >
                              View Project
                            </Link>
                          </div>

                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* SRS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                  System Design
                </h3>

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.srs.map((project, i) => {
                    const key = `srs-${i}`
                    const idx = imageIndex[key] ?? 0

                    return (
                      <div key={i} className="group rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 p-[1.5px]">

                        <div className="rounded-xl overflow-hidden bg-white dark:bg-neutral-900 transition-all duration-300">

                          {/* IMAGE */}
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src={project.images[idx]}
                              alt={project.title}
                              className="w-full h-full object-contain"
                            />

                            {project.images.length > 1 && (
                              <>
                                {/* LEFT ARROW */}
                                <div
                                  onClick={() => prevImage(key, project.images.length)}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-1"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                                  </svg>
                                </div>

                                {/* RIGHT ARROW */}
                                <div
                                  onClick={() => nextImage(key, project.images.length)}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-1"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              </>
                            )}
                          </div>

                          {/* CONTENT */}
                          <div className="p-4">
                            <h4 className="font-semibold text-sm md:text-base mb-1">
                              {project.title}
                            </h4>

                            <p className="text-xs opacity-70 mb-3">
                              {project.desc}
                            </p>

                            <Link
                              href={project.link}
                              target="_blank"
                              className="text-sm font-semibold text-emerald-500 hover:underline"
                            >
                              View Project
                            </Link>
                          </div>

                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="min-h-screen flex flex-col justify-center py-20"
        >
          <div className="max-w-6xl mx-auto px-6 text-center">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & Certifications
            </h2>
            <p className="text-base md:text-lg opacity-70 max-w-2xl mx-auto mb-16">
              My technical capabilities and professional certifications across development,
              design, and system analysis.
            </p>

            <div className="space-y-20 text-left">

              {/* SKILLS */}
              <div className="space-y-16">

                {[
                  {
                    title: "Web Development",
                    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST API"],
                  },
                  {
                    title: "UI/UX Design",
                    skills: ["Figma", "Wireframing", "Prototyping", "Design System", "User Research"],
                  },
                  {
                    title: "System Analysis",
                    skills: ["SRS Documentation", "UML Diagram", "ERD"],
                  },
                  {
                    title: "SDLC",
                    skills: ["Agile", "Scrum", "Waterfall", "Requirement Analysis", "Testing & QA"],
                  },
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                      {category.title}
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="group rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 p-[1.5px]"
                        >
                          <div className="min-h-[80px] flex items-center justify-center h-full w-full rounded-xl bg-white dark:bg-neutral-900 px-4 py-5 text-center font-medium transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-teal-400 group-hover:to-blue-500 group-hover:text-white break-words whitespace-normal text-sm md:text-base leading-snug">
                            {skill}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}

              </div>

              {/* CERTIFICATIONS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                  Certifications
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Dasar Data Science",
                      issuer: "Dicoding Indonesia",
                      image: "/serti1.png",
                    },
                    {
                      title: "Dasar Pemrograman Web",
                      issuer: "Dicoding Indonesia",
                      image: "/serti2.png",
                    },
                    {
                      title: "Product Management - Market Fit",
                      issuer: "MySkill",
                      image: "/serti3.png",
                    },
                    {
                      title: "Introduction Product Management",
                      issuer: "MySkill",
                      image: "/serti4.png",
                    },
                    {
                      title: "French Class",
                      issuer: "I Am Polyglot",
                      image: "/serti5.png",
                    },
                     {
                      title: "Intro Data Analytics",
                      issuer: "RevoU",
                      image: "/serti6.png",
                    },
                  ].map((cert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.07 }}
                      className="group rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 p-[1.5px]"
                    >
                      <div className="rounded-xl overflow-hidden bg-white dark:bg-neutral-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-teal-400 group-hover:to-blue-500 group-hover:text-white">

                        <div className="h-36 overflow-hidden">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <h4 className="font-semibold text-sm md:text-base leading-snug mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-xs opacity-70 group-hover:opacity-90">
                            {cert.issuer}
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="min-h-[85vh] flex flex-col justify-center py-20"
        >
          <div className="max-w-3xl mx-auto px-6 text-center">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let’s Work Together
            </h2>

            <p className="text-base md:text-lg opacity-70 mb-10">
              I'm open to collaboration, freelance projects, or full-time opportunities.
              Let’s build something impactful together.
            </p>

            <Link
              href="https://wa.me/6285779411644"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-12 rounded-lg bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              Contact Me on WhatsApp
            </Link>

            {/* Social Links */}
            <div className="flex justify-center gap-6 text-sm md:text-base font-medium">
              <Link
                href="https://linkedin.com/in/aprizal-safarudin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 transition-colors"
              >
                LinkedIn
              </Link>

              <Link
                href="https://github.com/Vriz71"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 transition-colors"
              >
                GitHub
              </Link>

              <Link
                href="mailto:aprizalsafar10@gmail.com"
                className="hover:text-emerald-500 transition-colors"
              >
                Email
              </Link>
            </div>

          </div>
        </motion.section>

        <footer className="border-t border-current/10 py-6">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm opacity-60">
            © {new Date().getFullYear()} Aprizal. All rights reserved.
          </div>
        </footer>

      </main>

      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-black text-white dark:bg-white dark:text-black px-3 py-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
}
