"use client"

import { motion } from "framer-motion"
import { Zap, Users, Building2, Target, Dumbbell, Trophy, MessageCircle, ArrowRight } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function PTFormats() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const formats = [
    {
      id: "TRACK 01",
      title: "1-on-1 Private PT",
      category: "Personal Training",
      icon: <Dumbbell size={24} className="text-sky-500" />,
      desc: "Dedicated 1-on-1 in-studio coaching at our Woodlands studio. Fully customized workout regimens focused on your personal strength, posture, and conditioning goals.",
      specs: [
        "60-90 min custom 1-on-1 sessions",
        "Targeted strength & core conditioning",
        "Personalized fitness progression tracker",
        "Form correction & injury prevention"
      ],
      outcome: "Peak Physical Stamina",
      color: "border-sky-100/50"
    },
    {
      tier: "TRACK 02",
      id: "TRACK 02",
      title: "Small Group Conditioning",
      category: "Group Batches",
      icon: <Users size={24} className="text-amber-500" />,
      desc: "High-energy functional fitness batches that blend circuit training, kettlebell mechanics, core endurance, and mobility flow in a supportive environment.",
      specs: [
        "Small group interactive cohorts",
        "Dynamic functional circuits & intervals",
        "Core & postural conditioning",
        "Motivating training atmosphere"
      ],
      outcome: "Functional Fitness",
      color: "border-amber-100/50"
    },
    {
      id: "TRACK 03",
      title: "Executive Posture & Mobility",
      category: "Desk Recovery",
      icon: <Building2 size={24} className="text-[#1a365d]" />,
      desc: "Specialized rehabilitation and mobility coaching for corporate executives and desk workers suffering from upper back stiffness, neck pain, and tight hip flexors.",
      specs: [
        "Ergonomic movement correction",
        "Thoracic mobility & shoulder relief",
        "Deep spinal alignment drills",
        "Sustainable workplace energy"
      ],
      outcome: "Desk Pain Relief",
      color: "border-slate-200"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* CENTERED PILL HEADING */}
        <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6"
          >
            <span className="bg-white px-4 sm:px-8 py-1.5 rounded-full text-[#1a365d] text-[9px] sm:text-[10px] font-[1000] tracking-[0.25em] uppercase shadow-sm">
              Engagement Protocols
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase"
          >
            Delivery <span style={{ color: cyan }}>Formats.</span>
          </motion.h2>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {formats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`
                bg-white rounded-[35px] md:rounded-[45px] p-6 sm:p-10 border-2 ${item.color} 
                shadow-[0_15px_45px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:border-sky-200 
                transition-all duration-500 group relative flex flex-col h-full
                ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""}
              `}
            >
              {/* OPERATION ID TAG */}
              <div className="absolute top-6 right-6 md:top-8 md:right-10">
                 <span className="text-slate-300 text-[8px] md:text-[10px] font-black tracking-widest">{item.id}</span>
              </div>

              {/* ICON & CATEGORY */}
              <div className="mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center mb-4 md:mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                   {item.icon}
                </div>
                <span className="text-sky-500 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em]">{item.category}</span>
                <h3 className="text-xl md:text-2xl font-[1000] text-[#1a365d] tracking-tight mt-2">{item.title}</h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 font-medium">
                {item.desc}
              </p>

              {/* PROTOCOL SPECS */}
              <div className="space-y-4 mb-8 md:mb-10">
                 <p className="text-[#1a365d] text-[9px] font-black uppercase tracking-widest opacity-30">Engagement Protocol</p>
                 <div className="space-y-3">
                    {item.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                         <span className="text-[#1a365d] text-xs md:text-[13px] font-bold tracking-tight">{spec}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* DATA FOOTER */}
              <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-4">
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <Target size={14} className="text-sky-400" />
                      <span className="text-slate-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Target Outcome</span>
                   </div>
                   <span className="text-[#1a365d] text-xs font-black italic">{item.outcome}</span>
                 </div>

                 {/* Action buttons: Book Trial + Arrow */}
                 <div className="flex items-center gap-3">
                   <a
                     href={getWhatsAppUrl(`Hi Chessmatic! I'd like to book a trial for ${item.title} (${item.category}). Target Outcome: ${item.outcome}. Please share available slots, schedule, and pricing.`)}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] md:text-xs font-[1000] uppercase tracking-wider shadow-md hover:shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                   >
                     <MessageCircle size={15} className="fill-current" />
                     <span>Book Trial</span>
                   </a>

                   <a
                     href={getWhatsAppUrl(`Hi Chessmatic! I'd like to book a trial for ${item.title} (${item.category}). Target Outcome: ${item.outcome}. Please share available slots, schedule, and pricing.`)}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label={`Book trial on WhatsApp for ${item.title}`}
                     className="w-11 h-11 rounded-xl bg-slate-50 text-slate-400 hover:bg-[#25D366] hover:text-white group-hover:bg-sky-500 group-hover:text-white transition-all shadow-sm flex items-center justify-center shrink-0"
                   >
                      <ArrowRight size={16} />
                   </a>
                 </div>
              </div>
              
              {/* Subtle technical background grid inside card on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] pointer-events-none transition-opacity duration-500" 
                   style={{ backgroundImage: `radial-gradient(${navy} 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION FOOTNOTE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center px-4"
        >
           <p className="text-slate-300 font-bold uppercase tracking-[0.2em] text-[8px] md:text-[9px]">
             Customized formats available for <span className="text-[#1a365d]">Chess + PT</span>, <span className="text-[#1a365d]">Chess Separate</span> & <span className="text-[#1a365d]">PT Separate</span>
           </p>
        </motion.div>

      </div>
    </section>
  )
}