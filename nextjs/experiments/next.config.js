/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: "nodejs",
    concurrentFeatures: true,
    serverComponents: true,
  },
};

module.exports = nextConfig;
