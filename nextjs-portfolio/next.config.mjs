/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  eslint: {
    dirs: ['src']
  },
  webpack(config) {
    return config;
  }
};

export default nextConfig;
