export type BlogMeta = {
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
  tags: string[];
  featured: boolean;

  /* JSON-LD */
  schemaMarkup?:
  | Record<string, unknown>
  | Record<string, unknown>[];
  faqSchema?: Record<string, unknown>;
};

const SITE_URL = "https://purvaorientgrandlalbagh.com";

const AUTHOR = {
  "@type": "Organization",
  name: "Real Revenue",
  url: `${SITE_URL}/`,
};

const PUBLISHER = {
  "@type": "Organization",
  name: "Real Revenue",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/purva-orient-grand-logo.png`,
  },
};

const PROJECT_REF = {
  "@type": "ApartmentComplex",
  "@id": `${SITE_URL}/#project`,
  name: "Purva Orient Grand",
  url: `${SITE_URL}/`,
};

const faq = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

/* Shared answers (kept identical to the FAQ text shown in the posts) */
const READY_TO_MOVE_A =
  "No. The project is under construction in its final stages. The RERA-filed completion date is 30 June 2027 and the occupancy certificate has not yet been received. Some listing portals incorrectly show it as ready to occupy.";

export const blogData: BlogMeta[] = [
  /* ─────────────────────────────────────────────
     1. LUXURY APARTMENTS IN CENTRAL BANGALORE
  ───────────────────────────────────────────── */
  {
    id: "blog-luxury-apartments-central-bangalore",

    /* SEO */
    title:
      "Luxury Apartments in Central Bangalore: How Purva Orient Grand Compares",
    slug: "luxury-apartments-central-bangalore",
    excerpt:
      "A qualitative comparison of Purva Orient Grand with Prestige Kenilworth Residences, Sobha Indraprastha, Embassy Habitat and Spectra Cypress — on land, density, design, green adjacency and delivery.",
    metaTitle: "Luxury Apartments in Central Bangalore | Purva Orient Grand",
    metaDescription:
      "Comparing luxury apartments in central Bangalore? See how Purva Orient Grand's 97 homes on Lal Bagh Road stack up on land, density, design and price.",
    keywords: [
      "luxury apartments in central Bangalore",
      "luxury apartments central Bangalore",
      "CBD Bangalore luxury flats",
      "Purva Orient Grand",
      "Purva Orient Grand Lalbagh",
      "apartments near Lalbagh",
      "4 BHK flats Lalbagh Road",
      "Prestige Kenilworth Residences",
      "Sobha Indraprastha",
      "Embassy Habitat",
      "Spectra Cypress",
    ],
    canonical: `${SITE_URL}/blogs/luxury-apartments-central-bangalore`,

    /* Display */
    image: "/images/blog-luxury-apartments-central-bangalore.webp",
    altText:
      "Purva Orient Grand's single G+24 tower lit at dusk above the tree canopy of Central Bengaluru, artistic impression",
    date: "2026-09-22",
    updatedAt: "2026-09-22",
    author: "Real Revenue",
    category: "Buyer's Guide",
    readTime: "11 min read",
    tags: [
      "Central Bengaluru",
      "Luxury Apartments",
      "Lal Bagh Road",
      "Purva Orient Grand",
      "Buyer's Guide",
    ],
    featured: true,

    /* JSON-LD */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "Luxury Apartments in Central Bangalore: How Purva Orient Grand Compares",
      description:
        "A qualitative comparison of luxury apartments in central Bangalore: Purva Orient Grand on Lal Bagh Main Road against Prestige Kenilworth Residences, Sobha Indraprastha, Embassy Habitat and Spectra Cypress.",
      image: `${SITE_URL}/images/blog-luxury-apartments-central-bangalore.webp`,
      datePublished: "2026-09-22",
      dateModified: "2026-09-22",
      author: AUTHOR,
      publisher: PUBLISHER,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blogs/luxury-apartments-central-bangalore`,
      },
      url: `${SITE_URL}/blogs/luxury-apartments-central-bangalore`,
      articleSection: "Buyer's Guide",
      keywords:
        "luxury apartments in central Bangalore, CBD Bangalore luxury flats, Purva Orient Grand, apartments near Lalbagh, 4 BHK flats Lalbagh Road",
      inLanguage: "en-IN",
      timeRequired: "PT11M",
      about: PROJECT_REF,
    },
    faqSchema: faq([
      {
        q: "Which are the leading luxury apartments in central Bangalore?",
        a: "The comparable set most buyers weigh is small: Purva Orient Grand on Lal Bagh Main Road, Prestige Kenilworth Residences and Spectra Cypress in Richmond Town, Embassy Habitat in Vasanth Nagar, and Sobha Indraprastha. All are boutique, redevelopment-led projects. The right choice depends on grade, floor, green adjacency, density and completion timeline, so verify each on Karnataka RERA.",
      },
      {
        q: "How is Purva Orient Grand different from other CBD luxury projects?",
        a: "No residence shares a common wall with another, the 24th and 25th levels are given entirely to The Rose & Cypress rooftop club with an infinity pool at level 25, and Lalbagh Botanical Garden's 240 protected acres are five minutes away. The whole project is 97 homes in a single G+24 tower on 1.15 acres.",
      },
      {
        q: "What is the price of Purva Orient Grand?",
        a: "The launch range ran from approximately ₹6.00 crore for the 3 BHK to approximately ₹10.78 crore for the largest 4 BHK Grandeur, at approximately ₹27,900 to ₹30,100 per sq ft. Puravankara's current published position is ₹9 crore onwards, which indicates the larger and higher-floor residences are what remain. Ask for live inventory.",
      },
      {
        q: "Can I move into Purva Orient Grand now?",
        a: READY_TO_MOVE_A,
      },
      {
        q: "Why is the carpet-to-super-built-up efficiency lower at Purva Orient Grand?",
        a: "Carpet-to-super-built-up runs at approximately 60 to 67 per cent because of the zero-shared-wall design and the scale of the rooftop amenity deck spread across only 97 homes. Compare projects on price per sq ft of carpet area for a fair picture.",
      },
      {
        q: "How do I verify a central Bangalore project's RERA status?",
        a: "Search the registration number at rera.karnataka.gov.in. Purva Orient Grand is registered as PRM/KA/RERA/1251/310/PR/210907/004299, dated 7 September 2021, with a filed completion date of 30 June 2027.",
      },
    ]),
  },

  /* ─────────────────────────────────────────────
     2. WHY CBD BANGALORE PROPERTY HOLDS ITS VALUE
  ───────────────────────────────────────────── */
  {
    id: "blog-why-cbd-bangalore-property-appreciates",

    /* SEO */
    title:
      "CBD Bangalore Real Estate Investment: Why Land Scarcity Drives Long-Term Value",
    slug: "why-cbd-bangalore-property-appreciates",
    excerpt:
      "Land is 52% of Purva Orient Grand's project cost, against 20–30% in the suburbs. What that ratio, redevelopment-only supply, CBD price tiers and Lalbagh's permanence mean for an investor — without the hype.",
    metaTitle: "CBD Bangalore Real Estate Investment: The Land-Cost Case",
    metaDescription:
      "Why CBD Bangalore real estate investment is a land story: a 52% land-cost ratio, redevelopment-only supply, CBD price tiers and Lalbagh's permanence.",
    keywords: [
      "CBD Bangalore real estate investment",
      "Central Bengaluru property investment",
      "CBD Bangalore property prices",
      "land cost ratio real estate",
      "Lavelle Road price per sq ft",
      "Richmond Town apartments price",
      "Purva Orient Grand investment",
      "Purva Orient Grand price",
      "luxury apartments central Bangalore",
    ],
    canonical: `${SITE_URL}/blogs/why-cbd-bangalore-property-appreciates`,

    /* Display */
    image: "/images/blog-why-cbd-bangalore-property-appreciates.webp",
    altText:
      "Aerial view of the red heritage State Central Library surrounded by the dense green canopy of Cubbon Park in Central Bengaluru",
    date: "2026-09-24",
    updatedAt: "2026-09-24",
    author: "Real Revenue",
    category: "Investment",
    readTime: "9 min read",
    tags: [
      "CBD Bangalore",
      "Real Estate Investment",
      "Land Scarcity",
      "Lalbagh",
      "Purva Orient Grand",
    ],
    featured: true,

    /* JSON-LD */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "CBD Bangalore Real Estate Investment: Why Land Scarcity Drives Long-Term Value",
      description:
        "An investor's reading of the land-cost ratio, redevelopment-only supply, CBD price tiers and the Lalbagh factor, using Purva Orient Grand's RERA filing as the worked example.",
      image: `${SITE_URL}/images/blog-why-cbd-bangalore-property-appreciates.webp`,
      datePublished: "2026-09-24",
      dateModified: "2026-09-24",
      author: AUTHOR,
      publisher: PUBLISHER,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blogs/why-cbd-bangalore-property-appreciates`,
      },
      url: `${SITE_URL}/blogs/why-cbd-bangalore-property-appreciates`,
      articleSection: "Investment",
      keywords:
        "CBD Bangalore real estate investment, Central Bengaluru property investment, land cost ratio, CBD Bangalore property prices, Purva Orient Grand",
      inLanguage: "en-IN",
      timeRequired: "PT9M",
      about: PROJECT_REF,
    },
    faqSchema: faq([
      {
        q: "Is CBD Bangalore real estate a good investment?",
        a: "It depends on your horizon and objectives. The structural case rests on land scarcity: new supply comes only from redeveloping small parcels, and at Purva Orient Grand land is about 52% of total project cost against a typical 20 to 30% in the suburbs. That explains the pricing; it does not guarantee returns. Treat it as a long-horizon holding and take independent advice.",
      },
      {
        q: "Why is Central Bengaluru priced so much higher than the IT corridors?",
        a: "Because land, not construction, is the scarce input. In Purva Orient Grand's RERA filing, land accounts for fifty-two per cent of total project cost, against a typical twenty to thirty per cent in the suburbs. New supply in the CBD comes only from redeveloping small parcels, and Lalbagh's two hundred and forty protected acres cannot be built over.",
      },
      {
        q: "What is the land-cost ratio and where do I find it?",
        a: "It is the share of total project cost attributable to land, taken from the cost breakdown a developer files with RERA. Purva Orient Grand's filing shows approximately ₹119.4 crore of land within a total project cost of about ₹228 crore, or roughly 52%.",
      },
      {
        q: "Where does Purva Orient Grand sit in the CBD price tiers?",
        a: "At approximately ₹27,900 to ₹30,100 per sq ft on super built-up area, it sits at the top of the premium band, where Richmond Town and Sadashivanagar trade at roughly ₹20,000 to ₹28,000, and just under the ultra-premium core of Lavelle Road and UB City at roughly ₹35,000 to ₹55,000.",
      },
      {
        q: "Can I move into Purva Orient Grand now?",
        a: READY_TO_MOVE_A,
      },
      {
        q: "What taxes and charges apply when buying in Karnataka?",
        a: "GST at 5% on under-construction consideration, stamp duty of approximately 5% to 6% of agreement value plus cess, registration at 1%, floor-rise, corner and view premiums where applicable, Khata, BWSSB, BESCOM, infrastructure and corpus charges per the agreement, and clubhouse membership and maintenance advance.",
      },
    ]),
  },

  /* ─────────────────────────────────────────────
     3. WHAT IS MIVAN CONSTRUCTION
  ───────────────────────────────────────────── */
  {
    id: "blog-what-is-mivan-construction",

    /* SEO */
    title:
      "What Is MIVAN Construction? Meaning, Benefits and Trade-offs for Homebuyers",
    slug: "what-is-mivan-construction",
    excerpt:
      "MIVAN explained for buyers: how aluminium formwork creates a monolithic concrete structure, why that means flatter walls and fewer cracks, what it costs — and how it works at Purva Orient Grand.",
    metaTitle: "MIVAN Construction Meaning: Benefits & Trade-offs Explained",
    metaDescription:
      "MIVAN construction meaning for homebuyers: aluminium formwork, monolithic RCC, tighter tolerances, fewer cracks and cost, with Purva Orient Grand as the example.",
    keywords: [
      "MIVAN construction meaning",
      "what is MIVAN construction",
      "MIVAN technology",
      "aluminium formwork construction",
      "MIVAN vs conventional construction",
      "MIVAN construction advantages and disadvantages",
      "Purva Orient Grand specifications",
      "Purva Orient Grand construction status",
    ],
    canonical: `${SITE_URL}/blogs/what-is-mivan-construction`,

    /* Display */
    image: "/images/blog-what-is-mivan-construction.webp",
    altText:
      "Aerial view of Purva Orient Grand under construction on Lal Bagh Main Road, showing the MIVAN-cast concrete tower rising above Central Bengaluru",
    date: "2026-09-25",
    updatedAt: "2026-09-25",
    author: "Real Revenue",
    category: "Construction & Specifications",
    readTime: "9 min read",
    tags: [
      "MIVAN",
      "Aluminium Formwork",
      "Construction Quality",
      "Specifications",
      "Purva Orient Grand",
    ],
    featured: true,

    /* JSON-LD */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "What Is MIVAN Construction? Meaning, Benefits and Trade-offs for Homebuyers",
      description:
        "The meaning of MIVAN construction explained for homebuyers: aluminium formwork, monolithic RCC, tolerances, cracking, acoustics and cost, with Purva Orient Grand as the worked example.",
      image: `${SITE_URL}/images/blog-what-is-mivan-construction.webp`,
      datePublished: "2026-09-25",
      dateModified: "2026-09-25",
      author: AUTHOR,
      publisher: PUBLISHER,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blogs/what-is-mivan-construction`,
      },
      url: `${SITE_URL}/blogs/what-is-mivan-construction`,
      articleSection: "Construction & Specifications",
      keywords:
        "MIVAN construction meaning, what is MIVAN construction, aluminium formwork, MIVAN vs conventional construction, Purva Orient Grand specifications",
      inLanguage: "en-IN",
      timeRequired: "PT9M",
      about: PROJECT_REF,
    },
    faqSchema: faq([
      {
        q: "What is the meaning of MIVAN construction?",
        a: "MIVAN construction is a method in which walls and floor slabs are cast together in reinforced concrete using precision-made aluminium formwork. The result is a monolithic structure with tight dimensional tolerances. The name comes from a formwork brand and is now used in India for aluminium formwork construction generally.",
      },
      {
        q: "Is MIVAN better than conventional brick construction?",
        a: "For high-rise towers with repeating floor plans, MIVAN generally delivers flatter walls, tighter tolerances, fewer cracks at frame-to-wall junctions, better acoustic separation and faster floor cycles. The trade-offs are a higher upfront cost and less freedom to alter load-bearing walls later.",
      },
      {
        q: "Can I break or move walls in a MIVAN apartment?",
        a: "Load-bearing concrete walls in a MIVAN structure should not be demolished, cut or given new openings. Check with the developer which walls are structural before planning interiors, and obtain approval for any change.",
      },
      {
        q: "Does MIVAN construction stop cracks completely?",
        a: "No construction method is crack-free. MIVAN removes the joint between the concrete frame and masonry infill in the structural shell, which is a common source of cracks, but minor shrinkage or finishing cracks can still occur.",
      },
      {
        q: "Why does MIVAN construction cost more?",
        a: "The aluminium formwork is a significant upfront investment that is recovered through repeated use. On a boutique single tower it is spread over fewer repetitions, which raises the cost per sq ft.",
      },
      {
        q: "Is Purva Orient Grand built with MIVAN?",
        a: "Yes. Its published specification is a MIVAN aluminium formwork RCC superstructure, seismic compliant, with solid concrete block masonry of 200 mm for external walls and 100 mm for internal walls. The binding document is the specification annexure to the agreement to sell.",
      },
    ]),
  },
];
