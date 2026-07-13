export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  overview: string;
  contribution: string;
  technologies: string[];
  github: string;
  demo: string;
  screenshot: string;
  mobileScreenshot?: string;
  videoDemo?: string;
  featured: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link: string;
  image: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  isFeatured: boolean;
  achievements: string[];
  photos: string[];
}

export interface OrgExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  tasks: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  gpa: string;
  awards: string[];
}

export const navigationItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

export const profileDetails = {
  name: "Rafa'Na'ilah Septia",
  email: "rafasepti06@gmail.com",
  phone: "+6288215027255",
  linkedin: "https://linkedin.com/in/ranaise/",
  github: "https://github.com/ranaise/",
  education: "Sixth-semester Informatics student at Telkom University",
  interests: "Artificial Intelligence, Cyber Security, and building scalable real-time applications",
};

export const educationDetails: EducationItem = {
  institution: "Telkom University",
  degree: "Bachelor of Informatics",
  gpa: "3.73/4.00",
  awards: [
    "IdCloudHost Scholarship Awardee 2023",
    "Endowment Fund Scholarship Awardee 2025"
  ],
};

export const quickFacts = [
  "Informatics Student (GPA 3.73/4.00)",
  "Programming Intern at Medusa",
  "Scholarship Awardee 2023 & 2025",
  "Adaptive Network Lab Member",
];

export const experienceData: ExperienceItem[] = [
  {
    id: "medusa-tech",
    role: "Programming Intern",
    company: "Medusa Technology",
    location: "Jakarta, Indonesia",
    duration: "Jun 2026 - Aug 2026",
    isFeatured: true,
    achievements: [
      "Modified and repackaged the Firestorm Viewer (**C++, XML**) to create a custom, ready-to-use client that streamlines onboarding for new Metaverse users.",
      "Built a real-time virtual attendance API connecting in-game LSL scripts to external servers using **Python (FastAPI) and MariaDB**.",
      "Developed an **AI Auto-Moderator** using a local LLM (**Ollama, Qwen**) to automatically monitor chat logs, filter toxic content, and enforce moderation rules in real-time.",
      "Programmed interactive 3D in-world objects using **LSL**, including an optimized virtual fashion catalog that improves user inventory management without lagging the server."
    ],
    photos: ["/medusa/photo-1.jpg", "/medusa/photo-2.jpg"]
  }
];

export const orgExperienceData: OrgExperienceItem[] = [
  {
    id: "budi-pekerti",
    role: "Coordinator of Event Division",
    organization: "Team Budi Pekerti at Telkom University",
    duration: "Nov 2023 - Dec 2024",
    tasks: [
      "Coordinated character development programs promoting leadership, teamwork, and national values among scholarship recipients.",
      "Managed event planning and execution while collaborating with cross-functional student committees."
    ],
  },
  {
    id: "adaptive-network",
    role: "Study Group Member",
    organization: "Adaptive Network Laboratory at Telkom University",
    duration: "Oct 2023 - Dec 2023",
    tasks: [
      "Learned networking fundamentals including subnetting, VLAN, routing, Linux administration, and web server deployment.",
      "Built foundational Python programming skills covering OOP, inheritance, and scripting for networking applications."
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "nexevent-2026",
    title: "NexEvent",
    subtitle: "Campus Event Management Platform",
    year: "2026",
    overview: "Developed a campus event management platform featuring intelligent participant management, waitlist automation, geolocation-based event discovery, and QR attendance using Flutter, Laravel, and MySQL.",
    contribution: "Configured transaction reservation matrices in MySQL, managed Laravel API endpoints, and built user grid dashboards in Flutter.",
    technologies: ["Flutter", "Laravel", "MySQL"],
    github: "https://github.com/ranaise/NexEvent",
    demo: "",
    screenshot: "/projects/nexevent.jpg",
    mobileScreenshot: "/projects/nexevent-mobile.jpg",
    featured: true,
  },
  {
    id: "gpt-ner-2026",
    title: "GPT-NER",
    subtitle: "LLM-based Named Entity Recognition Application",
    year: "2026",
    overview: "Implemented an LLM-based Named Entity Recognition application using Python, Streamlit, Llama 3, and Groq API.",
    contribution: "Engineered prompt pipelines utilizing LangChain, integrated Llama 3 via Groq API, and configured Streamlit interface inputs.",
    technologies: ["Python", "Streamlit", "Llama 3", "Groq API"],
    github: "https://github.com/ranaise/GPT-NER",
    demo: "https://gpt-ner.streamlit.app/",
    screenshot: "/projects/gpt-ner.jpg",
    featured: false,
  },
  {
    id: "posyandu-pintar",
    title: "Posyandu Pintar",
    subtitle: "Child Growth Monitoring System with LLM Insights",
    year: "2026",
    overview: "Developed a child growth monitoring system with LLM-powered health insights using Next.js and TypeScript.",
    contribution: "Co-authored Next.js interactive chart wrappers, established TypeScript type contracts, and parsed JSON payload structures.",
    technologies: ["Next.js", "TypeScript", "LLM"],
    github: "https://github.com/ranaise/Posyandu_Pintar",
    demo: "https://posyandu-web-app.vercel.app",
    screenshot: "/projects/posyandu-ceria.jpg",
    featured: false,
  },
  {
    id: "microplast-2026",
    title: "Microplast",
    subtitle: "Automatic Microplastic Detection Web Application",
    year: "2026",
    overview: "Developed a web for automatic microplastic detection and measurement using Python, Streamlit, and OpenCV.",
    contribution: "Built image preprocessing pipelines using OpenCV, implemented PyTorch model checkpoints, and designed the Streamlit dashboard layout.",
    technologies: ["Python", "Streamlit", "OpenCV"],
    github: "https://github.com/ranaise/MicroPlast",
    demo: "https://microplast.streamlit.app/",
    screenshot: "/projects/microplast.jpg",
    featured: false,
  },
  {
    id: "my-dormitory-2025",
    title: "My Dormitory",
    subtitle: "Dormitory Management System",
    year: "2025",
    overview: "Developed a dormitory management system featuring QR-based attendance, resident management, and real-time monitoring using Flutter, Laravel, and MySQL.",
    contribution: "Designed allocation matrix routes in Laravel, structured MySQL query indexes, and built the mobile client using Flutter.",
    technologies: ["Flutter", "Laravel", "MySQL"],
    github: "https://github.com/ranaise/mydormitory",
    demo: "",
    screenshot: "/projects/mydormitory.png",
    featured: false,
  },
  {
    id: "telyutalks-2025",
    title: "TelyuTalks",
    subtitle: "Campus Q&A Platform",
    year: "2025",
    overview: "Developed a campus Q&A platform with voting and moderation feature using Spring Boot and MySQL.",
    contribution: "Configured API transaction paths in Spring Boot, co-designed relational tables in MySQL, and mapped query logs.",
    technologies: ["Spring Boot", "MySQL"],
    github: "https://github.com/ranaise/Telyutalks",
    demo: "",
    screenshot: "/projects/telyutalks.png",
    videoDemo: "/projects/telyutalks/telyutalks-demo.mp4",
    featured: false,
  },
];

export const hardSkillsCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", devicon: "python/python-original.svg" },
      { name: "C++", devicon: "cplusplus/cplusplus-original.svg" },
      { name: "Go", devicon: "go/go-original.svg" },
      { name: "Java", devicon: "java/java-original.svg" },
      { name: "PHP", devicon: "php/php-original.svg" },
      { name: "Dart", devicon: "dart/dart-original.svg" },
      { name: "Linden Scripting Language (LSL)", custom: true },
      { name: "HTML5", devicon: "html5/html5-original.svg" },
      { name: "CSS3", devicon: "css3/css3-original.svg" },
      { name: "XML", custom: true }
    ]
  },
  {
    title: "Frameworks & Platforms",
    skills: [
      { name: "FastAPI", devicon: "fastapi/fastapi-original.svg" },
      { name: "Java Spring Boot", devicon: "spring/spring-original.svg" },
      { name: "Laravel", devicon: "laravel/laravel-original.svg" },
      { name: "Flutter", devicon: "flutter/flutter-original.svg" },
      { name: "Next.js", devicon: "nextjs/nextjs-original.svg" },
      { name: "Streamlit", custom: true }
    ]
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MySQL", devicon: "mysql/mysql-original.svg" },
      { name: "PostgreSQL", devicon: "postgresql/postgresql-original.svg" },
      { name: "MariaDB", devicon: "mariadb/mariadb-original.svg" },
      { name: "Linux", devicon: "linux/linux-original.svg" },
      { name: "Figma", devicon: "figma/figma-original.svg" },
      { name: "Git", devicon: "git/git-original.svg" },
      { name: "Groq API", custom: true },
      { name: "OpenCV", devicon: "opencv/opencv-original.svg" }
    ]
  }
];

export const softSkillsList = [
  "Problem Solving",
  "Adaptability",
  "Teamwork",
  "Fast-learner",
  "Communication"
];

export const certificationsData: CertificationItem[] = [
  {
    id: "microsoft-azure-ai",
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "March 9, 2026",
    credentialId: "yEQV-DwW2",
    link: "https://verify.certiport.com",
    image: "/cert-microsoft.png"
  },
  {
    id: "openai-ai-foundations",
    title: "AI Foundations",
    issuer: "OpenAI Academy",
    date: "July 5, 2026",
    credentialId: "g1h0dmgrbn",
    link: "https://academy.openai.com/public/certificate/g1h0dmgrbn",
    image: "/cert-openai.png"
  },
  {
    id: "kaggle-deep-learning",
    title: "Intro to Deep Learning",
    issuer: "Kaggle",
    date: "July 5, 2026",
    credentialId: "N/A",
    link: "https://www.kaggle.com",
    image: "/cert-kaggle.png"
  }
];
