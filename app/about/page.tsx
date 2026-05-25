"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Trophy, Award, Users, Target, Calendar, Star, Heart, BookOpen, Lightbulb, Eye } from "lucide-react"
import { Footer } from "@/components/footer"
import AboutBanner from "@/components/aboutBanner"
import AboutSection from "@/components/about"
import MissionVision from "@/components/mission"
import WhatMakesUsDifferent from "@/components/diff"
import FounderSection from "@/components/founder"
import WhoWeServe from "@/components/who"
import CompactCTA from "@/components/cta"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <AboutBanner/>
      <AboutSection/>
      <MissionVision/>
      <WhatMakesUsDifferent/>
      <FounderSection/>
      <WhoWeServe/>
      <CompactCTA/>
    </div>
  )
}