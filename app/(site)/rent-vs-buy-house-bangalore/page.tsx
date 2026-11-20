import type { Metadata } from "next";
import GuidePage, { guideMetadata } from "@/components/GuidePage";
import { getGuidePage } from "@/data/guidePages";
import Content from "@/content/pages/rent-vs-buy-house-bangalore.mdx";

const page = getGuidePage("rent-vs-buy-house-bangalore");

export const metadata: Metadata = guideMetadata(page);

export default function RentVsBuyHouseBangalorePage() {
  return (
    <GuidePage page={page}>
      <Content />
    </GuidePage>
  );
}
