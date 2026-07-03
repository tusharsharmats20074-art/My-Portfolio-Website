import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function BackgroundParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate a fixed number of floating star particles
    const generated: Particle[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 3 + 1, // 1px to 4px
      duration: Math.random() * 15 + 10, // 10s to 25s
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ambient Deep Dark Space */}
      <div className="absolute inset-0 bg-[#0f172a]" />

      {/* Radial Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(0,0,0,0))]" />

      {/* High-Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />

      {/* Floating Violet Gradient Blob */}
      <motion.div
        className="absolute top-[10%] left-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-purple-600/10 blur-[100px] md:blur-[130px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Blue Gradient Blob */}
      <motion.div
        className="absolute bottom-[15%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-blue-600/10 blur-[100px] md:blur-[130px]"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Cyan Center Accents */}
      <motion.div
        className="absolute top-[45%] left-[35%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-cyan-500/5 blur-[80px] md:blur-[120px]"
        animate={{
          scale: [1, 1.2, 0.8, 1],
          opacity: [0.3, 0.6, 0.3, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Stars and Interactive Micro-Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: ["0px", "-80px", "0px"],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
