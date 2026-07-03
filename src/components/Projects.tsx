import { motion } from "motion/react";
import { Github, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { projectsData } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
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
            A showcase of application development, artificial intelligence prototypes, and responsive designs.
          </motion.p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => {
            const isPlaceholder = project.id === "proj-2";

            return (
              <motion.div
              
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col h-full glass glow-hover rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 text-left"
              >
                
                {/* Project Image Panel */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  {isPlaceholder ? (
                    /* High-Tech AI Neural Network Animated Placeholder Visual */
                    <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                      {/* Floating glowing matrix stars */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]" />
                      <div className="w-16 h-16 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 animate-[pulse_2s_infinite] relative">
                        <Sparkles className="w-8 h-8 text-purple-400 animate-spin-slow" />
                        <div className="absolute inset-0 rounded-full border-t-2 border-purple-400 animate-spin" />
                      </div>
                      <div className="mt-4 space-y-1 relative z-10">
                        <span className="font-mono text-[10px] text-purple-400 tracking-widest uppercase font-bold">
                          SYSTEM_LOAD: 78%
                        </span>
                        <h4 className="font-sans font-bold text-sm text-white">
                          Predictive Deep ML Model
                        </h4>
                        <p className="font-mono text-[10px] text-slate-500">
                          Training linear arrays...
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Actual Project Image with hover zoom */
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60 z-10" />
                      <img
                        src={project.image}
                        alt={`${project.title} Screenshot Thumbnail`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </>
                  )}

                  {/* Absolute Badge Category Overlay */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-20">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="skill-tag text-white font-mono text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content Description */}
                <div className="flex flex-col flex-grow p-6 sm:p-8 justify-between">
                  
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="font-sans text-sm text-slate-300 leading-relaxed min-h-[40px]">
                      {project.description}
                    </p>

                    {/* Features checklist with micro icons */}
                    <div className="space-y-2 pt-2">
                      <h4 className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Core Features
                      </h4>
                      <ul className="space-y-1.5">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Project Call-to-actions */}
                  <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5">
                    {isPlaceholder ? (
                      <span className="font-mono text-xs text-purple-400 font-semibold tracking-wider uppercase animate-pulse py-2">
                        Machine Learning Project Coming Soon
                      </span>
                    ) : (
                      <>
                        {project.demoUrl && project.demoUrl !== "#" ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-sans text-xs font-semibold rounded-lg transition-all shadow-[0_4px_15px_rgba(59,130,246,0.2)] focus:outline-none"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="text-slate-500 font-sans text-xs px-3 py-2 bg-white/5 rounded-lg border border-white/5">
                            Local Sandbox Demo
                          </span>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1.5 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-sans text-xs font-semibold rounded-lg transition-colors focus:outline-none"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </>
                    )}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
