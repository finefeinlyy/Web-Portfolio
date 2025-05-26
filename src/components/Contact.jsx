"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa"

function Contact() {
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

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "rinrapas.j@gmail.com",
      link: "mailto:rinrapas.j@gmail.com",
      description: "Send me an email",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/rinrapas",
      link: "https://www.linkedin.com/in/rinrapas/",
      description: "Connect professionally",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/finefeinlyy",
      link: "https://github.com/finefeinlyy",
      description: "Check out my code",
      color: "from-gray-600 to-gray-700",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Bangkok, Thailand",
      link: null,
      description: "Based in Thailand",
      color: "from-green-500 to-green-600",
    },
  ]

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
      id="contact"
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
            className="absolute w-2 h-2 bg-[#800020] rounded-full opacity-20"
            animate={{
              x: [0, 70, 0],
              y: [0, -70, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + i * 10}%`,
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

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Header Section */}
          <div className="mb-16">
            {/* Section Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#800020]/20 rounded-full text-sm text-[#800020] mb-6"
            >
              <FaPaperPlane className="animate-pulse" />
              <span className="font-medium">Get In Touch</span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#800020] via-[#a04060] to-[#800020] bg-[length:200%_100%] animate-gradient">
                  Let's Connect
                </span>
                <br />
                <span className="text-gray-800">& Collaborate</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                I'm always interested in new opportunities, collaborations, and interesting projects. Whether you have a
                question or just want to say hi, feel free to reach out through any of the channels below!
              </p>
            </motion.div>
          </div>

          {/* Contact Methods Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactMethods.map((method, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:bg-white/90 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                initial="hidden"
                animate="visible"
                transition={{ delay: idx * 0.1 }}
              >
                {/* hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                />

                {/* ICON WRAPPER — fixed */}
                <div
                  className={`relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.color} bg-opacity-20 rounded-xl mb-4 transition-all duration-300 group-hover:bg-opacity-30`}
                >
                  {React.cloneElement(method.icon, {
                    className: "text-2xl text-white",
                  })}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#800020] transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {method.description}
                  </p>
                  {method.link ? (
                    <a
                      href={method.link}
                      target={method.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-[#800020] hover:underline font-medium break-all"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-700 font-medium">
                      {method.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-16">
            <motion.a
              href="mailto:rinrapas.j@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#800020] to-[#a04060] text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaEnvelope className="group-hover:scale-110 transition-transform duration-300" />
              Send Email
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rinrapas/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 border-2 border-[#800020] text-[#800020] font-medium rounded-xl hover:bg-[#800020] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaLinkedin className="group-hover:scale-110 transition-transform duration-300" />
              Connect on LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/finefeinlyy"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 text-gray-700 font-medium rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className="group-hover:scale-110 transition-transform duration-300" />
              View GitHub
            </motion.a>
          </motion.div>

          {/* Availability Status */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="max-w-2xl mx-auto p-8 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-gray-800">Currently Available</h3>
              </div>
              <p className="text-gray-600 mb-6">
                I'm actively looking for new opportunities in cybersecurity and open to discussing interesting projects
                or collaborations.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Open to opportunities
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Quick response time
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Remote friendly
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Based in Bangkok
                </span>
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

export default Contact
