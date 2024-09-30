/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      }
    ]

    //domains: ['apple.com', "https://www.hollywoodreporter.com"],
  }
};

//export default nextConfig;
export default nextConfig;
