"use client";

import { motion } from "framer-motion";
import { ArrowRight, Braces, Check, Code2 } from "lucide-react";

const strengths = ["Responsive interfaces", "Clean React components", "Thoughtful UI details"];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-500/[0.08] blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> About Me
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Crafting digital experiences{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-400 bg-clip-text text-transparent">that matter.</span>
          </h2>
        </motion.header>

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-indigo-500/10 to-violet-500/25 blur-xl" />
            <div className="relative flex aspect-[4/4.4] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1020] shadow-2xl">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(99,102,241,0.16),transparent_45%)]" />
              <div className="relative flex h-14 shrink-0 items-center justify-between border-b border-white/[0.08] px-4 sm:px-5">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-2 rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-slate-400">
                  <Code2 className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                  <span>page.jsx</span>
                </div>
                <Braces className="h-4 w-4 text-indigo-300/70" aria-hidden="true" />
              </div>

              <div className="relative flex flex-1 items-center overflow-hidden px-3 py-5 sm:px-5 sm:py-7">
                <div className="w-7 shrink-0 select-none pr-2 text-right font-mono text-[10px] leading-[2.15] text-slate-600 sm:w-9 sm:text-xs" aria-hidden="true">
                  {Array.from({ length: 12 }, (_, i) => <div key={i}>{i + 1}</div>)}
                </div>
                <div className="min-w-0 border-l border-white/[0.06] pl-3 font-mono text-[10px] leading-[2.15] sm:pl-5 sm:text-xs" aria-label="Decorative React code illustration">
                  <div><span className="text-violet-300">import</span> <span className="text-cyan-200">React</span> <span className="text-violet-300">from</span> <span className="text-emerald-300">&apos;react&apos;</span>;</div>
                  <div className="mt-2"><span className="text-violet-300">const</span> <span className="text-sky-200">Experience</span> = () <span className="text-violet-300">=&gt;</span> &#123;</div>
                  <div className="pl-3 sm:pl-5"><span className="text-violet-300">return</span> (</div>
                  <div className="pl-6 sm:pl-10"><span className="text-rose-300">&lt;main</span> <span className="text-amber-200">className</span>=<span className="text-emerald-300">&quot;beautiful-ui&quot;</span><span className="text-rose-300">&gt;</span></div>
                  <div className="pl-9 text-slate-400 sm:pl-14">Ideas, thoughtfully built</div>
                  <div className="pl-6 sm:pl-10"><span className="text-rose-300">&lt;/main&gt;</span></div>
                  <div className="pl-3 sm:pl-5">);</div>
                  <div>&#125;;</div>
                  <div className="mt-2"><span className="text-violet-300">export default</span> <span className="text-sky-200">Experience</span>;</div>
                </div>
              </div>

              <div className="relative flex shrink-0 items-center justify-between border-t border-white/[0.08] px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Building for the web
                </div>
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">React · UI · Code</span>
              </div>
            </div>
            <div className="absolute -right-2 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/90 px-3.5 py-2 text-xs font-medium text-slate-200 shadow-lg backdrop-blur sm:-right-5 sm:top-9 sm:px-4">
              <Code2 className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
              Frontend Developer
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:py-5"
          >
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              I&apos;m a frontend developer who enjoys bringing ideas to life on the web. I combine thoughtful design with modern frontend development to create experiences that are welcoming, responsive, and easy to use.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              I pay attention to the details—from the way a page adapts to different screens to the small interactions that make it feel complete.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <li key={strength} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200">
                    <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {strength}
                </li>
              ))}
            </ul>

            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02] hover:shadow-indigo-500/35"
            >
              See my projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
