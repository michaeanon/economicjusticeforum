"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Bot, X, Send } from "lucide-react"

type Message = {
  text: string
  sender: "user" | "bot"
}

const suggestions = ["Tell me about EJF", "What are your pillars?", "Upcoming events", "How to donate"]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm the EJF Assistant. I can help you learn about our mission, pillars of work, upcoming events, and how you can get involved. How can I assist you today?",
      sender: "bot",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const generateResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! I'm the EJF Assistant. How can I help you learn about the Economic Justice Forum today?"
    }

    if (
      lowerMessage.includes("about") ||
      lowerMessage.includes("what is ejf") ||
      lowerMessage.includes("tell me about")
    ) {
      return "The Economic Justice Forum (EJF) is a people's platform advocating for justice, equity, and prosperity in Kenya. We focus on marginalized communities and work across eight pillars including governance, natural resources, debt justice, tax justice, land rights, climate justice, youth/women empowerment, and democracy."
    }

    if (lowerMessage.includes("pillar") || lowerMessage.includes("work") || lowerMessage.includes("focus")) {
      return "EJF works across 8 key pillars: 1) Good Governance & Accountability, 2) Natural Resource Benefit-Sharing, 3) Debt Justice & Economic Justice, 4) Tax Justice, 5) Land Rights, 6) Climate Justice, 7) Youth & Women Empowerment, and 8) Democracy & Devolution. Which pillar would you like to learn more about?"
    }

    if (lowerMessage.includes("event") || lowerMessage.includes("meeting") || lowerMessage.includes("workshop")) {
      return "We have several upcoming events: Tax Justice Workshop (October 15), Debt Justice Forum (November 5), and Climate Justice Conference (November 20). You can check our website for more details and registration information."
    }

    if (lowerMessage.includes("donate") || lowerMessage.includes("support") || lowerMessage.includes("contribute")) {
      return "Thank you for your interest in supporting EJF! You can donate via M-Pesa or credit card through our website. All donations help us continue our work for a fairer Kenya. Visit the Donate section for more details."
    }

    if (lowerMessage.includes("join") || lowerMessage.includes("member") || lowerMessage.includes("volunteer")) {
      return "You can join EJF by filling out the form in the Join section of our website. We welcome volunteers, activists, and anyone passionate about economic justice in Kenya."
    }

    if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
      return "You can contact EJF Coordinator Christopher Mwambingu at cmwambingu@gmail.com or +254 728 355 531. We'd love to hear from you!"
    }

    return "I'm here to help you learn about the Economic Justice Forum. You can ask me about our mission, pillars of work, upcoming events, or how to get involved. What would you like to know?"
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = { text: input, sender: "user" }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const response = generateResponse(input)
      const botMessage: Message = { text: response, sender: "bot" }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestion = (suggestion: string) => {
    setInput(suggestion)
    handleSend()
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#1a5276] to-[#27ae60] hover:opacity-90 shadow-2xl z-50"
        size="icon"
      >
        <Bot className="w-8 h-8" />
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-[400px] h-[600px] flex flex-col shadow-2xl z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-[#1a5276] to-[#27ae60] text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6" />
              <h3 className="font-semibold text-lg">EJF Assistant</h3>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-[#1a5276] text-white rounded-br-sm"
                      : "bg-white text-gray-800 rounded-bl-sm shadow-sm"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-gray-50 border-t">
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestion(suggestion)}
                  className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full hover:bg-[#1a5276] hover:text-white hover:border-[#1a5276] transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me about EJF..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="bg-[#1a5276] hover:bg-[#27ae60] rounded-full">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
