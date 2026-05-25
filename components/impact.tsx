"use client"

import { useState } from "react"
import { Play, TrendingUp, Zap, Heart, Brain, Star, Quote, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function TransformationSection() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  // Testimonials Data
  const testimonials = [
    {
      name: "Marcus Chen",
      role: "Investment Analyst • Member since 2023",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      text: "I used to struggle with mental fatigue by 3 PM. Chessmatic rewired my workday. The combination of planking and blitz chess taught me how to find calm in high-pressure financial markets.",
      joinedCount: 42,
      category: "Analysts"
    },
    {
      name: "Sarah Lim",
      role: "Project Manager • Member since 2022",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      text: "The split-second decision making required in Plank-Chess has translated perfectly to my agile project environment. My focus levels have never been sharper during high-stakes sprints.",
      joinedCount: 28,
      category: "Managers"
    },
    {
      name: "David Teo",
      role: "HR Director • Corporate Partner",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      text: "Our corporate wellness engagement shot up by 60% after introducing Chessmatic. It's the first time our team actually looked forward to a strategy workshop. Truly a superpower for team synergy.",
      joinedCount: 15,
      category: "Executives"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const aggregateStats = [
    { label: "Focus Improvement", value: "94%", icon: <Brain size={14} /> },
    { label: "Stress Reduction", value: "40%", icon: <Zap size={14} /> },
    { label: "Team Synergy", value: "+65%", icon: <TrendingUp size={14} /> },
    { label: "Physical Stability", value: "88%", icon: <Heart size={14} /> },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HEADER & AGGREGATE IMPACT BAR */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1.5 border border-gray-200 mb-6"
          >
            <span className="bg-white px-6 py-1.5 rounded-full text-[#1a365d] text-[10px] font-black tracking-[0.25em] uppercase shadow-sm">
              The Transformation
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none mb-8"
          >
            From Tactical Play to <br />
            <span style={{ color: cyan }}>Lifestyle Evolution.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-4xl bg-[#1a365d] rounded-[30px] p-2 flex flex-wrap items-center justify-around shadow-2xl"
          >
            {aggregateStats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-4">
                <div className="p-2 bg-white/10 rounded-xl text-sky-400">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <p className="text-white text-xl font-black leading-none">{stat.value}</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 2. THE TRANSFORMATION SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* LEFT: DYNAMIC INDIVIDUAL STORY */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#f8fafc] rounded-[48px] p-10 lg:p-14 border border-gray-100 flex flex-col justify-between min-h-[500px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    className="w-20 h-20 rounded-3xl object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-lg" 
                    alt={testimonials[activeIndex].name}
                  />
                  <div>
                    <h4 className="text-[#1a365d] text-2xl font-[900] tracking-tight">{testimonials[activeIndex].name}</h4>
                    <p className="text-sky-500 text-xs font-black tracking-widest uppercase">{testimonials[activeIndex].role}</p>
                  </div>
                </div>

                <Quote size={40} className="text-[#1a365d]/10" />
                <p className="text-[#1a365d] text-xl font-bold leading-relaxed italic">
                  "{testimonials[activeIndex].text}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* BUTTONS & SOCIAL PROOF */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />)}
                  </div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                    Joined by {testimonials[activeIndex].joinedCount} other {testimonials[activeIndex].category}
                  </p>
               </div>

               {/* Navigation Controls */}
               <div className="flex items-center gap-3">
                  <button 
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-white border border-gray-200 text-[#1a365d] hover:bg-sky-500 hover:text-white transition-all shadow-sm"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-white border border-gray-200 text-[#1a365d] hover:bg-sky-500 hover:text-white transition-all shadow-sm"
                  >
                    <ChevronRight size={20} />
                  </button>
               </div>
            </div>
          </motion.div>

          {/* RIGHT: THE VISUAL SHIFT GRID */}
          <div className="grid grid-cols-1 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-50 relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-8">
                 <h5 className="text-[#1a365d] font-[1000] uppercase text-xs tracking-[0.2em]">Mindset Transformation</h5>
                 <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[9px] font-black tracking-widest uppercase border border-green-100">Verified Result</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-24 text-right">
                    <span className="text-slate-300 text-[10px] font-black uppercase tracking-widest">Before</span>
                    <p className="text-slate-400 font-bold text-xs">Scattered</p>
                  </div>
                  <div className="flex-1 h-3 bg-slate-100 rounded-full relative overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      className="h-full bg-gradient-to-r from-slate-200 via-sky-400 to-[#1a365d] rounded-full"
                    />
                    <div className="absolute left-[30%] top-0 bottom-0 w-1 bg-white/50 z-10" />
                  </div>
                  <div className="w-24">
                    <span className="text-[#1a365d] text-[10px] font-black uppercase tracking-widest">After</span>
                    <p className="text-[#1a365d] font-black text-xs">Strategic Depth</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-24 text-right">
                    <span className="text-slate-300 text-[10px] font-black uppercase tracking-widest">Before</span>
                    <p className="text-slate-400 font-bold text-xs">Stressed</p>
                  </div>
                  <div className="flex-1 h-3 bg-slate-100 rounded-full relative overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-slate-200 via-sky-400 to-[#1a365d] rounded-full"
                    />
                    <div className="absolute left-[40%] top-0 bottom-0 w-1 bg-white/50 z-10" />
                  </div>
                  <div className="w-24">
                    <span className="text-[#1a365d] text-[10px] font-black uppercase tracking-widest">After</span>
                    <p className="text-[#1a365d] font-black text-xs">Calm Control</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-sky-500" />
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Confidential Performance Data</span>
                </div>
                <p className="text-[#1a365d] text-sm font-black italic">+45% Productivity Gain</p>
              </div>
            </motion.div>

            {/* VIDEO TESTIMONIAL PREVIEW */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="relative h-48 rounded-[40px] overflow-hidden group cursor-pointer"
            >
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-[#1a365d]/60 backdrop-blur-[2px] flex items-center justify-center">
                  
               </div>
            </motion.div>
          </div>
        </div>

        {/* 3. CORPORATE LOGO CLOUD */}
        <div className="mt-10 pt-2 border-t border-gray-100">
           <p className="text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12">Trusted by Leading Teams in Singapore</p>
           
        </div>

        {/* FINAL TRANSFORMATION CTA */}
        <div className="mt-8 flex flex-col items-center">
          <Button className="bg-[#1a365d] hover:bg-[#0f213a] text-white px-12 py-8 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-all">
            Start Your Transformation <ArrowRight className="ml-2" />
          </Button>
        </div>

      </div>
    </section>
  )
}