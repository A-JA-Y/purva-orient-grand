import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purva Orient Grand News | Construction Status & Inventory Updates",
  description:
    "Purva Orient Grand news: construction status, possession date, RERA milestones and what is still for sale at the 97-home tower on Lal Bagh Main Road.",
  keywords: [
    "purva orient grand news",
    "purva orient grand construction status",
    "purva orient grand possession",
    "purva orient grand",
    "purva orient grand lalbagh",
    "purva orient grand for sale",
    "purva orient grand price",
    "puravankara new launch",
    "central bangalore real estate",
  ],
  alternates: {
    canonical: "https://purvaorientgrandlalbagh.com/news",
  },
  openGraph: {
    type: "website",
    url: "https://purvaorientgrandlalbagh.com/news",
    title: "Purva Orient Grand News & Project Updates",
    description:
      "Construction status, RERA milestones and inventory updates for Purva Orient Grand on Lal Bagh Main Road, Central Bengaluru.",
    siteName: "Purva Orient Grand",
    locale: "en_IN",
    images: [
      {
        url: "https://purvaorientgrandlalbagh.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Purva Orient Grand, a 97-residence tower on Lal Bagh Main Road, Central Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Purva Orient Grand News & Project Updates",
    description:
      "Construction status, RERA milestones and inventory updates for Purva Orient Grand, Lal Bagh Main Road, Bengaluru.",
    images: ["https://purvaorientgrandlalbagh.com/images/og-image.webp"],
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
