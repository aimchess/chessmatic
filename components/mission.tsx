"use client"

import { Target, Lightbulb, TrendingUp, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function MissionVision() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6">
            <span className="bg-white px-8 py-2 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.3em] uppercase shadow-sm">
              Our Core Purpose
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none">
            Strategy with <span style={{ color: cyan }}>Intention.</span>
          </h2>
        </div>

        {/* MISSION & VISION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          
          {/* CARD 01: MISSION (Sky Blue Theme) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative flex flex-col items-center"
          >
            {/* The "Tray" Base */}
            <div className={`absolute inset-x-0 bottom-0 h-[85%] rounded-[40px] bg-sky-500 shadow-2xl shadow-sky-500/20`} />
            
            {/* White Content Card */}
            <div className="relative z-10 w-[90%] bg-white rounded-[35px] p-10 mb-8 shadow-xl border border-gray-50 flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-sky-50 rounded-2xl">
                <Target size={32} className="text-sky-500" />
              </div>
              <h3 className="text-2xl font-[1000] text-[#1a365d] uppercase tracking-tighter mb-4">Our Mission</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                To help adults and corporate teams build stronger minds, healthier bodies, and meaningful social connections through a unique combination of chess and physical wellness.
              </p>
            </div>

            {/* Bottom Number Tag */}
            <div className="relative z-10 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30 mb-4">
              <span className="text-white font-black text-sm tracking-widest">01</span>
            </div>
          </motion.div>

          {/* CARD 02: VISION (Navy Theme) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* The "Tray" Base */}
            <div className={`absolute inset-x-0 bottom-0 h-[85%] rounded-[40px] bg-[#1a365d] shadow-2xl shadow-[#1a365d]/20`} />
            
            {/* White Content Card */}
            <div className="relative z-10 w-[90%] bg-white rounded-[35px] p-10 mb-8 shadow-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl">
                <Lightbulb size={32} className="text-[#1a365d]" />
              </div>
              <h3 className="text-2xl font-[1000] text-[#1a365d] uppercase tracking-tighter mb-4">Our Vision</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                To redefine adult wellness in Singapore by establishing the first strategic performance laboratory where mental fitness and physical core stability are trained together.
              </p>
            </div>

            {/* Bottom Number Tag */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 mb-4">
              <span className="text-white font-black text-sm tracking-widest">02</span>
            </div>
          </motion.div>

        </div>

        {/* VALUE PILLS (Added for extra strategic depth) */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
           {['Innovation', 'Wellness', 'Discipline', 'Community'].map((val, i) => (
             <span key={i} className="px-6 py-2 rounded-full border border-gray-200 text-[#1a365d] text-[10px] font-black uppercase tracking-widest bg-white shadow-sm">
               {val}
             </span>
           ))}
        </div>
      </div>
    </section>
  )
}