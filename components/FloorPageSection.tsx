"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import unit3Floors2to10 from "@/assets/pog/unit-plan-u3-floors-2-10.webp";
import unit3Floors11to20 from "@/assets/pog/unit-plan-u3-floors-11-20.webp";
import unit1Floors2to10 from "@/assets/pog/unit-plan-u1-floors-2-10.webp";
import unit1Floors11to23 from "@/assets/pog/unit-plan-u1-floors-11-23.webp";
import unit2Floors2to23 from "@/assets/pog/unit-plan-u2-floors-2-23.webp";
import unit4EvenFloors from "@/assets/pog/unit-plan-u4-even-floors.webp";
import unit4OddFloors from "@/assets/pog/unit-plan-u4-odd-floors.webp";
import typicalFloorPlan from "@/assets/pog/floor-plan-typical-11-19-odd.webp";

import { useModal } from "./ModalContext";

// Official unit plans from the Purva Orient Grand brochure (areas in sq ft, room sizes as drawn)
const unitPlans = [
  {
    id: "unit-03-floors-2-10",
    type: "3 BHK Super Premium",
    size: "Floors 2–10",
    config: "Unit 03",
    price: "1,991.79 sq ft super built-up",
    image: unit3Floors2to10,
    alt: "Purva Orient Grand 3 BHK Super Premium floor plan, Unit 03 on floors 2 to 10: foyer, marble living and dining, kitchen and utility, three bedrooms, three toilets and a balcony off the living room",
    description:
      "RERA carpet 1,318.16 + balcony 72.76 = usable carpet 1,390.92 sq ft. The foyer opens to a 17'3\" dining room and a 16'6\"-deep living room with its own deck, with three bedrooms and three toilets.",
    features: [
      "3 Bedrooms",
      "3 Toilets",
      "Deck off the Living Room",
      "Foyer 8'4\" × 6'0\"",
      "Living 12'0\" × 16'6\"",
      "Dining 17'3\" × 12'6\"",
      "Kitchen 10'5\" × 8'1\"",
      "Utility 4'8\" × 6'11\"",
      "Master Bedroom 14'3\" × 11'6\" + Toilet 10'6\" × 5'0\"",
      "Bedroom 2 11'0\" × 13'0\" + Toilet 8'6\" × 5'6\"",
      "Bedroom 3 11'0\" × 13'0\"",
      "Third Toilet 8'6\" × 5'9\"",
    ],
  },
  {
    id: "unit-03-floors-11-20",
    type: "3 BHK Super Premium",
    size: "Floors 11–20",
    config: "Unit 03",
    price: "2,262.59 sq ft super built-up",
    image: unit3Floors11to20,
    alt: "Purva Orient Grand 3 BHK Super Premium floor plan, Unit 03 on floors 11 to 20: the same rooms as the lower floors with a wide deck running past bedroom 3, the living room and the master bedroom",
    description:
      "RERA carpet 1,318.16 + balcony 280.94 = usable carpet 1,599.10 sq ft. The same rooms as the lower floors, with a far wider deck that runs past bedroom 3, the living room and the master bedroom.",
    features: [
      "3 Bedrooms",
      "3 Toilets",
      "Deck Across Three Rooms",
      "Foyer 8'4\" × 6'0\"",
      "Living 12'0\" × 16'6\"",
      "Dining 17'3\" × 12'6\"",
      "Kitchen 10'5\" × 8'1\"",
      "Utility 4'8\" × 6'11\"",
      "Master Bedroom 14'3\" × 11'6\" + Toilet 10'6\" × 5'0\"",
      "Bedroom 2 11'0\" × 13'0\" + Toilet 8'6\" × 5'6\"",
      "Bedroom 3 11'0\" × 13'0\"",
      "Floors 21–23: balcony 195.80 sq ft",
    ],
  },
  {
    id: "unit-01-floors-2-10",
    type: "4 BHK Elegance",
    size: "Floors 2–10",
    config: "Unit 01",
    price: "2,338.45 sq ft super built-up",
    image: unit1Floors2to10,
    alt: "Purva Orient Grand 4 BHK Elegance floor plan, Unit 01 on floors 2 to 10: foyer, dining and living in one marble spine, kitchen and utility, four bedrooms, three toilets and a deck off the living room and bedroom 4",
    description:
      "RERA carpet 1,467.56 + balcony 168.13 = usable carpet 1,635.70 sq ft. Foyer, dining and living run as one long marble spine, with a deck off the living room and bedroom 4.",
    features: [
      "4 Bedrooms",
      "3 Toilets",
      "Deck off Living & Bedroom 4",
      "Foyer 5'3\" × 9'8\"",
      "Dining 15'0\" × 14'9\"",
      "Living 12'4\" × 15'11\"",
      "Kitchen 10'6\" × 9'0\"",
      "Utility 5'2\" × 9'0\"",
      "Master Bedroom 11'0\" × 13'11\" + Toilet 5'6\" × 11'6\"",
      "Bedroom 2 11'11\" × 13'7\" + Toilet 4'8\" × 9'1\"",
      "Bedroom 3 10'8\" × 13'11\"",
      "Bedroom 4 11'0\" × 11'8\"",
      "Third Toilet 7'5\" × 5'0\"",
    ],
  },
  {
    id: "unit-01-floors-11-23",
    type: "4 BHK Elegance",
    size: "Floors 11–23",
    config: "Unit 01",
    price: "2,489.74 sq ft super built-up",
    image: unit1Floors11to23,
    alt: "Purva Orient Grand 4 BHK Elegance floor plan, Unit 01 on floors 11 to 23: four bedrooms, three toilets and one continuous deck along the living room, bedroom 4 and bedroom 2",
    description:
      "RERA carpet 1,461.43 + balcony 290.63 = usable carpet 1,752.06 sq ft. One continuous deck runs along the living room, bedroom 4 and bedroom 2 — the largest balcony area of any home in the tower.",
    features: [
      "4 Bedrooms",
      "3 Toilets",
      "290.63 sq ft Continuous Deck",
      "Foyer 5'3\" × 9'8\"",
      "Dining 15'0\" × 14'9\"",
      "Living 12'4\" × 15'11\"",
      "Kitchen 10'6\" × 9'0\"",
      "Utility 5'2\" × 9'0\"",
      "Master Bedroom 11'0\" × 13'11\" + Toilet 5'6\" × 11'6\"",
      "Bedroom 2 11'11\" × 13'7\" + Toilet 4'8\" × 7'11\"",
      "Bedroom 3 10'8\" × 13'11\"",
      "Bedroom 4 11'0\" × 11'8\"",
      "Third Toilet 7'5\" × 5'0\"",
    ],
  },
  {
    id: "unit-02-floors-2-23",
    type: "4 BHK Luxury",
    size: "Floors 2–23",
    config: "Unit 02 · Corner",
    price: "2,741.93 sq ft super built-up",
    image: unit2Floors2to23,
    alt: "Purva Orient Grand 4 BHK Luxury corner floor plan, Unit 02 on floors 2 to 23: 22-foot living room with two seating areas, dining, kitchen and utility, four bedrooms, four toilets and four separate balconies",
    description:
      "RERA carpet 1,668.96 + balcony 273.30 = usable carpet 1,942.26 sq ft. A corner home built around a 22'0\" × 18'4\" living room with room for two seating groups, and four separate decks.",
    features: [
      "4 Bedrooms",
      "4 Toilets",
      "Four Private Decks",
      "Foyer 5'11\" × 4'7\"",
      "Living 22'0\" × 18'4\"",
      "Dining 14'0\" × 12'1\"",
      "Kitchen 9'0\" × 12'0\"",
      "Utility 6'1\" × 4'6\"",
      "Master Bedroom 13'3\" × 14'0\" + Toilet 5'0\" × 9'0\"",
      "Bedroom 2 13'0\" × 11'0\" + Toilet 5'0\" × 8'0\"",
      "Bedroom 3 11'4\" × 14'0\" + Toilet 5'0\" × 8'0\"",
      "Bedroom 4 10'8\" × 13'4\" + Toilet 5'0\" × 8'0\"",
    ],
  },
  {
    id: "unit-04-even-floors",
    type: "4 BHK Grandeur",
    size: "Even Floors 2–22",
    config: "Unit 04 · Corner",
    price: "3,242.95 sq ft super built-up",
    image: unit4EvenFloors,
    alt: "Purva Orient Grand 4 BHK Grandeur corner floor plan, Unit 04 on even floors 2 to 22: 30-foot living and dining room, puja, kitchen, utility, maid's room, master bedroom with walk-in wardrobe, four bedrooms, powder room and four balconies",
    description:
      "RERA carpet 2,023.31 + balcony 275.02 = usable carpet 2,298.33 sq ft. A 30'10\" living and dining room, a puja, a walk-in wardrobe, a powder room and a maid's room with its own toilet.",
    features: [
      "4 Bedrooms",
      "Maid's Room + Toilet",
      "Walk-in Wardrobe",
      "Foyer 9'2\" × 4'1\"",
      "Living / Dining 30'10\" × 16'5\"",
      "Puja 2'7\" × 8'9\"",
      "Kitchen 9'0\" × 15'3\"",
      "Utility 8'8\" × 4'8\"",
      "Maid's Room 5'0\" × 6'6\" + Toilet 5'0\" × 4'6\"",
      "Master Bedroom 12'3\" × 16'11\" + Walk-in Wardrobe 9'0\" × 6'9\" + Toilet 8'9\" × 6'0\"",
      "Bedroom 2 10'8\" × 11'11\" + Toilet 5'1\" × 7'10\"",
      "Bedroom 3 16'9\" × 11'0\" + Toilet 8'1\" × 4'8\"",
      "Bedroom 4 16'5\" × 16'4\" + Toilet 5'0\" × 8'0\"",
      "Powder Room 5'0\" × 8'0\"",
      "Four Private Decks",
    ],
  },
  {
    id: "unit-04-odd-floors",
    type: "4 BHK Grandeur",
    size: "Odd Floors 3–23",
    config: "Unit 04 · Corner",
    price: "3,320.72 sq ft super built-up",
    image: unit4OddFloors,
    alt: "Purva Orient Grand 4 BHK Grandeur corner floor plan, Unit 04 on odd floors 3 to 23: the same rooms as the even floors with a wider deck running along bedrooms 3 and 4",
    description:
      "RERA carpet 2,023.31 + balcony 275.02 = usable carpet 2,298.33 sq ft. The same rooms as the even floors; here a wider deck runs along bedrooms 3 and 4, and the super built-up is 3,320.72 sq ft.",
    features: [
      "4 Bedrooms",
      "Maid's Room + Toilet",
      "Deck Along Bedrooms 3 & 4",
      "Foyer 9'2\" × 4'1\"",
      "Living / Dining 30'10\" × 16'5\"",
      "Puja 2'7\" × 8'9\"",
      "Kitchen 9'0\" × 15'3\"",
      "Utility 8'8\" × 4'8\"",
      "Maid's Room 5'0\" × 6'6\" + Toilet 5'0\" × 4'6\"",
      "Master Bedroom 12'3\" × 16'11\" + Walk-in Wardrobe 9'0\" × 6'9\" + Toilet 8'9\" × 6'0\"",
      "Bedroom 2 10'8\" × 11'11\" + Toilet 5'1\" × 7'10\"",
      "Bedroom 3 16'9\" × 11'0\" + Toilet 8'1\" × 4'8\"",
      "Bedroom 4 16'5\" × 16'4\" + Toilet 5'0\" × 8'0\"",
      "Powder Room 5'0\" × 8'0\"",
      "24th floor (2404): 3,360.50 sq ft super built-up",
    ],
  },
];

export default function FloorPlanSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState<(typeof unitPlans)[0] | null>(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState("");

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      localStorage.setItem("plansUnlocked", "true");
    } else {
      const saved = localStorage.getItem("plansUnlocked");
      if (saved === "true") setIsUnlocked(true);
    }
  }, [isLeadSubmitted]);

  // Area chart by grade (launch ranges from the RERA-registered plans)
  const areaData = [
    { grade: "3 BHK Super Premium", carpet: "1,275–1,318 sq ft", balcony: "45–280 sq ft", superBuiltUp: "1,902–2,262 sq ft" },
    { grade: "4 BHK Elegance", carpet: "1,438–1,467 sq ft", balcony: "51–290 sq ft", superBuiltUp: "2,155–2,489 sq ft" },
    { grade: "4 BHK Luxury (Corner)", carpet: "1,668 sq ft", balcony: "186–273 sq ft", superBuiltUp: "2,629–2,741 sq ft" },
    { grade: "4 BHK Grandeur (Corner)", carpet: "2,023 sq ft", balcony: "162–275 sq ft", superBuiltUp: "3,095–3,360 sq ft" },
  ];

  return (
    <section className="w-full py-16 px-6" id="floor-plans" aria-label="Purva Orient Grand Floor Plans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* H1 Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Purva Orient Grand Floor Plans — 3 and 4 BHK
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            Purva Orient Grand is 97 homes in four grades — 3 BHK Super Premium, 4 BHK Elegance,
            and the corner 4 BHK Luxury and 4 BHK Grandeur — in a single G+24 tower on Lal Bagh
            Main Road, Central Bengaluru. This page sets out every official unit plan with its RERA
            carpet, balcony, usable carpet and super built-up area, floor by floor, and a
            room-by-room guide to each. The one rule that holds across all of them: no residence
            shares a common wall with another, and every home opens to private decks.
          </p>
          <button
            onClick={() => openModal()}
            className="mt-6 bg-[#DCA54A] text-white text-sm px-8 py-3 rounded uppercase font-semibold hover:bg-[#c9943a] transition"
            aria-label="Download Floor Plan PDF"
          >
            Download Floor Plan PDF
          </button>
        </div>

        {/* H2 - Area Chart */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Purva Orient Grand Area Chart by Grade
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-8">
            Compare carpet and usable carpet, not super built-up alone. Carpet-to-super-built-up
            efficiency here runs at approximately 60 to 67 per cent — on the lower side, and a
            direct consequence of the zero-shared-wall design and a rooftop club shared by only 97
            homes. Balconies are counted separately from carpet and grow on the upper floors.
          </p>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#DCA54A] text-white">
                  <th className="px-4 py-3 text-left">Grade</th>
                  <th className="px-4 py-3 text-left">RERA Carpet Area</th>
                  <th className="px-4 py-3 text-left">Balcony Area</th>
                  <th className="px-4 py-3 text-left">Super Built-Up Area</th>
                </tr>
              </thead>
              <tbody>
                {areaData.map((item, idx) => (
                  <tr
                    key={item.grade}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-4 py-3 font-semibold">{item.grade}</td>
                    <td className="px-4 py-3">{item.carpet}</td>
                    <td className="px-4 py-3">{item.balcony}</td>
                    <td className="px-4 py-3 font-semibold text-[#DCA54A]">{item.superBuiltUp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Areas are from the official brochure and are approximate. The 4 BHK Luxury measures
            2,756.42 sq ft super built-up on the ground floor and 3,213.58 sq ft on the 24th. Plans
            follow the latest sanctioned plan and may change as mandated by the authorities.
          </p>
        </div>

        {/* H2 - Floor Plan Configurations */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Purva Orient Grand Unit Plans, Room by Room
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-10">
            Seven official unit plans from the brochure cover the typical floors. The 3 BHK
            and the 4 BHK Elegance change between the lower and upper floors — the upper versions
            carry much larger decks — while the Luxury is one plan from floor 2 to 23 and the
            Grandeur alternates between even and odd floors. Living, dining and foyer are finished
            in imported marble and the bedrooms in laminated wood. Open any plan for the full list
            of room sizes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unitPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-100"
                onClick={() => {
                  if (!isUnlocked) {
                    openModal();
                  } else {
                    setActivePlan(plan);
                  }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.alt}
                    className={`w-full h-full object-cover transition duration-500 ${
                      !isUnlocked ? "blur-[2px] scale-105" : "hover:scale-105"
                    }`}
                    loading="lazy"
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm font-semibold">
                      🔒 Unlock to View
                    </div>
                  )}
                  <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-xs px-3 py-1 rounded">
                    {plan.type}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {plan.type} Floor Plan <span className="text-sm font-normal">({plan.size})</span>
                  </h3>
                  <p className="text-sm text-[#DCA54A] font-semibold">{plan.config} · {plan.price}</p>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2">{plan.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {plan.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {plan.features.length > 3 && (
                      <span className="text-[10px] text-gray-500">+{plan.features.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2 - Floor-by-Floor Guide Table */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Purva Orient Grand Floor-by-Floor Guide
          </h2>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left">Floors</th>
                  <th className="px-4 py-3 text-left">Homes on the Floor</th>
                  <th className="px-4 py-3 text-left">Super Built-Up by Home (sq ft)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { floors: "Ground", homes: "3 — 001, 002, 004", detail: "Elegance 2,155.81 · Luxury 2,756.42 · Grandeur 3,095.17" },
                  { floors: "1st", homes: "4 — 101 to 104", detail: "3 BHK 1,902.92 · Elegance 2,160.43 · Luxury 2,629.41 · Grandeur 3,095.17" },
                  { floors: "2, 4, 6, 8, 10", homes: "4 per floor", detail: "3 BHK 1,991.79 · Elegance 2,338.45 · Luxury 2,741.93 · Grandeur 3,242.95" },
                  { floors: "3, 5, 7, 9", homes: "4 per floor", detail: "3 BHK 1,991.79 · Elegance 2,338.45 · Luxury 2,741.93 · Grandeur 3,320.72" },
                  { floors: "11, 13, 15, 17, 19", homes: "4 per floor", detail: "3 BHK 2,262.59 · Elegance 2,489.74 · Luxury 2,741.93 · Grandeur 3,320.72" },
                  { floors: "12, 14, 16, 18, 20", homes: "4 per floor", detail: "3 BHK 2,262.59 · Elegance 2,489.74 · Luxury 2,741.93 · Grandeur 3,242.95" },
                  { floors: "21", homes: "4 — 2101 to 2104", detail: "3 BHK 2,194.66 · Elegance 2,489.74 · Luxury 2,741.93 · Grandeur 3,320.72" },
                  { floors: "22", homes: "4 — 2201 to 2204", detail: "3 BHK 2,152.03 · Elegance 2,489.74 · Luxury 2,741.93 · Grandeur 3,242.95" },
                  { floors: "23", homes: "4 — 2301 to 2304", detail: "3 BHK 2,152.03 · Elegance 2,489.74 · Luxury 2,741.93 · Grandeur 3,320.72" },
                  { floors: "24", homes: "2 — 2402, 2404, beside the clubhouse", detail: "Luxury 3,213.58 · Grandeur 3,360.50" },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-4 py-3 font-medium">{item.floors}</td>
                    <td className="px-4 py-3 font-semibold text-[#DCA54A]">{item.homes}</td>
                    <td className="px-4 py-3 text-sm">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* H2 - Typical Floor Plate Section */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Typical Floor Plan — Four Homes, No Shared Walls
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-6">
            On a typical floor, the four homes are arranged around a central lift lobby, with
            the lift core, staircases and corridors between them — which is how no residence
            comes to share a common wall with another. The Elegance (01) and the 3 BHK (03) sit
            in the middle of the plate; the Luxury (02) and the Grandeur (04) take the two
            corners. For the site plan, the landscape and the rooftop club, see the{" "}
            <a href="/master-plan" className="text-[#DCA54A] hover:underline">
              Master Plan page
            </a>.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-sm mb-6">
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>Ground floor: 3 homes beside the drop-off and lobby</li>
              <li>Floors 1 to 23: 4 homes per floor</li>
              <li>Floor 24: 2 homes beside the indoor clubhouse</li>
            </ul>
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>No residence shares a common wall with another</li>
              <li>Private decks to every home, up to 290 sq ft</li>
              <li>97 homes in total on 1.15 acres</li>
            </ul>
          </div>

          <div
            className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer group max-w-4xl mx-auto"
            onClick={() => {
              if (!isUnlocked) {
                openModal();
              } else {
                setIsMasterOpen(true);
              }
            }}
          >
            <Image
              src={typicalFloorPlan}
              alt="Purva Orient Grand typical floor plan for floors 11, 13, 15, 17 and 19: four homes around a central lift lobby with the area statement for each unit"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[1px] scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
              <p className="text-lg font-semibold">📐 Purva Orient Grand Typical Floor Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>
              <button
                className="mt-4 bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="View Typical Floor Plan"
              >
                {isUnlocked ? "View Floor Plan" : "Unlock Now"}
              </button>
            </div>
            <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-[10px] px-2 py-1 rounded">
              Floors 11–19
            </span>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => {
                if (!isUnlocked) openModal();
                else setIsMasterOpen(true);
              }}
              className="bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase hover:bg-[#c9943a] transition"
            >
              View Master Plan &amp; Floor Plans PDF
            </button>
          </div>
        </div>

        {/* H2 - PDF Download Section */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 md:p-8 text-center border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Purva Orient Grand Floor Plan PDF — Download
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-6">
            The official Purva Orient Grand master plan and floor plans PDF carries the site plan,
            the floor plates from the ground floor to the 24th with their area statements, and the
            unit plans for all four grades with room sizes — taken from Puravankara&apos;s brochure.
          </p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
            Share your name, phone and preferred grade through the form and we will send the PDF
            with the full brochure. Because inventory here is limited, one of our Central Bengaluru
            specialists will call with the live availability position rather than a generic price
            list.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Your Name"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Phone Number"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Email Address"
              />
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Grade of Interest"
              >
                <option value="">Grade of Interest</option>
                <option value="3 BHK Super Premium">3 BHK Super Premium · 1,902–2,262 sq ft</option>
                <option value="4 BHK Elegance">4 BHK Elegance · 2,155–2,489 sq ft</option>
                <option value="4 BHK Luxury">4 BHK Luxury · 2,629–2,741 sq ft</option>
                <option value="4 BHK Grandeur">4 BHK Grandeur · 3,095–3,360 sq ft</option>
              </select>
              <button
                onClick={() => openModal()}
                className="bg-[#DCA54A] text-white font-semibold px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition"
              >
                Email Me the Floor Plan PDF
              </button>
            </div>
          </div>
        </div>

        {/* H2 - Price Info */}
        <div className="text-center text-sm text-gray-500 mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Purva Orient Grand Floor Plan Price
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At launch, prices ran from approximately <strong>₹6.00 Cr</strong> for the 3 BHK Super
            Premium to <strong>₹10.78 Cr</strong> for the largest 4 BHK Grandeur — about ₹27,900 to
            ₹30,100 per sq ft on super built-up area, exclusive of GST, stamp duty, registration and
            other charges. Puravankara&apos;s current published position is <strong>₹9 Cr
            onwards</strong>, which indicates the larger and higher-floor residences are what
            remain. Limited inventory — ask for live availability before you plan around any
            floor plan.
          </p>
          <p className="mt-3">
            For the full price table and the additional charges, visit the{" "}
            <a href="/price" className="text-[#DCA54A] hover:underline">
              Price page
            </a>{" "}
            or request the live availability sheet through the{" "}
            <a href="/contact-us" className="text-[#DCA54A] hover:underline">
              Contact form
            </a>.
          </p>
        </div>
      </div>

      {/* FLOOR PLAN MODAL */}
      {activePlan && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activePlan.type} ${activePlan.config} Floor Plan`}
          onClick={() => setActivePlan(null)}
        >
          <div className="relative bg-white p-3 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActivePlan(null)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close plan preview"
            >
              ✕
            </button>

            <div className="mb-3">
              <h3 className="text-lg font-bold text-gray-900">
                {activePlan.type} {activePlan.config} Floor Plan
              </h3>
              <p className="text-sm text-gray-600">
                {activePlan.size} · {activePlan.price}
              </p>
            </div>

            <Image
              src={activePlan.image}
              alt={activePlan.alt}
              className="w-full h-auto object-contain"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {activePlan.features.map((feature) => (
                <span key={feature} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MASTER PLAN MODAL */}
      {isMasterOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Purva Orient Grand Typical Floor Plan"
          onClick={() => setIsMasterOpen(false)}
        >
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsMasterOpen(false)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close floor plan"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
              Typical Floor Plan — Floors 11, 13, 15, 17 &amp; 19
            </h3>

            <Image
              src={typicalFloorPlan}
              alt="Purva Orient Grand typical floor plan for floors 11, 13, 15, 17 and 19 showing 4 BHK Elegance, 4 BHK Luxury, 3 BHK Super Premium and 4 BHK Grandeur homes with carpet, balcony, usable carpet and super built-up areas"
              className="w-full h-auto object-contain mb-4"
            />

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/purva-orient-grand-master-plan.pdf"
                download="Purva-Orient-Grand-Master-Plan.pdf"
                className="bg-[#DCA54A] text-white text-sm px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="Download Master Plan and Floor Plans PDF"
              >
                📥 Download Master Plan &amp; Floor Plans PDF
              </a>
              <button
                onClick={() => {
                  setIsMasterOpen(false);
                  openModal();
                }}
                className="bg-gray-200 text-gray-700 text-sm px-6 py-3 rounded uppercase hover:bg-gray-300 transition"
              >
                Send Me the Brochure
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
