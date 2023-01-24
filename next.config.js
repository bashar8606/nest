/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withVideos = require("next-videos");
const CompressionPlugin = require("compression-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
    ],
    unoptimized: false,
  },
  experimental: {
    scrollRestoration: true,
    // appDir:true
  },
  webpack: (config) => {
    config.plugins.push(new CompressionPlugin());

    return config;
  },
};

module.exports = withPlugins([withVideos], nextConfig);
