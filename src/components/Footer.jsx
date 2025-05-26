"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa"

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/finefeinlyy",
      label: "GitHub",
      color: "hover:text-gray-800",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/rinrapas/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:rinrapas.j@gmail.com",
      label: "Email",
      color: "hover:text-red-600",
    },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-br from-[#f8f9fa] via-[#f5f5f5] to-[#e9ecef] text-gray-800 font-mono overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(128,0,32,0.1)_25px,rgba(128,0,32,0.1)_26px,transparent_27px,transparent_99px,rgba(128,0,32,0.1)_100px),linear-gradient(rgba(128,0,32,0.1)_24px,transparent_25px,transparent_26px,rgba(128,0,32,0.1)_27px,rgba(128,0,32,0.1)_99px,transparent_100px)] bg-[length:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#800020] to-[#a04060] rounded-lg flex items-center justify-center text-white font-bold">
                  R
                </div>
                <h3 className="text-2xl font-bold">
                  <span className="text-[#800020]">R</span>inrapas
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cybersecurity enthusiast passionate about building secure solutions and creating positive impact through
                technology.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Available for opportunities</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.div key={link.name} whileHover={{ scale: 1.05, x: 5 }} transition={{ duration: 0.2 }}>
                    <a
                      href={link.href}
                      className="block text-gray-600 hover:text-[#800020] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-6">Connect With Me</h4>
              <div className="flex justify-center md:justify-end gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:shadow-lg`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📧 rinrapas.j@gmail.com</p>
                <p>📍 Bangkok, Thailand</p>
                <p>🎓 Chulalongkorn Business School</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200/50"></div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.div
              className="flex items-center gap-2 text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span>© {currentYear} Rinrapas Portfolio. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>and lots of ☕</span>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg text-gray-600 hover:text-[#800020] hover:bg-white/80 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm">Back to Top</span>
              <FaArrowUp className="text-xs" />
            </motion.button>
          </div>
        </div>

        {/* Tech Stack Credits */}
        <motion.div
          className="text-center py-4 border-t border-gray-200/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs text-gray-500">
            Built with React, Tailwind CSS, Framer Motion • Designed & Developed by Rinrapas
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#800020] rounded-full opacity-20"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 2,
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </footer>
  )
}

export default Footer
