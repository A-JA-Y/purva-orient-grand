/**
 * data/guidePages.ts
 *
 * Long-form guide pages that live at the site root (e.g. /is-bangalore-good-to-live-or-invest-in)
 * rather than under /blogs. Each page's MDX body is in content/pages/<slug>.mdx.
 *
 * FAQ items are defined once here: the MDX imports them for the visible accordion and the
 * page builds its FAQPage JSON-LD from the same array, so the two can never drift apart.
 */

export type FAQItem = { q: string; a: string };

export type GuidePageMeta = {
  slug: string;

  /* SEO */
  title: string; // the H1
  shortTitle: string; // breadcrumbs and link lists
  metaTitle: string; // <title>
  metaDescription: string;
  excerpt: string;
  keywords: string[];

  /* Display */
  image: string;
  altText: string;
  category: string;
  readTime: string;
  date: string;
  updatedAt: string;
  author: string;

  faq: FAQItem[];
};

/* ─────────────────────────────────────────────
   1. IS BANGALORE GOOD TO LIVE OR INVEST IN?
───────────────────────────────────────────── */
export const bangaloreLiveInvestFaq: FAQItem[] = [
  {
    q: "Is Bangalore a good place to live in 2026?",
    a: "Yes. The climate, job depth, healthcare and schooling are the strongest in the country. The trade-offs are traffic, water dependence in the newer periphery, and housing that costs more than any other Indian city except Mumbai.",
  },
  {
    q: "Is it better to live in central Bangalore or in the IT corridors?",
    a: "If your office is fixed in a corridor, live near it. If your work or family life is spread across the city, the centre is easier: piped water, mature roads, the Green Line metro, and most destinations within twenty minutes.",
  },
  {
    q: "Is Bangalore good for investment in real estate?",
    a: "Yes, for buyers with a seven-year horizon. The sharp 2022–24 run is behind the city; forward appreciation is steadier, driven by jobs and transit in the corridors and by scarcity in the core.",
  },
  {
    q: "What is the rental yield in central Bangalore?",
    a: "Gross yields in the core are 2.5–3.5%, lower than the 3–4.5% in the IT corridors, but with longer corporate leases and lower vacancy. Any claim above 5% should be checked against actual rent agreements.",
  },
  {
    q: "Which are the best areas to invest in Bangalore?",
    a: "Lalbagh and Sudhama Nagar, Richmond and Langford Town, and Jayanagar for scarcity-led appreciation; Indiranagar, Koramangala and Malleshwaram for lifestyle plus rental; Whitefield, Electronic City and Sarjapur Road for yield; the airport corridor and STRR belt for long-horizon growth.",
  },
  {
    q: "Is Sudhama Nagar near Lalbagh a good place to invest?",
    a: "It is one of the few central pockets still receiving new homes, and only through redevelopment. Asking rates are around ₹27,000–30,000 per sq ft in 2026, the Green Line metro is walkable, and the Lalbagh adjacency is permanent. It suits buyers who value the address over yield.",
  },
  {
    q: "Are property prices in central Bangalore likely to fall?",
    a: "A broad fall is unlikely while supply arrives one small parcel at a time. Central pockets typically flatten rather than drop in weak years, which is the main reason investors who want capital preservation buy there.",
  },
  {
    q: "Is a central Bangalore apartment a good buy for NRIs?",
    a: "Yes. NRIs can purchase residential property under RBI’s general permission, central addresses hold value and liquidity better than peripheral ones, and the tenant pool is corporate and long-term. Appoint a power of attorney and verify khata and title before paying.",
  },
];

/* ─────────────────────────────────────────────
   2. BEST RESIDENTIAL PROJECTS IN BANGALORE 2026
───────────────────────────────────────────── */
export const bestProjectsFaq: FAQItem[] = [
  {
    q: "Which are the best residential projects in Bangalore in 2026?",
    a: "In the centre, Purva Orient Grand on Lal Bagh Main Road. For villas, Embassy Riverine at Tharahunise in North Bangalore and Godrej Florenne off Soukya Road, Whitefield. For apartments in the north, Century Blue Moon at Jakkur and Bhartiya Nikoo Homes 8 at Thanisandra. Those five make up our top 5 residential projects in Bangalore this year.",
  },
  {
    q: "Which is the best area to buy property in Bangalore right now?",
    a: "For appreciation ahead of infrastructure, the North Bangalore airport corridor (Jakkur, Yelahanka, Thanisandra, Tharahunise). For rental demand and resale liquidity, Whitefield and the eastern IT belt. For an established lifestyle and scarcity, central Bangalore around Lalbagh and the CBD, at a premium.",
  },
  {
    q: "What do the top residential projects in Bangalore cost?",
    a: "Branded apartments start around ₹67 lakh to ₹1.5 crore in North Bangalore and run to ₹9–10 crore for a new tower in the centre. Villa projects in Bangalore start around ₹5 crore on the eastern fringe and go past ₹14 crore for large independent villas near the airport.",
  },
  {
    q: "Which are the best villa projects in Bangalore?",
    a: "Embassy Riverine (217 villas on about 50 acres, from ₹14.10 crore) in North Bangalore and Godrej Florenne (4 and 5 BHK row villas on 20 acres, from ₹5.40 crore) off Soukya Road, Whitefield. Both are outside the city core because that is where villa-sized land remains.",
  },
  {
    q: "Is central Bangalore a good investment in 2026?",
    a: "Yes, if you are buying for permanence rather than growth. New supply in the CBD comes only through redevelopment, Lalbagh’s 240 acres can never be built over, and land is about 52 per cent of Purva Orient Grand’s project cost, which is what holds value in a downturn. Do not expect the double-digit annual appreciation that outer belts post from a lower base.",
  },
  {
    q: "How do I check if a project is RERA approved in Bangalore?",
    a: "Search the registration number or the registered project name on the Karnataka RERA portal, confirm the promoter matches the developer, and read the completion date filed there. RERA approved projects in Bangalore must also route 70 per cent of buyer money into a designated escrow account. Search by the registered name where it differs: Century Blue Moon is filed as Century Astoria, and Purva Orient Grand is PRM/KA/RERA/1251/310/PR/210907/004299.",
  },
  {
    q: "Should I buy a villa or an apartment in Bangalore?",
    a: "Below ₹5 crore, a well-located apartment is usually the smarter buy. Above ₹10 crore in the suburbs, independent villas hold value better because the land is the asset. In central Bangalore there is no villa land, so the real comparison is a new tower against a resale in an older building.",
  },
  {
    q: "Which builders are the most trusted in Bangalore?",
    a: "The five developers on this list, Puravankara, Embassy, Godrej Properties, Century Real Estate and Bhartiya Urban, all have delivered, occupied projects in the city. Even so, judge the specific project rather than the logo: the phase RERA, the cluster being sold and the delivery record of similar formats.",
  },
];

/** The five projects on the shortlist, in rank order (used for the ItemList JSON-LD). */
export const bestProjectsList = [
  { name: "Purva Orient Grand", url: "https://purvaorientgrandlalbagh.com/about-purva-orient-grand" },
  { name: "Embassy Riverine", url: "https://embassyriverinevilla.in/" },
  { name: "Godrej Florenne (Godrej Whitefield Villa)", url: "https://godrejwhitefieldvilla.in/" },
  { name: "Century Blue Moon", url: "https://centurybluemoon.co.in/" },
  { name: "Bhartiya Nikoo Homes 8", url: "https://bhartiyanikoohomes8.com/" },
];

export const guidePages: GuidePageMeta[] = [
  {
    slug: "is-bangalore-good-to-live-or-invest-in",
    title:
      "Is Bangalore Good to Live or Invest In? The View From the Centre of the City (2026)",
    shortTitle: "Is Bangalore Good to Live or Invest In?",
    metaTitle: "Is Bangalore Good to Live or Invest In? Central City View 2026",
    metaDescription:
      "Is Bangalore good to live or invest in? A 2026 answer from the city centre: core vs IT-corridor living, property prices, rental yields, best areas, risks and who should buy.",
    excerpt:
      "Bangalore is two housing markets sharing one name. Core vs IT-corridor living, 2026 property prices, rental yields, the best areas, the risks and who should buy — written from Lal Bagh Main Road.",
    keywords: [
      "is Bangalore good to live or invest in",
      "is Bangalore good to live",
      "is Bangalore good for investment",
      "real estate investment in Bangalore",
      "Bangalore property prices 2026",
      "rental yield in Bangalore",
      "best places to invest in Bangalore",
      "best places to live in Bangalore",
      "living in central Bangalore",
      "cost of living in Bangalore",
      "Sudhama Nagar Lalbagh",
      "Purva Orient Grand",
    ],
    image: "/images/is-bangalore-good-to-live-or-invest-in.webp",
    altText:
      "The Lalbagh Glass House lit up at dusk in Lalbagh Botanical Garden, Central Bengaluru",
    category: "City Guide",
    readTime: "14 min read",
    date: "2026-11-04",
    updatedAt: "2026-11-04",
    author: "Real Revenue",
    faq: bangaloreLiveInvestFaq,
  },
  {
    slug: "best-residential-projects-in-bangalore-2026",
    title:
      "Best Residential Projects in Bangalore in 2026: Five Villas and Apartments to Shortlist by Zone and Budget",
    shortTitle: "Best Residential Projects in Bangalore 2026",
    metaTitle: "Best Residential Projects in Bangalore 2026: 5 to Shortlist",
    metaDescription:
      "Comparing the best residential projects in Bangalore? Five 2026 villa and apartment picks in Central, North and East Bangalore, with price, RERA and possession.",
    excerpt:
      "Five residential projects in Bangalore checked on developer record, RERA filing, land, location and a price confirmed this month: Purva Orient Grand, Embassy Riverine, Godrej Florenne, Century Blue Moon and Bhartiya Nikoo Homes 8.",
    keywords: [
      "best residential projects in Bangalore",
      "best residential projects in Bangalore 2026",
      "top 5 residential projects in Bangalore",
      "residential projects in North Bangalore",
      "best villa projects in Bangalore",
      "villa projects in Bangalore",
      "RERA approved projects in Bangalore",
      "luxury apartments in North Bangalore",
      "Purva Orient Grand",
      "Embassy Riverine",
      "Godrej Florenne",
      "Century Blue Moon",
      "Bhartiya Nikoo Homes 8",
    ],
    image: "/images/best-residential-projects-in-bangalore-2026.webp",
    altText:
      "Collage of the five shortlisted projects: the Purva Orient Grand tower, an Embassy Riverine villa, Godrej Florenne row villas, the Century Blue Moon towers and Nikoo Homes 8, artistic impressions",
    category: "Buyer's Shortlist",
    readTime: "16 min read",
    date: "2026-11-04",
    updatedAt: "2026-11-04",
    author: "Real Revenue",
    faq: bestProjectsFaq,
  },
];

export function getGuidePage(slug: string): GuidePageMeta {
  const page = guidePages.find((p) => p.slug === slug);
  if (!page) throw new Error(`Unknown guide page: ${slug}`);
  return page;
}
