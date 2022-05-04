/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_stork: true,
  unstable_staticImage: true,
})
module.exports = withNextra(nextConfig)
