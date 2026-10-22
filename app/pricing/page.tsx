import { Metadata } from "next"
import ChessPricingSection from "@/components/chess-pricing"
import FAQSection from "@/components/faq"
import CompactCTA from "@/components/cta"
import { Trophy, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Official Price List & Coaching Fees | Chessmatic Singapore",
  description: "Official price list for Chessmatic chess coaching in Singapore. In-person Woodlands studio & online lessons with certified FIDE Masters. Private, small group, and 1-on-1 assessment rates.",
  keywords: [
    "Chess coaching price Singapore",
    "Chessmatic fees",
    "FIDE Master private lesson rate",
    "Adult chess class fees Singapore",
    "Chess private tuition price list"
  ]
}

export default function PricingPage() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <div className="min-h-screen bg-white">
      {/* HERO BANNER */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(${navy} 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Trophy size={14} className="text-amber-500" />
            <span className="text-[#1a365d] text-[10px] font-[1000] tracking-widest uppercase">
              100% Transparent Fee Structure
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[1000] text-[#1a365d] tracking-tighter leading-tight uppercase italic mb-6">
            Academy Tuition & <span style={{ color: cyan }}>Lesson Rates.</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Fair, transparent pricing for world-class chess mentorship. 
            Choose dedicated 1-on-1 FIDE Master coaching or collaborative cohort workshops.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs font-bold text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>No Hidden Registration Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>Upfront 20% Online Discount</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>Bulk Savings Up to 20%</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRICING COMPONENT */}
      <ChessPricingSection />

      {/* FAQ SECTION */}
      <FAQSection />

      {/* CTA BANNER */}
      <div className="pb-20">
        <CompactCTA />
      </div>
    </div>
  )
}
