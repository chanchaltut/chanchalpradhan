export const site = {
  name: "Chanchal Pradhan",
  firstName: "Chanchal",
  url: "https://chanchalpradhan.com",
  domain: "chanchalpradhan.com",
  title: "Full Stack AI Engineer",
  location: "Kolkata, India",
  timezone: "Asia/Kolkata",
  email: "contact@chanchalpradhan.com",
  resume: "/ChanchalPradhanRESUME.pdf",
  roles: [
    "Full Stack AI Engineer",
    "Founder at Heart",
    "Product Engineer",
    "AI Pipeline Builder",
    "Detail Obsessed",
  ],
  now: { label: "Building VAYU", href: "https://vayuai.vercel.app" },
  socials: {
    github: "https://github.com/chanchaltut",
    linkedin: "https://www.linkedin.com/in/chanchalpradhan/",
    x: "https://x.com/chanchaltut",
  },
  twitter: "@chanchaltut",
  description:
    "Chanchal Pradhan is a Full Stack AI Engineer from Kolkata, India, building intelligent, production-ready products with Next.js, TypeScript, Node.js, Google Cloud and Gemini AI.",
  // One self-contained paragraph that answer engines can quote verbatim.
  summary:
    "Chanchal Pradhan is a Full Stack AI Engineer based in Kolkata, India. Chanchal builds production-ready web products that combine modern web technologies with AI: multimodal pipelines on Gemini, BigQuery and Google Cloud, and full-stack SaaS and marketplace platforms on Next.js, React, Node.js, MongoDB and PostgreSQL. Chanchal co-founded and ran the development agency Code Your Idea as CEO, delivering 10+ products, previously worked remotely as a Full Stack Web Developer for Klero Généalogie in France, and is currently building VAYU, an AI-powered environmental intelligence platform. Chanchal studies Electronics and Communication Engineering at the University of Kalyani (GPA 8.78/10).",
  keywords: [
    "Chanchal Pradhan",
    "Full Stack AI Engineer",
    "AI Engineer Kolkata",
    "Full Stack Developer India",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Gemini API Developer",
    "LLM Integration",
    "AI Pipelines",
    "Google Cloud",
    "BigQuery",
    "Code Your Idea",
    "VAYU",
    "Hire Full Stack AI Engineer",
  ],
};

export type TechKey = keyof typeof tech;

// `mono` icons are single-colour marks rendered through a CSS mask so they follow the theme.
export const tech = {
  typescript: { name: "TypeScript", src: "/icons/typescript.svg" },
  javascript: { name: "JavaScript", src: "/icons/javascript.svg" },
  python: { name: "Python", src: "/icons/python.svg" },
  cpp: { name: "C++", src: "/icons/cpp.svg" },
  react: { name: "React", src: "/icons/react.svg" },
  nextjs: { name: "Next.js", src: "/icons/nextjs.svg", mono: true },
  tailwind: { name: "Tailwind CSS", src: "/icons/tailwind.svg" },
  nodejs: { name: "Node.js", src: "/icons/nodejs.svg" },
  express: { name: "Express.js", src: "/icons/express.svg", mono: true },
  mongodb: { name: "MongoDB", src: "/icons/mongodb.svg" },
  postgresql: { name: "PostgreSQL", src: "/icons/postgresql.svg" },
  firebase: { name: "Firebase", src: "/icons/firebase.svg" },
  gcp: { name: "Google Cloud", src: "/icons/gcp.svg" },
  bigquery: { name: "BigQuery", src: "/icons/bigquery.svg", color: "#669DF6" },
  gemini: { name: "Gemini API", src: "/icons/gemini.svg", color: "#8E75F2" },
  openai: { name: "OpenAI API", src: "/icons/openai.svg", mono: true },
  anthropic: { name: "Claude API", src: "/icons/anthropic.svg", color: "#D97757" },
  maps: { name: "Google Maps Platform", src: "/icons/googlemaps.svg", color: "#34A853" },
  figma: { name: "Figma", src: "/icons/figma.svg" },
  git: { name: "Git", src: "/icons/git.svg" },
  github: { name: "GitHub", src: "/icons/github.svg", mono: true },
  vercel: { name: "Vercel", src: "/icons/vercel.svg", mono: true },
  render: { name: "Render", src: "/icons/render.svg", mono: true },
  railway: { name: "Railway", src: "/icons/railway.svg", mono: true },
  nginx: { name: "Nginx / VPS", src: "/icons/nginx.svg", color: "#009639" },
  linux: { name: "Linux", src: "/icons/linux.svg" },
} satisfies Record<string, { name: string; src: string; mono?: boolean; color?: string }>;

export const stack: TechKey[] = [
  "typescript",
  "javascript",
  "python",
  "cpp",
  "react",
  "nextjs",
  "tailwind",
  "nodejs",
  "express",
  "mongodb",
  "postgresql",
  "firebase",
  "gcp",
  "bigquery",
  "gemini",
  "openai",
  "anthropic",
  "figma",
  "git",
  "github",
  "vercel",
  "render",
  "railway",
  "nginx",
  "linux",
];

export const stats = [
  { value: "10+", label: "Products shipped" },
  { value: "15+", label: "REST APIs built" },
  { value: "2", label: "Countries served" },
  { value: "8.78", label: "GPA / 10" },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  image?: string;
  // CSS object-position for the cover crop; defaults to "top".
  imagePosition?: string;
  live?: string;
  repo?: string;
  status?: string;
  tech: TechKey[];
};

export const projects: Project[] = [
  {
    name: "VAYU",
    tagline: "AI Environmental Intelligence",
    description:
      "Fuses IoT sensor streams with citizen-reported imagery to detect pollution hotspots, analyse images with Gemini Vision and forecast AQI in real time.",
    image: "/projects/vayu.webp",
    live: "https://vayuai.vercel.app",
    repo: "https://github.com/chanchaltut/vayu",
    status: "Ongoing",
    tech: ["nextjs", "typescript", "gemini", "bigquery", "firebase", "gcp", "maps", "python", "cpp"],
  },
  {
    name: "Rentyaard",
    tagline: "Property Rental Marketplace",
    description:
      "A full property rental and real-estate platform in the mould of 99acres and housing.com, with scalable listing models, auth and fast search filtering.",
    image: "/projects/rentyaard.webp",
    imagePosition: "left top",
    live: "https://rentyaard.vercel.app",
    tech: ["mongodb", "express", "react", "nodejs"],
  },
  {
    name: "Code Your Idea",
    tagline: "Web & App Development Agency",
    description:
      "The agency I co-founded and ran as CEO, delivering 10+ SaaS and marketplace products for clients end-to-end.",
    image: "/projects/codeyouridea.webp",
    live: "https://codeyouridea.com",
    repo: "https://github.com/chanchaltut/Code-Your-Idea",
    tech: ["react", "javascript", "figma", "vercel"],
  },
  {
    name: "TaxByCA",
    tagline: "Tax & Compliance Platform",
    description:
      "Online home for a chartered accountancy firm serving clients across India: tax, GST, audit and registration services with a consultation funnel and WhatsApp lead capture.",
    image: "/projects/taxbyca.webp",
    live: "https://taxbyca.in",
    repo: "https://github.com/chanchaltut/TaxByCA",
    tech: ["react", "javascript", "figma"],
  },
];

export const moreWork = [
  {
    name: "Verde Vista Farm & Resort",
    kind: "Hospitality · Booking site",
    href: "https://verdevistafarmandresort.vercel.app",
  },
  { name: "RCTI", kind: "EdTech · Training institute site", href: "https://www.rcti.swagatodisha.com" },
  { name: "Klero Généalogie", kind: "SaaS · Genealogy platform", href: "https://klero.vercel.app" },
  {
    name: "SharkMind",
    kind: "AI · Shark Tank-style startup validator",
    href: "https://github.com/chanchaltut/sharkmind",
  },
  {
    name: "MPLADS Tracker",
    kind: "Smart India Hackathon · Gov-tech",
    href: "https://github.com/chanchaltut/SIH26102_MPLADS",
  },
  {
    name: "ScriptoGeeks",
    kind: "Community · Coding club, Univ. of Kalyani",
    href: "https://scriptogeeks.netlify.app",
  },
];

export type Role = {
  title: string;
  company: string;
  href?: string;
  period: string;
  place: string;
  summary: string;
  points: string[];
  tech: TechKey[];
};

export const experience: Role[] = [
  {
    title: "Co-Founder & CEO",
    company: "Code Your Idea",
    href: "https://codeyouridea.com",
    period: "Jun 2025 — Mar 2026",
    place: "Kolkata, India · On-site",
    summary:
      "Co-founded a web and app development agency and led full-stack delivery of 10+ SaaS and marketplace products.",
    points: [
      "Owned client relationships, technical sales and business strategy from first call to launch",
      "Oversaw engineering execution alongside a technical co-founder across React, Next.js, Node.js and MongoDB",
    ],
    tech: ["nextjs", "react", "nodejs", "mongodb", "tailwind"],
  },
  {
    title: "Full Stack Web Developer",
    company: "Klero Généalogie",
    href: "https://klero.vercel.app",
    period: "Mar 2025 — May 2025",
    place: "France · Remote",
    summary:
      "Built the interface and API layer of Klero, a French family-history platform.",
    points: [
      "Engineered responsive, dynamic UIs in React and TypeScript",
      "Developed 15+ RESTful APIs in Node.js to manage front-to-back data flow",
      "Managed server operations and VPS deployment for high performance and reliability",
    ],
    tech: ["react", "typescript", "tailwind", "nodejs", "postgresql", "nginx"],
  },
];

export const education = {
  school: "University of Kalyani",
  degree: "B.Tech, Electronics & Communication Engineering",
  period: "2024 — 2028",
  place: "West Bengal, India",
  gpa: "8.78 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Artificial Neural Networks",
    "Database Management Systems",
    "Soft Computing",
  ],
};

// Visible on the page and mirrored in FAQPage structured data, so answers stay identical.
export const faqs = [
  {
    q: "Who is Chanchal Pradhan?",
    a: "Chanchal Pradhan is a Full Stack AI Engineer from Kolkata, India, who builds production-ready web products that combine modern web technologies with AI. Chanchal co-founded the development agency Code Your Idea and is currently building VAYU, an AI-powered environmental intelligence platform.",
  },
  {
    q: "What does Chanchal Pradhan specialise in?",
    a: "Full-stack product engineering with AI built in: multimodal AI pipelines with Gemini Vision, real-time data pipelines on BigQuery and Google Cloud, LLM integration with the Gemini, OpenAI and Claude APIs, and scalable web apps on Next.js, React, Node.js, MongoDB and PostgreSQL.",
  },
  {
    q: "What has Chanchal Pradhan built?",
    a: "VAYU, which fuses IoT sensor data with citizen-reported images to detect pollution hotspots and forecast AQI; Rentyaard, a property rental marketplace; and 10+ SaaS and marketplace products delivered for clients through Code Your Idea, including platforms for hospitality, tax compliance, education and genealogy.",
  },
  {
    q: "Is Chanchal Pradhan available for hire?",
    a: "Yes. Chanchal is open to full-time roles, internships and freelance projects, remote or in Kolkata, and usually replies within 24 hours.",
  },
  {
    q: "How can I contact Chanchal Pradhan?",
    a: "Email contact@chanchalpradhan.com, use the contact form on chanchalpradhan.com, or connect on LinkedIn at linkedin.com/in/chanchalpradhan.",
  },
];
