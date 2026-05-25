"use client"

import { motion } from "framer-motion"
import { 
  Target, Brain, Zap, Users, 
  ShieldCheck, Heart, TrendingUp, CheckCircle2 
} from "lucide-react"

export default function WhyCompaniesChoose() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const benefits = [
    {
      title: "Strategic Logic",
      desc: "Rewiring decision-making habits for high-stakes environments.",
      icon: <Brain size={24} className="text-sky-500" />
    },
    {
      title: "Pressure Control",
      desc: "Building elite patience and composure under intense deadlines.",
      icon: <Zap size={24} className="text-sky-500" />
    },
    {
      title: "Team Synergy",
      desc: "Encouraging meaningful interaction through tactical challenges.",
      icon: <Users size={24} className="text-sky-500" />
    },
    {
      title: "Stress ROI",
      desc: "Measurable reduction in workplace anxiety and burnout.",
      icon: <Heart size={24} className="text-sky-500" />
    }
  ]

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="bg-white rounded-[60px] p-4 lg:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-slate-50 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT SIDE: CURVED IMAGE VIEWPORT */}
          <div className="w-full lg:w-[45%] relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-10 rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[40px] rounded-br-[40px] overflow-hidden shadow-2xl border-4 border-slate-50"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="Corporate Strategy Team" 
                className="w-full h-[600px] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#1a365d]/10 mix-blend-multiply" />
            </motion.div>

            {/* BRAND ANCHOR ICON (Like the green cross in ref) */}
            <div className="absolute -bottom-10 -left-10 z-20 w-32 h-32 bg-[#1a365d] rounded-3xl flex items-center justify-center shadow-2xl">
               <Target size={60} className="text-sky-400 opacity-20 absolute" />
               <CheckCircle2 size={48} className="text-white" />
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT & BENEFITS GRID */}
          <div className="w-full lg:w-[55%] space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <div className="w-4 h-4 bg-sky-500 rounded-sm" />
                 <span className="text-[#1a365d] text-xs font-black uppercase tracking-[0.3em]">The B2B Protocol</span>
              </div>
              
              <h3 className="text-3xl md:text-3xl font-[1000] text-[#1a365d] tracking-tighter leading-tight italic uppercase">
                When You <span className="bg-sky-500 text-white px-5 py-1 rounded-2xl not-italic inline-block mx-1">Need</span> Performance <br />
                <span className="bg-[#1a365d] text-white px-5 py-1 rounded-2xl not-italic inline-block mt-2">Strategic Lab</span>
              </h3>

              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
                Chessmatic LLP delivers a modern performance concept to Singapore. We don't just facilitate workshops; we rewire team logic through high-intensity mental and physical fusion.
              </p>
            </div>

            {/* BENEFITS GRID (Ref Style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 pt-4">
               {benefits.map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="flex items-start gap-5 group"
                 >
                    {/* REFERENCE STYLE ICON BOX */}
                    <div className="flex flex-col items-center">
                       <div className="p-1 group-hover:scale-110 transition-transform">
                          {item.icon}
                       </div>
                       <div className="w-10 h-[2px] bg-sky-500 mt-4 opacity-30" />
                    </div>
                    
                    <div className="space-y-2">
                       <h4 className="text-[#1a365d] text-xl font-[1000] tracking-tight uppercase">{item.title}</h4>
                       <p className="text-slate-400 text-xs font-bold leading-relaxed">{item.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>

            {/* INCLUSIVE TAG */}
            <div className="pt-8 border-t border-slate-100">
               <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#f8fafc] border border-slate-100">
                  <ShieldCheck size={18} className="text-sky-500" />
                  <p className="text-[#1a365d] text-[10px] font-black uppercase tracking-widest">
                    Safe & Inclusive for <span className="text-sky-500">All Fitness Levels</span>
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}