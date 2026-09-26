"use client";
import { FaCheck } from "react-icons/fa";
import ImageSlider from "./ImageSlider";

import towerSunset from "@/assets/pog/tower-sunset.webp";
import towerFacade from "@/assets/pog/tower-facade.webp";
import grandLobby from "@/assets/pog/grand-lobby.webp";
import livingRoom from "@/assets/pog/living-room.webp";
import masterBedroom from "@/assets/pog/master-bedroom.webp";
import privateDeck from "@/assets/pog/private-deck.webp";
import deckCityView from "@/assets/pog/deck-city-view.webp";

const projectImages = [
  {
    image: towerSunset,
    alt: "Purva Orient Grand tower at golden hour, rising above the tree canopy of Central Bengaluru",
  },
  {
    image: towerFacade,
    alt: "Close view of the Purva Orient Grand façade with private decks and balconies at sunrise",
  },
  {
    image: grandLobby,
    alt: "Double-height marble arrival lobby at Purva Orient Grand",
  },
  {
    image: livingRoom,
    alt: "Living room of a Purva Orient Grand residence with a view over the city",
  },
  {
    image: masterBedroom,
    alt: "Bedroom at Purva Orient Grand with laminated wood flooring, a glass-fronted wardrobe and floor-to-ceiling city views",
  },
  {
    image: privateDeck,
    alt: "Private deck lounge of a Purva Orient Grand residence at dusk",
  },
  {
    image: deckCityView,
    alt: "Wide private deck overlooking the Bengaluru skyline at blue hour",
  },
];


import { useModal } from "./ModalContext";

const AboutProject = ({heading}) => {
  const { openModal } = useModal();
  return (
    <section
      id="overview"
      className="w-full bg-white py-[70px] px-[30px] md:min-h-[750px]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 center-box">

        {/* Left: Images */}
        <div className="hidden md:flex flex-col items-start relative w-full md:w-1/2 h-[500px]">


          <ImageSlider images={projectImages}/>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">

          {/* Tagline */}
          <h6 className="text-[#c8952a] font-semibold text-xs tracking-widest uppercase">
            WORLDHOME COLLECTION · LAL BAGH MAIN ROAD
          </h6>

          {/* Title */}
         {heading ? ( <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Purva Orient Grand on Lal Bagh Main Road
          </h1>):( <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            About Purva Orient Grand
          </h2>)}

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Central Bengaluru does not make new land, which is why projects here are boutique by necessity. Purva Orient Grand is 1.15 acres on Lal Bagh Main Road at Sudhama Nagar: one tower of two basements, ground and 24 floors, and 97 homes in total. It belongs to Puravankara&apos;s WorldHome Collection, the group&apos;s ultra-luxury line.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            No residence shares a common wall with another, and every home has private decks. The four grades, from the 3 BHK Super Premium to the corner 4 BHK Grandeur, come with BluNex home automation, imported marble in the living and dining spaces and laminated wood in the bedrooms.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Levels 24 and 25 belong to The Rose &amp; Cypress, a Victorian-inspired rooftop club by Singapore-based architect Andy Fisher, with an infinity pool at the 25th level. Concept architecture is by Urban Frame, the façade by SDG Mumbai and the landscape by Master Plan Chennai. Lalbagh Botanical Garden&apos;s 240 protected acres are five minutes away.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-2 mt-1">
            {[
              "97 homes in a single G+24 tower",
              "Zero shared walls, private decks to every home",
              "Infinity pool and rooftop club at Level 25",
              "5 minutes to Lalbagh Metro (Green Line)",
              "Karnataka RERA registered · completion filed for 30 June 2027",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-gray-700 text-sm"
              >
                <FaCheck className="mt-0.5 text-[#c8952a] flex-shrink-0 text-sm" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-4">
            <button
              onClick={() => openModal()}
              className="inline-block bg-[#c8952a] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#b07d1f] transition-colors duration-300 cursor-pointer"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
