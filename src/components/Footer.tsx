import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#0f172a] py-12 px-4 sm:px-6 lg:px-8 z-10 text-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Design Credit */}
        <p className="font-sans text-sm text-slate-400">
          Designed & Developed with <span className="text-red-500">♥</span> by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
            Tushar Sharma
          </span>
        </p>

        {/* Right: Copyright */}
        <p className="font-mono text-xs text-slate-500">
          © {currentYear} Tushar Sharma. All rights reserved.
        </p>
      </div>

      {/* Floating Back to Top Button */}
      {showScroll && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full transition-all duration-300 shadow-2xl hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 cursor-pointer z-50 focus:outline-none"
          aria-label="Back to Top"
        >
          <ChevronUp className="w-5 h-5 animate-bounce" />
        </button>
      )}
    </footer>
  );
}
