"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Users, Building2, Target, Dumbbell, 
  MessageCircle, ArrowRight, Clock, MapPin, 
  CheckCircle2, Sparkles, X, Info 
} from "lucide-react"
import { getWhatsAppUrl } from "@/lib/whatsapp"

interface PTFormatItem {
  id: string
  title: string
  category: string
  icon: React.ReactNode
  desc: string
  specs: string[]
  outcome: string
  color: string
  duration: string
  location: string
  setup: string
  idealFor: string
  deepSpecs: string[]
  takeaways: string[]
}

export default function PTFormats() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  const [selectedFormat, setSelectedFormat] = useState<PTFormatItem | null>(null)

  const formats: PTFormatItem[] = [
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
      color: "border-sky-100/50",
      duration: "60 - 90 mins / session",
      location: "Woodlands Studio, Singapore",
      setup: "1-on-1 Private Trainer",
      idealFor: "Executives and dedicated athletes who require customized physical training, injury rehab, or rapid strength gains.",
      deepSpecs: [
        "Baseline functional movement screening & posture assessment",
        "Targeted progressive overload training (strength, mobility & core)",
        "Real-time biomechanical cues and injury-prevention adjustments",
        "Cardiovascular stamina conditioning calibrated for mental resilience"
      ],
      takeaways: [
        "Personalized digital workout logs and progression benchmarks",
        "Direct coach accountability and nutrition/recovery guidelines",
        "At-home mobility and recovery homework drills",
        "Priority scheduling across flexible studio hours"
      ]
    },
    {
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
      color: "border-amber-100/50",
      duration: "60 mins / session",
      location: "Woodlands Studio, Singapore",
      setup: "Small Cohort (3-6 Trainees)",
      idealFor: "Individuals looking for motivating, dynamic group fitness sessions that build functional strength and aerobic capacity.",
      deepSpecs: [
        "Functional circuit training utilizing kettlebells, dumbbells, and bodyweight",
        "High-intensity interval protocols (HIIT) balanced with active recovery",
        "Core stability & rotational power development",
        "Team conditioning challenges and peer motivation"
      ],
      takeaways: [
        "Structured weekly training cycle with progressive variations",
        "Body composition and endurance milestone tracking",
        "Dynamic partner drills and supportive cohort community",
        "Cost-effective alternative to private PT with high trainer oversight"
      ]
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
      color: "border-slate-200",
      duration: "45 - 60 mins / session",
      location: "Woodlands Studio or Virtual Ergonomics",
      setup: "1-on-1 or Corporate Cohorts",
      idealFor: "Desk-bound professionals, remote tech workers, and executives dealing with chronic forward head posture and sedentary stiffness.",
      deepSpecs: [
        "Thoracic spine opening and scapular stabilization protocols",
        "Hip flexor elongation and glute activation drills",
        "Cervical spine decompression and breathing mechanics",
        "Desk-side micro-mobility habits to prevent daily fatigue accumulation"
      ],
      takeaways: [
        "Customized workstation ergonomic audit and posture cheat-sheet",
        "5-minute daily desk routine video guides",
        "Measurable reduction in back/neck stiffness within 3 weeks",
        "Enhanced daily focus, cognitive clarity, and sustained energy"
      ]
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

                 {/* Action buttons: Book Trial (WhatsApp) + More Info Arrow (Modal) */}
                 <div className="flex items-center gap-3">
                   {/* WhatsApp Button */}
                   <a
                     href={getWhatsAppUrl(`Hi Chessmatic! I'd like to book a trial for ${item.title} (${item.category}). Target Outcome: ${item.outcome}. Please share available slots, schedule, and pricing.`)}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] md:text-xs font-[1000] uppercase tracking-wider shadow-md hover:shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                   >
                     <MessageCircle size={15} className="fill-current" />
                     <span>Book Trial</span>
                   </a>

                   {/* Arrow Button: Opens Track Specs Modal */}
                   <button
                     type="button"
                     onClick={() => setSelectedFormat(item)}
                     aria-label={`View full details for ${item.title}`}
                     title="View track specifications & details"
                     className="w-11 h-11 rounded-xl bg-slate-50 text-slate-500 hover:bg-[#1a365d] hover:text-white group-hover:border-sky-300 border border-slate-200/60 transition-all shadow-sm flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 cursor-pointer"
                   >
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                   </button>
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

      {/* MORE INFO MODAL */}
      <AnimatePresence>
        {selectedFormat && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFormat(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl border border-slate-100 overflow-hidden z-10 flex flex-col max-h-[92vh] my-auto"
            >
              {/* MODAL HEADER (shrink-0 ensures it never squishes or cuts text) */}
              <div className="relative shrink-0 p-5 sm:p-7 md:p-8 bg-gradient-to-br from-[#1a365d] to-[#0f2444] text-white">
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '16px 16px' }}
                />

                <button
                  onClick={() => setSelectedFormat(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/25 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md z-20"
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>

                <div className="relative z-10 flex items-center gap-2.5 mb-2.5 pr-10">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/15 border border-white/20 text-sky-300 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.25em]">
                    {selectedFormat.category}
                  </span>
                  <span className="text-white/50 text-[9px] sm:text-[10px] font-black tracking-widest uppercase">
                    {selectedFormat.id}
                  </span>
                </div>

                <h3 className="relative z-10 text-xl sm:text-2xl md:text-3xl font-[1000] text-white tracking-tight uppercase leading-tight pr-10">
                  {selectedFormat.title}
                </h3>
                <p className="relative z-10 mt-2 text-slate-300 text-xs sm:text-sm font-medium leading-relaxed pr-6">
                  {selectedFormat.desc}
                </p>
              </div>

              {/* MODAL BODY (flex-1 min-h-0 overflow-y-auto ensures smooth inner scrolling) */}
              <div className="flex-1 min-h-0 p-5 sm:p-7 md:p-8 overflow-y-auto space-y-5 sm:space-y-6 text-slate-700">
                
                {/* QUICK SPEC CHIPS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      <Clock size={16} />
                    </div>
                    <div>
                      <span className="text-[8px] sm:text-[9px] uppercase font-black tracking-wider text-slate-400 block">Session Length</span>
                      <span className="text-xs font-bold text-[#1a365d] leading-tight block mt-0.5">{selectedFormat.duration}</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span className="text-[8px] sm:text-[9px] uppercase font-black tracking-wider text-slate-400 block">Location</span>
                      <span className="text-xs font-bold text-[#1a365d] leading-tight block mt-0.5">{selectedFormat.location}</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Users size={16} />
                    </div>
                    <div>
                      <span className="text-[8px] sm:text-[9px] uppercase font-black tracking-wider text-slate-400 block">Structure</span>
                      <span className="text-xs font-bold text-[#1a365d] leading-tight block mt-0.5">{selectedFormat.setup}</span>
                    </div>
                  </div>
                </div>

                {/* TARGET AUDIENCE */}
                <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-3.5 sm:p-4 flex items-start gap-3">
                  <Info size={18} className="text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-sky-900 block mb-0.5">
                      Recommended For
                    </span>
                    <p className="text-xs font-medium text-sky-800 leading-relaxed">
                      {selectedFormat.idealFor}
                    </p>
                  </div>
                </div>

                {/* TRAINING PROTOCOL */}
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-sky-500" />
                    <h4 className="text-[11px] sm:text-xs font-[1000] uppercase tracking-wider text-[#1a365d]">
                      Training Protocols & Regimen
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {selectedFormat.deepSpecs.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                        <CheckCircle2 size={14} className="text-sky-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-bold text-slate-700 leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WHAT'S INCLUDED */}
                <div className="space-y-2.5 sm:space-y-3">
                  <h4 className="text-[11px] sm:text-xs font-[1000] uppercase tracking-wider text-[#1a365d]">
                    Deliverables & Inclusions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {selectedFormat.takeaways.map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                        <span className="text-xs font-medium text-slate-600 leading-snug">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* MODAL FOOTER ACTIONS */}
              <div className="shrink-0 p-4 sm:p-5 md:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedFormat(null)}
                  className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200 transition-colors cursor-pointer"
                >
                  Close
                </button>

                <a
                  href={getWhatsAppUrl(`Hi Chessmatic! I reviewed the details for ${selectedFormat.title} (${selectedFormat.category}) and would like to book a trial / consultation. Please share available slots.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 sm:py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-[1000] uppercase tracking-wider shadow-md hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} className="fill-current" />
                  <span>Book Trial for {selectedFormat.title}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}