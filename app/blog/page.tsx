"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, Clock, ChevronRight, TrendingUp
} from "lucide-react"
import BlogBanner from "@/components/blogBanner"
import { Navbar } from "@/components/navbar"

const categories = ["All Insights", "Chess Strategy", "Cognitive Fitness", "Corporate ROI", "Wellness"]

const blogs = [
  {
    id: 1,
    title: "The Blitz Mindset: Decision Making Under 3 Minutes",
    excerpt: "How high-speed chess training rewires your brain for rapid professional execution.",
    category: "Chess Strategy",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800",
    impact: "+40% Speed"
  },
  {
    id: 2,
    title: "The Science of Plank-Chess: Why Mind & Body Must Align",
    excerpt: "Exploring the neurological benefits of maintaining core stability during intense calculation.",
    category: "Wellness",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
    impact: "Core ROI"
  },
  {
    id: 3,
    title: "Boardroom Tactics: Translating Grandmaster Logic to Business",
    excerpt: "Why Fortune 500 executives are returning to the board to sharpen their competitive edge.",
    category: "Corporate ROI",
    readTime: "5 min",
    image: "/comp.png",
    impact: "Strategic"
  },
  {
    id: 4,
    title: "Deep Work Protocol: Reclaiming Your Focus Span",
    excerpt: "Using chess as an analog detox to combat the digital attention crisis.",
    category: "Cognitive Fitness",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
    impact: "High Focus"
  },
  {
    id: 5,
    title: "The Endgame of Stress: Finding Calm in Low-Time Scenarios",
    excerpt: "Breathing techniques and mental anchors used by professional players.",
    category: "Wellness",
    readTime: "10 min",
    image: "/adult2.png",
    impact: "-30% Cortisol"
  },
  {
    id: 6,
    title: "Opening Theory for the Time-Poor Professional",
    excerpt: "A curated guide to choosing a chess repertoire that fits a busy schedule.",
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
    <main className="bg-white min-h-screen font-sans">
      <Navbar/>
      <BlogBanner />
      
      {/* 1. BREADCRUMB & SEARCH TRACK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 md:pt-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* CATEGORY TABS - Optimized for Mobile Scroll */}
          <div className="w-full lg:w-auto overflow-hidden">
            <div className="flex items-center gap-1 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex bg-slate-100/80 p-1 rounded-full border border-slate-200/50">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                      activeCat === cat 
                        ? "bg-[#1a365d] text-white shadow-md" 
                        : "text-slate-500 hover:text-[#1a365d]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="relative w-full md:max-w-sm lg:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Insights..." 
              className="w-full bg-slate-50 border border-slate-200/60 rounded-full py-3 md:py-3.5 pl-12 pr-6 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* 2. ARTICLE GRID */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((post) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group flex flex-col h-full bg-white rounded-[30px] md:rounded-[45px] border border-slate-100 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-sky-100 transition-all duration-500"
                  >
                    {/* Image Container */}
                    <div className="relative h-52 sm:h-64 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/20 shadow-lg">
                        <span className="text-[#1a365d] text-[8px] md:text-[9px] font-black uppercase tracking-widest">{post.category}</span>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 md:mb-4">
                        <Clock size={12} className="text-sky-500" /> {post.readTime} Read
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-[1000] text-[#1a365d] tracking-tight leading-tight mb-3 md:mb-4 group-hover:text-sky-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 line-clamp-2 md:line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Footer Stats */}
                      <div className="mt-auto pt-5 md:pt-6 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TrendingUp size={14} className="text-sky-500" />
                          <span className="text-slate-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Impact</span>
                        </div>
                        <span className="text-[#1a365d] text-[10px] md:text-xs font-black italic">{post.impact}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                   <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No matching insights found.</p>
                   <button 
                    onClick={() => {setActiveCat("All Insights"); setSearchQuery("")}}
                    className="mt-4 text-sky-500 text-[10px] font-black uppercase tracking-widest hover:underline"
                   >
                     Reset Filters
                   </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  )
}