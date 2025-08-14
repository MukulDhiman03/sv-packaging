import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "packaging.shiprocket.in",
      },
    ],
  },
};

export default nextConfig;
