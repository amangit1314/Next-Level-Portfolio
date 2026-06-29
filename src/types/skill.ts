export type Skill = {
  _id?: string;
  icon?: unknown;
  iconName?: string | null;
  name: string | null;
  color?: string | null;
  category?: string | null;
  proficiency?: number | null;
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