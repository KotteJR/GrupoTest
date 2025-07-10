import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['fs'],
  // Ensure the RAGdocuments folder is available at build time
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Handle fs module for server-side document loading
      config.externals = config.externals || [];
      config.externals.push('fs');
    }
    return config;
  },
};

export default nextConfig;
