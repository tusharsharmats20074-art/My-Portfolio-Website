import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Download, Mail, ChevronDown } from "lucide-react";
import { developerInfo } from "../data";

import profilePic from ".../assets/images/profile_avatar_1782985723040.jpg";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = developerInfo.typingTexts;

  // Typewriter logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[textIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    // State machine for typewriter
    if (!isDeleting && charIndex === currentWord.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before delete
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, words]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Introductions */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 font-mono text-xs tracking-wider"
          >
            <Sparkles className="w-4.5 h-4.5 text-blue-400 animate-pulse" />
            <span>WELCOME TO MY PORTFOLIO WEBSITE</span>
          </motion.div>

          {/* Name Header */}
          <div className="space-y-2">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-medium text-lg text-slate-400 uppercase tracking-widest"
            >
              Hi, I am
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white"
            >
              {developerInfo.name}
            </motion.h1>
          </div>

          {/* Typing Title with Blinking Cursor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-10 sm:h-12 flex items-center font-sans font-bold text-2xl sm:text-3xl lg:text-4xl"
          >
            <span className="text-slate-400 mr-2.5">I'm a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              {typedText}
            </span>
            <span className="w-[3px] h-8 bg-cyan-400 ml-1.5 animate-[ping_1s_infinite] self-center" />
          </motion.div>

          {/* Biography Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
          >
            {developerInfo.bio}
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto"
          >
            {/* Download Resume */}
            <button
              onClick={onOpenResumeModal}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full font-sans font-medium text-sm transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_30px_rgba(59,130,246,0.5)] active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            {/* View Projects */}
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center space-x-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-full font-sans font-medium text-sm transition-all duration-300 cursor-pointer active:scale-95"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            {/* Hire Me */}
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center space-x-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 rounded-full font-sans font-medium text-sm transition-all duration-300 cursor-pointer active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Hire Me</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Hero Graphic / Profile Avatar */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-72 sm:w-80 md:w-96 aspect-square"
          >
            {/* Outer Rotating Glowing Borders */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 rounded-[2.5rem] blur-xl opacity-40 animate-[pulse_4s_infinite]" />
            
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-[2.5rem] opacity-70 blur-[3px]" />

            {/* Primary Picture Frame with Glassmorphism */}
            <div className="absolute inset-0 glass rounded-[2.5rem] overflow-hidden flex items-center justify-center p-3">
              <img
                src={profilePic}
                alt="Tushar Sharma Avatar Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Technical Stat Tag */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 px-4 py-3 glass rounded-2xl flex items-center space-x-3 shadow-2xl z-20"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <div className="flex flex-col text-left">
                <span className="text-white text-xs font-mono font-bold tracking-tight">AI & DATA SCIENCE</span>
                <span className="text-[10px] text-slate-400 font-sans">B.Tech Engineering</span>
              </div>
            </motion.div>

            {/* Floating React/Vite Badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-4 py-3 glass rounded-2xl flex items-center space-x-3 shadow-2xl z-20"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <div className="flex flex-col text-left">
                <span className="text-white text-xs font-mono font-bold">FRONTEND DEV</span>
                <span className="text-[10px] text-slate-400">React & Tailwind v4</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Down arrow link to scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 opacity-60 hover:opacity-100 transition-opacity z-10">
        <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase">Explore Portfolio</span>
        <button
          onClick={() => scrollToSection("about")}
          className="p-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer focus:outline-none"
        >
          <ChevronDown className="w-4 h-4 text-cyan-400 animate-[bounce_2s_infinite]" />
        </button>
      </div>
    </section>
  );
}
