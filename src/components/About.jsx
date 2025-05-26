"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaShieldAlt, FaNetworkWired, FaUserSecret, FaCode, FaGraduationCap, FaBrain, FaMask } from "react-icons/fa"

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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

  const keywords = [
    "cybersecurity",
    "penetration testing",
    "vulnerabilities",
    "secure systems",
    "resilient infrastructures",
    "osint",
    "ai security",
    "offensive security",
    "ethical hacking",
    "threat intelligence",
  ]

  const highlightKeywords = (text) => {
    const regex = new RegExp(`(${keywords.join("|")})`, "gi")
    return text.split(regex).map((part, i) => {
      if (keywords.includes(part.toLowerCase())) {
        return (
          <motion.span
            key={i}
            className="relative text-[#800020] font-semibold cursor-pointer group"
            whileHover={{ scale: 1.05 }}
          >
            {part}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#800020] to-[#a04060]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>
        )
      }
      return part
    })
  }

  const skillCategories = [
    {
      icon: FaShieldAlt,
      title: "Cybersecurity",
      description: "Defensive & Offensive Security",
    },
    {
      icon: FaUserSecret,
      title: "OSINT",
      description: "Intelligence Gathering",
    },
    {
      icon: FaCode,
      title: "Penetration Testing",
      description: "Vulnerability Assessment",
    },
    {
      icon: FaBrain,
      title: "AI Security",
      description: "ML Model Protection",
    },
    {
      icon: FaNetworkWired,
      title: "Infrastructure",
      description: "Resilient Systems",
    },
    {
      icon: FaMask,
      title: "Threat Intelligence",
      description: "Risk Analysis",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
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
      id="about"
      className="relative bg-gradient-to-br from-[#f8f9fa] via-[#f5f5f5] to-[#e9ecef] text-gray-800 py-32 overflow-hidden font-mono min-h-screen flex items-center"
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
            className="absolute w-1 h-1 bg-[#800020] rounded-full opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            style={{
              left: `${15 + i * 10}%`,
              top: `${10 + i * 8}%`,
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

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Section Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#800020]/20 rounded-full text-sm text-[#800020]"
            >
              <FaUserSecret className="animate-pulse" />
              <span className="font-medium">About Me</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-left leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#800020] via-[#a04060] to-[#800020] bg-[length:200%_100%] animate-gradient">
                Cybersecurity
              </span>
              <br />
              <span className="text-gray-800">Enthusiast</span>
            </motion.h2>

            {/* Content Paragraphs */}
            <div className="space-y-6">
              {[
                "I am a cybersecurity enthusiast passionate about offensive security, Open Source Intelligence (OSINT), and the security of artificial intelligence systems. I'm especially interested in how to uncover vulnerabilities and perform ethical hacking to help organizations strengthen their digital defenses.",
                "I am currently entering my third year as an Information Technology for Business student in the Department of Statistics at Chulalongkorn Business School.",
                "My current focus is on developing practical skills in penetration testing, threat intelligence gathering, and securing AI models against adversarial attacks.",
                "I aim to become a specialist in both offensive security and AI security, leveraging my technical and analytical skills to support organizations in building resilient and secure infrastructures.",
              ].map((text, index) => (
                <motion.p key={index} variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
                  {highlightKeywords(text)}
                </motion.p>
              ))}
            </div>

            {/* Education Badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg"
            >
              <FaGraduationCap className="text-[#800020] text-2xl" />
              <div>
                <div className="font-semibold text-gray-800">Chulalongkorn Business School</div>
                <div className="text-sm text-gray-600">IT for Business • Year 3</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills Grid */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Areas of Interest</h3>

            <div className="grid grid-cols-2 gap-4">
              {skillCategories.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group p-6 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:bg-white/90 transition-all duration-300 cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(128, 0, 32, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-gradient-to-r from-[#800020]/10 to-[#a04060]/10 rounded-lg group-hover:from-[#800020]/20 group-hover:to-[#a04060]/20 transition-all duration-300">
                      <skill.icon className="text-[#800020] text-2xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-[#800020] transition-colors duration-300">
                        {skill.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: "Focus Areas", value: "6+" },
                { label: "Study Year", value: "3rd" },
                { label: "Passion", value: "100%" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50"
                >
                  <div className="text-2xl font-bold text-[#800020]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
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

export default About
