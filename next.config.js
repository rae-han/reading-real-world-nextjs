import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {

  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: true })
  ]
}



module.exports = nextConfig
