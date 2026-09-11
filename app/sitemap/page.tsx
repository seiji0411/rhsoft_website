import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap | RhSoft",
  description: "Sitemap of RhSoft website pages.",
}

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
]

export default function SitemapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Sitemap</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8">Browse all important pages on the RhSoft website.</p>

      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-brand-700 hover:text-brand-800 hover:underline dark:text-brand-300 dark:hover:text-brand-200">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
