"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Facebook, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
const socials = [{ icon: Github, href: siteConfig.socials.github, label: "GitHub" }, { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" }, { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" }, { icon: Facebook, href: siteConfig.socials.facebook, label: "Facebook" }];
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSent(true); setForm({ name: "", email: "", subject: "", message: "" }); setTimeout(() => setSent(false), 4000); }, 900); };
  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300";
  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-200 mb-4 sm:text-base">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Let&apos;s work <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">together</span></h2>
          <p className="mt-5 text-gray-400 text-base sm:text-lg leading-relaxed">Have a project in mind or just want to say hi? Drop me a message and I&apos;ll get back to you soon.</p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="lg:col-span-2 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white mb-4">Get in touch</h3>
              <div className="flex flex-col gap-4">
                <a href={siteConfig.socials.email} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/40 transition-colors"><Mail className="w-4 h-4 text-cyan-400" /></div>
                  <div><p className="text-xs text-gray-500">Email</p><p className="text-sm">{siteConfig.email}</p></div>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"><MapPin className="w-4 h-4 text-indigo-400" /></div>
                  <div><p className="text-xs text-gray-500">Location</p><p className="text-sm">{siteConfig.location}</p></div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white mb-4">Follow me</h3>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (<a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:border-cyan-400/40 hover:scale-110 transition-all duration-300"><Icon className="w-5 h-5" /></a>))}
              </div>
            </div>
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} onSubmit={handleSubmit} className="lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2"><label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label><input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} /></div>
              <div className="flex flex-col gap-2"><label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label><input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} /></div>
            </div>
            <div className="flex flex-col gap-2"><label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label><input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="What's this about?" className={inputClass} /></div>
            <div className="flex flex-col gap-2"><label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label><textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} placeholder="Tell me about your project..." className={`${inputClass} resize-none`} /></div>
            <button type="submit" disabled={loading} className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300">
              {loading ? (<><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>) : sent ? (<><CheckCircle className="w-5 h-5" /> Sent! I&apos;ll reply soon.</>) : (<>Send Message <Send className="w-4 h-4" /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
