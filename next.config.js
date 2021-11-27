module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
