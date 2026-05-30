"use client"

import { Rocket, Brain, Users, Zap, CheckCircle2, Trophy, Target } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function SignatureExperience() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const features = [
    {
      id: "01",
      title: "Core + Strategy",
      desc: "Train your physical foundation while the blitz clock is ticking down.",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      bg: "bg-amber-50/50"
    },
    {
      id: "02",
      title: "Mental Endurance",
      desc: "Master focus and decision-making under extreme physical pressure.",
      icon: <Brain className="w-5 h-5 text-sky-500" />,
      bg: "bg-sky-50/50"
    },
    {
      id: "03",
      title: "Social Vibe",
      desc: "A high-energy, fun environment built for modern social wellness.",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      bg: "bg-emerald-50/50"
    },
    {
      id: "04",
      title: "Viral Concept",
      desc: "A visually striking, unique experience designed for modern teams.",
      icon: <Trophy className="w-5 h-5 text-purple-500" />,
      bg: "bg-purple-50/50"
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: THE VISUAL VIEWPORT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative z-10 rounded-[60px] overflow-hidden border-[12px] border-slate-50 shadow-2xl">
              <img 
                src="/plank-chess.png" 
                alt="Plank Chess Challenge" 
                className="w-full h-[550px] object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Technical Overlay Badges */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[#1a365d] text-[10px] font-black uppercase tracking-widest italic">Live Lab Training</span>
              </div>

              <div className="absolute bottom-8 left-8 bg-[#1a365d] px-6 py-4 rounded-3xl flex items-center gap-4 shadow-2xl border border-white/10">
                <div className="p-2 bg-sky-500 rounded-lg">
                   <Target size={18} className="text-white" />
                </div>
                <span className="text-white text-xs font-black tracking-widest uppercase">
                  The Experience
                </span>
              </div>
            </div>

            {/* Floating Stats Badge */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-white p-5 rounded-[35px] shadow-2xl border border-gray-100 flex items-center gap-4"
            >
              <div className="bg-amber-500 p-3.5 rounded-2xl shadow-lg shadow-amber-200">
                <Rocket className="text-white w-6 h-6" />
              </div>
              <div className="pr-4">
                <p className="text-[10px] font-black text-[#1a365d] uppercase tracking-tighter leading-none mb-1">Viral Challenge</p>
                <p className="text-sky-500 font-[1000] text-lg italic leading-none">10x Intensity</p>
              </div>
            </motion.div>

            {/* Background Decor Grid */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-[0.1] -z-10" 
                 style={{ backgroundImage: `radial-gradient(${navy} 2px, transparent 2px)`, backgroundSize: '20px 20px' }} />
          </motion.div>

          {/* RIGHT SIDE: CONTENT & PROTOCOLS */}
          <div className="flex flex-col gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f3f4] border border-gray-200">
                <span className="text-[#1a365d] text-[10px] font-[1000] tracking-widest uppercase">Signature Protocol</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-[1000] leading-[1] tracking-tighter text-[#1a365d] uppercase italic">
                Not Just Chess. <br />
                It's <span style={{ color: cyan }}>Hybrid Power.</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg max-w-xl leading-relaxed">
                Singapore’s first mental + physical hybrid challenge. Engineered for those who seek <span className="text-[#1a365d] font-bold">elite cognitive composure</span> and physical stability.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-6 rounded-[35px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-100 transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle Dot Grid in card */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity" 
                       style={{ backgroundImage: `radial-gradient(${navy} 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`${f.bg} w-10 h-10 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                        {f.icon}
                      </div>
                      <span className="text-slate-200 text-xl font-[1000] italic leading-none">/{f.id}</span>
                    </div>
                    <h4 className="font-[1000] text-[#1a365d] uppercase tracking-tight mb-2">{f.title}</h4>
                    <p className="text-xs text-slate-400 font-bold leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button style={{ backgroundColor: navy }} className="hover:opacity-90 text-white px-10 py-8 rounded-full font-[1000] uppercase tracking-widest text-sm shadow-2xl active:scale-95 transition-all">
                Explore Plank-Chess
              </Button>
              <Button variant="outline" className="border-2 border-slate-100 text-[#1a365d] px-10 py-8 rounded-full font-[1000] uppercase tracking-widest text-sm hover:bg-slate-50 active:scale-95 transition-all">
                Book a Session
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}