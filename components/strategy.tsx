"use client"

import { motion } from "framer-motion"
import { Share2, Beaker, ShieldCheck, CheckCircle2, Brain, Activity, Target, Zap } from "lucide-react"

export default function WhyItWorks() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* CENTERED PILL HEADING */}
        <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 sm:px-6 py-1.5 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              The Science of Hybrid
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase"
          >
            Why the <span style={{ color: cyan }}>Method</span> Works.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* CARD 01: VISUALLY POWERFUL (Stacks on Mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative min-h-[400px] md:min-h-[500px] rounded-[30px] md:rounded-[50px] overflow-hidden group shadow-2xl"
          >
            <img 
              src="/team-viral-chess-pt.jpg" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="Chess + PT Viral Team Engagement"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/40 to-transparent" />
            
            <div className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-white/20">
               <Share2 size={14} className="text-sky-400" />
               <span className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest">Viral Impact potential</span>
            </div>

            <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-10 md:right-10">
               <h3 className="text-white text-2xl md:text-3xl font-[1000] uppercase tracking-tight mb-3 md:mb-4 italic">01. Visually Powerful</h3>
               <p className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-md font-medium">
                  Designed for the social media era. A visually unique challenge that generates high-engagement content for teams and communities.
               </p>
               <div className="flex flex-wrap gap-2 md:gap-3">
                  {['Social Media', 'Corporate Events', 'Viral Content', 'Community'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[8px] md:text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* CARD 02: HR FRIENDLY (Stacks on Mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 flex flex-col bg-white rounded-[30px] md:rounded-[50px] p-8 md:p-10 border border-gray-100 shadow-xl"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-[18px] md:rounded-[24px] bg-[#1a365d] flex items-center justify-center mb-6 md:mb-8 shadow-lg">
               <ShieldCheck className="text-sky-400 w-8 h-8 md:w-10 md:h-10" />
            </div>
            
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
               <h3 className="text-[#1a365d] text-2xl md:text-3xl font-[1000] uppercase tracking-tight italic">02. HR Friendly</h3>
               <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                  Engineered to be inclusive and accessible. We customize the physical load to ensure every employee stays safe and engaged.
               </p>
            </div>

            <div className="space-y-3 md:space-y-4">
               {[
                 { label: "Safe for all fitness levels" },
                 { label: "Inclusive & Team-oriented" },
                 { label: "High ROI Engagement" },
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-[#f8fafc] border border-gray-50">
                    <CheckCircle2 className="text-sky-500 flex-shrink-0 w-5 h-5" />
                    <span className="text-[#1a365d] text-xs md:text-[13px] font-bold">{item.label}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* CARD 03: SCIENTIFICALLY ALIGNED (Responsive Flex) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-12 relative bg-[#1a365d] rounded-[30px] md:rounded-[60px] p-8 md:p-16 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
               <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-sky-500/20 px-4 py-2 rounded-full border border-sky-500/20">
                    <Beaker size={14} className="text-sky-400" />
                    <span className="text-sky-400 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em]">Strategic Convergence Lab</span>
                  </div>
                  <h3 className="text-white text-3xl md:text-5xl font-[1000] uppercase tracking-tighter leading-none italic">
                     03. Scientifically <br className="hidden md:block" /> <span style={{ color: cyan }}>Aligned.</span>
                  </h3>
                  <p className="text-slate-300 text-sm md:text-lg font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                    By combining core stability with tactical logic, we trigger a <span className="text-white font-bold">dual-task training effect</span> that rewires stress tolerance.
                  </p>
               </div>

               {/* SCIENCE DATA INFOGRAPHIC - Column on Mobile, Row on Desktop */}
               <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {/* PT Benefits */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-[25px] md:rounded-[35px] p-6 md:p-8 border border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-sky-500 rounded-lg md:rounded-xl"><Activity size={18} className="text-white" /></div>
                      <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-widest">Physical Training (PT)</span>
                    </div>
                    <ul className="space-y-3 md:space-y-4">
                       {['Core Stability', 'Functional Strength', 'Posture & Stamina'].map((item, i) => (
                         <li key={i} className="text-slate-400 text-xs md:text-[13px] font-bold flex items-center gap-2">
                           <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-sky-500 flex-shrink-0" /> {item}
                         </li>
                       ))}
                    </ul>
                  </div>

                  {/* Chess Benefits */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-[25px] md:rounded-[35px] p-6 md:p-8 border border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-amber-500 rounded-lg md:rounded-xl"><Brain size={18} className="text-white" /></div>
                      <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-widest">Mental Output</span>
                    </div>
                    <ul className="space-y-3 md:space-y-4">
                       {['Focus Depth', 'Decision Velocity', 'Stress Tolerance'].map((item, i) => (
                         <li key={i} className="text-slate-400 text-xs md:text-[13px] font-bold flex items-center gap-2">
                           <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-amber-500 flex-shrink-0" /> {item}
                         </li>
                       ))}
                    </ul>
                  </div>
               </div>
            </div>

            <div className="absolute -bottom-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-sky-500/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}