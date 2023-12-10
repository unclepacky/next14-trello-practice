/** @type {import('next').NextConfig} */
const nextConfig = {
  //   images: { domains: ["img.clerk.com"] },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
