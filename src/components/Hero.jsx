import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-start text-left px-10 md:px-20 bg-[#f5f5f5] text-gray-800 font-mono overflow-hidden"
    >
      {/* Subtle Background Animation */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#f5f5f5] to-[#e0e0e0] opacity-30 animate-gradient"
        style={{
          animation: "gradient 10s ease infinite",
          backgroundSize: "200% 200%",
        }}
      ></div>

      {/* Mouse Trailing Effect */}
      <div
        className="absolute w-4 h-4 bg-[#800020] rounded-full pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          transition: "all 0.1s ease-out",
        }}
      ></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Heading with Gradient Text */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#800020] to-[#a04060]">
          Hi, I'm Chanidapa.
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-600 mb-6">
          Cybersecurity Enthusiast & Web Developer
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex gap-4">
          {/* View Projects */}
          <motion.div
            className="border border-gray-800 px-6 py-2 rounded-lg text-gray-800 hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/projects">View Projects</Link> {/* Use Link to navigate */}
          </motion.div>

          {/* CV Button */}
          <motion.a
            href="/Chanidapa_Resume_ITGRC copy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-800 px-6 py-2 rounded-lg text-gray-800 hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFile size={18} /> CV Download
          </motion.a>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-10 left-10 flex gap-4"
      >
        <a
          href="https://github.com/finefeinlyy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-[#800020] transition-all duration-300"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/chanidapa-jitpreedasakul-664705280/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-[#800020] transition-all duration-300"
        >
          <FaLinkedin size={40} />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
