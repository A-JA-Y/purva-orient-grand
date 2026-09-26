"use client";
import {
  FaSwimmingPool,
  FaGlassWhiskey,
  FaUtensils,
  FaSpa,
  FaDumbbell,
  FaFire,
  FaLeaf,
  FaChess,
  FaShieldAlt,
} from "react-icons/fa";

import infinityPool from "@/assets/pog/infinity-pool.webp";
import theFeteLawn from "@/assets/pog/the-fete-lawn.webp";
import terraceDining from "@/assets/pog/terrace-dining.webp";
import theLarder from "@/assets/pog/the-larder.webp";
import auraSpa from "@/assets/pog/aura-spa.webp";
import fitnessStudio from "@/assets/pog/fitness-studio.webp";
import gamesLounge from "@/assets/pog/games-lounge.webp";
import firepitLounge from "@/assets/pog/firepit-lounge.webp";


const images = [
  {
    image: infinityPool,
    alt: "Residents in the infinity pool at the 25th level of Purva Orient Grand, with the city skyline beyond",
  },
  {
    image: theFeteLawn,
    alt: "The Fête, the rooftop recreation lawn with tiered seating at The Rose & Cypress club",
  },
  {
    image: terraceDining,
    alt: "The Dovecote rooftop dining terrace under a pergola, with city lights at night",
  },
  {
    image: theLarder,
    alt: "The Larder Room at The Rose & Cypress club, with a marble bar wall and high bar seating",
  },
  {
    image: auraSpa,
    alt: "Massage treatment room at The Aura Spa in the Purva Orient Grand rooftop club",
  },
  {
    image: fitnessStudio,
    alt: "Treadmills in the Body Core Fitness Studio at Purva Orient Grand",
  },
  {
    image: gamesLounge,
    alt: "Games Lounge with a billiards table, lounge seating and marble flooring",
  },
  {
    image: firepitLounge,
    alt: "Firepit lounge with built-in timber seating on a wooden deck",
  },
];
import ImageSlider from "@/components/ImageSlider";


import bgImg from "../assets/Lines-PNG-Free-Image.webp";


const amenities = [
  { icon: <FaSwimmingPool />,  text: "Infinity pool at Level 25, pool deck and kids' pool" },
  { icon: <FaGlassWhiskey />,  text: "The Vault whisky lounge and The Larder Room" },
  { icon: <FaUtensils />,      text: "The Dovecote rooftop dining and terrace dining" },
  { icon: <FaSpa />,           text: "The Aura Spa and The Salon" },
  { icon: <FaDumbbell />,      text: "Body Core Fitness Studio and Pilates Studio" },
  { icon: <FaFire />,          text: "Firepit Lounge, Moon Deck and private terrace" },
  { icon: <FaLeaf />,          text: "The Fête rooftop lawn and open lawn" },
  { icon: <FaChess />,         text: "Games Lounge, Reading Lounge and Business Centre" },
  { icon: <FaShieldAlt />,     text: "CCTV surveillance, intercom and fire safety systems" },
];

import { useModal } from "./ModalContext";

export default function Amenities() {
  const { openModal } = useModal();
  return (
    <section
      id="amenities"
      className="w-full bg-[#4F3318] py-16 px-6 md:px-12 lg:px-20 text-[#FDE6C0] relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      {/* Mirrored background */}
      <div
        className="absolute inset-0 opacity-3 transform scale-x-[-1] pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h6 className="text-[#DCA54A] uppercase mb-4">
            The Rose & Cypress · Levels 24 and 25
          </h6>
          <h2 className="text-[#FDE6C0] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            A rooftop club shared by only 97 homes
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-sm md:text-base leading-relaxed">
              The twenty-fourth and twenty-fifth levels of Purva Orient Grand are given over entirely to The Rose &amp; Cypress, a Victorian-inspired rooftop club designed by Singapore-based architect Andy Fisher. It carries an infinity pool at the 25th level, and it is shared by the residents of just 97 homes.
            </p>

            <ul className="flex flex-col gap-[18px]">
              {amenities.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="flex-shrink-0 text-lg text-[#DCA54A]">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm md:text-base leading-relaxed mt-1">
              Closer to the ground there is a koi pond, a healing garden, yoga and zumba decks and a sculpture court, while the terrace level adds a Paw Park for pets, a children&apos;s activity trail, outdoor table tennis and a mini golf putting green.
            </p>

            <div className="mt-3">
              <button
                onClick={() => openModal()}
                className="inline-block bg-[#c9a84c] text-[#fff] text-xs rounded-[8px] font-bold uppercase px-7 py-3 cursor-pointer hover:bg-[#b8933e] transition"
              >
                Get the Amenity Plan
              </button>
            </div>
          </div>

          {/* Right Image */}
         <div className="w-full lg:w-[50%]  h-[300px] md:h-[550px] flex-shrink-0">
  <ImageSlider images={images} />
</div>

        </div>
      </div>
    </section>
  );
}
