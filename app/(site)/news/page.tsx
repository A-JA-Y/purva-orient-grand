import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/utils/schema";
import NewsIndex from "./NewsIndex";

// Server wrapper so the JSON-LD is in the initial HTML; the listing itself is a client component.
export default function NewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("News", "/news")} />
      <NewsIndex />
    </>
  );
}
