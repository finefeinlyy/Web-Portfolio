import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-700 text-white"
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
          Contact Me
        </h2>
        <p className="text-lg text-blue-200 mb-8">
          Reach out via email or connect on LinkedIn!
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          {/* Email Button */}
          <a
            href="mailto:myfein@gmail.com"
            className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-blue-200 hover:text-indigo-700 transition transform hover:scale-105"
          >
            Email
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/chanidapa-jitpreedasakul-664705280/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full shadow-lg hover:bg-blue-300 hover:text-blue-900 transition transform hover:scale-105"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;