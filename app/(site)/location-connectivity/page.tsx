import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import LocationAdvantages from "@/components/LocationAdvantages";
import StickyDownloadButton from "@/components/StickyButton";

import locationMap from "@/assets/pog/location-map.webp";
import lalbaghGlasshouse from "@/assets/pog/lalbagh-glasshouse.webp";
import bangaloreClub from "@/assets/pog/bangalore-club.webp";
import ubCity from "@/assets/pog/ub-city.webp";
import itcGardenia from "@/assets/pog/itc-gardenia.webp";
import bishopCotton from "@/assets/pog/bishop-cotton.webp";

const SITE_URL = "https://purvaorientgrandlalbagh.com";
const PAGE_URL = `${SITE_URL}/location-connectivity`;
const PAGE_TITLE = "Purva Orient Grand Location — Lal Bagh Road, Central Bengaluru";
const PAGE_DESCRIPTION =
  "Purva Orient Grand is at Municipal No. 5, Lal Bagh Main Road, Sudhama Nagar, Bengaluru 560027 — 5 mins from Lalbagh Botanical Garden and the Green Line metro.";
const PROJECT_ADDRESS = "Purva Orient Grand, Lal Bagh Main Road, Sudhama Nagar, Bengaluru 560027";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "Purva Orient Grand location",
    "Purva Orient Grand Lalbagh",
    "apartments near Lalbagh",
    "Lal Bagh Road apartments",
    "CBD Bangalore luxury flats",
    "luxury apartments central Bangalore",
    "Puravankara Lal Bagh",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Purva Orient Grand",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Purva Orient Grand tower on Lal Bagh Main Road, Central Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/images/og-image.webp`],
  },
};

// Content file Section 9 distance table (developer-published times / approximate distances)
const keyDistances = [
  ["Lalbagh Botanical Garden", "5 minutes", "240 protected acres"],
  ["Lalbagh Metro Station", "5 minutes", "Green Line, approx. 0.5 km"],
  ["Bangalore Club", "5 minutes", "Established 1868"],
  ["MG Road Metro Station", "10 minutes", "Central Business District"],
  ["Sir M. Visvesvaraya Metro Station", "approx. 2 km", "Purple Line"],
  ["Cubbon Park Metro Station", "approx. 3 km", "Purple Line"],
  ["KSR Bengaluru City Railway Station", "approx. 2.8 km", "Straight-line distance"],
  ["Kempegowda International Airport", "60 minutes", "approx. 35 km"],
];

// Brochure "Connected To The City's Finest" drive times (Lalbagh per content file: 5 mins)
const cityFinest = [
  {
    title: "Schools",
    items: [
      ["Bishop Cotton Boys' School", "6 mins"],
      ["Bishop Cotton Girls' School", "7 mins"],
      ["Sacred Heart School", "8 mins"],
      ["Baldwin Girls' High School", "10 mins"],
      ["Sophia High School", "20 mins"],
    ],
  },
  {
    title: "Colleges & Universities",
    items: [
      ["St. Joseph's University", "4 mins"],
      ["Bangalore Medical College", "11 mins"],
      ["Christ University", "15 mins"],
      ["Mount Carmel College", "16 mins"],
      ["St. John's Medical College", "22 mins"],
      ["Indian Institute of Science (IISc)", "25 mins"],
    ],
  },
  {
    title: "Healthcare",
    items: [
      ["HCG Hospital", "7 mins"],
      ["St. Martha's Hospital", "9 mins"],
      ["VSH Hospital", "11 mins"],
      ["Victoria Hospital", "12 mins"],
      ["Rangadore Memorial Hospital", "12 mins"],
    ],
  },
  {
    title: "Luxury Hotels",
    items: [
      ["The Ritz-Carlton", "4 mins"],
      ["ITC Gardenia", "11 mins"],
      ["Shangri-La", "15 mins"],
      ["ITC Windsor", "16 mins"],
      ["The Leela Palace", "22 mins"],
      ["The Lalit Ashok", "25 mins"],
    ],
  },
  {
    title: "Landmarks & Clubs",
    items: [
      ["Bangalore Club", "5 mins"],
      ["Lalbagh Botanical Garden", "5 mins"],
      ["Cubbon Park", "8 mins"],
      ["Tipu Sultan's Summer Palace", "14 mins"],
      ["Bangalore Golf Club", "17 mins"],
      ["Vidhana Soudha", "19 mins"],
    ],
  },
  {
    title: "Shopping & Entertainment",
    items: [
      ["Garuda Mall", "11 mins"],
      ["UB City", "15 mins"],
      ["Lido Mall", "15 mins"],
      ["Nexus Mall Koramangala", "25 mins"],
    ],
  },
];

// Brochure page 6 — "A Neighbourhood That Enriches Life"
const neighbourhood = [
  {
    title: "Lalbagh Botanical Garden · 5 mins",
    image: lalbaghGlasshouse,
    alt: "The Lalbagh Glass House lit at dusk inside Lalbagh Botanical Garden, five minutes from Purva Orient Grand",
  },
  {
    title: "Bangalore Club · Est. 1868",
    image: bangaloreClub,
    alt: "Colonnaded portico of the Bangalore Club at dusk, established in 1868, five minutes from Lal Bagh Main Road",
  },
  {
    title: "UB City · 15 mins",
    image: ubCity,
    alt: "UB City towers on Vittal Mallya Road in Bengaluru's Central Business District",
  },
  {
    title: "ITC Gardenia · 11 mins",
    image: itcGardenia,
    alt: "Aerial view of the ITC Gardenia hotel with its landscaped terraces in Central Bengaluru",
  },
  {
    title: "Bishop Cotton Boys' School · 6 mins",
    image: bishopCotton,
    alt: "Aerial view of the Bishop Cotton Boys' School playing fields in Central Bengaluru",
  },
];

// Lalbagh permanence and the CBD land argument (content file Sections 9, 10 and 16)
const permanencePoints = [
  "Permanent green edge — Lalbagh is a 240-acre protected botanical garden that cannot be acquired, subdivided or built over",
  "Land is 52% of this project's cost — about ₹119.4 Cr of an approximately ₹228 Cr total in the RERA filing, against a typical 20–30% on suburban projects",
  "Redevelopment-only supply — new CBD homes arrive one small parcel at a time, which is why boutique projects of ten to sixty homes dominate the segment",
  "Two metro lines close by — the Green Line at Lalbagh (approx. 0.5 km) and the Purple Line at Sir M. Visvesvaraya (approx. 2 km) and Cubbon Park (approx. 3 km)",
  "Clear price tiering — Lavelle Road and UB City transact at roughly ₹35,000–₹55,000 per sq ft, Richmond Town and Sadashivanagar at ₹20,000–₹28,000; Purva Orient Grand's ₹27,900–₹30,100 sits at the top of premium",
  "A known comparable set — Prestige Kenilworth Residences, Sobha Indraprastha, Embassy Habitat and Spectra Cypress are all boutique CBD redevelopments priced on the same scarcity logic",
];

const faqs = [
  {
    q: "Where exactly is Purva Orient Grand located?",
    a: "Municipal No. 5, Lal Bagh Main Road, Ward 118, Sudhama Nagar, Bengaluru 560027 — in Central Bengaluru, five minutes from Lalbagh Botanical Garden and Lalbagh Metro Station on the Green Line.",
  },
  {
    q: "What is the nearest metro station to Purva Orient Grand?",
    a: "Lalbagh Metro Station on the Green Line, approximately five minutes or around half a kilometre away. MG Road Metro is approximately ten minutes, and the Purple Line stations at Sir M. Visvesvaraya (approx. 2 km) and Cubbon Park (approx. 3 km) are also close.",
  },
  {
    q: "How far is Lalbagh Botanical Garden from Purva Orient Grand?",
    a: "About five minutes. Lalbagh is a 240-acre protected botanical garden — it cannot be acquired, subdivided or built over, so the green around it is permanent in a way that almost nothing else in Bengaluru is.",
  },
  {
    q: "How far is the airport and the railway station?",
    a: "Kempegowda International Airport is approximately 60 minutes by road, around 35 km. KSR Bengaluru City Railway Station is approximately 2.8 km away in a straight line.",
  },
  {
    q: "Which schools and hospitals are near Purva Orient Grand?",
    a: "Bishop Cotton Boys' School is 6 minutes away, Bishop Cotton Girls' School 7, Sacred Heart School 8 and Baldwin Girls' High School 10; St. Joseph's University is 4 minutes. HCG Hospital is 7 minutes and St. Martha's Hospital 9 minutes. These are indicative drive times published by the developer.",
  },
  {
    q: "Why is Central Bengaluru priced so much higher than the IT corridors?",
    a: "Because land, not construction, is the scarce input. In this project's own RERA filing, land accounts for fifty-two per cent of total project cost, against a typical twenty to thirty per cent in the suburbs. New supply in the CBD comes only from redeveloping small parcels, and Lalbagh's 240 protected acres cannot be built over.",
  },
  {
    q: "What is the PIN code of Purva Orient Grand?",
    a: "560027 — Sudhama Nagar, Bengaluru, Karnataka. The project sits in Ward 118 on Lal Bagh Main Road.",
  },
];

export default function LocationConnectivityPage() {
  return (
    <>
      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Location & Connectivity", item: PAGE_URL },
            ],
          }),
        }}
      />

      {/* Schema Markup - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <PageBanner
        eyebrow="The Address"
        title="Lal Bagh Main Road, Central Bengaluru"
        subtitle="Municipal No. 5, Lal Bagh Main Road, Ward 118, Sudhama Nagar, Bengaluru 560027 — five minutes from Lalbagh Botanical Garden and the Green Line metro."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto prose max-w-none text-gray-700">
          <h1 className="text-3xl font-semibold text-gray-900 mb-5">{PAGE_TITLE}</h1>
          <p className="mb-4">
            Municipal No. 5, Lal Bagh Main Road, Ward 118, Sudhama Nagar, Bengaluru 560027. This is the address that does
            not exist anymore. Central Bengaluru stopped producing new residential land decades ago, and what comes to
            market now arrives one redeveloped parcel at a time. There is no next phase here, no adjoining launch, no
            future tower in front of you.
          </p>
          <p>
            The 24.1-metre road frontage and the Lalbagh adjacency are the two things this address gives you that cannot be
            reproduced elsewhere in the city at any price. Lalbagh Botanical Garden — 240 protected acres — is about five
            minutes away, Lalbagh Metro Station on the Green Line is roughly half a kilometre away, and Hudson Circle, RV
            Road, the Government College of Pharmacy and HCG Hospital are adjacent landmarks.
          </p>
          <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
            {keyDistances.map(([name, time, note]) => (
              <div key={name} className="border-t-2 border-[#c8922a] pt-4">
                <h3 className="font-bold text-gray-900">{name}</h3>
                <p className="text-[#c8922a]">{time}</p>
                <p className="text-sm text-gray-600">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-8">
            Times are indicative drive times published by the developer rather than measured distances, and distances are
            approximate. Verify your own commutes during a site visit.
          </p>
          <div className="mt-4">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(PROJECT_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c8922a] hover:bg-[#b07d20] text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Get Driving Directions →
            </a>
          </div>
        </div>
      </section>

      <LocationAdvantages />

      {/* Connected To The City's Finest */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4 text-center">
            Connected to the City&apos;s Finest
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm text-center max-w-3xl mx-auto">
            Central Bengaluru&apos;s schools, colleges, hospitals, hotels, clubs and landmarks, with the drive times the
            developer publishes from Lal Bagh Main Road. They are indicative — treat them as a guide and check the routes
            that matter to you.
          </p>

          <div className="max-w-xl mx-auto mb-10">
            <Image
              src={locationMap}
              alt="Official Purva Orient Grand location map showing the project on Lal Bagh Main Road near Lalbagh Botanical Garden, Richmond Circle, Cubbon Park, UB City and MG Road (not to scale)"
              sizes="(max-width: 640px) 100vw, 576px"
              className="w-full h-auto rounded-lg shadow-md border border-[#e5dcc5]"
            />
          </div>

          {cityFinest.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold text-gray-900 text-xl mb-3">{group.title}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                {group.items.map(([name, time]) => (
                  <li key={name} className="flex items-start gap-3">
                    <span className="text-[#c8922a] mt-1">•</span>
                    <span className="text-gray-600 text-sm">
                      {name} — {time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="text-gray-600 leading-relaxed text-sm">
            Also serving the neighbourhood: Baldwin Boys&apos; High School, St Joseph&apos;s Boys&apos; High School and
            National Public School; Fortis Hospital on Bannerghatta Road, Apollo Hospital, Mallya Hospital and NIMHANS; and
            for shopping, Forum Mall Koramangala, Mantri Square, MG Road and Brigade Road. All times on this page are
            indicative drive times published by the developer.
          </p>
        </div>
      </section>

      {/* A Neighbourhood That Enriches Life */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4 text-center">
            A Neighbourhood That Enriches Life
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10 text-sm text-center max-w-3xl mx-auto">
            Cubbon Park, ITC Gardenia, the Bangalore Club, Bishop Cotton Boys&apos; School, UB City, MG Road and Brigade
            Road are all part of the immediate world of this address. Lalbagh spreads over 240 acres and houses India&apos;s
            largest collection of tropical plants, including trees several centuries old; the Bangalore Club, established in
            1868, remains one of the oldest clubs in India; and Bishop Cotton Boys&apos; School has educated the city since
            1865.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {neighbourhood.map((card) => (
              <div
                key={card.title}
                className="relative h-56 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 200px"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 p-4">
                  <p className="text-white text-sm font-medium leading-snug">{card.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why the Lalbagh address is permanent */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Why the Lalbagh Address Is Permanent
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            The case for the CBD is not about amenities. Every ₹8 crore project in Bengaluru has an infinity pool. The case
            is about land — and about what can never be built in front of you. Lalbagh is not a park that a developer might
            one day acquire; it is a protected botanical garden, and the green it gives this part of the city is
            permanent. Permanence is precisely what you are buying in the CBD.
          </p>
          <ul className="space-y-2 mb-8">
            {permanencePoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">✓</span>
                <span className="text-gray-600 text-sm">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            The buyer base here is not the IT-corridor buyer. It is corporate leadership, professionals with practices in
            the CBD, old-Bangalore families trading up within their own neighbourhood, and NRIs who want an address that
            will still read correctly in twenty years. The whole project is 97 homes on 1.15 acres, and what remains is the
            larger, higher-floor inventory — ask us for live availability.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/price" className="text-[#DCA54A] hover:underline font-medium">
              Purva Orient Grand price list →
            </Link>
            <Link
              href="/blogs/why-cbd-bangalore-property-appreciates"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              Why CBD Bangalore property holds its value →
            </Link>
            <Link href="/contact-us" className="text-[#DCA54A] hover:underline font-medium">
              Book a site visit →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
