import { Card, CardContent } from "@/components/ui/card"
import { Handshake, Layers, LifeBuoy, Puzzle, ShieldCheck, Workflow } from "lucide-react"

const reasons = [
  {
    icon: Puzzle,
    title: "Custom solutions tailored to your business",
    description: "Built around how you work — not a generic template.",
  },
  {
    icon: Layers,
    title: "Modern and scalable technology",
    description: "Stacks that grow with traffic, features, and your team.",
  },
  {
    icon: ShieldCheck,
    title: "Secure and reliable development",
    description: "Production practices that protect data and uptime.",
  },
  {
    icon: Workflow,
    title: "End-to-end development",
    description: "From discovery and design through launch and iteration.",
  },
  {
    icon: Handshake,
    title: "Flexible engagement models",
    description: "Project delivery, dedicated teams, or ongoing retainers.",
  },
  {
    icon: LifeBuoy,
    title: "Long-term technical support",
    description: "We stay after launch so the product keeps shipping.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 dark:text-brand-300 mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
              Technology. Expertise. Results.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We combine modern technologies with practical engineering to create software that solves real business
            problems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 hover:shadow-lg hover:border-brand-500/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 mb-5 bg-gradient-to-br from-brand-800 to-brand-600 rounded-lg flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
