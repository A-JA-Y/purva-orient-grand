import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FloorPlanSection from "@/components/FloorPageSection"

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

const PAGE_URL = "https://purvaorientgrandlalbagh.com/floor-plans";
const PAGE_TITLE = "Purva Orient Grand Floor Plans — 3 and 4 BHK";
const PAGE_DESCRIPTION =
  "Official Purva Orient Grand floor plans: 3 BHK Super Premium and 4 BHK Elegance, Luxury and Grandeur, with carpet, balcony and super built-up areas floor by floor.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  keywords:
    "Purva Orient Grand floor plan, Purva Orient Grand 3 BHK floor plan, Purva Orient Grand 4 BHK floor plan, Purva Orient Grand unit plan, Purva Orient Grand carpet area, 4 BHK flats Lalbagh Road, luxury apartments central Bangalore",
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Purva Orient Grand",
    type: "website",
    images: [
      {
        url: "https://purvaorientgrandlalbagh.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Purva Orient Grand, 3 and 4 BHK residences on Lal Bagh Main Road, Central Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["https://purvaorientgrandlalbagh.com/images/og-image.webp"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://purvaorientgrandlalbagh.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Floor Plans",
      item: PAGE_URL,
    },
  ],
};

export default function FloorPlansPage() {
  return (
    <>
      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageBanner
        eyebrow="Floor Plans"
        title="Purva Orient Grand Floor Plans"
        subtitle="Official 3 and 4 BHK unit plans for all four grades on Lal Bagh Main Road, Central Bengaluru — with carpet, balcony and super built-up areas, floor by floor."
      />
      <ModalWrapper />
      <FloorPlanSection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
