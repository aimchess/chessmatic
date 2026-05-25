"use client"

import { motion } from "framer-motion"
import { 
  Rocket, Building, Building2, Users, 
  Heart, Lightbulb, UserCheck, Search, 
  Settings, Play, BarChart3, ChevronRight, Target
} from "lucide-react"

export default function CorporateProcess() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const idealFor = [
    { label: "Startups", icon: <Rocket size={16} />, code: "STR-01" },
    { label: "SMEs", icon: <Building size={16} />, code: "SME-02" },
    { label: "Enterprises", icon: <Building2 size={16} />, code: "ENT-03" },
    { label: "Leadership", icon: <UserCheck size={16} />, code: "EXEC-04" },
    { label: "HR Wellness", icon: <Heart size={16} />, code: "WELL-05" },
    { label: "Innovation", icon: <Lightbulb size={16} />, code: "INN-06" },
    { label: "Engagement", icon: <Users size={16} />, code: "TEAM-07" },
  ]

  const flow = [
    {
      step: "01",
      title: "Consultation",
      desc: "Deep-dive into your team goals.",
      status: "Alignment",
      icon: <Search size={20} />
    },
    {
      step: "02",
      title: "Calibration",
      desc: "Custom lab experience planning.",
      status: "Engineering",
      icon: <Settings size={20} />
    },
    {
      step: "03",
      title: "Facilitation",
      desc: "Live Mind & Body session execution.",
      status: "Active",
      icon: <Play size={20} />
    },
    {
      step: "04",
      title: "Analytics",
      desc: "Impact reporting & wrap-up.",
      status: "Results",
      icon: <BarChart3 size={20} />
    }
  ]

  return (
    <div className="space-y-32 py-24 bg-white font-sans overflow-hidden">
      
      {/* 7. IDEAL FOR: STRATEGIC MATRIX */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6">
            <span className="bg-white px-8 py-2 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              Target Profiles
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
            Ideal for <span style={{ color: cyan }}>High-Performers.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {idealFor.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group relative px-8 py-6 rounded-[30px] bg-[#f8fafc] border border-slate-100 flex items-center gap-4 hover:bg-[#1a365d] hover:border-[#1a365d] hover:shadow-2xl transition-all duration-500 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-[#1a365d] flex items-center justify-center shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <div>
                 <p className="text-[#1a365d] text-lg font-[1000] uppercase tracking-tight group-hover:text-white transition-colors">{item.label}</p>
                 <div className="flex items-center gap-2 mt-1">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest group-hover:text-sky-400">{item.code}</span>
                    <div className="w-1 h-1 rounded-full bg-sky-500 opacity-40" />
                    <span className="text-[8px] font-black text-sky-500 uppercase tracking-widest">100% Match</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. EVENT FLOW: PROTOCOL TRACK */}
      <section className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col items-start mb-20">
          <h3 className="text-sky-500 text-xs font-black uppercase tracking-[0.4em] mb-4">Operational Flow</h3>
          <h2 className="text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">How the <br /> <span style={{ color: cyan }}>Lab Operates.</span></h2>
        </div>

        {/* THE TRACK */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-10 left-0 w-full h-[2px] bg-slate-100 hidden md:block -z-10" />

          {flow.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              {/* Step Circle */}
              <div className="w-20 h-20 rounded-[30px] bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center mb-8 relative z-10 group-hover:border-sky-500 transition-all duration-500">
                 <div className="absolute -top-3 -right-3 bg-[#1a365d] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
                    {step.step}
                 </div>
                 <div className="text-[#1a365d] group-hover:text-sky-500 transition-colors">
                    {step.icon}
                 </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    <span className="text-sky-500 text-[9px] font-black uppercase tracking-widest">{step.status}</span>
                 </div>
                 <h4 className="text-[#1a365d] text-xl font-[1000] uppercase tracking-tight">{step.title}</h4>
                 <p className="text-slate-500 text-sm font-medium leading-relaxed pr-4">{step.desc}</p>
              </div>

              {/* Technical Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                 <Target size={12} className="text-slate-400" />
                 <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Protocol Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BACKGROUND DOT GRID (Behind Flow) */}
        <div className="absolute inset-0 opacity-[0.03] -z-20 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(${navy} 2px, transparent 2px)`, backgroundSize: '30px 30px' }} />
      </section>

      {/* FINAL TRANSITION TO CTA */}
      <div className="mt-12 text-center">
         <button className="inline-flex items-center gap-3 text-[#1a365d] font-black uppercase text-xs tracking-[0.3em] border-b-2 border-sky-500 pb-1 hover:text-sky-500 hover:gap-5 transition-all group">
           Start your consultation
           <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
         </button>
      </div>

    </div>
  )
}