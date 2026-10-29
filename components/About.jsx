"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Zap, Palette, Layers, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code & Best Practices",
    desc: "Writing maintainable, scalable, and well-tested code following modern standards and patterns."
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First",
    desc: "Crafting layouts that look and feel great on every screen size, from phones to large displays."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Optimizing bundle size, rendering, and Core Web Vitals for a fast, smooth user experience."
  },
  {
    icon: Palette,
    title: "UI/UX Craftsmanship",
    desc: "Translating designs into pixel-perfect interfaces with thoughtful micro-interactions."
  },
  {
    icon: Layers,
    title: "Modern Stack",
    desc: "React, Next.js App Router, Tailwind CSS, Framer Motion, and the latest frontend tooling."
  },
  {
    icon: Rocket,
    title: "Ship Fast, Iterate",
    desc: "From idea to production quickly, with continuous improvement driven by user feedback."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-300 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Crafting{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              digital experiences
            </span>{" "}
            that matter
          </h2>
          <p className="mt-5 text-gray-400 text-base sm:text-lg leading-relaxed">
            I&apos;m a frontend developer passionate about building performant, accessible, and
            beautiful web applications. I bridge the gap between design and engineering — turning
            complex problems into simple, elegant interfaces. With a strong focus on clean code,
            component architecture, and performance, I ship products that users love and teams
            can maintain with confidence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-400/30 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <h.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{h.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
