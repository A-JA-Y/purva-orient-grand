import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AboutProject from "@/components/AboutProject";
import LalbaghAdvantage from "@/components/LalbaghAdvantage";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

import towerDay from "@/assets/pog/tower-day.webp";
import gateViewNight from "@/assets/pog/gate-view-night.webp";
import towerBlueHour from "@/assets/pog/tower-blue-hour.webp";
import facadeSunset from "@/assets/pog/facade-sunset.webp";
import spiralStaircase from "@/assets/pog/spiral-staircase.webp";
import orientPressLegacy from "@/assets/pog/orient-press-legacy.webp";

const SITE_URL = "https://purvaorientgrandlalbagh.com";
const PAGE_URL = `${SITE_URL}/about-purva-orient-grand`;
const PAGE_TITLE = "About Purva Orient Grand | 97 Residences on Lal Bagh Road";
const PAGE_DESCRIPTION =
  "Purva Orient Grand by Puravankara: 97 ultra-luxury 3 & 4 BHK homes in one G+24 tower on Lal Bagh Main Road, Bengaluru. Zero shared walls, rooftop club at Level 25.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "Purva Orient Grand",
    "About Purva Orient Grand",
    "Purva Orient Grand Lalbagh",
    "Puravankara Lal Bagh",
    "WorldHome Collection Puravankara",
    "Orient Press Bengaluru",
    "luxury apartments central Bangalore",
    "4 BHK flats Lalbagh Road",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "About Purva Orient Grand | One Tower, 97 Homes Beside Lalbagh",
    description:
      "One tower. Ninety-seven homes. No shared walls. A Victorian-inspired rooftop club with an infinity pool at the 25th level, five minutes from Lalbagh Botanical Garden.",
    url: PAGE_URL,
    siteName: "Purva Orient Grand",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Purva Orient Grand, a single G+24 tower of 97 residences on Lal Bagh Main Road, Central Bengaluru",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "About Purva Orient Grand", item: PAGE_URL },
  ],
};

// Content file Section 4 — key highlights
const highlights = [
  { value: "1.15 Acres", label: "On Lal Bagh Main Road, Central Bengaluru" },
  { value: "97 Homes", label: "The entire project" },
  { value: "G+24", label: "A single tower over two basement levels" },
  { value: "Zero Shared Walls", label: "No residence abuts another" },
  { value: "Level 25", label: "Infinity pool and rooftop club" },
  { value: "The Rose & Cypress", label: "Victorian-inspired rooftop clubhouse" },
  { value: "Andy Fisher, Singapore", label: "Rooftop club architect" },
  { value: "240 Acres", label: "Protected Lalbagh Botanical Garden, five minutes away" },
  { value: "5 Minutes", label: "To Lalbagh Metro on the Green Line" },
  { value: "10 Minutes", label: "To MG Road Metro" },
  { value: "BluNex", label: "Home automation in every residence" },
  { value: "WorldHome Collection", label: "Puravankara's ultra-luxury line" },
];

// Brochure "The Hallmarks of an Icon"
const hallmarks = [
  { value: "Lalbagh Road", label: "The city's most prestigious address" },
  { value: "1.15 Acres", label: "A boutique development" },
  { value: "97 Residences", label: "Exceptionally limited" },
  { value: "3 & 4 BHK", label: "Generously proportioned, in four grades" },
  { value: "75%+ Open Spaces", label: "Designed around nature" },
  { value: "Sky Club", label: "On the 25th floor, with the infinity pool" },
];

const designTeam = [
  { name: "Urban Frame", role: "Concept architecture" },
  { name: "SDG, Mumbai", role: "Façade design" },
  { name: "Master Plan, Chennai", role: "Landscape design" },
  { name: "Andy Fisher, Singapore", role: "The Rose & Cypress rooftop club" },
];

const designCards = [
  {
    title: "A grand entry and arrival court on Lal Bagh Main Road",
    image: gateViewNight,
    alt: "Night render of the Purva Orient Grand entrance portal on Lal Bagh Main Road, with the sculpture court and the lit G+24 tower behind it",
  },
  {
    title: "Private decks to every home, and no shared walls",
    image: facadeSunset,
    alt: "Corner of the Purva Orient Grand façade at sunset, showing stacked glass-railed private decks above the Central Bengaluru skyline",
  },
  {
    title: "One G+24 tower, composed by Urban Frame and SDG Mumbai",
    image: towerBlueHour,
    alt: "Artistic impression of the Purva Orient Grand tower at blue hour, its balconies lit and the landscaped podium and basketball court at its base",
  },
];

export default function AboutPurvaOrientGrandPage() {
  return (
    <>
      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageBanner
        eyebrow="The Project"
        title="About Purva Orient Grand"
        subtitle="One tower, 97 homes, zero shared walls and a rooftop club at the 25th level, five minutes from the protected Lalbagh Botanical Garden."
      />
      <ModalWrapper />
      <AboutProject heading={true} />

      {/* Key Highlights — content file Section 4 */}
      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <div className="text-center">
            <p className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">At a Glance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Purva Orient Grand Key Highlights</h2>
            <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
              Central Bengaluru does not make new land, which is why projects here are boutique by necessity rather than by
              marketing choice. This is the whole of Purva Orient Grand: one tower, 97 homes and a rooftop given over entirely
              to its residents.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.value} className="bg-white p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-[#c8922a] mb-1">{item.value}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Hallmarks of an Icon — brochure */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src={towerDay}
              alt="Daylight render of Purva Orient Grand seen from Lal Bagh Main Road, the white G+24 tower rising behind mature trees and the gated entrance"
              sizes="(max-width: 768px) 100vw, 480px"
              className="w-full h-auto rounded-lg shadow-md border border-[#e5dcc5]"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <p className="uppercase text-xs tracking-widest text-[#DCA54A]">Where Legacy Takes Form</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">The Hallmarks of an Icon</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Some addresses become part of a city; only a few become part of its identity. Purva Orient Grand sits on 1.15
              acres at Municipal No. 5, Lal Bagh Main Road, Sudhama Nagar, with a 24.1-metre road frontage and a sanctioned
              floor area ratio of 4.28 — a CBD figure, and the reason a boutique project is viable on so small a parcel.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-2">
              {hallmarks.map((item) => (
                <div key={item.value} className="border-t-2 border-[#c8922a] pt-4">
                  <h3 className="font-bold text-gray-900">{item.value}</h3>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design decisions and design team — content file Section 3 */}
      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <div className="text-center">
            <p className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">Architecture &amp; Design</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Two Design Decisions Define It</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">No residence shares a wall</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                In a single-tower project, zero shared walls is expensive to achieve — it costs saleable area — and it is the
                thing residents notice every day. Every home at Purva Orient Grand has private decks and an independent
                envelope on multiple sides, so no living room, bedroom or deck sits against a neighbour&apos;s.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The roof belongs to the residents</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Levels 24 and 25 are given over entirely to The Rose &amp; Cypress, a Victorian-inspired rooftop club with an
                infinity pool at the 25th level, The Vault whisky lounge, The Aura Spa, The Salon, the Body Core Fitness
                Studio, The Larder Room, a firepit lounge and rooftop dining at The Dovecote. On a 97-home project, that is
                roughly one club for every hundred residents.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {designCards.map((card) => (
              <div
                key={card.title}
                className="relative h-56 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                  sizes="(max-width: 640px) 100vw, 320px"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 p-4">
                  <p className="text-white text-sm font-medium leading-snug">{card.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">An Unusually Credited Design Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {designTeam.map((member) => (
                <div key={member.name} className="bg-white p-6 rounded-lg border border-[#e5dcc5]">
                  <h4 className="font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-[#c8922a] text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Orient Press heritage — brochure page 5 */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div className="text-center">
            <p className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">The Orient Press · Since 1946</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Bringing Bengaluru&apos;s Legacy to Your Legacy
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <p className="text-gray-600 text-sm leading-relaxed">
              Dr. G. Srinivasan, a respected magistrate and an eminent philanthropist, founded the Orient Press in 1946.
              Integral to the literary fabric of Karnataka, it was a revered establishment frequented by political icons,
              sovereigns and prominent authors, and the publishing house embodied the vision of a new, independent India. Its
              heritage is bound up with its founder and with Bengaluru itself. Purva Orient Grand is a homage to this legacy.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The archive tells the story. C. Rajagopalachari, the first Governor General of India, released the Kannada
              translation of his Ramayana, printed and published at the Orient Grand Press. Dr. Srinivasan appears alongside
              Dr. S. Radhakrishnan and V.V. Giri, and — as an active member of the Indian Red Cross Society — with Shri
              Jayachamarajendra Wadiyar in the Glass House of Lalbagh Botanical Garden, a few minutes from this address.
            </p>
          </div>
          <Image
            src={orientPressLegacy}
            alt="Brochure spread on the Orient Press legacy: archival photographs of founder Dr. G. Srinivasan with C. Rajagopalachari, Dr. S. Radhakrishnan, V.V. Giri and Jayachamarajendra Wadiyar"
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto rounded-lg shadow-md border border-[#e5dcc5]"
          />
        </div>
      </section>

      <LalbaghAdvantage />

      {/* Developer and RERA status */}
      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <p className="uppercase text-xs tracking-widest text-[#DCA54A]">The Art of Development. Since 1975.</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Built by Puravankara, Registered with Karnataka RERA</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Purva Orient Grand belongs to the WorldHome Collection, the ultra-luxury line of Puravankara Limited — a
              Bengaluru developer founded in 1975 and listed on the BSE and NSE since 2007, with 95 completed projects and more
              than 57 million sq ft delivered across nine Indian cities.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The project is registered with Karnataka RERA under PRM/KA/RERA/1251/310/PR/210907/004299 (7 September 2021),
              with a filed completion date of 30 June 2027. It is under construction in its final stages and the occupancy
              certificate has not yet been received. Verify the registration at rera.karnataka.gov.in before booking.
            </p>
            <ul className="flex flex-col gap-2 mt-1">
              {[
                "3 BHK Super Premium and 4 BHK Elegance, Luxury and Grandeur",
                "Launch range ₹6.00 Cr – ₹10.78 Cr; current published position ₹9 Cr onwards",
                "Limited inventory: the larger, higher-floor residences remain",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#c8952a] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-wrap gap-4 items-center">
              <Link
                href="/contact-us"
                className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
              >
                Check Remaining Inventory
              </Link>
              <Link href="/about-puravankara" className="text-[#c8922a] hover:underline font-semibold text-sm">
                About Puravankara →
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/configurations" className="text-[#c8922a] hover:underline">Configurations</Link>
              <Link href="/price" className="text-[#c8922a] hover:underline">Price list</Link>
              <Link href="/floor-plans" className="text-[#c8922a] hover:underline">Floor plans</Link>
              <Link href="/master-plan" className="text-[#c8922a] hover:underline">Master plan</Link>
              <Link href="/amenities" className="text-[#c8922a] hover:underline">Amenities</Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={spiralStaircase}
              alt="Looking down a sculpted spiral staircase with ornate balustrades, the image Puravankara uses for The Art of Development since 1975"
              sizes="(max-width: 768px) 100vw, 480px"
              className="w-full h-auto rounded-lg shadow-md border border-[#e5dcc5]"
            />
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
