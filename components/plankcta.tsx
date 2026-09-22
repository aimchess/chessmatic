"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Zap, ArrowRight, Target } from "lucide-react"
import Link from "next/link"

export default function CompactRectangleCTA() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-12 md:py-20 bg-white font-sans flex justify-center px-4">
      <div className="w-full max-w-5xl">
        
        {/* COMPACT RECTANGLE CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] md:rounded-[55px] bg-[#1a365d] p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(26,54,93,0.2)] overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 group"
        >
          
          {/* TECHNICAL DOT GRID BACKGROUND */}
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

          {/* LEFT: CONTENT SIDE */}
          <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            {/* Pulsing Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
               <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
               <span className="text-white text-[9px] font-black uppercase tracking-[0.3em]">Operational Status: Active</span>
            </div>
            
            <div className="max-w-md">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[1000] text-white tracking-tighter leading-none italic uppercase">
                Challenge Your <span style={{ color: cyan }}><br className="hidden sm:block" />Mind & Core.</span>
              </h2>
              <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] mt-3">
                Singapore’s first elite performance lab.
              </p>
            </div>
          </div>

          {/* RIGHT: SIDE-BY-SIDE BUTTONS */}
          <div className="relative z-10 flex flex-row flex-wrap justify-center items-center gap-3 md:gap-4 w-full lg:w-auto">
            <Button 
              asChild
              style={{ backgroundColor: cyan }}
              className="flex-1 sm:flex-none h-12 md:h-14 px-6 md:px-10 rounded-full text-[10px] md:text-[11px] font-[1000] uppercase tracking-widest text-[#1a365d] hover:bg-white transition-all shadow-xl active:scale-95 group/btn whitespace-nowrap"
            >
              <Link href="/contact">
                Join Session
                <Zap size={14} className="ml-2 fill-[#1a365d]" />
              </Link>
            </Button>

            <Button 
              asChild
              className="flex-1 sm:flex-none h-12 md:h-14 px-6 md:px-10 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-[10px] md:text-[11px] font-[1000] uppercase tracking-widest transition-all active:scale-95 whitespace-nowrap"
            >
              <Link href="/contact">
                Corporate Inquiries
                <ArrowRight size={14} className="ml-2" />
              </Link>
            </Button>
          </div>

          {/* DECORATIVE BACKGROUND ACCENT - Scaled for responsiveness */}
          <div className="absolute -bottom-10 -left-10 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-1000 hidden md:block">
             <Target size={150} className="text-white" />
          </div>

        </motion.div>

        {/* BOTTOM PHILOSOPHY LINE (Visible on all) */}
        <div className="mt-8 text-center">
           <p className="text-slate-300 font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px]">
             Strategy • Composure • Performance • <span className="text-[#1a365d]">Woodlands Lab</span>
           </p>
        </div>
      </div>
    </section>
  )
}