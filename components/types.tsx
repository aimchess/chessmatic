"use client"

import { motion } from "framer-motion"
import { Zap, Users, Building2, Timer, Trophy, ShieldCheck, Target } from "lucide-react"

export default function PlankChessFormats() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const formats = [
    {
      id: "MODE 01",
      title: "1v1 Plank Blitz",
      category: "Competitive",
      icon: <Zap size={24} className="text-amber-500" />,
      desc: "The ultimate test of focus. 3-minute blitz games where your physical endurance directly impacts your clock.",
      specs: [
        "High-intensity 3min Blitz",
        "Physical drop = Time penalty",
        "Real-time tactical pressure",
        "Ranked leaderboard entry"
      ],
      outcome: "Decision Velocity",
      color: "border-amber-100"
    },
    {
      id: "MODE 02",
      title: "Team Relay Challenge",
      category: "Collaborative",
      icon: <Users size={24} className="text-sky-500" />,
      desc: "Synchronized strategy. Teams rotate between active chess play and physical planking rotations.",
      specs: [
        "Rotational team play",
        "Shared strategic endurance",
        "Communication under stress",
        "Ideal for social bonding"
      ],
      outcome: "Team Synergy",
      color: "border-sky-100"
    },
    {
      id: "MODE 03",
      title: "Corporate Workshop",
      category: "Strategic",
      icon: <Building2 size={24} className="text-[#1a365d]" />,
      desc: "A fully facilitated experience designed for modern HR wellness and leadership development initiatives.",
      specs: [
        "Professional Warm-up protocol",
        "Guided tactical sessions",
        "Metric-based Leaderboard",
        "Reflection & Cooldown"
      ],
      outcome: "Leadership ROI",
      color: "border-slate-200"
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED PILL HEADING */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6">
            <span className="bg-white px-8 py-2 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              Engagement Protocols
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
            Challenge <span style={{ color: cyan }}>Formats.</span>
          </h2>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {formats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-[45px] p-10 border-2 ${item.color} shadow-[0_15px_45px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:border-sky-200 transition-all duration-500 group relative flex flex-col h-full`}
            >
              {/* OPERATION ID TAG */}
              <div className="absolute top-8 right-10">
                 <span className="text-slate-300 text-[10px] font-black tracking-widest">{item.id}</span>
              </div>

              {/* ICON & CATEGORY */}
              <div className="mb-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                   {item.icon}
                </div>
                <span className="text-sky-500 text-[9px] font-black uppercase tracking-[0.3em]">{item.category}</span>
                <h3 className="text-2xl font-[1000] text-[#1a365d] tracking-tight mt-2">{item.title}</h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                {item.desc}
              </p>

              {/* PROTOCOL SPECS */}
              <div className="space-y-4 mb-10">
                 <p className="text-[#1a365d] text-[10px] font-black uppercase tracking-widest opacity-30">Engagement Protocol</p>
                 <div className="space-y-3">
                    {item.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                         <span className="text-[#1a365d] text-[13px] font-bold tracking-tight">{spec}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* DATA FOOTER */}
              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <Target size={14} className="text-sky-400" />
                    <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest">Target Outcome</span>
                 </div>
                 <span className="text-[#1a365d] text-xs font-black italic">{item.outcome}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION CTA (Optional) */}
        <div className="mt-16 text-center">
           <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
             Customized formats available for <span className="text-[#1a365d]">Private Events</span> & <span className="text-[#1a365d]">Retreats</span>
           </p>
        </div>

      </div>
    </section>
  )
}