import type { Metadata } from "next"
import PaymentsContent from "@/components/payments-content"

export const metadata: Metadata = {
  title: "Official Payment Details & Bank Transfer | Chessmatic Singapore",
  description:
    "Official payment instructions and verified bank account details for Chessmatic (INTCHESS ACADEMY PTE. LTD.). Pay via PayNow QR or direct DBS Bank transfer.",
  alternates: {
    canonical: "https://www.chessmatic.sg/payments",
  },
}

export default function PaymentsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] font-sans antialiased overflow-x-hidden pt-28 pb-20">
      <PaymentsContent />
    </main>
  )
}

