export interface Skill {
  name: string;
  level: number; // 0 to 100
  iconName: string; // matches lucide-react icon
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string; // path or URL
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  duration: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
