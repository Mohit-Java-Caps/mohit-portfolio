// Mock data for Mohit Kumar's Portfolio
// All static content lives here so backend integration is trivial later.

export const personal = {
  name: "Mohit Kumar",
  firstName: "Mohit",
  lastName: "Kumar",
  role: "Java Full Stack Engineer",
  tagline: "Building scalable systems that process millions of records efficiently.",
  subTagline:
    "2.5+ years engineering cloud-native microservices, distributed pipelines, and high-impact backend platforms.",
  location: "India · Working with NextEra Energy, USA",
  company: "Cognizant",
  client: "NextEra Energy, USA",
  email: "mohitlogin72@gmail.com",
  github: "https://github.com/Mohit-Java-Caps",
  linkedin: "https://www.linkedin.com/in/mohit-kumar-dev",
  resumeUrl: "#",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "25%", label: "Query perf gain" },
  { value: "15%", label: "AWS cost reduced" },
  { value: "8.3K+", label: "Files processed daily" },
  { value: "800+", label: "DSA problems solved" },
];

export const aboutHighlights = [
  "Specialised in scalable, cloud-native backend systems built on Java + Spring Boot.",
  "Designed event-driven pipelines on AWS (S3, SNS, SQS, ECS) processing 8.3K+ files/day.",
  "Tuned PostgreSQL / MySQL workloads — 25% faster queries, 15% lower infra cost.",
  "Comfortable across the full stack with Angular, JavaScript and Gen-AI integrations.",
];

export const experiences = [
  {
    id: "exp-1",
    company: "Cognizant",
    client: "NextEra Energy, USA",
    role: "Associate Full Stack Engineer",
    period: "2022 — Present",
    location: "Remote · India",
    summary:
      "Building distributed microservices and AWS event-driven data pipelines for one of the largest renewable-energy producers in the world.",
    bullets: [
      "Architected microservices in Java + Spring Boot powering critical operational workflows.",
      "Designed an AWS event-driven pipeline (S3 → SNS → SQS → ECS) processing 8,300+ files daily.",
      "Implemented Apache Spark batch jobs for terabyte-scale analytical workloads.",
      "Optimised PostgreSQL queries and indexes — 25% latency reduction on hot paths.",
      "Right-sized AWS infrastructure, cutting monthly cloud spend by 15%.",
      "Collaborated with Angular front-end teams to ship end-to-end features in production.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "AWS",
      "Apache Spark",
      "Kafka",
      "PostgreSQL",
      "Angular",
      "Docker",
    ],
  },
];

export const projects = [
  {
    id: "proj-1",
    title: "URL Shortener Platform",
    blurb:
      "Production-grade URL shortener with JWT authentication, role-based access control and a clean REST API surface.",
    description:
      "A multi-tenant URL shortener built on Spring Boot. Features include JWT-based auth, role-based access control (admin / user), click analytics, custom aliases and a fully documented REST API.",
    tags: ["Backend", "Auth", "REST"],
    stack: ["Java", "Spring Boot", "JWT", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Auth", value: "JWT + RBAC" },
      { label: "API", value: "REST" },
      { label: "DB", value: "PostgreSQL" },
    ],
    github: "https://github.com/Mohit-Java-Caps",
    demo: null,
    accent: "from-blue-500/20 to-cyan-400/10",
  },
  {
    id: "proj-2",
    title: "AI-Based Calorie Tracker",
    blurb:
      "Gen-AI powered nutrition assistant that analyses meals and tracks daily calorie goals.",
    description:
      "Full-stack calorie tracker that pairs an Angular front-end with a Spring Boot backend and a Gen-AI service. Users describe a meal in natural language and the app returns structured nutrition data and historical insights.",
    tags: ["Gen-AI", "Full Stack", "Health"],
    stack: ["Angular", "Spring Boot", "MongoDB", "Gen-AI API"],
    metrics: [
      { label: "AI", value: "LLM API" },
      { label: "DB", value: "MongoDB" },
      { label: "UI", value: "Angular" },
    ],
    github: "https://github.com/Mohit-Java-Caps",
    demo: null,
    accent: "from-cyan-400/20 to-blue-500/10",
  },
];

export const skillGroups = [
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    items: ["Java", "Spring Boot", "Microservices", "REST APIs", "System Design"],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "Layout",
    items: ["Angular", "JavaScript", "HTML5", "CSS3", "Tailwind"],
  },
  {
    id: "cloud",
    title: "Cloud",
    icon: "Cloud",
    items: ["AWS S3", "EC2", "RDS", "SNS / SQS", "ECS"],
  },
  {
    id: "data",
    title: "Data",
    icon: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Apache Spark", "Kafka"],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: "Wrench",
    items: ["Docker", "Jenkins", "GitHub Actions", "Git", "Gen-AI APIs"],
  },
];

export const achievements = [
  {
    id: "ach-1",
    icon: "Code2",
    title: "800+ DSA Problems Solved",
    detail: "LeetCode 4★ rated · consistent contest participant.",
  },
  {
    id: "ach-2",
    icon: "Trophy",
    title: "GeeksforGeeks Rank #3",
    detail: "Top performer in institute-wide problem-solving leaderboard.",
  },
  {
    id: "ach-3",
    icon: "Award",
    title: "AWS Certified",
    detail: "Cloud fundamentals certification from Amazon Web Services.",
  },
  {
    id: "ach-4",
    icon: "Sparkles",
    title: "Databricks Certified",
    detail: "Lakehouse fundamentals — distributed data processing.",
  },
  {
    id: "ach-5",
    icon: "GitBranch",
    title: "GitHub Copilot Certified",
    detail: "Recognised proficiency in AI-assisted software engineering.",
  },
  {
    id: "ach-6",
    icon: "Zap",
    title: "Production Impact",
    detail: "Shipped optimisations saving 15% AWS spend across services.",
  },
];

export const socials = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Mohit-Java-Caps",
    icon: "Github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohit-kumar-dev",
    icon: "Linkedin",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:mohitlogin72@gmail.com",
    icon: "Mail",
  },
];
