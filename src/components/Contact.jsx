import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Contact() {
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
      id="contact"
      className="relative bg-[#f5f5f5] text-gray-800 py-32 overflow-hidden font-mono min-h-screen flex items-center"
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

      <div className="container mx-auto text-left px-6 relative z-10">
        {/* Heading with Gradient Text */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#800020] to-[#a04060]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Reach out via email or connect on LinkedIn!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Email Button */}
          <a
            href="mailto:ch.jitpreedasakul@gmail.com"
            className="px-6 py-3 border border-gray-800 text-gray-800 font-semibold rounded-lg shadow-sm hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"
          >
            Email
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/chanidapa-jitpreedasakul-664705280/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-800 text-gray-800 font-semibold rounded-lg shadow-sm hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;