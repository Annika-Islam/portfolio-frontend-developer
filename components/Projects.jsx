"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
const projects = [
  {
    title: "FitLog — Fitness Tracker",
    description: "A fitness tracking web app to log workouts, monitor progress, and stay consistent with your health goals through an intuitive, responsive interface.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
    gradient: "from-cyan-500/30 via-indigo-500/20 to-purple-500/30",
    accent: "cyan",
    screenshot: "/prt_1.png",
    live: "https://my-6th-asg-fitlog.vercel.app",
    repo: "https://github.com/Annika-Islam/my-6th-asg-fitlog"
  },
  {
    title: "Dev Stack Builder",
    description: "An interactive tool that lets developers build and preview their ideal tech stack, combining modern frontend libraries into a cohesive, deployable setup.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Netlify"],
    gradient: "from-indigo-500/30 via-purple-500/20 to-pink-500/30",
    accent: "indigo",
    screenshot: "/prt-2.png",
    live: "https://react-dev-stack-annika2004.netlify.app/",
    repo: "https://github.com/Annika-Islam/dev-stack-builder"
  },
  {
    title: "Interactive Web Application",
    description: "A dynamic, responsive web application showcasing modern UI patterns, component-driven architecture, and seamless user experience across devices.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    gradient: "from-purple-500/30 via-pink-500/20 to-cyan-500/30",
    accent: "purple",
    screenshot: "/prt-3.png",
    live: "https://annika-882v.vercel.app",
    repo: "https://github.com/Annika-Islam/my-assgement-7"
  }
];
const accentMap = { cyan: "text-cyan-400", indigo: "text-indigo-400", purple: "text-purple-400" };
export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 mb-4">Featured Projects</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Things I&apos;ve <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">built</span></h2>
          <p className="mt-5 text-gray-400 text-base sm:text-lg leading-relaxed">A selection of projects showcasing my skills in frontend development, UI design, and performance.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -8 }} className="group flex flex-col rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-300">
              <div className={`relative h-48 sm:h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <Image src={project.screenshot} alt={`${project.title} project preview`} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div className={`text-2xl font-extrabold ${accentMap[project.accent]} drop-shadow`}>{project.title.charAt(0)}</div>
                  <p className="text-[10px] text-gray-200/80 uppercase tracking-widest">Live Preview</p>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors [overflow-wrap:anywhere]">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (<span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300">{tag}</span>))}
                </div>
                <div className="flex items-center gap-3">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity">Live Demo <ExternalLink className="w-4 h-4" /></a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-colors"><Github className="w-4 h-4" /> GitHub</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
