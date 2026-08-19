// llms.txt — emerging convention (llmstxt.org) giving AI crawlers/agents a
// clean, structured summary instead of having to parse rendered HTML. Built
// as a route (not a static public/llms.txt) so it fetches live Sanity
// content and can't drift the way the old hardcoded sitemap blog list did.

import { client } from "@/sanity/lib/client";
import { profileQuery, projectsQuery, skillsQuery } from "@/sanity/lib/queries";
import { aiProjects } from "@/data/ai-projects";
import { SITE_URL } from "@/config/site";

export const revalidate = 3600; // regenerate hourly, not on every request

export async function GET() {
  const [profile, projects, skills] = await Promise.all([
    client.fetch(profileQuery),
    client.fetch(projectsQuery),
    client.fetch(skillsQuery),
  ]).catch(() => [null, [], []]);

  const lines = [
    `# ${profile?.name || "Aman Soni"}`,
    "",
    `> ${profile?.headline || profile?.role || "Senior AI Engineer & Full-Stack Architect"}`,
    "",
    profile?.longBio || profile?.shortBio || "",
    "",
    "## Skills",
    ...(skills || []).map((s: { name: string; category?: string }) => `- ${s.name}${s.category ? ` (${s.category})` : ""}`),
    "",
    "## Projects",
    ...(projects || []).map((p: { title: string; description?: string }) => `- ${p.title}: ${p.description || ""}`),
    ...aiProjects.filter((p) => !p.hidden).map((p) => `- ${p.title}: ${p.description}`),
    "",
    "## Site",
    `- Homepage: ${SITE_URL}`,
    `- Projects: ${SITE_URL}/projects`,
    `- Blog: ${SITE_URL}/blogs`,
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
