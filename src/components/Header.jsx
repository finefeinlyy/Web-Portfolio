"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", path: "/", id: "home" },
    { name: "About", path: "/about", id: "about" },
    { name: "Projects", path: "/projects", id: "projects" },
    { name: "Skills", path: "/skills", id: "skills" },
    { name: "Contact", path: "/contact", id: "contact" },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-200/30"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center py-6 px-6 lg:px-10">
        {/* Logo */}
        <motion.h1
          className="text-2xl lg:text-3xl font-mono font-bold"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to="/"
            className="text-gray-800 hover:text-[#800020] transition duration-300 flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="w-8 h-8 bg-gradient-to-r from-[#800020] to-[#a04060] rounded-lg flex items-center justify-center text-white font-bold text-sm"
              whileHover={{ rotate: 5 }}
            >
              R
            </motion.div>
            <span>
              <span className="text-[#800020]">R</span>inrapas
            </span>
          </Link>
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 font-mono">
          {navItems.map((item, index) => (
            <motion.div key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={item.path}
                className={`relative px-4 py-2 text-lg rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-[#800020] bg-[#800020]/10"
                    : "text-gray-800 hover:text-[#800020] hover:bg-gray-100/50"
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-1 h-1 bg-[#800020] rounded-full"
                    layoutId="activeIndicator"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{ x: "-50%" }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-800 hover:text-[#800020] transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-6 h-6">
            <motion.span
              className="absolute top-0 left-0 w-full h-0.5 bg-current rounded-full"
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-2 left-0 w-full h-0.5 bg-current rounded-full"
              animate={{
                opacity: menuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-4 left-0 w-full h-0.5 bg-current rounded-full"
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ overflow: "hidden" }}
          >
            <nav className="flex flex-col items-center py-8 space-y-2 font-mono">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="w-full max-w-xs"
                >
                  <Link
                    to={item.path}
                    className={`block w-full text-center py-3 px-6 text-lg rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-[#800020] bg-[#800020]/10 font-semibold"
                        : "text-gray-800 hover:text-[#800020] hover:bg-gray-100/50"
                    }`}
                    onClick={() => {
                      setMenuOpen(false)
                      setActiveSection(item.id)
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#800020] to-[#a04060]"
        style={{
          scaleX: scrolled ? 1 : 0,
          transformOrigin: "left",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.header>
  )
}

export default Header
