import Link from "next/link"
import { FileText, ArrowLeft, ShieldCheck, CheckCircle2, Mail, Award, Lock } from "lucide-react"

export const metadata = {
  title: "Terms & Conditions | Chessmatic Platform & Studio (Singapore)",
  description: "Official Terms and Conditions for Chessmatic platform, in-studio coaching, personal training, and corporate workshops.",
}

export default function TermsPage() {
  const cyan = "#0ea5e9"
  const navy = "#1a365d"

  return (
    <main className="min-h-screen bg-white font-sans pb-24">
      {/* HEADER HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-[#1a365d] text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none" 
          style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-widest mb-6 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
            <FileText size={14} className="text-sky-400" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.25em]">Terms of Service • October 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-[1000] tracking-tighter uppercase italic leading-none mb-4">
            Platform & Studio <br />
            <span style={{ color: cyan }}>Terms & Conditions.</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-300">
            <span>Jurisdiction: <strong className="text-sky-400">Singapore Law</strong></span>
            <span>•</span>
            <span>Applies to: <strong className="text-white">Online Platform, Woodlands Studio & Corporate Engagements</strong></span>
          </div>
        </div>
      </section>

      {/* MAIN LEGAL CONTENT */}
      <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-16">
        
        {/* Intro Box */}
        <div className="p-6 md:p-8 rounded-[30px] bg-slate-50 border border-slate-200/80 mb-12">
          <p className="text-slate-700 text-sm md:text-base font-medium leading-relaxed">
            Welcome to <strong>Chessmatic</strong> ("Chessmatic", "we", "our"). By registering an account, attending in-person sessions at our Woodlands Studio, participating in virtual coaching batches, or booking corporate workshops, you agree to comply with these Platform Terms & Conditions and our <Link href="/privacy" className="text-sky-500 font-bold underline">PDPA Privacy Policy</Link>.
          </p>
        </div>

        <div className="space-y-12 text-slate-700">
          
          {/* 1. MEMBERSHIP & ACCOUNT CONDUCT */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#1a365d] text-white flex items-center justify-center font-[1000] text-xs">01</span>
              <h2 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight">
                Account Registration & User Conduct
              </h2>
            </div>
            <div className="space-y-3 pl-2 sm:pl-11 pt-2">
              <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Identity & Eligibility</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  Users agree to provide accurate, up-to-date registration details. Profile pictures and avatar uploads must adhere to community guidelines and must not contain unauthorized third-party content.
                </p>
              </div>
              <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Fair Play & Anti-Cheating</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  The use of external chess engine assistance, bots, or unauthorized software during rated platform matches or proctored tournaments is strictly prohibited and results in immediate disqualification and account termination.
                </p>
              </div>
            </div>
          </section>

          {/* 2. PHYSICAL TRAINING & HEALTH PROTOCOLS */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center font-[1000] text-xs">02</span>
              <h2 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight">
                Studio Health, Physical Training (PT) & Safety
              </h2>
            </div>
            <div className="space-y-3 pl-2 sm:pl-11 pt-2">
              <div className="p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Health & Fitness Clearance</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  Participants engaging in physical conditioning, personal training (PT), and hybrid Plank Chess challenges confirm that they are physically fit to participate. Any existing medical conditions or injuries must be declared to coaches prior to session commencement.
                </p>
              </div>
              <div className="p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Studio Etiquette</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  All attendees at our Woodlands Studio are expected to observe safety protocols, respect fellow participants, and handle studio training equipment with care.
                </p>
              </div>
            </div>
          </section>

          {/* 3. BOOKINGS, PAYMENTS & RESCHEDULING */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#1a365d] text-white flex items-center justify-center font-[1000] text-xs">03</span>
              <h2 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight">
                Scheduling, Cancellations & Rescheduling
              </h2>
            </div>
            <div className="space-y-3 pl-2 sm:pl-11 pt-2">
              <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Private Lesson Rescheduling</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  We request a minimum of <strong>24 hours' advance notice</strong> to reschedule 1-on-1 private coaching or PT sessions. Late cancellations without prior notification may be charged at the full session rate.
                </p>
              </div>
              <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Corporate Workshop Confirmation</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  Corporate workshops and departmental retreat dates are secured upon formal proposal sign-off. Modifications to group sizing or schedule dates must be coordinated with our client team at least 7 days in advance.
                </p>
              </div>
            </div>
          </section>

          {/* 4. INTELLECTUAL PROPERTY & DATA PRIVACY */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center font-[1000] text-xs">04</span>
              <h2 className="text-xl md:text-2xl font-[1000] text-[#1a365d] uppercase tracking-tight">
                Intellectual Property & DPO Governance
              </h2>
            </div>
            <div className="space-y-3 pl-2 sm:pl-11 pt-2">
              <div className="p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Proprietary Training Methodologies</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  All training materials, tactical calculation modules, proprietary Plank Chess rules, and analysis reports developed by Chessmatic remain the exclusive intellectual property of Chessmatic.
                </p>
              </div>
              <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h4 className="text-[#1a365d] text-sm font-black uppercase tracking-tight mb-1">Singapore PDPA Compliance</h4>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  All personal data, identity documentation, and user photography are governed strictly under our <Link href="/privacy" className="text-sky-500 font-bold underline">PDPA Policy</Link>. For any inquiries, reach our Data Protection Officer at <a href="mailto:dpo@chessmatic.com" className="text-sky-500 font-bold underline">dpo@chessmatic.com</a>.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* FOOTER NOTE */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
          Chessmatic © 2026 • Singapore Jurisdiction
        </div>

      </div>
    </main>
  )
}
