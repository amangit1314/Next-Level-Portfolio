export type Skill = {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  color: string;
  category: string;
  proficiency?: number;
};