"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Building2, QrCode, Copy, Check, ShieldCheck, 
  ArrowRight, MessageCircle, AlertCircle, Sparkles, CreditCard,
  Zap, Lock, ExternalLink, Loader2
} from "lucide-react"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function PaymentsContent() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  // HitPay Form State
  const [activeTab, setActiveTab] = useState<"hitpay" | "paynow" | "bank">("hitpay")
  const [studentName, setStudentName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [program, setProgram] = useState("Private (1-on-1) • 4 Lessons - $480")
  const [customAmount, setCustomAmount] = useState("480")
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2500)
  }

  const presetPrograms = [
    { label: "1-on-1 Private (4 Lessons) - SGD $480", amount: "480", program: "Private 1-on-1 (4 Lessons)" },
    { label: "1-on-1 Online Private (4 Lessons) - SGD $320", amount: "320", program: "Online 1-on-1 Private (4 Lessons)" },
    { label: "Small Group Cohort (4 Lessons) - SGD $250", amount: "250", program: "Small Group 2-4 Pax (4 Lessons)" },
    { label: "Diagnostic Assessment (1-on-1) - SGD $100", amount: "100", program: "1-on-1 Assessment" },
    { label: "Saturday Night Tournament - SGD $30", amount: "30", program: "Saturday Night Rapid Arena" },
    { label: "Custom Amount", amount: "", program: "Custom Tuition Amount" },
  ]

  const handlePresetSelect = (p: typeof presetPrograms[0]) => {
    setProgram(p.program)
    if (p.amount) {
      setCustomAmount(p.amount)
    }
  }

  const handleHitPaySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    const finalAmount = parseFloat(customAmount)
    if (isNaN(finalAmount) || finalAmount <= 0) {
      setErrorMessage("Please enter a valid tuition amount.")
      return
    }

    if (!studentName.trim()) {
      setErrorMessage("Please enter the student's full name.")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/hitpay/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmount,
          studentName: studentName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          program,
          purpose: `Chessmatic Tuition: ${program} (${studentName.trim()})`,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        if (data.error === "HITPAY_NOT_CONFIGURED") {
          setErrorMessage(
            "HitPay API key is not yet set in .env.local. You can also use our instant PayNow QR or DBS Bank Transfer tabs below."
          )
        } else {
          setErrorMessage(data.error || "Failed to initialize HitPay checkout. Please try again.")
        }
        setLoading(false)
        return
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        setErrorMessage("HitPay checkout URL not returned.")
        setLoading(false)
      }
    } catch (err: any) {
      console.error(err)
      setErrorMessage("Network error connecting to payment gateway.")
      setLoading(false)
    }
  }

  const bankDetails = [
    { label: "Account Name", value: "INTCHESS ACADEMY PTE. LTD.", key: "name" },
    { label: "Account Number", value: "885413962389", key: "acc_num", highlight: true },
    { label: "Bank Name", value: "DBS Bank Ltd.", key: "bank" },
    { label: "BIC / SWIFT Code", value: "DBSSSGSGXXX", key: "swift" },
    { label: "Branch Number", value: "003", key: "branch" },
    { 
      label: "Bank Address", 
      value: "12 Marina Boulevard, DBS Asia Central, Marina Bay Financial Centre Tower 3, Singapore 018982.", 
      key: "address",
      multiline: true 
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
          <ShieldCheck size={14} className="text-emerald-500" />
          <span className="text-[#1a365d] text-[10px] font-black uppercase tracking-[0.25em]">
            Official Verified Account
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tight leading-tight uppercase italic">
          Payment <span className="text-sky-500">Checkout.</span>
        </h1>
        <p className="text-slate-500 font-medium text-xs sm:text-base mt-3 max-w-xl mx-auto">
          Pay securely online via <strong>HitPay</strong> (Credit Cards, PayNow, GrabPay, ShopeePay) or direct bank transfer.
        </p>

        {/* METHOD TABS */}
        <div className="inline-flex p-1 rounded-2xl bg-slate-200/70 mt-6 border border-slate-200">
          <button
            onClick={() => setActiveTab("hitpay")}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "hitpay" ? "bg-white text-[#1a365d] shadow-sm" : "text-slate-600 hover:text-[#1a365d]"
            }`}
          >
            <Zap size={14} className="text-amber-500" />
            <span>HitPay Online</span>
          </button>
          <button
            onClick={() => setActiveTab("paynow")}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "paynow" ? "bg-white text-[#1a365d] shadow-sm" : "text-slate-600 hover:text-[#1a365d]"
            }`}
          >
            <QrCode size={14} className="text-purple-600" />
            <span>PayNow QR</span>
          </button>
          <button
            onClick={() => setActiveTab("bank")}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "bank" ? "bg-white text-[#1a365d] shadow-sm" : "text-slate-600 hover:text-[#1a365d]"
            }`}
          >
            <Building2 size={14} className="text-sky-600" />
            <span>DBS Bank</span>
          </button>
        </div>
      </div>

      {/* TAB 1: HITPAY ONLINE CHECKOUT */}
      {activeTab === "hitpay" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white rounded-[32px] p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50 mb-12"
        >
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-[10px] font-black uppercase tracking-wider mb-2">
                <Lock size={11} className="text-emerald-600" />
                <span>256-Bit SSL Encrypted Checkout</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-[1000] text-[#1a365d] tracking-tight">
                HitPay Secure Checkout
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-100">PayNow</span>
              <span className="px-2 py-0.5 rounded bg-slate-100">Visa</span>
              <span className="px-2 py-0.5 rounded bg-slate-100">Mastercard</span>
            </div>
          </div>

          {/* PRESET TUITION BUTTONS */}
          <div className="mb-6">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">
              Select Programme Package
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {presetPrograms.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handlePresetSelect(p)}
                  className={`p-3 rounded-2xl text-left text-xs font-bold border transition-all ${
                    program === p.program
                      ? "bg-sky-50/80 border-sky-400 text-sky-900 ring-1 ring-sky-400/30"
                      : "bg-[#f8fafc] border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleHitPaySubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1.5">
                  Student / Payee Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. Tan Wei Ming"
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-[#1a365d] focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1.5">
                  Amount in SGD ($) *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">
                    SGD $
                  </span>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="480.00"
                    className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl pl-20 pr-4 py-3 text-sm font-black text-[#1a365d] focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1.5">
                  Email Address (For receipt)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-[#1a365d] focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1.5">
                  WhatsApp Contact Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+65 8580 5046"
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-[#1a365d] focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 leading-relaxed flex items-start gap-2">
                <AlertCircle size={15} className="text-rose-600 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#1a365d] via-[#103d6d] to-sky-600 hover:from-[#102a4d] hover:to-sky-500 text-white font-[1000] text-xs uppercase tracking-wider shadow-xl transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Connecting to HitPay...</span>
                  </>
                ) : (
                  <>
                    <Lock size={15} />
                    <span>Proceed to HitPay Checkout (SGD ${customAmount || "0"})</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-[11px] text-slate-400 text-center mt-4">
            Supports Singapore PayNow Online, Visa, Mastercard, American Express, GrabPay & ShopeePay.
          </p>
        </motion.div>
      )}

      {/* TAB 2 & 3: PAYNOW QR & DBS BANK TRANSFER GRID */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 ${activeTab === "hitpay" ? "mt-8" : ""}`}>
        
        {/* LEFT: PAYNOW QR CODE */}
        {(activeTab === "hitpay" || activeTab === "paynow") && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${activeTab === "paynow" ? "lg:col-span-12 max-w-2xl mx-auto w-full" : "lg:col-span-6"} bg-white rounded-[32px] p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center relative overflow-hidden`}
          >
            {/* TOP TAG */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-900 border border-purple-200 text-[10px] font-black uppercase tracking-wider mb-5">
              <QrCode size={12} className="text-purple-700" />
              <span>Instant PayNow Transfer</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-[1000] text-[#1a365d] tracking-tight mb-1">
              Scan to Pay via PayNow
            </h2>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-6">
              Supported by all Singapore Banking Apps
            </p>

            {/* QR CODE CONTAINER - ENLARGED */}
            <div className="p-5 sm:p-6 bg-white rounded-3xl border-2 border-purple-200/80 shadow-xl shadow-purple-500/10 mb-6 w-full max-w-[420px]">
              <img 
                src="/paynow-qr.jpg" 
                alt="PayNow QR Code - INTCHESS ACADEMY PTE. LTD."
                className="w-full h-auto rounded-2xl object-contain mx-auto"
              />
            </div>

            {/* REFERENCE CODE NOTICE */}
            <div className="w-full max-w-[420px] bg-purple-50/70 border border-purple-100 rounded-2xl p-4 sm:p-5 text-left mb-6">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-900">
                  Payment Reference Code
                </span>
                <button
                  onClick={() => handleCopy("SBA-202642996G", "ref")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors bg-white px-2.5 py-1 rounded-lg border border-purple-200"
                >
                  {copiedKey === "ref" ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                  <span>{copiedKey === "ref" ? "Copied" : "Copy Reference"}</span>
                </button>
              </div>
              <p className="text-lg sm:text-xl font-black text-[#1a365d] tracking-tight">
                SBA-202642996G
              </p>
              <p className="text-[11px] text-purple-800/80 font-medium mt-1 leading-snug">
                Do not edit. Incorrectly entered reference will cause processing delays.
              </p>
            </div>

            {/* HELPER SUBTEXT */}
            <p className="text-[11px] text-slate-400 font-medium">
              Sleek Tech collects payments on behalf of <strong className="text-slate-600">INTCHESS ACADEMY PTE. LTD.</strong>
            </p>
          </motion.div>
        )}

        {/* RIGHT: DBS BANK TRANSFER DETAILS */}
        {(activeTab === "hitpay" || activeTab === "bank") && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`${activeTab === "bank" ? "lg:col-span-12 max-w-2xl mx-auto w-full" : "lg:col-span-6"} bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/50 flex flex-col justify-between`}
          >
            <div>
              {/* TOP TAG */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-900 border border-sky-200 text-[10px] font-black uppercase tracking-wider mb-5">
                <Building2 size={12} className="text-sky-700" />
                <span>Direct Bank Transfer / FAST / GIRO</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-[1000] text-[#1a365d] tracking-tight mb-1">
                Bank Account Information
              </h2>
              <p className="text-slate-500 font-medium text-xs sm:text-sm mb-6">
                Use these exact details for bank-to-bank transfers or international wires.
              </p>

              {/* DETAILS LIST */}
              <div className="space-y-3.5">
                {bankDetails.map((item) => (
                  <div 
                    key={item.key}
                    className={`p-4 rounded-2xl border transition-all ${
                      item.highlight 
                        ? "bg-gradient-to-r from-sky-50/80 to-blue-50/80 border-sky-200 shadow-sm" 
                        : "bg-[#f8fafc] border-slate-200/70"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        {item.label}
                      </span>
                      <button
                        onClick={() => handleCopy(item.value, item.key)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-600 hover:text-sky-800 transition-colors"
                        title={`Copy ${item.label}`}
                      >
                        {copiedKey === item.key ? (
                          <>
                            <Check size={12} className="text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    
                    <p className={`font-black text-[#1a365d] tracking-tight ${
                      item.highlight ? "text-xl sm:text-2xl text-sky-900" : "text-sm sm:text-base"
                    } ${item.multiline ? "leading-relaxed text-xs sm:text-sm font-semibold" : ""}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* VERIFICATION NOTICE & INSTRUCTIONS */}
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-amber-950">
                <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="font-bold">Payment Confirmation Step:</strong>
                  <p className="text-amber-900/90 mt-0.5">
                    After completing your transfer, please take a screenshot of the transaction receipt and send it to us via WhatsApp with the student&apos;s full name.
                  </p>
                </div>
              </div>

              <a
                href={getWhatsAppUrl("Hi Chessmatic! I have made a payment for chess tuition. Here is my transaction confirmation receipt.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-[1000] uppercase tracking-wider shadow-lg transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2">
                  <MessageCircle size={16} className="fill-current" />
                  <span>Send Payment Receipt on WhatsApp</span>
                  <ArrowRight size={14} />
                </button>
              </a>
            </div>
          </motion.div>
        )}

      </div>

    </div>
  )
}
