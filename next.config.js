module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.pexels.com',
      'image.tmdb.org',
      'www.pexels.com',
      'avatars.dicebear.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

// module.exports = withTM()
// const withTM = require('next-transpile-modules')([
//   'three',
//   'react-three-fiber',
//   'drei',
// ])
