"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import PlankChessBanner from "@/components/plankBanner"
import PlankChessExplanation from "@/components/plank-expla"
import WhyItWorks from "@/components/strategy"
import PlankChessFormats from "@/components/types"
import CompactRectangleCTA from "@/components/plankcta"

export default function PTPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <PlankChessBanner />
      <PlankChessExplanation />
      <WhyItWorks />
      <PlankChessFormats />
      <CompactRectangleCTA />
    </main>
  )
}
