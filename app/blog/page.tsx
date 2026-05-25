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
    image: "/blit.jpg",
    impact: "+40% Speed"
  },
  {
    id: 2,
    title: "The Science of Plank-Chess: Why Mind & Body Must Align",
    excerpt: "Exploring the neurological benefits of maintaining core stability during intense calculation.",
    category: "Wellness",
    readTime: "8 min",
    image: "/plank3.png",
    impact: "Core ROI"
  },
  {
    id: 3,
    title: "Boardroom Tactics: Translating Grandmaster Logic to Business",
    excerpt: "Why Fortune 500 executives are returning to the board to sharpen their competitive edge.",
    category: "Corporate ROI",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
    impact: "Strategic"
  },
  {
    id: 4,
    title: "Deep Work Protocol: Reclaiming Your Focus Span",
    excerpt: "Using chess as an analog detox to combat the digital attention crisis.",
    category: "Cognitive Fitness",
    readTime: "7 min",
    image: "/deep.png",
    impact: "High Focus"
  },
  {
    id: 5,
    title: "The Endgame of Stress: Finding Calm in Low-Time Scenarios",
    excerpt: "Breathing techniques and mental anchors used by professional players.",
    category: "Wellness",
    readTime: "10 min",
    image: "/adult-chess.webp",
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

  // --- FILTER LOGIC ---
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
      <div className="max-w-7xl mx-auto px-6 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="bg-[#f1f3f4] p-1.5 rounded-full flex gap-1 border border-gray-100 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-[1000] uppercase tracking-widest transition-all whitespace-nowrap ${
                activeCat === cat ? "bg-[#1a365d] text-white shadow-lg" : "text-gray-400 hover:text-[#1a365d]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search state
            placeholder="Search Insights..." 
            className="w-full bg-slate-50 border border-slate-100 rounded-full py-3 pl-12 pr-6 text-xs font-bold focus:outline-none focus:border-sky-500 transition-all"
          />
        </div>
      </div>

      {/* 2. ARTICLE GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((post, i) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col h-full bg-white rounded-[45px] border border-slate-100 overflow-hidden hover:shadow-2xl hover:border-sky-100 transition-all duration-500"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/80 via-transparent to-transparent" />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
                        <span className="text-[#1a365d] text-[9px] font-black uppercase tracking-widest">{post.category}</span>
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest opacity-50 mb-4">
                        <Clock size={12} /> {post.readTime} Read
                      </div>
                      <h3 className="text-xl font-[1000] text-[#1a365d] tracking-tight leading-tight mb-4 group-hover:text-sky-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TrendingUp size={14} className="text-sky-500" />
                          <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest">Strategic ROI</span>
                        </div>
                        <span className="text-[#1a365d] text-xs font-black italic">{post.impact}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                   <p className="text-slate-400 font-bold uppercase tracking-widest">No matching insights found.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
          {/* Pagination omitted for brevity, logic follows filteredBlogs length */}
        </div>
      </section>
    </main>
  )
}