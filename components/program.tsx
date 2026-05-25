"use client"

import { Check, Users, Shield, Trophy, Activity, Building2 } from "lucide-react"
import { motion } from "framer-motion"

export default function ProgramsOverview() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const programs = [
    {
      level: "PHASE 1",
      title: "Adult Chess Classes",
      description: "Structured adult-focused learning designed to establish foundational habits and strategic depth.",
      motto: "“EVERY GREAT STRATEGIST STARTED HERE. WE ENSURE YOU START RIGHT.”",
      features: [
        "Beginner: Rules & piece movement",
        "Intermediate: Tactics & calculation",
        "Advanced: Deep calculation mastery",
        "Tournament performance training"
      ],
      footerIcon: <Users size={18} className="text-sky-500" />,
      footerText: "Adult-only learning environment — maximum focus per batch.",
      image: "/adult-chess.webp",
      icon: <Shield size={20} className="text-white" />
    },
    {
      level: "PHASE 2",
      title: "Plank-Chess Sessions",
      description: "Weekly hybrid challenges prioritizing thinking quality under physical and time-based discipline.",
      motto: "“WE BUILD THE THINKING HABITS THAT WIN UNDER PRESSURE.”",
      features: [
        "Social Nights: Fun & networking",
        "Competitive formats: Blitz pressure",
        "Group challenges: Team relays",
        "Physical core & breathing control"
      ],
      footerIcon: <Activity size={18} className="text-sky-500" />,
      footerText: "Accessible for all fitness and chess skill levels.",
      image: "/plank2.png",
      icon: <Trophy size={20} className="text-white" />
    },
    {
      level: "ELITE & CORPORATE",
      title: "Wellness Workshops",
      description: "At this level, precision, communication, and cognitive team alignment are non-negotiable.",
      motto: "“AT THIS LEVEL, MENTAL PREPARATION IS EVERYTHING.”",
      features: [
        "Interactive team-building",
        "Cognitive performance metrics",
        "Wellness & stress engagement",
        "Leadership development initiatives"
      ],
      footerIcon: <Building2 size={18} className="text-sky-500" />,
      footerText: "Tailored programs focused on HR initiatives and KPIs.",
      image: "/wellness.webp",
      icon: <Building2 size={20} className="text-white" />
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED PILL HEADING (Brand Consistency) */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1.5 border border-gray-200 mb-6">
            <span className="bg-white px-6 py-1.5 rounded-full text-[#1a365d] text-[10px] font-black tracking-[0.2em] uppercase shadow-sm">
              The Programs
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter">
            Our Training <span style={{ color: cyan }}>Curriculum</span>
          </h2>
        </div>

        {/* 3-COLUMN PROGRAM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.03)]"
            >
              {/* IMAGE HEADER */}
              <div className="h-64 relative group overflow-hidden">
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    {prog.icon}
                  </div>
                  <div>
                    <span className="text-sky-400 text-[10px] font-black tracking-widest uppercase mb-1 block">
                      {prog.level}
                    </span>
                    <h3 className="text-white text-2xl font-black tracking-tight">{prog.title}</h3>
                  </div>
                </div>
              </div>

              {/* CONTENT BODY */}
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {prog.description}
                </p>

                <p className="text-sky-600 text-xs font-black tracking-wide leading-relaxed mb-8 uppercase italic">
                  {prog.motto}
                </p>

                {/* FEATURE LIST */}
                <div className="space-y-4 mb-10">
                  {prog.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-sky-50 flex items-center justify-center">
                        <Check size={12} className="text-sky-500" strokeWidth={3} />
                      </div>
                      <span className="text-[#1a365d] text-sm font-bold">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* INFO FOOTER BOX */}
                <div className="mt-auto bg-[#f0f9ff] rounded-2xl p-5 border border-sky-100 flex items-start gap-4">
                  <div className="mt-1">{prog.footerIcon}</div>
                  <p className="text-[#1a365d] text-[11px] font-bold leading-relaxed opacity-80">
                    {prog.footerText}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}