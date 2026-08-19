/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // @huggingface/transformers (local embeddings) does not fit in Vercel's
  // 250MB function size limit alongside /api/chat's other dependencies —
  // 3 attempts (unscoped include: 537MB, linux/x64-only: 361MB, both over
  // limit) confirmed this isn't fixable by narrowing what's included, only
  // by not shipping the native onnx binary in this function at all. Local
  // embeddings are on hold pending a real architecture decision (see
  // docs/DECISIONS.md) — embedText/embedTexts in lib/ai/embeddings.ts now
  // fail gracefully instead of crashing the whole chat route when called.
  serverExternalPackages: ["@huggingface/transformers", "onnxruntime-node"],
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
