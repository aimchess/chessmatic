"use client"

import { motion } from "framer-motion"
import { 
  Check, Users, ArrowRight, Zap, 
  Dumbbell, Brain, Trophy, Target
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

  const packages = [
    {
      tier: "PHASE 01",
      title: "The Tactical Executive",
      focus: "Foundation & Routine",
      price: "$199 - $299",
      image: "/chess1.jpg",
      chess: ["2x 60-min private lessons/mo", "Custom opening repertoire base", "Weekly tactical puzzles"],
      fitness: ["1x Customized monthly workout plan", "Bi-weekly progress tracking"],
      wellness: ["1x Guided chess mindfulness audio", "Ergonomic posture assessment"],
      highlight: false
    },
    {
      tier: "PHASE 02",
      title: "The Mastermind Elite",
      focus: "Optimization & Strategy",
      price: "$450 - $599",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=800",
      chess: ["4x 60-min private lessons/mo", "Deep-dive game analysis", "Access to academy tournaments"],
      fitness: ["2x 45-min virtual PT sessions/mo", "Weekly form checks via video"],
      wellness: ["1x 30-min mindset coaching call/mo", "Executive stress management"],
      highlight: true
    },
    {
      tier: "PHASE 03",
      title: "The Grandmaster Lifestyle",
      focus: "Peak Performance",
      price: "$999+",
      image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=800",
      chess: ["Unlimited / 8x private lessons/mo", "Personalized tournament prep", "24/7 async game review"],
      fitness: ["4x 45-min 1-on-1 PT sessions/mo", "Daily activity & sleep tracking"],
      wellness: ["Bi-weekly mindset coaching", "Nutritional cognitive guidance"],
      highlight: false
    }
  ]

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Navbar/>
      <AdultClassesBanner/>
      <TargetCohorts/>

      {/* 3. COACHING PACKAGES SECTION */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* HEADER */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6">
              <span className="bg-white px-4 sm:px-6 py-1.5 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.2em] uppercase shadow-sm">
                Holistic Mind & Body System
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
              Coaching <span style={{ color: cyan }}>Packages.</span>
            </h2>
          </div>

          {/* PACKAGE GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
            {packages.map((pkg, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col bg-white rounded-[45px] overflow-hidden border transition-all duration-500 relative ${
                  pkg.highlight 
                  ? "border-sky-400 shadow-[0_30px_80px_rgba(14,165,233,0.12)] lg:scale-105 z-10" 
                  : "border-slate-100 shadow-xl"
                }`}
              >
                {/* IMAGE HEADER VIEWPORT */}
                <div className="h-56 relative overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/20 to-transparent" />
                  
                  {/* Phase Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    <span className="text-white text-[9px] font-black uppercase tracking-widest">{pkg.tier}</span>
                  </div>

                  <div className="absolute bottom-6 left-8">
                     <p className="text-sky-400 text-[10px] font-black uppercase tracking-widest mb-1">{pkg.focus}</p>
                     <h3 className="text-white text-xl font-[1000] uppercase tracking-tight">{pkg.title}</h3>
                  </div>
                </div>

                {/* PACKAGE CONTENT */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col">
                  <div className="mb-8">
                    <p className="text-[#1a365d] text-4xl font-[1000] tracking-tighter italic">
                      {pkg.price}
                      <span className="text-sm font-bold text-slate-400 not-italic ml-2">/ month</span>
                    </p>
                  </div>

                  <div className="space-y-8 flex-1">
                    {/* Chess Protocol */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[#1a365d]">
                        <Trophy size={16} className="text-sky-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Chess Protocol</span>
                      </div>
                      <ul className="space-y-2.5">
                        {pkg.chess.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[13px] text-slate-600 font-bold leading-tight">
                            <Check size={14} className="text-sky-500 mt-0.5 shrink-0" strokeWidth={3} /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Fitness Protocol */}
                    <div className="space-y-4 pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2 text-[#1a365d]">
                        <Dumbbell size={16} className="text-sky-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Physical Fitness</span>
                      </div>
                      <ul className="space-y-2.5">
                        {pkg.fitness.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[13px] text-slate-600 font-bold leading-tight">
                            <Check size={14} className="text-sky-500 mt-0.5 shrink-0" strokeWidth={3} /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Wellness Protocol */}
                    <div className="space-y-4 pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2 text-[#1a365d]">
                        <Brain size={16} className="text-sky-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Mental Wellness</span>
                      </div>
                      <ul className="space-y-2.5">
                        {pkg.wellness.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[13px] text-slate-600 font-bold leading-tight">
                            <Check size={14} className="text-sky-500 mt-0.5 shrink-0" strokeWidth={3} /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ACTION BUTTON */}
                  <div className="mt-12">
                    <Button 
                      className={`w-full h-14 rounded-full text-white font-[1000] uppercase tracking-widest text-[11px] shadow-2xl transition-all hover:scale-[1.02] active:scale-95 ${pkg.highlight ? 'bg-sky-500 hover:bg-sky-600' : 'bg-[#1a365d] hover:bg-[#0f213a]'}`}
                    >
                      Enquire for {pkg.tier}
                    </Button>
                  </div>
                </div>

                {/* Subtle Technical Dot Grid */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                     style={{ backgroundImage: `radial-gradient(${navy} 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyAdultsLearn/>
      <TrainingFormats/>
      <BenefitsSection/>
      <CommunityAndSchedule/>

      {/* FINAL RESPONSIVE CTA */}
      <section className="py-16 md:py-24 bg-white flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      className="relative rounded-[40px] md:rounded-[60px] bg-[#1a365d] p-8 md:p-14 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
                 <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                 <span className="text-white text-[9px] font-black uppercase tracking-[0.3em]">Operational Status: Open</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-white tracking-tighter leading-none italic uppercase">
                Join the <span style={{ color: cyan }}>Strategic Elite.</span>
              </h2>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <Button style={{ backgroundColor: cyan }} className="w-full sm:w-auto h-14 px-10 rounded-full text-[11px] font-[1000] uppercase tracking-widest text-[#1a365d] hover:bg-white transition-all shadow-xl active:scale-95">
                Join Classes <Zap size={14} className="ml-2 fill-[#1a365d]" />
              </Button>
              <Button className="w-full sm:w-auto h-14 px-10 bg-white/10 border border-white/20 text-white text-[11px] font-[1000] uppercase tracking-widest transition-all active:scale-95">
                Book Trial <ArrowRight size={14} className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}