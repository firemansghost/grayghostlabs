/** @type {import('next').NextConfig} */
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: true,
  analyzerMode: "static",
  openAnalyzer: false,
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

// Only wrap when analyzing. @next/bundle-analyzer injects a webpack() hook
// even when disabled, which makes Next 16 refuse a default Turbopack build.
export default process.env.ANALYZE === "true"
  ? withBundleAnalyzer(nextConfig)
  : nextConfig;
