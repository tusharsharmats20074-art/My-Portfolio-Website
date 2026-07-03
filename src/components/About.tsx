import { motion } from "motion/react";
import { Brain, Sparkles, Terminal, Code2, Users2, Rocket } from "lucide-react";
import { developerInfo } from "../data";

export default function About() {
  const bulletBadges = [
    { text: "Pursuing B.Tech in CS (AI & Data Science)", icon: Brain, color: "text-blue-400 bg-blue-500/10" },
    { text: "Passionate about AI & Machine Learning", icon: Sparkles, color: "text-purple-400 bg-purple-500/10" },
    { text: "Strong Problem-Solving Skills", icon: Terminal, color: "text-cyan-400 bg-cyan-500/10" },
    { text: "Proactive Quick Learner", icon: Rocket, color: "text-emerald-400 bg-emerald-500/10" },
    { text: "Fascinated by Open Source Communities", icon: Users2, color: "text-amber-400 bg-amber-500/10" },
    { text: "Obsessed with Modern UI/UX Development", icon: Code2, color: "text-pink-400 bg-pink-500/10" }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
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
            A look into my technical journey, passion for AI, and academic profile.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Badges */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <motion.h3
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-sans font-bold text-2xl text-white"
            >
              Fusing Algorithmic Logic with Creative Frontends
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-sans text-slate-300 leading-relaxed"
            >
              As a first-year Computer Science Engineering student specializing in AI & Data Science, I am laying a robust foundation in numerical computing, statistics, and machine learning models. Concurrently, I've spent thousands of hours mastering modern client-side architectures, creating beautiful digital products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-sans text-slate-300 leading-relaxed"
            >
              I believe that technology shouldn't just be functional—it should look incredible and feel fluid. This philosophy guides my work, from optimizing matrix multiplications in Python to designing micro-interactions in React.
            </motion.p>

            {/* Core Values / Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {bulletBadges.map((badge, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  key={badge.text}
                  className="flex items-center space-x-3 p-3 glass glow-hover rounded-xl transition-all"
                >
                  <div className={`p-2 rounded-lg ${badge.color}`}>
                    <badge.icon className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-medium text-slate-300 text-left">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Bento Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            {developerInfo.stats.map((stat, idx) => {
              // Custom neon gradients for each card
              const borders = [
                "hover:border-cyan-500/40 hover:shadow-cyan-500/5",
                "hover:border-purple-500/40 hover:shadow-purple-500/5",
                "hover:border-blue-500/40 hover:shadow-blue-500/5",
                "hover:border-pink-500/40 hover:shadow-pink-500/5"
              ];
              const textGradients = [
                "from-cyan-400 to-blue-500",
                "from-purple-400 to-pink-500",
                "from-blue-400 to-indigo-500",
                "from-pink-400 to-rose-500"
              ];

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring" }}
                  whileHover={{ y: -5 }}
                  className={`p-6 glass glow-hover rounded-2xl flex flex-col justify-between text-left transition-all duration-300 shadow-xl relative group ${borders[idx % 4]}`}
                >
                  {/* Glowing background hint */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.01] rounded-2xl pointer-events-none" />

                  <div className="space-y-2">
                    <span className="font-mono text-xs text-slate-500 tracking-wider block uppercase">
                      STAT_0{idx + 1}
                    </span>
                    <h4 className={`font-sans font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r ${textGradients[idx % 4]} tracking-tight`}>
                      {stat.value}
                    </h4>
                  </div>

                  <div className="mt-4">
                    <p className="font-sans font-semibold text-sm text-slate-200">
                      {stat.label}
                    </p>
                    <p className="font-sans text-[11px] text-slate-400 mt-0.5">
                      {stat.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
