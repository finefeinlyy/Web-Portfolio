"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaFile, FaGithub, FaLinkedin, FaCode, FaShieldAlt } from "react-icons/fa"

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsLoaded(true)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-start text-left px-10 md:px-20 bg-gradient-to-br from-[#f8f9fa] via-[#f5f5f5] to-[#e9ecef] text-gray-800 font-mono overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(128,0,32,0.03)_25px,rgba(128,0,32,0.03)_26px,transparent_27px,transparent_99px,rgba(128,0,32,0.03)_100px),linear-gradient(rgba(128,0,32,0.03)_24px,transparent_25px,transparent_26px,rgba(128,0,32,0.03)_27px,rgba(128,0,32,0.03)_99px,transparent_100px)] bg-[length:100px_100px]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#800020] rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 15}%`,
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
        <div className="w-full h-full bg-[#800020] rounded-full opacity-60 blur-sm"></div>
        <div className="absolute inset-1 bg-[#800020] rounded-full"></div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="relative z-10 max-w-4xl"
      >
        {/* Greeting Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#800020]/20 rounded-full text-sm text-[#800020] mb-6 shadow-lg"
        >
          <div className="w-2 h-2 bg-[#800020] rounded-full animate-pulse"></div>
          Available for opportunities
        </motion.div>

        {/* Enhanced Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#800020] via-[#a04060] to-[#800020] bg-[length:200%_100%] animate-gradient">
              Hi, I'm
            </span>
            <br />
            <span className="text-gray-800 relative">
              Rinrapas
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#800020] to-[#a04060]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center gap-3 text-xl md:text-2xl font-light text-gray-600 mb-2">
            <FaShieldAlt className="text-[#800020]" />
            <span>Cybersecurity Enthusiast</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-500">
            <FaCode className="text-[#800020]" />
            <span>IT for Business Student</span>
          </div>
        </motion.div>

        {/* Enhanced Call-to-Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
          <motion.div
            className="group relative overflow-hidden border-2 border-gray-800 px-8 py-3 rounded-xl text-gray-800 hover:text-white transition-all duration-500 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-[#a04060] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <Link to="/projects" className="relative z-10 font-medium">
              View Projects
            </Link>
          </motion.div>

          <motion.a
            href="/Rinrapas_Resume_May25 copy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden flex items-center gap-3 border-2 border-[#800020] px-8 py-3 rounded-xl text-[#800020] hover:text-white transition-all duration-500"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-[#a04060] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <FaFile size={18} className="relative z-10" />
            <span className="relative z-10 font-medium">Download CV</span>
          </motion.a>
        </motion.div>

      </motion.div>

      {/* Enhanced Social Links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-10 flex flex-col gap-4"
      >
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-[#800020] mx-auto"></div>
        {[
          { icon: FaGithub, href: "https://github.com/finefeinlyy", label: "GitHub" },
          { icon: FaLinkedin, href: "https://www.linkedin.com/in/rinrapas/", label: "LinkedIn" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg text-gray-800 hover:text-white transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-[#a04060] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <social.icon size={24} className="relative z-10" />
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 right-10 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-sm font-light rotate-90 origin-center">Scroll</span>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-[#800020] to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>

      {/* Custom CSS for gradient animation */}
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

export default Hero
