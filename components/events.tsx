"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Star, MapPin, Clock, Users, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

const events = [
  {
    day: "15",
    month: "October",
    title: "Tax Justice Workshop",
    description: "Join us for an interactive workshop on tax justice and how it affects our communities.",
    featured: true,
    venue: "Nairobi Convention Center, Hall A",
    time: "9:00 AM - 4:00 PM EAT",
    agenda: [
      "Opening remarks and introduction to tax justice",
      "Panel discussion: Tax evasion and its impact on development",
      "Workshop: Advocating for fair tax policies",
      "Q&A session and networking",
    ],
    speakers: "Dr. Jane Mwangi, Prof. David Ochieng, Hon. Mary Wambui",
    registration: "Free entry, registration required",
  },
  {
    day: "05",
    month: "November",
    title: "Debt Justice Forum",
    description: "A forum discussing debt justice and its impact on Kenya's economic development.",
    featured: false,
    venue: "Kenyatta International Conference Centre",
    time: "10:00 AM - 3:00 PM EAT",
    agenda: [
      "Understanding Kenya's debt situation",
      "Impact of debt on public services",
      "Strategies for debt relief and management",
      "Community action and advocacy",
    ],
    speakers: "Dr. Peter Kamau, Ms. Grace Njeri, Mr. John Otieno",
    registration: "Free entry, limited seats available",
  },
  {
    day: "20",
    month: "November",
    title: "Climate Justice Conference",
    description: "Exploring climate justice and sustainable solutions for Kenyan communities.",
    featured: false,
    venue: "Safari Park Hotel, Nairobi",
    time: "8:30 AM - 5:00 PM EAT",
    agenda: [
      "Climate change and economic inequality",
      "Community-led climate solutions",
      "Policy recommendations for climate justice",
      "Youth engagement in climate action",
    ],
    speakers: "Dr. Sarah Wanjiku, Mr. James Kipchoge, Ms. Amina Hassan",
    registration: "Early bird: KES 500, Regular: KES 1000",
  },
]

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)

  useEffect(() => {
    if (!isAutoPlaying || expandedEvent !== null) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, expandedEvent])

  const handleSubscribe = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((perm) => {
        if (perm === "granted") {
          alert("Thank you for subscribing to notifications!")
        }
      })
    } else {
      alert("Your browser does not support notifications.")
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const toggleExpand = (index: number) => {
    setExpandedEvent(expandedEvent === index ? null : index)
    setIsAutoPlaying(false)
    if (expandedEvent === index) {
      setTimeout(() => setIsAutoPlaying(true), 2000)
    }
  }

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-[#f5f7ff] to-[#e6e9ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4 relative inline-block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#1a5276] after:to-[#27ae60] after:rounded-full">
            Upcoming Events
          </h2>
          <p className="text-lg text-[#777] max-w-3xl mx-auto mt-8">
            Join us at our upcoming events and be part of the conversation.
          </p>
        </div>

        <div className="relative mb-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {events.map((event, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card
                  className={`overflow-hidden transition-all duration-500 mx-auto ${
                    event.featured ? "max-w-2xl shadow-2xl scale-105 border-2 border-[#27ae60]" : "max-w-xl shadow-lg"
                  }`}
                >
                  {event.featured && (
                    <div className="bg-gradient-to-r from-[#27ae60] to-[#1a5276] text-white py-2 px-4 text-center font-semibold flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 fill-white" />
                      <span>UPCOMING EVENT</span>
                      <Star className="w-4 h-4 fill-white" />
                    </div>
                  )}
                  <div
                    className={`text-white p-8 text-center ${
                      event.featured
                        ? "bg-gradient-to-r from-[#27ae60] via-[#1a5276] to-[#27ae60] bg-[length:200%_100%] animate-gradient"
                        : "bg-gradient-to-r from-[#1a5276] to-[#27ae60]"
                    }`}
                  >
                    <div className={`font-bold ${event.featured ? "text-6xl" : "text-4xl"}`}>{event.day}</div>
                    <div className={`${event.featured ? "text-2xl" : "text-lg"}`}>{event.month}</div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className={`font-semibold text-[#2c3e50] mb-4 ${event.featured ? "text-3xl" : "text-xl"}`}>
                      {event.title}
                    </h3>
                    <p className={`text-[#777] mb-6 ${event.featured ? "text-lg" : ""}`}>{event.description}</p>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedEvent === index ? "max-h-[1000px] opacity-100 mb-6" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="space-y-4 pt-4 border-t border-gray-200">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-[#1a5276] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-[#2c3e50]">Venue</p>
                            <p className="text-[#777]">{event.venue}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-[#1a5276] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-[#2c3e50]">Time</p>
                            <p className="text-[#777]">{event.time}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-[#1a5276] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-[#2c3e50] mb-2">Agenda</p>
                            <ul className="text-[#777] space-y-1">
                              {event.agenda.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-[#27ae60] mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-[#1a5276] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-[#2c3e50]">Speakers</p>
                            <p className="text-[#777]">{event.speakers}</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#1a5276]/10 to-[#27ae60]/10 p-4 rounded-lg">
                          <p className="font-semibold text-[#2c3e50] mb-1">Registration</p>
                          <p className="text-[#777]">{event.registration}</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => toggleExpand(index)}
                      variant="outline"
                      className={`w-full border-[#1a5276] text-[#1a5276] hover:bg-[#1a5276] hover:text-white bg-transparent transition-all duration-300 ${
                        event.featured ? "py-6 text-lg" : ""
                      }`}
                    >
                      {expandedEvent === index ? (
                        <>
                          Show Less <ChevronUp className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          Learn More <ChevronDown className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "w-12 h-3 bg-gradient-to-r from-[#1a5276] to-[#27ae60]"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={handleSubscribe}
            size="lg"
            className="bg-gradient-to-r from-[#1a5276] to-[#27ae60] hover:opacity-90"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Subscribe for Notifications
          </Button>
        </div>
      </div>
    </section>
  )
}
