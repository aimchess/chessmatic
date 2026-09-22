"use client"

import { motion } from "framer-motion"
import { Dumbbell, Timer, ShieldCheck, Activity, Target, Brain } from "lucide-react"

export default function PTExplanation() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const steps = [
    {
      num: "01",
      title: "Baseline Assessment",
      desc: "We analyze your strategic chess foundation and physical movement mechanics to build a customized plan.",
      icon: <Target className="w-5 h-5" />,
      accent: "bg-sky-500"
    },
    {
      num: "02",
      title: "Physical Conditioning (PT)",
      desc: "Targeted personal training focused on core strength, postural alignment, and cardiovascular endurance.",
      icon: <Dumbbell className="w-5 h-5" />,
      accent: "bg-[#1a365d]"
    },
    {
      num: "03",
      title: "Tactical Execution",
      desc: "Master calculation, opening theory, and endgame technique while maintaining peak physical composure.",
      icon: <Brain className="w-5 h-5" />,
      accent: "bg-amber-500"
    },
    {
      num: "04",
      title: "Sustained Mastery",
      desc: "Combine mental clarity with physical stamina for high-pressure corporate and tournament performance.",
      icon: <ShieldCheck className="w-5 h-5" />,
      accent: "bg-emerald-500"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. TOP HEADING SECTION */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 sm:px-8 py-1.5 rounded-full text-[#1a365d] text-[9px] sm:text-[10px] font-[1000] tracking-[0.3em] uppercase shadow-sm">
              The Training Protocol
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase"
          >
            What is <span style={{ color: cyan }}>Chess + PT?</span>
          </motion.h2>
          <p className="mt-6 text-slate-500 text-base sm:text-lg md:text-xl font-medium max-w-2xl px-2">
            A high-performance system where <span className="text-[#1a365d] font-bold">physical fitness (PT)</span> meets <span className="text-[#1a365d] font-bold">tactical precision</span>.
          </p>
        </div>

        {/* 2. SPLIT CONTENT: IMAGE LEFT | STEPS RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-20 items-center">
          
          {/* LEFT: IMAGE VIEWPORT (5 Cols) */}
          <div className="lg:col-span-5 relative order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[30px] md:rounded-[50px] overflow-hidden border-[8px] md:border-[12px] border-gray-50 shadow-2xl"
            >
              <img 
                src="/chess-pt-training.jpg" 
                alt="PT and Chess Protocol" 
                className="w-full h-[350px] md:h-[550px] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Technical Overlay Badges - Scaled for mobile */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border border-white/20 shadow-lg flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                 <span className="text-[#1a365d] text-[8px] sm:text-[10px] font-black uppercase tracking-widest">Live Lab Training</span>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#1a365d] p-3 sm:p-5 rounded-2xl sm:rounded-[30px] shadow-2xl text-white">
                 <p className="text-[9px] sm:text-xs font-black uppercase tracking-widest opacity-60 mb-0.5 sm:mb-1">Dual-Track</p>
                 <p className="text-lg sm:text-xl font-black italic text-sky-400">ACTIVE</p>
              </div>
            </motion.div>

            {/* Background Decor - Hidden on small mobile */}
            <div className="absolute -top-6 -left-6 w-32 h-32 opacity-[0.1] -z-10 hidden sm:block" 
                 style={{ backgroundImage: `radial-gradient(${navy} 2px, transparent 2px)`, backgroundSize: '20px 20px' }} />
          </div>

          {/* RIGHT: SYSTEMATIC STEPS (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 order-2">
            <div className="space-y-3 mb-8 md:mb-12 text-center lg:text-left">
               <h3 className="text-[#1a365d] text-xl sm:text-2xl font-[1000] uppercase tracking-tight">The 4-Step Process</h3>
               <p className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-widest italic">Follow the protocol to achieve peak composure & strength.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3 sm:mb-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center transition-all group-hover:border-sky-500 group-hover:shadow-sky-500/10`}>
                       <div className={`${step.accent} p-2 sm:p-2.5 rounded-lg sm:rounded-xl text-white shadow-md`}>
                          {step.icon}
                       </div>
                    </div>
                    <span className="text-slate-200 text-2xl sm:text-3xl font-[1000] italic">/{step.num}</span>
                  </div>

                  <h4 className="text-[#1a365d] text-base sm:text-lg font-black uppercase tracking-tight mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* BOTTOM SUMMARY PILL */}
            <div className="pt-6 sm:pt-8 border-t border-slate-100 flex justify-center lg:justify-start">
               <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl bg-[#f8fafc] border border-slate-100 shadow-sm">
                  <Target size={16} className="text-sky-500 flex-shrink-0" />
                  <p className="text-[#1a365d] text-[10px] sm:text-xs font-black uppercase tracking-wider">
                    Target Outcome: <span className="text-sky-500">Maximum Cognitive & Physical Composure</span>
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}