
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from"./Components/Projects";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-white-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full bg-neutral-950 animate-fade-in"></div>
      <div className="absolute top-0 z-[2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] animate-fade-in-slow"></div>
      <div className="container mx-auto px-8 animate-fade-in-up">
        <Navbar />
        <Hero />
        <Technologies/>
        <About/>
        <Projects/>
        <Contact/>
        <Resume/>
        <Footer/>
      </div>
    </div>
  );
};
export default App;