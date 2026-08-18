import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/api/", "/dashboard/"],
      },
    ],
    sitemap: "https://amansoni.dev/sitemap.xml",
  };
}
