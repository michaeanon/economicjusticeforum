"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Smartphone } from "lucide-react"

export default function Donate() {
  const [amount, setAmount] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const handleMPesa = () => {
    if (!amount || Number.parseInt(amount) < 100) {
      alert("Please enter a valid amount (minimum 100 KES)")
      return
    }
    alert(`M-Pesa payment of ${amount} KES would be processed here.`)
  }

  const handleCard = () => {
    if (!amount || Number.parseInt(amount) < 100) {
      alert("Please enter a valid amount (minimum 100 KES)")
      return
    }
    alert(`Card payment of ${amount} KES would be processed here.`)
  }

  return (
    <section id="donate" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4 relative inline-block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#1a5276] after:to-[#27ae60] after:rounded-full">
            Support Our Cause
          </h2>
          <p className="text-lg text-[#777] max-w-3xl mx-auto mt-8">
            Your donation helps us continue our work for a fairer, more just Kenya.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle>Make a Donation</CardTitle>
            <CardDescription>Choose your preferred payment method</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (KES)</Label>
              <Input
                id="amount"
                type="number"
                min="100"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone (for M-Pesa)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="2547xxxxxxxx"
                pattern="254[0-9]{9}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleMPesa}
                className="flex-1 bg-gradient-to-r from-[#1a5276] to-[#27ae60] hover:opacity-90"
                size="lg"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Donate with M-Pesa
              </Button>
              <Button
                onClick={handleCard}
                className="flex-1 bg-gradient-to-r from-[#1a5276] to-[#27ae60] hover:opacity-90"
                size="lg"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Donate with Card
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
