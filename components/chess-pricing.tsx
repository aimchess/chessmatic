"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Check, Sparkles, User, Users, ShieldCheck, 
  HelpCircle, MessageCircle, ArrowRight,
  Award, Percent, ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function ChessPricingSection() {
  const [deliveryMode, setDeliveryMode] = useState<"inPerson" | "online">("inPerson")
  const [billingCycle, setBillingCycle] = useState<"package4" | "perLesson">("package4")

  const cyan = "#0ea5e9"
  const isOnline = deliveryMode === "online"
  const isPackage = billingCycle === "package4"

  const plans = [
    {
      id: "assessment",
      name: "1-on-1 Assessment",
      subtitle: "Diagnostic Evaluation",
      badge: "Diagnostic",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      icon: <HelpCircle className="w-4 h-4 text-sky-500" />,
      price: isOnline ? 80 : 100,
      priceLabel: "single test",
      unitPrice: "60-min diagnostic",
      highlight: false,
      popular: false,
      features: [
        "1-on-1 benchmark with titled faculty",
        "Tactical & opening strengths diagnostic",
        "Custom roadmap & syllabus advice"
      ],
      whatsappMsg: `Hi Chessmatic! I'd like to book an Assessment (1-on-1) ${isOnline ? "Online ($80)" : "In-Person ($100)"}. Please share available evaluation slots.`
    },
    {
      id: "private-titled",
      name: "(Titled Coach) Private",
      subtitle: "1-on-1 FIDE Master Mentorship",
      badge: "Faculty Highlight",
      badgeColor: "bg-amber-50 text-amber-900 border-amber-200",
      icon: <Award className="w-4 h-4 text-amber-500" />,
      price: isPackage 
        ? (isOnline ? 480 : 600) 
        : (isOnline ? 160 : 200),
      priceLabel: isPackage ? "4 lessons" : "per lesson",
      unitPrice: isPackage 
        ? (isOnline ? "$120 / lesson" : "$150 / lesson (Save $200)")
        : "Standard session",
      highlight: true,
      popular: true,
      features: [
        "Dedicated certified FIDE Master coach",
        "Tailored opening repertoire & game review",
        "Async WhatsApp game checks between lessons"
      ],
      whatsappMsg: `Hi Chessmatic! I'd like to enroll in (Titled Coach) Private 1-on-1 coaching (${isPackage ? "4 Lessons Package" : "Single Lesson"}, ${isOnline ? "Online" : "In-Person"}). Please share coach availability.`
    },
    {
      id: "small-group",
      name: "Small Group (2-4 Pax)",
      subtitle: "Semi-Private Cohorts",
      badge: "High Synergy",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      icon: <Users className="w-4 h-4 text-emerald-500" />,
      price: isPackage 
        ? (isOnline ? 200 : 250) 
        : (isOnline ? 64 : 80),
      priceLabel: isPackage ? "4 lessons" : "per lesson",
      unitPrice: isPackage 
        ? (isOnline ? "$50 / lesson" : "$62.50 / lesson (Save $70)")
        : "Standard session",
      highlight: false,
      popular: false,
      features: [
        "2 to 4 players for high attention",
        "Timed clock sparring & critical review",
        "Dynamic endgame & tactical drills"
      ],
      whatsappMsg: `Hi Chessmatic! I'd like to join the Small Group (2 to 4 Pax) coaching (${isPackage ? "4 Lessons Package" : "Single Lesson"}, ${isOnline ? "Online" : "In-Person"}). Please share upcoming cohort schedules.`
    },
    {
      id: "large-group",
      name: "Large Group (5-8 Pax)",
      subtitle: "Weekly Group Workshops",
      badge: "Best Value",
      badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
      icon: <Users className="w-4 h-4 text-purple-500" />,
      price: isPackage 
        ? (isOnline ? 160 : 200) 
        : (isOnline ? 56 : 70),
      priceLabel: isPackage ? "4 lessons" : "per lesson",
      unitPrice: isPackage 
        ? (isOnline ? "$40 / lesson" : "$50 / lesson (Save $80)")
        : "Standard session",
      highlight: false,
      popular: false,
      features: [
        "Structured cohort curriculum (5-8 pax)",
        "Opening themes & tactical puzzle sets",
        "Arena tournaments with coach review"
      ],
      whatsappMsg: `Hi Chessmatic! I'd like to enroll in Large Group (5 to 8 Pax) coaching (${isPackage ? "4 Lessons Package" : "Single Lesson"}, ${isOnline ? "Online" : "In-Person"}). Please share dates and details.`
    }
  ]

  return (
    <section id="pricing" className="py-12 md:py-16 bg-[#f8fafc] font-sans border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* COMPACT SECTION HEADER & TOGGLES */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-2.5">
              <Percent size={12} className="text-sky-500" />
              <span className="text-[#1a365d] text-[9px] font-[1000] tracking-widest uppercase">
                Official Tuition Rates
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[1000] text-[#1a365d] tracking-tight leading-tight uppercase italic">
              Coaching <span style={{ color: cyan }}>Price List.</span>
            </h2>
            <p className="text-slate-500 font-medium text-xs sm:text-sm mt-1 max-w-xl">
              Transparent fees for in-studio Woodlands sessions & online interactive classes.
            </p>
          </div>

          {/* COMPACT TOGGLES */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Delivery Toggle */}
            <div className="inline-flex items-center bg-white p-1 rounded-full border border-slate-200 shadow-sm">
              <button
                onClick={() => setDeliveryMode("inPerson")}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all ${
                  deliveryMode === "inPerson" 
                    ? "bg-[#1a365d] text-white shadow-sm" 
                    : "text-slate-600 hover:text-[#1a365d]"
                }`}
              >
                In-Person
              </button>
              <button
                onClick={() => setDeliveryMode("online")}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  deliveryMode === "online" 
                    ? "bg-sky-500 text-white shadow-sm" 
                    : "text-slate-600 hover:text-sky-600"
                }`}
              >
                <span>Online</span>
                <span className={`text-[8px] font-black px-1.5 py-0.2 rounded-full ${
                  deliveryMode === "online" ? "bg-white text-sky-600" : "bg-sky-100 text-sky-700"
                }`}>
                  -20%
                </span>
              </button>
            </div>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white p-1 rounded-full border border-slate-200 shadow-sm">
              <button
                onClick={() => setBillingCycle("package4")}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  billingCycle === "package4" 
                    ? "bg-[#1a365d] text-white shadow-sm" 
                    : "text-slate-600 hover:text-[#1a365d]"
                }`}
              >
                <span>4 Lessons</span>
                <span className={`text-[8px] font-black px-1.5 py-0.2 rounded-full ${
                  billingCycle === "package4" ? "bg-emerald-400 text-[#1a365d]" : "bg-emerald-100 text-emerald-800"
                }`}>
                  Best
                </span>
              </button>
              <button
                onClick={() => setBillingCycle("perLesson")}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all ${
                  billingCycle === "perLesson" 
                    ? "bg-[#1a365d] text-white shadow-sm" 
                    : "text-slate-600 hover:text-[#1a365d]"
                }`}
              >
                Per Lesson
              </button>
            </div>
          </div>
        </div>

        {/* COMPACT PRICING CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-5 sm:p-5 flex flex-col justify-between transition-all duration-300 ${
                plan.highlight 
                  ? "bg-white border-2 border-sky-400 shadow-xl shadow-sky-900/5 ring-2 ring-sky-100" 
                  : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles size={10} className="fill-current" />
                  <span>Popular</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                    {plan.icon}
                  </div>
                </div>

                <h3 className="text-base font-[1000] text-[#1a365d] tracking-tight leading-tight">
                  {plan.name}
                </h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {plan.subtitle}
                </p>

                {/* Price Display */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[10px] font-black text-slate-400">SGD</span>
                    <span className="text-2xl sm:text-3xl font-[1000] text-[#1a365d] tracking-tight">
                      ${plan.price}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 ml-0.5">
                      / {plan.priceLabel}
                    </span>
                  </div>
                  <div className="text-[10px] font-black text-sky-600 mt-0.5">
                    {plan.unitPrice}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1.5 mb-5 text-[11px] text-slate-600">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <Check size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-semibold text-slate-700 leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100 mt-auto">
                <Button 
                  asChild 
                  size="sm"
                  className={`w-full rounded-xl py-4 font-[1000] uppercase tracking-wider text-[10px] shadow-sm transition-all ${
                    plan.highlight 
                      ? "bg-[#25D366] hover:bg-[#20ba59] text-white" 
                      : "bg-[#1a365d] hover:bg-[#152c4d] text-white"
                  }`}
                >
                  <a 
                    href={getWhatsAppUrl(plan.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={13} className="fill-current" />
                    <span>Book {plan.id === 'assessment' ? 'Test' : 'Slot'}</span>
                    <ArrowRight size={12} />
                  </a>
                </Button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* COMPACT DISCOUNTS & POLICY RIBBON */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-600 text-[11px] font-semibold text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-[#1a365d] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <strong>Online Lessons:</strong> 20% off
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#1a365d] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <strong>Bulk Savings:</strong> 12+ sessions (10% off) • 24+ sessions (20% off)
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#1a365d] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <strong>Non-Titled Coach:</strong> 20% off
            </span>
            <span className="text-slate-400 text-[10px] italic">
              (Discounts are non-stackable)
            </span>
          </div>

          <Link 
            href="/terms" 
            className="inline-flex items-center gap-1.5 text-[11px] font-black text-sky-600 hover:text-[#1a365d] shrink-0 uppercase tracking-wider transition-colors"
          >
            <ShieldCheck size={13} />
            <span>View Full Terms & Makeup Policy</span>
            <ExternalLink size={11} />
          </Link>
        </div>

      </div>
    </section>
  )
}
