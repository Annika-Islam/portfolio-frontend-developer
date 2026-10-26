"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook, Mail, Download, ArrowRight, Code2, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
const socials = [{ icon: Github, href: siteConfig.socials.github, label: "GitHub" }, { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" }, { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" }, { icon: Facebook, href: siteConfig.socials.facebook, label: "Facebook" }, { icon: Mail, href: siteConfig.socials.email, label: "Email" }];
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-gray-200">
                <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" /></span>
                Available for Work
              </span>
            </motion.div>
            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">{siteConfig.name}</span><br />
              <span className="text-gray-200">I build </span><span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">performant web apps</span>.
            </motion.h1>
            <motion.p variants={item} className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">{siteConfig.tagline} I craft pixel-perfect, accessible, and lightning-fast interfaces with React, Next.js and Tailwind CSS — turning ideas into delightful digital experiences.</motion.p>
            <motion.div variants={item} className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300">View Projects <ArrowRight className="w-4 h-4" /></a>
              <a href={siteConfig.resumeUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md"><Download className="w-4 h-4" /> Download CV</a>
            </motion.div>
            <motion.div variants={item} className="flex items-center gap-3 pt-2">
              <span className="text-sm text-gray-500 mr-1">Find me on</span>
              {socials.map(({ icon: Icon, href, label }) => (<a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:border-cyan-400/40 hover:scale-110 transition-all duration-300"><Icon className="w-4 h-4" /></a>))}
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-30 blur-2xl animate-pulse-slow" />
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-md shadow-2xl">
                {siteConfig.profileImage ? (<img src={siteConfig.profileImage} alt={siteConfig.name} className="w-full h-full object-cover" />) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-500 flex items-center justify-center text-5xl font-extrabold text-white shadow-xl shadow-indigo-500/40">A</div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm"><Sparkles className="w-4 h-4 text-cyan-400" /> Frontend Developer</div>
                  </div>
                )}
              </motion.div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-4 -left-4 sm:-left-8 px-3 py-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-lg flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" /><span className="text-xs font-medium text-gray-200">React & Next.js</span>
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-4 -right-4 sm:-right-8 px-3 py-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /><span className="text-xs font-medium text-gray-200">Available for work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
