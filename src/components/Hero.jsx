import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      controls.start({
        y: offset * 0.3, // Moves text slower than scroll
        opacity: 1 - offset / 500, // Fades text as you scroll down
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #6a00f4, #000000, #0033aa)", 
      }}
    >
      {/* Glowing Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute bg-indigo-500 opacity-60 rounded-full blur-2xl"
          style={{ width: "250px", height: "250px", top: "10%", left: "20%" }}
        ></div>
        <div
          className="absolute bg-purple-600 opacity-50 rounded-full blur-2xl"
          style={{ width: "300px", height: "300px", top: "40%", left: "60%" }}
        ></div>
        <div
          className="absolute bg-cyan-400 opacity-50 rounded-full blur-3xl"
          style={{ width: "400px", height: "400px", bottom: "10%", left: "30%" }}
        ></div>
        <div
          className="absolute bg-black opacity-40 rounded-full blur-3xl"
          style={{ width: "500px", height: "500px", bottom: "15%", right: "10%" }}
        ></div>
      </div>

      {/* Main Content */}
      <motion.div
        animate={controls}
        initial={{ y: 0, opacity: 1 }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Hi, I'm Feinly !
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8">
          Cybersecurity Enthusiast & Web Developer
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex gap-6">
          {/* View Projects */}
          <motion.a
            href="#projects"
            className="bg-white text-pink-500 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>

          {/* CV Button */}
          <motion.a
            href="/Chanidapa_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFile size={24} />
            CV Download
          </motion.a>

          {/* GitHub Button */}
          <motion.a
            href="https://github.com/finefeinlyy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={24} />
            GitHub
          </motion.a>

          {/* LinkedIn Button */}
          <motion.a
            href="https://www.linkedin.com/in/chanidapa-jitpreedasakul-664705280/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin size={24} />
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
      


      {/* Description */}
      <div className="absolute bottom-10 text-white text-sm md:text-base opacity-80">
        <p>Scroll down to learn more about my work and skills!</p>
      </div>
    </section>
  );
}

export default Hero;