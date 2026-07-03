import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";

interface NavbarProps {
  onOpenResumeModal: () => void;
}

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Set scroll state
      setIsScrolled(window.scrollY > 20);

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Highlight active section based on scroll position
      const scrollPosition = window.scrollY + 150; // offset
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "glass py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-105 transition-all duration-300">
              <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="font-sans font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Tushar<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-medium font-mono text-sm ml-1.5"></span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/5 border border-white/10 rounded-full py-1.5 px-3 backdrop-blur-sm">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-1.5 rounded-full font-sans text-sm font-medium transition-all duration-300 relative cursor-pointer focus:outline-none ${
                  activeSection === section.id
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/30 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {section.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenResumeModal}
              className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 hover:border-blue-400 rounded-full text-sm font-sans font-medium text-cyan-300 hover:text-white transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={onOpenResumeModal}
              className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-cyan-300 cursor-pointer"
            >
              CV
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-all cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] left-0 w-full z-30 glass py-6 px-4 flex flex-col space-y-3 lg:hidden shadow-2xl"
          >
            {SECTIONS.map((section, idx) => (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04 }}
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-left w-full py-2.5 px-4 rounded-xl font-sans text-base font-medium transition-all ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-l-4 border-blue-500 pl-4"
                    : "text-slate-400 hover:bg-white/5 pl-3"
                }`}
              >
                {section.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
