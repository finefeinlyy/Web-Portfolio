import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-white via-purple-50 to-white text-gray-900 fixed top-0 left-0 w-full z-50 shadow-md rounded-b-3xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">
          <span className="text-purple-600">F</span>einly
        </h1>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#about"
            className="text-lg font-medium hover:text-purple-600 transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-lg font-medium hover:text-purple-600 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-lg font-medium hover:text-purple-600 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-lg font-medium hover:text-purple-600 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            id="menu-toggle"
            className="text-gray-900 focus:outline-none hover:text-purple-600 transition duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-white via-purple-50 to-white shadow-lg rounded-b-3xl">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#about"
              className="text-lg font-medium text-gray-900 hover:text-purple-600 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-lg font-medium text-gray-900 hover:text-purple-600 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-lg font-medium text-gray-900 hover:text-purple-600 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-lg font-medium text-gray-900 hover:text-purple-600 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;