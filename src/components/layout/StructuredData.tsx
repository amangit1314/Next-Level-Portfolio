// Server component — fetches profile directly (no React context needed
// server-side) and emits a Person JSON-LD block. This is what lets Google's
// knowledge panel, AI search engines (Perplexity, ChatGPT browsing), and
// SGE understand "who is Aman Soni" as structured facts, not just prose.

import { client } from "@/sanity/lib/client";
import { profileQuery } from "@/sanity/lib/queries";
import { SITE_URL } from "@/config/site";

export default async function StructuredData() {
  let profile: { name?: string; role?: string; headline?: string; socialLinks?: { url: string }[] } | null = null;
  try {
    profile = await client.fetch(profileQuery);
  } catch (e) {
    console.error("StructuredData: failed to fetch profile:", e);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile?.name || "Aman Soni",
    jobTitle: profile?.role || "Senior AI Engineer & Full-Stack Architect",
    description: profile?.headline,
    url: SITE_URL,
    sameAs: (profile?.socialLinks || []).map((s) => s.url).filter(Boolean),
    worksFor: {
      "@type": "Organization",
      name: "Independent",
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
