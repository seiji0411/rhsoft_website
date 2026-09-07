export type Service = {
  slug: "ai" | "blockchain" | "web" | "ecommerce" | "mobile"
  title: string
  description: string
  features: string[]
  image: string
  popular?: boolean
}

export const services: Service[] = [
  {
    slug: "ai",
    title: "AI",
    image: "/assets/services/service-ai.png",
    description: "Intelligent products that automate work, surface insights, and help users make better decisions.",
    features: [
      "Machine learning models",
      "NLP and computer vision",
      "Intelligent automation",
      "AI-powered product features",
    ],
    popular: true,
  },
  {
    slug: "blockchain",
    title: "Blockchain",
    image: "/assets/services/service-blockchain.png",
    description: "Secure on-chain applications, from smart contracts and DeFi to NFT platforms and token bridges.",
    features: ["Smart contracts (Solidity & Rust)", "DApps, DeFi, and DEX", "NFT marketplaces and minting", "Token bridges and staking"],
  },
  {
    slug: "web",
    title: "Web",
    image: "/assets/services/service-web.png",
    description: "Custom websites and platforms that scale — APIs, dashboards, and cloud-hosted web applications.",
    features: ["Custom web applications", "REST and GraphQL APIs", "Cloud on AWS and GCP", "CMS and WordPress"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    image: "/assets/services/service-ecommerce.png",
    description: "Online stores and seller tools with checkout, inventory, and admin dashboards built to convert.",
    features: ["WooCommerce and Laravel stores", "Checkout and inventory", "Seller and pricing tools", "Admin dashboards"],
  },
  {
    slug: "mobile",
    title: "Mobile",
    image: "/assets/services/service-mobile.png",
    description: "iOS and Android apps for social, chat, streaming, and commerce — built to feel native and fast.",
    features: ["iOS and Android apps", "React Native", "Social, chat, and messaging", "Streaming and consumer apps"],
  },
]
