import Image from "next/image"
import { Check } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4 relative inline-block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#1a5276] after:to-[#27ae60] after:rounded-full">
            About Us
          </h2>
          <p className="text-lg text-[#777] max-w-3xl mx-auto mt-8">
            The Economic Justice Forum (EJF) is a people&apos;s platform and the unwavering voice of Kenya&apos;s most
            marginalized and impoverished communities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="text-[#333] leading-relaxed">
              The Economic Justice Forum (EJF) is a people&apos;s platform and the unwavering voice of Kenya&apos;s most
              marginalized and impoverished communities — from urban informal settlements to rural and grassroots
              regions. Founded by experienced human rights defenders and grassroots activists, EJF champions the
              people&apos;s right to equitable opportunities, transparent governance, and fair distribution of national
              and natural wealth.
            </p>

            <div>
              <h3 className="text-2xl font-semibold text-[#1a5276] mb-3">Our Vision</h3>
              <p className="text-[#333] leading-relaxed">
                To realize a Kenya where natural resources, public finance, and environmental wealth equitably uplift
                all — transforming marginalized and grassroots communities from poverty to prosperity.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#1a5276] mb-3">Our Mission</h3>
              <p className="text-[#333] leading-relaxed">
                To champion economic, tax, climate, and social justice through strategic advocacy, rigorous research,
                impactful coalition-building, and direct grassroots action.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#1a5276] mb-3">Why Partner with EJF</h3>
              <ul className="space-y-3">
                {[
                  "Community-Rooted: Grounded in real grassroots experiences and voices.",
                  "Evidence-Driven: Guided by social audits, data, and human rights research.",
                  "Credible & Independent: Led by experienced human rights defenders and policy advocates.",
                  "Coalition Builder: Connecting communities, civil society, academia, and policymakers.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                    <span className="text-[#333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 group">
              <Image
                src="/images/portrait-smiley-african-child.jpg"
                alt="Community Empowerment"
                width={600}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
