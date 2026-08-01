export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Android App' | 'AI SaaS' | 'Canvas & Graphics' | 'Generative AI' | string;
  description: string;
  bulletPoints: string[];
  techStack: string[];
  codeUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  demoSnippet?: string;
  imagePlaceholder?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    highlight?: boolean;
    description?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
  relevantCoursework?: string[];
  description?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  duration?: string;
  certificateUrl?: string;
  details: string;
  badgeColor?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}
