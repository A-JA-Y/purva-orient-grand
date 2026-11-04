import type { Metadata } from "next";
import GuidePage, { guideMetadata } from "@/components/GuidePage";
import { getGuidePage } from "@/data/guidePages";
import Content from "@/content/pages/is-bangalore-good-to-live-or-invest-in.mdx";

const page = getGuidePage("is-bangalore-good-to-live-or-invest-in");

export const metadata: Metadata = guideMetadata(page);

export default function IsBangaloreGoodToLiveOrInvestInPage() {
  return (
    <GuidePage page={page}>
      <Content />
    </GuidePage>
  );
}
