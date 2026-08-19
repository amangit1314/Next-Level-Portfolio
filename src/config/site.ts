/**
 * The site's own public URL. Was hardcoded as the string literal
 * "https://amansoni.dev" in 9 places across 5 files (layout.tsx metadata,
 * sitemap.ts, robots.ts, llms.txt route, StructuredData) — a domain change
 * or typo in any one of them silently drifts from the rest. Single source
 * now. Pattern matches CareerSpire's config/site.ts.
 */
export const SITE_URL = "https://amansoni.dev";
