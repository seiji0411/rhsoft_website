export type Job = {
  id: string
  title: string
  team: "AI" | "Blockchain" | "Web" | "Mobile" | "Design" | "General"
  type: "Full-time" | "Internship"
  location: string
  summary: string
  responsibilities: string[]
  requirements: string[]
}

export const jobs: Job[] = [
  {
    id: "senior-fullstack",
    title: "Senior Full-Stack Engineer",
    team: "Web",
    type: "Full-time",
    location: "Remote · UK-friendly",
    summary:
      "Own APIs, dashboards, and cloud platforms that ship to production — Laravel, Vue, Next.js, and AWS/GCP.",
    responsibilities: [
      "Design and ship web apps, REST/GraphQL APIs, and admin dashboards",
      "Review architecture, code, and cloud deployments",
      "Work with clients from discovery through launch",
    ],
    requirements: [
      "5+ years building production web products",
      "Strong TypeScript or PHP, plus modern frontend",
      "Comfortable with AWS or GCP",
    ],
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    team: "AI",
    type: "Full-time",
    location: "Remote · UK-friendly",
    summary:
      "Build production AI features — models, NLP, computer vision, and automation that clients can actually trust.",
    responsibilities: [
      "Prototype and productionize ML and LLM-powered features",
      "Evaluate models, data quality, and failure modes",
      "Integrate AI into web and mobile products",
    ],
    requirements: [
      "Hands-on ML or LLM product experience",
      "Python plus one of PyTorch, TensorFlow, or similar",
      "Clear communication with non-ML stakeholders",
    ],
  },
  {
    id: "blockchain-engineer",
    title: "Blockchain Engineer",
    team: "Blockchain",
    type: "Full-time",
    location: "Remote · UK-friendly",
    summary:
      "Ship secure smart contracts, dapps, token bridges, and NFT platforms — with audits and mainnet discipline.",
    responsibilities: [
      "Write and review Solidity or Rust smart contracts",
      "Integrate wallets, indexers, and dapp frontends",
      "Help clients understand on-chain risk and operations",
    ],
    requirements: [
      "Shipped on-chain work (DeFi, NFTs, bridges, or similar)",
      "Solidity or Rust, plus TypeScript for dapps",
      "Security-first mindset",
    ],
  },
  {
    id: "mobile-engineer",
    title: "Mobile Engineer",
    team: "Mobile",
    type: "Full-time",
    location: "Remote · UK-friendly",
    summary:
      "Build iOS and Android apps with React Native that feel native — chat, social, streaming, and commerce.",
    responsibilities: [
      "Ship and maintain React Native apps on both stores",
      "Own performance, offline behavior, and store releases",
      "Collaborate with design and backend on product quality",
    ],
    requirements: [
      "3+ years of iOS, Android, or React Native",
      "Experience shipping to App Store and Play Store",
      "Care for UX details and crash-free sessions",
    ],
  },
  {
    id: "product-designer",
    title: "Product Designer",
    team: "Design",
    type: "Full-time",
    location: "Remote · UK-friendly",
    summary:
      "Design interfaces for AI, blockchain, web, and mobile products — from flows and systems to polished UI.",
    responsibilities: [
      "Turn briefs into user flows, wireframes, and high-fidelity UI",
      "Build and maintain a coherent design system",
      "Partner with engineers through launch",
    ],
    requirements: [
      "Portfolio of shipped product work",
      "Figma fluency and strong visual craft",
      "Comfort designing for complex software, not just marketing sites",
    ],
  },
  {
    id: "engineering-intern",
    title: "Engineering Intern",
    team: "General",
    type: "Internship",
    location: "Remote",
    summary:
      "Learn by shipping real client work across web, mobile, AI, or blockchain — with mentorship from senior engineers.",
    responsibilities: [
      "Contribute to features under a mentor",
      "Write tests, docs, and pull requests",
      "Join standups and reviews on live projects",
    ],
    requirements: [
      "Personal projects or internships in software",
      "Hunger to learn production engineering",
      "Clear written English",
    ],
  },
]

export const careerValues = [
  {
    title: "Ship real products",
    text: "You work on live AI, blockchain, web, e-commerce, and mobile systems — not throwaway demos.",
  },
  {
    title: "Remote, high trust",
    text: "Work from anywhere with overlap for UK hours. We care about output, reviews, and reliability.",
  },
  {
    title: "Craft over theatre",
    text: "Clean architecture, honest estimates, and code you would put your name on.",
  },
  {
    title: "Grow with the studio",
    text: "Small team, direct access to clients, and room to own a stack end to end.",
  },
]
