"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Sparkles, Zap, Target } from "lucide-react"

const faqs = [
  {
    question: "Do I need to be good at chess to join Plank-Chess?",
    answer: "Not at all. We cater to all skill levels. The goal of Plank-Chess is the hybrid challenge of focus under physical stress, not just grandmaster-level play."
  },
  {
    question: "What is the typical duration of a Corporate Workshop?",
    answer: "Our standard workshops run for 90 to 120 minutes, but we can customize high-performance retreats based on your HR goals."
  },
  {
    question: "Are the Adult Chess Classes structured for absolute beginners?",
    answer: "Yes. Our Phase 1 program is specifically designed to build foundational habits for those who have never touched a chessboard before."
  },
  {
    question: "Is there a specific fitness level required for the sessions?",
    answer: "Our physical activations are designed to be accessible and safe. We provide modifications for the planking elements to ensure everyone can participate comfortably."
  },
  {
    question: "Where are the sessions held in Singapore?",
    answer: "We operate out of a premium studio environment in central Singapore, and we also offer on-site setups for corporate office sessions."
  }
]

export default function FAQSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0)
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6">
            <span className="bg-white px-8 py-2 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.3em] uppercase shadow-sm">
              Strategic Support
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#1a365d] tracking-tighter leading-none">
            Common <span style={{ color: cyan }}>Enquiries.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: REFINED FAQ STYLE (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="space-y-2">
              {faqs.map((faq, idx) => {
                const isOpen = activeIdx === idx
                return (
                  <div key={idx} className="relative">
                    <motion.div 
                      initial={false}
                      animate={{ 
                        backgroundColor: isOpen ? "#f8fafc" : "rgba(255,255,255,0)",
                        paddingLeft: isOpen ? "2rem" : "1rem",
                        paddingRight: isOpen ? "2rem" : "1rem",
                      }}
                      className={`rounded-[32px] transition-all duration-500 overflow-hidden ${
                        isOpen ? "shadow-xl border border-sky-100" : "border-transparent"
                      }`}
                    >
                      <button
                        onClick={() => setActiveIdx(isOpen ? null : idx)}
                        className="w-full py-8 flex items-center justify-between text-left group"
                      >
                        <div className="flex items-center gap-6">
                          <span className={`text-xs font-black tracking-widest ${isOpen ? "text-sky-500" : "text-slate-300"}`}>
                            0{idx + 1}
                          </span>
                          <span className={`font-bold text-lg tracking-tight transition-colors ${isOpen ? "text-[#1a365d]" : "text-slate-500 group-hover:text-[#1a365d]"}`}>
                            {faq.question}
                          </span>
                        </div>
                        <div className={`transition-transform duration-500 rounded-full p-2 ${isOpen ? "bg-sky-500 text-white rotate-180" : "bg-gray-100 text-slate-400 group-hover:bg-sky-50"}`}>
                          <ChevronDown size={18} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                          >
                            <div className="pb-8 pl-14 pr-4">
                              <div className="h-[2px] w-8 bg-sky-500 mb-4 rounded-full" />
                              <p className="text-slate-500 leading-relaxed font-medium text-md">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    {!isOpen && idx !== faqs.length - 1 && (
                      <div className="h-[1px] w-[90%] mx-auto bg-gray-100 mt-2" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT: GIF & FLOATING UI (5 Cols) */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-32">
            <div className="relative rounded-[48px] overflow-hidden bg-[#1a365d] p-3 shadow-2xl">
               {/* Place your GIF in /public folder and update name here */}
               <img 
                 src="/faq.png" 
                 alt="Chessmatic Dashboard Visual"
                 className="w-full h-[550px] object-cover rounded-[36px] opacity-100"
               />
               
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}