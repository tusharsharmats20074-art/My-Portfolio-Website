import { motion } from "motion/react";
import { GraduationCap, Calendar, BookOpen, MapPin } from "lucide-react";
import { educationHistory } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Education</span>
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
            Academic background, degrees, milestones, and foundational coursework.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-6 pl-8 sm:pl-10 space-y-12">
          {educationHistory.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Connector node */}
              <div className="absolute -left-[45px] sm:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-[#0f172a] border-2 border-blue-500 flex items-center justify-center group-hover:border-purple-500 transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <GraduationCap className="w-4 h-4 text-cyan-400 group-hover:text-purple-400 transition-colors" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 glass glow-hover rounded-2xl transition-all duration-300 shadow-xl text-left relative overflow-hidden">
                {/* Visual Glass shine effect */}
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="font-sans text-sm font-semibold text-purple-400 mt-1">
                      {edu.field}
                    </p>
                  </div>

                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-slate-400 font-mono text-xs w-max">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{edu.duration}</span>
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 items-center font-sans text-sm text-slate-400 mb-4">
                  <span className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-300 font-medium">{edu.institution}</span>
                  </span>
                  <span className="hidden sm:inline text-slate-600">|</span>
                  <span className="flex items-center space-x-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>India</span>
                  </span>
                </div>

                {edu.description && (
                  <p className="font-sans text-sm text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
