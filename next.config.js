module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "image.tmdb.org",
      "www.pexels.com",
      "avatars.dicebear.com",
      "res.cloudinary.com",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
