import { motion } from "motion/react";
import * as Lucide from "lucide-react";
import { achievementsData } from "../data";

function AchievementIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Lucide as any)[name];
  if (!IconComponent) return <Lucide.Award className={className} />;
  return <IconComponent className={className} />;
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Achievements</span>
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
            Milestones and traits that demonstrate leadership, community influence, and analytical prowess.
          </motion.p>
        </div>

        {/* Staggered Achievements Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {achievementsData.map((ach, idx) => {
            // Give them beautiful glowing themes
            const glowStyles = [
              "hover:border-blue-500/30 hover:shadow-blue-500/5 hover:text-blue-400",
              "hover:border-purple-500/30 hover:shadow-purple-500/5 hover:text-purple-400",
              "hover:border-amber-500/30 hover:shadow-amber-500/5 hover:text-amber-400",
              "hover:border-pink-500/30 hover:shadow-pink-500/5 hover:text-pink-400",
              "hover:border-emerald-500/30 hover:shadow-emerald-500/5 hover:text-emerald-400"
            ];

            const iconColors = [
              "text-blue-400 bg-blue-500/10",
              "text-purple-400 bg-purple-500/10",
              "text-amber-400 bg-amber-500/10",
              "text-pink-400 bg-pink-500/10",
              "text-emerald-400 bg-emerald-500/10"
            ];

            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={`p-6 glass glow-hover rounded-2xl flex flex-col justify-between text-left transition-all duration-300 shadow-2xl relative overflow-hidden group ${glowStyles[idx % 5]}`}
              >
                <div>
                  {/* Glowing background blob in the card corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/[0.01] rounded-bl-full pointer-events-none group-hover:bg-white/[0.02] transition-colors" />

                  {/* Icon badge */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-105 transition-transform ${iconColors[idx % 5]}`}>
                    <AchievementIcon name={ach.iconName} className="w-5.5 h-5.5" />
                  </div>

                  <h3 className="font-sans font-bold text-lg text-slate-100 group-hover:text-white mb-2 leading-tight">
                    {ach.title}
                  </h3>
                </div>

                <p className="font-sans text-xs text-slate-400 leading-relaxed mt-2 group-hover:text-slate-300 transition-colors">
                  {ach.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
