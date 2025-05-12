"use client";
import { useState, useEffect } from "react"
import React from "react";
import Particles from "./components/Particles/Particles";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import FallingText from "./components/FallingText/FallingText";
import Folder from "./components/Folder/Folder";
import CircularGallery from "./components/CircularGallery/CircularGallery";
import Mansory from "./components/Masonry/Masonry";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Linkedin, Mail } from "lucide-react"
import Masonry from "./components/Masonry/Masonry";

// import { useState } from "react";

// Project data
const projects = [
  {
    image: "/images/project1.jpg",
    title: "Interactive Web Application",
    description: "A responsive web app built with React and Next.js",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "https://example.com/project1",
  },
  {
    image: "/images/project2.jpg",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    tags: ["TypeScript", "Node.js", "MongoDB"],
    link: "https://example.com/project2",
  },
  {
    image: "/images/project3.jpg",
    title: "AI-Powered Dashboard",
    description: "Data visualization dashboard with AI insights",
    tags: ["Python", "React", "D3.js"],
    link: "https://example.com/project3",
  },
  {
    image: "/images/project4.jpg",
    title: "Mobile Application",
    description: "Cross-platform mobile app for productivity",
    tags: ["React Native", "Firebase", "Redux"],
    link: "https://example.com/project4",
  },
]

// Skill categories
const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C/C++", "Java", "SQL"],
    icon: "💻",
  },
  {
    title: "Web Development",
    skills: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "REST API", "OGL (WebGL)"],
    icon: "🌐",
  },
  {
    title: "UI/UX & Design Tools",
    skills: ["Figma", "Canva", "Responsive Design", "CSS Animation", "Custom Shader UI"],
    icon: "🎨",
  },
  {
    title: "Tools & DevOps",
    skills: ["Git & GitHub", "VS Code", "npm / yarn", "Vite", "Postman"],
    icon: "🛠️",
  },
  {
    title: "Computer Science Concepts",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Networking Basics",
      "Database Design",
      "Artificial Intelligence",
    ],
    icon: "🧠",
  },
  {
    title: "Office & Productivity",
    skills: ["Microsoft Excel", "Word", "PowerPoint", "Google Workspace"],
    icon: "📊",
  },
]

// Certificate/Gallery data
const certificateData = [
  { id: 1, image: "/images/cert1.jpg", title: "Web Development Certification", height: 400 },
  { id: 2, image: "/images/cert2.jpg", title: "JavaScript Advanced Course", height: 300 },
  { id: 3, image: "/images/cert3.jpg", title: "React Framework Mastery", height: 300 },
  { id: 4, image: "/images/cert4.jpg", title: "UI/UX Design Principles", height: 300 },
  { id: 5, image: "/images/cert5.jpg", title: "Python Programming", height: 300 },
  { id: 6, image: "/images/cert6.jpg", title: "Data Structures & Algorithms", height: 300 },
  { id: 7, image: "/images/cert7.jpg", title: "Mobile App Development", height: 200 },
  { id: 8, image: "/images/cert8.jpg", title: "Cloud Computing Essentials", height: 300 },
  { id: 9, image: "/images/cert9.jpg", title: "Database Management", height: 200 },
  { id: 10, image: "/images/cert10.jpg", title: "Machine Learning Fundamentals", height: 400 },
]

// Navigation items
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Skills", href: "#skills" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

// Gallery images
const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Intersection observer for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black-900 to-black-800 text-white overflow-hidden">
      {/* Particles Background */}
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Particles
          className="absolute inset-0 particles-container"
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={isMobile ? 100 : 200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={isMobile ? 50 : 100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-2">
        <div className="w-full max-w-7xl">
          {isMobile ? (
            <MobileNav items={navItems} activeSection={activeSection} setActiveSection={setActiveSection} />
          ) : (
            <GooeyNav
              items={navItems}
              animationTime={600}
              particleCount={15}
              particleDistances={[42, 20]}
              particleR={75}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              timeVariance={300}
              onItemClick={(item) => {
                const section = item.href.substring(1)
                setActiveSection(section)
                document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
              }}
            />
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 pb-20">
          <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
            <div className="w-full flex flex-col items-center justify-center">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

              <div className="mt-8 md:mt-16 z-10">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={true}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-6">
                    Muhammad Irsan
                  </h1>
                  <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-2">
                      <h2 className="text-xl md:text-2xl text-white font-medium">I'm a</h2>
                      <RotatingText
                        texts={["Tech Generalist", "Fast Learner", "Flexible Developer", "IT All-Rounder"]}
                        mainClassName="px-3 md:px-4 bg-cyan-300 text-black overflow-hidden py-1 md:py-2 justify-center rounded-lg font-bold text-xl md:text-2xl"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="rotating-text-line"
                        transition={{
                          type: "spring",
                          damping: 30,
                          stiffness: 400,
                        }}
                        rotationInterval={2000}
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center mt-8">
                    <motion.a
                      href="#contact"
                      className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Me
                    </motion.a>
                    <motion.a
                      href="#projects"
                      className="px-6 py-3 bg-transparent border border-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Projects
                    </motion.a>
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
              <a href="#about" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
                <span className="text-sm mb-2">Scroll Down</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 5V19M12 19L5 12M12 19L19 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20 relative z-50 overflow-visible">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <SectionTitle title="About Me" />

            <div className="mt-16 md:mt-24">
              <FallingText
                text={`I'm an Informatics student with a strong passion for technology and problem-solving. My interests and skills span across multiple IT domains, including web development, artificial-intelligence, networking, and office software proficiency. I enjoy learning new technologies and continuously improving my capabilities to adapt in various environments. With a solid foundation and a flexible mindset, I aim to contribute to innovative projects and grow in the dynamic world of information technology.`}
                highlightWords={[
                  "Informatics",
                  "problem-solving",
                  "multiple",
                  "including",
                  "artificial-intelligence",
                  "technologies",
                  "networking",
                  "innovative",
                  "world",
                ]}
                fontSize={isMobile ? "1.25rem" : "2rem"}
                gravity={0.56}
                mouseConstraintStiffness={0.9}
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
              />
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-xl"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Education</h3>
                <ul className="space-y-4">
                  <li className="border-l-2 border-cyan-500 pl-4 py-2">
                    <p className="text-lg font-semibold">Bachelor of Informatics</p>
                    <p className="text-gray-300">University of Technology</p>
                    <p className="text-sm text-gray-400">2020 - Present</p>
                  </li>
                  <li className="border-l-2 border-cyan-500 pl-4 py-2">
                    <p className="text-lg font-semibold">High School Diploma</p>
                    <p className="text-gray-300">Science High School</p>
                    <p className="text-sm text-gray-400">2017 - 2020</p>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-xl"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Experience</h3>
                <ul className="space-y-4">
                  <li className="border-l-2 border-cyan-500 pl-4 py-2">
                    <p className="text-lg font-semibold">Web Developer Intern</p>
                    <p className="text-gray-300">Tech Solutions Inc.</p>
                    <p className="text-sm text-gray-400">June 2023 - August 2023</p>
                  </li>
                  <li className="border-l-2 border-cyan-500 pl-4 py-2">
                    <p className="text-lg font-semibold">Student Assistant</p>
                    <p className="text-gray-300">University IT Department</p>
                    <p className="text-sm text-gray-400">2021 - Present</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <SectionTitle title="My Projects" />

            <motion.div
              className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="min-h-screen py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <SectionTitle title="Certificates" />

            <div className="mt-16">
              <Masonry data={certificateData} />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <SectionTitle title="My Skills" />

            <motion.div
              className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {skillCategories.map((category, index) => (
                <SkillCard key={index} category={category} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="min-h-screen py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <SectionTitle title="Gallery" />

            <div className="mt-16 flex items-center justify-center">
              <div className="w-full max-w-5xl">
                <CircularGallery images={galleryImages} />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <SectionTitle title="Contact Me" />

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                className="space-y-6"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-2xl font-bold">Get In Touch</h3>
                <p className="text-gray-300 max-w-md">
                  Got a project, opportunity, or just want to say hi? I'd love to hear from you. Feel free to reach out
                  through the form or my social links.
                </p>

                <div className="space-y-4 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-cyan-500/20 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a
                        href="mailto:irsan.dev@example.com"
                        className="text-white hover:text-cyan-300 transition-colors"
                      >
                        irsan.dev@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-cyan-500/20 p-3 rounded-full">
                      <Linkedin className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/muhammadirsan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-cyan-300 transition-colors"
                      >
                        linkedin.com/in/muhammadirsan
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-cyan-500/20 p-3 rounded-full">
                      <Github className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <a
                        href="https://github.com/irsan-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-cyan-300 transition-colors"
                      >
                        github.com/irsan-dev
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      alert("Message sent successfully! (Not connected to backend yet)")
                      setName("")
                      setEmail("")
                      setMessage("")
                    }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-xl space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your message"
                        className="w-full p-3 h-32 rounded-lg bg-white/10 border border-gray-600 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none resize-none"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </SpotlightCard>
              </motion.div>
            </div>
          </div>

          <div className="mt-20">
            <ScrollVelocity
              texts={["Muhammad Irsan", "Portfolio"]}
              velocity={0.5}
              className="text-4xl font-bold text-white/10"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Muhammad Irsan. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/irsan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/muhammadirsan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:irsan.dev@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for section titles
function SectionTitle({ title }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold relative">
        {title}
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-cyan-500 rounded-full"></span>
      </h2>
    </div>
  )
}

// Project card component
function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
          },
        },
      }}
      className="group"
    >
      <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image || `/placeholder.svg?height=400&width=600`}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags?.map((tag, i) => (
                    <span key={i} className="text-xs bg-cyan-500/80 px-2 py-1 rounded-full text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View Project
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

// Skill card component
function SkillCard({ category, index }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
          },
        },
      }}
    >
      <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-xl h-full transition-transform duration-300 hover:transform hover:scale-[1.02]">
          <div className="text-3xl mb-4">{category.icon}</div>
          <h3 className="text-xl font-bold mb-4 text-cyan-300">{category.title}</h3>
          <ul className="space-y-2 text-gray-300">
            {category.skills.map((skill, i) => (
              <li key={i} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

// Mobile navigation component
function MobileNav({ items, activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-md bg-white/10 backdrop-blur-sm"
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
        >
          <path
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-12 right-0 w-48 py-2 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl z-50"
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`block px-4 py-2 text-sm ${
                activeSection === item.href.substring(1)
                  ? "text-cyan-400 font-medium"
                  : "text-gray-200 hover:text-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                const section = item.href.substring(1)
                setActiveSection(section)
                document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
                setIsOpen(false)
              }}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  )
}
