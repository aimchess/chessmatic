"use client"

import { motion } from "framer-motion"
import { 
  Target, Brain, Trophy, ShieldCheck, 
  Check, Users, Search, BarChart3, 
  Clock, ArrowRight, Zap, Play
} from "lucide-react"
import Link from "next/link"
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
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800"
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
    <main className="min-h-screen bg-white font-sans">
      <Navbar/>
      
      <AdultClassesBanner/>
      <TargetCohorts/>
      <WhyAdultsLearn/>
      <TrainingFormats/>
      <BenefitsSection/>
      <CommunityAndSchedule/>



      {/* 4. BALANCED RECTANGLE CTA */}
      <section className="py-8 bg-white flex justify-center">
        <div className="px-6 w-full max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      className="relative rounded-[45px] md:rounded-[55px] bg-[#1a365d] p-10 md:p-14 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 group">
            <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
                 <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                 <span className="text-white text-[9px] font-black uppercase tracking-[0.3em]">Operational Status: Open</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-[1000] text-white tracking-tighter leading-none italic uppercase">Join the <span style={{ color: cyan }}>Strategic Elite.</span></h2>
                <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-4">Start your trial session in our Woodlands Studio.</p>
              </div>
            </div>

            <div className="relative z-10 flex flex-row items-center gap-4">
              <Button style={{ backgroundColor: cyan }} className="h-14 px-10 rounded-full text-[11px] font-[1000] uppercase tracking-widest text-[#1a365d] hover:bg-white transition-all shadow-xl active:scale-95 group/btn">
                Join Classes <Zap size={14} className="ml-2 fill-[#1a365d]" />
              </Button>
              <Button className="h-14 px-10 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-[11px] font-[1000] uppercase tracking-widest transition-all active:scale-95">
                Book Trial <ArrowRight size={14} className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}