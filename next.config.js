const withPlugins = require('next-compose-plugins')
const sass = require('@zeit/next-sass')
const nextConfig = {
  distDir: 'dist',
  devIndicators: {
    autoPrerender: false
  },
  webpack: (config, options) => {
    config.resolve.extensions = ['.js']

    return config
  }
}

module.exports = withPlugins([
  sass
], nextConfig)
