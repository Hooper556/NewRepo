/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["md", "tsx", "ts", "jsx", "js", "md", "mdx"],
  experimental: {
    optimizeCss: true,
    mdxRs: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "keenbetting.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig
