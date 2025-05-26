"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaCar, FaShieldVirus, FaExternalLinkAlt, FaCode, FaAward, FaGlobe } from "react-icons/fa"
import { motion } from "framer-motion"

function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeFilter, setActiveFilter] = useState("all")
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsVisible(true)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const projects = [
    {
      title: "Project Restart",
      subtitle: "2nd Runner-Up",
      description:
        "Restart, a LegalTech platform designed for reintegrating ex-offenders into the workforce with job matching. Winner of 2nd Runner-Up in a national LegalTech hackathon (ChulaLegalTech Year6).",
      icon: <FaAward size={40} />,
      link: "/projects/legaltech",
      category: "legaltech",
      tags: ["LegalTech", "Job Matching", "Social Impact"],
      status: "Award Winner",
      year: "2024-2025",
    },
    {
      title: "Phish-Sim",
      subtitle: "Security Tool",
      description:
        "A phishing simulation tool that supports webpage cloning, credential capture, and custom phishing URL generation.",
      icon: <FaShieldVirus size={40} />,
      link: "https://phish-sim.onrender.com",
      category: "security",
      tags: ["Cybersecurity", "Phishing", "Security Testing"],
      status: "Live",
      year: "2025",
    },
    {
      title: "Mobile Concept",
      subtitle: "Business Website",
      description: "A professional car audio installation website designed and developed for a real-world business.",
      icon: <FaCar size={40} />,
      link: "http://mobileconcept.co.th/",
      category: "web",
      tags: ["Web Development", "Business", "Responsive"],
      status: "Live",
      year: "2025",
    },
    {
      title: "IT GRC Framework",
      subtitle: "Compliance Guide",
      description: "A website providing insights into IT Governance, Risk, and Compliance (GRC) frameworks.",
      icon: <FaShieldVirus size={40} />,
      link: "https://it-grc.vercel.app/",
      category: "security",
      tags: ["GRC", "Compliance", "IT Governance"],
      status: "Live",
      year: "2025",
    },
  ]

  const filters = [
    { id: "all", label: "All Projects", icon: FaCode },
    { id: "security", label: "Security", icon: FaShieldVirus },
    { id: "web", label: "Web Dev", icon: FaGlobe },
    { id: "legaltech", label: "LegalTech", icon: FaAward },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-[#f8f9fa] via-[#f5f5f5] to-[#e9ecef] text-gray-900 py-32 px-10 min-h-screen relative overflow-hidden font-mono"
    >
      {/* Enhanced Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(128,0,32,0.05)_25px,rgba(128,0,32,0.05)_26px,transparent_27px,transparent_99px,rgba(128,0,32,0.05)_100px),linear-gradient(rgba(128,0,32,0.05)_24px,transparent_25px,transparent_26px,rgba(128,0,32,0.05)_27px,rgba(128,0,32,0.05)_99px,transparent_100px)] bg-[length:100px_100px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#800020] rounded-full opacity-20"
            animate={{
              x: [0, 80, 0],
              y: [0, -80, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 12}%`,
              top: `${15 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Mouse Trailing Effect */}
      <motion.div
        className="absolute w-6 h-6 pointer-events-none z-20"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      >
        <div className="w-full h-full bg-[#800020] rounded-full opacity-40 blur-sm"></div>
        <div className="absolute inset-2 bg-[#800020] rounded-full"></div>
      </motion.div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Section Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#800020]/20 rounded-full text-sm text-[#800020] mb-6"
            >
              <FaCode className="animate-pulse" />
              <span className="font-medium">My Work</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#800020] via-[#a04060] to-[#800020] bg-[length:200%_100%] animate-gradient">
                Featured
              </span>
              <br />
              <span className="text-gray-800">Projects</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of cybersecurity tools, web applications, and innovative solutions I've built
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-[#800020] text-white shadow-lg"
                    : "bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/90 border border-gray-200/50"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <filter.icon size={18} />
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                variants={itemVariants}
                className="group relative bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:bg-white/90 transition-all duration-500 overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(128, 0, 32, 0.1)",
                }}
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#800020]/5 to-[#a04060]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === "Award Winner"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project Icon */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#800020]/10 to-[#a04060]/10 rounded-xl text-[#800020] group-hover:from-[#800020]/20 group-hover:to-[#a04060]/20 transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    {project.icon}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#800020] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500">({project.year})</span>
                  </div>

                  <p className="text-[#800020] font-medium mb-4">{project.subtitle}</p>

                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-[#800020]/10 group-hover:text-[#800020] transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#800020] font-semibold hover:gap-3 transition-all duration-300 group/link"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt className="group-hover/link:rotate-12 transition-transform duration-300" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="max-w-2xl mx-auto p-8 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in collaborating?</h3>
              <p className="text-gray-600 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-[#800020] to-[#a04060] text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/contact")}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default Projects
