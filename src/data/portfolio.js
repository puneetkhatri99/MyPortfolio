import heroImage from "../assets/hero.png";

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
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Projects Shipped" },
  { value: "15+", label: "Technologies Used" },
  { value: "8+", label: "Systems Built" },
];

export const experienceEntries = [
  {
    date: "MAR 2026 - Present",
    title: "Software Engineer",
    company: "LOAM IT Solutions",
    location: "Noida, India",
    description:
      "Building API-first tools, AI-assisted workflows, and small systems that need to stay reliable after launch.",
    badge: "Current",
  },
  {
    date: "JUN 2025 -  AUG 2025",
    title: "Software Engineer Intern",
    company: "Product Experiments",
    location: "India / Remote",
    description:
      "Turned ideas into polished web apps by connecting interfaces, data layers, and lightweight deployment flows.",
    badge: "Completed",
  }
];

export const stackLayers = [
  {
    layer: "Layer 01",
    title: "Backend & APIs",
    skills: [
      "FastAPI",
      "Django",
      "Node.js",
      "Express.js",
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
    title: "AI & Automation",
    skills: [
      "LangChain",
      "LangGraph",
      "LLM Workflows",
      "Prompt Design",
      "Retrieval Pipelines",
      "Context Engineering",
      "Automation",
      "Evaluation Loops",
    ],
  },
  {
    layer: "Layer 03",
    title: "Frontend & Product",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Component Systems",
      "Responsive UI",
      "Accessibility",
      "UI/UX Design",
      "Product Thinking",
    ],
  },
  {
    layer: "Layer 04",
    title: "Cloud & DevOps",
    skills: [
      "Linux",
      "Bash",
      "Docker",
      "Deployment",
      "Logging",
      "Monitoring",
    ],
  }
];

export const workProjects = [
  {
    category: "Research Intelligence / AI",
    title: "Limbus",
    description:
      "A research intelligence platform that connects medical, patent, FDA, PubMed, clinical trial, and scientific records into one searchable system for company-level research.",
    tech: [
      "React",
      "Django",
      "MongoDB",
      "ETL",
      "AI Embeddings",
      "Semantic Search",
    ],
    outcome:
      "Enabled researchers to search companies, explore linked records, download CSVs, save searches, and use AI-assisted company profiling across messy public datasets.",
    image: null,
  },
  {
    category: "Weather / AI Forecasting",
    title: "Nagaland Weather Forecasting System",
    description:
      "An official weather forecasting system for Nagaland that uses GraphCast models and HRES weather data to generate weather predictions for up to 14 days.",
    tech: [
      "GraphCast",
      "HRES Data",
      "Python",
      "Weather Forecasting",
      "Data Pipelines",
      "Visualization",
    ],
    outcome:
      "Supported medium-range weather forecasting by combining model-driven predictions with structured weather data pipelines.",
    image: null,
  },
  {
    category: "AI / ETL",
    title: "Resume ETL Pipeline",
    description:
      "An AI-powered resume processing pipeline that accepts resumes in different formats and languages, extracts structured candidate data, and stores it for admin review.",
    tech: [
      "AI Extraction",
      "ETL",
      "Resume Parsing",
      "ATS Scoring",
      "Skill Matching",
      "Admin Dashboard",
    ],
    outcome:
      "Helped admins download candidate data, check ATS scores, and sort resumes by skill relevance.",
    image: null,
  }
];

export const ventureProjects = [
  {
    title: "Herbs Business Website",
    tagline:
      "A production-grade React website for a family ayurvedic herbs business, built to showcase products, collect inquiries, and manage customer orders without a full e-commerce flow.",
    bullets: [
      "Searchable catalog of 100+ herbal products",
      "Customer inquiries through email and WhatsApp",
      "Feedback collection and article publishing",
      "Private dashboard for order tracking",
    ],
    tags: [
      "React",
      "Product Catalog",
      "Search",
      "Admin Dashboard",
      "Order Tracking",
    ],
    image: "herbs.png",
    href: "https://shreeramherbs.netlify.app/",
    linkLabel: "Live Demo",
  },
  {
  title: "Real-Time Chat App",
  tagline:
    "A full-stack real-time messaging platform with private chats, group conversations, typing indicators, notifications, and admin controls.",
  bullets: [
    "Built private and group messaging with real-time updates",
    "Added typing indicators and notification flows using Socket.IO",
    "Designed an admin panel for chat and user management",
    "Managed global app state with Redux Toolkit",
  ],
  tags: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Redux Toolkit",
    "Socket.IO",
    "MUI",
  ],
  image: "chat.png",
  href: "https://connected-one.vercel.app/",
  linkLabel: "Live Demo",
},
{
  title: "Prompt Enhancer",
  tagline:
    "A Chrome Extension that improves ChatGPT prompts using OpenAI APIs to generate clearer, more structured, and context-rich instructions.",
  bullets: [
    "Built a Manifest V3 Chrome Extension for prompt enhancement",
    "Used OpenAI APIs to rewrite prompts with better clarity and context",
    "Implemented browser-side workflows with content scripts",
    "Injected optimized prompt responses into the active page in real time",
  ],
  tags: [
    "Chrome Extension",
    "Manifest V3",
    "JavaScript",
    "OpenAI API",
    "Content Scripts",
    "Browser APIs",
  ],
  image: "prompt.png",
  href: "https://chromewebstore.google.com/detail/prompt-enhancer/heaoakpoopckdafonkbeifkkofhhjaob?utm_source=item-share-cb",
  linkLabel: "Live Demo",
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
