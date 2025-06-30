/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.clerk.dev'],
  },
  async rewrites() {
    return [
      {
        source: '/api/socket/io', // incoming socket.io request
        destination: '/api/socket', // send it to your socket API handler
      },
    ];
  },
};

export default nextConfig;
