import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Database,
  Cookie,
  Share2,
  Lock,
  Globe2,
  Brain,
  Blocks,
  Users,
  Mail,
  ArrowRight,
  Scale,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | RhSoft",
  description:
    "How RhSoft collects, uses, and protects personal data across our website and software development services.",
}

const toc = [
  { id: "who", label: "1. Who we are" },
  { id: "collect", label: "2. Information we collect" },
  { id: "use", label: "3. How we use data" },
  { id: "cookies", label: "4. Cookies & analytics" },
  { id: "share", label: "5. Sharing & processors" },
  { id: "ai", label: "6. AI & project data" },
  { id: "blockchain", label: "7. Blockchain & public chains" },
  { id: "retention", label: "8. Retention" },
  { id: "security", label: "9. Security" },
  { id: "rights", label: "10. Your rights" },
  { id: "international", label: "11. International transfers" },
  { id: "children", label: "12. Children" },
  { id: "changes", label: "13. Changes" },
  { id: "contact", label: "14. Contact" },
]

const collectCards = [
  {
    icon: Users,
    title: "Identity & contact",
    text: "Name, email, phone, preferred contact method, and company details you type into contact or quote forms.",
  },
  {
    icon: Database,
    title: "Project details",
    text: "Scope notes, tech stack, files you upload, repositories you grant access to, and messages about AI, blockchain, web, e-commerce, or mobile work.",
  },
  {
    icon: Globe2,
    title: "Technical data",
    text: "IP address, browser type, device, pages viewed, and approximate location derived from analytics and server logs.",
  },
  {
    icon: Cookie,
    title: "Cookies",
    text: "Session and analytics cookies (including Google Analytics) that help us understand site use and keep the theme/session working.",
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200 dark:from-brand-950 dark:via-brand-900 dark:to-brand-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-white/40 mb-6">
            <Shield className="w-4 h-4 text-brand-700 dark:text-brand-300 mr-2" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mb-6">
            How RhSoft collects, uses, stores, and shares personal data when you visit our website or work with us on
            software — AI, blockchain, web, e-commerce, and mobile.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Last updated: September 7, 2026</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[280px_1fr] gap-12">
          <aside className="lg:sticky lg:top-24 h-fit">
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/30">
              <CardContent className="p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-4">
                  Contents
                </h2>
                <nav className="space-y-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-slate-600 dark:text-slate-300 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <Button asChild className="w-full mt-6 bg-brand-800 hover:bg-brand-700">
                  <Link href="/contact">
                    Privacy request
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </aside>

          <div className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="text-sm bg-white/60 dark:bg-slate-800/60 border border-white/30 rounded-xl p-4">
              This policy covers rhsoft.com and related RhSoft sites. A signed statement of work or data processing
              addendum (DPA) controls if it conflicts with this page. We do not sell personal information.
            </p>

            <section id="who" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Who we are</h2>
              <p>
                RhSoft (“we”, “us”) is a software development company. For website inquiries we are the controller of
                the personal data you submit. For production systems we build for a client, that client is typically
                the controller and we act as a processor under their instructions.
              </p>
            </section>

            <section id="collect" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Information we collect</h2>
              <p className="mb-6">
                We collect only what we need to respond, quote, deliver, and operate the site. Categories include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {collectCards.map((item) => {
                  const Icon = item.icon
                  return (
                    <Card
                      key={item.title}
                      className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/30"
                    >
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-800 to-brand-600 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                        </div>
                        <p className="text-sm">{item.text}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
              <p className="mt-6">
                We do not intentionally collect special-category data (health, biometrics, precise location) through
                the public website. Do not paste secrets, private keys, or production dumps into contact forms.
              </p>
            </section>

            <section id="use" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. How we use data</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Answer contact and quote requests and send confirmation emails.</li>
                <li>Prepare proposals, SOWs, and technical estimates for AI, blockchain, web, e-commerce, and mobile work.</li>
                <li>Deliver, support, and invoice contracted software projects.</li>
                <li>Improve the website, diagnose errors, and measure which pages help visitors.</li>
                <li>Comply with law, enforce our{" "}
                  <Link href="/terms" className="text-brand-700 dark:text-brand-300 hover:underline">
                    Terms of Service
                  </Link>
                  , and protect against fraud or abuse.
                </li>
              </ul>
              <p className="mt-3">
                Legal bases (where GDPR or similar rules apply) include contract, legitimate interests in running a
                software studio, consent for optional analytics where required, and legal obligation.
              </p>
            </section>

            <section id="cookies" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Cookie className="w-6 h-6 text-brand-700 dark:text-brand-300" />
                4. Cookies and analytics
              </h2>
              <p className="mb-3">
                We use Google Analytics (measurement ID G-7CBBF8YY45) to understand traffic: pages viewed, approximate
                geography, device, and referral source. Google may process this data under its own terms. You can
                block analytics with browser settings, extensions, or Google’s opt-out tools.
              </p>
              <p>
                Essential cookies or local storage may remember theme (light/dark) and session state. We do not use
                advertising pixels to sell profiles to third-party ad networks.
              </p>
            </section>

            <section id="share" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Share2 className="w-6 h-6 text-brand-700 dark:text-brand-300" />
                5. Sharing and processors
              </h2>
              <p className="mb-3">We do not sell personal information. We share data only with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-900 dark:text-white">Email / SMTP.</strong> Form notifications and
                  confirmations are sent through our email provider so we can reply to you.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Hosting & CDN.</strong> The website is served from
                  our hosting platform; logs may include IP and user-agent.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Analytics.</strong> Google Analytics, as above.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Cloud & tools on projects.</strong> If you grant
                  access, data may sit in AWS, GCP, Vercel, GitHub, Supabase, Firebase, app-store consoles, or similar
                  tools you approve in an SOW.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Professional advisers and law.</strong> Accountants,
                  insurers, or authorities when legally required.
                </li>
              </ul>
              <p className="mt-3">
                Vetted subcontractors who help deliver code work under confidentiality. They may only use personal data
                to perform that work.
              </p>
            </section>

            <section id="ai" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6 text-brand-700 dark:text-brand-300" />
                6. AI and project data
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Prompts, datasets, and evaluation files you send for an AI engagement are used only to build and test that product, unless you agree otherwise in writing.</li>
                <li>We do not use your confidential production data to train public foundation models.</li>
                <li>If an SOW uses a third-party model API (OpenAI, Google, Anthropic, or similar), that vendor processes prompts under its policy. Avoid sending live customer PII in prompts unless the SOW and DPA cover it.</li>
                <li>You are responsible for lawful collection of any training data you supply (consent, licenses, employment notices).</li>
              </ul>
            </section>

            <section id="blockchain" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Blocks className="w-6 h-6 text-brand-700 dark:text-brand-300" />
                7. Blockchain and public chains
              </h2>
              <p>
                Wallet addresses, transaction hashes, and contract events written to a public blockchain are public by
                design. We cannot erase on-chain data. Off-chain KYC, admin dashboards, and custodial systems are
                separate; those are processed only as agreed in the SOW. We are not a crypto exchange and do not custody
                user funds unless a contract expressly says so.
              </p>
            </section>

            <section id="retention" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Retention</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contact and quote records: typically up to 24 months after last correspondence, unless a contract or tax rule requires longer.</li>
                <li>Project repositories and credentials: for the life of the engagement, then returned or deleted per the SOW.</li>
                <li>Analytics: according to Google Analytics’ settings and our hosting log rotation (often 14 months or less for detailed hits).</li>
                <li>Invoices and legal correspondence: as required by accounting and limitation periods.</li>
              </ul>
            </section>

            <section id="security" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-brand-700 dark:text-brand-300" />
                9. Security
              </h2>
              <p>
                We use HTTPS, access-controlled inboxes, and reasonable technical and organizational measures. No method
                of transmission is perfectly secure. You should use unique passwords, 2FA on cloud and git accounts, and
                a secrets vault instead of emailing private keys. Report suspected incidents to the contact below
                promptly.
              </p>
            </section>

            <section id="rights" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Scale className="w-6 h-6 text-brand-700 dark:text-brand-300" />
                10. Your rights
              </h2>
              <p className="mb-3">
                Depending on where you live (including the EEA/UK and certain U.S. states), you may have the right to
                access, correct, delete, or port personal data, to object or restrict certain processing, and to
                withdraw consent. You may also lodge a complaint with a supervisory authority.
              </p>
              <p>
                California residents: we do not sell or share personal information for cross-context behavioral
                advertising as those terms are defined under the CCPA/CPRA. To exercise rights, email us with enough
                detail to verify the request. We will not discriminate against you for exercising privacy rights.
              </p>
            </section>

            <section id="international" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">11. International transfers</h2>
              <p>
                We and our processors may store or access data in the United States and other countries. Where a
                transfer tool is required (for example EU Standard Contractual Clauses), we will use it for client
                project data under a DPA. The public website may be viewed globally.
              </p>
            </section>

            <section id="children" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">12. Children</h2>
              <p>
                Our website and services are directed at businesses and adults. We do not knowingly collect personal
                data from children under 16 (or 13 where that is the applicable threshold). If you believe we have, contact
                us and we will delete it.
              </p>
            </section>

            <section id="changes" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">13. Changes</h2>
              <p>
                We may update this policy as products, laws, or processors change. The “Last updated” date is the
                effective date. Material changes will be reflected on this page; continued use of the site after that
                date constitutes awareness of the new policy.
              </p>
            </section>

            <section id="contact" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">14. Contact</h2>
              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/30">
                <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-700 dark:text-brand-300 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Privacy requests</h3>
                      <p className="text-sm mt-1">
                        Email{" "}
                        <a href="mailto:seijiito1102@gmail.com" className="text-brand-700 dark:text-brand-300 hover:underline">
                          seijiito1102@gmail.com
                        </a>{" "}
                        or call{" "}
                        <a href="tel:+12135451265" className="text-brand-700 dark:text-brand-300 hover:underline">
                          +1 (213) 545-1265
                        </a>
                        . Related:{" "}
                        <Link href="/terms" className="text-brand-700 dark:text-brand-300 hover:underline">
                          Terms of Service
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                  <Button asChild className="bg-brand-800 hover:bg-brand-700 shrink-0">
                    <Link href="/contact">Contact RhSoft</Link>
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
