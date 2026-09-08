"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Award, Users, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const slides = [
  {
    title: "Web Development",
    subtitle: "APIs and Platforms That Scale",
    description: "We design and build reliable web services — from REST and GraphQL APIs to backend platforms that connect your products, partners, and customers. Secure, documented, and ready to grow with you.",
    image: "/assets/hero-web.png",
    cta: "View Our Services",
    href: "/services",
  },
  {
    title: "Blockchain & AI",
    subtitle: "Intelligent Systems on Trusted Infrastructure",
    description: "We build blockchain applications and AI-powered products — from smart contracts and decentralized platforms to machine learning models that automate decisions and unlock new capabilities.",
    image: "/assets/hero-blockchain-ai.png",
    cta: "View Our Portfolio",
    href: "/portfolio",
  },
  {
    title: "Product Engineering",
    subtitle: "From Idea to Production",
    description: "Partner with us to turn a concept into a production-ready product. We cover strategy, design, development, and ongoing support so you can ship with confidence.",
    image: "/assets/hero-product.png",
    cta: "Get Quote",
    href: "/contact",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Bright background wash — blue / indigo / violet, no teal */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/40 via-indigo-200/35 to-violet-300/30 dark:from-blue-500/20 dark:via-indigo-400/15 dark:to-violet-500/20" />

      {/* Animated glow orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-indigo-400/35 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-400/25 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm border border-white/30 mb-6">
              <Star className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-sm font-medium">Trusted by 100+ customers</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-brand-700 dark:text-brand-300 mb-4">
              {slides[currentSlide].subtitle}
            </h2>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand-800 to-brand-600 hover:from-brand-900 hover:to-brand-700 text-white px-8 py-4 text-lg"
              >
                <Link href={slides[currentSlide].href}>
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-brand-500/30 bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-slate-800/30 px-8 py-4 text-lg"
              >
                <Link href="/portfolio">
                  Our Portfolio
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-brand-500 mr-2" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">9+</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-brand-500 mr-2" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">100+</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-brand-500 mr-2" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">24/7</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Support</p>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-400/30 via-indigo-400/20 to-violet-400/25 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden bg-brand-950/50 dark:bg-brand-950/70 backdrop-blur-sm border border-white/20 p-3 md:p-4 shadow-2xl shadow-brand-900/40">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#091731]">
                {slides.map((slide, index) => (
                  <img
                    key={slide.image}
                    src={slide.image}
                    alt={slide.title}
                    className={cn(
                      "absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out",
                      index === currentSlide ? "opacity-100" : "opacity-0",
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "h-3 rounded-full transition-all duration-300",
                    index === currentSlide ? "bg-brand-800 w-8" : "bg-white/40 hover:bg-white/60 w-3",
                  )}
                  title={`Go to slide ${index + 1}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
