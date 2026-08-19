/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // @huggingface/transformers ships a native ONNX runtime binary
  // (libonnxruntime.so). Turbopack/webpack bundling it into the serverless
  // function moves it away from the relative path its own loader expects,
  // breaking with "libonnxruntime.so.1: cannot open shared object file" at
  // runtime (confirmed in production logs). Marking it external makes Next.js
  // `require()` it normally from node_modules at runtime instead of bundling
  // it, which is the documented fix for this class of native-binary package.
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
