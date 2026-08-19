/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // @huggingface/transformers ships a native ONNX runtime binary
  // (libonnxruntime.so, via onnxruntime-node). Marking these external stops
  // Turbopack from bundling them (so `require()` resolves normally at
  // runtime) — necessary but NOT sufficient on its own: Vercel's own file
  // tracing (which decides what ships in the deployed function, separate
  // from bundling) was still leaving the native .so out, confirmed by the
  // exact same "libonnxruntime.so.1: cannot open shared object file" error
  // persisting in production after serverExternalPackages alone. The
  // outputFileTracingIncludes entry below is what actually forces the
  // binary into the deployment artifact.
  serverExternalPackages: ["@huggingface/transformers", "onnxruntime-node"],
  outputFileTracingIncludes: {
    "/api/chat": ["./node_modules/onnxruntime-node/bin/napi-v6/**/*"],
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
