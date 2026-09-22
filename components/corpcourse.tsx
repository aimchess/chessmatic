"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Trophy, Dumbbell, Users, Target, ShieldCheck, Zap, 
  ChevronRight, Laptop, User, Building2, Layers
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OperationalOfferings() {
  const [activeTab, setActiveTab] = useState<"tracks" | "formats">("tracks")
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const tracks = [
    {
      tier: "Track 01",
      title: "Chess + PT",
      focus: "Integrated Dual-Task Protocol",
      desc: "Our signature high-performance fusion combining strategic chess coaching with functional physical training (PT).",
      chess: ["Tactical calculation & opening mastery", "Endgame technique & master game analysis"],
      fitness: ["Functional core stability & posture", "Personalized fitness conditioning & stamina"],
      highlight: true
    },
    {
      tier: "Track 02",
      title: "Chess Separate",
      focus: "Pure Strategic Mastery",
      desc: "Structured, adult-focused chess instruction for beginners through advanced tournament players.",
      chess: ["Customized opening repertoire", "Positional understanding & calculation", "Tournament preparation & game review"],
      fitness: ["Available in Private, Online, and Group formats"],
      highlight: false
    },
    {
      tier: "Track 03",
      title: "PT Separate",
      focus: "Personal Physical Training",
      desc: "Dedicated 1-on-1 and small group personal training designed for strength, mobility, and endurance.",
      chess: ["Custom workout programming", "Form correction & injury prevention"],
      fitness: ["Core stability & cardiovascular health", "Progressive strength & stamina goals"],
      highlight: false
    }
  ]

  const formats = [
    {
      id: "01",
      title: "Group Coaching Workshops",
      icon: <Users className="w-5 h-5 text-sky-400" />,
      desc: "Interactive cohort-based sessions fostering collective growth, tactical puzzles, and collaborative peer learning.",
      features: ["Small adult-only batches", "Structured weekly curriculum", "Live tactical challenges"],
      highlight: false
    },
    {
      id: "02",
      title: "Private Lessons",
      icon: <User className="w-5 h-5 text-sky-400" />,
      desc: "1-on-1 personalized in-person coaching at our Woodlands studio calibrated specifically to your pace and goals.",
      features: ["Custom opening & tactical blueprint", "Deep personalized analysis", "Flexible in-studio scheduling"],
      highlight: true
    },
    {
      id: "03",
      title: "Online Private Lessons",
      icon: <Laptop className="w-5 h-5 text-sky-400" />,
      desc: "Direct 1-on-1 digital training sessions with screen-share board analysis, live interactive coaching, and async review.",
      features: ["Global access from home/office", "Digital study materials & PGNs", "High-efficiency time management"],
      highlight: false
    },
    {
      id: "04",
      title: "Online Group Lessons",
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      desc: "Engaging virtual group cohorts learning strategy together through interactive webinars and live digital matches.",
      features: ["Cohort discussions & sparring", "Cost-effective group dynamic", "Accessible from anywhere"],
      highlight: false
    },
    {
      id: "05",
      title: "Corporates",
      icon: <Building2 className="w-5 h-5 text-sky-400" />,
      desc: "Customized corporate workshops and executive strategy labs designed for team synergy, risk calculation, and ROI.",
      features: ["Leadership decision-making", "Departmental alignment events", "On-site or studio facilitation"],
      highlight: false
    }
  ]

  return (
    <section className="py-24 bg-white font-sans overflow-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. HEADER & TOGGLE */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-8">
            <button 
              onClick={() => setActiveTab("tracks")}
              className={`px-6 py-2 rounded-full text-[10px] font-[1000] uppercase tracking-widest transition-all ${activeTab === 'tracks' ? 'bg-[#1a365d] text-white shadow-lg' : 'text-slate-400'}`}
            >
              Our 3 Core Tracks
            </button>
            <button 
              onClick={() => setActiveTab("formats")}
              className={`px-6 py-2 rounded-full text-[10px] font-[1000] uppercase tracking-widest transition-all ${activeTab === 'formats' ? 'bg-[#1a365d] text-white shadow-lg' : 'text-slate-400'}`}
            >
              Our 5 Formats
            </button>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
            {activeTab === 'tracks' ? (
              <>Core <span style={{ color: cyan }}>Delivery Tracks.</span></>
            ) : (
              <>Focused <span style={{ color: cyan }}>Learning Formats.</span></>
            )}
          </h2>
          <p className="mt-4 text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
            {activeTab === 'tracks' 
              ? "Chess + PT • Chess Separate • PT Separate" 
              : "Private • Online • Group • Workshops • Corporates"
            }
          </p>
        </div>

        {/* 2. DYNAMIC GRID */}
        {activeTab === "tracks" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map((pkg, i) => (
              <motion.div 
                key={`track-${i}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className={`relative flex flex-col justify-between rounded-[45px] p-8 md:p-10 border transition-all duration-500 ${pkg.highlight ? 'bg-[#1a365d] border-[#1a365d] shadow-2xl scale-105 z-10 text-white' : 'bg-white border-slate-100 shadow-xl text-[#1a365d]'}`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 inset-x-0 bg-sky-500 text-center py-2 text-[9px] font-black uppercase tracking-[0.3em] text-white rounded-t-[45px]">
                    Signature Hybrid Track
                  </div>
                )}
                <div className="mb-6 pt-4">
                  <span className={`${pkg.highlight ? 'text-sky-400' : 'text-sky-500'} text-[10px] font-black uppercase tracking-widest`}>
                    {pkg.tier}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-[1000] mt-2 uppercase italic">{pkg.title}</h3>
                  <p className={`text-xs font-medium mt-2 leading-relaxed ${pkg.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                    {pkg.desc}
                  </p>
                </div>

                <div className="space-y-6 flex-1 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 opacity-60">
                      <Trophy size={14} className="text-sky-400" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Key Inclusions</span>
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.chess.map((item, idx) => (
                        <li key={idx} className={`flex items-start gap-3 text-[12px] font-bold leading-tight ${pkg.highlight ? 'text-slate-200' : 'text-slate-600'}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1 shrink-0" /> {item}
                        </li>
                      ))}
                      {pkg.fitness.map((item, idx) => (
                        <li key={`fit-${idx}`} className={`flex items-start gap-3 text-[12px] font-bold leading-tight ${pkg.highlight ? 'text-slate-200' : 'text-slate-600'}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className={`w-full h-14 rounded-full font-[1000] uppercase tracking-widest text-[11px] transition-all hover:scale-[1.02] ${pkg.highlight ? 'bg-sky-500 text-white hover:bg-white hover:text-[#1a365d]' : 'bg-[#1a365d] text-white hover:bg-sky-500'}`}>
                  Enquire for {pkg.title}
                </Button>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((fmt, i) => (
              <motion.div 
                key={`fmt-${i}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className={`relative flex flex-col justify-between rounded-[35px] p-8 border transition-all duration-300 ${fmt.highlight ? 'bg-[#1a365d] border-[#1a365d] text-white shadow-2xl' : 'bg-white border-slate-100 text-[#1a365d] shadow-lg'}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center">
                      {fmt.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">/{fmt.id}</span>
                  </div>

                  <h3 className="text-xl font-[1000] uppercase italic mb-3">{fmt.title}</h3>
                  <p className={`text-xs font-medium leading-relaxed mb-6 ${fmt.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                    {fmt.desc}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {fmt.features.map((f, idx) => (
                      <li key={idx} className={`flex items-center gap-2.5 text-xs font-bold ${fmt.highlight ? 'text-slate-200' : 'text-slate-600'}`}>
                        <div className="w-1 h-1 rounded-full bg-sky-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className={`w-full h-12 rounded-full font-[1000] uppercase tracking-widest text-[10px] transition-all ${fmt.highlight ? 'bg-sky-500 text-white hover:bg-white hover:text-[#1a365d]' : 'bg-[#1a365d] text-white hover:bg-sky-500'}`}>
                  Book {fmt.title}
                </Button>
              </motion.div>
            ))}
          </div>
        )}

        {/* 3. MARKETING FOOTER */}
        <div className="mt-16 text-center">
           <p className="text-slate-400 font-bold italic text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
             “Available across in-person and digital formats with custom scheduling for adults, executives, and organizations.”
           </p>
        </div>
      </div>
    </section>
  )
}