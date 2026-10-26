"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  const socials = [
    { icon: Github, href: siteConfig.socials.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" },
    { icon: Mail, href: siteConfig.socials.email, label: "Email" }
  ];

  return (
    <footer className="relative border-t border-white/10 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold">
              Annika{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Akter
              </span>
            </span>
            <p className="text-sm text-gray-500">
              Frontend Developer crafting performant web apps.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {year} Annika Akter. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-gray-300">Next.js</span>,{" "}
            <span className="text-gray-300">Tailwind CSS</span> &{" "}
            <span className="text-gray-300">Framer Motion</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}