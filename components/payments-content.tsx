"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Building2, QrCode, Copy, Check, ShieldCheck, 
  ArrowRight, MessageCircle, AlertCircle, Sparkles, CreditCard
} from "lucide-react"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function PaymentsContent() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2500)
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
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
          <ShieldCheck size={14} className="text-emerald-500" />
          <span className="text-[#1a365d] text-[10px] font-black uppercase tracking-[0.25em]">
            Official Verified Account
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-[#1a365d] tracking-tight leading-tight uppercase italic">
          Payment <span className="text-sky-500">Details.</span>
        </h1>
        <p className="text-slate-500 font-medium text-xs sm:text-base mt-3 max-w-xl mx-auto">
          Complete your tuition fees or session deposits via PayNow QR or direct DBS Bank transfer. Please send your payment screenshot on WhatsApp for instant confirmation.
        </p>
      </div>

      {/* TWO-COLUMN GRID: PAYNOW QR & BANK TRANSFER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        
        {/* LEFT: PAYNOW QR CODE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-6 bg-white rounded-[32px] p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center relative overflow-hidden"
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

        {/* RIGHT: DBS BANK TRANSFER DETAILS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-6 bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/50 flex flex-col justify-between"
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

      </div>

    </div>
  )
}

