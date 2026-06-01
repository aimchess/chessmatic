"use client"

import { motion } from "framer-motion"
import { 
  Check, Users, ArrowRight, Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AdultClassesBanner from "@/components/adultBanner"
import { Navbar } from "@/components/navbar"
import WhyAdultsLearn from "@/components/whyadult"
import TargetCohorts from "@/components/level"
import TrainingFormats from "@/components/format"
import BenefitsSection from "@/components/benefit"
import CommunityAndSchedule from "@/components/final"

export default function AdultClassesPage() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const curriculum = [
    {
      level: "PHASE 01",
      title: "Beginner Program",
      desc: "This level establishes the foundational habits and tactical awareness required for long-term growth.",
      motto: "“EVERY GREAT STRATEGIST STARTED HERE. WE ENSURE YOU START RIGHT.”",
      features: [
        "Rules & Piece Movement Protocol",
        "Foundational Tactics & Threats",
        "Opening Principles & Logic",
        "Essential Checkmate Patterns"
      ],
      footer: "Small group sessions — adult environment.",
      image: "/chess1.jpg"
    },
    {
      level: "PHASE 02",
      title: "Intermediate Program",
      desc: "This stage prioritises thinking quality, calculation depth, and disciplined decision-making.",
      motto: "“WE BUILD THE THINKING HABITS THAT WIN UNDER PRESSURE.”",
      features: [
        "Advanced Tactics & Calculation",
        "Positional Strategy Basics",
        "Endgame Technique Core",
        "Strategic Opening Repertoire"
      ],
      footer: "Focus on tactical endurance & planning.",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=800"
    },
    {
      level: "PHASE 03",
      title: "Advanced Program",
      desc: "At this level, precision, psychological resilience, and tournament consistency are non-negotiable.",
      motto: "“AT THIS LEVEL, PREPARATION IS EVERYTHING.”",
      features: [
        "Grandmaster Game Analysis",
        "Deep Calculation Mastery",
        "Tournament Performance Training",
        "Psychological Edge Development"
      ],
      footer: "By invitation — elite cohort standards.",
      image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=800"
    }
  ]

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Navbar/>
      
      {/* 1. HERO BANNER */}
      <AdultClassesBanner/>

      {/* 2. COHORTS (Who this is for) */}
      <TargetCohorts/>

      {/* 3. CURRICULUM ROADMAP - The Strategic Phases */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center mb-12 md:mb-20">
            <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6">
              <span className="bg-white px-4 sm:px-6 py-1.5 rounded-full text-[#1a365d] text-[9px] sm:text-[10px] font-[1000] tracking-[0.3em] uppercase shadow-sm">Training Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">Strategic <span style={{ color: cyan }}>Phases.</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {curriculum.map((prog, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.02)] hover:shadow-2xl transition-all duration-500"
              >
                {/* Visual Header */}
                <div className="h-56 sm:h-64 relative group overflow-hidden">
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <span className="text-sky-400 text-[10px] font-[1000] tracking-widest uppercase mb-1 block">{prog.level}</span>
                    <h3 className="text-white text-xl sm:text-2xl font-[1000] tracking-tight uppercase leading-none">{prog.title}</h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col">
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{prog.desc}</p>
                  <p className="text-sky-600 text-[11px] font-[1000] tracking-wide leading-relaxed mb-8 uppercase italic border-l-2 border-sky-500/20 pl-4">
                    {prog.motto}
                  </p>

                  <div className="space-y-4 mb-10">
                    {prog.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 w-5 h-5 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-sky-500" strokeWidth={4} />
                        </div>
                        <span className="text-[#1a365d] text-[13px] font-bold tracking-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto bg-[#f0f9ff]/50 rounded-2xl p-5 border border-sky-100 flex items-start gap-4">
                    <Users size={18} className="text-sky-500 mt-0.5 flex-shrink-0" />
                    <p className="text-[#1a365d] text-[11px] font-[1000] uppercase tracking-wider leading-relaxed opacity-80">{prog.footer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY ADULTS LEARN */}
      <WhyAdultsLearn/>

      {/* 5. FORMATS & BENEFITS */}
      <TrainingFormats/>
      <BenefitsSection/>

      {/* 6. FINAL DETAILS & SCHEDULE */}
      <CommunityAndSchedule/>

      {/* 7. FINAL BALANCED RECTANGLE CTA - Full Responsive Optimization */}
      <section className="py-16 md:py-24 bg-white flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="relative rounded-[32px] sm:rounded-[45px] md:rounded-[60px] bg-[#1a365d] p-8 md:p-14 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 group"
          >
            {/* Technical Dot Grid Backdrop */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
                 <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                 <span className="text-white text-[9px] font-black uppercase tracking-[0.3em]">Operational Status: Open</span>
              </div>
              <div className="max-w-md">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-white tracking-tighter leading-none italic uppercase">
                  Join the <br className="hidden sm:block" />
                  <span style={{ color: cyan }}>Strategic Elite.</span>
                </h2>
                <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-4 leading-relaxed">
                  Start your trial session in our Woodlands Studio.
                </p>
              </div>
            </div>

            {/* CTA Buttons - Stacking Logic */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <Button 
                style={{ backgroundColor: cyan }} 
                className="w-full sm:w-auto h-14 px-10 rounded-full text-[11px] font-[1000] uppercase tracking-widest text-[#1a365d] hover:bg-white transition-all shadow-xl active:scale-95 group/btn whitespace-nowrap"
              >
                Join Classes <Zap size={14} className="ml-2 fill-[#1a365d]" />
              </Button>
              <Button 
                className="w-full sm:w-auto h-14 px-10 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-[11px] font-[1000] uppercase tracking-widest transition-all active:scale-95 whitespace-nowrap"
              >
                Book Trial <ArrowRight size={14} className="ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Philosophy Footer */}
          <div className="mt-8 text-center opacity-30">
             <p className="text-[#1a365d] text-[10px] font-black uppercase tracking-[0.4em]">Strategy • Stability • Success</p>
          </div>
        </div>
      </section>

    </main>
  )
}