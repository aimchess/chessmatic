import type { Metadata } from "next"
import CoachesBanner from "@/components/coachesBanner"
import FounderSection from "@/components/founder"
import CoachesSection from "@/components/coaches"
import CoachesCTA from "@/components/coachescta"

export const metadata: Metadata = {
  title: "Master Faculty & Coaches | Chessmatic Singapore",
  description:
    "Meet Chessmatic's world-class coaching faculty in Singapore. Train under accredited FIDE Masters FM Dino Ballecer, FM Arlan Cabe, and Founder Wagish. Book private 1-on-1 lessons, group cohorts, and strategy diagnostics.",
  keywords: [
    "Chess coaches Singapore",
    "FIDE Master coach Singapore",
    "Chessmatic coaches",
    "FM Dino Ballecer",
    "FM Arlan Cabe",
    "Wagish Chessmatic",
    "Adult chess trainer Singapore",
    "Woodlands chess coach",
    "Private chess lessons Singapore",
  ],
  alternates: {
    canonical: "https://www.chessmatic.sg/coaches",
  },
  openGraph: {
    title: "Master Faculty & Coaches | Chessmatic Singapore",
    description:
      "Learn from Singapore's elite chess faculty and FIDE Masters at Chessmatic. Tailored private training, adult workshops, and strategic performance.",
    url: "https://www.chessmatic.sg/coaches",
    siteName: "Chessmatic",
    locale: "en_SG",
    type: "website",
  },
}

export default function CoachesPage() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
      <CoachesBanner />
      <FounderSection />
      <CoachesSection />
      <CoachesCTA />
    </main>
  )
}
