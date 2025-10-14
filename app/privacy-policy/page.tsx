import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, FileText } from "lucide-react"

export default function PrivacyPolicy() {
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-gray-500 text-sm mt-1">Last updated: January 2025</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                At Economic Justice Forum (EJF), we are committed to protecting your privacy and ensuring the security
                of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data
                when you visit our website or interact with our services.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">Information We Collect</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Name and contact details (email, phone number)</li>
                  <li>Demographic information</li>
                  <li>Donation and payment information</li>
                  <li>Membership details</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">How We Use Your Information</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  <span>To process donations and membership registrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  <span>To send newsletters and updates about our programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  <span>To improve our website and services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  <span>To respond to inquiries and provide customer support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  <span>To comply with legal obligations</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">Data Security</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure
                servers, and regular security assessments.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">Your Rights</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Access your personal data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Request correction of inaccurate data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Request deletion of your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Object to processing of your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Withdraw consent at any time</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">Contact Us</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us
                at:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6 mt-4">
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
