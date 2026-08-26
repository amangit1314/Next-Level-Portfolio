// Central domain enums — mirrors aman-starter-kit's src/types/enums.ts
// convention. Add here (not a local string-literal union) when a value is
// compared/branched on in 2+ files. See ~/.claude/CLAUDE.md's Code Quality
// Paradigms for the full rule. AI-copilot's own enums (ChatRole, CopilotTool,
// ThemeMode, PortfolioSection) stay in features/ai-copilot/types.ts —
// they're compared only within that feature, so centralizing them here
// would be indirection with no second consumer to protect against drift.

/**
 * react-query cache keys for Sanity data hooks (useSanityQuery.ts). Each key
 * used to be a bare string literal repeated between the hook and any
 * manual `queryClient.invalidateQueries` call — a typo in either place
 * silently breaks cache invalidation with no type error.
 */
/**
 * Route paths — were hand-typed as string literals in 6+ files (Header's
 * nav config, AICopilot's route-guard, useCopilotChat's pathname check,
 * middleware.ts, Projects.tsx's "see all" link). A typo in any one just
 * 404s silently rather than erroring loudly, which is exactly the kind of
 * drift worth a shared source over.
 */
export enum Route {
  Home = "/",
  Projects = "/projects",
  Playground = "/playground",
  Terminal = "/terminal",
  Components = "/components",
  Blogs = "/blogs",
  Dashboard = "/dashboard",
  Studio = "/studio",
}

/** DOM anchor ids for home-page sections — scrolled to via `#id`, distinct
 * from `Route` (URL paths). Shared by Header's sectionLinks, consumed by
 * HudMenu's home-only SECTIONS group (HudChrome.tsx). */
export enum SectionId {
  Home = "home",
  About = "about",
  Skills = "skills",
  Experience = "experience",
  Projects = "projects",
  Contact = "contact",
}

/** Nav-link display labels. Desktop sidebar (Header) and the mobile bottom
 * tab bar intentionally show different labels for the same section (compact
 * tab bar needs shorter words) — both come from this enum rather than
 * inline string literals so a rename is a one-place edit. */
export enum SectionLabel {
  Intro = "Intro",
  About = "About",
  Skills = "Skills",
  Experience = "Experience",
  Projects = "Projects",
  Contact = "Contact",
  Home = "Home",
  Work = "Work",
}

export enum QueryKey {
  Skills = "skills",
  Experiences = "experiences",
  Projects = "projects",
  ProjectsCount = "projectsCount",
  AiProjectsCount = "aiProjectsCount",
  Blogs = "blogs",
  Profile = "profile",
  Testimonials = "testimonials",
  Components = "components",
  ComponentBySlug = "componentBySlug",
  BlogBySlug = "blogBySlug",
}
