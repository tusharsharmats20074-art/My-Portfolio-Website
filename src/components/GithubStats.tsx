import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Github, Edit3, Check, RefreshCw, GitCommit } from "lucide-react";

export default function GithubStats() {
  const [githubUser, setGithubUser] = useState("tusharsharmats20074-art");
  const [inputVal, setInputVal] = useState("tusharsharmats");
  const [isEditing, setIsEditing] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      setGithubUser(inputVal.trim());
      setIsEditing(false);
      setRefreshKey((prev) => prev + 1);
    }
  };

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight"
          >
            GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Statistics</span>
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
            Real-time contribution timelines, language preferences, and repository analytics direct from the GitHub API.
          </motion.p>
        </div>

        {/* Custom Username Customization Widget */}
        <div className="max-w-md mx-auto mb-12">
          <div className="p-4 glass rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-blue-500/10 text-cyan-400 rounded-lg">
                <Github className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Active Username</p>
                <p className="font-sans font-bold text-slate-200">@{githubUser}</p>
              </div>
            </div>

            {isEditing ? (
              <form onSubmit={handleUpdate} className="flex items-center space-x-2 w-full sm:w-auto">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="px-3 py-1.5 bg-slate-900 border border-white/10 rounded-lg text-white font-mono text-xs focus:outline-none focus:border-cyan-400 w-full sm:w-36"
                  placeholder="github user"
                  autoFocus
                />
                <button
                  type="submit"
                  className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/30 transition-colors cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-sans font-medium text-slate-300 transition-colors cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => setRefreshKey((prev) => prev + 1)}
                  className="p-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-300 transition-colors cursor-pointer"
                  title="Reload Widgets"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Statistics Widgets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contribution Graph (Width 12) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 p-6 glass rounded-2xl shadow-xl relative overflow-hidden text-center"
          >
            <div className="flex items-center space-x-2 mb-4 justify-start">
              <GitCommit className="w-4 h-4 text-purple-400" />
              <h3 className="font-sans font-bold text-sm sm:text-base text-slate-200 uppercase tracking-widest">
                Contribution Activity Graph
              </h3>
            </div>
            
            <div className="w-full overflow-x-auto py-2 flex justify-center">
              <img
                key={`graph-${refreshKey}`}
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&theme=react-dark&bg_color=0f172a&hide_border=true&color=3b82f6`}
                alt={`${githubUser} Contribution Activity Timeline`}
                referrerPolicy="no-referrer"
                className="max-h-[300px] w-auto max-w-none md:max-w-full"
              />
            </div>
          </motion.div>

          {/* GitHub Stats Card (Width 6) */}
        
          {/* Languages & Streak Grid (Width 6) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Streak card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 glass rounded-2xl shadow-xl text-center"
            >
              <div className="flex items-center space-x-2 mb-4 justify-start">
                <GitCommit className="w-4 h-4 text-emerald-400" />
                <h3 className="font-sans font-bold text-sm sm:text-base text-slate-200 uppercase tracking-widest">
                  GitHub Contribution Streak
                </h3>
              </div>
              <div className="w-full flex justify-center overflow-x-auto py-2">
                <img
                  key={`streak-${refreshKey}`}
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUser}&theme=tokyonight&hide_border=true&background=0f172a&ring=3b82f6&fire=8b5cf6&text=ffffff&stroke=0f172a`}
                  alt={`${githubUser} Github Streak Metrics`}
                  referrerPolicy="no-referrer"
                  className="max-h-[195px] w-auto"
                />
              </div>
            </motion.div>

            {/* Languages card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 glass rounded-2xl shadow-xl text-center"
            >
              <div className="flex items-center space-x-2 mb-4 justify-start">
                <GitCommit className="w-4 h-4 text-pink-400" />
                <h3 className="font-sans font-bold text-sm sm:text-base text-slate-200 uppercase tracking-widest">
                  Most Used Languages
                </h3>
              </div>
              <div className="w-full flex justify-center overflow-x-auto py-2">
                <img
                  key={`langs-${refreshKey}`}
                  src={`https://thumbs.dreamstime.com/z/programming-coding-concept-flat-design-programming-coding-concept-css-python-c-java-javascript-html-php-ruby-c-155503869.jpg`}
                  alt={`${githubUser} Most Utilized Coding Languages`}
                  referrerPolicy="no-referrer"
                  className="max-h-[195px] w-auto"
                />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
