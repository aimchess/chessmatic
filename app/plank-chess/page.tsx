"use client"

import { motion } from "framer-motion"
import { 
  Zap, Activity, Target, Brain, 
  Dumbbell, ChevronRight, Clock, Building2,
  ShieldCheck, Users, Trophy 
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PlankChessBanner from "@/components/plankBanner"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import PlankChessExplanation from "@/components/plank-expla"
import WhyItWorks from "@/components/strategy"
import PlankChessFormats from "@/components/types"
import FinalPlankCTA from "@/components/plankcta"

export default function PlankChessPage() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <main className="min-h-screen bg-white font-sans">
        <Navbar/>
      
      <PlankChessBanner/>

      <PlankChessExplanation/>
      <WhyItWorks/>
      <PlankChessFormats/>
      <FinalPlankCTA/>
    </main>
  )
}