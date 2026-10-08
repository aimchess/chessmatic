"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, MessageCircle, Sparkles, BookOpen, Target, Brain, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function BlogDetailPage() {
  const { slug } = useParams()
  const cyan = "#0ea5e9"

  // DATA OBJECTS (Qualitative, science-backed and professional - no fake percentages)
  const cognitiveBenefits = {
    title: "COGNITIVE BENEFITS OF CHESS",
    emoji: "🧠",
    category: "Cognitive Performance",
    readTime: "12 min read",
    intro: "Chess is more than a game — it is one of the world’s most powerful cognitive‑training systems. At Chessmatic, we use chess intentionally as a tool to strengthen the mind across executive function, attention, memory, problem‑solving, and mental resilience.",
    subIntro: "Modern research shows that long‑term chess engagement reorganizes the brain’s cognitive network, improving efficiency across multiple domains. Chessmatic integrates these benefits into structured adult programmes that enhance both mental performance and everyday decision‑making.",
    sections: [
      {
        title: "EXECUTIVE FUNCTION",
        icon: "⭐",
        desc: "Executive function is the brain’s command centre — responsible for planning, strategy, and self‑control.",
        bullets: ["Strategic planning — evaluating consequences", "Impulse control — resisting quick moves", "Cognitive flexibility — adapting to threats", "Decision architecture — structuring choices"]
      },
      {
        title: "CALCULATION VELOCITY & WORKING MEMORY",
        icon: "🎯",
        desc: "Deep tactical calculation strengthens working memory capacity by training the brain to hold complex, branching tree structures in mind simultaneously.",
        bullets: ["Multi-move visual projection", "Pattern recognition under clock pressure", "Branch pruning & error elimination", "Positional intuition development"]
      }
    ],
    takeaways: [
      { title: "Strategic Architecture", desc: "Systematically evaluate consequences before making critical high-stakes decisions." },
      { title: "Impulse Regulation", desc: "Learn to pause and suppress immediate reactive impulses in favor of deeper analysis." },
      { title: "Cognitive Agility", desc: "Smoothly pivot strategies and adapt when plans face unexpected external threats." }
    ],
    targetProfile: "Adults, Executives & Competitive Players",
    deliveryMode: "Woodlands Studio & Virtual Coaching"
  }

  const ptChessBenefits = {
    title: "BENEFITS OF CHESS + PT",
    emoji: "💪",
    category: "Dual-Task Wellness",
    readTime: "10 min read",
    intro: "Chess + PT is Chessmatic’s signature cognitive + physical dual‑task training system. It combines structured physical conditioning with rapid‑decision chess, creating a training effect impossible to achieve alone.",
    subIntro: "Chess + PT trains the mind and body to perform under controlled stress — a skill that transfers directly to work, leadership, and daily life.",
    sections: [
      {
        title: "ENHANCED FOCUS & ENDURANCE",
        icon: "⭐",
        desc: "Physical conditioning elevates heart rate and breathing, simulating high-pressure tactical scenarios.",
        bullets: ["Cognitive control", "Impulse regulation", "Strategic thinking", "Stress Adaptability"]
      },
      {
        title: "NEURO-MOTOR SYNERGY",
        icon: "⚡",
        desc: "Calculating chess tactics while maintaining isometric plank positions or physical tension teaches the central nervous system to remain composed under intense somatic stress.",
        bullets: ["Breath control under exertion", "Core stability & postural alignment", "Fatigue mitigation during deep work", "Real-time emotional composure"]
      }
    ],
    takeaways: [
      { title: "Stress Inoculation", desc: "Calibrate mental composure so complex calculations stay sharp under elevated heart rates." },
      { title: "Postural Stamina", desc: "Eliminate desk fatigue and neck strain through targeted core and spinal alignment." },
      { title: "Executive Resilience", desc: "Develop the stamina needed to maintain peak decision quality throughout long workdays." }
    ],
    targetProfile: "Corporate Leaders, Desk Workers & Athletes",
    deliveryMode: "Woodlands Studio & Corporate Offsites"
  }

  const data = (slug === "science-of-chess-pt" || slug === "benefits-of-plank-chess") ? ptChessBenefits : cognitiveBenefits

  return (
    <main className="bg-white min-h-screen font-sans pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-20">
        
        {/* 1. SIMPLE TEXT LINK */}
        <div className="mb-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#1a365d] transition-colors text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <ArrowLeft size={12} strokeWidth={4} />
            Back to Insights
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* 2. ARTICLE CONTENT */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8 sm:space-y-10">
            
            {/* META TAGS */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-600 border border-sky-100 text-[9px] font-black uppercase tracking-widest">
                {data.category}
              </span>
              <span className="text-slate-400 text-xs font-bold">
                {data.readTime}
              </span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[1000] text-[#1a365d] tracking-tighter leading-[0.95] italic uppercase">
               <span className="inline-block mr-3 select-none">{data.emoji}</span>
               {data.title}
            </h1>

            {/* INTRO BOX */}
            <div className="border-l-[5px] sm:border-l-[6px] border-sky-500 pl-6 sm:pl-8 py-2 sm:py-3">
               <p className="text-lg sm:text-2xl text-slate-500 font-medium leading-relaxed">
                  {data.intro}
               </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {data.subIntro}
            </p>

            {data.sections.map((sec, i) => (
              <div key={i} className="pt-4 sm:pt-6 space-y-5">
                <h3 className="text-[#1a365d] font-[1000] text-2xl sm:text-3xl uppercase tracking-tighter italic flex items-center gap-3">
                  <span className="text-2xl">{sec.icon}</span> {sec.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">{sec.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {sec.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 sm:p-4 bg-slate-50/70 rounded-2xl border border-slate-100 group hover:border-sky-200 transition-colors">
                      <CheckCircle2 size={16} className="text-sky-500 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-[#1a365d]">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 3. QUALITATIVE INSIGHT SUMMARY SIDEBAR */}
          <aside className="lg:col-span-5 xl:col-span-4 w-full">
            <div className="lg:sticky lg:top-28 bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.03)] space-y-6">
              
              {/* SIDEBAR HEADER */}
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
                <Sparkles size={16} className="text-sky-500" />
                <h4 className="text-[#1a365d] font-black uppercase tracking-[0.25em] text-[10px]">
                  Core Focus Pillars
                </h4>
              </div>
              
              {/* PILLARS / TAKEAWAYS LIST */}
              <div className="space-y-4">
                {data.takeaways.map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span className="text-xs font-[1000] uppercase text-[#1a365d] tracking-wide">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pl-3.5 font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* PROGRAM METADATA */}
              <div className="pt-2 space-y-3">
                <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-100/60 flex items-start gap-3">
                  <Brain size={16} className="text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-sky-900 block">Recommended For</span>
                    <span className="text-xs font-bold text-sky-800 leading-tight block mt-0.5">{data.targetProfile}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <ShieldCheck size={16} className="text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block">Available Modes</span>
                    <span className="text-xs font-bold text-[#1a365d] leading-tight block mt-0.5">{data.deliveryMode}</span>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="pt-4 border-t border-slate-100">
                 <a
                   href={getWhatsAppUrl(`Hi Chessmatic! I was reading the insight on "${data.title}" and would like to learn more or book a trial session.`)}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block w-full"
                 >
                   <button className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-2xl font-[1000] uppercase text-[11px] tracking-wider transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                      <MessageCircle size={16} className="fill-current" />
                      Book a Trial Session
                   </button>
                 </a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  )
}