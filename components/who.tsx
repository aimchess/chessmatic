"use client"

import { Users, Building2, UserCheck, ArrowRight, Target, Zap, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function WhoWeServe() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const segments = [
    {
      id: "SEGMENT 01",
      group: "Adults",
      title: "Executive Performance",
      desc: "For those looking to sharpen their tactical mind and improve physical composure in high-stakes environments.",
      image: "/exe.jpg",
      icon: <UserCheck className="w-5 h-5 text-sky-500" />,
      segments: ["Professionals", "Beginners", "Hobby Players"],
      benefit: "Decision Logic",
      metric: "+85%"
    },
    {
      id: "SEGMENT 02",
      group: "Corporate Teams",
      title: "Tactical Synergy",
      desc: "Custom-built labs for modern organizations focused on team alignment, leadership, and shared wellness.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      icon: <Building2 className="w-5 h-5 text-rose-500" />,
      segments: ["Leadership Labs", "Team Collaboration", "Employee Wellness"],
      benefit: "Culture ROI",
      metric: "High"
    },
    {
      id: "SEGMENT 03",
      group: "Community & Social",
      title: "Modern Connections",
      desc: "Curated social experiences for individuals who value intellectual growth and meaningful networking.",
      image: "/connect.jpg",
      icon: <Users className="w-5 h-5 text-amber-500" />,
      segments: ["Curated Events", "Social Experiences", "Elite Networking"],
      benefit: "Social Capital",
      metric: "Top Tier"
    }
  ]

  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED PILL HEADING */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6">
            <span className="bg-white px-8 py-2 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              Target Segments
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none">
            Who Trains in {" "}
            <span style={{ color: cyan }}>The Lab.</span>
          </h2>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {segments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-[45px] p-3 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* IMAGE HEADER */}
              <div className="relative h-64 w-full rounded-[38px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 to-transparent" />
                
                {/* Floating Category Tag */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-white rounded-full shadow-xl flex items-center gap-2">
                   <div className="bg-[#f1f3f4] p-1 rounded-md">{item.icon}</div>
                   <span className="text-[#1a365d] text-[10px] font-black uppercase tracking-widest">{item.group}</span>
                </div>

                <div className="absolute bottom-6 left-8">
                   <p className="text-white/40 text-[9px] font-black tracking-widest uppercase mb-1">{item.id}</p>
                   <h3 className="text-white text-2xl font-[1000] tracking-tight">{item.title}</h3>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="p-8 flex flex-col flex-1">
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>

                {/* SEGMENTS LIST (Pill Style) */}
                <div className="space-y-3 mb-10">
                   <p className="text-[#1a365d] text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Key Focus Areas</p>
                   <div className="flex flex-wrap gap-2">
                      {item.segments.map((seg, idx) => (
                        <div key={idx} className="px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[#1a365d] text-[11px] font-bold tracking-tight">
                           {seg}
                        </div>
                      ))}
                   </div>
                </div>

                {/* DATA FOOTER */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest">Core Benefit</span>
                      <span className="text-[#1a365d] text-xs font-black">{item.benefit}</span>
                   </div>
                   <div className="text-right">
                      <span className="text-sky-500 text-[9px] font-black uppercase tracking-widest">Impact</span>
                      <div className="flex items-center gap-1">
                         <Zap size={10} className="text-sky-500 fill-sky-500" />
                         <span className="text-[#1a365d] text-lg font-black">{item.metric}</span>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM PHILOSOPHY LINE */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-3 text-[#1a365d] font-black uppercase text-xs tracking-[0.3em] border-b-2 border-sky-500 pb-1 hover:text-sky-500 hover:gap-5 transition-all">
            Join the community
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  )
}