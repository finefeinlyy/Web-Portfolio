import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaNetworkWired, FaUserSecret, FaCode, FaChartLine } from "react-icons/fa"; // Import Font Awesome icons

function About() {
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

  const keywords = [
    "cybersecurity",
    "grc",
    "penetration testing",
    "vulnerabilities",
    "secure systems",
    "resilient infrastructures",
  ];

  const highlightKeywords = (text) => {
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    return text.split(regex).map((part, i) => {
      if (keywords.includes(part.toLowerCase())) {
        return (
          <span
            key={i}
            className="text-[#800020] font-semibold hover:underline hover:text-[#a04060] transition-all duration-300"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section
      id="about"
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading with Icon */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-left bg-clip-text text-transparent bg-gradient-to-r from-[#800020] to-[#a04060] flex items-center gap-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaUserSecret className="text-[#800020]" /> {/* Icon added here */}
          About Me
        </motion.h2>

        <div className="space-y-6 max-w-2xl text-left">
          {[
            "I am a cybersecurity enthusiast with a keen interest in IT Governance, Risk, and Compliance (GRC), as well as penetration testing. Recently, I’ve begun exploring these fields in greater depth, and I’m excited to develop my skills further.",
            "I am currently a second-year student studying Information Technology for Business at the Department of Statistics, Chulalongkorn Business School.",
            "My current focus is on understanding how to identify vulnerabilities, secure systems, and ensure compliance with IT standards and regulations.",
            "I aim to become proficient in both GRC and pentesting, leveraging this expertise to help organizations build secure and resilient infrastructures.",
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            >
              {highlightKeywords(text)}
            </motion.p>
          ))}
        </div>

        {/* Icons for Keywords */}
        <div className="mt-12 flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-[#800020] text-2xl" />
            <span className="text-gray-800">Cybersecurity</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLock className="text-[#800020] text-2xl" />
            <span className="text-gray-800">Secure Systems</span>
          </div>
          <div className="flex items-center gap-2">
            <FaNetworkWired className="text-[#800020] text-2xl" />
            <span className="text-gray-800">Resilient Infrastructures</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCode className="text-[#800020] text-2xl" />
            <span className="text-gray-800">Penetration Testing</span>
          </div>
          <div className="flex items-center gap-2">
            <FaChartLine className="text-[#800020] text-2xl" />
            <span className="text-gray-800">IT Governance</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;