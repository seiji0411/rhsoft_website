"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Priya Nair",
    role: "Head of Product",
    location: "Singapore",
    avatar: "/assets/testimonials/priya-nair.jpg?v=2",
    rating: 5,
    service: "AI",
    text: "RhSoft built an AI layer that automated document review and surfaced decisions our team used to make by hand. The models were production-ready, well documented, and easy for our staff to trust.",
    project: "Intelligent automation platform",
  },
  {
    id: 2,
    name: "Daniel Okonkwo",
    role: "CTO",
    location: "London",
    avatar: "/assets/testimonials/daniel-okonkwo.jpg?v=2",
    rating: 5,
    service: "Blockchain",
    text: "From smart contracts to the NFT marketplace and token bridge, RhSoft shipped a secure on-chain stack we could take to mainnet. Their Solidity work, audits, and dapp integration were exceptionally thorough.",
    project: "NFT marketplace & token bridge",
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    role: "Engineering Manager",
    location: "Tokyo",
    avatar: "/assets/testimonials/yuki-tanaka.jpg?v=2",
    rating: 5,
    service: "Web",
    text: "We needed a custom web platform with APIs, dashboards, and cloud hosting that would scale. RhSoft delivered a clean Laravel and Vue system on AWS, with clear code and a launch that stayed stable under real traffic.",
    project: "Cloud web platform",
  },
  {
    id: 4,
    name: "Sofia Alvarez",
    role: "Founder",
    location: "Miami",
    avatar: "/assets/testimonials/sofia-alvarez.jpg?v=2",
    rating: 5,
    service: "E-commerce",
    text: "Our store, checkout, and seller tools finally work as one product. RhSoft rebuilt the catalog, inventory, and admin dashboard so we convert more orders without fighting the backend every week.",
    project: "E-commerce store & seller tools",
  },
  {
    id: 5,
    name: "James Whitfield",
    role: "Product Director",
    location: "Austin",
    avatar: "/assets/testimonials/james-whitfield.jpg?v=2",
    rating: 5,
    service: "Mobile",
    text: "The iOS and Android apps feel native, fast, and easy to extend. RhSoft handled React Native, chat, and store listings end to end — we shipped to the App Store and Play Store on the timeline we promised.",
    project: "iOS & Android consumer app",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Clients across AI, blockchain, web, e-commerce, and mobile
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 shadow-xl">
            <CardContent className="p-8 md:p-12 flex flex-col min-h-[28rem] md:min-h-[30rem]">
              <div className="flex items-center justify-center mb-8 shrink-0">
                <Quote className="w-12 h-12 text-brand-500 opacity-50" />
              </div>

              <blockquote className="text-lg md:text-xl text-center text-slate-700 dark:text-slate-300 mb-8 leading-relaxed flex-1">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="flex items-center justify-center mb-6 shrink-0">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4 shrink-0 h-[4.5rem]">
                <Avatar className="w-16 h-16 shrink-0">
                  <AvatarImage
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-brand-800 to-brand-600 text-white">
                    {currentTestimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center min-w-0">
                  <h4 className="font-semibold text-slate-900 dark:text-white truncate">{currentTestimonial.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                    {currentTestimonial.role} • {currentTestimonial.location}
                  </p>
                  <p className="text-xs text-brand-700 dark:text-brand-300 mt-1 truncate">
                    {currentTestimonial.service} • {currentTestimonial.project}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-white/30 hover:bg-white/80 dark:hover:bg-slate-800/80"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-800 focus:ring-offset-2 ${
                    index === currentIndex
                      ? "bg-brand-800 w-8 shadow-md"
                      : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500 w-3"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-white/30 hover:bg-white/80 dark:hover:bg-slate-800/80"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* All testimonials grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mt-16 items-stretch">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="h-full flex flex-col bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/20 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300"
            >
              <CardContent className="p-6 flex flex-1 flex-col">
                <div className="flex items-center justify-between mb-4 shrink-0">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-brand-700 dark:text-brand-300">{testimonial.service}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-5 min-h-[6.25rem] flex-1">
                  "{testimonial.text}"
                </p>
                <div className="mt-auto flex items-center space-x-3 h-10 shrink-0">
                  <Avatar className="w-10 h-10 shrink-0">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                    <AvatarFallback className="bg-gradient-to-br from-brand-800 to-brand-600 text-white text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <h5 className="font-medium text-slate-900 dark:text-white text-sm truncate">{testimonial.name}</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
