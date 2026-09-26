"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import towerDusk from "@/assets/pog/tower-dusk.webp";
import towerDay from "@/assets/pog/tower-day.webp";
import gateViewNight from "@/assets/pog/gate-view-night.webp";
import infinityPoolDeck from "@/assets/pog/infinity-pool-deck.webp";
import liftLobby from "@/assets/pog/lift-lobby.webp";
import terraceDiningDusk from "@/assets/pog/terrace-dining-dusk.webp";
import healingGarden from "@/assets/pog/healing-garden.webp";
import puttingGreen from "@/assets/pog/putting-green.webp";

// Default gallery: the strongest official Purva Orient Grand renders.
// Callers may pass their own `images` as static imports or as { image, alt } objects.
const defaultGallery = [
  {
    image: towerDusk,
    alt: "Purva Orient Grand's G+24 tower at dusk above the Central Bengaluru skyline and tree canopy",
  },
  {
    image: towerDay,
    alt: "Purva Orient Grand tower in daylight, seen from Lal Bagh Main Road with the entry gate in front",
  },
  {
    image: gateViewNight,
    alt: "Grand entry gate and tower of Purva Orient Grand lit up at night",
  },
  {
    image: infinityPoolDeck,
    alt: "Residents on the infinity pool deck at the 25th level of Purva Orient Grand at dusk",
  },
  {
    image: liftLobby,
    alt: "Marble-clad lift lobby at Purva Orient Grand beside a red sculptural spiral staircase with cascading pendant lights",
  },
  {
    image: terraceDiningDusk,
    alt: "Rooftop terrace dining under a pergola at dusk at The Rose & Cypress club",
  },
  {
    image: healingGarden,
    alt: "Ground-level healing garden with a circular hedge maze at Purva Orient Grand",
  },
  {
    image: puttingGreen,
    alt: "Landscaped grounds beside the Purva Orient Grand tower, with water channels, lawns and stone seating",
  },
];

export default function ImageSlider({ images = defaultGallery }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded shadow-2xl"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Images */}
      {images.map((item, index) => (
        <Image
          key={index}
          src={item.image ?? item}
          alt={
            item.alt ??
            `Purva Orient Grand, Lal Bagh Main Road, Central Bengaluru: image ${index + 1} of ${images.length}`
          }
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 512px"
          quality={80}

        />
      ))}

      {/* Left Button */}
      <button
        type="button"
        aria-label="Previous image"
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        type="button"
        aria-label="Next image"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show image ${index + 1} of ${images.length}`}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
