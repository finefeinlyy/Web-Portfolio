import React, { useState, useEffect } from "react";
import { FaCar, FaPaw } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { motion } from "framer-motion";

function Projects() {
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

  const projects = [
    {
      title: "Mobile Concept",
      description: "A professional car audio installation website designed and developed for a real-world business.",
      icon: <FaCar size={60} className="text-gray-700 group-hover:text-[#800020] transition duration-300" />,
      link: "http://mobileconcept.co.th/",
    },
    {
      title: "IT GRC Framework",
      description: "A website providing insights into IT Governance, Risk, and Compliance (GRC) frameworks.",
      icon: <FaShieldHalved size={60} className="text-gray-700 group-hover:text-[#800020] transition duration-300" />,
      link: "https://it-grc.vercel.app/",
    },
    {
      title: "Pet Adoption System",
      description: "A web app for adopting and managing pets.",
      icon: <FaPaw size={60} className="text-gray-700 group-hover:text-[#800020] transition duration-300" />,
      link: "https://pet-adoption-system-inky.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#F9F9F7] text-gray-900 py-32 px-10 min-h-screen relative overflow-hidden"
    >
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

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center font-mono mb-16 text-[#800020]">
          Projects
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-1/3 h-[1px] bg-gray-300"></div>
          <FaCar className="text-[#800020] mx-3" size={24} />
          <div className="w-1/3 h-[1px] bg-gray-300"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:border-[#800020] transition-all duration-300 hover:shadow-xl transform hover:scale-105"
            >
              {/* Project Icon with Hover Effect */}
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.icon}
                </motion.div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 text-center">{project.description}</p>

              {/* View Project Link */}
              <div className="flex justify-center mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 font-semibold border-b border-gray-700 hover:border-[#800020] hover:text-[#800020] relative after:absolute after:w-full after:h-[2px] after:bg-[#800020] after:bottom-[-2px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
