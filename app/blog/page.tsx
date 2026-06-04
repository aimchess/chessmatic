"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Clock, TrendingUp, ChevronRight } from "lucide-react"
import BlogBanner from "@/components/blogBanner"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

const categories = ["All Insights", "Chess Strategy", "Cognitive Fitness", "Corporate ROI", "Wellness"]

// DATA INTEGRATED WITH YOUR PROVIDED CONTENT
export const blogs = [
  {
    id: "cognitive-benefits-of-chess",
    title: "🧠 Cognitive Benefits of Chess: Beyond the Game",
    excerpt: "Chess is one of the world’s most powerful cognitive‑training systems. Explore how it reorganizes the brain’s executive function.",
    category: "Cognitive Fitness",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800",
    impact: "Executive Function"
  },
  {
    id: "benefits-of-plank-chess",
    title: "💪 The Science of Plank‑Chess: Dual-Task Performance",
    excerpt: "The signature Chessmatic training system. How combining core-stability with rapid decision making rewires stress tolerance.",
    category: "Wellness",
    readTime: "10 min",
    image: "/plank1.png",
    impact: "Stress Regulation"
  },
  {
    id: "boardroom-tactics",
    title: "Boardroom Tactics: Grandmaster Logic in Business",
    excerpt: "Why Fortune 500 executives are returning to the board to sharpen their competitive edge.",
    category: "Corporate ROI",
    readTime: "5 min",
    image: "/comp.png",
    impact: "Strategic ROI"
  },
  {
    id: "deep-work-protocol",
    title: "Deep Work Protocol: Reclaiming Focus",
    excerpt: "Using chess as an analog detox to combat the digital attention crisis in the modern workplace.",
    category: "Cognitive Fitness",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
    impact: "High Focus"
  },
  {
    id: "opening-theory-adults",
    title: "Opening Theory for the Time-Poor Professional",
    excerpt: "A curated guide to choosing a chess repertoire that fits a high-performance busy schedule.",
    category: "Chess Strategy",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=800",
    impact: "Efficiency"
  }
]

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState("All Insights")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredBlogs = blogs.filter((post) => {
    const matchesCategory = activeCat === "All Insights" || post.category === activeCat;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-white min-h-screen font-sans pb-20">
      <Navbar/>
      <BlogBanner />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 md:pt-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="w-full lg:w-auto overflow-hidden">
            <div className="flex items-center gap-1 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              <div className="flex bg-slate-100/80 p-1 rounded-full border border-slate-200/50">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeCat === cat ? "bg-[#1a365d] text-white shadow-md" : "text-slate-500 hover:text-[#1a365d]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full md:max-w-sm lg:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Insights..." 
              className="w-full bg-slate-50 border border-slate-200/60 rounded-full py-3 md:py-3.5 pl-12 pr-6 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
            />
          </div>
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group flex flex-col h-full bg-white rounded-[30px] md:rounded-[45px] border border-slate-100 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-sky-100 transition-all duration-500 cursor-pointer"
                  >
                    <div className="relative h-52 sm:h-64 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        <span className="text-[#1a365d] text-[8px] md:text-[9px] font-black uppercase tracking-widest">{post.category}</span>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
                        <Clock size={12} className="text-sky-500" /> {post.readTime}
                      </div>
                      <h3 className="text-lg md:text-xl font-[1000] text-[#1a365d] tracking-tight leading-tight mb-4 group-hover:text-sky-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-5 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TrendingUp size={14} className="text-sky-500" />
                          <span className="text-slate-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Impact</span>
                        </div>
                        <span className="text-[#1a365d] text-[10px] md:text-xs font-black italic">{post.impact}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  )
}