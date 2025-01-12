import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Python",
    "Cybersecurity Basics",
    "C",
    "C#",
    "Statistics",
    "SAS",
    "R",
    "SQL",
  ];

  const gradients = [
    "from-purple-500 to-indigo-600",
    "from-indigo-500 to-blue-600",
    "from-blue-500 to-teal-600",
    "from-teal-500 to-green-600",
    "from-purple-700 to-indigo-800",
    "from-indigo-700 to-blue-800",
    "from-blue-700 to-teal-800",
    "from-teal-700 to-green-800",
    "from-purple-900 to-indigo-900",
    "from-indigo-900 to-blue-900",
    "from-blue-900 to-teal-900",
  ];

  return (
    <section id="skills" className="bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white py-20 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
          Skills
        </h2>

        {/* Skill List */}
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`relative group bg-gradient-to-r ${gradients[index % gradients.length]} text-white px-8 py-4 rounded-full shadow-lg cursor-pointer border-2 border-opacity-50`}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 8px 20px rgba(128, 90, 213, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 rounded-full opacity-20 bg-gradient-to-br from-white to-purple-400 group-hover:opacity-30 transition-opacity"></span>
              <span className="relative z-10 text-lg font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;