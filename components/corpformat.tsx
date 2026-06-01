"use client"

import { motion } from "framer-motion"
import { 
  ArrowUpRight, Users, Trophy, Brain, Coffee, Presentation 
} from "lucide-react"

export default function CorporateExperiencesCompact() {
  const cyan = "#0ea5e9"

const experiences = [
  {
    title: "Strategic Workshops",
    tag: "Module 01",
    desc: "Interactive workshops designed to sharpen strategic thinking, improve decision-making abilities, and develop planning techniques through real-world chess-inspired exercises and corporate problem-solving activities.",
    icon: <Presentation size={20} />,
    image: "/comp.png"
  },
  {
    title: "Team Challenges",
    tag: "Module 02",
    desc: "Engaging group-based chess and wellness challenges that encourage collaboration, communication, leadership, and team coordination in a fun and competitive environment.",
    icon: <Users size={20} />,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800"
  },
  {
    title: "Company Tournaments",
    tag: "Module 03",
    desc: "Premium in-house chess tournaments and branded corporate events designed to strengthen workplace culture, employee engagement, and healthy competition among teams.",
    icon: <Trophy size={20} />,
    image: "company.png"
  },
  {
    title: "Executive Sessions",
    tag: "Module 04",
    desc: "Focused leadership sessions tailored for executives and managers to improve cognitive performance, mental resilience, strategic foresight, and high-pressure decision-making skills.",
    icon: <Brain size={20} />,
    image: "/exe.png"
  },
  {
    title: "Social Chess Events",
    tag: "Module 05",
    desc: "Casual and wellness-focused social gatherings that combine chess, networking, mindfulness, and interactive activities to create a relaxed yet intellectually stimulating atmosphere.",
    icon: <Coffee size={20} />,
    image: "/plank1.png"
  }
]

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-5">
            <span className="bg-white px-6 py-1.5 rounded-full text-[#1a365d] text-[9px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              Operational Modules
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
            Corporate <span style={{ color: cyan }}>Experiences.</span>
          </h2>
        </div>

        {/* 3+2 COMPACT GRID SYSTEM */}
        <div className="space-y-6">
          
          {/* ROW 1: 3 CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.slice(0, 3).map((exp, i) => (
              <ModuleCard key={i} exp={exp} delay={i * 0.1} />
            ))}
          </div>

          {/* ROW 2: 2 CARDS (Centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {experiences.slice(3, 5).map((exp, i) => (
              <ModuleCard key={i + 3} exp={exp} delay={i * 0.1 + 0.3} />
            ))}
          </div>

        </div>

        {/* FOOTER ROI NOTE */}
        <div className="mt-12 text-center">
           <p className="text-slate-300 font-bold uppercase tracking-[0.4em] text-[9px]">
             Custom calibrated for <span className="text-[#1a365d]">Corporate ROI</span> • Strategic Lab
           </p>
        </div>
      </div>
    </section>
  )
}

function ModuleCard({ exp, delay }: { exp: any, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative h-[460px] rounded-[45px] bg-sky-500 p-7 flex flex-col justify-between overflow-hidden shadow-[0_15px_50px_rgba(14,165,233,0.15)] group border border-sky-400"
    >
      {/* TECHNICAL DOT GRID */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />

      {/* TOP CONTENT */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-5">
          <span className="text-white/60 text-[9px] font-black uppercase tracking-[0.3em]">
            {exp.tag}
          </span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white transition-transform group-hover:rotate-45">
             <ArrowUpRight size={16} />
          </div>
        </div>
        
        <h3 className="text-xl font-[1000] text-white uppercase tracking-tight leading-tight mb-3">
          {exp.title}
        </h3>
        <p className="text-white/80 text-[13px] font-bold leading-relaxed">
          {exp.desc}
        </p>
      </div>

      {/* BOTTOM VISUAL (Compact Height) */}
      <div className="relative z-10 h-[40%] w-full">
        <div className="absolute inset-0 rounded-[30px] overflow-hidden border-[3px] border-white/10 shadow-xl">
          <img 
            src={exp.image} 
            alt={exp.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-[#1a365d]/20 group-hover:bg-transparent transition-all" />
        </div>
        
        {/* FLOATING BRAND ICON */}
        <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-xl bg-white text-[#1a365d] flex items-center justify-center shadow-2xl z-20">
           {exp.icon}
        </div>
      </div>

      {/* AMBIENT GLOW */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none" />
    </motion.div>
  )
}