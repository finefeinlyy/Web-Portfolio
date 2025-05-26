"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaCode, FaTools, FaLanguage, FaRobot, FaShieldAlt, FaChartLine, FaStar, FaGraduationCap } from "react-icons/fa"

function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeCategory, setActiveCategory] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

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

  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Intermediate", color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: "Beginner", color: "from-yellow-500 to-yellow-600" },
        { name: "HTML/CSS", level: "Intermediate", color: "from-orange-500 to-red-500" },
        { name: "C/C#", level: "Intermediate", color: "from-purple-500 to-purple-600" },
        { name: "SQL", level: "Intermediate", color: "from-green-500 to-green-600" },
        { name: "Bash", level: "Intermediate", color: "from-gray-500 to-gray-600" },
      ],
      icon: <FaCode className="text-2xl" />,
      description: "Core programming languages for development and automation",
    },
    {
      title: "Cybersecurity Tools",
      skills: [
        { name: "Nmap", level: "Intermediate", color: "from-red-500 to-red-600" },
        { name: "Wireshark", level: "Intermediate", color: "from-blue-500 to-blue-600" },
        { name: "Burp Suite", level: "Intermediate", color: "from-orange-500 to-orange-600" },
        { name: "Metasploit", level: "Beginner", color: "from-purple-500 to-purple-600" },
        { name: "John the Ripper", level: "Beginner", color: "from-green-500 to-green-600" },
        { name: "OSINT Tools", level: "Intermediate", color: "from-indigo-500 to-indigo-600" },
      ],
      icon: <FaTools className="text-2xl" />,
      description: "Professional security testing and analysis tools",
    },
    {
      title: "Security Concepts",
      skills: [
        { name: "Offensive Security", level: "Intermediate", color: "from-red-500 to-red-600" },
        { name: "OSINT", level: "Intermediate", color: "from-blue-500 to-blue-600" },
        { name: "AI Security", level: "Beginner", color: "from-purple-500 to-purple-600" },
        { name: "Threat Intelligence", level: "Beginner", color: "from-orange-500 to-orange-600" },
        { name: "Malware Analysis", level: "Beginner", color: "from-green-500 to-green-600" },
        { name: "Network Security", level: "Intermediate", color: "from-indigo-500 to-indigo-600" },
        { name: "Vulnerability Assessment", level: "Intermediate", color: "from-yellow-500 to-yellow-600" },
      ],
      icon: <FaShieldAlt className="text-2xl" />,
      description: "Advanced cybersecurity methodologies and frameworks",
    },
    {
      title: "Languages",
      skills: [
        { name: "Thai", level: "Native", color: "from-blue-500 to-blue-600" },
        { name: "English", level: "Fluent", color: "from-green-500 to-green-600" },
        { name: "Korean", level: "Fair", color: "from-red-500 to-red-600" },
      ],
      icon: <FaLanguage className="text-2xl" />,
      description: "Multilingual communication capabilities",
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "Prompt Engineering", level: "Advanced", color: "from-purple-500 to-purple-600" },
        { name: "AI-Enhanced Workflow", level: "Intermediate", color: "from-blue-500 to-blue-600" },
        { name: "Generative AI", level: "Intermediate", color: "from-green-500 to-green-600" },
        { name: "Machine Learning", level: "Beginner", color: "from-orange-500 to-orange-600" },
      ],
      icon: <FaRobot className="text-2xl" />,
      description: "Cutting-edge AI technologies and automation",
    },
  ]

  const getLevelStyle = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-green-100 text-green-800 border-green-200"
      case "Intermediate":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Beginner":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Native":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Fluent":
        return "bg-green-100 text-green-800 border-green-200"
      case "Fair":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

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
      id="skills"
      className="bg-gradient-to-br from-[#f8f9fa] via-[#f5f5f5] to-[#e9ecef] text-gray-900 py-32 px-6 relative overflow-hidden font-mono"
    >
      {/* Enhanced Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(128,0,32,0.05)_25px,rgba(128,0,32,0.05)_26px,transparent_27px,transparent_99px,rgba(128,0,32,0.05)_100px),linear-gradient(rgba(128,0,32,0.05)_24px,transparent_25px,transparent_26px,rgba(128,0,32,0.05)_27px,rgba(128,0,32,0.05)_99px,transparent_100px)] bg-[length:100px_100px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#800020] rounded-full opacity-30"
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            style={{
              left: `${10 + i * 11}%`,
              top: `${20 + i * 8}%`,
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
              <FaGraduationCap className="animate-pulse" />
              <span className="font-medium">Technical Expertise</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#800020] via-[#a04060] to-[#800020] bg-[length:200%_100%] animate-gradient">
                Skills &
              </span>
              <br />
              <span className="text-gray-800">Expertise</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills, tools, and expertise across cybersecurity and development
            </motion.p>
          </div>

          {/* Category Navigation */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-[#800020] text-white shadow-lg"
                    : "bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/90 border border-gray-200/50"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={activeCategory === index ? "text-white" : "text-[#800020]"}>{category.icon}</span>
                {category.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Active Category Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-[#800020]/10 to-[#a04060]/10 rounded-lg text-[#800020]">
                  {categories[activeCategory].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{categories[activeCategory].title}</h3>
                  <p className="text-gray-600">{categories[activeCategory].description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-2">{skill.name}</h4>
                        <span
                          className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getLevelStyle(skill.level)}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color} ml-3 group-hover:scale-125 transition-transform duration-300`}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Overview Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <FaCode />,
                title: "Programming",
                count: "8+",
                description: "Languages & Frameworks",
              },
              {
                icon: <FaShieldAlt />,
                title: "Security Tools",
                count: "15+",
                description: "Professional Tools",
              },
              {
                icon: <FaChartLine />,
                title: "Experience",
                count: "2+",
                description: "Years Learning",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#800020]/10 to-[#a04060]/10 rounded-xl text-[#800020] text-2xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#800020] mb-2">{stat.count}</div>
                <div className="font-semibold text-gray-800 mb-1">{stat.title}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications & Learning */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="max-w-3xl mx-auto p-8 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaStar className="text-[#800020]" />
                <h3 className="text-2xl font-bold text-gray-800">Continuous Learning</h3>
                <FaStar className="text-[#800020]" />
              </div>
              <p className="text-gray-600 mb-6">
                Currently pursuing cybersecurity certifications and expanding knowledge in AI security, ethical hacking,
                and advanced penetration testing techniques.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["CEH (Planned)", "Security+ (Planned)", "CC (Planned)", "AI Security", "Ethical Hacking Essentials (EHE)"].map((cert, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-[#800020]/10 to-[#a04060]/10 text-[#800020] rounded-full text-sm font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
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

export default Skills
