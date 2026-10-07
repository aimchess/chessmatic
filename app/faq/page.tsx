"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, ChevronDown, HelpCircle, MessageCircle, 
  Brain, Dumbbell, Users, Building2, Calendar, 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck,
  Zap, Trophy, PhoneCall
} from "lucide-react"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import Link from "next/link"

interface FAQItem {
  id: string
  section: string
  question: string
  answer: string
  tag: string
}

const FAQ_SECTIONS = [
  { id: "all", label: "All Questions", icon: Sparkles },
  { id: "general", label: "Methodology & Lab", icon: Brain },
  { id: "chess", label: "Adult Chess", icon: Trophy },
  { id: "pt", label: "Fitness & PT", icon: Dumbbell },
  { id: "hybrid", label: "Hybrid & Plank Chess", icon: Zap },
  { id: "corporate", label: "Corporate Workshops", icon: Building2 },
  { id: "formats", label: "Formats & Booking", icon: Calendar },
]

const FAQ_DATA: FAQItem[] = [
  // SECTION: Methodology & Lab
  {
    id: "gen-1",
    section: "general",
    tag: "Concept",
    question: "What is Chessmatic LLP and how does the hybrid methodology work?",
    answer: "Chessmatic LLP is Singapore's premier mind-and-body training lab founded by Wagish (Director of Intchess). We pioneer a dual-track standard: pairing tactical chess calculation with functional physical conditioning (PT). By training physical stamina alongside deep calculation, we eliminate cognitive fatigue and stabilize decision-making under intense pressure."
  },
  {
    id: "gen-2",
    section: "general",
    tag: "Studio",
    question: "Where are the physical coaching sessions conducted in Singapore?",
    answer: "Our primary training facility is our dedicated studio in Woodlands, Singapore. We also conduct on-site corporate training workshops and private executive sessions across corporate offices in Singapore."
  },
  {
    id: "gen-3",
    section: "general",
    tag: "Founder",
    question: "Who leads the training and curriculum at Chessmatic?",
    answer: "Wagish is the Founder of Chessmatic LLP and the Director of Intchess. In Singapore, he pioneers high-performance chess training alongside physical conditioning (PT). With a functional fitness background, Wagish champions: 'A sharper strategic mind backed by physical stamina and core resilience.'"
  },
  {
    id: "gen-4",
    section: "general",
    tag: "Beginners",
    question: "Do I need any prior chess or fitness experience to get started?",
    answer: "None at all. Over 40% of our adult students are either complete beginners or players returning after decades away. Every program starts with an initial baseline assessment to calibrate coaching and fitness intensity to your exact level."
  },

  // SECTION: Adult Chess Coaching
  {
    id: "chess-1",
    section: "chess",
    tag: "Adult Coaching",
    question: "How are adult chess classes structured compared to children's academies?",
    answer: "Unlike rote memorization taught in youth classes, our adult curriculum focuses on conceptual calculation, psychological composure, positional risk management, and endgame precision relevant to high-performing adults and working professionals."
  },
  {
    id: "chess-2",
    section: "chess",
    tag: "Returning Players",
    question: "I haven't played chess since school. Which cohort is best for me?",
    answer: "Our 'Returning Players & Improvers' cohort is ideal. We fast-track your tactical pattern recognition, eliminate rustiness, and modernize your opening understanding using digital engine tools and structured master reviews."
  },
  {
    id: "chess-3",
    section: "chess",
    tag: "Competitive",
    question: "Do you prepare competitive adults for rated FIDE or Singapore tournaments?",
    answer: "Yes. Our Competitive Adults program includes Swiss tournament preparation, opening repertoire construction, deep psychological composure drills, blitz/rapid time management, and post-game Grandmaster game reviews."
  },
  {
    id: "chess-4",
    section: "chess",
    tag: "Analysis",
    question: "Can I bring my online games (Chess.com / Lichess) for personal review?",
    answer: "Absolutely. 1-on-1 private lessons frequently include full game diagnostics where we pinpoint recurring blunder habits, time trouble triggers, and tactical blind spots."
  },

  // SECTION: Fitness & PT
  {
    id: "pt-1",
    section: "pt",
    tag: "Personal Training",
    question: "Can I enrol exclusively in Personal Training (PT) without chess?",
    answer: "Yes. We offer pure Personal Training (PT Separate) focusing on functional strength, core stability, postural correction, mobility recovery, and cardiovascular stamina tailored to desk-bound professionals."
  },
  {
    id: "pt-2",
    section: "pt",
    tag: "Assessments",
    question: "What does the initial physical fitness assessment involve?",
    answer: "We evaluate your postural alignment, core endurance, hip/shoulder mobility, and cardiovascular baseline. This ensures your customized workout protocol is safe, progressive, and injury-preventative."
  },
  {
    id: "pt-3",
    section: "pt",
    tag: "Desk Ergonomics",
    question: "How does the training help with desk fatigue and back stiffness?",
    answer: "Our conditioning protocols specifically target the posterior chain, thoracic mobility, and deep core stabilizers to counteract long hours of sitting, neck strain, and workplace fatigue."
  },

  // SECTION: Hybrid & Plank Chess
  {
    id: "hyb-1",
    section: "hybrid",
    tag: "Plank Chess",
    question: "What is Plank Chess and how is it played?",
    answer: "Plank Chess is our signature dual-stress modality. Players maintain an active isometric plank while analyzing the board, calculating tactical variations, and executing moves against a digital chess clock. It trains mental composure while under severe physical lactic fatigue."
  },
  {
    id: "hyb-2",
    section: "hybrid",
    tag: "Team Relays",
    question: "How does the 2v2 Plank Chess Team Challenge work?",
    answer: "In the 2v2 relay format, teammates alternate turns between holding core plank holds and stepping up to calculate and execute tactical moves. If one teammate drops from their plank, the clock penalty kicks in—making team communication and pacing critical."
  },
  {
    id: "hyb-3",
    section: "hybrid",
    tag: "Neuroscience",
    question: "What is the science behind combining chess calculation with physical exertion?",
    answer: "Physical exercise elevates brain-derived neurotrophic factor (BDNF), improves oxygen flow to the prefrontal cortex, and trains the sympathetic nervous system to remain calm during adrenaline surges—directly translating to sharper decision-making in high-stress work scenarios."
  },

  // SECTION: Corporate Workshops
  {
    id: "corp-1",
    section: "corporate",
    tag: "B2B Modules",
    question: "What corporate workshop formats does Chessmatic offer?",
    answer: "We offer 5 primary B2B experiential modules: 1) Strategic Workshops (problem solving & logic), 2) Team Challenges (2v2 Plank Chess relays), 3) Company Tournaments (in-house Swiss events), 4) Executive Sessions (C-suite stress testing), and 5) Social Chess Events (mindful networking)."
  },
  {
    id: "corp-2",
    section: "corporate",
    tag: "Customization",
    question: "Can workshops be customized to match our company's quarterly HR goals?",
    answer: "Yes. Every corporate engagement begins with a strategic alignment call. We calibrate the challenge intensity, duration (from 90-minute lunch-and-learns to full-day executive retreats), and team dynamic reports to your exact KPIs."
  },
  {
    id: "corp-3",
    section: "corporate",
    tag: "Group Sizing",
    question: "What is the maximum group size for corporate retreats?",
    answer: "We accommodate intimate executive cohorts of 5-15 pax up to full department teams of 40-100+ pax across on-site office facilities or external partner venues in Singapore."
  },

  // SECTION: Formats & Booking
  {
    id: "fmt-1",
    section: "formats",
    tag: "Coaching Modes",
    question: "What formats can I book for lessons?",
    answer: "We offer 5 flexible delivery formats: 1) In-Studio Private Lessons (Woodlands), 2) In-Studio Group Workshops, 3) Online 1-on-1 Virtual Coaching, 4) Online Group Batches, and 5) Corporate On-Site Engagements."
  },
  {
    id: "fmt-2",
    section: "formats",
    tag: "Trial Booking",
    question: "How do I schedule an introductory trial or consultation?",
    answer: "You can book directly via WhatsApp at +65 8580 5046 or email info@chessmatic.com. We will match you with the ideal coach and format based on your goals and schedule."
  },
  {
    id: "fmt-3",
    section: "formats",
    tag: "Rescheduling",
    question: "What is the cancellation and rescheduling policy?",
    answer: "We request a minimum of 24 hours' notice to reschedule private 1-on-1 sessions to ensure optimal slot reallocation. Group workshops follow scheduled cohort dates with makeup options available."
  }
]

export default function FAQPage() {
  const [activeSection, setActiveSection] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [openId, setOpenId] = useState<string | null>("gen-1")

  const cyan = "#0ea5e9"
  const navy = "#1a365d"

  // Filtered Questions
  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesSection = activeSection === "all" || item.section === activeSection
      const matchesSearch = 
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesSection && matchesSearch
    })
  }, [activeSection, searchQuery])

  return (
    <main className="min-h-screen bg-white font-sans overflow-hidden">
      
      {/* 1. HERO HEADER SECTION */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#1a365d] text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none" 
          style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
        />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6"
          >
            <HelpCircle size={14} className="text-sky-400" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Knowledge Base & FAQs</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-[1000] tracking-tighter uppercase italic leading-none mb-6"
          >
            Frequently Asked <br />
            <span style={{ color: cyan }}>Questions.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-10"
          >
            Everything you need to know about our adult chess coaching, functional PT, hybrid Plank Chess training, and corporate workshops in Singapore.
          </motion.p>

          {/* REAL-TIME SEARCH BAR */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-5 text-slate-400" size={20} />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g., Wagish, Plank Chess, Corporate, Woodlands)..."
                className="w-full h-14 md:h-16 pl-14 pr-12 rounded-full bg-white text-[#1a365d] placeholder:text-slate-400 font-semibold text-sm md:text-base shadow-2xl focus:outline-none focus:ring-4 focus:ring-sky-400/40 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-5 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-[#1a365d]"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SECTION SELECTOR TABS */}
      <section className="bg-slate-50 border-b border-slate-200/60 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-slate-50/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {FAQ_SECTIONS.map((sec) => {
              const Icon = sec.icon
              const isActive = activeSection === sec.id
              const count = sec.id === "all" 
                ? FAQ_DATA.length 
                : FAQ_DATA.filter(i => i.section === sec.id).length

              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSection(sec.id)}
                  className={`
                    flex items-center gap-2.5 px-4 md:px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300
                    ${isActive 
                      ? "bg-[#1a365d] text-white shadow-lg scale-[1.02]" 
                      : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200/70"
                    }
                  `}
                >
                  <Icon size={14} className={isActive ? "text-sky-400" : "text-slate-400"} />
                  <span>{sec.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-black ${isActive ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. MAIN ACCORDION LISTING */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Results Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
          <div>
            <span className="text-sky-500 text-[10px] font-black uppercase tracking-[0.3em] block mb-1">
              {activeSection === "all" ? "Complete Archive" : FAQ_SECTIONS.find(s => s.id === activeSection)?.label}
            </span>
            <p className="text-[#1a365d] text-xl font-[1000] tracking-tight">
              Showing {filteredFAQs.length} {filteredFAQs.length === 1 ? "Question" : "Questions"}
            </p>
          </div>

          {searchQuery && (
            <button 
              onClick={() => { setSearchQuery(""); setActiveSection("all") }}
              className="text-xs font-bold text-sky-500 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* ACCORDION ITEMS */}
        {filteredFAQs.length > 0 ? (
          <div className="space-y-4">
            {filteredFAQs.map((faq, idx) => {
              const isOpen = openId === faq.id

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  className={`
                    rounded-[28px] md:rounded-[36px] transition-all duration-300 overflow-hidden border
                    ${isOpen 
                      ? "bg-[#f8fafc] border-sky-200 shadow-xl" 
                      : "bg-white border-slate-100 hover:border-slate-200 shadow-sm"
                    }
                  `}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-6 sm:p-8 flex items-start justify-between text-left gap-4 group"
                  >
                    <div className="flex items-start gap-4 md:gap-5">
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-[1000] shrink-0 mt-0.5 transition-colors ${isOpen ? "bg-sky-500 text-white shadow-md shadow-sky-500/20" : "bg-slate-100 text-slate-400 group-hover:text-[#1a365d]"}`}>
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-2.5 py-0.5 rounded-full">
                            {faq.tag}
                          </span>
                        </div>
                        <h3 className={`text-base sm:text-lg md:text-xl font-[1000] tracking-tight leading-snug transition-colors ${isOpen ? "text-[#1a365d]" : "text-slate-700 group-hover:text-[#1a365d]"}`}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "bg-[#1a365d] text-white rotate-180 shadow-md" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <div className="px-6 sm:px-8 pb-8 pt-2 pl-6 sm:pl-20">
                          <div className="h-[2px] w-10 bg-sky-400 rounded-full mb-4" />
                          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-[40px] border border-dashed border-slate-200 p-8">
            <HelpCircle size={40} className="text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-[1000] text-[#1a365d] uppercase tracking-tight mb-2">No Matching Questions</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
              We couldn't find any questions matching "{searchQuery}". Ask our coaching team directly on WhatsApp!
            </p>
            <a 
              href={getWhatsAppUrl(`Hi Chessmatic! I had a specific question: "${searchQuery}"`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-black text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all shadow-lg"
            >
              <MessageCircle size={16} className="fill-current" /> Ask On WhatsApp
            </a>
          </div>
        )}

        {/* 4. "STILL HAVE QUESTIONS?" CARD */}
        <div className="mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] md:rounded-[50px] bg-[#1a365d] p-8 sm:p-12 md:p-16 text-white overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div 
              className="absolute inset-0 opacity-[0.08] pointer-events-none" 
              style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} 
            />

            <div className="relative z-10 space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[9px] font-black uppercase tracking-[0.25em] text-sky-400">
                <ShieldCheck size={12} /> Direct Strategic Support
              </div>
              <h2 className="text-2xl sm:text-4xl font-[1000] tracking-tight uppercase italic leading-tight">
                Have a Unique Question? <br />
                <span style={{ color: cyan }}>Chat With Wagish & Team.</span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md font-medium">
                Reach out on WhatsApp for instant guidance on lesson schedules, custom PT plans, or corporate team proposals.
              </p>
            </div>

            <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href={getWhatsAppUrl("Hi Chessmatic! I have a question regarding coaching / PT programs.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-[1000] text-xs uppercase tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                  <MessageCircle size={18} className="fill-current" />
                  Chat on WhatsApp
                </button>
              </a>

              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-14 px-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-[1000] text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                  <PhoneCall size={16} /> Contact Studio
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

      </section>

    </main>
  )
}
