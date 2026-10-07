import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Toaster } from "@/components/ui/toaster"
import { ApplyForm } from "@/components/apply-form"
import { jobs } from "@/lib/careers"
import { ArrowLeft, MapPin, Briefcase } from "lucide-react"

export function generateStaticParams() {
  return jobs.map((job) => ({ jobId: job.id }))
}

export function generateMetadata({ params }: { params: { jobId: string } }): Metadata {
  const job = jobs.find((item) => item.id === params.jobId)
  return {
    title: job ? `Apply: ${job.title} | RhSoft Careers` : "Apply | RhSoft Careers",
    description: job?.summary,
  }
}

export default function ApplyPage({ params }: { params: { jobId: string } }) {
  const job = jobs.find((item) => item.id === params.jobId)

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/careers#open-roles"
            className="inline-flex items-center text-sm text-brand-700 dark:text-brand-300 hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Back to open roles
          </Link>

          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-brand-800 hover:bg-brand-800 text-white">{job.team}</Badge>
              <span className="inline-flex items-center text-sm text-slate-500 dark:text-slate-400">
                <Briefcase className="w-4 h-4 mr-1.5" />
                {job.type}
              </span>
              <span className="inline-flex items-center text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4 mr-1.5" />
                {job.location}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
                Apply for {job.title}
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300">{job.summary}</p>
          </div>

          <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 shadow-xl">
            <CardContent className="p-6 md:p-8">
              <ApplyForm jobId={job.id} jobTitle={job.title} />
            </CardContent>
          </Card>
        </div>
      </section>
      <Toaster />
    </div>
  )
}
