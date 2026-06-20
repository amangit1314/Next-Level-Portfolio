import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aman Soni — AI Engineer & Full-Stack Architect Portfolio",
    short_name: "Aman Soni Portfolio",
    description:
      "Next-level portfolio of Aman Soni — Senior AI Engineer & Full-Stack Architect specializing in agentic AI systems, RAG pipelines, document intelligence, and production-grade Next.js applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#10b981",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
