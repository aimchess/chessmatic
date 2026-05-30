"use client"

import { motion } from "framer-motion"
import { 
  User, Users, Coffee, Trophy, 
  Sparkles, Building2, ArrowRight
} from "lucide-react"

export default function TrainingFormatsGrid() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const formats = [
    {
      id: "PRT-01",
      title: "1-on-1 Coaching",
      tag: "PRIVATE LAB",
      desc: "Deep-dive improvement plans tailored to your specific cognitive bottlenecks.",
      icon: <User size={20} />,
      color: "bg-blue-600",
      outcome: "Decision Precision",
      val: "100%"
    },
    {
      id: "PRT-02",
      title: "Group Classes",
      tag: "SYNERGY SESSIONS",
      desc: "Collaborative learning. Master tactics while engaging with a high-performing peer group.",
      icon: <Users size={20} />,
      color: "bg-sky-500",
      outcome: "Tactical Logic",
      val: "85%"
    },
    {
      id: "PRT-03",
      title: "Casual Nights",
      tag: "SOCIAL PROTOCOL",
      desc: "Relaxed community sessions. Zero pressure, pure strategy, and elite networking.",
      icon: <Coffee size={20} />,
      color: "bg-amber-500",
      outcome: "Social Capital",
      val: "Elite"
    },
    {
      id: "PRT-04",
      title: "Competitive",
      tag: "PERFORMANCE",
      desc: "High-intensity tournament preparation, deep theory, and psychological endurance.",
      icon: <Trophy size={20} />,
      color: "bg-rose-500",
      outcome: "Tournament ROI",
      val: "Maximum"
    },
    {
      id: "PRT-05",
      title: "Hybrid Wellness",
      tag: "NEURO-FUSION",
      desc: "The signature fusion: Chess + mindfulness + plank-chess. Training the mind and body as one.",
      icon: <Sparkles size={20} />,
      color: "bg-emerald-500",
      outcome: "Core Stability",
      val: "95%"
    },
    {
      id: "PRT-06",
      title: "Corporate Labs",
      tag: "B2B SOLUTIONS",
      desc: "Custom facilitation for teams focused on leadership, communication, and culture.",
      icon: <Building2 size={20} />,
      color: "bg-[#1a365d]",
      outcome: "Team Synergy",
      val: "Scalable"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white font-sans px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 sm:px-8 py-1.5 rounded-full text-[#1a365d] text-[9px] sm:text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              Engagement Channels
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-3xl md:text-6xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase"
          >
            Training <span style={{ color: cyan }}>Protocols.</span>
          </motion.h2>
        </div>

        {/* RESPONSIVE 3-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {formats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col h-full bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:border-sky-200 transition-all duration-500"
            >
              {/* TOP: HEADER & ID */}
              <div className="flex justify-between items-start mb-6 md:mb-8">
                 <div className={`${item.color} w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                 </div>
                 <span className="text-slate-300 text-[9px] md:text-[10px] font-black tracking-widest">{item.id}</span>
              </div>

              {/* MIDDLE: CONTENT */}
              <div className="flex-1 space-y-3 md:space-y-4">
                <span className="text-sky-500 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em]">{item.tag}</span>
                <h3 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight leading-none">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* BOTTOM: SYSTEM OUTCOME */}
              <div className="mt-8 md:mt-10 pt-4 md:pt-6 border-t border-slate-50">
                 <div className="flex justify-between items-end mb-3 px-1">
                    <div className="flex flex-col">
                       <span className="text-slate-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest leading-none">Protocol Outcome</span>
                       <span className="text-[#1a365d] text-[11px] md:text-xs font-black italic mt-1">{item.outcome}</span>
                    </div>
                    <div className="flex items-baseline gap-0.5">
                       <span className="text-[#1a365d] text-base md:text-lg font-black">{item.val}</span>
                    </div>
                 </div>
                 
                 {/* Technical Progress Bar */}
                 <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className={`h-full ${item.color} opacity-40`}
                    />
                    <div className="absolute right-0 top-0 h-full w-4 bg-white/40 skew-x-12" />
                 </div>

                 {/* Action indicator */}
                 <div className="mt-4 md:mt-6 flex justify-end">
                    <div className="p-2 rounded-full bg-slate-50 text-slate-300 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-sm">
                       <ArrowRight size={14} className="md:w-4 md:h-4" />
                    </div>
                 </div>
              </div>

              {/* TECHNICAL DOT GRID OVERLAY (Subtle) */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.05]" 
                   style={{ backgroundImage: `radial-gradient(${navy} 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM PHILOSOPHY LINE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center px-4"
        >
           <p className="text-slate-300 font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px]">
             Customized operational tracks available • <span className="text-[#1a365d]">The Lab Standard</span>
           </p>
        </motion.div>

      </div>
    </section>
  )
}