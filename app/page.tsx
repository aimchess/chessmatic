"use client"

import { useState } from "react"
import HeroSection from "@/components/hero"
import WhyChessmatic from "@/components/why"
import SignatureExperience from "@/components/import"
import ProgramsOverview from "@/components/program"
import TransformationSection from "@/components/impact"
import FAQSection from "@/components/faq"
import CompactCTA from "@/components/cta"
import { motion } from "framer-motion"
import AwardSection from "@/components/award"
import PricingSection from "@/components/corpcourse"

export default function HomePage() {
  
  // Structured Data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Chessmatic LLP",
    "url": "https://www.chessmatic.sg",
    "logo": "https://www.chessmatic.sg/logo.jpg",
    "description": "Singapore's first mental and physical hybrid performance lab. Combining adult chess coaching with physical training (PT).",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Woodlands",
      "addressCountry": "SG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+65-8430-2326",
      "contactType": "Customer Service"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "120"
    }
  }

  return (
    <>
      {/* 
        NOTE: In Next.js App Router, <Head> is usually handled via 'export const metadata' in a server component.
        Since this is a client component, we use JSON-LD for SEO.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white">
        <main>
          {/* 1. HERO: The First Impression */}
          <HeroSection />

          {/* 2. WHY CHESSMATIC: The Logic */}
          <section className="relative z-10 -mt-10">
            <WhyChessmatic />
          </section>

          {/* 3. SIGNATURE EXPERIENCE: The Viral Hook */}
          <SignatureExperience />

          {/* 4. PROGRAMS: The Roadmap */}
          <div className="bg-[#f8fafc]">
             <ProgramsOverview />
          </div>

          <PricingSection/>

          {/* 5. IMPACT: The Proof */}
          <TransformationSection />


          {/* 6. FAQ: The Clarity */}
          <FAQSection />

          {/* 7. CTA: The Conversion */}
          <div className="pb-20">
             <CompactCTA />
          </div>
        </main>
      </div>
    </>
  )
}