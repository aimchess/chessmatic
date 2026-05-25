"use client"

import { motion } from "framer-motion"
import { 
  ArrowLeft, Share2, Bookmark, 
  MessageCircle, Play, Brain, Target, 
  Zap, CheckCircle2, ChevronRight 
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SingleBlogPage() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* 1. ARTICLE HEADER */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#1a365d] text-[10px] font-black uppercase tracking-widest mb-10 hover:text-sky-500 transition-colors group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Lab Insights
        </Link>
        
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <span className="bg-sky-500 text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg shadow-sky-200">Featured Study</span>
             <span className="text-slate-300 text-[9px] font-black uppercase tracking-widest">Published May 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
            The Science of <span style={{ color: cyan }}>Plank-Chess.</span>
          </h1>
          
          <p className="text-xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-sky-500 pl-6">
            Exploring the neurological benefits of maintaining core stability during high-intensity tactical calculation.
          </p>
        </div>
      </div>

      {/* 2. SPLIT CONTENT: ARTICLE | ANALYSIS SIDEBAR */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24">
        
        {/* Main Article Body (8 Cols) */}
        <div className="lg:col-span-8 space-y-12">
          <div className="rounded-[50px] overflow-hidden shadow-2xl border-8 border-slate-50 relative group">
             <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200" className="w-full h-[500px] object-cover" alt="Article" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/40 to-transparent" />
          </div>

          <article className="prose prose-lg max-w-none text-slate-600 font-medium leading-loose">
            <p>
              In the high-stakes environment of executive decision-making, the ability to find calm amidst chaos is the ultimate competitive advantage. For years, chess has been used as a simulator for mental strategy, while physical core training has been the anchor of functional fitness. 
            </p>
            <h3 className="text-[#1a365d] font-[1000] text-3xl uppercase tracking-tight mt-12 mb-6 italic">The Dual-Task Effect</h3>
            <p>
              When the body is under physical stress—such as a sustained 2-minute plank—the brain's executive function is naturally taxed. By forcing the mind to solve complex tactical chess puzzles simultaneously, we trigger what neuroscientists call the "Dual-Task Performance" shift. 
            </p>
            <p>
              This isn't just about training muscles; it's about <span className="text-[#1a365d] font-bold">cognitive re-wiring</span>. We are teaching the pre-frontal cortex to prioritize logical output over the body's natural "fight or flight" stress response.
            </p>
            
            <div className="my-12 p-10 rounded-[45px] bg-[#f8fafc] border border-slate-100 flex items-center gap-8 italic font-bold text-[#1a365d] text-xl">
               <span className="text-sky-500 text-6xl leading-none">“</span>
               Strategy without stability is fragile. Stability without strategy is stagnant. The Hybrid approach solves both.
            </div>

            <p>
              The result for our adult members in Singapore has been transformative. They report not just higher ELO ratings, but a tangible increase in their "deep work" capacity during their professional workdays.
            </p>
          </article>

          {/* Engagement Hub */}
          <div className="pt-12 border-t border-slate-100 flex items-center justify-between">
             <div className="flex gap-4">
                <Button variant="outline" className="rounded-full gap-2 text-xs font-black uppercase tracking-widest"><Share2 size={14}/> Share</Button>
                <Button variant="outline" className="rounded-full gap-2 text-xs font-black uppercase tracking-widest"><Bookmark size={14}/> Save</Button>
             </div>
             <div className="flex -space-x-2">
                {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />)}
                <div className="w-10 h-10 rounded-full bg-[#1a365d] text-white flex items-center justify-center text-[10px] font-black">+42</div>
             </div>
          </div>
        </div>

        {/* Technical Sidebar (4 Cols) */}
        <aside className="lg:col-span-4 space-y-10">
          
          {/* Analysis Card */}
          <div className="bg-[#1a365d] rounded-[40px] p-8 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
             <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-sky-500 rounded-xl"><Brain size={18}/></div>
                   <h4 className="font-black uppercase tracking-widest text-xs">Technical Analysis</h4>
                </div>
                
                <div className="space-y-6">
                   <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase opacity-50"><span>Logic Load</span><span>95%</span></div>
                      <div className="h-1 w-full bg-white/10 rounded-full"><motion.div initial={{width: 0}} whileInView={{width: '95%'}} className="h-full bg-sky-400" /></div>
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase opacity-50"><span>Physical ROI</span><span>82%</span></div>
                      <div className="h-1 w-full bg-white/10 rounded-full"><motion.div initial={{width: 0}} whileInView={{width: '82%'}} className="h-full bg-sky-400" /></div>
                   </div>
                </div>

                <ul className="space-y-4 pt-4">
                   {['Neuro-plasticity', 'Core Stability', 'Stress Buffering'].map((p, i) => (
                     <li key={i} className="flex items-center gap-3 text-xs font-bold text-sky-300">
                        <CheckCircle2 size={14}/> {p}
                     </li>
                   ))}
                </ul>
             </div>
          </div>

          {/* Related Insights */}
          <div className="space-y-6">
             <h4 className="text-[#1a365d] font-black uppercase tracking-[0.3em] text-[10px]">Related Insights</h4>
             <div className="space-y-4">
                {[
                  "Opening Theory for Busy Adults",
                  "Managing High-Pressure Blitz Moves",
                  "Why Executive Performance needs Chess"
                ].map((title, i) => (
                  <div key={i} className="p-5 rounded-[24px] border border-slate-100 hover:border-sky-500 transition-all cursor-pointer group">
                     <p className="text-[#1a365d] font-bold text-sm leading-tight mb-2 group-hover:text-sky-500 transition-colors">{title}</p>
                     <span className="text-slate-300 text-[9px] font-black uppercase tracking-widest flex items-center gap-1">Read Insight <ChevronRight size={10}/></span>
                  </div>
                ))}
             </div>
          </div>

        </aside>

      </div>
    </main>
  )
}