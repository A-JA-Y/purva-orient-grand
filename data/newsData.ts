export type NewsMeta = {
  id: string;

  /* SEO */
  title: string;
  slug: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  altText?: string;

  /* Display */
  image: string;
  date: string;
  updatedAt: string;
  author: string;
  category: string;
  readTime: string;
  featured?: boolean;
  tags?: string[];

  /* Extra */
  location?: string;
  newsType?: string;

  /* Structured Data */
  schemaMarkup?: Record<string, unknown>;
  faqSchema?: Record<string, unknown>;
};

const SITE_URL = "https://purvaorientgrandlalbagh.com";

/* Shared schema.org nodes (the project entity @id matches the homepage graph) */
const realRevenue = {
  "@type": "Organization",
  name: "Real Revenue",
  url: `${SITE_URL}/`,
  parentOrganization: {
    "@type": "Organization",
    name: "Earlydays Innovations Private Limited",
  },
};

const projectEntity = {
  "@type": "ApartmentComplex",
  "@id": `${SITE_URL}/#project`,
  name: "Purva Orient Grand",
  url: `${SITE_URL}/`,
  numberOfAccommodationUnits: 97,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Municipal No. 5, Lal Bagh Main Road, Ward No. 118, Sudhama Nagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560027",
    addressCountry: "IN",
  },
};

const developerEntity = {
  "@type": "Organization",
  name: "Puravankara Limited",
};

const lalBaghRoad = {
  "@type": "Place",
  name: "Lal Bagh Main Road, Sudhama Nagar, Central Bengaluru",
  address: projectEntity.address,
};

const NewsData: NewsMeta[] = [
  {
    id: "news-2",

    /* SEO */
    title:
      "Purva Orient Grand Now at ₹9 Crore Onwards: What It Says About Remaining Inventory",
    slug: "purva-orient-grand-limited-inventory-9-crore-onwards-2026",
    excerpt:
      "The developer's published entry point has moved from ₹6.00 Cr at launch to ₹9 Cr. That gap is information: the 3 BHKs and the lower-floor 4 BHKs are largely gone, and what remains is the larger, higher-floor stock. What the shift means for a buyer, and what a ₹9 Cr home costs once GST, stamp duty and premiums are added.",
    metaTitle: "Purva Orient Grand Price 2026: ₹9 Crore Onwards | Inventory",
    metaDescription:
      "Purva Orient Grand is now listed at ₹9 crore onwards, pointing to larger, higher-floor homes. Launch prices, rate per sq ft, charges and live availability.",
    keywords: [
      "Purva Orient Grand price",
      "Purva Orient Grand 9 crore",
      "Purva Orient Grand availability",
      "Purva Orient Grand Lalbagh",
      "4 BHK flats Lalbagh Road",
      "luxury apartments central Bangalore",
      "Puravankara Lal Bagh",
      "CBD Bangalore luxury flats",
    ],
    canonical: `${SITE_URL}/news/purva-orient-grand-limited-inventory-9-crore-onwards-2026`,

    /* Display */
    image: "/images/news-rooftop-club.webp",
    altText:
      "Aerial render of The Rose & Cypress rooftop club with the infinity pool, pool deck, rooftop lawn and terrace dining crowning the tower",
    date: "2026-09-24",
    updatedAt: "2026-09-24",
    author: "Real Revenue",
    category: "Price & Inventory",
    readTime: "5 min read",
    featured: true,
    tags: [
      "purva orient grand",
      "price update",
      "limited inventory",
      "3 bhk",
      "4 bhk",
      "lal bagh road",
      "central bengaluru",
    ],

    /* Extra */
    location: "Lal Bagh Road, Bengaluru",
    newsType: "Inventory",

    /* Structured Data */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "@id": `${SITE_URL}/news/purva-orient-grand-limited-inventory-9-crore-onwards-2026#article`,
      headline:
        "Purva Orient Grand Now at ₹9 Crore Onwards: What It Says About Remaining Inventory",
      description:
        "Puravankara's current published position for Purva Orient Grand on Lal Bagh Main Road is ₹9 crore onwards, against a launch range of ₹6.00 to ₹10.78 crore, indicating that the larger and higher-floor residences are what remain.",
      image: [`${SITE_URL}/images/news-rooftop-club.webp`],
      datePublished: "2026-09-24",
      dateModified: "2026-09-24",
      inLanguage: "en-IN",
      author: realRevenue,
      publisher: realRevenue,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/news/purva-orient-grand-limited-inventory-9-crore-onwards-2026`,
      },
      articleSection: "Price & Inventory",
      keywords:
        "Purva Orient Grand price, Purva Orient Grand availability, 4 BHK Lalbagh Road, luxury apartments central Bangalore, Puravankara",
      about: [projectEntity, developerEntity],
      contentLocation: lalBaghRoad,
    },
  },
  {
    id: "news-1",

    /* SEO */
    title:
      "Purva Orient Grand Is in Its Final Stages of Construction: What It Means for Buyers",
    slug: "purva-orient-grand-construction-final-stages-2026",
    excerpt:
      "The MIVAN-cast tower on Lal Bagh Main Road is in its final stages, with completion filed for 30 June 2027 and the occupancy certificate still to come. What \"final stages\" covers, what the OC changes, and why buying this late in a project is a different decision from buying at launch.",
    metaTitle: "Purva Orient Grand Construction Status 2026 | Final Stages",
    metaDescription:
      "Purva Orient Grand is in its final stages of construction. RERA completion date 30 June 2027; occupancy certificate not yet received. What it means for buyers.",
    keywords: [
      "Purva Orient Grand construction status",
      "Purva Orient Grand possession",
      "Purva Orient Grand RERA",
      "Purva Orient Grand Lalbagh",
      "Puravankara Lal Bagh",
      "under construction luxury apartments Bangalore",
      "MIVAN construction",
      "Karnataka RERA escrow",
    ],
    canonical: `${SITE_URL}/news/purva-orient-grand-construction-final-stages-2026`,

    /* Display */
    image: "/images/news-construction-update.webp",
    altText:
      "Aerial construction-status photograph of the Purva Orient Grand tower's concrete frame on Lal Bagh Main Road, published by Puravankara, with the Central Bengaluru skyline behind",
    date: "2026-09-21",
    updatedAt: "2026-09-21",
    author: "Real Revenue",
    category: "Project Update",
    readTime: "5 min read",
    featured: false,
    tags: [
      "purva orient grand",
      "construction update",
      "karnataka rera",
      "possession",
      "mivan",
      "lal bagh road",
      "puravankara",
    ],

    /* Extra */
    location: "Lal Bagh Road, Bengaluru",
    newsType: "Construction",

    /* Structured Data */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "@id": `${SITE_URL}/news/purva-orient-grand-construction-final-stages-2026#article`,
      headline:
        "Purva Orient Grand Is in Its Final Stages of Construction: What It Means for Buyers",
      description:
        "Purva Orient Grand on Lal Bagh Main Road, Bengaluru, is in its final stages of construction, with Karnataka RERA registration on 7 September 2021, a sales launch in January 2022 and a RERA-filed completion date of 30 June 2027. The occupancy certificate has not yet been received.",
      image: [
        `${SITE_URL}/images/news-construction-update.webp`,
        `${SITE_URL}/images/news-construction-progress-2.webp`,
        `${SITE_URL}/images/news-construction-progress-3.webp`,
      ],
      datePublished: "2026-09-21",
      dateModified: "2026-09-21",
      inLanguage: "en-IN",
      author: realRevenue,
      publisher: realRevenue,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/news/purva-orient-grand-construction-final-stages-2026`,
      },
      articleSection: "Project Update",
      keywords:
        "Purva Orient Grand construction status, Purva Orient Grand possession, Karnataka RERA, MIVAN construction, Puravankara",
      about: [projectEntity, developerEntity],
      contentLocation: lalBaghRoad,
    },
  },
];

export default NewsData;
