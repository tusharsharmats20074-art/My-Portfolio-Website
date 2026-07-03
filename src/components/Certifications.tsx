import { motion } from "motion/react";
import { Award, ArrowUpRight, ShieldCheck } from "lucide-react";
import { certificationsData } from "../data";

export default function Certifications() {
  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight"
          >
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Credentials</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-[3px] bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-slate-400 text-sm sm:text-base mt-4"
          >
            Professional course completions, expert authorizations, and university specializations.
          </motion.p>
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 glass glow-hover rounded-2xl flex flex-col justify-between text-left transition-all duration-300 shadow-xl group relative"
            >
              {/* Corner verified ribbon logo */}
              <div className="absolute top-4 right-4 text-emerald-500/20 group-hover:text-emerald-400/50 transition-colors duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>

              {/* Icon badge */}
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 group-hover:text-cyan-400 transition-colors">
                <Award className="w-5.5 h-5.5" />
              </div>

              <div className="space-y-2 flex-grow">
                <h3 className="font-sans font-bold text-base text-slate-100 group-hover:text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="font-sans text-xs text-slate-400">
                  Issued by <span className="font-semibold text-slate-300">{cert.issuer}</span>
                </p>
                {cert.date && (
                  <span className="inline-block font-mono text-[10px] text-slate-500 uppercase tracking-widest pt-1">
                    Verified {cert.date}
                  </span>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-sans font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none"
                >
                  <span>View Certificate</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
