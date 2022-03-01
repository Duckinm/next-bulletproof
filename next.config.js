/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: true,
    reactRoot: true,
    runtime: true,
    serverComponents: true,
  },
  swcMinify: true,
}

module.exports = nextConfig
