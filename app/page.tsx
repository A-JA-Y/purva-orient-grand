import type { Metadata } from "next";
import dynamic from "next/dynamic";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReraStrip from "@/components/QRsectionsm";
import ContactForm from "@/components/ContactForm";
import ModalWrapper from "@/components/ModalWrapper";
import HomePageHeader from "@/components/HomePageHeader";

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

const SITE_URL = "https://purvaorientgrandlalbagh.com";
const OG_IMAGE = `${SITE_URL}/images/og-image.webp`;

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

const faqs = [
  {
    q: "Where is Purva Orient Grand located?",
    a: "Municipal No. 5, Lal Bagh Main Road, Ward 118, Sudhama Nagar, Bengaluru 560027 — in Central Bengaluru, five minutes from Lalbagh Botanical Garden and Lalbagh Metro Station on the Green Line.",
  },
  {
    q: "Is Purva Orient Grand ready for possession?",
    a: "No. The project is under construction in its final stages. The RERA-filed completion date is 30 June 2027 and the occupancy certificate has not yet been received. Some listing portals incorrectly show it as complete.",
  },
  {
    q: "What configurations are available at Purva Orient Grand?",
    a: "Four grades — 3 BHK Super Premium at 1,902 to 2,262 sq ft, 4 BHK Elegance at 2,155 to 2,489 sq ft, 4 BHK Luxury in corner positions at 2,629 to 2,741 sq ft, and 4 BHK Grandeur, also corner, at 3,095 to 3,360 sq ft (super built-up).",
  },
  {
    q: "What is the price of Purva Orient Grand?",
    a: "The launch range ran from approximately ₹6.00 crore for the 3 BHK to approximately ₹10.78 crore for the largest 4 BHK Grandeur, at approximately ₹27,900 to ₹30,100 per sq ft. Puravankara's current published position is ₹9 crore onwards, which indicates the larger and higher-floor residences are what remain. Ask us for live inventory.",
  },
  {
    q: "How many homes are there at Purva Orient Grand?",
    a: "Ninety-seven, in a single tower of two basements plus ground plus twenty-four floors on 1.15 acres.",
  },
  {
    q: "What is special about the design of Purva Orient Grand?",
    a: "No residence shares a common wall with another, and every home has private decks. The twenty-fourth and twenty-fifth levels are given over entirely to The Rose & Cypress rooftop club with an infinity pool at the twenty-fifth level, designed by Andy Fisher of Singapore.",
  },
  {
    q: "What is MIVAN construction and why does it matter?",
    a: "MIVAN is an aluminium formwork system that produces a monolithic concrete structure with much tighter dimensional tolerances than conventional block-and-plaster construction. In practice that means flatter walls, fewer cracks over time and better acoustic separation. It costs more to build.",
  },
  {
    q: "Is Purva Orient Grand RERA approved?",
    a: "Yes. It is registered with Karnataka RERA under PRM/KA/RERA/1251/310/PR/210907/004299, registered on 7 September 2021, with a filed completion date of 30 June 2027. Verify it at https://rera.karnataka.gov.in.",
  },
  {
    q: "How far is the metro from Purva Orient Grand?",
    a: "Lalbagh Metro Station on the Green Line is approximately five minutes away, or around half a kilometre. MG Road Metro is approximately ten minutes.",
  },
  {
    q: "Why is Central Bengaluru priced so much higher than the IT corridors?",
    a: "Because land, not construction, is the scarce input. In this project's own RERA filing, land accounts for fifty-two per cent of total project cost, against a typical twenty to thirty per cent in the suburbs. New supply in the CBD comes only from redeveloping small parcels, and Lalbagh's two hundred and forty protected acres cannot be built over.",
  },
  {
    q: "Who is the developer of Purva Orient Grand?",
    a: "Puravankara Limited, founded in 1975 by Ravi Puravankara, listed on the BSE and NSE since 2007, with approximately ten million sq ft currently under execution across nine Indian cities and an international presence in Dubai, Colombo and Saudi Arabia.",
  },
  {
    q: "Is a home loan available for Purva Orient Grand?",
    a: "Yes. The project is approved by leading banks and housing finance companies. Our team arranges pre-approval and compares offers across lenders at no cost to you.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Purva Orient Grand",
      url: `${SITE_URL}/`,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#agent` },
    },
    {
      "@type": "ApartmentComplex",
      "@id": `${SITE_URL}/#project`,
      name: "Purva Orient Grand",
      url: `${SITE_URL}/`,
      image: OG_IMAGE,
      description:
        "Purva Orient Grand is a 97-residence ultra-luxury development of 3 and 4 BHK homes in a single G+24 tower on 1.15 acres at Lal Bagh Main Road, Sudhama Nagar, Central Bengaluru, part of Puravankara's WorldHome Collection, with a rooftop club and infinity pool at the 25th level.",
      numberOfAccommodationUnits: 97,
      petsAllowed: true,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Municipal No. 5, Lal Bagh Main Road, Ward No. 118, Sudhama Nagar",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560027",
        addressCountry: "IN",
      },
      amenityFeature: [
        "Infinity Pool at 25th Level",
        "The Rose and Cypress Rooftop Club",
        "Spa",
        "Salon",
        "Fitness Studio",
        "Whisky Lounge",
        "Mini Golf Putting Green",
        "Pet Park",
        "Koi Pond and Healing Garden",
        "Home Automation",
      ].map((name) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true,
      })),
    },
    {
      "@type": "Product",
      name: "Purva Orient Grand 3 BHK Super Premium",
      image: OG_IMAGE,
      description:
        "3 BHK Super Premium residence of 1,902 to 2,262 sq ft super built-up area at Purva Orient Grand, Lal Bagh Main Road, Central Bengaluru.",
      brand: { "@type": "Brand", name: "Puravankara Limited" },
      offers: {
        "@type": "Offer",
        price: "60000000",
        priceCurrency: "INR",
        availability: "https://schema.org/LimitedAvailability",
        url: `${SITE_URL}/`,
      },
    },
    {
      "@type": "Product",
      name: "Purva Orient Grand 4 BHK Grandeur",
      image: OG_IMAGE,
      description:
        "4 BHK Grandeur corner residence of 3,095 to 3,360 sq ft super built-up area at Purva Orient Grand, Lal Bagh Main Road, Central Bengaluru.",
      brand: { "@type": "Brand", name: "Puravankara Limited" },
      offers: {
        "@type": "Offer",
        price: "99300000",
        priceCurrency: "INR",
        availability: "https://schema.org/LimitedAvailability",
        url: `${SITE_URL}/`,
      },
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#agent`,
      name: "Real Revenue",
      url: `${SITE_URL}/`,
      image: OG_IMAGE,
      telephone: "+916356663535",
      email: "vishalajitsaria1988@gmail.com",
      areaServed: "Bengaluru",
      parentOrganization: {
        "@type": "Organization",
        name: "Earlydays Innovations Private Limited",
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
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Lalbagh Road Apartments", item: `${SITE_URL}/#location` },
        { "@type": "ListItem", position: 3, name: "Purva Orient Grand", item: `${SITE_URL}/#project` },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="hidden">
        Purva Orient Grand — 3 and 4 BHK Ultra-Luxury Residences on Lal Bagh Main Road, Central Bengaluru
      </h1>

      {/* SCHEMA START */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
