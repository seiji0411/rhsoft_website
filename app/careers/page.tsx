import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CareersJobs } from "@/components/careers-jobs"
import { careerValues } from "@/lib/careers"
import {
  Briefcase,
  Globe,
  Rocket,
  Users,
  ArrowRight,
  Sparkles,
  Shield,
  Heart,
  Code2,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | RhSoft",
  description:
    "Join RhSoft — remote software roles in AI, blockchain, web, e-commerce, and mobile. Build production products with a high-trust studio.",
}

const perks = [
  { icon: Globe, title: "Remote-first", text: "Work from anywhere. Overlap with UK hours for standups and clients." },
  { icon: Rocket, title: "Production work", text: "Ship to app stores, mainnet, and live traffic — not slide decks." },
  { icon: Sparkles, title: "Five stacks", text: "AI, blockchain, web, e-commerce, and mobile in one studio." },
  { icon: Shield, title: "Senior craft", text: "Reviews, security, and documentation are part of the job." },
  { icon: Heart, title: "Direct impact", text: "Small team. You talk to clients and own features end to end." },
  { icon: Code2, title: "Tools you choose", text: "Modern TypeScript, cloud, and the right language for the product." },
]

const steps = [
  { step: "01", title: "Apply", text: "Email your CV, GitHub or portfolio, and a short note on the role." },
  { step: "02", title: "Intro", text: "A 30-minute call about your work, how we ship, and the team." },
  { step: "03", title: "Craft", text: "A practical exercise or walkthrough of something you have already built." },
  { step: "04", title: "Offer", text: "We decide quickly. If it is a fit, you join a live project." },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200 dark:from-brand-950 dark:via-brand-900 dark:to-brand-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-white/40 mb-6">
            <Briefcase className="w-4 h-4 text-brand-700 dark:text-brand-300 mr-2" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">We&apos;re hiring</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
              Build software that ships
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mb-8">
            RhSoft is a remote software studio. Join engineers and designers who turn AI, blockchain, web, e-commerce,
            and mobile ideas into production products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-brand-800 to-brand-600 hover:from-brand-900 hover:to-brand-700">
              <a href="#open-roles">
                View open roles
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/50 dark:bg-slate-800/40">
              <Link href="/contact">Talk to us</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {[
              { value: "6", label: "Open roles" },
              { value: "Remote", label: "First" },
              { value: "5", label: "Product stacks" },
              { value: "UK", label: "Studio hub" },
            ].map((stat) => (
              <Card key={stat.label} className="bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border-white/30">
                <CardContent className="p-5 text-center">
                  <p className="text-2xl font-bold text-brand-800 dark:text-brand-200">{stat.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
                How we work
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A small studio, serious delivery, and products our clients actually run.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {[
              { ...careerValues[0], icon: Rocket },
              { ...careerValues[1], icon: Globe },
              { ...careerValues[2], icon: Code2 },
              { ...careerValues[3], icon: Users },
            ].map((item) => {
              const Icon = item.icon
              return (
                <Card
                  key={item.title}
                  className="h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30"
                >
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-800 to-brand-600 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
                Perks of the studio
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
            {perks.map((perk) => {
              const Icon = perk.icon
              return (
                <Card
                  key={perk.title}
                  className="h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/30"
                >
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-800 to-brand-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{perk.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{perk.text}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <CareersJobs />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
                How hiring works
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A short process. We respect your time and we expect the same.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-800 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <CardContent className="relative z-10 p-8 md:p-16 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to apply?</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                Send your CV and a link to work you are proud of. We read every application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-brand-800 hover:bg-gray-100 font-semibold">
                  <a href="mailto:support@rhsoft.co.uk?subject=Application">
                    Email careers
                    <Mail className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
