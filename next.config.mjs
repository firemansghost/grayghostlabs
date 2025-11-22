/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/sports/cfb/ghostedge",
        destination: "/sports/cfb/gridiron-edge",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

