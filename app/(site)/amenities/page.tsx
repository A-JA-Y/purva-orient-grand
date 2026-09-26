import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Amenities from "@/components/Amenities";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import rooftopAerial from "@/assets/pog/rooftop-aerial.webp";

const SITE_URL = "https://purvaorientgrandlalbagh.com";
const PAGE_URL = `${SITE_URL}/amenities`;
const PAGE_TITLE = "Purva Orient Grand Amenities | Rose & Cypress Rooftop Club";
const PAGE_DESCRIPTION =
  "Purva Orient Grand amenities: The Rose & Cypress rooftop club by Andy Fisher, a 25th-level infinity pool, spa, whisky lounge, koi pond and healing garden.";
const OG_IMAGE = `${SITE_URL}/images/news-rooftop-club.webp`;
const OG_IMAGE_ALT =
  "Aerial render of The Rose & Cypress rooftop club at levels 24 and 25 of Purva Orient Grand, with the infinity pool, rooftop lawn and dining terrace";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords:
    "Purva Orient Grand amenities, The Rose & Cypress, Purva Orient Grand rooftop club, Purva Orient Grand infinity pool, Purva Orient Grand clubhouse, Andy Fisher rooftop club, luxury apartments central Bangalore, apartments near Lalbagh, WorldHome Collection Puravankara",
  openGraph: {
    title: "The Rose & Cypress — Rooftop Club at Purva Orient Grand",
    description:
      "A Victorian-inspired rooftop club by Andy Fisher of Singapore, with an infinity pool at the 25th level, shared by only 97 homes on Lal Bagh Main Road.",
    url: PAGE_URL,
    siteName: "Purva Orient Grand",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1600,
        height: 992,
        alt: OG_IMAGE_ALT,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rose & Cypress — Rooftop Club at Purva Orient Grand",
    description:
      "A Victorian-inspired rooftop club by Andy Fisher of Singapore, with an infinity pool at the 25th level, shared by only 97 homes on Lal Bagh Main Road.",
    images: [{ url: OG_IMAGE, alt: OG_IMAGE_ALT }],
  },
};

export default function AmenitiesPage() {
  return (
    <>
      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${SITE_URL}/`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Amenities",
                "item": PAGE_URL
              }
            ]
          })
        }}
      />

      {/* Schema Markup - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What amenities does Purva Orient Grand offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The headline amenity is The Rose & Cypress, a Victorian-inspired rooftop club on levels 24 and 25 designed by Andy Fisher of Singapore. It has an infinity pool at the 25th level, a pool deck and children's pool, The Vault whisky lounge, The Larder Room, The Dovecote rooftop dining, The Aura Spa, The Salon, the Body Core Fitness Studio, a Firepit Lounge, The Fête rooftop lawn and a Moon Deck. The podium and terrace level adds a kids' activity trail, outdoor table tennis, Paw Park and a mini golf putting green. At ground level there is a koi pond, a healing garden, a sculpture court, and yoga and zumba decks."
                }
              },
              {
                "@type": "Question",
                "name": "What is The Rose & Cypress at Purva Orient Grand?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Rose & Cypress is the project's Victorian-inspired rooftop club, occupying levels 24 and 25 of the tower. It was designed by the Singapore-based architect Andy Fisher and is shared by the residents of only 97 homes."
                }
              },
              {
                "@type": "Question",
                "name": "Does Purva Orient Grand have a swimming pool?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. There is an infinity pool at the 25th level of the tower, with a pool deck and a separate children's pool, as part of The Rose & Cypress rooftop club."
                }
              },
              {
                "@type": "Question",
                "name": "Who designed the amenities at Purva Orient Grand?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The rooftop club was designed by Andy Fisher of Singapore and the landscape by Master Plan, Chennai. Concept architecture is by Urban Frame and the façade by SDG Mumbai."
                }
              },
              {
                "@type": "Question",
                "name": "What wellness and fitness facilities are available at Purva Orient Grand?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The club has The Aura Spa, The Salon, the Body Core Fitness Studio and a Pilates Studio. Elsewhere in the project there is a yoga deck, a zumba deck, a healing garden, an aromatherapy garden and a jogging track."
                }
              },
              {
                "@type": "Question",
                "name": "What is there for children at Purva Orient Grand?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The rooftop has a children's pool. The podium and terrace level has a kids' activity trail, Tetris block seating, outdoor table tennis, a basketball post and a mini golf putting green, and there is a kids' play area at ground level."
                }
              },
              {
                "@type": "Question",
                "name": "Is Purva Orient Grand pet-friendly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The podium and terrace level includes Paw Park, a dedicated pet corner for residents' pets."
                }
              },
              {
                "@type": "Question",
                "name": "What in-home features do the residences at Purva Orient Grand have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every residence has BluNex home automation and private decks, and no residence shares a common wall with another."
                }
              },
              {
                "@type": "Question",
                "name": "What safety and infrastructure features does Purva Orient Grand have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The building has CCTV surveillance and intercom, fire safety systems to code, a sewage treatment plant with treated-water reuse, rainwater harvesting, 100% diesel generator backup for common areas, and branded automatic passenger lifts with emergency intercom."
                }
              },
              {
                "@type": "Question",
                "name": "Are the amenities at Purva Orient Grand ready to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not yet. Purva Orient Grand is under construction in its final stages, with a RERA-filed completion date of 30 June 2027, and the occupancy certificate has not yet been received. The amenities described are as published by the developer and are indicative and subject to change. Site visits that include the club level can be arranged where access permits."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Purva Orient Grand located and what is nearby?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Municipal No. 5, Lal Bagh Main Road, Ward 118, Sudhama Nagar, Bengaluru 560027. Lalbagh Botanical Garden and Lalbagh Metro Station on the Green Line are about five minutes away. The Bangalore Club, Cubbon Park, UB City and Bishop Cotton Boys' School are part of the immediate neighbourhood."
                }
              }
            ]
          })
        }}
      />

      {/* Schema Markup - Local Business / RealEstateAgent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "RealEstateAgent",
                "@id": `${SITE_URL}/#agent`,
                "name": "Real Revenue",
                "description": "Authorised channel partner for Purva Orient Grand by Puravankara, a 97-residence development of 3 and 4 BHK homes on Lal Bagh Main Road, Central Bengaluru.",
                "url": `${SITE_URL}/`,
                "image": `${SITE_URL}/images/og-image.webp`,
                "telephone": "+916356663535",
                "email": "vishalajitsaria1988@gmail.com",
                "priceRange": "₹₹₹₹",
                "areaServed": {
                  "@type": "Place",
                  "name": "Bengaluru, Karnataka"
                },
                "parentOrganization": {
                  "@type": "Organization",
                  "name": "Earlydays Innovations Private Limited"
                }
              },
              {
                "@type": "ApartmentComplex",
                "@id": `${SITE_URL}/#project`,
                "name": "Purva Orient Grand",
                "url": `${SITE_URL}/`,
                "image": OG_IMAGE,
                "numberOfAccommodationUnits": 97,
                "petsAllowed": true,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Municipal No. 5, Lal Bagh Main Road, Ward No. 118, Sudhama Nagar",
                  "addressLocality": "Bengaluru",
                  "addressRegion": "Karnataka",
                  "postalCode": "560027",
                  "addressCountry": "IN"
                },
                "amenityFeature": [
                  "The Rose & Cypress Rooftop Club",
                  "Infinity Pool at 25th Level",
                  "Children's Pool",
                  "The Vault Whisky Lounge",
                  "The Larder Room",
                  "The Dovecote Rooftop Dining",
                  "The Aura Spa",
                  "The Salon",
                  "Body Core Fitness Studio",
                  "Pilates Studio",
                  "Firepit Lounge",
                  "The Fête Rooftop Lawn",
                  "Moon Deck",
                  "Games Lounge",
                  "Reading Lounge",
                  "Business Centre",
                  "Kids' Activity Trail",
                  "Outdoor Table Tennis",
                  "Paw Park",
                  "Mini Golf Putting Green",
                  "Koi Pond",
                  "Healing Garden",
                  "Yoga Deck",
                  "Zumba Deck",
                  "Jogging Track",
                  "Party and Community Hall",
                  "BluNex Home Automation",
                  "100% DG Backup for Common Areas"
                ].map((name) => ({
                  "@type": "LocationFeatureSpecification",
                  "name": name,
                  "value": true
                }))
              }
            ]
          })
        }}
      />

      {/* Page Banner with Hero Image */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={rooftopAerial}
            alt="Aerial render of The Rose & Cypress rooftop club at levels 24 and 25 of Purva Orient Grand, with the infinity pool, pool deck, rooftop lawn and pergola dining terrace"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block text-[#DCA54A] text-sm md:text-base uppercase tracking-widest font-semibold mb-3">
            Lifestyle · Lal Bagh Main Road
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Amenities
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            A Victorian-inspired rooftop club with an infinity pool at the 25th level, landscaped gardens at the base of
            the tower and a family terrace in between — shared by only 97 homes.
          </p>

        </div>
      </section>

      <ModalWrapper />
      <Amenities />

      {/* New Content Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Purva Orient Grand Amenities — The Rose &amp; Cypress Rooftop Club
          </h1>

          {/* Intro */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            The amenities at Purva Orient Grand begin at the top. Levels 24 and 25 of the tower are home to The Rose
            &amp; Cypress, a Victorian-inspired rooftop club designed by the Singapore-based architect Andy Fisher. It
            carries an infinity pool at the 25th level, a whisky lounge called The Vault, The Aura Spa, The Salon, the
            Body Core Fitness Studio, The Larder Room, a firepit lounge and The Dovecote, a rooftop dining terrace.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Lower down, the podium and terrace level carries the family programme — a kids&apos; activity trail,
            outdoor table tennis, a Paw Park for pets and a mini golf putting green — while the ground level is kept
            for landscape: an arrival court, a sculpture court, a koi pond, a healing garden and yoga and zumba decks.
            All of it serves just 97 homes in a single tower on Lal Bagh Main Road, Central Bengaluru, as part of
            Puravankara&apos;s WorldHome Collection.
          </p>
        </div>
      </section>

      {/* A Lifestyle Township Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            One Tower, 97 Homes, Amenities on Every Level
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            On 1.15 acres in Central Bengaluru, amenities cannot sprawl across a campus, so Purva Orient Grand organises
            them vertically. Two basement levels carry the parking, which keeps the entire ground plane available for
            landscape. The podium and terrace level carries the active family programme, and the top of the tower, at
            levels 24 and 25, holds the club and the infinity pool, with a moon deck and private terrace above the pool
            deck.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            The result is an amenity set scaled to a boutique building. The developer&apos;s brochure describes the
            project as having more than 75% open space, and with only 97 residences in a single 2B + G + 24 tower, the
            pool deck, the spa and the lounges are shared by a small community of neighbours rather than a crowd. It is
            the difference between a club you belong to and a facility you queue for.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="/about-purva-orient-grand"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              About Purva Orient Grand →
            </Link>
            <Link
              href="/about-puravankara"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              About Puravankara →
            </Link>
          </div>
        </div>
      </section>

      {/* The Signature Amenities Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            The Purva Orient Grand Amenities, Level by Level
          </h2>
          <p className="text-lg text-center max-w-4xl mx-auto text-gray-700 mb-12">
            The amenities at Purva Orient Grand are organised by level — The Rose &amp; Cypress rooftop club at levels
            24 and 25, the podium and terrace, and the landscaped ground plane — with in-home features and building
            infrastructure beneath it all. Amenities are as published by the developer and are indicative and subject to
            change.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Amenity Card 1 - The Rose & Cypress */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Rose &amp; Cypress — Designed by Andy Fisher, Singapore</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The centrepiece of the Purva Orient Grand amenities is The Rose &amp; Cypress, a Victorian-inspired
                rooftop club occupying levels 24 and 25 of the tower. It was designed by the Singapore-based architect
                Andy Fisher, and it is shared by the residents of just 97 homes.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                The club sits within an unusually well-credited design team: Urban Frame on concept architecture, SDG
                Mumbai on the façade and Master Plan, Chennai on landscape. The practical point for a buyer is that the
                club was conceived as architecture by a named specialist, at the top of the building where the light
                and the views are, rather than fitted into whatever space was left over.
              </p>
            </div>

            {/* Amenity Card 2 - Infinity Pool */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Infinity Pool at the 25th Level</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The infinity pool sits at the 25th level, at the top of the tower, with a pool deck for lounging and a
                separate children&apos;s pool so families can swim together. The Moon Deck and a private terrace are
                set above the pool deck, and an extended terrace and open lawn give the level room to breathe — a
                swim with the Bengaluru skyline as the backdrop, a lift ride from your front door.
              </p>
            </div>

            {/* Amenity Card 3 - The Vault, The Larder Room & The Dovecote */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Vault, The Larder Room &amp; The Dovecote</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The club&apos;s social rooms are named rather than numbered. The Vault is a whisky lounge, The Larder
                Room sits alongside it, and The Dovecote is the rooftop dining terrace, with terrace dining under a
                pergola and the city lights beyond.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                For residents who entertain, these rooms turn an evening that would otherwise mean a table at a CBD
                hotel into one hosted twenty-five levels above Lal Bagh Main Road, among neighbours.
              </p>
            </div>

            {/* Amenity Card 4 - Spa & Salon */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Aura Spa &amp; The Salon</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wellness is handled on the roof as well. The Aura Spa gives residents a dedicated treatment space
                within the club, and The Salon sits alongside it, so grooming and recovery are a lift ride away rather
                than an appointment across town. Both are part of The Rose &amp; Cypress clubhouse programme.
              </p>
            </div>

            {/* Amenity Card 5 - Fitness */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Body Core Fitness Studio &amp; Pilates Studio</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The Body Core Fitness Studio is the club&apos;s gym, and the clubhouse adds a separate Pilates Studio.
                Outdoors, the yoga deck and zumba deck at ground level and a jogging track mean a daily routine never
                depends on a membership elsewhere — useful when your working day is in the CBD and your evenings are
                short.
              </p>
            </div>

            {/* Amenity Card 6 - Rooftop Outdoors */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Firepit Lounge, The Fête &amp; Moon Deck</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Much of the rooftop is open to the sky. The Fête is a rooftop recreation lawn, the Firepit Lounge is an
                outdoor seating lounge on a timber deck, and the Moon Deck, private terrace and extended terrace are
                made for quiet evenings above the city. A designated smoking zone keeps the rest of the club clear.
              </p>
            </div>

            {/* Amenity Card 7 - Clubhouse Lounges */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Games Lounge, Reading Lounge &amp; Business Centre</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Indoors, the clubhouse includes a Games Lounge, a Reading Lounge and a Business Centre, with indoor
                games and billiards among the additional facilities. For professionals who work from home on some
                days, a business centre inside the building is a practical addition; for families, the games lounge
                is the answer to a monsoon afternoon.
              </p>
            </div>

            {/* Amenity Card 8 - Podium & Terrace */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Podium &amp; Terrace — Children and Pets</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The podium and terrace level carries the active family programme: a kids&apos; activity trail, Tetris
                block seating, an outdoor table tennis zone, a basketball post and a mini golf putting green. Paw Park,
                a dedicated pet corner, gives dogs a space of their own within the project.
              </p>
            </div>

            {/* Amenity Card 9 - Ground Level */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ground Level — Gardens, Water &amp; Calm</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                With parking taken below ground, the base of the tower is given to landscape by Master Plan, Chennai.
                Residents arrive through a grand entry and arrival court into a sculpture court, with a koi pond, a
                healing garden, a yoga deck, a zumba deck, a seating court, a kinetic garden, a walkway and a
                kids&apos; play area laid out around the tower.
              </p>
            </div>

            {/* Amenity Card 10 - Additional Facilities */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Additional Facilities</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Beyond the club and the gardens, the amenity list includes a jogging track, an aromatherapy garden, a
                star-gazing deck, a hammock garden, a party and community hall for family occasions, indoor games and
                billiards, and visitor parking so guests are not left circling Lal Bagh Main Road.
              </p>
            </div>

            {/* Amenity Card 11 - In-Home */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">In the Home — BluNex, Private Decks, No Shared Walls</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Some of the most valuable amenities are inside the front door. Every residence is fitted with BluNex
                home automation, every home has private decks, and no residence shares a common wall with another — a
                design decision that costs saleable area and that residents notice every day in their privacy.
              </p>
            </div>

            {/* Amenity Card 12 - Infrastructure & Safety */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Infrastructure &amp; Safety</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Underpinning every amenity: CCTV surveillance and intercom, fire safety systems to code, a sewage
                treatment plant with treated-water reuse, rainwater harvesting, 100% diesel generator backup for common
                areas, and branded automatic passenger lifts with emergency intercom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stand Apart Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why the Purva Orient Grand Amenities Stand Apart
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Almost every premium project in Bengaluru now lists an infinity pool. What distinguishes Purva Orient Grand
            is the ratio, the height and the design credit: a Victorian-inspired club by Andy Fisher of Singapore, at
            the top of a single tower, shared among 97 homes. The pool deck, the spa and the lounges are used by a small
            community of neighbours, not by the population of a large gated complex.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            There is a trade-off, and it is worth stating plainly. The zero-shared-wall design and a rooftop amenity
            deck of this scale, spread across only 97 homes, put the carpet-to-super-built-up ratio at approximately
            60–67%, which is on the lower side. Part of what you pay for is the club, so see it for yourself and price
            it into your comparison.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="/price"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              View Pricing →
            </Link>
            <Link
              href="/configurations"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              3 &amp; 4 BHK Configurations →
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Amenities Beside an Address That Cannot Be Reproduced
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            The club is one half of the lifestyle here; the address is the other. Lalbagh Botanical Garden, 240
            protected acres that cannot be built over, is five minutes away, and Lalbagh Metro on the Green Line is
            about five minutes. The Bangalore Club, Cubbon Park, UB City, ITC Gardenia and Bishop Cotton Boys&apos;
            School are all part of the immediate neighbourhood. Drive times are indicative, as published by the
            developer.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/location-connectivity"
              className="px-6 py-3 bg-[#DCA54A] text-white rounded-lg hover:bg-[#c9953a] transition-colors font-medium"
            >
              View Location & Connectivity
            </Link>
            <Link
              href="/floor-plans"
              className="px-6 py-3 border-2 border-[#DCA54A] text-[#DCA54A] rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors font-medium"
            >
              Explore Floor Plans
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20  bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Stand on the Twenty-Fifth Level Once
          </h2>
          <p className="text-lg md:text-xl text-black mb-6 leading-relaxed">
            The rooftop is the argument for Purva Orient Grand, and it does not translate to a photograph. From The
            Rose &amp; Cypress and the infinity pool at the 25th level to the koi pond and healing garden at the base
            of the tower, these amenities were planned for 97 homes on Lal Bagh Main Road. We arrange site visits that
            include the club level where access permits.
          </p>
          <p className="text-lg text-black mb-8 leading-relaxed">
            The project is under construction in its final stages, registered with Karnataka RERA
            (PRM/KA/RERA/1251/310/PR/210907/004299) with a filed completion date of 30 June 2027. Inventory is
            limited, so ask us what remains before you plan around a configuration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-[#DCA54A] text-white font-semibold rounded-lg hover:bg-[#c9953a] transition-colors text-lg"
            >
              Book a Site Visit
            </Link>
            <Link
              href="/blogs"
              className="px-8 py-4 border-2 border-[#DCA54A] text-[#DCA54A] font-semibold rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors text-lg"
            >
              Blog & News
            </Link>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>

      {/* Your Existing Amenities Component */}

    </>
  );
}
