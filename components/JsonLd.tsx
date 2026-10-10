// Server-rendered JSON-LD. Use this rather than next/script, which injects inline
// scripts on the client after hydration and keeps them out of the initial HTML.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
