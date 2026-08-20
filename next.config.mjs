/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Stripping console.error along with everything else silenced the exact
    // error text needed to debug a real production 502 (Groq fetch()
    // failure in lib/ai/groq.ts) — confirmed by finding zero log output for
    // a request that unambiguously hit the console.error call in
    // api/chat/route.ts. Keep error visible in production, strip the rest.
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  images: {
    qualities: [75, 95, 100],
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "www.pexels.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "image.tmdb.org" },
      { protocol: "https", hostname: "cdn.dribbble.com" },
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "play-lh.googleusercontent.com" },
      { protocol: "https", hostname: "avatars.dicebear.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "camo.githubusercontent.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "vectorified.com" },
      { protocol: "https", hostname: "logos-download.com" },
      { protocol: "https", hostname: "www.scottbrady91.com" },
      { protocol: "https", hostname: "www.svgrepo.com" },
      { protocol: "https", hostname: "rb.gy" },
      { protocol: "https", hostname: "omlogistics.co.in" },
    ],
  },
};

export default nextConfig;
