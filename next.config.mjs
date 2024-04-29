/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "back-office-api.caretutors.com",
      },
    ],
  },
};

export default nextConfig;
