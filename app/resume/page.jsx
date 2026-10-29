"use client";


import { siteConfig } from "@/data/siteConfig";
import { Github, Linkedin, Mail, MapPin, Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";

const skills = ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js (App Router)", "Tailwind CSS", "Git", "GitHub", "REST APIs", "Framer Motion", "Vercel"];

const projects = [
  { title: "FitLog — Fitness Tracker", desc: "Fitness tracking web app to log workouts, monitor progress, and stay consistent with health goals through an intuitive, responsive interface.", stack: "React, JavaScript, Tailwind CSS, Firebase" },
  { title: "Dev Stack Builder", desc: "Interactive tool that lets developers build and preview their ideal tech stack, combining modern frontend libraries into a cohesive, deployable setup.", stack: "React, JavaScript, Tailwind CSS, Netlify" },
  { title: "Interactive Web Application", desc: "Dynamic, responsive web application showcasing modern UI patterns, component-driven architecture, and seamless user experience across devices.", stack: "React, JavaScript, Tailwind CSS, Vercel" }
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex flex-col items-stretch gap-3 print:hidden sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <button onClick={() => typeof window !== "undefined" && window.print()} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/30 hover:scale-105 transition-all sm:justify-start">
            <Printer className="w-4 h-4" /> Print / Save as PDF
          </button>
        </div>
        <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-10 shadow-2xl [overflow-wrap:anywhere]">
          <header className="border-b border-white/10 pb-6 mb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">{siteConfig.name}</span>
            </h1>
            <p className="text-lg text-gray-300 mt-1">{siteConfig.role}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-sm text-gray-400">
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors"><Mail className="w-4 h-4 text-cyan-400" /> {siteConfig.email}</a>
              <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> {siteConfig.location}</span>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors"><Github className="w-4 h-4 text-purple-400" /> GitHub</a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors"><Linkedin className="w-4 h-4 text-cyan-400" /> LinkedIn</a>
            </div>
          </header>
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-2">Summary</h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{siteConfig.tagline} Passionate frontend developer focused on crafting performant, accessible, and pixel-perfect web applications. Strong in React, Next.js (App Router), and Tailwind CSS, with a keen eye for UI/UX and clean, maintainable code. Available for work and open to new opportunities.</p>
          </section>
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (<span key={s} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-200">{s}</span>))}
            </div>
          </section>
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-3">Projects</h2>
            <div className="flex flex-col gap-4">
              {projects.map((p) => (
                <div key={p.title}>
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                  <p className="text-xs text-gray-500 mt-1">Stack: {p.stack}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-2">Experience</h2>
            <p className="text-gray-400 text-sm leading-relaxed">Frontend Developer — building modern, responsive web applications with React &amp; Next.js. Open to freelance, contract, and full-time roles.</p>
          </section>
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-2">Education</h2>
            <p className="text-gray-400 text-sm leading-relaxed">B.Sc. in Computer Science (or related field) — University Name, Year</p>
            <p className="text-xs text-gray-500 mt-1">Update this with your actual degree and institution.</p>
          </section>
        </article>
      </div>
    </main>
  );
}
