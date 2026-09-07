export type Project = {
  id: number
  title: string
  category: "Blockchain" | "Web" | "E-commerce" | "Mobile"
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
    title: "CatheonGamingCenter",
    category: "Blockchain",
    location: "AWS",
    image: image("catheon_center"),
    description:
      "NFT marketplace for CatheonGaming. Built with Next.js, NestJS, Supabase, and TypeORM. Includes NFT minting, breeding, and token-staking subsystems. Delivered as an EVM blockchain developer on an 8-person team.",
    tags: ["Next.js", "NestJS", "Supabase", "TypeORM", "Solidity", "Web3", "AWS"],
    url: "https://app.catheongaming.com",
    featured: true,
  },
  {
    id: 2,
    title: "CatheonGaming Token Bridge",
    category: "Blockchain",
    location: "AWS",
    image: image("catheon_bridge"),
    description:
      "Token bridge for CatheonGaming from Solana to Polygon. Lets users swap Solchicks on Solana for Catheon on Polygon. Built with Next.js, NestJS, and Supabase, hosted on AWS.",
    tags: ["Next.js", "NestJS", "Supabase", "Solana", "Polygon", "AWS"],
    url: "https://swap.catheongaming.com",
    featured: true,
  },
  {
    id: 3,
    title: "Theia.finance",
    category: "Blockchain",
    location: "Google Cloud",
    image: image("theia"),
    description:
      "Decentralized financial protocol with a custom crowdfunding algorithm and NFT-based governance. Smart contracts in Solidity and Rust, deployed on Ethereum mainnet and NEAR testnet. Dapp in React, backend in Express and Postgres, hosted on Google Cloud.",
    tags: ["Solidity", "Rust", "React", "Express", "Postgres", "Web3", "Google Cloud"],
    url: "https://theia.club/",
    featured: true,
  },
  {
    id: 4,
    title: "Crypto Trading Bots",
    category: "Blockchain",
    location: "Polygon & Arbitrum",
    image: image("tradingbot"),
    description:
      "Cryptocurrency trading bots on Polygon and Arbitrum, including DEX arbitrage and CEX-DEX arbitrage strategies running in production.",
    tags: ["Polygon", "Arbitrum", "DEX", "CEX", "Trading Bots"],
    featured: true,
  },
  {
    id: 5,
    title: "Sellersket Price",
    category: "Web",
    location: "AWS",
    image: image("sellersket_price"),
    description:
      "Real-time Amazon product price-control system for sellers. Helps competitive listings sell faster at the right price. Built with Laravel and Vue, hosted on AWS.",
    tags: ["Laravel", "Vue", "AWS", "Amazon"],
    url: "https://sellersket-price.com",
    featured: true,
  },
  {
    id: 6,
    title: "Omula",
    category: "Web",
    location: "Fukuoka, Japan",
    image: image("omula"),
    description:
      "Event posting system for Omula Beauty Fashion Vocational School in Fukuoka. Publishes open-campus days, interview seminars, consultations, and festivals. Built with PHP and WordPress.",
    tags: ["PHP", "WordPress"],
    url: "https://omula.com",
    featured: true,
  },
  {
    id: 7,
    title: "MasterPiece",
    category: "Web",
    location: "Remote",
    image: image("masterpiece"),
    description:
      "Business process outsourcing system for Masterpiece Group, Inc., including real-time Facebook post monitoring. Vue frontend and Laravel backend communicate over WebSockets with Laravel Echo.",
    tags: ["Vue", "Laravel", "Laravel Echo", "WebSocket"],
    url: "https://www.m-piece.com",
  },
  {
    id: 8,
    title: "VIP Billionaires",
    category: "E-commerce",
    location: "Remote",
    image: image("vip_billionaires"),
    description:
      "E-commerce platform with iOS and Android apps. WordPress storefront, React Native mobile apps, React admin dashboard, and Firebase for backend and data.",
    tags: ["WordPress", "React Native", "React", "Firebase"],
    url: "https://www.vipbillionaires.com",
  },
  {
    id: 9,
    title: "GetHalal",
    category: "E-commerce",
    location: "Remote",
    image: image("gethalal"),
    description:
      "WooCommerce site for selling vegetables and meat. Started as a small plugin engagement on Upwork and grew into a full website and mobile apps with a new design.",
    tags: ["WooCommerce", "WordPress", "Mobile"],
    url: "https://gethalal.com",
  },
  {
    id: 10,
    title: "Luthorr",
    category: "E-commerce",
    location: "AWS",
    image: image("luthorr"),
    description:
      "E-commerce site built with Vue and Laravel for an Upwork client, hosted on AWS.",
    tags: ["Vue", "Laravel", "AWS", "E-commerce"],
    url: "https://luthorr.com",
  },
  {
    id: 11,
    title: "Hankyu",
    category: "Web",
    location: "Japan",
    image: image("hankyu"),
    description:
      "Large-scale Japan travel service website featuring trending destinations, locations, and services. Built with native PHP.",
    tags: ["PHP", "Travel"],
    url: "https://www.hankyu-travel.com/",
  },
  {
    id: 12,
    title: "Cinema Draft",
    category: "Blockchain",
    location: "BNB Chain",
    image: image("cinema_draft"),
    description:
      "Decentralized exchange for CinemaDraft on BNB Chain. Includes swap, liquidity, farming, presale, staking, auction, and launchpad. Built with React, Next.js, and ethers.js, forked from PancakeSwap V2.",
    tags: ["React", "Next.js", "ethers.js", "BNB Chain", "DeFi"],
    url: "https://www.cinemadraft.co",
  },
  {
    id: 13,
    title: "AirlexChat",
    category: "Mobile",
    location: "Japan",
    image: image("airlexchat"),
    description:
      "Large-scale Japanese social chat system (エアレペルソナ), forked from Rocket.Chat. Meteor backend, React web client, and React Native mobile apps.",
    tags: ["Meteor", "React", "React Native", "Rocket.Chat"],
    url: "https://airlex.co.jp",
  },
  {
    id: 14,
    title: "Funtivity",
    category: "Mobile",
    location: "Remote",
    image: image("funtivity"),
    description:
      "Social posting app for meeting people around sports, fitness, food, movies, music, and outdoor activities such as camping, hiking, fishing, and yoga.",
    tags: ["Mobile", "Social", "iOS", "Android"],
    url: "https://play.google.com/store/apps/details?id=com.brainyapps.funtivity",
  },
  {
    id: 15,
    title: "DealLocker",
    category: "E-commerce",
    location: "Remote",
    image: image("deallocker"),
    description:
      "One-stop platform for store promotions, deals, and discounts. Users fill a cart, review a final bill, and choose shipping options when the default courier is unavailable.",
    tags: ["E-commerce", "Deals", "Mobile"],
    url: "https://play.google.com/store/apps/details?id=com.brainyapps.deallocker",
  },
  {
    id: 16,
    title: "Hunters Loop",
    category: "Mobile",
    location: "Remote",
    image: image("huntersloop"),
    description:
      "Social posting app for hunters. Operators and guides can advertise businesses, set up profiles, go PRO, and message users.",
    tags: ["Mobile", "Social", "Messaging"],
    url: "https://play.google.com/store/apps/details?id=com.brainyapps.hunters",
  },
  {
    id: 17,
    title: "Ressista",
    category: "Mobile",
    location: "Remote",
    image: image("ressista"),
    description:
      "Social posting app where users discuss, address, and support one another around mental health.",
    tags: ["Mobile", "Social", "Health"],
    url: "https://apps.apple.com/us/app/ressista/id1531118849",
  },
  {
    id: 18,
    title: "eFarganyu",
    category: "Mobile",
    location: "Remote",
    image: image("efarganyu"),
    description:
      "Lightweight music streaming app for religious songs and music on low-memory phones. Play lite MP3s online without downloading.",
    tags: ["Mobile", "Music", "Streaming"],
    url: "https://apps.apple.com/us/app/efarganyu/id1522411767",
  },
  {
    id: 19,
    title: "MagelNail",
    category: "Mobile",
    location: "Remote",
    image: image("magelnail"),
    description: "Chat app that lets users communicate about nails and nail care.",
    tags: ["Mobile", "Chat"],
    url: "https://apps.apple.com/us/app/magel-nail/id1591068950",
  },
]

export const projectCategories = ["All", "Blockchain", "Web", "E-commerce", "Mobile"] as const

export const featuredProjects = projects.filter((project) => project.featured)
