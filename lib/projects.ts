export type Project = {
  id: number
  title: string
  category: "AI & Automation" | "Blockchain" | "Web"
  location: string
  date?: string
  image: string
  description: string
  tags: string[]
  url?: string
  featured?: boolean
}

const image = (slug: string) => `/assets/portfolio/${slug}.png`

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered SaaS",
    category: "AI & Automation",
    location: "Cloud · LLM",
    image: image("ai_powered_saas"),
    description:
      "SaaS products with AI at the core — copilots, recommendations, document intelligence, and usage-based billing on a multi-tenant stack.",
    tags: ["SaaS", "OpenAI", "RAG", "Next.js", "Python"],
    featured: true,
  },
  {
    id: 2,
    title: "AI Agent Development",
    category: "AI & Automation",
    location: "Tools · Workflows",
    image: image("ai_agent"),
    description:
      "Autonomous and assisted agents — tool use, memory, orchestration, and human-in-the-loop flows that actually ship in production.",
    tags: ["Agents", "LangGraph", "Tools", "APIs"],
    featured: true,
  },
  {
    id: 3,
    title: "LLM applications and prompt engineering",
    category: "AI & Automation",
    location: "GPT · Claude · Local",
    image: image("llm_apps"),
    description:
      "LLM apps from chat to retrieval — prompt design, evals, guardrails, and fine-tuning so models behave the way your product needs.",
    tags: ["LLMs", "Prompts", "Evals", "RAG"],
    featured: true,
  },
  {
    id: 4,
    title: "Business process automation",
    category: "AI & Automation",
    location: "Ops · Back office",
    image: image("process_automation"),
    description:
      "Automate the work between teams — intake, document review, routing, and RPA-style workflows with AI where it saves real hours.",
    tags: ["Automation", "RPA", "Workflows", "Integrations"],
    featured: true,
  },
  {
    id: 5,
    title: "DeFi dapp",
    category: "Blockchain",
    location: "EVM · Multi-chain",
    image: image("defi_dapp"),
    description:
      "Decentralized finance apps — swap, liquidity, staking, farming, launchpads, and on-chain treasuries. Smart contracts plus a production dapp UI your users can actually use.",
    tags: ["Solidity", "React", "ethers.js", "DeFi", "Web3"],
    featured: true,
  },
  {
    id: 6,
    title: "NFT dapp",
    category: "Blockchain",
    location: "EVM · Multi-chain",
    image: image("nft_dapp"),
    description:
      "NFT marketplaces and minting apps — collections, wallets, royalties, breeding or staking, and admin tools. Built for launch and for the marketplace that follows.",
    tags: ["NFTs", "Solidity", "Next.js", "Web3", "Marketplace"],
    featured: true,
  },
  {
    id: 7,
    title: "Crypto trading scripts",
    category: "Blockchain",
    location: "DEX · CEX",
    image: image("trading_scripts"),
    description:
      "Production trading scripts and bots — DEX arbitrage, CEX–DEX routes, monitoring, and execution on chains such as Polygon and Arbitrum.",
    tags: ["Trading Bots", "DEX", "CEX", "Polygon", "Arbitrum"],
    featured: true,
  },
  {
    id: 8,
    title: "SaaS platform",
    category: "Web",
    location: "AWS · GCP",
    image: image("saas_platform"),
    description:
      "Multi-tenant SaaS products — dashboards, APIs, billing, roles, and cloud hosting that scale with your customers.",
    tags: ["Next.js", "Laravel", "APIs", "AWS", "GCP"],
    featured: true,
  },
  {
    id: 9,
    title: "CMS platform",
    category: "Web",
    location: "WordPress · Custom",
    image: image("cms_platform"),
    description:
      "Content platforms and custom CMS — editorial workflows, landing pages, media, and sites your team can publish without a developer.",
    tags: ["WordPress", "PHP", "CMS", "Vue"],
    featured: true,
  },
  {
    id: 10,
    title: "Ecommerce platform",
    category: "Web",
    location: "Web",
    image: image("ecommerce_platform"),
    description:
      "Online stores and seller tools — catalog, checkout, inventory, payments, and admin dashboards built to convert.",
    tags: ["WooCommerce", "Laravel", "Checkout", "Inventory"],
    featured: true,
  },
]

export const projectCategories = ["All", "AI & Automation", "Blockchain", "Web"] as const

export const featuredProjects = projects.filter((project) => project.featured)
