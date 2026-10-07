export type Job = {
  id: string
  title: string
  team: "AI" | "Blockchain" | "Web" | "Design" | "General"
  type: "Full-time" | "Internship" | "Part-time" | "Contract"
  location: string
  summary: string
  responsibilities: string[]
  requirements: string[]
}

export const jobs: Job[] = [
  {
    id: "full-stack-developer",
    title: "Full-Stack Developer",
    team: "Web",
    type: "Contract",
    location: "Remote",
    summary:
      "Join our team as a Full-Stack Developer and build web/ai-powered applications across the frontend and backend, with mentorship and room to grow.",
    responsibilities: [
      "Build and maintain features across the frontend and backend of web/ai-powered applications",
      "Collaborate with the team on technical decisions, reviews, and planning",
      "Communicate with the team and clients to understand the requirements and deliver the best solution",
      "Daily stand-ups and progress updates, weekly reviews, and monthly check-ins",
      "Use AI tools to speed up development while keeping quality high",
    ],
    requirements: [
      "Basic full-stack development knowledge and the ability to learn quickly",
      "Good English communication skills",
      "Familiarity with AI tools such as ChatGPT and Claude",
      "Willingness to learn and improve, and strong collaboration skills",
    ],
  },
]

export const careerValues = [
  {
    title: "Ship real products",
    text: "You work on live AI, blockchain, web, and e-commerce systems — not throwaway demos.",
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

export const availabilityOptions = [
  "Immediately",
  "Within 2 weeks",
  "Within 1 month",
  "More than 1 month",
] as const

export const disabilityOptions = ["Prefer not to say", "No", "Yes"] as const

// Vercel rejects request bodies over ~4.5 MB, so keep resumes below that.
export const RESUME_MAX_BYTES = 4 * 1024 * 1024

export const RESUME_TYPES: Record<string, string> = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
}
