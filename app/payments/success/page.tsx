import Link from "next/link"
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const ref = typeof searchParams?.ref === "string" ? searchParams.ref : undefined

  return (
    <main className="min-h-screen bg-[#f8fafc] font-sans antialiased pt-32 pb-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-2xl text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={36} />
        </div>

        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200">
          Payment Processed
        </span>

        <h1 className="text-2xl sm:text-3xl font-[1000] text-[#1a365d] tracking-tight mt-4 mb-2">
          Thank You!
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed mb-6">
          Your payment has been received through HitPay. Our academy team has been notified and will confirm your class schedule shortly.
        </p>

        {ref && (
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 mb-6 text-xs">
            <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">Reference</span>
            <span className="font-mono font-black text-[#1a365d]">{ref}</span>
          </div>
        )}

        <div className="space-y-3">
          <a
            href={getWhatsAppUrl(`Hi Chessmatic! I've completed payment via HitPay (Ref: ${ref || "Online"}). Please confirm my session details.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-6 rounded-2xl text-xs font-[1000] uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg">
              <MessageCircle size={16} className="fill-current" />
              <span>Notify Academy on WhatsApp</span>
            </Button>
          </a>

          <Link href="/" className="block">
            <Button variant="ghost" className="w-full text-slate-500 hover:text-[#1a365d] text-xs font-bold">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

