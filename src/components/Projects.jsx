import React from "react";
import { FaCar, FaPaw } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Mobile Concept",
      description: "A car audio installation website.",
      icon: <FaCar size={80} className="text-purple-400 group-hover:text-white transition duration-300" />,
      link: "https://mobile-concept.vercel.app",
    },
    {
      title: "Pet Adoption System",
      description: "A web app for adopting and managing pets.",
      icon: <FaPaw size={80} className="text-purple-400 group-hover:text-white transition duration-300" />,
      link: "https://pet-adoption-system-inky.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white py-20 px-6"
    >
      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700 opacity-30 blur-[150px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-600 opacity-20 blur-[100px] rounded-full bottom-10 right-10"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg shadow-lg border border-gray-700 hover:border-purple-400 hover:bg-gray-700 transition-all duration-300 backdrop-blur-lg bg-white/10"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Project Icon */}
              <div className="flex justify-center mb-4">{project.icon}</div>

              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-400">{project.description}</p>

              {/* View Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-purple-400 font-semibold hover:underline transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;