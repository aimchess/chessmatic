"use client"

import { Linkedin, Twitter, Quote, Trophy, Target, ArrowRight, ShieldCheck, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function FounderSection() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: THE STRATEGIST VISUALS */}
          <div className="relative sticky top-24">
            {/* Primary Portrait: Professional Leadership */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10 w-[85%] rounded-[50px] overflow-hidden border-8 border-gray-50 shadow-2xl"
            >
              <img 
                src="/wagish-main.jpg" // High-end professional portrait
                alt="Wagish - Founder of Chessmatic" 
                className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/40 to-transparent" />
            </motion.div>

            {/* Overlapping Action Shot: Fitness & Discipline */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 20 }}
              className="absolute -bottom-10 -right-4 z-20 w-[55%] rounded-[35px] overflow-hidden border-8 border-white shadow-2xl"
            >
              <img 
                src="/wagish-action.jpg" // Action shot: Functional training or over-the-board focus
                alt="Wagish in Action" 
                className="w-full h-auto"
              />
            </motion.div>

            {/* AUTHORITY BADGE 01: INTCHESS ASIA */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute top-1/4 -left-8 z-30 bg-white p-5 rounded-[30px] shadow-2xl border border-gray-100 flex items-center gap-4"
            >
              <div className="bg-[#1a365d] p-3 rounded-2xl shadow-lg">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <div className="pr-4">
                <p className="text-[#1a365d] text-[10px] font-black uppercase tracking-tighter leading-none mb-1">Tournament Director</p>
                <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1">Intchess Asia</p>
              </div>
            </motion.div>

            {/* AUTHORITY BADGE 02: WELLNESS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute -top-10 right-10 z-30 bg-white p-4 rounded-[25px] shadow-2xl border border-gray-100 flex items-center gap-3"
            >
              <div className="bg-sky-500 p-2 rounded-xl">
                <Target className="text-white w-4 h-4" />
              </div>
              <span className="text-[#1a365d] text-[10px] font-black uppercase tracking-widest">Functional Wellness Expert</span>
            </motion.div>

            <div className="absolute -top-10 -left-10 w-40 h-40 opacity-[0.1] -z-10" 
                 style={{ backgroundImage: `radial-gradient(${navy} 2px, transparent 2px)`, backgroundSize: '18px 18px' }} />
          </div>

          {/* RIGHT SIDE: THE BIO & ECOSYSTEM */}
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200">
                <span className="bg-white px-8 py-2 rounded-full text-[#1a365d] text-[10px] font-black tracking-[0.25em] uppercase shadow-sm">
                  The Founder
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
                Meet{" "}
                <span style={{ color: cyan }}>Wagish.</span>
              </h2>

              <div className="space-y-6 text-slate-500 text-lg leading-relaxed font-medium">
                <p>
                  Wagish is the Founder of <span className="text-[#1a365d] font-bold">Chessmatic LLP</span> and the Tournament Director of <span className="text-[#1a365d] font-bold">Intchess Asia</span>. Recognised in Singapore for creating high-performance environments, he integrates chess education, cognitive training, and adult wellness into a single ecosystem.
                </p>
                
                <p>
                  Beyond the board, Wagish brings a background in functional training and conditioning. This personal commitment to physical resilience forms the foundation of Chessmatic’s unique philosophy: <span className="text-sky-500 italic font-black">"A sharper mind and a stronger body go hand in hand."</span>
                </p>

                <p>
                  At Intchess Asia, he leads tournament direction and coach training, ensuring a premium experience valued for its professionalism and clarity. Through Chessmatic, he extends this discipline to adults — offering a <span className="text-[#1a365d] font-bold underline decoration-sky-500 decoration-2 underline-offset-4">premium space in Woodlands</span> for those seeking holistic growth.
                </p>
              </div>
            </motion.div>

            {/* ECOSYSTEM STATS CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-10 bg-[#f8fafc] rounded-[45px] border border-gray-100 relative overflow-hidden group"
            >
              <Quote className="absolute -top-2 -right-2 text-sky-500/5 w-32 h-32 rotate-12" />
              <div className="grid grid-cols-2 gap-10 relative z-10">
                 <div className="space-y-2">
                    <div className="flex items-baseline gap-1">
                      <p className="text-[#1a365d] text-4xl font-[1000] tracking-tighter italic">02</p>
                    </div>
                    <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] leading-tight">Trusted <br /> Ecosystems</p>
                 </div>
                 <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin size={24} className="text-sky-500" />
                      <p className="text-[#1a365d] text-2xl font-[1000] tracking-tighter italic">Woodlands</p>
                    </div>
                    <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] leading-tight">Premium <br /> Strategy Lab</p>
                 </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-[#1a365d] text-xs font-bold italic opacity-70">
                  "Adults deserve a community-driven environment that supports both mental and physical performance."
                </p>
              </div>
            </motion.div>

            {/* CONNECT & SOCIALS */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
               <div className="flex gap-4">
                  <a href="#" className="w-14 h-14 rounded-2xl bg-[#1a365d] text-white flex items-center justify-center hover:bg-sky-500 transition-all shadow-xl shadow-navy/10 hover:-translate-y-1">
                    <Linkedin size={22} />
                  </a>
                  <a href="#" className="w-14 h-14 rounded-2xl bg-white border border-gray-100 text-[#1a365d] flex items-center justify-center hover:bg-[#1a365d] hover:text-white transition-all shadow-lg hover:-translate-y-1">
                    <Twitter size={22} />
                  </a>
               </div>
               
               <div className="h-10 w-[1px] bg-gray-200 hidden sm:block" />

               <button className="flex items-center gap-3 text-[#1a365d] font-black uppercase text-xs tracking-[0.3em] border-b-2 border-sky-500 pb-1 transition-all hover:text-sky-500 hover:gap-6 group">
                  Learn About Intchess Asia
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}