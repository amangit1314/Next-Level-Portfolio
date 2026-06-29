type SanityAsset = {
  _id: string;
  url: string;
};

type SanityFile = {
  asset: SanityAsset;
};

export type SocialLink = {
  platform: string;
  url: string;
  iconName: string;
};

export type ProfileStats = {
  experienceYears: string;
  projectsCount: string;
  clientSatisfaction?: string;
  tokensOrchestrated?: string;
  agentsDeployed?: string;
};

export type ExperienceAreas = {
  ai?: string;
  fullStack?: string;
  backend?: string;
};

export type Profile = {
  _id: string;
  name: string;
  role: string;
  headline?: string;
  shortBio: string;
  longBio: string;
  profileImage?: SanityFile;
  resume?: SanityFile;
  socialLinks: SocialLink[];
  stats: ProfileStats;
  typewriterTexts: string[];
  keyStrengths: string[];
  techStackPreview: string[];
  experienceAreas: ExperienceAreas;
};
