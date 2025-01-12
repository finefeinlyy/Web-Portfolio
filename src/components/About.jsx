import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
        id="about"
      className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Glow Effect Decoration */}
      <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-30 blur-[200px] rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-600 opacity-20 blur-[150px] rounded-full top-20 right-20"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.01, 
            y: (scrollPosition * 0.1) % 20, 
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          About Me
        </motion.h2>

        {/* Text Content */}
        <div className="space-y-6 max-w-3xl mx-auto text-center">
          {[
            "I am a cybersecurity enthusiast and developer. Recently, I’ve started exploring cybersecurity, and I’m very excited to learn more about this field.",
            "I am currently a second-year student studying Information Technology for Business at the Department of Statistics, Chulalongkorn Business School.",
            "While I am focusing on cybersecurity now, I also enjoy web development and have worked on projects like Mobile Concept and Pet Adoption System.",
            "My goal is to become skilled in both cybersecurity and development so I can build secure and reliable systems. I’m excited to keep learning and growing in these fields.",
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-lg leading-relaxed"
              animate={{
                x: (mousePosition.x - window.innerWidth / 2) * 0.005 * (index + 1), 
                y: (scrollPosition * 0.05) % 10 * (index + 1), 
              }}
              transition={{ type: "spring", stiffness: 40, damping: 15 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;