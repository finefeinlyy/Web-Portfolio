import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaTools,
  FaBook,
  FaLanguage,
  FaUserFriends,
  FaRobot,
} from "react-icons/fa"; 

function Skills() {
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

  const categories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "C", "C#"],
      icon: <FaCode className="text-[#800020] text-2xl" />,
    },
    {
      title: "Frameworks & Tools",
      skills: ["React JS", "Tailwind CSS", "SQL", "SAS", "R"],
      icon: <FaTools className="text-[#800020] text-2xl" />,
    },
    {
      title: "Concepts",
      skills: ["Cybersecurity Basics", "IT GRC Basics", "Statistics"],
      icon: <FaBook className="text-[#800020] text-2xl" />,
    },
    {
      title: "Languages",
      skills: ["Thai (Native)", "English (Fluent)", "Korean (Fair)"],
      icon: <FaLanguage className="text-[#800020] text-2xl" />,
    },
    {
      title: "Soft Skills",
      skills: ["Empathy", "Problem-Solving", "Adaptability", "Continuous Learning"],
      icon: <FaUserFriends className="text-[#800020] text-2xl" />,
    },
    {
      title: "AI & Emerging Tech",
      skills: ["Generative AI Expertise", "Prompt Engineering", "AI-Enhanced Workflow"],
      icon: <FaRobot className="text-[#800020] text-2xl" />,
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#F5F5F0] text-gray-900 py-24 px-6 relative overflow-hidden"
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

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Heading with Gradient Text */}
        <h2 className="text-4xl font-bold text-center font-mono mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#800020] to-[#a04060]">
          Skills
        </h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Category Title with Icon */}
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-2xl font-semibold text-gray-800 font-mono">
                  {category.title}
                </h3>
              </div>

              {/* Skills with Hover Effects */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-800 border border-gray-300 hover:bg-[#800020] hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
