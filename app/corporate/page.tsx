"use client"

import { motion } from "framer-motion"
import { 
  Building2, Users, Target, Zap, ShieldCheck, 
  TrendingUp, MessageCircle, Globe, Brain, 
  Dumbbell, CheckCircle2, ArrowRight, Play,
  Calendar, FileText, LayoutGrid, Award, Search
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import CorporateBanner from "@/components/corpoBanner"
import WhyCompaniesChoose from "@/components/whycorporate"
import CorporateExperiences from "@/components/corpformat"
import TeamOutcomesDashboard from "@/components/corpBenefit"
import CorporateProcess from "@/components/process"
import PricingSection from "@/components/corpcourse"
export default function CorporatePage() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <main className="bg-white min-h-screen font-sans">
      <CorporateBanner/>
      <WhyCompaniesChoose/>
      <CorporateExperiences/>
      <CorporateProcess/>





      {/* 5. OUTCOMES (Clean Stat Blocks) */}
      <section className="py-24 bg-[#1a365d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
             {[
               { val: "95%", label: "Faster Decisions" },
               { val: "40%", label: "Stress Reduction" },
               { val: "88%", label: "Team Synergy" },
               { val: "High", label: "Culture ROI" },
             ].map((stat, i) => (
               <div key={i}>
                 <p className="text-sky-400 text-6xl font-[1000] tracking-tighter mb-2 italic">{stat.val}</p>
                 <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.3em]">{stat.label}</p>
               </div>
             ))}
          </div>
        </div>
      </section>



      {/* 12. FINAL CTA SECTION (Balanced Rectangle) */}
      <section className="py-24 bg-white flex justify-center">
        <div className="px-6 w-full max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      className="relative rounded-[45px] md:rounded-[60px] bg-[#1a365d] p-10 md:p-14 shadow-[0_20px_60px_rgba(26,54,93,0.2)] overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 group">
            <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
                 <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                 <span className="text-white text-[9px] font-black uppercase tracking-[0.3em]">Corporate Protocol: Active</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-[1000] text-white tracking-tighter leading-none italic uppercase">Build Smarter <br/><span style={{ color: cyan }}>Connected Teams.</span></h2>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getWhatsAppUrl("Hi Chessmatic! I'd like to request a customized corporate workshop proposal for our team.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button style={{ backgroundColor: "#25D366" }} className="h-14 px-10 rounded-full text-[11px] font-[1000] uppercase tracking-widest text-white hover:bg-[#20ba59] transition-all shadow-xl active:scale-95 flex items-center gap-3">
                  <MessageCircle size={18} className="fill-current" />
                  <FileText size={16}/> Request Proposal
                </Button>
              </a>
              <a
                href={getWhatsAppUrl("Hi Chessmatic! I'd like to contact the Lab for corporate inquiries and availability.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-14 px-10 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-[11px] font-[1000] uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2">
                  <MessageCircle size={16} />
                  Contact Lab
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}

function ChevronRight(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}