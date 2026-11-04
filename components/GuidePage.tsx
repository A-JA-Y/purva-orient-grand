/**
 * components/GuidePage.tsx
 *
 * Shared shell for long-form guide pages that live at the site root
 * (see data/guidePages.ts). Mirrors the blog article layout: full-bleed hero,
 * MDX body on the left, enquiry form and related reading on the right.
 */

import type { Metadata } from "next";
import Image from "next/image";
import BlogContactForm from "@/components/BlogContactForm";
import RelatedPosts from "@/components/RelatedPosts";
import GuideLinks from "@/components/GuideLinks";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, articleSchema, breadcrumbSchema } from "@/utils/schema";
import type { GuidePageMeta } from "@/data/guidePages";

const SITE_NAME = "Purva Orient Grand";

const BENGALURU = {
  "@type": "City",
  name: "Bengaluru",
  sameAs: "https://en.wikipedia.org/wiki/Bengaluru",
};

/** Page metadata for a guide page: title, description, canonical, Open Graph and Twitter. */
export function guideMetadata(page: GuidePageMeta): Metadata {
  const url = `${SITE_URL}/${page.slug}`;
  const imageUrl = `${SITE_URL}${page.image}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "article",
      url,
      title: page.metaTitle,
      description: page.metaDescription,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [{ url: imageUrl, width: 1600, height: 900, alt: page.altText }],
      publishedTime: page.date,
      modifiedTime: page.updatedAt,
      authors: [page.author],
      tags: page.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [imageUrl],
    },
    authors: [{ name: page.author }],
    category: page.category,
  };
}

export default function GuidePage({
  page,
  extraSchema = [],
  children,
}: {
  page: GuidePageMeta;
  /** Additional JSON-LD nodes for this page (e.g. an ItemList). */
  extraSchema?: Record<string, unknown>[];
  children: React.ReactNode;
}) {
  const path = `/${page.slug}`;

  const article = articleSchema({
    type: "Article",
    path,
    headline: page.title,
    description: page.metaDescription,
    image: `${SITE_URL}${page.image}`,
    datePublished: page.date,
    dateModified: page.updatedAt,
    articleSection: page.category,
    keywords: page.keywords.join(", "),
    about: BENGALURU,
    mentions: {
      "@type": "ApartmentComplex",
      "@id": `${SITE_URL}/#project`,
      name: "Purva Orient Grand",
      url: `${SITE_URL}/`,
    },
  });

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const updated = new Date(page.updatedAt).toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <JsonLd data={article} />
      <JsonLd data={faq} />
      <JsonLd data={breadcrumbSchema(page.shortTitle, path)} />
      {extraSchema.map((node, i) => (
        <JsonLd key={i} data={node} />
      ))}

      <article className="w-full bg-white">
        {/* HERO */}
        <div className="relative w-full h-[360px] sm:h-[480px] md:h-[560px]">
          <Image
            src={page.image}
            alt={page.altText}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 px-6 md:px-16 py-10 max-w-5xl">
            <span className="text-xs text-white/80 border px-3 py-1 rounded-full">
              {page.category}
            </span>
            <p className="text-sm text-white/70 mt-3">
              Updated {updated} · {page.readTime}
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 grid grid-cols-1 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] gap-12">
          <div className="min-w-0">{children}</div>

          <aside className="min-w-0 space-y-10">
            <BlogContactForm />
            <GuideLinks currentSlug={page.slug} />
            <RelatedPosts currentSlug={page.slug} />
          </aside>
        </div>
      </article>
    </>
  );
}
