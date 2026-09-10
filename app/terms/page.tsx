import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  FileText,
  Code2,
  Brain,
  Blocks,
  Globe,
  ShoppingCart,
  Smartphone,
  Shield,
  Scale,
  Mail,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | RhSoft",
  description:
    "Terms of service for RhSoft software development — AI, blockchain, web, e-commerce, and mobile engagements.",
}

const toc = [
  { id: "agreement", label: "1. Agreement" },
  { id: "services", label: "2. Services" },
  { id: "quotes", label: "3. Quotes & Statements of Work" },
  { id: "client-duties", label: "4. Client Responsibilities" },
  { id: "ip", label: "5. Intellectual Property" },
  { id: "open-source", label: "6. Open Source & Third Parties" },
  { id: "ai", label: "7. AI Systems" },
  { id: "blockchain", label: "8. Blockchain & Smart Contracts" },
  { id: "hosting", label: "9. Hosting, Cloud & APIs" },
  { id: "acceptance", label: "10. Acceptance & Warranty" },
  { id: "support", label: "11. Support & Maintenance" },
  { id: "confidentiality", label: "12. Confidentiality & Data" },
  { id: "payment", label: "13. Fees & Payment" },
  { id: "liability", label: "14. Liability" },
  { id: "termination", label: "15. Term & Termination" },
  { id: "general", label: "16. General" },
]

const serviceScopes = [
  {
    icon: Brain,
    title: "AI",
    text: "Machine learning models, NLP, computer vision, automation, and AI features embedded in products. Model quality depends on data you provide and on third-party model providers.",
  },
  {
    icon: Blocks,
    title: "Blockchain",
    text: "Smart contracts, dapps, DeFi, NFT platforms, token bridges, and staking. On-chain transactions are irreversible and subject to network fees, forks, and protocol risk.",
  },
  {
    icon: Globe,
    title: "Web",
    text: "Custom applications, APIs, dashboards, CMS, and cloud deployments on AWS, GCP, and similar platforms. Uptime of public cloud is governed by the provider’s SLA.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    text: "Storefronts, checkout, inventory, seller tools, and admin dashboards. Payment processors, tax, and shipping carriers are separate vendors with their own terms.",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    text: "iOS and Android apps, including React Native. App Store and Play Store review, policies, and fees are controlled by Apple and Google, not RhSoft.",
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200 dark:from-brand-950 dark:via-brand-900 dark:to-brand-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-white/40 mb-6">
            <FileText className="w-4 h-4 text-brand-700 dark:text-brand-300 mr-2" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 dark:from-white dark:via-brand-100 dark:to-brand-200 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mb-6">
            These terms govern your use of the RhSoft website and our software development services — AI, blockchain,
            web, e-commerce, and mobile.
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
                    Ask a question
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </aside>

          <div className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="text-sm bg-white/60 dark:bg-slate-800/60 border border-white/30 rounded-xl p-4">
              These terms are a general framework for RhSoft engagements. A signed proposal, statement of work (SOW),
              or master services agreement controls if it conflicts with this page. This is not legal advice.
            </p>

            <section id="agreement" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Agreement</h2>
              <p className="mb-3">
                By accessing rhsoft.co.uk (or any RhSoft site), requesting a quote, or engaging us to design, build, or
                support software, you agree to these Terms of Service. If you use the site or services on behalf of a
                company, you represent that you have authority to bind that company.
              </p>
              <p>
                We may update these terms. The “Last updated” date above is the effective date. Continued use after a
                change means you accept the revised terms, except where a signed contract says otherwise.
              </p>
            </section>

            <section id="services" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Software development services</h2>
              <p className="mb-6">
                RhSoft provides custom software development. Scope is defined in a quote, SOW, or ticket backlog we
                both accept. Unless an SOW says otherwise, work is professional services — not a sale of off-the-shelf
                packaged software.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {serviceScopes.map((item) => {
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
            </section>

            <section id="quotes" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Quotes and statements of work</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Website quotes and estimates are invitations to treat, not binding offers, until we confirm in writing.</li>
                <li>Fixed-price work is limited to the features, environments, and assumptions listed in the SOW.</li>
                <li>Time-and-materials work is billed for actual hours at the rates in the SOW, plus approved expenses.</li>
                <li>
                  Change requests (new features, extra platforms, extra environments, or material design changes)
                  require a written change order and may affect timeline and fees.
                </li>
                <li>
                  Discovery, architecture, UX, CI/CD, documentation, and handover are in scope only if listed. “Nice to
                  have” items in conversations are not included until they appear in the backlog we both accept.
                </li>
              </ul>
            </section>

            <section id="client-duties" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Client responsibilities</h2>
              <p className="mb-3">You agree to provide, in a timely way:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Product owners, reviewers, and decision-makers who can accept user stories and releases.</li>
                <li>Access to repositories, cloud accounts, app-store consoles, domains, and analytics as needed.</li>
                <li>Content, brand assets, copy, and data you have the right to use.</li>
                <li>Staging and production credentials, or a designated operator who will apply our pull requests.</li>
                <li>Feedback within the review windows in the SOW. Silence after that window may be treated as acceptance of that increment.</li>
              </ul>
              <p className="mt-3">
                Delays in access, content, or approvals extend delivery dates by at least the length of the delay. We
                are not responsible for third-party outages, store rejections, or policy changes by Apple, Google,
                payment processors, or cloud vendors.
              </p>
            </section>

            <section id="ip" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-brand-700 dark:text-brand-300" />
                5. Intellectual property
              </h2>
              <p className="mb-3">
                <strong className="text-slate-900 dark:text-white">Your materials.</strong> You keep all rights in
                content, trademarks, data, and code you supply. You grant RhSoft a limited license to use them solely
                to perform the project.
              </p>
              <p className="mb-3">
                <strong className="text-slate-900 dark:text-white">Work product.</strong> Upon full payment of undisputed
                invoices for an SOW, we assign to you the custom application code, unique designs, and documentation we
                create specifically for that SOW, excluding Pre-Existing Materials and third-party works.
              </p>
              <p className="mb-3">
                <strong className="text-slate-900 dark:text-white">Pre-Existing Materials.</strong> Libraries, starters,
                internal tools, CI templates, and know-how we used before or outside your project remain ours. We grant
                you a non-exclusive, perpetual license to use them as embedded in the deliverables, not to resell our
                frameworks as a competing product.
              </p>
              <p>
                Portfolio: unless you opt out in writing, we may describe the engagement at a high level (name, stack,
                screenshots of public UI) on rhsoft.co.uk. Confidential algorithms and unreleased products stay off the
                public portfolio.
              </p>
            </section>

            <section id="open-source" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Open source and third-party software</h2>
              <p>
                Deliverables often include open-source components (for example React, Next.js, Laravel, Solidity
                libraries, or React Native). Those components stay under their own licenses (MIT, Apache-2.0, GPL, and
                others). You are responsible for complying with those licenses in distribution. We will identify known
                GPL or similarly copyleft components when we introduce them. SaaS APIs, maps, email, payments, and AI
                model hosts are licensed by their vendors; we do not warrant their ongoing availability or pricing.
              </p>
            </section>

            <section id="ai" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Artificial intelligence systems</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>AI output can be incomplete, biased, or incorrect. You must review outputs before relying on them in production, legal, medical, or financial decisions.</li>
                <li>You warrant that training, fine-tuning, and prompt data you provide is lawfully obtained and does not infringe third-party rights.</li>
                <li>Unless an SOW says otherwise, we do not use your confidential production data to train public foundation models.</li>
                <li>Model weights, prompts, and evaluation sets we create for you transfer under Section 5 after payment; third-party model APIs remain licensed by their providers.</li>
                <li>Regulatory rules for automated decision-making, biometric data, and sector AI (health, finance) are your compliance obligation unless we are separately engaged to advise.</li>
              </ul>
            </section>

            <section id="blockchain" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Blockchain and smart contracts</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Smart contracts, once deployed, may be immutable. You approve bytecode, network, and admin keys before mainnet deploy.</li>
                <li>We are not a broker, exchange, or investment adviser. Tokens, NFTs, and DeFi products can lose value, get exploited, or become non-compliant with securities or money-transmitter rules in your jurisdiction.</li>
                <li>Audits, if included, are point-in-time reviews — not a guarantee against bugs, economic attacks, or key compromise.</li>
                <li>Gas fees, bridges, oracles, and chain outages are outside our control. Testnet success does not guarantee mainnet behavior.</li>
                <li>You are responsible for wallet security, key custody, and any KYC/AML your product requires.</li>
              </ul>
            </section>

            <section id="hosting" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Hosting, cloud, and APIs</h2>
              <p>
                Unless the SOW includes managed hosting, you own cloud accounts (AWS, GCP, Vercel, Supabase, Firebase,
                and similar) and pay those invoices. We may be invited as collaborators. We are not liable for
                misconfigured IAM, leaked secrets in your account, or spend from resources you approve. Environment
                variables, API keys, and store certificates should rotate on a schedule you control. Backup and disaster
                recovery are included only if specified.
              </p>
            </section>

            <section id="acceptance" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Acceptance, warranty, and defects</h2>
              <p className="mb-3">
                We perform services with reasonable professional skill. Software is delivered “as accepted against the
                SOW,” not as error-free. You receive a warranty period of thirty (30) days after the accepted release
                (or as stated in the SOW) for defects that reproduce against written acceptance criteria. The warranty
                does not cover:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Changes you or another vendor make after handover.</li>
                <li>Third-party APIs, OS updates, browser changes, or store policy changes.</li>
                <li>Misuse, unsupported environments, or data you import.</li>
                <li>Performance targets not defined in the SOW (load, latency, conversion).</li>
              </ul>
              <p className="mt-3">
                Exclusive remedy for a warranted defect is repair or re-performance. We do not warrant that software
                will be uninterrupted or immune to security incidents.
              </p>
            </section>

            <section id="support" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">11. Support and maintenance</h2>
              <p>
                Bug-fix and feature work after the warranty window is billed under a retainer or new SOW. Emergency
                production support, on-call, and SLA response times apply only if purchased. Security patches for
                dependencies are recommended; applying them in your environments is your operations duty unless we are
                contracted to maintain the repo.
              </p>
            </section>

            <section id="confidentiality" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-brand-700 dark:text-brand-300" />
                12. Confidentiality and data
              </h2>
              <p className="mb-3">
                Each party will protect the other’s non-public information with reasonable care and use it only for the
                engagement. Our <Link href="/privacy" className="text-brand-700 dark:text-brand-300 hover:underline">Privacy Policy</Link>{" "}
                describes website and form data. For production personal data, we act as a processor only under a data
                processing addendum if you require one.
              </p>
              <p>
                You must not send us live secrets in email or chat when a vault is available. We may use anonymized
                project metadata to improve our internal delivery process.
              </p>
            </section>

            <section id="payment" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">13. Fees and payment</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Invoices are due as stated on the invoice (typically net 15 unless the SOW says otherwise).</li>
                <li>We may pause work or withhold repository access for overdue undisputed amounts.</li>
                <li>Taxes, app-store fees, cloud spend, licenses, and paid APIs are extra unless listed as included.</li>
                <li>Deposits are applied to the final invoice and are non-refundable once corresponding work has started, except as required by law.</li>
              </ul>
            </section>

            <section id="liability" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Scale className="w-6 h-6 text-brand-700 dark:text-brand-300" />
                14. Limitation of liability
              </h2>
              <p className="mb-3">
                To the maximum extent permitted by law, RhSoft is not liable for indirect, incidental, special,
                consequential, or punitive damages, or for lost profits, lost data, lost tokens, business interruption,
                or reputational harm, even if advised of the possibility.
              </p>
              <p>
                Our total liability arising out of a project will not exceed the fees you paid us for that SOW in the
                three (3) months before the claim. Nothing in these terms excludes liability that cannot be limited by
                law (for example, fraud). Website visitors who are not paying clients use the site at their own risk;
                we are not liable for reliance on marketing copy or portfolio case studies.
              </p>
            </section>

            <section id="termination" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">15. Term and termination</h2>
              <p>
                Either party may terminate an SOW for material breach that remains uncured for fourteen (14) days after
                written notice, or immediately for insolvency. You pay for work performed and non-cancellable
                third-party costs through the effective date. Upon request and payment, we will hand over repositories,
                documentation, and credentials we hold for your accounts. We may retain a copy of work product as
                required for legal or backup purposes.
              </p>
            </section>

            <section id="general" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">16. General</h2>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>These terms, plus any SOW, are the entire agreement for website use and the described services.</li>
                <li>If a clause is unenforceable, the rest remains in effect.</li>
                <li>You may not assign a project to another party without our consent; we may use vetted subcontractors under these same confidentiality duties.</li>
                <li>Governing law and venue will be those stated in the SOW, or otherwise the courts competent for our principal place of business.</li>
                <li>Force majeure includes widespread cloud outages, chain halts, war, and events beyond reasonable control.</li>
              </ul>
              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/30">
                <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-700 dark:text-brand-300 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Questions about these terms</h3>
                      <p className="text-sm mt-1">
                        Email{" "}
                        <a href="mailto:support@rhsoft.co.uk" className="text-brand-700 dark:text-brand-300 hover:underline">
                          support@rhsoft.co.uk
                        </a>{" "}
                        or call{" "}
                        <a href="tel:+12135451265" className="text-brand-700 dark:text-brand-300 hover:underline">
                          +1 (213) 545-1265
                        </a>
                        . See also our{" "}
                        <Link href="/privacy" className="text-brand-700 dark:text-brand-300 hover:underline">
                          Privacy Policy
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
