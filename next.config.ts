/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configurations
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.sectorlink.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.almondsolutions.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'buildfire.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // ... other configurations
};

module.exports = nextConfig;