"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Trophy, Dumbbell, Brain, Timer, 
  Users, Target, ShieldCheck, Zap, 
  ChevronRight, FileText, Gift, Presentation
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"individual" | "corporate">("individual")
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const individualPackages = [
    {
      tier: "Tier 1",
      title: "The Tactical Executive",
      focus: "Foundation & Routine",
      price: "$199 - $299",
      chess: ["2x 60-min private lessons/mo", "Custom opening repertoire base", "Weekly tactical puzzles"],
      fitness: ["Custom monthly workout plan", "Bi-weekly progress tracking"],
      wellness: ["Guided mindfulness audio", "Focus/Calming protocols"],
      highlight: false
    },
    {
      tier: "Tier 2",
      title: "The Mastermind Elite",
      focus: "Optimization & Strategy",
      price: "$450 - $599",
      chess: ["4x 60-min private lessons/mo", "Deep-dive game analysis", "Monthly academy tournaments"],
      fitness: ["2x 45-min virtual PT sessions/mo", "Weekly form checks via video"],
      wellness: ["Mindset & Stress coaching call", "Ergonomic posture assessment"],
      highlight: true
    },
    {
      tier: "Tier 3",
      title: "The Grandmaster Lifestyle",
      focus: "Peak Performance",
      price: "$999+",
      chess: ["Unlimited / 8x lessons/mo", "Personalized tournament prep", "24/7 async review (Discord)"],
      fitness: ["4x 45-min 1-on-1 PT sessions", "Sleep & activity tracking sync"],
      wellness: ["Bi-weekly executive coaching", "Nutritional cognitive guide"],
      highlight: false
    }
  ]

  const corporatePackages = [
    {
      tier: "Tier 1",
      title: "Opening Gambit",
      focus: "Light Team Building",
      duration: "1.5 - 2 Hours",
      capacity: "Up to 30 pax",
      inclusions: ["Corporate Strategy Keynote", "Interactive Chess Mini-Games", "Desk Ergonomics session"],
      deliverable: "Digital strategy & wellness guide",
      highlight: false
    },
    {
      tier: "Tier 2",
      title: "Middle-Game Strategy",
      focus: "Departmental Alignment",
      duration: "Half-Day (4 Hours)",
      capacity: "15 - 40 pax",
      inclusions: ["'Blind Spot' Team Tournament", "The Stress Test workshop", "Facilitated puzzle social hour"],
      deliverable: "Team Dynamic Analysis Report",
      highlight: true
    },
    {
      tier: "Tier 3",
      title: "Grandmaster Executive",
      focus: "C-Suite Alignment",
      duration: "Full-Day / Overnight",
      capacity: "5 - 15 pax",
      inclusions: ["The Simul Challenge vs Master", "Peak Performance Coaching", "Premium mobility recovery"],
      deliverable: "Executive Wooden Gift Boxes",
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
              onClick={() => setActiveTab("individual")}
              className={`px-6 py-2 rounded-full text-[10px] font-[1000] uppercase tracking-widest transition-all ${activeTab === 'individual' ? 'bg-[#1a365d] text-white shadow-lg' : 'text-slate-400'}`}
            >
              Individual Coaching
            </button>
            <button 
              onClick={() => setActiveTab("corporate")}
              className={`px-6 py-2 rounded-full text-[10px] font-[1000] uppercase tracking-widest transition-all ${activeTab === 'corporate' ? 'bg-[#1a365d] text-white shadow-lg' : 'text-slate-400'}`}
            >
              Corporate Events
            </button>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
            Operational <span style={{ color: cyan }}>Packages.</span>
          </h2>
          <p className="mt-4 text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">Select your performance track</p>
        </div>

        {/* 2. DYNAMIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnPresence mode="wait">
            {activeTab === "individual" ? (
              individualPackages.map((pkg, i) => (
                <motion.div 
                  key={`ind-${i}`}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                  className={`relative flex flex-col rounded-[45px] p-8 md:p-10 border transition-all duration-500 ${pkg.highlight ? 'bg-[#1a365d] border-[#1a365d] shadow-2xl scale-105 z-10 text-white' : 'bg-white border-slate-100 shadow-xl text-[#1a365d]'}`}
                >
                  {pkg.highlight && <div className="absolute top-0 inset-x-0 bg-sky-500 text-center py-2 text-[9px] font-black uppercase tracking-[0.3em]">Recommended Track</div>}
                  <div className="mb-10 pt-4">
                    <span className={`${pkg.highlight ? 'text-sky-400' : 'text-sky-500'} text-[10px] font-black uppercase tracking-widest`}>{pkg.tier} • {pkg.focus}</span>
                    <h3 className="text-2xl font-[1000] mt-2 uppercase italic">{pkg.title}</h3>
                    <p className={`text-3xl font-black mt-4 italic ${pkg.highlight ? 'text-white' : 'text-[#1a365d]'}`}>{pkg.price}<span className="text-sm font-bold opacity-40 not-italic ml-1">/mo</span></p>
                  </div>

                  <div className="space-y-8 flex-1">
                    <FeatureList title="Chess Coaching" icon={<Trophy size={14}/>} items={pkg.chess} isDark={pkg.highlight} />
                    <FeatureList title="Physical Fitness" icon={<Dumbbell size={14}/>} items={pkg.fitness} isDark={pkg.highlight} />
                    <FeatureList title="Mental Wellness" icon={<Brain size={14}/>} items={pkg.wellness} isDark={pkg.highlight} />
                  </div>

                  <Button className={`w-full h-14 rounded-full mt-10 font-[1000] uppercase tracking-widest text-[11px] transition-all hover:scale-[1.02] ${pkg.highlight ? 'bg-sky-500 text-white hover:bg-white hover:text-[#1a365d]' : 'bg-[#1a365d] text-white hover:bg-sky-500'}`}>
                    Enquire protocol
                  </Button>
                </motion.div>
              ))
            ) : (
              corporatePackages.map((pkg, i) => (
                <motion.div 
                  key={`corp-${i}`}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                  className={`relative flex flex-col rounded-[45px] p-8 md:p-10 border transition-all duration-500 ${pkg.highlight ? 'bg-[#1a365d] border-[#1a365d] shadow-2xl scale-105 z-10 text-white' : 'bg-white border-slate-100 shadow-xl text-[#1a365d]'}`}
                >
                  <div className="mb-10">
                    <span className={`${pkg.highlight ? 'text-sky-400' : 'text-sky-500'} text-[10px] font-black uppercase tracking-widest`}>{pkg.tier} • {pkg.focus}</span>
                    <h3 className="text-2xl font-[1000] mt-2 uppercase italic">{pkg.title}</h3>
                    <div className="flex gap-4 mt-6">
                       <div className="flex items-center gap-2 opacity-60"><Timer size={14}/><span className="text-[10px] font-bold uppercase">{pkg.duration}</span></div>
                       <div className="flex items-center gap-2 opacity-60"><Users size={14}/><span className="text-[10px] font-bold uppercase">{pkg.capacity}</span></div>
                    </div>
                  </div>

                  <div className="space-y-6 flex-1">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 opacity-40"><Zap size={14}/><span className="text-[10px] font-black uppercase tracking-widest">The Experience</span></div>
                      <ul className="space-y-3">
                        {pkg.inclusions.map((item, idx) => (
                          <li key={idx} className={`flex items-start gap-3 text-[13px] font-bold leading-tight ${pkg.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                            <ShieldCheck size={14} className="text-sky-500 mt-0.5 shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-6 border-t border-white/10">
                       <div className="flex items-center gap-2 opacity-40"><FileText size={14}/><span className="text-[10px] font-black uppercase tracking-widest">Deliverable</span></div>
                       <p className="mt-2 text-sm font-black italic">{pkg.deliverable}</p>
                    </div>
                  </div>

                  <Button className={`w-full h-14 rounded-full mt-10 font-[1000] uppercase tracking-widest text-[11px] transition-all hover:scale-[1.02] ${pkg.highlight ? 'bg-sky-500 text-white hover:bg-white hover:text-[#1a365d]' : 'bg-[#1a365d] text-white hover:bg-sky-500'}`}>
                    Request Proposal
                  </Button>
                </motion.div>
              ))
            )}
          </AnPresence>
        </div>

        {/* 3. MARKETING FOOTER */}
        <div className="mt-20 text-center">
           <p className="text-slate-400 font-bold italic text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
             {activeTab === 'individual' 
               ? "“Grandmasters burn up to 6,000 calories a day during tournaments just from stress. We train your body so your mind can keep up.”"
               : "“Stop doing trust falls. Teach your team how to calculate risk and manage stress through the ultimate game of strategy.”"
             }
           </p>
        </div>
      </div>
    </section>
  )
}

function FeatureList({ title, icon, items, isDark }: { title: string, icon: any, items: string[], isDark: boolean }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 opacity-40">
        {icon}
        <span className="text-[10px] font-black uppercase tracking-widest">{title}</span>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className={`flex items-start gap-3 text-[12px] font-bold leading-tight ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
            <div className="w-1 h-1 rounded-full bg-sky-500 mt-1.5 shrink-0" /> {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function AnPresence({ children, mode }: any) {
  return <AnimatePresence mode={mode}>{children}</AnimatePresence>
}