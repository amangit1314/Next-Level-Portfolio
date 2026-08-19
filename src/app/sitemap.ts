import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { blogsQuery } from "@/sanity/lib/queries";
import { aiBlogs } from "@/data/ai-blogs";
import { SITE_URL as BASE_URL } from "@/config/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blogs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/components`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/terminal`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/playground`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  // Static AI blog posts (src/data/ai-blogs.ts — each has its own bundled
  // page.tsx under app/blogs/<slug>/, not Sanity-driven) always belong here.
  const staticBlogRoutes: MetadataRoute.Sitemap = aiBlogs.map((b) => ({
    url: `${BASE_URL}/blogs/${b.slug.current}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Sanity-authored blog posts — fetched live so this can't drift the way
  // the old fully-hardcoded slug list did (see docs/DECISIONS.md).
  let sanityBlogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogs = await client.fetch<{ slug: { current: string }; publishedAt?: string }[]>(blogsQuery);
    sanityBlogRoutes = (blogs || []).map((b) => ({
      url: `${BASE_URL}/blogs/${b.slug.current}`,
      lastModified: b.publishedAt ? new Date(b.publishedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch (e) {
    console.error("sitemap: failed to fetch blog slugs from Sanity:", e);
  }

  return [...staticRoutes, ...staticBlogRoutes, ...sanityBlogRoutes];
}
