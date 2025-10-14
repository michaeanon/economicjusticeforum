"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function WelcomeIntro() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("ejf-has-visited")

    if (!hasVisited) {
      // Show intro after a brief delay
      setTimeout(() => {
        setIsVisible(true)
        setIsAnimating(true)
      }, 300)

      setTimeout(() => {
        handleClose()
      }, 5300)
    }
  }, [])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      localStorage.setItem("ejf-has-visited", "true")
    }, 500)
  }

  const handleEnter = () => {
    handleClose()
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-600 via-teal-500 to-emerald-500 transition-opacity duration-500 overflow-hidden ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Skip button */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors duration-300 group z-10"
        aria-label="Skip intro"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium hidden sm:block">Skip</span>
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        </div>
      </button>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-float-slow" />
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div
          className={`flex flex-col items-center gap-6 mb-8 transition-all duration-1000 ${
            isAnimating ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-12 scale-90"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl animate-pulse-slow" />
            <div
              className={`relative bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20 transition-transform duration-1000 ${isAnimating ? "rotate-0" : "-rotate-180"}`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                {/* Animated Justice Scales SVG */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Center pole */}
                  <rect x="48" y="20" width="4" height="60" fill="currentColor" className="animate-fade-in" />
                  {/* Base */}
                  <rect x="35" y="78" width="30" height="4" fill="currentColor" className="animate-fade-in" />
                  {/* Horizontal beam */}
                  <rect x="20" y="28" width="60" height="3" fill="currentColor" className="animate-balance" />
                  {/* Left scale pan */}
                  <g className="animate-scale-left origin-[30%_30%]">
                    <line x1="30" y1="30" x2="25" y2="45" stroke="currentColor" strokeWidth="2" />
                    <line x1="35" y1="30" x2="40" y2="45" stroke="currentColor" strokeWidth="2" />
                    <path d="M 20 45 L 25 45 L 25 48 L 40 48 L 40 45 L 45 45 L 42 52 L 23 52 Z" fill="currentColor" />
                  </g>
                  {/* Right scale pan */}
                  <g className="animate-scale-right origin-[70%_30%]">
                    <line x1="70" y1="30" x2="65" y2="45" stroke="currentColor" strokeWidth="2" />
                    <line x1="75" y1="30" x2="80" y2="45" stroke="currentColor" strokeWidth="2" />
                    <path d="M 60 45 L 65 45 L 65 48 L 80 48 L 80 45 L 85 45 L 82 52 L 63 52 Z" fill="currentColor" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* EJF Badge with slide in from left */}
          <div
            className={`bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20 transition-all duration-1000 delay-200 ${isAnimating ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">EJF</span>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            <span
              className={`inline-block transition-all duration-700 delay-300 ${isAnimating ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            >
              Economic
            </span>{" "}
            <span
              className={`inline-block transition-all duration-700 delay-500 ${isAnimating ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            >
              Justice
            </span>
            <br />
            <span
              className={`inline-block text-white/90 transition-all duration-700 delay-700 ${isAnimating ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"}`}
            >
              Forum
            </span>
          </h1>
        </div>

        <div
          className={`flex items-center justify-center gap-3 mb-6 transition-all duration-1000 delay-900 ${
            isAnimating ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        >
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-white/60 to-white/60" />
          <div className="w-2 h-2 rounded-full bg-white/80 animate-ping-slow" />
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent via-white/60 to-white/60" />
        </div>

        <p
          className={`text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-8 transition-all duration-1000 delay-1100 ${
            isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Building a Fair Future
        </p>

        <p
          className={`text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-1300 ${
            isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Championing transparency, accountability, and equity in governance, natural resources, and economic systems
          across Africa.
        </p>

        <button
          onClick={handleEnter}
          className={`group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-teal-600 rounded-full font-semibold text-base sm:text-lg hover:bg-white/95 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
            isAnimating ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90"
          } transition-all duration-1000 delay-1500`}
        >
          <span className="relative z-10">Explore Our Mission</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>
    </div>
  )
}
