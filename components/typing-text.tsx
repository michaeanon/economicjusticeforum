"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

interface TypingTextProps {
  text: string
  speed?: number
  showCursor?: boolean
}

export default function TypingText({ text, speed = 50, showCursor = true }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className="inline-flex items-center">
      {displayedText}
      {showCursor && currentIndex < text.length && (
        <span className="inline-block w-0.5 h-4 bg-gray-300 ml-0.5 animate-pulse" />
      )}
    </span>
  )
}

export function DeveloperCredits() {
  const [showHeart, setShowHeart] = useState(false)
  const fullText = "Made with  by ANONYMIKETECH || NASH_TECH"
  const heartPosition = 10 // Position after "Made with "

  useEffect(() => {
    // Show heart after "Made with " is typed
    const timer = setTimeout(() => {
      setShowHeart(true)
    }, heartPosition * 50)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="mt-4 flex items-center justify-center gap-1 text-xs text-gray-300">
      <TypingText text="Made with " speed={50} showCursor={false} />
      {showHeart && <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 animate-pulse mx-1" />}
      {showHeart && (
        <>
          <TypingText text="by " speed={50} showCursor={false} />
          <a
            href="https://anonymiketech.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-white transition-colors duration-300"
          >
            <TypingText text="ANONYMIKETECH" speed={50} showCursor={false} />
          </a>
          <TypingText text=" || " speed={50} showCursor={false} />
          <span className="font-semibold">
            <TypingText text="NASH_TECH" speed={50} showCursor={false} />
          </span>
        </>
      )}
    </div>
  )
}
