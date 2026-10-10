import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/utils/schema";
import BlogsIndex from "./BlogsIndex";

// Server wrapper so the JSON-LD is in the initial HTML; the listing itself is a client component.
export default function BlogsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Blogs", "/blogs")} />
      <BlogsIndex />
    </>
  );
}
