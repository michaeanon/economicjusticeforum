"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem("cookieConsent")
    if (!consentGiven) {
      setTimeout(() => {
        setShowConsent(true)
        setTimeout(() => setIsVisible(true), 100)
      }, 6000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    closePopup()
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    closePopup()
  }

  const closePopup = () => {
    setIsVisible(false)
    setTimeout(() => setShowConsent(false), 300)
  }

  if (!showConsent) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div
        className={`relative max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="h-1.5 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500" />

        <button
          onClick={closePopup}
          className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200 z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <div className="p-5 md:p-6">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 flex items-center justify-center shadow-lg animate-bounce-slow">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
              </svg>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-center mb-3 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
            We Value Your Privacy
          </h2>

          <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
            We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you
            consent to our use of cookies.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-4 space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">Essential Cookies</h3>
                <p className="text-xs text-gray-600">Required for the website to function</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">Analytics Cookies</h3>
                <p className="text-xs text-gray-600">Help us understand visitor interactions</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">Preference Cookies</h3>
                <p className="text-xs text-gray-600">Remember your settings</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={handleAccept}
              className="flex-1 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 hover:from-blue-600 hover:via-teal-600 hover:to-green-600 text-white font-semibold py-2.5 text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Accept All
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-2.5 text-sm rounded-lg transition-all duration-300 hover:bg-gray-50 bg-transparent"
            >
              Decline
            </Button>
          </div>

          <p className="text-center text-xs text-gray-500 mt-3">
            Read our{" "}
            <Link href="/privacy-policy" className="text-teal-600 hover:text-teal-700 underline font-medium">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/cookie-policy" className="text-teal-600 hover:text-teal-700 underline font-medium">
              Cookie Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
