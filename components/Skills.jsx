"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Braces,
  Cloud,
  Code2,
  FileCode,
  Figma,
  Github,
  GitBranch,
  Layers,
  Palette,
  Plug,
  Sparkles,
  Type,
  Wind,
} from "lucide-react";

const skills = [
  { name: "HTML5", detail: "Semantic structure", icon: FileCode, color: "text-orange-400", tile: "from-orange-500/20 to-red-500/10", border: "group-hover:border-orange-400/40" },
  { name: "CSS3", detail: "Visual styling", icon: Palette, color: "text-blue-400", tile: "from-blue-500/20 to-indigo-500/10", border: "group-hover:border-blue-400/40" },
  { name: "JavaScript", detail: "Interactive experiences", icon: Braces, color: "text-yellow-300", tile: "from-yellow-400/20 to-amber-500/10", border: "group-hover:border-yellow-300/40" },
  { name: "TypeScript", detail: "Safer, scalable code", icon: Type, color: "text-sky-400", tile: "from-sky-500/20 to-blue-500/10", border: "group-hover:border-sky-400/40" },
  { name: "Tailwind CSS", detail: "Fast, responsive UI", icon: Wind, color: "text-cyan-300", tile: "from-cyan-400/20 to-teal-500/10", border: "group-hover:border-cyan-300/40" },
  { name: "React.js", detail: "Reusable UI components", icon: Atom, color: "text-cyan-300", tile: "from-cyan-400/20 to-blue-500/10", border: "group-hover:border-cyan-300/40" },
  { name: "Next.js", detail: "Modern web applications", icon: Layers, color: "text-slate-100", tile: "from-slate-400/20 to-slate-600/10", border: "group-hover:border-slate-300/40" },
  { name: "Git & GitHub", detail: "Version control & teamwork", icon: GitBranch, color: "text-violet-300", tile: "from-violet-500/20 to-purple-500/10", border: "group-hover:border-violet-400/40" },
  { name: "Figma", detail: "UI design & prototyping", icon: Figma, color: "text-pink-300", tile: "from-pink-500/20 to-violet-500/10", border: "group-hover:border-pink-400/40" },
  { name: "REST APIs", detail: "Connecting web services", icon: Plug, color: "text-emerald-300", tile: "from-emerald-500/20 to-teal-500/10", border: "group-hover:border-emerald-400/40" },
  { name: "VS Code", detail: "Everyday development", icon: Code2, color: "text-blue-300", tile: "from-blue-500/20 to-cyan-500/10", border: "group-hover:border-blue-400/40" },
  { name: "Vercel & Netlify", detail: "Deploying the web", icon: Cloud, color: "text-slate-200", tile: "from-slate-400/20 to-indigo-500/10", border: "group-hover:border-slate-300/40" },
];

const focusAreas = ["Frontend Development", "Responsive UI", "Reusable Components", "Web Interactions"];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-[120px]" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-violet-500/[0.09] blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.13)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3.5 py-1.5 text-xs font-medium tracking-wide text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> What I work with
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            My <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-400 bg-clip-text text-transparent">tech stack</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
            The tools I use to turn ideas into polished, responsive experiences for the web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
              whileHover={{ y: -3 }}
              className={`group relative flex min-h-[104px] items-center gap-4 overflow-hidden rounded-2xl border border-white/[0.09] bg-slate-950/60 p-4 shadow-[0_12px_35px_-24px_rgba(0,0,0,0.9)] backdrop-blur-sm transition-colors duration-300 sm:min-h-[118px] sm:gap-4 sm:p-5 ${skill.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.tile} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${skill.tile} shadow-inner transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16`}>
                <skill.icon className={`h-7 w-7 ${skill.color} sm:h-8 sm:w-8`} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className="relative min-w-0">
                <h3 className="text-base font-semibold tracking-tight text-white sm:text-[17px]">{skill.name}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-[13px]">{skill.detail}</p>
              </div>
              <span aria-hidden="true" className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-white/20 transition-colors group-hover:bg-cyan-300/70" />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.08] pt-5 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Focus areas</span>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span key={area} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-300/25 hover:text-cyan-100">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
