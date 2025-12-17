/** @type {import('next').NextConfig} */
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

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

export default withBundleAnalyzer(nextConfig);

