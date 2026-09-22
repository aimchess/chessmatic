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
import CoachesSection from "@/components/coaches"

export default function AdultClassesPage() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const tracks = [
    {
      tier: "TRACK 01",
      title: "Chess + PT",
      focus: "Hybrid Strategy & Physical Conditioning",
      image: "/chess1.jpg",
      badge: "Signature Hybrid",
      chess: [
        "Personalized tactical and opening mastery",
        "Deep calculation and endgame technique",
        "Weekly puzzle analysis and tournament readiness"
      ],
      pt: [
        "Targeted physical conditioning & core strength",
        "Postural alignment & stamina building",
        "Form checks and personalized workout programming"
      ],
      highlight: true
    },
    {
      tier: "TRACK 02",
      title: "Chess Separate",
      focus: "Pure Strategic Chess Mastery",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=800",
      badge: "Pure Chess",
      chess: [
        "Structured curriculum for beginners to advanced",
        "Opening repertoire customization",
        "Master-level game analysis & review",
        "Available in Private, Online, and Group formats"
      ],
      pt: [],
      highlight: false
    },
    {
      tier: "TRACK 03",
      title: "PT Separate",
      focus: "Dedicated Functional Physical Training",
      image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=800",
      badge: "Pure PT",
      chess: [],
      pt: [
        "1-on-1 and small group personal training",
        "Functional strength & mobility development",
        "Cardiovascular endurance & core conditioning",
        "Custom fitness assessments & progress tracking"
      ],
      highlight: false
    }
  ]

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Navbar/>
      <AdultClassesBanner/>
      <TargetCohorts/>

      {/* 3. COACHING TRACKS SECTION (No pricing, focused on Chess+PT, Chess, PT) */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* HEADER */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6">
              <span className="bg-white px-4 sm:px-6 py-1.5 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.2em] uppercase shadow-sm">
                Customized Training Tracks
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
              Our Training <span style={{ color: cyan }}>Tracks.</span>
            </h2>
            <p className="mt-4 text-slate-500 font-medium text-base sm:text-lg max-w-2xl">
              Choose between integrated Chess + PT, dedicated Chess coaching, or independent Personal Training.
            </p>
          </div>

          {/* TRACK GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
            {tracks.map((pkg, i) => (
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
                     <h3 className="text-white text-2xl font-[1000] uppercase tracking-tight">{pkg.title}</h3>
                  </div>
                </div>

                {/* PACKAGE CONTENT */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                  <div className="space-y-8">
                    {/* Chess Protocol */}
                    {pkg.chess.length > 0 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-[#1a365d]">
                          <Trophy size={16} className="text-sky-500" />
                          <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Chess Coaching</span>
                        </div>
                        <ul className="space-y-2.5">
                          {pkg.chess.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[13px] text-slate-600 font-bold leading-tight">
                              <Check size={14} className="text-sky-500 mt-0.5 shrink-0" strokeWidth={3} /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Physical Fitness (PT) */}
                    {pkg.pt.length > 0 && (
                      <div className={`space-y-4 ${pkg.chess.length > 0 ? "pt-6 border-t border-slate-50" : ""}`}>
                        <div className="flex items-center gap-2 text-[#1a365d]">
                          <Dumbbell size={16} className="text-sky-500" />
                          <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Physical Training (PT)</span>
                        </div>
                        <ul className="space-y-2.5">
                          {pkg.pt.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[13px] text-slate-600 font-bold leading-tight">
                              <Check size={14} className="text-sky-500 mt-0.5 shrink-0" strokeWidth={3} /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* ACTION BUTTON */}
                  <div className="mt-10">
                    <Button 
                      className={`w-full h-14 rounded-full text-white font-[1000] uppercase tracking-widest text-[11px] shadow-2xl transition-all hover:scale-[1.02] active:scale-95 ${pkg.highlight ? 'bg-sky-500 hover:bg-sky-600' : 'bg-[#1a365d] hover:bg-[#0f213a]'}`}
                    >
                      Enquire for {pkg.title}
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

      <CoachesSection />

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