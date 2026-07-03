import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Lucide from "lucide-react";
import { skillGroups } from "../data";

// Helper component to render dynamic icons from string names in lucide-react
function SkillIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Lucide as any)[name];
  if (!IconComponent) return <Lucide.HelpCircle className={className} />;
  return <IconComponent className={className} />;
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skillGroups.map((g) => g.category)];

  const filteredSkills =
    selectedCategory === "All"
      ? skillGroups.flatMap((g) => g.skills.map((s) => ({ ...s, category: g.category })))
      : skillGroups
          .find((g) => g.category === selectedCategory)
          ?.skills.map((s) => ({ ...s, category: selectedCategory })) || [];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight"
          >
            My Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
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
            A detailed breakdown of my engineering core competences and technologies I am currently learning.
          </motion.p>
        </div>

        {/* Category Navigation Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer focus:outline-none ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_4px_15px_rgba(59,130,246,0.2)] border-blue-500/20"
                  : "glass hover:bg-white/[0.07] text-slate-400 hover:text-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                key={`${skill.name}-${idx}`}
                className="p-5 glass glow-hover rounded-2xl flex flex-col justify-between text-left transition-all shadow-xl group relative"
              >
                {/* Micro-glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-4">
                  {/* Skill Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                        <SkillIcon name={skill.iconName} className="w-5 h-5" />
                      </div>
                      <span className="font-sans font-bold text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-blue-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                    
                    {/* Tiny category label at the card bottom */}
                    {selectedCategory === "All" && (
                      <span className="font-sans text-[9px] text-slate-500 uppercase tracking-widest block pt-0.5 text-right">
                        {(skill as any).category}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
