"use client"

import { motion } from "framer-motion"
import { Shield, RotateCcw, Trophy, Briefcase, ArrowUpRight, Target } from "lucide-react"

export default function TargetCohorts() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const cohorts = [
    {
      id: "COHORT 01",
      title: "Beginners",
      tag: "FOUNDATION",
      desc: "Never played before? We build your tactical foundation from zero with structured logic.",
      focus: "Fundamental Rules & Ethics",
      image: "/adult3.jpg",
      icon: <Shield size={18} className="text-sky-400" />
    },
    {
      id: "COHORT 02",
      title: "Returning Players",
      tag: "REACTIVATION",
      desc: "Reignite your passion. Get back into the game with modern opening theory and tactical reviews.",
      focus: "Pattern Recognition Recovery",
      image: "/adult2.jpeg",
      icon: <RotateCcw size={18} className="text-amber-400" />
    },
    {
      id: "COHORT 03",
      title: "Competitive Adults",
      tag: "PERFORMANCE",
      desc: "Optimized for tournament players. Deep dive into deep calculation, endgame mastery, and ELO growth.",
      focus: "Tournament Prep & Analysis",
      image: "/adult1.webp",
      icon: <Trophy size={18} className="text-rose-400" />
    },
    {
      id: "COHORT 04",
      title: "Corporate Pros",
      tag: "STRATEGY",
      desc: "Translating chess logic into business ROI. Use the board to sharpen executive decision-making.",
      focus: "Strategic Thinking & Logic",
      image: "/adult.webp",
      icon: <Briefcase size={18} className="text-emerald-400" />
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* CENTERED PILL HEADING */}
        <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 sm:px-6 py-1.5 rounded-full text-[#1a365d] text-[9px] sm:text-[10px] font-[1000] tracking-[0.2em] uppercase shadow-sm">
              Training Target Groups
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase"
          >
            Who the <span style={{ color: cyan }}>Lab</span> serves.
          </motion.h2>
        </div>

        {/* 2x2 BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cohorts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative min-h-[380px] md:h-[450px] rounded-[35px] md:rounded-[45px] overflow-hidden shadow-2xl bg-[#1a365d]"
            >
              {/* IMMERSIVE IMAGE BACKGROUND */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              
              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/40 to-transparent" />

              {/* TECHNICAL DOT GRID OVERLAY */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                   style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

              {/* CARD CONTENT */}
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between">
                
                {/* TOP ROW: TAGS */}
                <div className="flex justify-between items-start">
                   <div className="bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border border-white/20 flex items-center gap-2 sm:gap-3">
                      {item.icon}
                      <span className="text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest">{item.tag}</span>
                   </div>
                   <span className="text-white/30 text-[9px] sm:text-[10px] font-black tracking-[0.3em]">{item.id}</span>
                </div>

                {/* BOTTOM ROW: DATA */}
                <div className="space-y-4 sm:space-y-6">
                   <div className="space-y-2">
                      <h3 className="text-white text-3xl sm:text-4xl font-[1000] italic uppercase tracking-tighter leading-none">{item.title}</h3>
                      <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
                        {item.desc}
                      </p>
                   </div>

                   {/* DYNAMIC METRIC PILL */}
                   <div className="pt-4 sm:pt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="flex flex-col">
                         <span className="text-sky-400 text-[8px] font-black uppercase tracking-widest">Training Focus</span>
                         <span className="text-white text-[11px] sm:text-xs font-bold">{item.focus}</span>
                      </div>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#1a365d] shadow-xl group-hover:rotate-45 transition-transform shrink-0">
                         <ArrowUpRight size={18} strokeWidth={3} />
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM PHILOSOPHY LINE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex justify-center px-4"
        >
           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 border border-gray-100 text-center">
              <Target size={14} className="text-[#1a365d] shrink-0" />
              <p className="text-[#1a365d] text-[8px] sm:text-[10px] font-black uppercase tracking-widest leading-tight">
                All Sessions are <span className="text-sky-500">Custom-Calibrated</span> Based on Assessment
              </p>
           </div>
        </motion.div>

      </div>
    </section>
  )
}