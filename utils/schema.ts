/**
 * Shared schema.org constants and builders. The full Organization, RealEstateAgent,
 * ApartmentComplex and developer nodes live in the homepage graph (app/page.tsx);
 * other pages point at them by @id and carry just enough properties (name, url, logo)
 * to stay valid on their own.
 */

export const SITE_URL = "https://purvaorientgrandlalbagh.com";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const AGENT_ID = `${SITE_URL}/#agent`;
export const PROJECT_ID = `${SITE_URL}/#project`;
export const DEVELOPER_ID = `${SITE_URL}/#developer`;

export const LOGO_URL = `${SITE_URL}/images/logo.webp`;
export const OG_IMAGE = `${SITE_URL}/images/og-image.webp`;

export const organizationRef = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Real Revenue",
  url: `${SITE_URL}/`,
  logo: { "@type": "ImageObject", url: LOGO_URL },
};

export const projectRef = {
  "@type": "ApartmentComplex",
  "@id": PROJECT_ID,
  name: "Purva Orient Grand",
  url: `${SITE_URL}/`,
};

export const developerRef = {
  "@type": "Organization",
  "@id": DEVELOPER_ID,
  name: "Puravankara Limited",
  url: "https://www.puravankara.com/",
};

/** Home → page breadcrumb for a top-level inner page. */
export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

type ArticleInput = {
  type: "BlogPosting" | "NewsArticle";
  path: string;
  headline: string;
  description: string;
  image: string | string[];
  datePublished: string;
  dateModified: string;
  about?: Record<string, unknown> | Record<string, unknown>[];
} & Record<string, unknown>;

/** BlogPosting / NewsArticle, authored and published by Real Revenue, about the project. */
export function articleSchema({ type, path, about = projectRef, ...rest }: ArticleInput) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...rest,
    url,
    mainEntityOfPage: url,
    author: organizationRef,
    publisher: organizationRef,
    about,
    inLanguage: "en-IN",
  };
}
