// Personal Information Types
export interface PersonalInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

// Skills Types
export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillsData {
  [category: string]: string[];
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  featured: boolean;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

// Experience Types
export interface Experience {
  title: string;
  company?: string;
  duration: string;
  achievements: string[];
  technologies?: string[];
}

// Education Types
export interface Education {
  institution: string;
  degree: string;
  duration: string;
  status: string;
  gpa?: string;
}

// Contact Types
export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Animation Types
export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

// Component Props Types
export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

// Welcome Screen Types
export interface WelcomeScreenProps {
  onComplete: () => void;
}

// Hero Section Types
export interface HeroProps {
  personalInfo: PersonalInfo;
  phrases: string[];
}

// Skills Section Types
export interface SkillsProps {
  skillsData: SkillsData;
}

// Projects Section Types
export interface ProjectsProps {
  projects: Project[];
}

// Experience Section Types
export interface ExperienceProps {
  experience: Experience;
  education: Education;
  certifications: string[];
}

// Contact Section Types
export interface ContactProps {
  contactInfo: ContactInfo;
}

// Theme Types
export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Intersection Observer Types
export interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// Performance Types
export interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
}
