"use client"

import { motion } from "framer-motion"
import { Share2, Beaker, ShieldCheck, CheckCircle2, Brain, Activity, Target, Zap } from "lucide-react"

export default function WhyItWorks() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED PILL HEADING */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6">
            <span className="bg-white px-8 py-2 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              The Science of Hybrid
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
            Why the <span style={{ color: cyan }}>Method</span> Works.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* CARD 01: VISUALLY POWERFUL (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 relative min-h-[500px] rounded-[50px] overflow-hidden group shadow-2xl"
          >
            <img 
              src="/plank3.png" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="Social Media Engagement"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/40 to-transparent" />
            
            <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
               <Share2 size={16} className="text-sky-400" />
               <span className="text-white text-[10px] font-black uppercase tracking-widest">Viral Impact potential</span>
            </div>

            <div className="absolute bottom-12 left-10 right-10">
               <h3 className="text-white text-3xl font-[1000] uppercase tracking-tight mb-4 italic">01. Visually Powerful</h3>
               <p className="text-white/70 text-lg mb-8 max-w-md font-medium">
                  Designed for the social media era. A visually unique challenge that generates high-engagement content for teams and communities.
               </p>
               <div className="flex flex-wrap gap-3">
                  {['Social Media', 'Corporate Events', 'Viral Content', 'Community'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* CARD 02: HR FRIENDLY (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 flex flex-col bg-white rounded-[50px] p-10 border border-gray-100 shadow-xl"
          >
            <div className="w-16 h-16 rounded-[24px] bg-[#1a365d] flex items-center justify-center mb-8 shadow-lg shadow-[#1a365d]/10">
               <ShieldCheck className="text-sky-400" size={32} />
            </div>
            
            <div className="space-y-4 mb-10">
               <h3 className="text-[#1a365d] text-3xl font-[1000] uppercase tracking-tight italic">02. HR Friendly</h3>
               <p className="text-slate-500 font-medium leading-relaxed">
                  Engineered to be inclusive and accessible. We customize the physical load to ensure every employee stays safe and engaged.
               </p>
            </div>

            <div className="space-y-4">
               {[
                 { icon: <CheckCircle2 className="text-sky-500" />, label: "Safe for all fitness levels" },
                 { icon: <CheckCircle2 className="text-sky-500" />, label: "Inclusive & Team-oriented" },
                 { icon: <CheckCircle2 className="text-sky-500" />, label: "High ROI Engagement" },
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-gray-50">
                    {item.icon}
                    <span className="text-[#1a365d] text-[13px] font-bold">{item.label}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* CARD 03: SCIENTIFICALLY ALIGNED (Full Width 12 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-12 relative bg-[#1a365d] rounded-[60px] p-10 lg:p-16 overflow-hidden shadow-2xl"
          >
            {/* TECHNICAL DOT GRID BACKGROUND */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
               <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-sky-500/20 px-4 py-2 rounded-full border border-sky-500/20">
                    <Beaker size={14} className="text-sky-400" />
                    <span className="text-sky-400 text-[9px] font-black uppercase tracking-[0.3em]">Strategic Convergence Lab</span>
                  </div>
                  <h3 className="text-white text-4xl lg:text-5xl font-[1000] uppercase tracking-tighter leading-none italic">
                     03. Scientifically <br /> <span style={{ color: cyan }}>Aligned.</span>
                  </h3>
                  <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-lg">
                    By combining core stability with tactical logic, we trigger a <span className="text-white font-bold">dual-task training effect</span> that rewires stress tolerance.
                  </p>
               </div>

               {/* SCIENCE DATA INFOGRAPHIC */}
               <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Plank Benefits */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-[35px] p-8 border border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-sky-500 rounded-xl"><Activity size={20} className="text-white" /></div>
                      <span className="text-white font-black text-xs uppercase tracking-widest">Physical Output</span>
                    </div>
                    <ul className="space-y-4">
                       {['Core Stability', 'Posture Correction', 'Breathing Control'].map((item, i) => (
                         <li key={i} className="text-slate-400 text-[13px] font-bold flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-sky-500" /> {item}
                         </li>
                       ))}
                    </ul>
                  </div>

                  {/* Chess Benefits */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-[35px] p-8 border border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-amber-500 rounded-xl"><Brain size={20} className="text-white" /></div>
                      <span className="text-white font-black text-xs uppercase tracking-widest">Mental Output</span>
                    </div>
                    <ul className="space-y-4">
                       {['Focus Depth', 'Decision Velocity', 'Stress Tolerance'].map((item, i) => (
                         <li key={i} className="text-slate-400 text-[13px] font-bold flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> {item}
                         </li>
                       ))}
                    </ul>
                  </div>
               </div>
            </div>

            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}