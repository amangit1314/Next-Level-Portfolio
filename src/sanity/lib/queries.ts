import { groq } from "next-sanity";

export const experiencesQuery = groq`*[_type == "experience"] | order(year desc) {
  _id,
  role,
  company,
  companyLink,
  year,
  description,
  technologies
}`;

// Lightweight count-only queries for stats display (e.g. Hero) — avoid
// fetching full project docs just to show a number.
export const projectsCountQuery = groq`count(*[_type == "project"])`;
export const aiProjectsCountQuery = groq`count(*[_type == "project" && isAI == true])`;

export const projectsQuery = groq`*[_type == "project"] {
  _id,
  title,
  image {
    asset->{
      _id,
      url
    }
  },
  link,
  code,
  description,
  technologies,
  duration,
  role,
  achievements,
  isAI,
  playgroundUrl,
  architectureDiagram {
    asset->{
      _id,
      url
    }
  },
  metrics
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"] {
  _id,
  personName,
  personRole,
  personImg {
    asset->{
      _id,
      url
    }
  },
  comment
}`;

export const skillsQuery = groq`*[_type == "skill"] {
  _id,
  name,
  icon {
    asset->{
      _id,
      url
    }
  },
  iconName,
  color,
  category,
  proficiency
}`;

export const profileQuery = groq`*[_type == "profile"][0] {
  _id,
  name,
  role,
  headline,
  shortBio,
  longBio,
  profileImage {
    asset->{
      _id,
      url
    }
  },
  resume {
    asset->{
      _id,
      url
    }
  },
  socialLinks,
  stats,
  typewriterTexts,
  keyStrengths,
  techStackPreview,
  experienceAreas
}`;

export const componentsQuery = groq`*[_type == "component"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  category,
  tags,
  previewImage {
    asset->{
      _id,
      url
    }
  },
  difficulty,
  publishedAt
}`;

export const componentBySlugQuery = groq`*[_type == "component" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  category,
  tags,
  previewImage {
    asset->{
      _id,
      url
    }
  },
  previewCode,
  content,
  dependencies,
  difficulty,
  liveDemo,
  codeRepository,
  publishedAt
}`;

export const blogsQuery = groq`*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  tags,
  coverImage {
    asset->{
      _id,
      url
    }
  },
  author,
  authorImage {
    asset->{
      _id,
      url
    }
  },
  readingTime,
  featured,
  publishedAt
}`;

export const blogBySlugQuery = groq`*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  category,
  tags,
  coverImage {
    asset->{
      _id,
      url
    }
  },
  content,
  author,
  authorImage {
    asset->{
      _id,
      url
    }
  },
  readingTime,
  featured,
  publishedAt
}`;
