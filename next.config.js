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
};
