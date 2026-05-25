"use client"

import { Rocket, Brain, Users, Zap, CheckCircle2, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function SignatureExperience() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const features = [
    {
      title: "Core + Strategy",
      desc: "Train your physical foundation while the blitz clock is ticking down.",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      bg: "bg-amber-50"
    },
    {
      title: "Mental Endurance",
      desc: "Master focus and decision-making under extreme physical pressure.",
      icon: <Brain className="w-5 h-5 text-blue-500" />,
      bg: "bg-blue-50"
    },
    {
      title: "Social Vibe",
      desc: "A high-energy, fun environment built for modern social wellness.",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      bg: "bg-emerald-50"
    },
    {
      title: "Viral Concept",
      desc: "A visually striking, unique experience designed for modern teams.",
      icon: <Trophy className="w-5 h-5 text-purple-500" />,
      bg: "bg-purple-50"
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: THE VISUAL EXPERIENCE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative z-10 rounded-[50px] overflow-hidden border-[12px] border-gray-50 shadow-2xl">
              <img 
                src="/plank-chess.png" 
                alt="Plank Chess Challenge" 
                className="w-full h-[550px] object-cover"
              />
              
              {/* Bottom Label */}
              <div className="absolute bottom-8 left-8 bg-[#1a365d] px-6 py-3 rounded-2xl flex items-center gap-3">
                <span className="text-white text-xs font-black tracking-widest uppercase flex items-center gap-2">
                  The Experience <Zap size={14} className="text-amber-400 fill-amber-400" />
                </span>
              </div>
            </div>

            {/* Floating Top Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-[30px] shadow-2xl border border-gray-100 flex items-center gap-4"
            >
              <div className="bg-amber-500 p-3 rounded-2xl">
                <Rocket className="text-white w-6 h-6" />
              </div>
              <div className="pr-4">
                <p className="text-[10px] font-black text-[#1a365d] uppercase tracking-tighter leading-none mb-1">Viral Challenge</p>
                <p className="text-blue-600 font-bold text-sm">10x Intensity</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT & FEATURES */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                <span className="text-blue-600 text-[10px] font-black tracking-widest uppercase">Signature Experience</span>
              </div>
              
              <h2 className={`text-3xl md:text-5xl font-[1000] leading-[1.1] tracking-tighter text-[${navy}]`}>
                Not Just Chess. <br />
                It's a <span className="text-sky-500">Hybrid Power.</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg">
                Singapore’s first mental + physical hybrid challenge. Engineered for those who seek elite cognitive and physical balance.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`${f.bg} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>
                    {f.icon}
                  </div>
                  <h4 className="font-black text-[#1a365d] mb-2">{f.title}</h4>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button className="bg-[#1a365d] hover:bg-[#0f213a] text-white px-10 py-7 rounded-[24px] font-bold text-md shadow-xl active:scale-95 transition-all">
                Explore Plank-Chess
              </Button>
              <Button variant="outline" className="border-2 border-gray-100 text-[#1a365d] px-10 py-7 rounded-[24px] font-bold text-md hover:bg-gray-50 active:scale-95 transition-all">
                Book a Session
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}