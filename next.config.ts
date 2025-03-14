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
        hostname: "server-bk-i0c8.onrender.com",
        port: "",
        pathname: "/uploads/**/*",
      },
    ],
  },
};

export default nextConfig;