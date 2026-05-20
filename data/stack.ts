export interface StackCategory {
  num: string;
  title: string;
  items: string[];
}

export const stack: StackCategory[] = [
  {
    num: "01",
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "Vue",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Responsive UI",
      "Admin dashboards",
    ],
  },
  {
    num: "02",
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Prisma ORM",
      "MySQL",
      "Socket.io",
      "Auth + RBAC",
      "File handling",
    ],
  },
  {
    num: "03",
    title: "Integrations",
    items: [
      "OpenAI · Gemini",
      "Setu KYC",
      "Twilio · Deepgram",
      "Pinecone",
      "Stripe · PayU",
      "Seats.io",
      "ElevenLabs · Suno",
    ],
  },
  {
    num: "04",
    title: "Deployment",
    items: [
      "VPS · Ubuntu",
      "Nginx · PM2",
      "Cloudflare",
      "DNS + domains",
      "Staging envs",
      "Production debug",
    ],
  },
];
