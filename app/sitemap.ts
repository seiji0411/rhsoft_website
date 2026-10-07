import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"
import { jobs } from "@/lib/careers"

const routes = ["", "/services", "/portfolio", "/careers", "/contact", "/privacy", "/terms", "/sitemap"]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    ...routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified })),
    ...jobs.map((job) => ({ url: `${siteUrl}/careers/apply/${job.id}`, lastModified })),
  ]
}
