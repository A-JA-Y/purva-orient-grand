"use client";

import Image from "next/image";

import lalbaghGlasshouse from "@/assets/pog/lalbagh-glasshouse.webp";
import cubbonParkAerial from "@/assets/pog/lalbagh-aerial.webp";
import towerAerial from "@/assets/pog/tower-aerial.webp";
import facadeDecks from "@/assets/pog/facade-decks.webp";
import rooftopAerial from "@/assets/pog/rooftop-aerial.webp";

const cards = [
  {
    title: "240 protected acres of Lalbagh, five minutes away",
    image: lalbaghGlasshouse,
    alt: "The Glass House at Lalbagh Botanical Garden, Bengaluru, lit up at dusk",
  },
  {
    title: "Lalbagh Metro in 5 minutes, MG Road Metro in 10",
    image: cubbonParkAerial,
    alt: "Aerial view of the red State Central Library building amid the dense tree canopy of Cubbon Park, Central Bengaluru",
  },
  {
    title: "97 homes on 1.15 acres, in a single tower",
    image: towerAerial,
    alt: "Aerial render of the single Purva Orient Grand tower, its arrival court and the green Sudhama Nagar neighbourhood around it",
  },
  {
    title: "Zero shared walls, private decks to every home",
    image: facadeDecks,
    alt: "Render of the Purva Orient Grand façade with glass-railed private decks at sunset",
  },
  {
    title: "The Rose & Cypress rooftop club, infinity pool at Level 25",
    image: rooftopAerial,
    alt: "Aerial render of the Purva Orient Grand rooftop club with the infinity pool, lawn and pergola-covered dining terrace",
  },
];

export default function LalbaghAdvantage() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <h6 className="text-center uppercase mb-3 text-[#c8922a] tracking-widest text-sm">
          The Lalbagh Advantage
        </h6>

        {/* Heading */}
        <h2 className="text-center font-semibold text-gray-900 mb-4 text-[clamp(2rem,4vw,2.6rem)] leading-tight">
          An Address Central Bengaluru Cannot Make Again
        </h2>

        {/* Description */}
        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto text-sm leading-relaxed">
          Central Bengaluru stopped producing new residential land decades ago; what reaches the market now arrives one redeveloped parcel at a time. Purva Orient Grand has no next phase and no second tower, and the 240-acre botanical garden five minutes away is protected land that cannot be acquired or built over. Permanence is precisely what you are buying here.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative h-56 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 230px"
                quality={80}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Title */}
              <div className="absolute bottom-0 p-4">
                <p className="text-white text-sm font-medium leading-snug">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
