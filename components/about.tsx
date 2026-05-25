"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Target, Zap, MessageSquare,MessageCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE: OVERLAPPING VISUALS (Reference 2 Style) */}
          <div className="relative">
            {/* Top Image (The "Mind") */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-10 w-[85%] rounded-[40px] sm:rounded-[60px] overflow-hidden border-8 border-gray-50 shadow-2xl"
            >
              <img 
                src="/about1.png" 
                alt="Strategic Chess Focus" 
                className="w-full h-auto grayscale-[0.2]"
              />
            </motion.div>

            {/* Bottom Image (The "Body") */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 20 }}
              className="absolute -bottom-10 -right-4 z-20 w-[65%] rounded-[30px] sm:rounded-[40px] overflow-hidden border-8 border-white shadow-2xl"
            >
              <img 
                src="/about2.jpg" 
                alt="Physical Core Activation" 
                className="w-full h-auto"
              />
            </motion.div>

            {/* FLOATING SUCCESS BADGE */}
         

            {/* DOT GRID (Reference 1 Style) */}
            <div className="absolute -bottom-20 -left-10 w-40 h-40 opacity-[0.1] -z-10" 
                 style={{ backgroundImage: `radial-gradient(${navy} 2px, transparent 2px)`, backgroundSize: '16px 16px' }} />
          </div>

          {/* RIGHT SIDE: CONTENT & MISSION */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200">
                <span className="bg-white px-6 py-1.5 rounded-full text-[#1a365d] text-[10px] font-black tracking-[0.25em] uppercase shadow-sm">
                  Our Methodology
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-[1000] text-[#1a365d] tracking-tighter leading-[0.95]">
                About the <br />
                <span style={{ color: cyan }}>Strategic Lifestyle.</span>
              </h2>

              <div className="space-y-4 text-slate-500 text-lg leading-relaxed font-medium">
                <p>
                  At <span className="text-[#1a365d] font-bold">Chessmatic LLP</span>, we believe chess is more than just a game—it’s a powerful lab for building elite confidence, sharpening tactical calculation, and fostering mental resilience.
                </p>
                <p>
                  We bring a modern lifestyle concept to Singapore by combining <span className="text-[#1a365d] font-bold">chess, fitness, and social wellness</span>. Our curriculum is designed not just to teach the fundamentals, but to inspire critical performance on the board and beyond.
                </p>
              </div>
            </motion.div>

            {/* FOUNDER PROFILE (Reference 2 Style) */}
   

            {/* CTA BUTTON */}
            <div className="pt-4">
              <Button 
                style={{ backgroundColor: navy }}
                className="hover:opacity-90 text-white px-10 py-7 rounded-full text-md font-bold shadow-xl active:scale-95 transition-all flex items-center gap-3"
              >
                <MessageCircle size={18} />
                Connect with a Coach
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}