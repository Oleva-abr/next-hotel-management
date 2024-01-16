/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "unsplash.com",
      "plus.unsplash.com",
    ],
  },
  // remotePatterns: ["https://unsplash.com/.*"],
};

module.exports = nextConfig;
