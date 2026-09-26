"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import plan3bhkSuperPremium from "@/assets/pog/unit-plan-3bhk-super-premium.webp";
import plan4bhkElegance from "@/assets/pog/unit-plan-4bhk-elegance.webp";
import plan4bhkLuxury from "@/assets/pog/unit-plan-4bhk-luxury.webp";
import plan4bhkGrandeur from "@/assets/pog/unit-plan-4bhk-grandeur.webp";
import masterPlan from "@/assets/pog/master-plan-thumb.webp";

import { useModal } from "./ModalContext";

export default function PlansSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      localStorage.setItem("plansUnlocked", "true");
    } else {
      const saved = localStorage.getItem("plansUnlocked");
      if (saved === "true") setIsUnlocked(true);
    }
  }, [isLeadSubmitted]);

  const plans = [
    {
      grade: "3 BHK Super Premium",
      image: plan3bhkSuperPremium,
      alt: "Purva Orient Grand 3 BHK Super Premium unit plan (Unit 03) with foyer, living, dining, kitchen, utility, three bedrooms and a long balcony: carpet 1,275–1,318 sq ft, super built-up 1,902–2,262 sq ft, balcony 45–280 sq ft",
    },
    {
      grade: "4 BHK Elegance",
      image: plan4bhkElegance,
      alt: "Purva Orient Grand 4 BHK Elegance unit plan (Unit 01) with foyer, dining, living, kitchen, utility, four bedrooms and a 42-foot balcony: carpet 1,438–1,467 sq ft, super built-up 2,155–2,489 sq ft, balcony 51–290 sq ft",
    },
    {
      grade: "4 BHK Luxury",
      image: plan4bhkLuxury,
      alt: "Purva Orient Grand 4 BHK Luxury corner unit plan (Unit 02) with a 22-foot living room, four bedrooms and four balconies: carpet 1,668 sq ft, super built-up 2,629–2,741 sq ft, balcony 186–273 sq ft",
    },
    {
      grade: "4 BHK Grandeur",
      image: plan4bhkGrandeur,
      alt: "Purva Orient Grand 4 BHK Grandeur corner unit plan (Unit 04) with a 30-foot living and dining room, puja, walk-in wardrobe, maid's room and four balconies: carpet 2,023 sq ft, super built-up 3,095–3,360 sq ft, balcony 162–275 sq ft",
    },
  ];

  return (
    <section  className="w-full  py-16 px-6" id="plans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Heading */}
        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Floor Plans
          </h6>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            3 and 4 BHK Floor Plans at Purva Orient Grand
          </h2>
        </div>

        {/* FLOOR PLAN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.grade}
              className="relative rounded-md overflow-hidden shadow-md group cursor-pointer"
              onClick={() => {
                if (!isUnlocked) {
                  openModal();
                } else {
                  setActivePlan(plan);
                }
              }}
            >
              <Image
                src={plan.image}
                alt={plan.alt}
                className={`w-full h-[140px] object-cover transition duration-500 ${
                  !isUnlocked ? "blur-[1px] scale-105" : "group-hover:scale-105"
                }`}
              />

              {!isUnlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xs">
                  Unlock {plan.grade}
                </div>
              )}
            </div>
          ))}
        </div>

        {/*  MASTER PLAN SUBSECTION */}
        <div className="flex flex-col items-center text-center mt-6">

          {/* Sub heading */}
          <h6 className="text-xl md:text-2xl font-semibold  mb-2 text-[#dca54a]">
            Master Plan
          </h6>

          <p className="text-gray-600 text-sm mb-6 max-w-lg">
            One G+24 tower on 1.15 acres with 75%+ open spaces: parking in two
            basements, a landscaped ground plane with a koi pond and healing
            garden, and The Rose &amp; Cypress rooftop club with an infinity pool
            at level 25. Four grades of home, from 1,902 to 3,360 sq ft super
            built-up, and no residence shares a wall with another.
          </p>

          {/* Card */}
          <div
            className="relative w-full md:w-[70%] rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => {
              if (!isUnlocked) {
                openModal();
              } else {
                setIsMasterOpen(true);
              }
            }}
          >
            <Image
              src={masterPlan}
              alt="Purva Orient Grand master plan: single tower on Lal Bagh Main Road with numbered ground-level and terrace-level amenities"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[1px] scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
              <p className="text-lg font-semibold">Master Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>

              <button className="mt-4 bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase">
                {isUnlocked ? "View Plan" : "Unlock Now"}
              </button>
            </div>

            {/* Premium badge */}
            <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-[10px] px-2 py-1 rounded">
              Official Plan
            </span>
          </div>
        </div>
      </div>

      {/* FLOOR PLAN MODAL */}
      {activePlan && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white p-3 rounded-lg max-w-3xl w-full">
            <button
              onClick={() => setActivePlan(null)}
              className="absolute top-2 right-2 text-black text-xl"
            >
              ✕
            </button>

            <Image
              src={activePlan.image}
              alt={activePlan.alt}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* MASTER PLAN MODAL */}
      {isMasterOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full text-center">

            <button
              onClick={() => setIsMasterOpen(false)}
              className="absolute top-2 right-2 text-black text-xl"
            >
              ✕
            </button>

            <Image
              src={masterPlan}
              alt="Purva Orient Grand master plan with ground-level amenities 01 to 10, terrace-level amenities 11 to 20 and the basement ramp, drop-off and parking legend"
              className="w-full h-auto object-contain mb-4"
            />

            <a
              href="/purva-orient-grand-master-plan.pdf"
              download="Purva-Orient-Grand-Master-Plan.pdf"
              className="inline-block bg-[#DCA54A] text-white text-xs px-6 py-3 rounded uppercase"
            >
              Download Master Plan
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
