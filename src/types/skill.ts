export type Skill = {
  icon: React.ComponentType<{ className?: string }>;
  iconName: string;
  name: string;
  color: string;
  category: string;
  proficiency?: number;
};

/**
 *  {
    "_id": "1f65db3b-a15d-409f-ae92-a276c8bb3a52",
    "category": "DevOps",
    "color": "blue-800",
    "icon": null,
    "iconName": "SiKubernetes",
    "name": "Kubernetes",
    "proficiency": 40
  }
 */