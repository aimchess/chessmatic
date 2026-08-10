"use client"

import { Button } from "@/components/ui/button"
import { 
  Mail, Phone, MapPin, Facebook, Instagram, 
  Youtube, MessageCircle, ArrowRight, Brain, 
  Zap, Users, Target 
} from "lucide-react"
import Link from "next/link"

export function Footer() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <footer className="relative bg-[#1a365d] pt-20 md:pt-32 pb-10 overflow-hidden font-sans">
      
      {/* 1. TOP WAVE BORDER - Adjusted for seamless fit */}
      <div className="absolute top-0 left-0 w-full rotate-180 translate-y-[-1px]">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto min-h-[60px]"
          preserveAspectRatio="none"
        >
          <path d="M0 120V60C240 120 480 120 720 60C960 0 1200 0 1440 60V120H0Z" fill="white" />
          <path d="M0 120V80C240 130 480 130 720 80C960 30 1200 30 1440 80V120H0Z" fill="#f8fafc" opacity="0.4" />
        </svg>
      </div>

      {/* TECHNICAL DOTTED OVERLAY */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(white 1px, transparent 1px)`, 
             backgroundSize: '24px 24px' 
           }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center sm:text-left">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="flex flex-col items-center sm:items-start space-y-6">
            <Link href="/" className="flex items-center gap-0 group">
              <img src="/logo-2.png" alt="Chessmatic" className="h-14 md:h-18 w-auto transition-transform group-hover:scale-105" />
              <div className="flex flex-col text-left">
                <h3 className="text-xl md:text-2xl font-[1000] text-white tracking-tighter leading-none">
                  CHESS<span style={{ color: cyan }}>MATIC</span>
                </h3>
                <p className="text-[8px] md:text-[9px] font-black tracking-[0.25em] text-white/40 uppercase mt-1">Mind & Body Wellness</p>
              </div>
            </Link>
            <p className="text-slate-300/70 text-sm leading-relaxed max-w-xs">
              Singapore’s premier strategic wellness concept. We rewire minds and stabilize bodies through elite tactical training.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
                { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
                { icon: <Youtube size={18} />, href: "#", label: "Youtube" }
              ].map((social, i) => (
                <Link key={i} href={social.href} aria-label={social.label}>
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-sky-500 hover:border-sky-500 hover:-translate-y-1 group">
                    <span className="text-white group-hover:scale-110 transition-transform">{social.icon}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div className="lg:pl-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-400 mb-6 md:mb-8 flex items-center justify-center sm:justify-start gap-2">
              <Target size={12} /> Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Plank-Chess", href: "/plank-chess" },
                { label: "Adult Classes", href: "/adult-classes" },
                { label: "Corporate Labs", href: "/corporate" },
                { label: "Success Stories", href: "/success-stories" },
                { label: "Strategic Blog", href: "/blog" }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-300 hover:text-sky-400 transition-all text-sm font-bold flex items-center justify-center sm:justify-start group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-sky-500 hidden sm:block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: PILLARS */}
          <div className="hidden sm:block">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-400 mb-8 flex items-center gap-2">
              <Brain size={12} /> The Pillars
            </h4>
            <div className="space-y-5">
              {[
                { icon: <Zap size={14} className="text-rose-500" />, label: "Mental Endurance" },
                { icon: <Target size={14} className="text-sky-500" />, label: "Tactical Logic" },
                { icon: <Users size={14} className="text-amber-500" />, label: "Corporate Synergy" },
                { icon: <Brain size={14} className="text-indigo-400" />, label: "Cognitive Focus" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-slate-200 text-[13px] font-bold tracking-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 4: CONTACT & SUPPORT */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-400 mb-6 md:mb-8 flex items-center justify-center sm:justify-start gap-2">
              <MessageCircle size={12} /> Contact Lab
            </h4>
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <MapPin className="text-sky-400 shrink-0" size={18} />
                <p className="text-slate-300 text-[13px] font-medium leading-relaxed italic">
                  Woodlands Studio,<br className="hidden sm:block" /> Singapore
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <Mail className="text-sky-400 shrink-0" size={18} />
                <p className="text-slate-300 text-[13px] font-medium break-all">admin@intchess.com.sg</p>
              </div>
            </div>

            <Button asChild className="bg-[#25D366] hover:bg-[#20B858] text-white w-full max-w-[280px] sm:max-w-none mx-auto rounded-2xl py-6 md:py-7 shadow-xl shadow-green-900/20 active:scale-95 transition-all">
              <a href="https://wa.me/6584302326" target="_blank" rel="noopener noreferrer" className="font-black uppercase tracking-widest text-[10px] flex items-center justify-center">
                <MessageCircle className="w-4 h-4 mr-2 fill-white" />
                Live WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* COPYRIGHT & CREDITS */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2026 Chessmatic LLP. <span className="hidden md:inline">|</span> Strategic Intelligence
          </p>
          
          <div className="flex gap-6 md:gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors underline decoration-sky-500/30">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors underline decoration-sky-500/30">Terms</Link>
          </div>

          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
            Developed by{" "}
            <a 
              href="https://wa.me/917851988964" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-all font-black"
            >
              Jinesh Mehta
            </a>
          </p>
        </div>
      </div>
      
      {/* DECORATIVE NAVY GLOW - Positioned to not cause overflow */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-sky-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
    </footer>
  )
}