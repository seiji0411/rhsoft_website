"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MapPin } from "lucide-react"
import { projects, projectCategories } from "@/lib/projects"

const categories = [...projectCategories]
const HOME_PORTFOLIO_LIMIT = 6

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)
  const previewProjects = filteredProjects.slice(0, HOME_PORTFOLIO_LIMIT)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Explore recent software, blockchain, web, and mobile products we have delivered
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-brand-800 to-brand-600 hover:from-brand-900 hover:to-brand-700 text-white"
                    : "bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-white/30 hover:bg-white/80 dark:hover:bg-slate-800/80"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 hover:border-brand-500/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.url ? (
                    <Button
                      size="sm"
                      asChild
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      asChild
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                    >
                      <Link href="/portfolio">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                  )}
                </div>
                <Badge className="absolute top-4 right-4 bg-brand-800/80 backdrop-blur-sm">{project.category}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">{project.description}</p>

                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-brand-800 to-brand-600 hover:from-brand-900 hover:to-brand-700 text-white"
          >
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
