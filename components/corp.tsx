"use client"

import { motion } from "framer-motion"
import { 
  ShieldCheck, Zap, Target, Users, 
  Timer, FileText, Gift, Presentation, 
  ChevronRight, Award 
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CorporateEventsGrid() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const tiers = [
    {
      id: "PRO-01",
      title: "Opening Gambit",
      focus: "Light Team Building",
      duration: "1.5 - 2 Hours",
      capacity: "Up to 30 Pax",
      desc: "Best for lunch-and-learns or icebreakers. Uses chess as a metaphor for corporate decision-making.",
      inclusions: [
        "Corporate Strategy Keynote",
        "Hand & Brain Mini-Games",
        "Desk Ergonomics Session"
      ],
      deliverable: "Digital Wellness Guide",
      highlight: false
    },
    {
      id: "PRO-02",
      title: "Middle-Game Strategy",
      focus: "Departmental Alignment",
      duration: "Half-Day (4 Hours)",
      capacity: "15 - 40 Pax",
      desc: "Our signature retreat. Blends Swiss-system tournaments with grandmaster breathing protocols.",
      inclusions: [
        "'Blind Spot' Team Tournament",
        "Tactical Stress-Test Workshop",
        "Facilitated Puzzle Social Hour"
      ],
      deliverable: "Team Dynamic Analysis Report",
      highlight: true // Anchored Tier
    },
    {
      id: "PRO-03",
      title: "Grandmaster Executive",
      focus: "C-Suite Performance",
      duration: "Full-Day / Overnight",
      capacity: "5 - 15 Pax",
      desc: "Elite leadership alignment. Deep-dive risk profiling through simultaneous Master exhibitions.",
      inclusions: [
        "Simul Challenge vs Master",
        "Peak Performance Coaching",
        "Premium Mobility Recovery"
      ],
      deliverable: "Executive Wooden Gift Boxes",
      highlight: false
    }
  ]

  return (
    <section className="py-24 bg-white font-sans overflow-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-6 py-1.5 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              Event Protocols
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
            Corporate <span style={{ color: cyan }}>Bonding.</span>
          </h2>
          <p className="mt-6 text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Stop doing trust falls. Build high-performing teams through the ultimate game of strategic logic and physical composure.
          </p>
        </div>

        {/* 2. THREE-TIER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`
                group relative flex flex-col rounded-[45px] p-8 md:p-12 border transition-all duration-500
                ${pkg.highlight 
                  ? "bg-[#1a365d] border-[#1a365d] shadow-[0_30px_80px_rgba(26,54,93,0.25)] lg:scale-105 z-10 text-white" 
                  : "bg-white border-slate-100 shadow-xl text-[#1a365d]"
                }
              `}
            >
              {/* OPERATIONAL STATUS TAG */}
              <div className="flex justify-between items-start mb-10">
                <div className="space-y-1">
                  <span className={`${pkg.highlight ? 'text-sky-400' : 'text-sky-500'} text-[10px] font-black uppercase tracking-widest`}>
                    {pkg.id} • {pkg.focus}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-[1000] uppercase italic leading-none">{pkg.title}</h3>
                </div>
                {pkg.highlight && (
                   <div className="bg-sky-500 text-white p-2 rounded-xl shadow-lg">
                      <Zap size={18} fill="white" />
                   </div>
                )}
              </div>

              {/* TECHNICAL SPECS BAR */}
              <div className={`flex gap-6 mb-10 pb-6 border-b ${pkg.highlight ? 'border-white/10' : 'border-slate-50'}`}>
                 <div className="flex items-center gap-2">
                    <Timer size={14} className={pkg.highlight ? 'text-sky-400' : 'text-slate-400'} />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{pkg.duration}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Users size={14} className={pkg.highlight ? 'text-sky-400' : 'text-slate-400'} />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{pkg.capacity}</span>
                 </div>
              </div>

              {/* EXPERIENCE INCLUSIONS */}
              <div className="space-y-8 flex-1">
                <div className="space-y-4">
                  <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${pkg.highlight ? 'text-white/40' : 'text-slate-300'}`}>Protocol Inclusions</span>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ShieldCheck size={16} className="text-sky-500 shrink-0 mt-0.5" />
                        <span className={`text-[13px] font-bold leading-tight ${pkg.highlight ? 'text-slate-300' : 'text-slate-500'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DELIVERABLE HIGHLIGHT */}
                <div className={`p-5 rounded-[25px] border ${pkg.highlight ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
                   <div className="flex items-center gap-2 mb-2">
                      <FileText size={12} className="text-sky-500" />
                      <span className={`text-[9px] font-black uppercase tracking-widest ${pkg.highlight ? 'text-white/40' : 'text-slate-400'}`}>Key Deliverable</span>
                   </div>
                   <p className="text-sm font-black italic">{pkg.deliverable}</p>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <Button 
                style={{ backgroundColor: pkg.highlight ? cyan : navy }}
                className="w-full h-14 rounded-full mt-12 text-white font-[1000] uppercase tracking-widest text-[11px] shadow-2xl transition-all hover:scale-[1.02] active:scale-95 group/btn"
              >
                Request Proposal
                <ChevronRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>

              {/* TECHNICAL DOT GRID (Only in Navy Card) */}
              {pkg.highlight && (
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                     style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
              )}
            </motion.div>
          ))}
        </div>

        {/* 3. MARKETING QUOTE FOOTER */}
        <div className="mt-20 text-center">
           <div className="inline-flex items-center gap-4 px-10 py-6 rounded-full bg-[#f8fafc] border border-slate-100 relative overflow-hidden group max-w-4xl mx-auto">
              <Presentation size={24} className="text-sky-500 shrink-0" />
              <p className="text-[#1a365d] text-sm md:text-lg font-bold italic leading-relaxed">
                “Teach your team how to calculate risk, communicate under pressure, and manage workplace stress through the ultimate game of strategy.”
              </p>
           </div>
        </div>

      </div>
    </section>
  )
}