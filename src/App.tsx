import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Typewriter } from './components/Typewriter';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Terminal, 
  Shield, 
  Cpu, 
  Cloud, 
  Layers,
  ChevronRight,
  Phone,
  Globe,
  Calendar
} from "lucide-react";
import { CV_DATA } from "./constants";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="font-serif italic text-4xl md:text-5xl mb-2"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <p className="label-caps">{subtitle}</p>
    )}
  </div>
);

const SkillBadge = ({ skill }: { skill: string; key?: React.Key }) => (
  <span className="px-2 py-1 text-[10px] font-mono border border-line rounded hover:bg-ink hover:text-bg transition-colors cursor-default whitespace-nowrap">
    {skill}
  </span>
);

const PROFILE_PHOTO_URL = "src/profile.png";

export default function App() {
  const [activeExpIdx, setActiveExpIdx] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Header / Hero */}
      <header className="border-b border-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8 p-8 md:p-16 grid-line-v">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-6">
                {CV_DATA.name}
              </h1>
              <div className="flex flex-wrap gap-4 items-center mb-8">
                <span className="px-3 py-1 bg-ink text-bg text-sm font-mono tracking-widest">
                  <Typewriter 
                    text={CV_DATA.title}
                    speed={60}
                    className="font-bold"
                  />
                </span>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed max-w-2xl opacity-70 font-light text-balance">
                {CV_DATA.summary}
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-4 p-8 md:p-16 lg:p-24 flex flex-col justify-between bg-white/40 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-12"
            >
              <div className="relative inline-block">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border border-ink/10 shadow-2xl relative z-10 bg-accent/5 p-4">
                  <img 
                    src={PROFILE_PHOTO_URL} 
                    alt={CV_DATA.name}
                    className="w-full h-full object-contain scale-150"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${CV_DATA.name}&backgroundColor=b6e3f4`;
                    }}
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-0 animate-pulse" />
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="label-caps">Coordinates</p>
                  <div className="flex items-center gap-3 text-sm font-medium opacity-80">
                    <MapPin size={16} className="text-accent" />
                    <span>{CV_DATA.location}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="label-caps">Communicate</p>
                  <div className="space-y-4">
                    <a href={`mailto:${CV_DATA.email}`} className="flex items-center gap-3 hover:text-accent transition-all group">
                      <div className="p-2 border border-line rounded-full group-hover:bg-ink group-hover:text-bg transition-colors">
                        <Mail size={18} />
                      </div>
                      <span className="data-value text-xs">{CV_DATA.email}</span>
                    </a>
                    <a href={`tel:${CV_DATA.phone}`} className="flex items-center gap-3 hover:text-accent transition-all group">
                      <div className="p-2 border border-line rounded-full group-hover:bg-ink group-hover:text-bg transition-colors">
                        <Phone size={18} />
                      </div>
                      <span className="data-value text-xs">{CV_DATA.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="pt-12 mt-12 border-t border-line/40">
              <div className="flex gap-6 mb-6">
                <a href={CV_DATA.links.linkedin} target="_blank" rel="noreferrer" className="p-3 border border-line rounded-lg hover:bg-ink hover:text-bg transition-all hover:-translate-y-1">
                  <Linkedin size={20} />
                </a>
                <a href={CV_DATA.links.github} target="_blank" rel="noreferrer" className="p-3 border border-line rounded-lg hover:bg-ink hover:text-bg transition-all hover:-translate-y-1">
                  <Github size={20} />
                </a>
                <a href={CV_DATA.links.xing} target="_blank" rel="noreferrer" className="p-3 border border-line rounded-lg hover:bg-ink hover:text-bg transition-all hover:-translate-y-1">
                  <Globe size={20} />
                </a>
              </div>
              <p className="text-[10px] font-mono leading-relaxed opacity-40 uppercase tracking-widest">
                Permit: German Residence<br />
                Ready for Dispatch: Immediate
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* Expertise Section - Bento Grid */}
        <section className="p-8 md:p-16 lg:p-24 border-b border-line">
          <SectionHeader title="Expertise" subtitle="Technological Matrix" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CV_DATA.skills.map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="p-8 border border-line rounded-2xl bg-white/30 backdrop-blur-sm group transition-all"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-ink text-bg rounded-xl group-hover:bg-accent transition-colors">
                    {cat.category.includes("CAE") && <Cpu size={24} />}
                    {cat.category.includes("CAD") && <Layers size={24} />}
                    {cat.category.includes("Expertise") && <Shield size={24} />}
                  </div>
                  <h4 className="font-serif italic text-2xl">{cat.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-[11px] font-mono border border-line rounded-full group-hover:border-accent transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section - Vertical Timeline with Interactive Selection */}
        <section className="p-8 md:p-16 lg:p-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <SectionHeader title="Timeline" subtitle="Professional Trajectory" />
                <div className="space-y-2">
                  {CV_DATA.experience.map((exp, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setActiveExpIdx(idx)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all text-left group ${
                        activeExpIdx === idx ? 'bg-ink text-bg shadow-xl scale-105' : 'hover:bg-white/40'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full shrink-0 transition-colors ${
                        activeExpIdx === idx ? 'bg-accent shadow-[0_0_12px_rgba(242,125,38,0.8)]' : 'bg-ink/20 group-hover:bg-accent/40'
                      }`} />
                      <div className="flex flex-col">
                        <span className={`text-[10px] font-mono uppercase tracking-widest transition-opacity ${
                          activeExpIdx === idx ? 'opacity-100' : 'opacity-40'
                        }`}>
                          {exp.period.split(' – ')[1] || 'Today'}
                        </span>
                        <span className={`text-sm font-serif italic truncate ${
                          activeExpIdx === idx ? 'opacity-100' : 'opacity-60'
                        }`}>
                          {exp.company}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeExpIdx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/30 backdrop-blur-xl border border-line rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                    <Calendar size={200} />
                  </div>

                  <div className="mb-12">
                    <div className="inline-flex items-center gap-3 bg-accent text-white px-4 py-2 rounded-full text-xs font-mono uppercase tracking-[0.2em] font-bold mb-8 shadow-lg shadow-accent/20">
                      <Calendar size={14} />
                      {CV_DATA.experience[activeExpIdx].period}
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-4 leading-tight">
                      {CV_DATA.experience[activeExpIdx].role}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-accent">
                      <span className="text-2xl font-serif italic">{CV_DATA.experience[activeExpIdx].company}</span>
                      <div className="w-12 h-px bg-line" />
                      <span className="text-ink/60 text-sm font-mono">{CV_DATA.experience[activeExpIdx].location}</span>
                    </div>
                  </div>

                  <ul className="space-y-8 relative z-10">
                    {CV_DATA.experience[activeExpIdx].highlights.map((h, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex gap-6 items-start group"
                      >
                        <div className="mt-2.5 w-2 h-2 rounded-full bg-accent/40 shrink-0 group-hover:bg-accent transition-all group-hover:scale-150" />
                        <p className="opacity-80 leading-relaxed text-lg md:text-xl font-light">
                          {h}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Projects Section - Horizontal Scroll or Grid */}
        <section className="p-8 md:p-16 lg:p-24 bg-ink text-bg">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <SectionHeader title="Deep Dives" subtitle="Technical Projects" />
            </div>
            <div className="flex gap-4">
              <ChevronRight size={48} className="opacity-20 rotate-180" />
              <ChevronRight size={48} className="text-accent" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-line/20 border border-line">
            {CV_DATA.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                className="p-12 bg-ink hover:bg-white/5 transition-all flex flex-col justify-between group h-full border border-line/10"
                whileHover={{ scale: 0.98 }}
              >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-xs font-mono opacity-40 uppercase tracking-widest">{project.period}</span>
                    <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  </div>
                  <h3 className="text-3xl font-serif italic mb-6 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-sm opacity-60 mb-12 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="space-y-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 border border-bg/10 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.result && (
                    <div className="pt-6 border-t border-line/20">
                      <p className="label-caps mb-2 text-bg">Impact</p>
                      <p className="text-accent font-mono text-xs">{project.result}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Info */}
        <section className="p-8 md:p-16 lg:p-24 border-b border-line">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-8">
              <SectionHeader title="Knowledge" subtitle="Education & Continuous Learning" />
              <div className="space-y-16">
                {CV_DATA.education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-8 md:items-center justify-between border-b border-line pb-8 transition-all hover:pl-4">
                    <div>
                      <h4 className="text-3xl font-bold mb-2 tracking-tight">{edu.degree}</h4>
                      <p className="text-xl font-serif italic text-ink/60">{edu.institution}</p>
                      {edu.details && <p className="text-sm mt-4 font-mono opacity-40">{edu.details}</p>}
                    </div>
                    <span className="text-2xl font-serif italic opacity-40">{edu.year.split(' – ')[1] || edu.year}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-4 p-8 bg-white/20 rounded-3xl border border-line h-fit">
              <p className="label-caps mb-8">Certifications</p>
              <div className="space-y-6">
                {CV_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className="group">
                    <p className="text-sm font-bold group-hover:text-accent transition-colors">{cert.name}</p>
                    <p className="text-[10px] uppercase font-mono opacity-40 mt-1">{cert.year}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-line">
                <p className="label-caps mb-8">Languages</p>
                <div className="space-y-4">
                  {CV_DATA.languages.map((lang, i) => (
                    <div key={i} className="flex justify-between items-center group">
                      <span className="font-bold group-hover:text-accent transition-colors">{lang.name}</span>
                      <span className="text-[10px] font-mono opacity-50">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Final Footer */}
      <footer className="p-24 text-center border-t border-line bg-white/10">
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-6xl font-serif italic font-bold tracking-tighter">
            Let's compute the <span className="text-accent">future</span> of vehicle safety.
          </h2>
          <div className="flex justify-center gap-12">
            <a href={`mailto:${CV_DATA.email}`} className="text-lg font-serif hover:text-accent transition-all hover:italic">Email</a>
            <a href={CV_DATA.links.linkedin} className="text-lg font-serif hover:text-accent transition-all hover:italic">LinkedIn</a>
            <a href={CV_DATA.links.github} className="text-lg font-serif hover:text-accent transition-all hover:italic">GitHub</a>
          </div>
          <div className="pt-24 opacity-30 text-[10px] font-mono uppercase tracking-[0.8em]">
            Atul Bhardwaj &copy; {new Date().getFullYear()} — Optimized Performance
          </div>
        </div>
      </footer>
    </div>
  );
}
