import type { Metadata } from "next";
import dynamic from "next/dynamic";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReraStrip from "@/components/QRsectionsm";
import ContactForm from "@/components/ContactForm";
import ModalWrapper from "@/components/ModalWrapper";
import HomePageHeader from "@/components/HomePageHeader";
import JsonLd from "@/components/JsonLd";
import towerSunset from "@/assets/pog/tower-sunset.webp";
import infinityPool from "@/assets/pog/infinity-pool.webp";
import {
  SITE_URL,
  OG_IMAGE,
  LOGO_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
  AGENT_ID,
  PROJECT_ID,
  DEVELOPER_ID,
} from "@/utils/schema";

// Lazy load below-the-fold components
const AboutProject = dynamic(() => import("@/components/AboutProject"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const LalbaghAdvantage = dynamic(() => import("@/components/LalbaghAdvantage"));
const ReasonsToInvest = dynamic(() => import("@/components/ReasonToInvest"));
const VillaFeatures = dynamic(() => import("@/components/PremiumInventory"));
const PlansSection = dynamic(() => import("@/components/FloorPlan"));
const EmiCalculator = dynamic(() => import("@/components/EmiCalculator"));
const LocationAdvantages = dynamic(() => import("@/components/LocationAdvantages"));
const WalkThroughVideo = dynamic(() => import("@/components/WalkThroughVideo"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const NewsSection = dynamic(() => import("@/components/NewsSection"));
const EnquirySection = dynamic(() => import("@/components/EnquirySection"));
const QRSection = dynamic(() => import("@/components/QRSections"));
const StickyDownloadButton = dynamic(() => import("@/components/StickyButton"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingWhatsapp = dynamic(()=>import("@/components/FloatingWhatsapp"));
const FloatingCall = dynamic(()=>import("@/components/FloatingcallButton"));

// Homepage-only canonical and og:url (kept out of the root layout so inner pages
// never inherit the homepage canonical).
export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Purva Orient Grand | 97 Residences Beside Lalbagh, Central Bengaluru",
    description:
      "One tower. Ninety-seven homes. No shared walls. An infinity pool on the 25th level, and a 240-acre botanical garden that can never be built over.",
    url: `${SITE_URL}/`,
    siteName: "Purva Orient Grand",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Purva Orient Grand, a single G+24 tower of 97 residences on Lal Bagh Main Road, Central Bengaluru",
        type: "image/webp",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const RERA_NUMBER = "PRM/KA/RERA/1251/310/PR/210907/004299";
const PHONE = "+91-63566-63535";
const EMAIL = "vishalajitsaria1988@gmail.com";

const PROJECT_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Municipal No. 5, Lal Bagh Main Road, Ward No. 118, Sudhama Nagar",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560027",
  addressCountry: "IN",
};

const PROJECT_GEO = { "@type": "GeoCoordinates", latitude: 12.9535, longitude: 77.5885 };

const floorPlans: [string, number, number, number][] = [
  ["3 BHK Super Premium", 3, 1902, 2262],
  ["4 BHK Elegance", 4, 2155, 2489],
  ["4 BHK Luxury (Corner)", 4, 2629, 2741],
  ["4 BHK Grandeur (Corner)", 4, 3095, 3360],
];

const amenities = [
  "Infinity Pool at Level 25",
  "The Rose & Cypress Rooftop Club",
  "The Vault Whisky Lounge",
  "The Aura Spa & Salon",
  "Body Core Fitness Studio & Pilates Studio",
  "Rooftop & Terrace Dining",
  "Games Lounge, Reading Lounge & Business Centre",
  "Koi Pond & Healing Garden",
  "Paw Park & Children's Activity Trail",
  "Mini Golf Putting Green",
  "BluNex Home Automation",
  "Two Basement Parking Levels",
  "CCTV, Intercom & Fire Safety",
];

const projectProperties: [string, string][] = [
  ["RERA Number", RERA_NUMBER],
  ["RERA Completion Date", "2027-06-30"],
  ["Availability", "Limited units"],
  ["Land Area", "1.15 acres"],
  ["Tower Configuration", "2B + G + 24 floors, single tower"],
  ["Open Space", "75%+"],
  ["Construction Technology", "MIVAN aluminium formwork"],
  ["Approving Authority", "BBMP, Bengaluru Urban"],
  ["Collection", "Puravankara WorldHome Collection"],
];

const faqs = [
  {
    q: "Where is Purva Orient Grand located?",
    a: "Purva Orient Grand is at Municipal No. 5, Lal Bagh Main Road, Sudhama Nagar, Bengaluru 560027 — five minutes from Lalbagh Botanical Garden and Lalbagh Metro Station (Green Line) in Central Bengaluru.",
  },
  {
    q: "What is the Purva Orient Grand price?",
    a: "The launch range was ₹6.00 Cr to ₹10.78 Cr. The current published price is ₹9 Cr onwards, as most 3 BHK and lower-floor 4 BHK units are sold. Prices are indicative and exclude GST, stamp duty and registration.",
  },
  {
    q: "What configurations are available at Purva Orient Grand?",
    a: "3 BHK Super Premium (1,902–2,262 sq ft), 4 BHK Elegance (2,155–2,489 sq ft), 4 BHK Luxury corner (2,629–2,741 sq ft) and 4 BHK Grandeur corner (3,095–3,360 sq ft), all super built-up.",
  },
  {
    q: "What is the RERA number of Purva Orient Grand?",
    a: "Karnataka RERA PRM/KA/RERA/1251/310/PR/210907/004299, registered on 7 September 2021. Verify at rera.karnataka.gov.in.",
  },
  {
    q: "When is the possession date for Purva Orient Grand?",
    a: "The RERA-filed completion date is 30 June 2027. The tower is in its final stages of construction.",
  },
  {
    q: "How many apartments are there in Purva Orient Grand?",
    a: "97 residences in a single G+24 tower on 1.15 acres — 23 3 BHK and 74 4 BHK homes. No residence shares a wall with another.",
  },
  {
    q: "What amenities does Purva Orient Grand offer?",
    a: "The Rose & Cypress rooftop club on Levels 24–25 with an infinity pool, whisky lounge, spa, salon, fitness and Pilates studios, rooftop dining, games and reading lounges, business centre, plus a koi pond, healing garden, Paw Park and mini golf at ground and terrace levels.",
  },
  {
    q: "Who is the developer of Purva Orient Grand?",
    a: "Puravankara Limited, founded in 1975 and listed on the BSE and NSE since 2007. Purva Orient Grand is part of its WorldHome Collection ultra-luxury line.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Real Revenue",
      legalName: "Earlydays Innovations Pvt. Ltd.",
      url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", url: LOGO_URL },
      description:
        "Real Revenue is an authorised channel partner marketing Purva Orient Grand by Puravankara on Lal Bagh Main Road, Bengaluru.",
      telephone: PHONE,
      email: EMAIL,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Kannada"],
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: "Purva Orient Grand",
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: "en-IN",
    },
    {
      "@type": "RealEstateAgent",
      "@id": AGENT_ID,
      name: "Real Revenue — Authorised Channel Partner, Purva Orient Grand",
      url: `${SITE_URL}/`,
      telephone: PHONE,
      email: EMAIL,
      image: OG_IMAGE,
      priceRange: "₹9 Cr – ₹10.78 Cr",
      areaServed: { "@type": "City", name: "Bengaluru" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Municipal No. 5, Lal Bagh Main Road, Sudhama Nagar",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560027",
        addressCountry: "IN",
      },
      geo: PROJECT_GEO,
      parentOrganization: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "ApartmentComplex",
      "@id": PROJECT_ID,
      name: "Purva Orient Grand",
      alternateName: "Purva Orient Grand Lalbagh",
      url: `${SITE_URL}/`,
      image: [OG_IMAGE, `${SITE_URL}${towerSunset.src}`, `${SITE_URL}${infinityPool.src}`],
      description:
        "Purva Orient Grand is Puravankara's WorldHome Collection project on Lal Bagh Main Road, Sudhama Nagar, Central Bengaluru — a single G+24 tower of 97 ultra-luxury 3 and 4 BHK residences on 1.15 acres, with zero shared walls, private decks and The Rose & Cypress rooftop club with an infinity pool at Level 25. Karnataka RERA PRM/KA/RERA/1251/310/PR/210907/004299, completion 30 June 2027.",
      address: PROJECT_ADDRESS,
      geo: PROJECT_GEO,
      hasMap:
        "https://www.google.com/maps/search/?api=1&query=Purva%20Orient%20Grand%2C%20Lal%20Bagh%20Main%20Road%2C%20Sudhama%20Nagar%2C%20Bengaluru%20560027",
      numberOfAccommodationUnits: 97,
      accommodationFloorPlan: floorPlans.map(([name, numberOfBedrooms, minValue, maxValue]) => ({
        "@type": "FloorPlan",
        name,
        numberOfBedrooms,
        floorSize: { "@type": "QuantitativeValue", minValue, maxValue, unitCode: "FTK" },
      })),
      amenityFeature: amenities.map((name) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true,
      })),
      additionalProperty: projectProperties.map(([name, value]) => ({
        "@type": "PropertyValue",
        name,
        value,
      })),
      petsAllowed: true,
      containedInPlace: { "@type": "Place", name: "Sudhama Nagar, Central Bengaluru" },
    },
    {
      "@type": "Organization",
      "@id": DEVELOPER_ID,
      name: "Puravankara Limited",
      url: "https://www.puravankara.com/",
      foundingDate: "1975",
      description: "Puravankara Limited, developer of Purva Orient Grand, listed on BSE and NSE since 2007.",
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#product`,
      name: "Purva Orient Grand 3 & 4 BHK Apartments, Lal Bagh Main Road",
      image: OG_IMAGE,
      description:
        "3 and 4 BHK ultra-luxury apartments at Purva Orient Grand, Lal Bagh Main Road, Bengaluru. 1,902–3,360 sq ft super built-up. Current published price ₹9 Cr onwards (launch range was ₹6.00 Cr – ₹10.78 Cr).",
      brand: { "@id": DEVELOPER_ID },
      sku: RERA_NUMBER,
      category: "Residential Apartment",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "90000000",
        highPrice: "107800000",
        offerCount: 4,
        availability: "https://schema.org/LimitedAvailability",
        url: `${SITE_URL}/price`,
        seller: { "@id": ORGANIZATION_ID },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

// Main inner pages, to help Google pick sitelinks.
const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    ["About Purva Orient Grand", "/about-purva-orient-grand"],
    ["Configurations", "/configurations"],
    ["Price", "/price"],
    ["Floor Plans", "/floor-plans"],
    ["Master Plan", "/master-plan"],
    ["Location & Connectivity", "/location-connectivity"],
    ["Amenities", "/amenities"],
    ["Contact Us", "/contact-us"],
    ["About Puravankara", "/about-puravankara"],
    ["Blogs", "/blogs"],
    ["News", "/news"],
  ].map(([name, path], i) => ({
    "@type": "SiteNavigationElement",
    position: i + 1,
    name,
    url: `${SITE_URL}${path}`,
  })),
};

// The official film embedded in WalkThroughVideo (components/LiteYT.jsx).
const YOUTUBE_VIDEO_ID = "qEOZyCcbd8A";

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Purva Orient Grand on Lalbagh Road — Official Project Film",
  description: "Puravankara's official film on Purva Orient Grand, Lal Bagh Main Road, Central Bengaluru.",
  thumbnailUrl: OG_IMAGE,
  uploadDate: "2026-08-18T01:26:35-07:00",
  duration: "PT3M7S",
  embedUrl: `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`,
  contentUrl: `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`,
};

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="hidden">
        Purva Orient Grand — 3 and 4 BHK Ultra-Luxury Residences on Lal Bagh Main Road, Central Bengaluru
      </h1>

      {/* SCHEMA START */}
      <JsonLd data={jsonLd} />
      <JsonLd data={siteNavigationSchema} />
      <JsonLd data={videoSchema} />
      {/* SCHEMA END */}

      <HomePageHeader />
      <Hero />
      <ReraStrip />

      <main className="w-full">
        <section className="md:px-[30px] md:py-[45px] md:relative top-[-98px]">
          <div className="md:block max-w-5xl m-auto">
            <ContactForm />
          </div>
        </section>

        <ModalWrapper />

        <AboutProject  heading={false}/>
        <Amenities />
        <LalbaghAdvantage />
        <ReasonsToInvest />
        <VillaFeatures />
        <PlansSection />
        <EmiCalculator />
        <LocationAdvantages />
        <WalkThroughVideo />
        <BlogSection />
        <NewsSection />
        <EnquirySection />
        <QRSection />
      </main>
      <StickyDownloadButton />
      <FloatingCall />
      <FloatingWhatsapp />
      <Footer />
    </div>
  );
}
