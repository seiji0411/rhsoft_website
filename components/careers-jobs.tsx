"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight, Mail } from "lucide-react"
import { jobs, type Job } from "@/lib/careers"

const filters = ["All", "AI", "Blockchain", "Web", "Mobile", "Design", "General"] as const

function applyHref(job: Job) {
  const subject = encodeURIComponent(`Application: ${job.title}`)
  const body = encodeURIComponent(
    `Hi RhSoft,\n\nI would like to apply for ${job.title} (${job.team}, ${job.type}).\n\nName:\nLocation:\nPortfolio / GitHub:\nLinkedIn:\n\nA short note on why I'm a fit:\n\n`,
  )
  return `mailto:support@rhsoft.co.uk?subject=${subject}&body=${body}`
}

export function CareersJobs() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All")

  const visible = useMemo(
    () => (filter === "All" ? jobs : jobs.filter((job) => job.team === filter)),
    [filter],
  )

  return (
    <section id="open-roles" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
                Open roles
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
              {visible.length} {visible.length === 1 ? "role" : "roles"}
              {filter === "All" ? " across the studio" : ` in ${filter}`}. Apply with a CV, GitHub, and a short note.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === item
                    ? "bg-brand-800 text-white"
                    : "bg-white/70 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {visible.map((job) => (
            <Card
              key={job.id}
              id={job.id}
              className="h-full flex flex-col bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 hover:shadow-xl transition-all duration-300 scroll-mt-24"
            >
              <CardContent className="p-6 flex flex-1 flex-col">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <Badge className="bg-brand-800 hover:bg-brand-800 text-white">{job.team}</Badge>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{job.type}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{job.title}</h3>
                <p className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <MapPin className="w-4 h-4 mr-1.5 shrink-0" />
                  {job.location}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-5">{job.summary}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                    You will
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-800 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                    You bring
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    {job.requirements.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto flex gap-2">
                  <Button asChild className="flex-1 bg-brand-800 hover:bg-brand-700">
                    <a href={applyHref(job)}>
                      Apply
                      <Mail className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/contact">
                      Ask us
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-slate-500 dark:text-slate-400 py-12">No open roles in this team right now.</p>
        )}

        <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          Don&apos;t see a fit?{" "}
          <a href="mailto:support@rhsoft.co.uk?subject=General%20application" className="text-brand-700 dark:text-brand-300 hover:underline">
            Send a general application
          </a>{" "}
          or write to us on the{" "}
          <Link href="/contact" className="text-brand-700 dark:text-brand-300 hover:underline">
            contact page
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
