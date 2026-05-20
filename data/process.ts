export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Understand the workflow",
    description: "How the business currently works and where the system fits.",
  },
  {
    num: "02",
    title: "Plan the structure",
    description: "Users, roles, permissions, data models, main flows.",
  },
  {
    num: "03",
    title: "Build full-stack",
    description: "Frontend, backend, database, APIs, integrations, deploy.",
  },
  {
    num: "04",
    title: "Test real cases",
    description: "Whether the system fits the actual day-to-day situations.",
  },
  {
    num: "05",
    title: "Improve after launch",
    description: "Stay close to production, feedback, practical improvements.",
  },
];
