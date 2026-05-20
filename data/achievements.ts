export interface Achievement {
  num: string;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    num: "01",
    title: "Shipped under tight deadlines",
    description:
      "Solo-built admin and user dashboards for a KYC + loan disbursement workflow in under 15 days.",
  },
  {
    num: "02",
    title: "AI-integrated products",
    description:
      "Workflows across video generation, summarization, authenticity scoring, and journaling.",
  },
  {
    num: "03",
    title: "Automated manual ops",
    description:
      "Replaced manual document, onboarding, and lead processes with structured software.",
  },
  {
    num: "04",
    title: "Mentored junior devs",
    description:
      "Mentored and delegated while delivering important modules for live projects.",
  },
  {
    num: "05",
    title: "Built an audience",
    description: "Educational dev content on Instagram as @imtcode — 15k+ followers.",
  },
  {
    num: "06",
    title: "Strong academic foundation",
    description: "B.Sc. IT from Vidyalankar — CGPA 9.93 / 10.",
  },
];
