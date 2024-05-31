/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
    // images: {
    //     domains: [
    //         "lh3.googleusercontent.com"
    //     ],
    //   },
};

export default nextConfig;
