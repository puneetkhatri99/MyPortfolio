import heroImage from "../assets/hero.png";
import todoImage from "../assets/todo.jpg";
import currencyImage from "../assets/currency.jpg";

export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Ventures", href: "#ventures" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const contactLinks = {
  email: "Sehgalpuneet999@gmail.com",
  github: "https://github.com/puneetkhatri99",
  linkedin: "http://www.linkedin.com/in/puneetsehgal0205",
  resume: "/Resume.pdf",
};

export const heroStats = [
  { value: "2+", label: "Years Experience" },
  { value: "12+", label: "Projects Shipped" },
  { value: "15+", label: "Technologies Used" },
  { value: "8+", label: "Systems Built" },
];

export const experienceEntries = [
  {
    date: "2024 - Present",
    title: "Backend & AI Engineer",
    company: "Independent / Client Builds",
    location: "Remote",
    description:
      "Building API-first tools, AI-assisted workflows, and small systems that need to stay reliable after launch.",
    badge: "Current",
  },
  {
    date: "2023 - 2024",
    title: "Full-Stack Developer",
    company: "Product Experiments",
    location: "India / Remote",
    description:
      "Turned ideas into polished web apps by connecting interfaces, data layers, and lightweight deployment flows.",
    badge: "Shipped",
  },
  {
    date: "2022 - 2023",
    title: "Web Engineer",
    company: "Freelance / Personal Projects",
    location: "India",
    description:
      "Focused on responsive UI delivery, backend fundamentals, and the transition from prototypes to maintainable apps.",
    badge: "Project",
  },
];

export const stackLayers = [
  {
    layer: "Layer 01",
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Webhooks",
    ],
  },
  {
    layer: "Layer 02",
    title: "AI & Data",
    skills: [
      "LLM workflows",
      "Prompt design",
      "Retrieval pipelines",
      "Context shaping",
      "Automation",
      "Evaluation loops",
    ],
  },
  {
    layer: "Layer 03",
    title: "Cloud & DevOps",
    skills: [
      "Bash",
      "Linux",
      "Docker",
      "Deployment",
      "CI/CD",
      "Logging",
      "Monitoring",
    ],
  },
  {
    layer: "Layer 04",
    title: "Frontend & Product",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Accessibility",
      "Component systems",
      "Product thinking",
    ],
  },
];

export const workProjects = [
  {
    category: "Productivity / CRUD",
    title: "TaskFlow OS",
    description:
      "A mobile-first task manager with a clear edit flow, quick state changes, and a layout that stays calm under repeated use.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Local Storage"],
    outcome: "Reduced recurring task setup to a few taps and kept edits immediate.",
    image: todoImage,
  },
  {
    category: "Fintech / Data",
    title: "Currency Lens",
    description:
      "A conversion dashboard for checking rates, comparing values, and moving through the workflow without visual noise.",
    tech: ["React", "API Integration", "JavaScript", "Responsive CSS"],
    outcome: "Turned lookup-heavy exchange checks into a clean two-step flow.",
    image: currencyImage,
  },
  {
    category: "AI / Backend",
    title: "Signal Relay",
    description:
      "A draft assistant pipeline for routing prompts, persisting context, and keeping request history attached to each response.",
    tech: ["Node.js", "Express", "PostgreSQL", "LLM APIs"],
    outcome: "Removed repeated handoffs and kept context tied to each request.",
    image: null,
  },
];

export const ventureProjects = [
  {
    title: "Blueprint Notes",
    tagline:
      "A private capture space for ideas, prompts, snippets, and implementation notes before they scatter.",
    bullets: [
      "Fast note capture",
      "Reusable templates",
      "Searchable by project",
    ],
    tags: ["React", "Node.js", "Local-first"],
    image: "/john-mcarthur-ROQzKIAdY78-unsplash.jpg",
    href: "https://github.com/puneetkhatri99",
    linkLabel: "GitHub",
  },
  {
    title: "Ops Radar",
    tagline:
      "A lightweight view for deploy status, log spikes, and the small moments that matter during release day.",
    bullets: [
      "Status timeline",
      "Quick incident notes",
      "Deploy snapshots",
    ],
    tags: ["Bash", "PostgreSQL", "API-driven"],
    image: "/thomas-bormans-pcpsVsyFp_s-unsplash.jpg",
    href: "http://www.linkedin.com/in/puneetsehgal0205",
    linkLabel: "LinkedIn",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "Clarify the actual problem, the product boundary, and the real constraint before touching implementation.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "Choose the smallest structure that keeps state, services, and presentation separated cleanly.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Implement in focused slices so UI, data flow, and business logic stay readable and testable.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "Validate the happy path and edge cases, then ship with clear environmental boundaries.",
  },
  {
    step: "05",
    title: "Scale",
    description:
      "Refine based on usage, remove friction, and keep the system easy to extend without rewrites.",
  },
];

export const aboutWords = ["Builder.", "Engineer.", "Problem Solver."];

export { heroImage };
