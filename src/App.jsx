import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import LegalTech from './components/projects/LegalTech';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-gray-100 min-h-screen">
        <Header />
        <main className="space-y-16 pt-20"> 
          <Routes>
            <Route path="/" element={<Hero />} /> 
            <Route path="/home" element={<Hero />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/legaltech" element={<LegalTech />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
