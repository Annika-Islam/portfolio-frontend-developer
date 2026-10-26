"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#0a0a0f]/70 border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
            A
          </span>
          <span className="text-lg sm:text-xl font-bold tracking-tight">
            Annika{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Akter
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
          >
            Let&apos;s Talk
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile slide-over */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#0f0f1a] border-l border-white/10 z-50 md:hidden flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-bold">
                  Annika{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    Akter
                  </span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/30"
              >
                Let&apos;s Talk
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}