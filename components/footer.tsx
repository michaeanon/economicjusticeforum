"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Scale } from "lucide-react"
import { DeveloperCredits } from "./typing-text"
import { useState, useEffect } from "react"

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      // Format time as HH:MM AM/PM
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const ampm = hours >= 12 ? "PM" : "AM"
      const displayHours = hours % 12 || 12
      const displayMinutes = minutes.toString().padStart(2, "0")

      // Format date as Day, Month DD, YYYY
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]

      const dayName = days[now.getDay()]
      const monthName = months[now.getMonth()]
      const date = now.getDate()
      const year = now.getFullYear()

      setCurrentTime(`${displayHours}:${displayMinutes} ${ampm} EAT, ${dayName}, ${monthName} ${date}, ${year}`)
    }

    updateTime()
    // Update every minute
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-[#2c3e50] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div>
            <Link href="#home" className="flex flex-col items-center gap-3 group mb-6">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-[#27ae60]/30 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-white/90 to-[#27ae60]/90 p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Scale className="w-6 h-6 text-[#1a5276]" strokeWidth={2.5} />
                  </div>
                </div>
                <span className="text-lg sm:text-xl font-bold leading-tight text-white text-center">
                  Economic Justice Forum
                </span>
              </div>
              <div className="flex items-center gap-2 w-full max-w-xs">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <div className="w-1 h-1 rounded-full bg-white/80" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-center text-white/90">
                Building a Fair Future
              </span>
            </Link>

            <p className="text-gray-300 mb-6">
              Building the future of Kenya with justice, equity, and prosperity for all.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1a5276] flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1a5276] flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1a5276] flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1a5276] flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#1a5276]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Pillars", "Donate", "Join"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#1a5276]">
              Resources
            </h3>
            <ul className="space-y-3">
              {["Blog", "Research", "Publications", "Media", "Partners"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#1a5276]">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+254728355531" className="hover:text-white">
                  +254 728 355 531
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:cmwambingu@gmail.com" className="hover:text-white">
                  cmwambingu@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#1a5276]">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white hover:pl-2 transition-all">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-300 hover:text-white hover:pl-2 transition-all">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white hover:pl-2 transition-all">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Economic Justice Forum. All rights reserved. Last updated: {currentTime}</p>
          <DeveloperCredits />
        </div>
      </div>
    </footer>
  )
}
