/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      //{
      //  protocol: "http",
      //  hostname: "localhost",
      // port: "1337",
      //  pathname: "/uploads/**/*",
      //},
      {
        protocol: "https",
        hostname: "server-4klj.onrender.com",
        port: "",
        pathname: "/uploads/**/*",
      },
    ],
  },
};

export default nextConfig;