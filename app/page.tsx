import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Pillars from "@/components/pillars"
import Donate from "@/components/donate"
import Join from "@/components/join"
import Events from "@/components/events"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import BackToTop from "@/components/back-to-top"
import WelcomeIntro from "@/components/welcome-intro"
import CookieConsent from "@/components/cookie-consent"

export default function Home() {
  return (
    <main className="min-h-screen">
      <WelcomeIntro />
      <Header />
      <Hero />
      <About />
      <Pillars />
      <Donate />
      <Join />
      <Events />
      <Contact />
      <Footer />
      <Chatbot />
      <BackToTop />
      <CookieConsent />
    </main>
  )
}
