import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Blocks, Globe, ShoppingCart, Smartphone, CheckCircle, ArrowRight, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { services, type Service } from "@/lib/services"

const serviceIcons: Record<Service["slug"], LucideIcon> = {
  ai: Brain,
  blockchain: Blocks,
  web: Globe,
  ecommerce: ShoppingCart,
  mobile: Smartphone,
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200 dark:from-brand-950 dark:via-brand-900 dark:to-brand-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            AI, blockchain, web, e-commerce, and mobile development — from idea to production.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-brand-800 to-brand-600 hover:from-brand-900 hover:to-brand-700 text-white"
          >
            <Link href="/contact?tab=quote">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug]
              return (
                <Card
                  key={service.slug}
                  id={service.slug}
                  className={`relative group h-full flex flex-col overflow-hidden scroll-mt-24 hover:shadow-xl transition-all duration-300 ${
                    service.popular
                      ? "ring-2 ring-brand-800 bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-900/20 dark:to-brand-800/20"
                      : "bg-white/60 dark:bg-slate-800/60"
                  } backdrop-blur-sm border border-white/30`}
                >
                  {service.popular && (
                    <Badge className="absolute z-10 top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-800 to-brand-600 text-white">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-3 left-3 w-10 h-10 bg-brand-800/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="p-6 pb-0">
                      <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-300 min-h-[4.5rem]">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col">
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`w-full mt-auto ${
                        service.popular
                          ? "bg-gradient-to-r from-brand-800 to-brand-600 hover:from-brand-900 hover:to-brand-700 text-white"
                          : "bg-white/90 dark:bg-slate-700/80 hover:bg-brand-800 hover:text-white text-black dark:text-white"
                      } transition-colors duration-300`}
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              From discovery to launch, we keep delivery clear, collaborative, and production-ready
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Goals, scope, and technical approach" },
              { step: "02", title: "Design", description: "Architecture, UX, and delivery plan" },
              { step: "03", title: "Build", description: "Iterative development with reviews" },
              { step: "04", title: "Launch", description: "Release, monitoring, and ongoing support" },
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-800 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{process.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
