import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

import masterPlan from "@/assets/pog/master-plan.webp";
import masterPlanLegend from "@/assets/pog/master-plan-legend.webp";
import sitePlanRender from "@/assets/pog/site-plan-render.webp";
import towerAerial from "@/assets/pog/tower-aerial.webp";
import clubhousePlan from "@/assets/pog/clubhouse-plan.webp";
import rooftopAerial from "@/assets/pog/rooftop-aerial.webp";
import floorPlanGround from "@/assets/pog/floor-plan-ground.webp";
import floorPlanFirst from "@/assets/pog/floor-plan-first.webp";
import floorPlanTypical from "@/assets/pog/floor-plan-typical-2-10-even.webp";
import floorPlan24 from "@/assets/pog/floor-plan-24.webp";

const PAGE_URL = "https://purvaorientgrandlalbagh.com/master-plan";
const PAGE_TITLE = "Purva Orient Grand Master Plan and Level Plan";
const PAGE_DESCRIPTION =
  "Purva Orient Grand master plan, level by level: two basements, landscaped grounds, 97 homes up to level 24 and a rooftop club with an infinity pool at level 25.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords:
    "Purva Orient Grand master plan, Purva Orient Grand site plan, Purva Orient Grand level plan, Purva Orient Grand layout, Purva Orient Grand amenities, Purva Orient Grand floor plan",
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Purva Orient Grand",
    type: "website",
    images: [
      {
        url: "https://purvaorientgrandlalbagh.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Purva Orient Grand, a single G+24 tower on Lal Bagh Main Road, Central Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["https://purvaorientgrandlalbagh.com/images/og-image.webp"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://purvaorientgrandlalbagh.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Master Plan",
      item: PAGE_URL,
    },
  ],
};

const siteFacts = [
  { label: "Land area", value: "1.15 acres (4,677 sq m)" },
  { label: "Tower", value: "One tower — 2 basements + ground + 24 floors" },
  { label: "Homes", value: "97 — 3 BHK Super Premium, 4 BHK Elegance, Luxury and Grandeur" },
  { label: "Open spaces", value: "75%+ of the site" },
  { label: "Sanctioned FAR", value: "4.28" },
  { label: "Road frontage", value: "24.1 m on Lal Bagh Main Road" },
  { label: "Rooftop club", value: "The Rose & Cypress, levels 24 and 25" },
  { label: "Infinity pool", value: "Level 25" },
];

const levelPlan = [
  {
    level: "Basements B1 & B2",
    detail:
      "Resident car parking, reached by a ramp entry (A) and a separate ramp exit (E), with services (C). Parking below grade keeps the ground plane free for landscape.",
  },
  {
    level: "Ground plane",
    detail:
      "Grand entry and arrival court, sculpture court, drop-off and entry to the lobby (B), koi pond, healing garden, yoga deck, zumba deck, seating court, kinetic garden and a walkway around the tower.",
  },
  {
    level: "Podium & garden terraces",
    detail:
      "The family programme: kids' activity trail, Tetris block seating, outdoor table tennis, Paw Park for pets, basketball post and mini golf putting green.",
  },
  {
    level: "Ground floor",
    detail: "3 homes — 001 (4 BHK Elegance), 002 (4 BHK Luxury) and 004 (4 BHK Grandeur) — beside the drop-off and arrival lobby.",
  },
  {
    level: "Floor 1",
    detail: "4 homes — 101 to 104: 4 BHK Elegance, 4 BHK Luxury, 3 BHK Super Premium and 4 BHK Grandeur.",
  },
  {
    level: "Floors 2 to 23",
    detail:
      "4 homes per floor around a central lift lobby — x01 Elegance, x02 Luxury (corner), x03 3 BHK Super Premium, x04 Grandeur (corner). 88 homes in all.",
  },
  {
    level: "Level 24",
    detail:
      "2 homes (2402 Luxury and 2404 Grandeur) and the indoor clubhouse: gym, Pilates and stretching zones, spa and salon, massage room, steam and sauna, billiards, business centre and reading lounge.",
  },
  {
    level: "Level 25 — rooftop",
    detail:
      "Infinity pool, pool deck and kids' pool, terrace dining, firepit lounge, moon deck, The Fête, private and extended terraces and an open lawn.",
  },
];

const groundLevelAmenities = [
  { no: "01", name: "Grand Entry" },
  { no: "02", name: "Sculpture Court" },
  { no: "03", name: "Zumba Deck" },
  { no: "04", name: "Seating Court" },
  { no: "05", name: "Kinetic Garden" },
  { no: "06", name: "Walkway" },
  { no: "07", name: "Putting Golf" },
  { no: "08", name: "Kids Play Area" },
  { no: "09", name: "Yoga Deck" },
  { no: "10", name: "Healing Garden" },
];

const terraceLevelAmenities = [
  { no: "11", name: "Private Terrace" },
  { no: "12", name: "Extended Terrace" },
  { no: "13", name: "Terrace Dining" },
  { no: "14", name: "Firepit Lounge" },
  { no: "15", name: "Moon Deck" },
  { no: "16", name: "The Fête" },
  { no: "17", name: "Pool Deck" },
  { no: "18", name: "Infinity Pool" },
  { no: "19", name: "Kids Pool" },
  { no: "20", name: "Open Lawn" },
];

const siteLegend = [
  { key: "A", name: "Ramp entry to basement" },
  { key: "B", name: "Drop-off | Entry to lobby" },
  { key: "C", name: "Services" },
  { key: "D", name: "Car parking" },
  { key: "E", name: "Ramp exit" },
];

const floorPlates = [
  {
    title: "Ground Floor — 3 Homes",
    text: "Homes 001 (4 BHK Elegance), 002 (4 BHK Luxury) and 004 (4 BHK Grandeur). The fourth position on the plate is given to the drop-off and the arrival lobby.",
    image: floorPlanGround,
    alt: "Purva Orient Grand ground floor plan: homes 001, 002 and 004 around the lift lobby, drop-off and services, with the area statement for each home",
  },
  {
    title: "Floor 1 — 4 Homes",
    text: "Homes 101 to 104, one of each grade. Home 103 is the most compact residence in the tower, a 3 BHK Super Premium of 1,902.92 sq ft super built-up.",
    image: floorPlanFirst,
    alt: "Purva Orient Grand first floor plan: homes 101 to 104 in all four grades around the central lift lobby, with carpet, balcony and super built-up areas",
  },
  {
    title: "Typical Floor — 4 Homes",
    text: "Floors 2 to 23 repeat this arrangement: the Elegance and the 3 BHK in the middle of the plate, the Luxury and the Grandeur on the two corners, the lift core between them.",
    image: floorPlanTypical,
    alt: "Purva Orient Grand typical floor plan for floors 2, 4, 6, 8 and 10: four homes separated by the lift core, staircases and corridors",
  },
  {
    title: "Level 24 — 2 Homes and the Clubhouse",
    text: "Homes 2402 (4 BHK Luxury) and 2404 (4 BHK Grandeur) sit either side of the indoor clubhouse — the highest residences in the tower.",
    image: floorPlan24,
    alt: "Purva Orient Grand level 24 plan: homes 2402 and 2404 either side of the clubhouse with gym, spa and salon, billiards and business centre",
  },
];

export default function MasterPlanPage() {
  return (
    <>
      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageBanner
        eyebrow="Master Plan"
        title="Purva Orient Grand Master Plan"
        subtitle="One tower on 1.15 acres, planned level by level — from two basements to the infinity pool at level 25."
      />
      <ModalWrapper />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">Purva Orient Grand Master Plan and Level Plan</h1>
            <p className="text-lg leading-relaxed mb-6">
              A single tower on 1.15 acres, organised vertically because the site gives no other option — and the vertical organisation is what makes the project work.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Purva Orient Grand stands at Municipal No. 5, Lal Bagh Main Road, Sudhama Nagar, on <strong>24.1 metres</strong> of road frontage in Central Bengaluru. Two basements take the cars, the ground plane is given to landscape, twenty-four residential floors hold <strong>97 homes</strong>, and the top two levels belong to The Rose &amp; Cypress club. The brochure puts open space at more than <strong>75 per cent</strong> of the site. What follows is the plan, level by level, from the basements to the infinity pool at level 25.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">The Site at a Glance</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Particular</th>
                    <th className="px-5 py-4">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {siteFacts.map((row) => (
                    <tr key={row.label} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.label}</td>
                      <td className="px-5 py-4 text-gray-600">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">The Official Master Plan</h2>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={masterPlan}
                alt="Purva Orient Grand master plan from the official brochure: the single tower on Lal Bagh Main Road with numbered ground-level amenities 01 to 10, terrace-level amenities 11 to 20 and the ramp, drop-off, services and parking legend A to E"
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mt-3 italic">
              Master plan from the Purva Orient Grand brochure. Numbers 01–10 mark the ground-level amenities, 11–20 the terrace-level amenities on the roof, and letters A–E the ramps, drop-off, services and parking. All plans are indicative and subject to change by the developer and the competent authority.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Level by Level</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Level</th>
                    <th className="px-5 py-4">What Is There</th>
                  </tr>
                </thead>
                <tbody>
                  {levelPlan.map((row) => (
                    <tr key={row.level} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.level}</td>
                      <td className="px-5 py-4 text-gray-600">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Two Basements — Parking Below, Garden Above</h2>
              <p className="mb-4">
                Two basement levels carry the parking, which keeps the entire ground plane available for landscape. Cars come in off Lal Bagh Main Road and go straight down the ramp entry (A); a separate ramp (E) brings them back up.
              </p>
              <p className="mb-4">
                The drop-off and entry to the lobby (B), the service areas (C) and the surface parking bays (D) are the only vehicle functions left at grade, and an 8-metre fire driveway runs along the sides of the tower.
              </p>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Ground Plane — Arrival, Water and Gardens</h2>
              <p className="mb-4">
                The ground level is where the site&apos;s open space is felt. The grand entry leads into an arrival court with a sculpture at its centre, and the drop-off takes you to the lobby.
              </p>
              <p className="mb-4">
                Around the tower, the landscape by Master Plan Chennai is arranged as a sequence of smaller outdoor rooms — a koi pond, a healing garden, a yoga deck, a zumba deck, a seating court and a kinetic garden — linked by a walkway, with a putting green and a kids&apos; play area at the far end of the site.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={sitePlanRender}
                alt="Top-view landscape render of the Purva Orient Grand site: Lal Bagh Main Road entry and sculpture court, the drive around the tower, gardens along the edges and the rooftop pool and lawn"
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={towerAerial}
                alt="Aerial render of the Purva Orient Grand tower with its arrival court and gated entry on Lal Bagh Main Road, surrounded by the mature trees of Sudhama Nagar"
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Podium and Garden Terraces — The Family Programme</h2>
            <p className="mb-4">
              The podium and terrace level carries the active family programme: a children&apos;s activity trail, Tetris block seating, an outdoor table tennis zone, a Paw Park for pets, a basketball post and a mini golf putting green. The official landscape plan below maps each of them into the gardens that wrap the tower, alongside the koi pond and the healing garden.
            </p>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg not-prose">
              <Image
                src={masterPlanLegend}
                alt="Official Purva Orient Grand landscape plan with its ground-level legend — grand entry, sculpture, zumba deck, seating court, kinetic garden, kids' activity trail, Tetris block seating, outdoor table tennis, Paw Park, basketball post, mini golf putting green, koi pond, healing garden and yoga deck — and its terrace-level legend from private terrace to kids' pool"
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ground Floor to Level 24 — 97 Homes, No Shared Walls</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Above the landscape rise twenty-four residential floors. The ground floor has three homes; the first floor has four; floors 2 to 23 have four homes each around a central lift lobby; and level 24 has two, beside the indoor clubhouse. The lift core, staircases and corridors sit between the homes, so no residence shares a common wall with another, and every home has private decks. Room-by-room detail and the area statement for every floor are on the{" "}
              <Link href="/floor-plans" className="text-[#c8922a] hover:underline font-semibold">Floor Plans page</Link>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {floorPlates.map((plate) => (
                <div key={plate.title} className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                  <div className="relative w-full rounded-lg overflow-hidden shadow-lg mb-4">
                    <Image
                      src={plate.image}
                      alt={plate.alt}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{plate.title}</h3>
                  <p className="text-gray-700">{plate.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Levels 24 and 25 — The Rose &amp; Cypress</h2>
            <p className="mb-4">
              The twenty-fourth and twenty-fifth levels hold The Rose &amp; Cypress, a Victorian-inspired rooftop club designed by the Singapore-based architect Andy Fisher. On level 24 the indoor club sits between the two top-floor homes: a gym with cardio, Pilates, and stretching and mobility zones; a unisex spa and salon with a massage room, steam, sauna and wellness zone; a billiards lounge; and a business centre and reading lounge, with a balcony at either end.
            </p>
            <p className="mb-4">
              Level 25 is the open rooftop. The infinity pool sits at its edge with a pool deck and a kids&apos; pool, beside terrace dining, a firepit lounge, the moon deck, The Fête, private and extended terraces and an open lawn. The club&apos;s named rooms — The Vault whisky lounge, The Larder Room, The Dovecote, The Aura Spa, The Salon and Body Core Fitness Studio — are spread across these two levels. See the{" "}
              <Link href="/amenities" className="text-[#c8922a] hover:underline font-semibold">amenities page</Link>{" "}
              for the full club.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={rooftopAerial}
                alt="Aerial render of the Purva Orient Grand rooftop at levels 24 and 25: infinity pool and kids' pool, timber pool deck, lawn with seating, pergola-covered terrace dining and firepit lounge"
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={clubhousePlan}
                alt="Level 24 clubhouse plan at Purva Orient Grand: gym with cardio, Pilates and stretching zones, massage room, unisex spa and salon, steam, sauna, billiards, business centre and reading lounge"
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Master Plan Legend</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-5 py-4">No.</th>
                      <th className="px-5 py-4">Ground Level Amenities</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groundLevelAmenities.map((row) => (
                      <tr key={row.no} className="border-t border-[#e5dcc5]">
                        <td className="px-5 py-4 font-semibold text-gray-900">{row.no}</td>
                        <td className="px-5 py-4 text-gray-600">{row.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-5 py-4">No.</th>
                      <th className="px-5 py-4">Terrace Level Amenities</th>
                    </tr>
                  </thead>
                  <tbody>
                    {terraceLevelAmenities.map((row) => (
                      <tr key={row.no} className="border-t border-[#e5dcc5]">
                        <td className="px-5 py-4 font-semibold text-gray-900">{row.no}</td>
                        <td className="px-5 py-4 text-gray-600">{row.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Site legend:</strong>{" "}
              {siteLegend.map((item) => `${item.key} — ${item.name}`).join(" · ")}
            </p>
          </div>

          <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAR 4.28 on 1.15 Acres</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sanctioned floor area ratio is 4.28 — a CBD figure, and the reason a boutique project like this is viable on so small a parcel. Stacking 97 homes into a single tower is what leaves the ground to gardens and gives every household a share of a full rooftop club.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed italic">
              Karnataka RERA: PRM/KA/RERA/1251/310/PR/210907/004299 (verify at rera.karnataka.gov.in). Under construction, final stages; RERA-filed completion date 30 June 2027. Plans, amenities and specifications are indicative and subject to change by the developer and the competent authority.
            </p>
          </div>

          <div className="text-center pt-8 border-t border-[#e5dcc5]">
            <a
              href="/purva-orient-grand-master-plan.pdf"
              download="Purva-Orient-Grand-Master-Plan.pdf"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
            >
              Download Master Plan PDF
            </a>
            <p className="text-sm text-gray-600 mt-6">
              Ninety-seven homes, and most of them are already gone.{" "}
              <Link href="/contact-us" className="text-[#c8922a] hover:underline font-semibold">Check remaining inventory</Link>{" "}
              or compare the grades on the{" "}
              <Link href="/configurations" className="text-[#c8922a] hover:underline font-semibold">configurations page</Link>.
            </p>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
