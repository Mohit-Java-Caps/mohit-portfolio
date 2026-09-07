// Single content source for the portfolio.
// Every claim, number and date here is traceable to Mohit's resume
// (Mohit_Kumar_Java_FullStack_Engineer_23Jul2026_2.pdf). Nothing invented.

export const personal = {
  name: "Mohit Kumar",
  firstName: "Mohit",
  lastName: "Kumar",
  role: "Java Full-Stack Engineer",
  title: "Associate — Full-Stack Engineer",
  tagline: "Building systems that survive beyond the happy path.",
  subTagline:
    "Java Full-Stack Engineer specialising in cloud-native microservices, event-driven data pipelines and Gen-AI integration.",
  location: "India · Open to relocation",
  company: "Cognizant",
  client: "NextEra Energy (Florida Power & Light), USA",
  clientDomain: "Energy & Utilities",
  tenure: "3+ years",
  email: "mohitlogin72@gmail.com",
  github: "https://github.com/Mohit-Java-Caps",
  linkedin: "https://www.linkedin.com/in/mohit-kumar-dev",
  leetcode: "https://leetcode.com/u/Mohit_72/",
  resumeUrl: `${process.env.PUBLIC_URL || ""}/Mohit_Kumar_Java_FullStack_Engineer_23Jul2026_2.pdf`,
  resumeFileName: "Mohit_Kumar_Java_FullStack_Engineer.pdf",
  photo: `${process.env.PUBLIC_URL || ""}/mohit-kumar.jpg`,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Identity", href: "#identity" },
  { label: "Systems", href: "#systems" },
  { label: "Work", href: "#work" },
  { label: "AI Lab", href: "#ai-lab" },
  { label: "Mindset", href: "#mindset" },
  { label: "Journey", href: "#journey" },
  { label: "Connect", href: "#connect" },
];

export const heroStats = [
  { value: "25%", label: "Query perf gain" },
  { value: "15%", label: "AWS cost reduced" },
  { value: "8.3K+", label: "Files processed / day" },
  { value: "800+", label: "DSA problems solved" },
];

export const identityHighlights = [
  "Java Full-Stack Engineer, 3+ years, currently Associate at Cognizant on the NextEra Energy (Florida Power & Light) account.",
  "Builds cloud-native microservices on Java 17 + Spring Boot 3.x and event-driven pipelines on AWS.",
  "Comfortable end-to-end: Angular on the front, Postgres/Mongo on the back, Spark/Kafka in between.",
  "Currently extending that backend foundation with Gen-AI — Databricks GenAI Associate, AWS AI Practitioner.",
];

// Chapter 02 — Systems. Rendered top (most abstract) to bottom (foundation).
export const stackLayers = [
  {
    id: "ai",
    title: "AI / LLM",
    technologies: ["AWS Bedrock", "RAG", "Vector Databases", "Embeddings", "Prompt Engineering", "MLflow", "Databricks"],
    useFor: "Adding generative capability on top of already-working systems — retrieval, structured extraction, natural-language interfaces.",
    project: "calorie-tracker",
  },
  {
    id: "data",
    title: "Data Engineering",
    technologies: ["Apache Spark", "Kafka", "Event-Driven Architecture", "AWS SNS", "AWS SQS"],
    useFor: "Turning high-volume raw files into queryable, trustworthy data on a fixed time budget.",
    project: "energy-pipeline",
  },
  {
    id: "distributed",
    title: "Distributed Systems",
    technologies: ["Microservices", "Spring Cloud", "API Gateway", "Circuit Breaker", "Saga", "Retry / Resilience"],
    useFor: "Keeping independently-deployed services correct when part of the system is slow or down.",
    project: "jvm-internals",
  },
  {
    id: "cloud",
    title: "Cloud / AWS",
    technologies: ["EC2", "ECS", "S3", "Lambda", "RDS", "SNS", "SQS"],
    useFor: "Running and scaling everything above without owning hardware or babysitting capacity.",
    project: "energy-pipeline",
  },
  {
    id: "backend",
    title: "Backend / Java",
    technologies: ["Java 17", "Spring Boot 3.x", "Spring Security", "Spring Data JPA", "Hibernate", "REST", "JWT / OAuth 2.0"],
    useFor: "The load-bearing layer — APIs, business logic, authentication and authorization.",
    project: "url-shortener",
  },
  {
    id: "databases",
    title: "Databases",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    useFor: "Persistence, indexing strategy and query performance tuning.",
    project: "energy-pipeline",
  },
];

// Chapter 03 — Work, as "incident report" case studies.
export const caseStudies = [
  {
    id: "energy-pipeline",
    flagship: true,
    tag: "Flagship · Data Platform",
    title: "Energy Data Pipeline",
    org: "NextEra Energy (Florida Power & Light), USA",
    problem:
      "Solar-inverter telemetry arrives as a high volume of files every day. It needs to be ingested, transformed and made queryable for downstream applications — reliably, without manual reprocessing when something fails partway through.",
    architecture: {
      nodes: [
        { id: "s3", label: "S3", detail: "Raw inverter files land here first. Durable, cheap storage that decouples ingestion from processing." },
        { id: "sns", label: "SNS", detail: "New-object events fan out from S3 to trigger processing — no polling, no idle workers." },
        { id: "spark", label: "Spark", detail: "Batch jobs transform 8,300+ files/day (35 columns × 1,440 records) end-to-end in under 75 minutes." },
        { id: "rds", label: "RDS", detail: "Aggregated results persist to PostgreSQL, with indexing and connection pooling tuned for read-heavy access — 25% faster queries." },
        { id: "sqs", label: "SQS", detail: "Queues decouple processing completion from downstream consumers, absorbing bursts without dropping work." },
        { id: "api", label: "REST API", detail: "Spring Boot services expose the processed data to the application layer." },
      ],
      edges: ["s3", "sns", "spark", "rds", "sqs", "api"],
    },
    decisions: [
      { q: "Why event-driven?", a: "Polling S3 for 8,300+ files/day doesn't scale and adds latency. SNS → SQS means each stage reacts only when there's real work." },
      { q: "Why Spark for the batch step?", a: "Distributing the transform across a cluster is what keeps a 75-minute SLA achievable as file volume grows." },
      { q: "Why tune indexing/pooling instead of just scaling RDS?", a: "The bottleneck was query shape, not hardware — indexing and connection pooling recovered 25% without paying for a bigger instance." },
    ],
    implementation:
      "Java 17 + Spring Boot 3.x microservices with Factory/Builder patterns on the ingestion side; Hibernate/JPA with tuned indexing and connection pooling on the persistence side; ECS running the orchestration.",
    challenge: "No room for manual reprocessing if a batch job failed partway through a day's file volume.",
    optimization: "Query tuning, indexing and connection-pool sizing on PostgreSQL/RDS; schema and resource right-sizing across the pipeline.",
    result: [
      { value: "25%", label: "Query performance gain" },
      { value: "15%", label: "AWS cost reduction" },
      { value: "8,300+", label: "Files processed / day" },
      { value: "<75 min", label: "End-to-end batch completion" },
    ],
    stack: ["Java 17", "Spring Boot 3.x", "AWS S3", "SNS", "SQS", "ECS", "Apache Spark", "PostgreSQL", "Hibernate/JPA"],
  },
  {
    id: "url-shortener",
    tag: "Backend · Auth",
    title: "URL Shortener Platform",
    org: "Personal project",
    problem: "Build a multi-tenant URL shortener with real authorization — not just a redirect table behind an API key.",
    decisions: [
      { q: "Why the Factory pattern for encoding?", a: "It keeps the URL-encoding strategy swappable without touching the callers that use it." },
    ],
    implementation:
      "Spring Boot 3.x, MVC layered architecture, SOLID principles, Factory pattern for the URL-encoding strategy. JWT + OAuth 2.0 authentication with role-based access control via Spring Security. Documented with Swagger/OpenAPI.",
    result: [{ value: "<50ms", label: "API response time (query-optimised)" }],
    stack: ["Java 17", "Spring Boot 3.x", "Spring Security", "JPA/Hibernate", "PostgreSQL", "Maven"],
    github: "https://github.com/Mohit-Java-Caps",
  },
  {
    id: "calorie-tracker",
    tag: "Gen-AI · Full-Stack",
    title: "AI-Based Calorie Tracker",
    org: "Personal project",
    problem: "Manual meal-logging is tedious enough that most people abandon calorie tracking within days.",
    implementation:
      "Angular front-end + Spring Boot backend + MongoDB, integrating Generative AI/LLM APIs for automated food detection and structured nutrition extraction from a natural-language meal description. Event-driven updates power a live calorie dashboard.",
    result: [{ value: "90%+", label: "Food-detection accuracy" }],
    stack: ["Angular", "Spring Boot", "MongoDB", "Gen-AI / LLM API", "Docker"],
    github: "https://github.com/Mohit-Java-Caps",
    aiLabLink: true,
  },
  {
    id: "jvm-internals",
    tag: "Systems · Resilience",
    title: "JVM Internals & Microservices Architecture Patterns",
    org: "Personal project",
    problem: "Pattern names like Circuit Breaker and Saga are easy to recite and easy to misapply without understanding the failure mode they exist to survive.",
    implementation:
      "Production-grade microservices patterns implemented directly — API Gateway, Circuit Breaker, Saga orchestration and Retry/Resilience strategies, built on Spring Cloud.",
    result: [{ value: "4 patterns", label: "API Gateway · Circuit Breaker · Saga · Retry" }],
    stack: ["Java 17", "Spring Cloud", "System Design", "Distributed Systems"],
    github: "https://github.com/mohit-java-caps/microservices-architecture-patterns",
  },
];

// Chapter 04 — AI Lab. Framed as capability/literacy, not a shipped production RAG claim.
export const ragStages = [
  { id: "query", label: "Query", explanation: "A user, or an internal tool, asks a question in plain language." },
  { id: "processing", label: "Processing", explanation: "The query is cleaned and normalised before anything expensive happens to it." },
  { id: "embedding", label: "Embedding", explanation: "The processed query becomes a vector — a numeric representation of its meaning." },
  { id: "vector-search", label: "Vector Search", explanation: "That vector is compared against a vector database to find the most semantically similar stored content." },
  { id: "retrieval", label: "Retrieval", explanation: "The top matches come back as raw candidate context — not yet filtered or ranked." },
  { id: "context", label: "Context", explanation: "Retrieved content is assembled into a bounded context window the model can actually use." },
  { id: "llm", label: "LLM", explanation: "The model reasons over the query and the retrieved context — via a hosted model such as AWS Bedrock — instead of relying on memory alone." },
  { id: "response", label: "Response", explanation: "A grounded answer is returned, ideally traceable back to its source." },
  { id: "evaluation", label: "Evaluation", explanation: "Output gets checked against expected behaviour — where MLflow-tracked experiments and prompt-engineering iteration earn their keep." },
];

export const ragCapabilityNote =
  "This isn't just a diagram — the chat widget in the corner of this site is a real, working version of this exact pipeline, retrieving from this portfolio's own verified data before generating an answer. Built on RAG/GenAI literacy from the Databricks GenAI Associate and AWS AI Practitioner certifications. It is not a claim of a production RAG system at Cognizant — that distinction stays accurate.";

export const ragTech = ["AWS Bedrock", "RAG", "Embeddings", "Vector DB", "MLflow", "Databricks", "Prompt Engineering"];

// Chapter 05 — Engineering Mindset.
export const principles = [
  {
    id: "measure",
    title: "Measure before optimizing",
    example: "The 25% query-performance gain came from profiling and indexing — not a guess-and-check pass on the database.",
  },
  {
    id: "failure",
    title: "Design for failure",
    example: "SNS → SQS decouples pipeline stages so one slow consumer can't take down ingestion; Circuit Breaker and Retry patterns do the same at the service level.",
  },
  {
    id: "observability",
    title: "Observability belongs in the architecture",
    example: "The 15% AWS cost reduction came from being able to see where time and money were actually going — not from switching services on faith.",
  },
  {
    id: "abstraction",
    title: "Choose the right abstraction, not the cleverest one",
    example: "The Factory pattern in the URL Shortener exists to make one specific thing — the encoding strategy — swappable. Nothing more.",
  },
  {
    id: "ai-purpose",
    title: "AI should solve a problem, not decorate a product",
    example: "The Calorie Tracker's Gen-AI layer exists to remove manual food-logging friction. The AI is the mechanism, not the pitch.",
  },
  {
    id: "system-perf",
    title: "Performance is a system property",
    example: "Sub-75-minute pipeline completion and sub-50ms API response both came from tuning end-to-end — indexing, pooling, query shape — not one component in isolation.",
  },
];

// Chapter 06 — Journey. Dates are exactly as stated on the resume.
export const journey = [
  {
    date: "Feb 2023",
    title: "Java Full-Stack Engineer Trainee",
    place: "Cognizant · Pune, India",
    detail: "Spring Boot 3.x microservices (MVC/SOLID) with an Angular front-end; CI/CD via Jenkins + GitHub Actions; JUnit 5/Mockito TDD cut deployment time by 30%.",
  },
  {
    date: "Sep 2023",
    title: "Promoted → Associate, Full-Stack Engineer",
    place: "Cognizant · Kolkata, India",
    detail: "Promoted from Trainee to Associate based on delivery. Moved onto the NextEra Energy (Florida Power & Light) account.",
  },
  {
    date: "Sep 2023 – Present",
    title: "Distributed systems & data pipelines",
    place: "NextEra Energy engagement",
    detail: "Event-driven AWS pipeline, Apache Spark batch processing, PostgreSQL/RDS tuning — 25% query gain, 15% cost reduction.",
  },
  {
    date: "Jul 2026",
    title: "Cognizant \"Raising the Bar\" Award — AI Excellence & Continuous Learning",
    place: "Cognizant",
    detail: "Manager-nominated for the Databricks GenAI, Claude Architect Foundation and Agentic AI certifications, and for delivering impactful AI solutions.",
  },
];

// Chapter 07 — Problem Solving.
export const dsaCategories = ["Arrays", "Strings", "Trees", "Graphs", "Dynamic Programming", "System Design", "Java", "SQL"];

export const dsaStats = {
  solved: "800+",
  rating: "LeetCode 4★",
  gfg: "GeeksforGeeks Rank #3 (2000+)",
};

// Verified Capabilities.
export const certifications = [
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
  { title: "AWS AI Practitioner", issuer: "Amazon Web Services" },
  { title: "Databricks GenAI Engineer Associate", issuer: "Databricks" },
  { title: "GitHub Copilot Certified", issuer: "GitHub" },
  { title: "Claude Certified Architect Foundation", issuer: "Anthropic" },
];

export const minorCertifications = [
  { title: "Java Full Stack Certification", issuer: "Cognizant" },
  { title: "SQL Certification", issuer: "Great Learning" },
];

export const cognizantAward = {
  title: "\"Raising the Bar\" — AI Excellence & Continuous Learning",
  date: "Jul 2026",
  detail: "Manager-nominated for Databricks GenAI, Claude Architect Foundation & Agentic AI certifications; recognised for proactive upskilling and delivering impactful AI solutions.",
};

// Chapter — Source Code. Blurbs summarise each repo's own README, not invented.
export const sourceRepos = [
  {
    name: "ask-my-portfolio",
    url: "https://github.com/Mohit-Java-Caps/ask-my-portfolio",
    language: "JavaScript",
    blurb: "A RAG chatbot embedded in this site (bottom-right) — TF-IDF retrieval over this portfolio's own verified data, Groq for generation. Ask it something.",
  },
  {
    name: "microservices-architecture-patterns",
    url: "https://github.com/mohit-java-caps/microservices-architecture-patterns",
    language: "Java",
    blurb: "Why microservices patterns exist, not just their names — API Gateway, Circuit Breaker, Saga, Service Discovery, Observability.",
  },
  {
    name: "system-design-case-studies",
    url: "https://github.com/mohit-java-caps/system-design-case-studies",
    language: "Java",
    blurb: "End-to-end system design case studies built on an 8-step trade-off framework, not box-drawing.",
  },
  {
    name: "backend-production-scenarios",
    url: "https://github.com/mohit-java-caps/backend-production-scenarios",
    language: "Java",
    blurb: "Real production-debugging scenarios: slow APIs, DB connection storms, memory leaks, Kafka lag, thread-pool exhaustion.",
  },
  {
    name: "database-design-and-performance",
    url: "https://github.com/mohit-java-caps/database-design-and-performance",
    language: "Java",
    blurb: "Data modeling, indexing, query optimization and scaling — the database treated as architecture, not just storage.",
  },
  {
    name: "jvm-heap-memory-management",
    url: "https://github.com/mohit-java-caps/jvm-heap-memory-management",
    language: "Java",
    blurb: "Generational GC, object lifecycle, Serial/Parallel/CMS/G1 — JVM memory concepts over tool trivia.",
  },
  {
    name: "algorithm-visualizer",
    url: "https://github.com/mohit-java-caps/algorithm-visualizer",
    language: "HTML",
    blurb: "Live sorting visualizer — 8 algorithms, real-time stats, zero dependencies.",
  },
];

export const socials = [
  { id: "github", label: "GitHub", href: personal.github, icon: "Github" },
  { id: "linkedin", label: "LinkedIn", href: personal.linkedin, icon: "Linkedin" },
  { id: "email", label: "Email", href: `mailto:${personal.email}`, icon: "Mail" },
  { id: "leetcode", label: "LeetCode", href: personal.leetcode, icon: "Code2" },
];
