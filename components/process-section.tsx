import Link from "next/link"
import { ArrowRight, Compass, Map, Code2, Rocket, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business, goals, and requirements.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the architecture, technology, roadmap, and project scope.",
    icon: Map,
  },
  {
    number: "03",
    title: "Build",
    description: "Design, develop, integrate, and test your solution.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch",
    description: "Deploy your product and ensure everything runs smoothly.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Scale",
    description: "Provide ongoing improvements, maintenance, and technical support.",
    icon: TrendingUp,
  },
]

export function ProcessSection() {
  return (
    <section className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-white/70 dark:bg-brand-950/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
              Our Development Process
            </span>
          </h2>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 mb-16">
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 dark:from-brand-800 dark:via-brand-500 dark:to-brand-800"
          />

          {steps.map((step) => (
            <div key={step.number} className="relative min-w-0">
              <div className="flex sm:flex-col items-start sm:items-center sm:text-center gap-4 sm:gap-0">
                <div className="relative z-10 w-14 h-14 shrink-0 sm:mx-auto sm:mb-5 bg-gradient-to-br from-brand-800 to-brand-600 rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-brand-700 dark:text-brand-300 mb-1">
                    {step.number} — {step.title}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 border-0 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

          <CardContent className="relative z-10 p-8 md:p-14 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Have an idea? Let&apos;s build it.</h3>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Whether you&apos;re looking to automate your business, launch an AI product, build a blockchain solution, or
              develop a web application, we&apos;re ready to help.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-800 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact">
                Let&apos;s Talk
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
