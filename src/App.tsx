import { useState } from "react";
import { AnimatePresence } from "motion/react";
import CustomCursor from "./components/CustomCursor";
import BackgroundParticles from "./components/BackgroundParticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#0f172a] text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden antialiased">
      {/* Dynamic Cursor Glowing Elements */}
      <CustomCursor />

      {/* Futuristic Background Space particles & gradient light leaks */}
      <BackgroundParticles />

      {/* Master Site Shell Wrapper */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
        {/* Sticky Header Glass Navbar */}
        <Navbar onOpenResumeModal={() => setIsResumeOpen(true)} />

        {/* Core Layout Main Section Timeline */}
        <main className="flex-grow w-full">
          {/* 1. Hero Landing Block */}
          <Hero onOpenResumeModal={() => setIsResumeOpen(true)} />

          {/* Spacer separating the large glowing hero from sections */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="border-t border-white/5" />
          </div>

          {/* 2. About Me Profile Segment */}
          <About />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="border-t border-white/5" />
          </div>

          {/* 3. Tech Skills Matrix */}
          <Skills />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="border-t border-white/5" />
          </div>

          {/* 4. Projects Showcase Bento */}
          <Projects />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="border-t border-white/5" />
          </div>

          {/* 5. Education timeline */}
          <Education />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="border-t border-white/5" />
          </div>

          {/* 6. Professional & Club Experiences */}
          <Experience />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="border-t border-white/5" />
          </div>

          {/* 7. Certifications and Verified Authority badges */}
          <Certifications />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="border-t border-white/5" />
          </div>

          {/* 8. Notable Core Strengths & Badges */}
          <Achievements />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="border-t border-white/5" />
          </div>

          {/* 9. Live GitHub Stats Embeds */}
          <GithubStats />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="border-t border-white/5" />
          </div>

          {/* 10. Contact Email Engine Form */}
          <Contact />
        </main>

        {/* 11. Footer credits and copyright banner */}
        <Footer />
      </div>

      {/* CV Overlay Modals */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
