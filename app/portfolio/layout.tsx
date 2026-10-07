import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | RhSoft",
  description: "Selected RhSoft projects across AI, blockchain, web, and e-commerce.",
  alternates: { canonical: "/portfolio" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
