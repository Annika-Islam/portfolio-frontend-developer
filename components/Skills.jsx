"use client";

import { motion } from "framer-motion";
import {
  FileCode,
  Palette,
  Braces,
  Type,
  Atom,
  Layers,
  Wind,
  GitBranch,
  Github,
  Plug,
  Code,
  Cloud
} from "lucide-react";

const categories = [
  {
    title: "Core & Languages",
    accent: "from-cyan-500 to-indigo-500",
    skills: [
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript (ES6+)", icon: Braces },
      { name: "TypeScript", icon: Type }
    ]
  },
  {
    title: "Frameworks & Libraries",
    accent: "from-indigo-500 to-purple-500",
    skills: [
      { name: "React.js", icon: Atom },
      { name: "Next.js (App Router)", icon: Layers },
      { name: "Tailwind CSS", icon: Wind }
    ]
  },
  {
    title: "Tools & Workflow",
    accent: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "REST APIs", icon: Plug },
      { name: "VS Code", icon: Code },
      { name: "Vercel / Netlify", icon: Cloud }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-4">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              tech stack
            </span>
          </h2>
          <p className="mt-5 text-gray-400 text-base sm:text-lg leading-relaxed">
            The tools and technologies I use day-to-day to design, build, and ship modern web
            products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${cat.accent}`} />
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.05 }}
                    whileHover={{ scale: 1.08 }}
                    className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-all cursor-default"
                  >
                    <skill.icon className="w-4 h-4 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-sm text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}