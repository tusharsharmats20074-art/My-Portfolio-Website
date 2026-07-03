import { motion } from "motion/react";
import { Briefcase, Calendar, Award, Compass, Sparkles } from "lucide-react";
import { experienceHistory } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
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
            Leadership roles, community building, collaborative ecosystems, and extracurricular actions.
          </motion.p>
        </div>

        {/* Alternate Staggered Timeline Grid (Responsive) */}
        <div className="space-y-8">
          {experienceHistory.map((exp, idx) => {
            // Pick matching icons based on the experience
            let RoleIcon = Briefcase;
            if (exp.company.includes("Socialz")) RoleIcon = Sparkles;
            else if (exp.company.includes("Devcrest")) RoleIcon = Compass;
            else if (exp.role.includes("Captain")) RoleIcon = Award;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="group flex flex-col md:grid md:grid-cols-12 gap-4 p-6 sm:p-8 glass glow-hover rounded-2xl transition-all duration-300 shadow-xl text-left relative"
              >
                {/* Neon Side bar accent */}
                <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-blue-500 to-purple-600 rounded-l-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Left: Role, Company & Icon (Grid Col 1-5) */}
                <div className="md:col-span-5 flex items-start space-x-4 pl-2">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/10 group-hover:bg-purple-500/20 group-hover:scale-105 transition-all">
                    <RoleIcon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-white group-hover:text-purple-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="font-sans text-sm text-cyan-400 font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Middle: Duration (Grid Col 6-8) */}
                <div className="md:col-span-3 flex md:justify-center items-center pl-2 md:pl-0">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-slate-400 font-mono text-xs">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.duration}</span>
                  </span>
                </div>

                {/* Right: Detailed Description (Grid Col 9-12) */}
                <div className="md:col-span-4 pl-2 md:pl-0">
                  <p className="font-sans text-sm text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
