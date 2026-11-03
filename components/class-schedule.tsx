"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Calendar, Clock, Laptop, MessageCircle, ArrowRight, 
  MapPin, Sparkles, CheckCircle2, Users, ArrowUpRight,
  ShieldCheck, Info
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function ClassScheduleSection() {
  const [activeTab, setActiveTab] = useState<"all" | "weekday" | "weekend">("all")

  const weekdaySlots = [
    {
      time: "10:00 - 11:00 am",
      period: "Morning Cohort",
      title: "Keep Your Mind Active",
      audience: "Adults & Seniors",
      tag: "Cognitive Agility",
      tagColor: "bg-teal-50 text-teal-800 border-teal-200",
      theme: "teal",
      accent: "#0284c7",
      desc: "Gentle yet stimulating strategic drills, puzzle calculation, and friendly sparring designed for lifelong mental sharpness.",
      whatsappMsg: "Hi Chessmatic! I'd like to book the Weekday 10:00-11:00am slot for 'Keep Your Mind Active' (Adults & Seniors) at Woodlands Studio."
    },
    {
      time: "7:30 - 8:30 pm",
      period: "Evening Cohort",
      title: "Learn from Scratch",
      audience: "Adult Beginner Programme",
      tag: "Foundations",
      tagColor: "bg-sky-50 text-sky-800 border-sky-200",
      theme: "navy",
      accent: "#1e394f",
      desc: "Step-by-step board mastery, piece coordination, core opening logic, and tactical defense for busy adults.",
      whatsappMsg: "Hi Chessmatic! I'd like to book the Weekday 7:30-8:30pm slot for 'Learn from Scratch' (Adult Beginner Programme) at Woodlands Studio."
    }
  ]

  const saturdaySlots = [
    {
      time: "10:00 - 11:00 am",
      period: "Morning Batch",
      title: "Learn from Scratch",
      audience: "Adult Beginner Programme",
      tag: "Foundations",
      tagColor: "bg-sky-50 text-sky-800 border-sky-200",
      theme: "navy",
      accent: "#1e394f",
      desc: "Comprehensive start-from-zero curriculum covering rules, coordinates, candidate moves, and basic checkmating nets.",
      whatsappMsg: "Hi Chessmatic! I'd like to book the Saturday 10:00-11:00am slot for 'Learn from Scratch' (Adult Beginner Programme) at Woodlands Studio."
    },
    {
      time: "2:00 - 3:00 pm",
      period: "Afternoon Batch",
      title: "Learn from Scratch",
      audience: "Adult Beginner Programme",
      tag: "Weekend Prime",
      tagColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
      theme: "navy",
      accent: "#1e394f",
      desc: "Ideal mid-day weekend session focusing on blunder-check habits, tactical vision, and interactive over-the-board play.",
      whatsappMsg: "Hi Chessmatic! I'd like to book the Saturday 2:00-3:00pm slot for 'Learn from Scratch' (Adult Beginner Programme) at Woodlands Studio."
    },
    {
      time: "7:30 - 8:30 pm",
      period: "Saturday Night Tournament",
      title: "Keep Your Mind Active (Casual Tournament)",
      audience: "Adults & Seniors • 2 Rounds (10 + 5 min Rapid)",
      tag: "Weekly Arena",
      tagColor: "bg-amber-50 text-amber-900 border-amber-200",
      theme: "tournament",
      accent: "#f59e0b",
      desc: "Weekly casual Saturday night tournament for our Keep Your Mind Active cohort. 2 friendly rapid rounds with a 10 min + 5 sec increment clock to sharpen tactical alertness, calculation composure, and active mental focus.",
      whatsappMsg: "Hi Chessmatic! I'd like to sign up for the Saturday night Casual Tournament (7:30-8:30pm, 2 rounds 10+5 min) for the Keep Your Mind Active program at Woodlands Studio."
    }
  ]

  return (
    <section id="schedule" className="py-16 md:py-24 bg-[#f8fafc] font-sans overflow-hidden border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#1a365d] text-[10px] font-black uppercase tracking-[0.25em]">
              Woodlands & Online Timetable
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tight leading-tight uppercase italic">
            Class <span className="text-sky-500">Schedule.</span>
          </h2>
          <p className="text-slate-500 font-medium text-xs sm:text-base mt-2 max-w-xl mx-auto">
            Choose the weekday or weekend slot that fits your lifestyle. Small adult-only cohorts taught live at Woodlands Studio or online.
          </p>

          {/* QUICK FILTER PILLS */}
          <div className="inline-flex p-1 rounded-2xl bg-slate-200/70 mt-6 border border-slate-200">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === "all" ? "bg-white text-[#1a365d] shadow-sm" : "text-slate-600 hover:text-[#1a365d]"
              }`}
            >
              All Batches
            </button>
            <button
              onClick={() => setActiveTab("weekday")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === "weekday" ? "bg-white text-[#1a365d] shadow-sm" : "text-slate-600 hover:text-[#1a365d]"
              }`}
            >
              Mon to Fri (Weekday)
            </button>
            <button
              onClick={() => setActiveTab("weekend")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === "weekend" ? "bg-white text-[#1a365d] shadow-sm" : "text-slate-600 hover:text-[#1a365d]"
              }`}
            >
              Saturday (Weekend)
            </button>
          </div>
        </div>

        {/* MAIN SCHEDULE BOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* LEFT: WEEKDAY COLUMN */}
          {(activeTab === "all" || activeTab === "weekday") && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${activeTab === "all" ? "lg:col-span-6" : "lg:col-span-12 max-w-3xl mx-auto w-full"} bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/40 relative overflow-hidden flex flex-col justify-between`}
            >
              {/* TOP HEADER */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-sky-600 block mb-1">
                    Every Weekday
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-[1000] text-[#1a365d] tracking-tight">
                    Mon to Fri
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
                  <Clock size={12} className="text-sky-500" />
                  <span>2 Daily Batches</span>
                </div>
              </div>

              {/* SLOTS LIST */}
              <div className="space-y-4">
                {weekdaySlots.map((slot, i) => (
                  <div 
                    key={i}
                    className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 border relative group overflow-hidden ${
                      slot.theme === "tournament"
                        ? "bg-gradient-to-br from-[#0c2a4d] via-[#103d6d] to-[#095780] text-white border-amber-400/40 shadow-xl shadow-sky-950/20 hover:shadow-2xl hover:scale-[1.01] ring-1 ring-amber-400/30"
                        : slot.theme === "teal"
                        ? "bg-gradient-to-br from-[#0c4a6e] to-[#0369a1] text-white border-sky-700/40 shadow-lg shadow-sky-950/10 hover:shadow-xl hover:scale-[1.01]"
                        : "bg-gradient-to-br from-[#0f2138] to-[#1e394f] text-white border-slate-700/40 shadow-lg shadow-slate-950/10 hover:shadow-xl hover:scale-[1.01]"
                    }`}
                  >
                    {/* Top Row: Time & Period */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/15 text-white/90 backdrop-blur-sm border border-white/10">
                          {slot.period}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-wider text-sky-200">
                          {slot.tag}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-white/70">60 mins</span>
                    </div>

                    {/* Big Time */}
                    <p className="text-2xl sm:text-3xl font-[1000] tracking-tight text-white mb-2 leading-none">
                      {slot.time}
                    </p>

                    {/* Class Name & Subtitle */}
                    <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {slot.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/80 font-medium mb-3">
                      {slot.audience}
                    </p>

                    <p className="text-[11px] text-white/70 leading-relaxed mb-4 border-t border-white/10 pt-2.5">
                      {slot.desc}
                    </p>

                    {/* Action Button */}
                    <a
                      href={getWhatsAppUrl(slot.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#1a365d] transition-all text-xs font-black uppercase tracking-wider group-hover:bg-white group-hover:text-[#1a365d]"
                    >
                      <span>Book Weekday Slot</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-500" />
                  Morning & evening options
                </span>
                <span className="text-[11px] font-bold text-slate-400">Woodlands Studio</span>
              </div>
            </motion.div>
          )}

          {/* RIGHT: SATURDAY COLUMN */}
          {(activeTab === "all" || activeTab === "weekend") && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${activeTab === "all" ? "lg:col-span-6" : "lg:col-span-12 max-w-3xl mx-auto w-full"} bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/40 relative overflow-hidden flex flex-col justify-between`}
            >
              {/* TOP HEADER */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-600 block mb-1">
                    Weekend Special
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-[1000] text-[#1a365d] tracking-tight">
                    Saturday
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar size={12} className="text-amber-500" />
                  <span>3 Weekend Batches</span>
                </div>
              </div>

              {/* SLOTS LIST */}
              <div className="space-y-4">
                {saturdaySlots.map((slot, i) => (
                  <div 
                    key={i}
                    className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 border relative group overflow-hidden ${
                      slot.theme === "tournament"
                        ? "bg-gradient-to-br from-[#0c2a4d] via-[#103d6d] to-[#095780] text-white border-amber-400/40 shadow-xl shadow-sky-950/20 hover:shadow-2xl hover:scale-[1.01] ring-1 ring-amber-400/30"
                        : slot.theme === "teal"
                        ? "bg-gradient-to-br from-[#0c4a6e] to-[#0369a1] text-white border-sky-700/40 shadow-lg shadow-sky-950/10 hover:shadow-xl hover:scale-[1.01]"
                        : "bg-gradient-to-br from-[#0f2138] to-[#1e394f] text-white border-slate-700/40 shadow-lg shadow-slate-950/10 hover:shadow-xl hover:scale-[1.01]"
                    }`}
                  >
                    {/* Top Row: Time & Period */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/15 text-white/90 backdrop-blur-sm border border-white/10">
                          {slot.period}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-wider text-sky-200">
                          {slot.tag}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-white/70">60 mins</span>
                    </div>

                    {/* Big Time */}
                    <p className="text-2xl sm:text-3xl font-[1000] tracking-tight text-white mb-2 leading-none">
                      {slot.time}
                    </p>

                    {/* Class Name & Subtitle */}
                    <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {slot.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/80 font-medium mb-3">
                      {slot.audience}
                    </p>

                    <p className="text-[11px] text-white/70 leading-relaxed mb-4 border-t border-white/10 pt-2.5">
                      {slot.desc}
                    </p>

                    {/* Action Button */}
                    <a
                      href={getWhatsAppUrl(slot.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#1a365d] transition-all text-xs font-black uppercase tracking-wider group-hover:bg-white group-hover:text-[#1a365d]"
                    >
                      <span>{slot.theme === "tournament" ? "Join Saturday Tournament" : "Book Saturday Slot"}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-500" />
                  Morning, afternoon & evening
                </span>
                <span className="text-[11px] font-bold text-slate-400">Woodlands Studio</span>
              </div>
            </motion.div>
          )}

        </div>

        {/* BOTTOM INTEGRATED PANELS: ONLINE CLASSES & DIRECT BOOKING */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* ONLINE OPTION CARD */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-sky-100 text-sky-800 text-[10px] font-black uppercase tracking-wider">
                  Flexible Option
                </span>
                <span className="text-xs font-bold text-emerald-600">20% Online Discount</span>
              </div>
              
              <h4 className="text-xl sm:text-2xl font-[1000] text-[#1a365d] tracking-tight">
                Online Interactive Classes
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                Cannot make it in person to Woodlands? Join <strong>Keep Your Mind Active</strong> or <strong>Learn from Scratch</strong> virtually with real-time board interaction and screen analysis.
              </p>
              <p className="text-slate-400 text-xs font-semibold">
                Tell us your preferred days and timings, and our team will arrange your personalized slot.
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100">
              <a
                href={getWhatsAppUrl("Hi Chessmatic! I'd like to request an Online Class slot for adult chess coaching at my preferred timing.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full border-sky-300 text-sky-700 hover:bg-sky-50 font-bold text-xs px-6 py-5 flex items-center justify-center gap-2"
                >
                  <Laptop size={14} className="text-sky-600" />
                  <span>Request Custom Online Timing</span>
                  <ArrowUpRight size={14} />
                </Button>
              </a>
            </div>
          </div>

          {/* FIRST CLASS BOOKING CTA */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#0f2138] via-[#1a365d] to-[#0c1e38] text-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-sky-950/20 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-2 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-sky-300 text-[9px] font-black uppercase tracking-widest border border-white/10">
                <Sparkles size={11} className="text-amber-400 fill-amber-400" />
                <span>Next Cohort Open</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-[1000] tracking-tight leading-tight">
                Book Your First Class
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                Reach out to Chessmatic Academy on WhatsApp. We will assess your baseline level and confirm your slot within minutes.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-white/10 relative z-10">
              <a
                href={getWhatsAppUrl("Hi Chessmatic! I'd like to book my first chess class at Woodlands Studio. Please share upcoming batch dates.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  style={{ backgroundColor: "#25D366" }}
                  className="w-full hover:bg-[#20ba59] text-white py-6 rounded-2xl text-xs font-[1000] uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={17} className="fill-current" />
                  <span>WhatsApp Booking</span>
                  <ArrowRight size={15} />
                </Button>
              </a>
              <p className="text-slate-400 text-[10px] text-center mt-2.5">
                No classes on Sundays â¢ Public holiday timings may vary
              </p>
            </div>

            {/* Subtle corner glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  )
}
