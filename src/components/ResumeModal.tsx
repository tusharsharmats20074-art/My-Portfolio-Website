import { motion } from "motion/react";
import { X, Mail, MapPin, Globe, Phone, FileText, Printer, Copy, Check } from "lucide-react";
import { useState } from "react";
import { developerInfo, educationHistory, experienceHistory, skillGroups } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const textContent = `
TUSHAR SHARMA
Computer Science Student | AI & Data Science Enthusiast
Email: ${developerInfo.email}
Location: ${developerInfo.location}
GitHub: ${developerInfo.github}

SUMMARY:
${developerInfo.bio}

EDUCATION:
${educationHistory.map(edu => `- ${edu.degree} in ${edu.field}, ${edu.institution} (${edu.duration})`).join("\n")}

EXPERIENCE:
${experienceHistory.map(exp => `- ${exp.role} at ${exp.company} (${exp.duration})\n  ${exp.description}`).join("\n")}

SKILLS:
${skillGroups.map(g => `${g.category}: ${g.skills.map(s => s.name).join(", ")}`).join("\n")}
    `;
    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-3xl max-h-[85vh] glass shadow-2xl flex flex-col overflow-hidden z-10 text-left print:border-none print:bg-white print:text-black print:max-h-none print:relative print:overflow-visible"
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between p-5 border-b border-white/5 print:hidden">
          <div className="flex items-center space-x-2 text-white">
            <FileText className="w-5 h-5 text-blue-400" />
            <span className="font-sans font-bold">Interactive CV Console</span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Copy payload button */}
            <button
              onClick={handleCopy}
              className="flex items-center space-x-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-sans text-slate-300 transition-colors focus:outline-none cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Payload</span>
                </>
              )}
            </button>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1 px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg text-xs font-sans text-cyan-300 transition-colors focus:outline-none cursor-pointer border border-blue-500/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Panel */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow print:p-0 print:overflow-visible">
          <div className="space-y-8 print:text-black print:space-y-6">
            
            {/* CV Title Header */}
            <div className="border-b border-white/10 pb-6 print:border-black/10 text-center sm:text-left">
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-white print:text-black">
                {developerInfo.name}
              </h1>
              <p className="font-sans text-sm sm:text-base text-purple-400 font-semibold mt-1.5 print:text-indigo-600 uppercase tracking-wide">
                {developerInfo.primaryTitle} — {developerInfo.subtitle}
              </p>

              {/* Contact meta parameters */}
              <div className="flex flex-wrap gap-y-2 gap-x-6 items-center justify-center sm:justify-start mt-4 font-mono text-xs text-slate-400 print:text-slate-600">
                <span className="flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400 print:text-indigo-500" />
                  <span>{developerInfo.email}</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 print:text-indigo-500" />
                  <span>{developerInfo.location}</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-400 print:text-indigo-500" />
                  <a href={developerInfo.github} target="_blank" rel="noreferrer" className="underline hover:text-white print:text-indigo-600">
                    github.com/tusharsharmats
                  </a>
                </span>
              </div>
            </div>

            {/* Core summary */}
            <div className="space-y-2.5">
              <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 print:text-black print:border-b print:border-black/10 print:pb-1">
                Professional Profile
              </h2>
              <p className="font-sans text-sm text-slate-300 leading-relaxed print:text-slate-700">
                {developerInfo.bio}
              </p>
            </div>

            {/* Academic milestones timeline */}
            <div className="space-y-4">
              <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 print:text-black print:border-b print:border-black/10 print:pb-1">
                Education
              </h2>
              <div className="space-y-4">
                {educationHistory.map((edu) => (
                  <div key={edu.id} className="grid grid-cols-1 sm:grid-cols-12 gap-1 text-sm">
                    <span className="sm:col-span-3 font-mono text-xs text-slate-400 print:text-slate-500">
                      {edu.duration}
                    </span>
                    <div className="sm:col-span-9 space-y-1">
                      <h3 className="font-sans font-bold text-slate-100 print:text-black leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="font-sans text-xs text-blue-400 print:text-indigo-600 font-semibold">
                        {edu.field} | {edu.institution}
                      </p>
                      {edu.description && (
                        <p className="font-sans text-xs text-slate-400 print:text-slate-600 pt-0.5 leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Experience */}
            <div className="space-y-4">
              <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 print:text-black print:border-b print:border-black/10 print:pb-1">
                Experience & Communities
              </h2>
              <div className="space-y-5">
                {experienceHistory.map((exp) => (
                  <div key={exp.id} className="grid grid-cols-1 sm:grid-cols-12 gap-1 text-sm">
                    <span className="sm:col-span-3 font-mono text-xs text-slate-400 print:text-slate-500">
                      {exp.duration}
                    </span>
                    <div className="sm:col-span-9 space-y-1">
                      <h3 className="font-sans font-bold text-slate-100 print:text-black leading-tight">
                        {exp.role}
                      </h3>
                      <p className="font-sans text-xs text-purple-400 print:text-slate-700 font-semibold">
                        {exp.company}
                      </p>
                      <p className="font-sans text-xs text-slate-400 print:text-slate-600 pt-0.5 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical skills list */}
            <div className="space-y-3">
              <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 print:text-black print:border-b print:border-black/10 print:pb-1">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                {skillGroups.map((g) => (
                  <div key={g.category} className="space-y-1">
                    <span className="font-sans font-bold text-slate-300 print:text-black">{g.category}</span>
                    <p className="font-sans text-slate-400 print:text-slate-600">
                      {g.skills.map((s) => s.name).join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
