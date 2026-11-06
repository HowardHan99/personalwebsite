/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Allow importing .md files as raw strings (used for data/bio.md)
  webpack: (config) => {
    config.module.rules.push({ test: /\.md$/, type: 'asset/source' });
    return config;
  },
}

module.exports = nextConfig


