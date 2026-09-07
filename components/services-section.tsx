import Link from "next/link"
import { Brain, Blocks, Globe, ShoppingCart, Smartphone, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services, type Service } from "@/lib/services"

const serviceIcons: Record<Service["slug"], LucideIcon> = {
  ai: Brain,
  blockchain: Blocks,
  web: Globe,
  ecommerce: ShoppingCart,
  mobile: Smartphone,
}

export function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            End-to-end software for AI, blockchain, web, e-commerce, and mobile products
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug]
            return (
              <Card
                key={service.slug}
                className="group h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 hover:border-brand-500/30"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-brand-800/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6 pb-0">
                    <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">{service.title}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300 mt-2 min-h-[4.5rem]">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-1 flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-brand-800 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full mt-auto group-hover:bg-brand-800 group-hover:text-white transition-colors duration-300"
                  >
                    <Link href={`/services#${service.slug}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
