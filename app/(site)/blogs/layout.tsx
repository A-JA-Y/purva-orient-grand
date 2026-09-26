import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Purva Orient Grand — Central Bengaluru Buyer Guides",
  description:
    "Guides for buyers and investors in Central Bengaluru: luxury apartments in the CBD, the land-cost case for investment, MIVAN construction explained, and Purva Orient Grand on Lal Bagh Main Road.",
  alternates: {
    canonical: "https://purvaorientgrandlalbagh.com/blogs",
  },
  openGraph: {
    type: "website",
    url: "https://purvaorientgrandlalbagh.com/blogs",
    title: "Blogs | Purva Orient Grand — Central Bengaluru Buyer Guides",
    description:
      "Buyer and investor guides for Central Bengaluru, from the Purva Orient Grand microsite on Lal Bagh Main Road.",
    siteName: "Purva Orient Grand",
    locale: "en_IN",
    images: [
      {
        url: "https://purvaorientgrandlalbagh.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Purva Orient Grand tower on Lal Bagh Main Road, Central Bengaluru",
      },
    ],
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
