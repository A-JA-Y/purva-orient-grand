import createMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-slug"],
  },
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});


const nextConfig: NextConfig = {
  output:"export",
  images:{
    unoptimized:true
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  allowedDevOrigins: ["192.168.29.216"],

  async redirects() {
    return [
      { source: "/about-godrej-golf-links", destination: "/about-purva-orient-grand", permanent: true },
      { source: "/about-godrej-properties", destination: "/about-puravankara", permanent: true },
      { source: "/villas-configurations", destination: "/configurations", permanent: true },
      { source: "/brochure.pdf", destination: "/purva-orient-grand-brochure.pdf", permanent: true },
      { source: "/master-plan.pdf", destination: "/purva-orient-grand-master-plan.pdf", permanent: true },
      { source: "/blogs/godrej-golf-links-greater-noida-buyers-guide-2026", destination: "/blogs", permanent: true },
      { source: "/blogs/jewar-airport-godrej-golf-links-greater-noida-smart-investment-2026", destination: "/blogs", permanent: true },
      { source: "/news/greater-noida-circle-rate-hike-godrej-golf-links-2026", destination: "/news", permanent: true },
    ];
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));