export interface Skill {
  name: string;
  iconName: string;
  level: number; // 0-100 percentage
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Training {
  organization: string;
  duration: string;
  details: string[];
}

export interface Education {
  degree: string;
  school: string;
  completionDate: string;
  score?: string;
}

export interface Strength {
  title: string;
  description: string;
  iconName: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'instagram' | 'email' | 'phone';
  url: string;
  username: string;
}

