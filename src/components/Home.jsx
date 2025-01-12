import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-white to-purple-500 text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Yumi's Portfolio
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Exploring opportunities in cybersecurity and honing web development skills.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/projects"
              className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-900 transition"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <h2 className="text-4xl font-bold text-center text-purple-600 mb-8">
            About Me
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
            I'm a second-year student at the Information Technology for Business program, Department of Statistics, Chulalongkorn Business School. I'm passionate about cybersecurity and web development. Currently, I'm learning and exploring opportunities in cybersecurity while enhancing my development skills.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-4xl font-bold text-center text-purple-600 mb-8">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-600">
                Mobile Concept
              </h3>
              <p className="text-gray-700 mt-2">
                A car audio installation website showcasing over 30 years of expertise.
              </p>
              <Link
                to="/projects/mobile-concept"
                className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                View Details
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-600">
                Pet Adoption System
              </h3>
              <p className="text-gray-700 mt-2">
                A web app for adopting and managing pets.
              </p>
              <Link
                to="/projects/pet-adoption"
                className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                View Details
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-4xl font-bold text-center text-purple-600 mb-8">
            Contact Me
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            I'd love to hear from you! Reach out via email or connect on LinkedIn.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:youremail@example.com"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;