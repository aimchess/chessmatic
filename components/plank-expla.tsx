"use client"

import { motion } from "framer-motion"
import { Dumbbell, Timer, ShieldCheck, Activity, Target, Zap } from "lucide-react"

export default function PlankChessExplanation() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const steps = [
    {
      num: "01",
      title: "Establish Foundation",
      desc: "Drop into a stable plank position. Your core becomes the anchor for the game.",
      icon: <Dumbbell className="w-5 h-5" />,
      accent: "bg-sky-500"
    },
    {
      num: "02",
      title: "Tactical Engagement",
      desc: "The blitz clock is active. Execute moves while managing your center of gravity.",
      icon: <Timer className="w-5 h-5" />,
      accent: "bg-[#1a365d]"
    },
    {
      num: "03",
      title: "Physical Resilience",
      desc: "Muscles fatigue, but logic must remain sharp. Fight the physical urge to drop.",
      icon: <Activity className="w-5 h-5" />,
      accent: "bg-rose-500"
    },
    {
      num: "04",
      title: "Strategic Victory",
      desc: "Last strong. Think sharp. Outperform your opponent in mind and body.",
      icon: <ShieldCheck className="w-5 h-5" />,
      accent: "bg-emerald-500"
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. TOP HEADING SECTION */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6">
            <span className="bg-white px-8 py-2 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.3em] uppercase shadow-sm">
              The Training Protocol
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
            What is <span style={{ color: cyan }}>Plank-Chess?</span>
          </h2>
          <p className="mt-6 text-slate-500 text-lg md:text-xl font-medium max-w-2xl">
            A high-stakes fusion where <span className="text-[#1a365d] font-bold">physical endurance</span> meets <span className="text-[#1a365d] font-bold">tactical precision</span>.
          </p>
        </div>

        {/* 2. SPLIT CONTENT: IMAGE LEFT | STEPS RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: IMAGE VIEWPORT (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-10 rounded-[50px] overflow-hidden border-[12px] border-gray-50 shadow-2xl"
            >
              <img 
                src="/plank2.png" 
                alt="Plank Chess Protocol" 
                className="w-full h-[550px] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Technical Overlay Badges */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-lg flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                 <span className="text-[#1a365d] text-[10px] font-black uppercase tracking-widest">Live Lab Training</span>
              </div>

              <div className="absolute bottom-6 right-6 bg-[#1a365d] p-5 rounded-[30px] shadow-2xl text-white">
                 <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Dual-Task</p>
                 <p className="text-xl font-black italic text-sky-400">ACTIVE</p>
              </div>
            </motion.div>

            {/* Background Decor */}
            <div className="absolute -top-10 -left-10 w-40 h-40 opacity-[0.1] -z-10" 
                 style={{ backgroundImage: `radial-gradient(${navy} 2px, transparent 2px)`, backgroundSize: '20px 20px' }} />
          </div>

          {/* RIGHT: SYSTEMATIC STEPS (7 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4 mb-12">
               <h3 className="text-[#1a365d] text-2xl font-[1000] uppercase tracking-tight">The 4-Step Process</h3>
               <p className="text-slate-400 text-sm font-bold uppercase tracking-widest italic">Follow the protocol to achieve peak convergence.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center justify-center transition-all group-hover:border-sky-500 group-hover:shadow-sky-500/10`}>
                       <div className={`${step.accent} p-2.5 rounded-xl text-white shadow-lg`}>
                          {step.icon}
                       </div>
                    </div>
                    <span className="text-slate-200 text-3xl font-[1000] italic">/{step.num}</span>
                  </div>

                  <h4 className="text-[#1a365d] text-lg font-black uppercase tracking-tight mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* BOTTOM SUMMARY PILL */}
            <div className="pt-8 border-t border-slate-100">
               <div className="inline-flex items-center gap-3 px-6 py-4 rounded-3xl bg-[#f8fafc] border border-slate-100">
                  <Target size={20} className="text-sky-500" />
                  <p className="text-[#1a365d] text-xs font-black uppercase tracking-wider">
                    Target Outcome: <span className="text-sky-500">Maximum Cognitive Composure</span>
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}