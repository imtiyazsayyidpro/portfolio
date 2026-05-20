// ── Types ────────────────────────────────────────────────────────────────────

export interface FeaturedProject {
  num: string; // "01"
  label: string; // category line
  tag: string; // status badge
  url: string; // browser mock url bar
  image: string; // /assets/product-images/...
  imageAlt: string;
  titlePre: string; // text before <em>
  titleEm: string; // text inside <em>
  description: string;
  features: string[];
  role: string[]; // two lines
  stack: string[];
  impact: string; // can include **bold** via JSX
  impactBold: string; // just the bolded part for JSX
  impactPre: string; // text before bold
  impactPost: string; // text after bold
}

export interface OtherProject {
  title: string;
  label: string;
  description: string;
  impact: string;
  stack: string[];
}

export interface PersonalProject {
  title: string;
  tagline: string;
  pill: string;
  description: string;
  url?: string;
  urlLabel?: string;
  sections: {
    heading: string;
    type: "chips" | "quotes";
    items: string[];
  }[];
}

export interface ProjectIndexItem {
  num: string;
  name: string;
  description: string;
  category: string;
}

// ── Featured Work (horizontal scroller, 4 cards) ────────────────────────────

export const featuredProjects: FeaturedProject[] = [
  {
    num: "01",
    label: "CRM · Overseas Education · Lead & Student Management",
    tag: "Live",
    url: "app.aliff.in",
    image: "/assets/product-images/Aliff.png",
    imageAlt: "Aliff CRM V2",
    titlePre: "Aliff CRM ",
    titleEm: "V2",
    description: "A full CRM and operations platform for a study abroad consultancy — leads, students, universities, franchises, permissions, all in one system.",
    features: [
      "Lead & student management workflows across multiple teams",
      "Role-based permissions enforced at API and UI layers",
      "Searchable universities + application tracking",
      "Production deployment on Ubuntu, Nginx, PM2, MySQL",
    ],
    role: ["Tech Lead", "Full-Stack"],
    stack: ["Next.js", "Node", "Prisma", "MySQL", "Nginx"],
    impact: "",
    impactPre: "Brings core business operations into ",
    impactBold: "one structured system",
    impactPost: " — leads, students, franchises, internal processes.",
  },
  {
    num: "02",
    label: "AI Video Generation · Multi-Model Pipeline",
    tag: "AI Pipeline",
    url: "aitiger.ai",
    image: "/assets/product-images/AiTiger.png",
    imageAlt: "AiTiger",
    titlePre: "Ai",
    titleEm: "Tiger",
    description: "An AI video platform that takes an idea and walks it through script, scenes, shots, prompts, images, video, narration, and music — all coordinated.",
    features: [
      "Multi-model orchestration: GPT-4o, Veo, Kling, Hailuo, Runway",
      "Scene + shot planning so output stays controllable",
      "ElevenLabs narration + Suno background music",
      "Cost-aware generation flow from day one",
    ],
    role: ["Full-Stack", "Developer"],
    stack: ["Node", "GPT-4o", "Veo", "ElevenLabs", "Suno"],
    impact: "",
    impactPre: "High-quality AI videos through an automated pipeline — ",
    impactBold: "cuts the manual creative work",
    impactPost: " of producing video content.",
  },
  {
    num: "03",
    label: "KYC Dashboard · Loan Disbursement · Automation",
    tag: "Shipped in 15 days",
    url: "esoppdhan.com",
    image: "/assets/product-images/Esoppdhan.png",
    imageAlt: "Esoppdhan KYC Dashboard",
    titlePre: "Esopp",
    titleEm: "dhan",
    description: "A KYC + loan disbursement dashboard that replaced a manual, multi-document process with one automated pipeline. Built solo, in 15 days.",
    features: [
      "Excel-based bulk onboarding for hundreds of records",
      "Setu APIs for PAN, Aadhaar, bank verification",
      "Dynamic HTML document generation + e-signatures",
      "Gemini-based authenticity scoring with human review",
    ],
    role: ["Sole Developer", "15-day build"],
    stack: ["Next.js", "Node", "MySQL", "Setu", "Gemini"],
    impact: "",
    impactPre: "Enabled ",
    impactBold: "₹5 Cr disbursement to 180 clients",
    impactPost: " by replacing a fully manual process with an automated pipeline.",
  },
  {
    num: "04",
    label: "Custom ERP · B2C · B2B · B2Builder",
    tag: "Custom ERP",
    url: "mynt.simpledigital.in",
    image: "/assets/product-images/Mynt.png",
    imageAlt: "Mynt Furniture ERP",
    titlePre: "Mynt ",
    titleEm: "Furniture",
    description: "A custom ERP for modular furniture — three business channels, one system, the journey from lead to factory floor mapped end-to-end.",
    features: [
      "Lead → site visit → order → BOM → factory → delivery",
      "Multi-channel: B2C, B2B, B2Builder on shared data",
      "Internal purchase orders + factory progress tracking",
      "Automated email + in-app reminders for ops teams",
    ],
    role: ["Full-Stack", "Architecture"],
    stack: ["Next.js", "Node", "Prisma", "MySQL", "Tailwind"],
    impact: "",
    impactPre: "Structures the ",
    impactBold: "full lifecycle of furniture operations",
    impactPost: " — from lead to factory floor — in one workflow.",
  },
];

// ── Other Real-World Projects (grid of 4) ────────────────────────────────────

export const otherProjects: OtherProject[] = [
  {
    title: "Conncap",
    label: "Investor Calls · AI Summarization · Search",
    description: "Joins, records, transcribes, summarizes, and semantically searches investor earnings calls.",
    impact: "Turns long calls into searchable transcripts and AI summaries.",
    stack: ["Twilio", "Deepgram", "Pinecone"],
  },
  {
    title: "Tktfox",
    label: "Ticketing · Seats.io · Backend APIs",
    description: "Ticketing platform with custom seat layouts and interactive seat selection.",
    impact: "Supports booking workflows with interactive seat selection.",
    stack: ["Seats.io", "JS", "APIs"],
  },
  {
    title: "Aarfa Couture",
    label: "E-Commerce · Admin · Inventory",
    description: "A storefront for a fashion brand with an admin dashboard for products, inventory, and orders.",
    impact: "Gave the business a digital storefront and the system to run it.",
    stack: ["Next.js", "Node", "MySQL"],
  },
  {
    title: "Wadia Property",
    label: "Real Estate · Listings · Admin",
    description: "Real estate listings website with an admin dashboard for managing property listings.",
    impact: "A dedicated platform to manage and display property listings.",
    stack: ["Next.js", "Node", "MySQL"],
  },
];

// ── Personal Projects ─────────────────────────────────────────────────────────

export const personalProjects: PersonalProject[] = [
  {
    title: "Gymbro",
    tagline: "Workout Tracking · Progressive Overload",
    pill: "Workout Tracking · Progressive Overload",
    description: "Most workout apps are too cluttered or too casual. Gymbro treats workout tracking like a proper system — repeatable routines, set-by-set logging, drop sets, progress over time.",
    sections: [
      {
        heading: "Surface",
        type: "chips",
        items: ["Exercise library", "Routines", "Set/rep logging", "Drop sets", "History", "Volume tracking", "Progress charts"],
      },
      {
        heading: "Stack",
        type: "chips",
        items: ["Next.js", "Express", "Prisma", "MySQL", "shadcn/ui"],
      },
    ],
  },
  {
    title: "Our Journey",
    tagline: "AI Journaling · MCP · Memory Tool",
    pill: "AI Journaling · MCP · Memory Tool",
    description: "What if journaling felt like talking to an assistant that remembers with you? Our Journey connects to GPT or Claude via MCP for natural memory save and recall.",
    url: "https://ourjourney.imtiyazsayyid.in",
    urlLabel: "ourjourney.imtiyazsayyid.in →",
    sections: [
      {
        heading: "Use cases",
        type: "quotes",
        items: ["Save that today I went for dinner with my family and felt peaceful.", "What did I write the day I felt stuck with work?", "Find the memory where I mentioned that evening walk."],
      },
      {
        heading: "Stack",
        type: "chips",
        items: ["TypeScript", "MCP", "GPT", "Claude"],
      },
    ],
  },
];

// ── Project Index (full table of 10) ─────────────────────────────────────────

export const projectIndex: ProjectIndexItem[] = [
  {
    num: "01",
    name: "Aliff CRM V2",
    description: "CRM & operations for study abroad — leads, students, universities, permissions, franchises.",
    category: "Production",
  },
  {
    num: "02",
    name: "AiTiger",
    description: "AI video pipeline — scripts, scenes, prompts, images, video, narration, music.",
    category: "AI",
  },
  {
    num: "03",
    name: "Esoppdhan",
    description: "KYC + loan disbursement — Setu APIs, document gen, e-sign, Gemini scoring.",
    category: "Internal",
  },
  {
    num: "04",
    name: "Mynt Furniture",
    description: "Custom ERP for B2C, B2B, B2Builder modular furniture workflows.",
    category: "ERP",
  },
  {
    num: "05",
    name: "Conncap",
    description: "Investor call summarization — Twilio, Deepgram, ChatGPT, Gemini, Pinecone.",
    category: "Internal",
  },
  {
    num: "06",
    name: "Tktfox",
    description: "Ticketing with Seats.io, custom layouts, backend APIs.",
    category: "Live",
  },
  {
    num: "07",
    name: "Aarfa Couture",
    description: "E-commerce with admin dashboard for product, inventory, orders.",
    category: "Live",
  },
  {
    num: "08",
    name: "Wadia Property",
    description: "Real estate listings + admin dashboard.",
    category: "Live",
  },
  {
    num: "09",
    name: "Gymbro",
    description: "Workout tracking — routines, set logging, drop sets, progressive overload.",
    category: "Personal",
  },
  {
    num: "10",
    name: "Our Journey",
    description: "AI journaling via MCP — natural memory save and recall with GPT & Claude.",
    category: "Personal",
  },
];
