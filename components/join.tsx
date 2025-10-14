"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Lock, Loader2, CheckCircle } from "lucide-react"

export default function Join() {
  const [showLogin, setShowLogin] = useState(false)
  const [showMemberArea, setShowMemberArea] = useState(false)
  const [joinEmail, setJoinEmail] = useState("")
  const [joinPassword, setJoinPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSignUp = async () => {
    if (!joinEmail || !joinPassword) {
      alert("Please fill in all fields")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: joinEmail, password: joinPassword }),
      })

      const data = await response.json()

      if (response.ok) {
        setShowMemberArea(true)
        setJoinEmail("")
        setJoinPassword("")
      } else {
        alert(`Error: ${data.error || "Failed to subscribe"}`)
      }
    } catch (error) {
      console.error("[v0] Subscription error:", error)
      alert("Failed to subscribe. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = () => {
    alert("Welcome back!")
    setShowMemberArea(true)
  }

  const handleGoogleSignIn = () => {
    alert("Google sign-in would be implemented here.")
  }

  return (
    <section id="join" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4 relative inline-block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#1a5276] after:to-[#27ae60] after:rounded-full">
            Join Our Movement
          </h2>
          <p className="text-lg text-[#777] max-w-3xl mx-auto mt-8">
            Become part of the change. Join EJF today and help build a fairer Kenya.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle>{showLogin ? "Login" : "Join EJF"}</CardTitle>
            <CardDescription>
              {showLogin ? "Welcome back to the movement" : "Start your journey with us"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {!showMemberArea ? (
              <>
                {!showLogin ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="join-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="join-email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10"
                          value={joinEmail}
                          onChange={(e) => setJoinEmail(e.target.value)}
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="join-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="join-password"
                          type="password"
                          placeholder="Create a password"
                          className="pl-10"
                          value={joinPassword}
                          onChange={(e) => setJoinPassword(e.target.value)}
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <Button
                      onClick={handleSignUp}
                      className="w-full bg-gradient-to-r from-[#1a5276] to-[#27ae60] hover:opacity-90"
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        "Join with Email"
                      )}
                    </Button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Or</span>
                      </div>
                    </div>

                    <Button onClick={handleGoogleSignIn} variant="outline" className="w-full bg-transparent" size="lg">
                      Join with Google
                    </Button>

                    <p className="text-center text-sm">
                      Already a member?{" "}
                      <button
                        onClick={() => setShowLogin(true)}
                        className="text-[#1a5276] font-semibold hover:underline"
                      >
                        Login
                      </button>
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="Enter your password"
                          className="pl-10"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <Button
                      onClick={handleLogin}
                      className="w-full bg-gradient-to-r from-[#1a5276] to-[#27ae60] hover:opacity-90"
                      size="lg"
                    >
                      Login with Email
                    </Button>

                    <p className="text-center text-sm">
                      Don&apos;t have an account?{" "}
                      <button
                        onClick={() => setShowLogin(false)}
                        className="text-[#1a5276] font-semibold hover:underline"
                      >
                        Join now
                      </button>
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-16 h-16 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#2c3e50] mb-4">Welcome to EJF!</h3>
                <p className="text-[#777] mb-4">
                  Thank you for joining the Economic Justice Forum. Together, we can create a fairer Kenya.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-blue-800">
                    Check your email for a welcome message with more information about getting started!
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
