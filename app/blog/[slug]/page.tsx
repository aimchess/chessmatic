"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, MessageCircle, Sparkles, Brain, ShieldCheck, ExternalLink, Calendar, BookOpen, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { blogPosts } from "@/lib/blogData"

export default function BlogDetailPage() {
  const params = useParams()
  const slug = (params?.slug as string) || "never-too-late-to-play-chess"

  // Load post from shared blog data, fallback gracefully
  const data = blogPosts[slug] || blogPosts["never-too-late-to-play-chess"] || blogPosts["cognitive-benefits-of-chess"]

  return (
    <main className="bg-white min-h-screen font-sans pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 md:pt-16">
        
        {/* BACK NAVIGATION */}
        <div className="mb-8 md:mb-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#1a365d] transition-colors text-[10px] md:text-xs font-black uppercase tracking-[0.25em]"
          >
            <ArrowLeft size={14} strokeWidth={3} />
            Back to Insights
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* MAIN ARTICLE BODY */}
          <article className="lg:col-span-7 xl:col-span-8 space-y-8 sm:space-y-10">
            
            {/* META TAGS */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100/80 text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-sm">
                {data.category}
              </span>
              <span className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                <Clock size={13} className="text-sky-500" />
                {data.readTime}
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[9px] font-black uppercase tracking-wider">
                {data.impact}
              </span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-[1000] text-[#1a365d] tracking-tight leading-[1.05] italic uppercase">
               <span className="inline-block mr-3 select-none not-italic">{data.emoji}</span>
               {data.title}
            </h1>

            {/* FEATURED BANNER IMAGE */}
            {data.image && (
              <div className="relative h-64 sm:h-80 md:h-96 rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-100 shadow-lg">
                <img 
                  src={data.image} 
                  alt={data.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/50 via-transparent to-transparent" />
              </div>
            )}

            {/* INTRO CALLOUT BLOCK */}
            <div className="border-l-[5px] sm:border-l-[6px] border-sky-500 pl-5 sm:pl-7 py-2 sm:py-3 bg-sky-50/30 rounded-r-2xl">
               <p className="text-base sm:text-xl text-slate-700 font-semibold leading-relaxed">
                  {data.intro}
               </p>
            </div>

            {/* SUB-INTRO PARAGRAPH */}
            {data.subIntro && (
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {data.subIntro}
              </p>
            )}

            {/* SCIENTIFIC COMPARISON TABLE (IF AVAILABLE) */}
            {data.table && (
              <div className="pt-4 sm:pt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  <h3 className="text-[#1a365d] font-[1000] text-xl sm:text-2xl uppercase tracking-tight italic">
                    Core Benefits Summary
                  </h3>
                </div>
                <div className="overflow-x-auto rounded-[24px] border border-slate-200/90 shadow-md">
                  <table className="w-full text-left border-collapse min-w-[580px]">
                    <thead>
                      <tr className="bg-[#1a365d] text-white">
                        {data.table.headers.map((header, idx) => (
                          <th key={idx} className="p-4 sm:p-5 text-[10px] sm:text-xs font-black uppercase tracking-wider">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {data.table.rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white hover:bg-sky-50/30 transition-colors" : "bg-slate-50/60 hover:bg-sky-50/40 transition-colors"}>
                          <td className="p-4 sm:p-5 text-xs sm:text-sm font-black text-[#1a365d] align-top">
                            {row[0]}
                          </td>
                          <td className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-sky-700 align-top">
                            {row[1]}
                          </td>
                          <td className="p-4 sm:p-5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed align-top">
                            {row[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* CONTENT SECTIONS */}
            {data.sections.map((sec, i) => (
              <section key={i} className="pt-4 sm:pt-6 space-y-4">
                <h3 className="text-[#1a365d] font-[1000] text-xl sm:text-2xl uppercase tracking-tight italic flex items-center gap-3">
                  {sec.icon && <span className="text-2xl not-italic">{sec.icon}</span>} 
                  {sec.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  {sec.desc}
                </p>
                
                {sec.bullets && sec.bullets.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                    {sec.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-100 group hover:border-sky-200 transition-colors">
                        <CheckCircle2 size={18} className="text-sky-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-bold text-[#1a365d] leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* CALLOUT BOX (CORRELATION VS CAUSATION / NUANCE) */}
            {data.callout && (
              <div className="p-6 sm:p-8 rounded-[28px] bg-gradient-to-br from-sky-50/90 via-blue-50/40 to-white border border-sky-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2.5">
                  <Brain size={20} className="text-sky-600 shrink-0" />
                  <h4 className="text-[#1a365d] font-black uppercase tracking-wider text-xs sm:text-sm">
                    {data.callout.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {data.callout.content}
                </p>
              </div>
            )}

            {/* SCIENTIFIC REFERENCES */}
            {data.references && data.references.length > 0 && (
              <div className="pt-6 border-t border-slate-200/80 space-y-4">
                <h4 className="text-[#1a365d] font-black uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                  <BookOpen size={16} className="text-sky-500" />
                  Scientific & Medical Sources
                </h4>
                <div className="space-y-2.5">
                  {data.references.map((ref, idx) => (
                    <a
                      key={idx}
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-sky-50/70 border border-slate-100 hover:border-sky-200 transition-all group"
                    >
                      <span className="text-xs font-bold text-slate-700 group-hover:text-sky-700 transition-colors pr-4">
                        [{idx + 1}] {ref.title}
                      </span>
                      <ExternalLink size={14} className="text-slate-400 group-hover:text-sky-600 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* BOTTOM CTA PROMPT */}
            <div className="p-6 sm:p-8 rounded-[28px] bg-[#1a365d] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-[1000] tracking-tight uppercase italic">
                  Ready to make your first move?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  Explore beginner-friendly tutorials, adult cohorts, and private master coaching at Chessmatic.
                </p>
              </div>
              <a
                href={getWhatsAppUrl(`Hi Chessmatic! I read your insight "${data.title}" and would like to learn about your adult and senior chess training programs.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-white rounded-full font-black uppercase text-xs tracking-wider transition-all shadow-lg active:scale-95 flex items-center gap-2"
              >
                <MessageCircle size={16} className="fill-current" />
                Chat with Our Coach
              </a>
            </div>

          </article>

          {/* STICKY SIDEBAR */}
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
              <div className="pt-4 border-t border-slate-100 space-y-3">
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

                 <Link href="/adult-classes" className="block w-full text-center py-2.5 text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-sky-600 transition-colors">
                    Explore Adult Classes &rarr;
                 </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  )
}