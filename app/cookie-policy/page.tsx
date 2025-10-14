import Link from "next/link"
import { ArrowLeft, Cookie, Settings, BarChart, Star } from "lucide-react"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8 group transition-all"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 flex items-center justify-center">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                Cookie Policy
              </h1>
              <p className="text-gray-500 text-sm mt-1">Last updated: January 2025</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                This Cookie Policy explains how Economic Justice Forum uses cookies and similar technologies to
                recognize you when you visit our website. It explains what these technologies are and why we use them,
                as well as your rights to control our use of them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website.
                Cookies are widely used by website owners to make their websites work, or to work more efficiently, as
                well as to provide reporting information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Types of Cookies We Use</h2>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-6 border-l-4 border-teal-500">
                  <div className="flex items-center gap-3 mb-3">
                    <Settings className="w-6 h-6 text-teal-600" />
                    <h3 className="text-lg font-semibold text-gray-800 m-0">Essential Cookies</h3>
                  </div>
                  <p className="text-gray-600 mb-2">
                    These cookies are strictly necessary for the website to function and cannot be switched off in our
                    systems.
                  </p>
                  <p className="text-sm text-gray-500">
                    Examples: Session cookies, security cookies, load balancing cookies
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-800 m-0">Analytics Cookies</h3>
                  </div>
                  <p className="text-gray-600 mb-2">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the
                    performance of our site.
                  </p>
                  <p className="text-sm text-gray-500">Examples: Google Analytics, visitor statistics</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-800 m-0">Preference Cookies</h3>
                  </div>
                  <p className="text-gray-600 mb-2">
                    These cookies enable the website to remember choices you make and provide enhanced, more personal
                    features.
                  </p>
                  <p className="text-sm text-gray-500">Examples: Language preferences, region settings</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Control Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by
                setting your preferences in our Cookie Consent Manager that appears when you first visit our website.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Browser Controls</h3>
                <p className="text-gray-600 mb-3">
                  You can also set or amend your web browser controls to accept or refuse cookies. The method for
                  disabling cookies varies by browser:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                    <span>Chrome: Settings → Privacy and Security → Cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                    <span>Firefox: Options → Privacy & Security → Cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                    <span>Safari: Preferences → Privacy → Cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                    <span>Edge: Settings → Privacy & Security → Cookies</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics
                of the website and deliver advertisements on and through the website. These third parties may collect
                information about your online activities over time and across different websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other
                operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed
                about our use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
                <p className="text-gray-800 font-semibold mb-2">Economic Justice Forum</p>
                <p className="text-gray-600">Email: cmwambingu@gmail.com</p>
                <p className="text-gray-600">Phone: +254 728 355 531</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
