import React from "react";
import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Dynamic Canvas Aurora Borealis Background */}
      <AuroraBackground />

      {/* Sticky Responsive Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ position: "relative", zIndex: 1 }}>
        {/* Section 00: Hero Experience */}
        <Hero />

        {/* Section 01: About Me & The 4 Pillars */}
        <About />

        {/* Section 02: Education Academic Timeline */}
        <Education />

        {/* Section 03: Skills Universe */}
        <Skills />

        {/* Section 04: Projects Lab & Detail Showcase */}
        <Projects />

        {/* Section 05: Professional Internship Experience */}
        <Experience />

        {/* Section 06: Verified Certifications */}
        <Certifications />

        {/* Section 07: Contact & Let's Build Something Meaningful */}
        <Contact />
      </main>

      {/* Polished Digital Footer */}
      <Footer />
    </div>
  );
}
