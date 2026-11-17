export type PageRoute =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'certifications'
  | 'contact';

export interface NavItem {
  id: Exclude<PageRoute, 'home' | 'contact'>;
  label: string;
  href: string;
}

export interface SocialLink {
  id: 'email' | 'linkedin' | 'github' | 'whatsapp';
  label: string;
  href: string;
  displayValue: string;
}

export interface HeroMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ProfileData {
  name: string;
  roleTitle: string;
  tagline: string;
  location: string;
  availability: string;
  shortBio: string;
  portraitUrl: string;
  portraitAlt: string;
  cvImageUrl: string;
  email: string;
  phone: string;
  terminalLines: string[];
  metrics: HeroMetric[];
  socials: SocialLink[];
}

export interface CoreFocusItem {
  title: string;
  description: string;
  scope: string;
}

export interface QuickHighlight {
  label: string;
  value: string;
  detail?: string;
}

export interface AboutData {
  eyebrow: string;
  heading: string;
  portraitUrl: string;
  portraitAlt: string;
  bioParagraphs: string[];
  quickHighlights: QuickHighlight[];
  lookingForTitle: string;
  lookingForText: string;
  coreFocus: CoreFocusItem[];
}

export type SkillProficiency = 'Proficient' | 'Working' | 'Foundational';

export interface SkillEntry {
  name: string;
  level: SkillProficiency;
  note: string;
}

export interface SkillDomain {
  id: string;
  title: string;
  summary: string;
  skills: SkillEntry[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  unit?: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  proofImageUrl?: string;
  proofImageAlt?: string;
  proofCaption?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  credential: string;
  location: string;
  period: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issuedDate: string;
  expiresDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  badgeImage?: string;
  notes?: string;
}

export interface CourseworkItem {
  id: string;
  title: string;
  issuer: string;
  completedDate: string;
  verificationUrl?: string;
}

export interface CourseworkTrack {
  id: string;
  title: string;
  status: string;
  courses: CourseworkItem[];
}

export type ProjectCategory = 'All' | 'Networking' | 'Cybersecurity' | 'IT Systems';

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  summary: string;
  isFeatured?: boolean;
  timeframe: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  problem: string;
  approach: string;
  architecture: string;
  architectureNodes: string[];
  deployment?: string;
  tools: string[];
  result: string;
  lessonsLearned: string;
  codeTitle: string;
  codeSnippet: string;
}
