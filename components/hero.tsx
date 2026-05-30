"use client"

import { Button } from "@/components/ui/button"
import { Activity, Brain, ChevronRight, Users, Target } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="relative w-full h-screen min-h-[700px] lg:min-h-[800px] overflow-hidden font-sans flex items-center justify-center">
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-slate-950">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 sm:opacity-80"
          style={{ 
            backgroundImage: `url('/plank1.png')`, 
          }}
        />
        {/* Radial Spotlight: Fluid coverage */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(2,6,23,0.9)_90%)]" />
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
        
        {/* LEFT: BODY METRICS - Visible on Large Screens (lg+) */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex flex-col w-64 p-6 rounded-[35px] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-5 text-white/80">
            <div className="p-2 bg-rose-500/20 rounded-xl">
              <Activity size={18} className="text-rose-500" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Stress Control</span>
          </div>
          <div className="flex items-end gap-1.5 h-20">
             {[45, 75, 50, 95, 70, 85, 55].map((h, i) => (
               <motion.div 
                key={i} 
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                className="w-full bg-rose-500/40 rounded-t-lg border-t border-rose-500/50" 
               />
             ))}
          </div>
          <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
            <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest italic">Physical State</span>
            <span className="text-[10px] text-rose-400 font-bold">OPTIMAL</span>
          </div>
        </motion.div>

        {/* CENTER: PRIMARY DATA & CTAs */}
        <div className="flex-1 text-center flex flex-col items-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-[65px] font-[1000] text-white leading-[1.1] sm:leading-[1] tracking-tighter mb-6 sm:mb-8 italic">
              Where Mind & <br /> 
              <span style={{ color: cyan }}>Body</span> Train Together
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-medium mb-8 sm:mb-12 max-w-2xl mx-auto opacity-90">
              Chessmatic LLP brings a modern lifestyle concept to Singapore by 
              combining <span className="text-white font-bold">chess, fitness, social wellness, and strategic thinking</span> for adults and corporate teams.
            </p>

            {/* 3-BUTTON CTA GROUP - Stacks on Mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 w-full px-4 sm:px-0">
              <Button className="w-full sm:w-auto bg-[#1a365d] hover:bg-[#0f213a] text-white px-8 py-6 rounded-full text-sm font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                Join Adult Classes
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-6 rounded-full text-sm font-bold flex items-center justify-center gap-3 transition-all hover:scale-105">
                <Users size={18} className="text-sky-400" />
                Book Corporate
              </Button>

              <Button variant="ghost" className="w-full sm:w-auto text-white/80 hover:text-white hover:bg-white/5 px-8 py-6 rounded-full text-sm font-bold flex items-center justify-center gap-3 transition-all underline decoration-sky-500/50 underline-offset-8">
                <Target size={18} className="text-sky-400" />
                Try Plank-Chess
              </Button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: COGNITIVE METRICS - Visible on Large Screens (lg+) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex flex-col w-64 p-6 rounded-[35px] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-6 text-white/80">
            <div className="p-2 bg-sky-500/20 rounded-xl">
              <Brain size={18} className="text-sky-400" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Focus Depth</span>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] text-white/50 uppercase font-black tracking-widest mb-1">
                <span>Strategic logic</span>
                <span style={{ color: cyan }}>92%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: '92%' }} 
                    transition={{ delay: 1, duration: 1.2 }} 
                    className="h-full bg-sky-400 shadow-[0_0_10px_rgba(14,165,233,0.5)]" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] text-white/50 uppercase font-black tracking-widest mb-1">
                <span>Mental Endurance</span>
                <span style={{ color: cyan }}>78%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: '78%' }} 
                    transition={{ delay: 1.3, duration: 1.2 }} 
                    className="h-full bg-sky-400/40" 
                />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/5 text-center">
            <span className="text-[9px] text-white/40 font-bold uppercase tracking-[0.3em] italic">Cognitive Analysis</span>
          </div>
        </motion.div>

      </div>

      {/* 3. SIGNATURE CURVED BOTTOM (Navy & White) */}
      <div className="absolute bottom-[-2px] left-0 w-full z-20 pointer-events-none">
        <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-auto"
            preserveAspectRatio="none"
            style={{ height: 'auto', minHeight: '60px' }}
        >
          <path d="M0 120V60C240 120 480 120 720 60C960 0 1200 0 1440 60V120H0Z" fill={navy} />
          <path d="M0 120V80C240 130 480 130 720 80C960 30 1200 30 1440 80V120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}