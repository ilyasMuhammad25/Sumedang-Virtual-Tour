/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost","youtube.com", "www.youtube.com","youtu.be"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
