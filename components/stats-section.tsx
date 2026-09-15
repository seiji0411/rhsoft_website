"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Star, ArrowRight } from "lucide-react"

const stats = [
  {
    icon: Award,
    value: 9,
    suffix: "+",
    decimals: 0,
    label: "Years Experience",
    description: "Building production software",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    decimals: 0,
    label: "Happy Clients",
    description: "Partners who ship with us",
  },
  {
    icon: Clock,
    value: 100,
    suffix: "+",
    decimals: 0,
    label: "Projects Completed",
    description: "AI, blockchain, web, and e-commerce",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    decimals: 1,
    label: "Customer Rating",
    description: "From clients we deliver for",
  },
]

function AnimatedCounter({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps
    const factor = 10 ** decimals

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current * factor) / factor)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value, decimals])

  return (
    <span className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
      {decimals > 0 ? count.toFixed(decimals) : count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-brand-50/50 dark:bg-brand-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 dark:text-brand-300 mb-3">
              About us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
                We build the software you dreamed of shipping
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              RhSoft is a software studio that turns ideas into production products. From AI and blockchain to web and
              e-commerce, we partner with you to design, build, and launch systems that actually run in
              the real world.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-brand-800 to-brand-600 hover:from-brand-900 hover:to-brand-700"
            >
              <Link href="/services">
                Read more
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="h-full text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-800 to-brand-600 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-1">{stat.label}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
