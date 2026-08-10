"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/plank-chess", label: "Plank-Chess" },
    { href: "/adult-classes", label: "Adult Classes" },
    { href: "/corporate", label: "Corporate" },
    { href: "/blog", label: "Blog" },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Branding Colors
  const navy = "#1a365d"
  const cyan = "#0ea5e9" // sky-500

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-in-out">
      <nav
        className={`
          flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${isScrolled 
            ? "mt-5 w-[94%] max-w-7xl px-6 py-2.5 rounded-[50px] bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-white/40" 
            : "w-full px-8 sm:px-16 py-4 bg-white border-b border-gray-100"
          }
        `}
      >
        {/* Logo & Brand Text - Curved Style */}
        <Link href="/" className="flex items-center gap-3.5 group shrink-0">
          <img
            src="/logo-1.png"
            alt="Chessmatic Logo"
            className={`transition-all duration-500 ${isScrolled ? "h-9" : "h-12"}`}
          />
          <div className="flex flex-col">
            <h1 
              style={{ color: navy }} 
              className={`font-extrabold tracking-tighter leading-[0.9] flex items-baseline ${isScrolled ? "text-xl" : "text-2xl"}`}
            >
              Chess<span style={{ color: cyan }}>matic</span>
            </h1>
            <p className="text-[8px] sm:text-[9px] text-gray-400 font-semibold tracking-[0.12em] uppercase mt-1">
              Mind & Body Wellness
            </p>
          </div>
        </Link>

        {/* Inner Circular Structure (The "Track") */}
        <div className="hidden lg:flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200/30">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-6 py-2.5 text-[13px] font-bold transition-all duration-300 rounded-full
                  ${isActive 
                    ? "bg-white text-[#1a365d] shadow-[0_2px_10px_rgba(0,0,0,0.08)]" 
                    : "text-gray-500 hover:text-[#1a365d]"
                  }
                `}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Contact Button */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:block">
            <Button 
              className={`
                bg-[#1a365d] hover:bg-[#1a365d]/90 text-white rounded-full font-bold transition-all duration-300
                ${isScrolled ? "px-6 py-5 text-xs" : "px-9 py-6 text-sm shadow-xl shadow-[#1a365d]/10"}
              `}
            >
              Contact Us
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 text-[#1a365d] bg-gray-50 rounded-full"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-x-4 top-24 bg-white rounded-[32px] p-8 shadow-2xl border border-gray-100 z-50 flex flex-col gap-3 lg:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold p-4 rounded-2xl transition-colors ${pathname === item.href ? 'bg-[#f1f3f4] text-[#1a365d]' : 'text-gray-500'}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-4">
                <Button className="bg-[#1a365d] w-full py-7 rounded-2xl text-lg font-bold">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}