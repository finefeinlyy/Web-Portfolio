import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-900 fixed top-0 left-0 w-full z-50 shadow-md border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-7 px-10">
        {/* Logo */}
        <h1 className="text-3xl font-mono font-bold">
          <Link to="/" className="text-gray-800 hover:text-[#800020] transition duration-300">
            <span className="text-[#800020]">F</span>einly
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-mono">
          <Link
            to="/"
            className="text-lg text-gray-800 hover:text-[#800020] transition duration-300"
          >
            Home
          </Link>
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-lg text-gray-800 hover:text-[#800020] transition duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          id="menu-toggle"
          className="md:hidden text-gray-800 hover:text-[#800020] transition duration-300"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col items-center py-8 space-y-6 font-mono">
            <Link
              to="/"
              className="text-lg text-gray-800 hover:text-[#800020] transition duration-300"
              onClick={() => setMenuOpen(false)} // Close menu when clicked
            >
              Home
            </Link>
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-lg text-gray-800 hover:text-[#800020] transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
