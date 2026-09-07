import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CallPopup } from "@/components/call-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RhSoft - Software Development Company",
  description: "RhSoft is a software development company that provides custom software solutions for businesses.",
  keywords: [
    "software development",
    "custom software solutions",
    "software development company",
    "software development services",
    "software development agency",
    "software development company",
    "software development services",
    "software development agency",
  ].join(", ")
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="RHSoft is a software development company that provides custom software solutions for businesses." />
        <meta name="keywords" content="software development, custom software solutions, software development company, software development services, software development agency, software development company, software development services, software development agency" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7CBBF8YY45"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7CBBF8YY45');
          `
        }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200 dark:from-brand-950 dark:via-brand-900 dark:to-brand-800">
            <CallPopup />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
