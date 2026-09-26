import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purva Orient Grand News & Project Updates | Lal Bagh Road",
  description:
    "Construction status, RERA milestones and inventory updates for Purva Orient Grand, Puravankara's 97-residence tower on Lal Bagh Main Road, Central Bengaluru.",
  keywords: [
    "Purva Orient Grand news",
    "Purva Orient Grand construction status",
    "Purva Orient Grand price",
    "Purva Orient Grand possession",
    "Puravankara Lal Bagh",
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
