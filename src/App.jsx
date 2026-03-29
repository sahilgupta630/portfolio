import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutEducation from "./components/AboutEducation";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <AboutEducation />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
