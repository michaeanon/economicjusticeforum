"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Scale } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#pillars", label: "Pillars" },
    { href: "#donate", label: "Donate" },
    { href: "#join", label: "Join" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-gradient-to-r from-[#1a5276]/95 via-[#1e6f8c]/95 to-[#27ae60]/95 backdrop-blur-lg shadow-xl py-3"
          : "bg-gradient-to-r from-[#1a5276]/20 via-[#1e6f8c]/20 to-[#27ae60]/20 backdrop-blur-md shadow-lg py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-[#27ae60]/30 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-white/90 to-[#27ae60]/90 p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Scale className="w-6 h-6 text-[#1a5276]" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span
                className={`text-lg sm:text-xl lg:text-2xl font-bold leading-tight transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-white drop-shadow-lg"
                }`}
              >
                Economic Justice Forum
              </span>
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <div className="w-1 h-1 rounded-full bg-white/80" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>
              <span
                className={`text-[10px] sm:text-xs font-semibold tracking-wide text-center transition-colors duration-300 ${
                  isScrolled ? "text-white/90" : "text-white/80 drop-shadow-md"
                }`}
              >
                Building a Fair Future
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 font-semibold transition-all duration-300 group ${
                      isScrolled ? "text-white hover:text-white" : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2.5 rounded-lg bg-white/20 backdrop-blur-sm text-white shadow-md hover:shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 animate-in slide-in-from-top duration-300">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="animate-in fade-in slide-in-from-left duration-300"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-center font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/20 rounded-lg transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
