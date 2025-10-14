import { Gavel, TreePine, HandCoins, TrendingUp, Landmark, Leaf, Users, Vote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const pillars = [
  {
    icon: Gavel,
    title: "Good Governance & Accountability",
    description:
      "EJF works to cultivate a culture of integrity and citizen oversight to ensure responsible and equitable use of public resources.",
  },
  {
    icon: TreePine,
    title: "Natural Resource Benefit-Sharing",
    description:
      "Ensuring communities in resource-rich counties receive fair benefits from parks, ports, mines, and marine resources.",
  },
  {
    icon: HandCoins,
    title: "Debt Justice & Economic Justice",
    description:
      "Championing debt justice to ensure all borrowing is transparent, accountable, and benefits the people.",
  },
  {
    icon: TrendingUp,
    title: "Tax Justice",
    description:
      "Promoting a fair, transparent, and accountable tax system that aligns with the principle of representation and justice.",
  },
  {
    icon: Landmark,
    title: "Land Rights",
    description:
      "Advocating for equitable, inclusive, and sustainable land governance as the foundation of livelihood, culture, and dignity.",
  },
  {
    icon: Leaf,
    title: "Climate Justice",
    description:
      "Promoting ecological justice, resilience, and sustainability by ensuring climate action is equitable and people-centered.",
  },
  {
    icon: Users,
    title: "Youth & Women Empowerment",
    description:
      "Creating equitable economic and leadership opportunities for women and youth to drive inclusive growth and resilience.",
  },
  {
    icon: Vote,
    title: "Democracy & Devolution",
    description:
      "Strengthening democratic institutions, promoting ethical leadership, and advocating for efficient, people-centered devolution.",
  },
]

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 bg-gradient-to-br from-[#f5f7ff] to-[#e6e9ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4 relative inline-block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#1a5276] after:to-[#27ae60] after:rounded-full">
            Core Pillars of Change
          </h2>
          <p className="text-lg text-[#777] max-w-3xl mx-auto mt-8">
            Our work is organized around eight key pillars that address the most pressing issues facing Kenya today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="group hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border-t-4 border-t-transparent hover:border-t-[#1a5276]"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a5276] to-[#27ae60] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-3">{pillar.title}</h3>
                <p className="text-[#777] leading-relaxed">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
