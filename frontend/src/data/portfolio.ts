import { PersonalInfo, SkillsData, Project, Experience, Education, ContactInfo } from '@/types';

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Arnav Gupta",
  location: "Ghaziabad, UP",
  phone: "+91-7452027990",
  email: "arnavguptamodinagar@gmail.com",
  linkedin: "https://linkedin.com/in/arnav-gupta-8351641b6",
  github: "https://github.com/arnavgupta27"
};

// Dynamic typing animation phrases
export const phrases = [
  "Software Developer",
  "Full Stack Engineer",
  "AI/ML Enthusiast",
  "Student"
];

// Skills organized by category
export const skillsData: SkillsData = {
  "Programming Languages": ["C++", "JavaScript", "SQL", "Python", "Kotlin"],
  "Frontend Development": ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS"],
  "Backend Development": ["Node.js", "Express.js", "REST APIs", "GraphQL", "Socket.io"],
  "Mobile & Embedded": ["Android Automotive OS", "Jetpack", "Android Studio"],
  "Machine Learning": ["Machine Learning", "Real-Time KPI Graphing", "Scikit-learn", "Ollama", "Artificial Intelligence", "Model Finetuning"],
  "Databases": ["MongoDB", "MySQL"],
  "DevOps & Testing": ["Kubernetes", "Selenium", "AWS Lambda"],
  "Tools & Platforms": ["Git", "GitHub", "Linux", "WebSockets", "Flask"],
  "Core Concepts": ["DSA", "OOP", "SDLC", "System Design", "Agile", "TDD", "SDV"]
};

// Main Projects Data
export const projectsData: Project[] = [
  {
    id: "ev-battery-predictor",
    title: "EV Battery Predictor & Convoy Recommendation API",
    description: "Machine learning-powered API to predict EV battery usage based on elevation-aware routing data and recommend energy-efficient convoy strategies. Integrated with OpenRouteService for real-time mapping.",
    technologies: ["Python", "Flask", "Scikit-learn", "OpenRouteService", "Linear Regression"],
    category: "Machine Learning",
    featured: true
  },
  {
    id: "intelligent-cloud-bms",
    title: "Intelligent Cloud BMS for EV Fleets (iCBMP)",
    description: "Modern Android app for real-time EV fleet monitoring with live battery analytics, predictive health alerts, vehicle tracking, and convoy recommendations using cloud-connected ML models.",
    technologies: ["Android Studio", "Kotlin", "Jetpack Compose", "AWS", "REST API"],
    category: "Mobile Development",
    featured: true
  },
  {
    id: "defi-credit-scoring",
    title: "DeFi Credit Scoring for Aave Wallets",
    description: "Credit scoring system for DeFi users analyzing on-chain activity of Aave V2 wallets, focusing on borrow history, collateral health, and repayment patterns without requiring KYC data.",
    technologies: ["Python", "Pandas", "Scikit-learn", "JSON", "Web3.py"],
    category: "Blockchain & AI",
    featured: true
  },
  {
    id: "ml-recommendation-pipeline",
    title: "ML Recommendation Pipeline (Internship Project)",
    description: "Created machine learning pipeline with Flask app using custom rules for vehicle-specific recommendations to optimize battery performance in high elevation areas, integrated with Android Automotive dashboard.",
    technologies: ["Python", "Flask", "Machine Learning", "Android Automotive", "Cloud Integration"],
    category: "Machine Learning",
    featured: true
  }
];

// Work Experience
export const experienceData: Experience = {
  title: "Software Engineering Summer Intern",
  duration: "June 2025 – August 2025",
  achievements: [
    "Created ML pipeline with Flask app using custom rules for vehicle-specific recommendations to optimize battery performance in high elevation areas",
    "Built robust pipeline and model with cloud endpoint integration via comprehensive testing",
    "Developed Android Automotive dashboard for real-time ML model recommendations",
    "Created critical UI components and connected backend to frontend systems"
  ],
  technologies: ["Python", "Flask", "Machine Learning", "Android Automotive", "AWS", "Testing"]
};

// Education
export const educationData: Education = {
  institution: "Indian Institute of Information Technology, Sonepat",
  degree: "B.Tech in Computer Science Engineering",
  duration: "Nov 2022 – Nov 2026",
  status: "Third Year Student"
};

// Certifications
export const certifications = [
  "Full-Stack MERN Development – Pregrad"
];

// Contact Information
export const contactInfo: ContactInfo = {
  email: "arnavguptamodinagar@gmail.com",
  phone: "+91-7452027990",
  location: "Ghaziabad, UP",
  linkedin: "https://linkedin.com/in/arnav-gupta-8351641b6",
  github: "https://github.com/arnavgupta27"
};

// Professional Summary
export const professionalSummary = "Dedicated third-year engineering student with strong foundation in software development, specializing in full-stack technologies like JavaScript, React, and Node.js. Experienced in cloud computing with AWS and actively exploring machine learning applications and Mobile development using Kotlin and Android Studio.";

// Key Achievements
export const keyAchievements = [
  "Built and maintained several GitHub repositories showcasing full-stack development",
  "Active participant in coding competitions",
  "Completed Full-Stack MERN Development certification"
];

// Navigation Items
export const navigationItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
];

// Resume file name
export const resumeFileName = "arnavresumeLatest.pdf";
