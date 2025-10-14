import Link from "next/link"
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Scale } from "lucide-react"

export default function TermsOfService() {
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
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-gray-500 text-sm mt-1">Last updated: January 2025</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                Welcome to Economic Justice Forum. By accessing or using our website and services, you agree to be bound
                by these Terms of Service. Please read them carefully before using our platform.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">Use of Services</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Permitted Use</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span>Access and use our website for lawful purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span>Make donations and participate in our programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span>Subscribe to newsletters and updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span>Engage with our content and community</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Prohibited Activities
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Violating any applicable laws or regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Transmitting harmful or malicious code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Attempting to gain unauthorized access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Harassing or abusing other users</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Donations and Payments</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All donations made through our website are voluntary and non-refundable unless required by law. We use
                secure payment processors to handle all financial transactions.
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Security</h3>
                <p className="text-gray-600">
                  We do not store your payment card details. All payment information is processed securely through our
                  trusted payment partners (M-Pesa and Stripe).
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of
                Economic Justice Forum or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                Economic Justice Forum shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your access to or use of, or inability to access or use, the website or
                services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by
                posting the new Terms of Service on this page. Your continued use of the website after such
                modifications constitutes your acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of Kenya, without
                regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
                <p className="text-gray-800 font-semibold mb-2">Economic Justice Forum</p>
                <p className="text-gray-600">Email: cmwambingu@gmail.com</p>
                <p className="text-gray-600">Phone: +254 728 355 531</p>
                <p className="text-gray-600">Location: Nairobi, Kenya</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
