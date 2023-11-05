/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextjs-dashboard-zeta-ten.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
