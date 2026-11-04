import type { Metadata } from "next";
import GuidePage, { guideMetadata } from "@/components/GuidePage";
import { bestProjectsList, getGuidePage } from "@/data/guidePages";
import { SITE_URL } from "@/utils/schema";
import Content from "@/content/pages/best-residential-projects-in-bangalore-2026.mdx";

const page = getGuidePage("best-residential-projects-in-bangalore-2026");

export const metadata: Metadata = guideMetadata(page);

// The ranked shortlist, so search engines can read the page as a list of five projects.
const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Top 5 residential projects in Bangalore (2026)",
  url: `${SITE_URL}/${page.slug}`,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: bestProjectsList.length,
  itemListElement: bestProjectsList.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: p.url,
  })),
};

export default function BestResidentialProjectsInBangalorePage() {
  return (
    <GuidePage page={page} extraSchema={[itemList]}>
      <Content />
    </GuidePage>
  );
}
