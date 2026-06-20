// export type Project = {
//   title: string;
//   description: string;
//   image: any;
//   link: string;
//   technologies?: string[];
// };


interface Project {
  _id: string;
  title: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  link?: string;
  code?: string;
  description: string;
  technologies: string[];
  duration?: string;
  role?: string;
  achievements?: string[];
  isAI?: boolean;
  playgroundUrl?: string;
  architectureDiagram?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  metrics?: Array<{
    label: string;
    value: string;
  }>;
}