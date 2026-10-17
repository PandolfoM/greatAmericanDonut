import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in out/, served from S3 + CloudFront by MJP Hub.
  output: "export",
  // Image optimization needs a server; images are served as-is.
  images: { unoptimized: true },
};

export default nextConfig;
