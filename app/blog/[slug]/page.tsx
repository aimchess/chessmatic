"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { useParams } from "next/navigation"

export default function BlogDetailPage() {
  const { slug } = useParams()
  const cyan = "#0ea5e9"

  // DATA OBJECTS (Keeping your full content)
  const cognitiveBenefits = {
    title: "COGNITIVE BENEFITS OF CHESS",
    emoji: "🧠",
    intro: "Chess is more than a game — it is one of the world’s most powerful cognitive‑training systems. At Chessmatic, we use chess intentionally as a tool to strengthen the mind across executive function, attention, memory, problem‑solving, and mental resilience.",
    subIntro: "Modern research shows that long‑term chess engagement reorganizes the brain’s cognitive network, improving efficiency across multiple domains. Chessmatic integrates these benefits into structured adult programmes that enhance both mental performance and everyday decision‑making.",
    sections: [
      {
        title: "EXECUTIVE FUNCTION",
        icon: "⭐",
        desc: "Executive function is the brain’s command centre — responsible for planning, strategy, and self‑control.",
        bullets: ["Strategic planning — evaluating consequences", "Impulse control — resisting quick moves", "Cognitive flexibility — adapting to threats", "Decision architecture — structuring choices"]
      }
    ],
    sidebar: [{ label: "LOGIC", val: "98%" }, { label: "EXECUTIVE", val: "94%" }]
  }

  const plankChessBenefits = {
    title: "BENEFITS OF PLANK-CHESS",
    emoji: "💪",
    intro: "Plank‑Chess is Chessmatic’s signature cognitive + physical dual‑task training system. It combines the static plank with rapid‑decision chess, creating a training effect impossible to achieve alone.",
    subIntro: "Plank‑Chess trains the mind and body to perform under controlled stress — a skill that transfers directly to work, leadership, and daily life.",
    sections: [
      {
        title: "ENHANCED FOCUS",
        icon: "⭐",
        desc: "Holding a plank elevates heart rate and breathing, creating mild physical stress.",
        bullets: ["Cognitive control", "Impulse regulation", "Strategic thinking", "Stress Adaptability"]
      }
    ],
    sidebar: [{ label: "CORE", val: "90%" }, { label: "STABILITY", val: "95%" }]
  }

  const data = slug === "benefits-of-plank-chess" ? plankChessBenefits : cognitiveBenefits

  return (
    <main className="bg-white min-h-screen font-sans pb-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-26">
        
        {/* 1. SIMPLE TEXT LINK (Matches Reference) */}
        <div className="mb-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#1a365d] transition-colors text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <ArrowLeft size={12} strokeWidth={4} />
            Back to Insights
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* 2. ARTICLE CONTENT */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* HEADLINE */}
            <h1 className="text-4xl md:text-7xl font-[1000] text-[#1a365d] tracking-tighter leading-[0.9] italic uppercase">
               <span className="inline-block mr-3 select-none">{data.emoji}</span>
               {data.title}
            </h1>

            {/* INTRO BOX (Reference Style) */}
            <div className="border-l-[6px] border-sky-500 pl-8 py-3">
               <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                  {data.intro}
               </p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              {data.subIntro}
            </p>

            {data.sections.map((sec, i) => (
              <div key={i} className="pt-6 space-y-6">
                <h3 className="text-[#1a365d] font-[1000] text-3xl uppercase tracking-tighter italic flex items-center gap-3">
                  <span className="text-2xl">{sec.icon}</span> {sec.title}
                </h3>
                <p className="text-lg text-slate-600 font-medium">{sec.desc}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sec.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 group hover:border-sky-200 transition-colors">
                      <CheckCircle2 size={16} className="text-sky-500 shrink-0" />
                      <span className="text-sm font-bold text-[#1a365d]">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 3. TECHNICAL SIDEBAR (Reference Style) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 bg-white rounded-[40px] p-10 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
              <h4 className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] mb-12">
                Technical Impact
              </h4>
              
              <div className="space-y-12">
                {data.sidebar.map((stat, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase text-[#1a365d] tracking-widest opacity-60">
                        {stat.label}
                      </span>
                      <span className="text-sm font-black text-[#1a365d]">{stat.val}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: stat.val }} 
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-sky-500 rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* ACTION PILL IN SIDEBAR */}
              <div className="mt-12 pt-10 border-t border-slate-50">
                 <Link href="/contact">
                   <button className="w-full py-4 bg-[#1a365d] text-white rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-sky-500 transition-all shadow-lg active:scale-95">
                      Join Training Lab
                   </button>
                 </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  )
}