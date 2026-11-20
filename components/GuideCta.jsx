"use client";

import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import LeadModalButton from "@/components/LeadModalButton";

const PHONE_DISPLAY = "+91 63566 63535";
const PHONE_TEL = "tel:+916356663535";
const WHATSAPP_NUMBER = "916356663535";

/**
 * Call-to-action band for guide pages.
 *
 * The primary button opens the site's enquiry form (the same InvestmentModal lead form the
 * project pages use); the secondary buttons call or WhatsApp the sales line directly.
 * With `image`, the band sits over a darkened photograph; without one it is a solid panel.
 */
export default function GuideCta({
  eyebrow,
  title,
  sub,
  primaryLabel = "Get the cost sheet",
  whatsappText = "Hi, I'd like the latest cost sheet and availability at Purva Orient Grand.",
  image,
  imageAlt = "",
}) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <aside
      className={`not-prose relative my-12 overflow-hidden rounded-2xl ${
        image ? "bg-gray-900" : "bg-emerald-900"
      }`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 820px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        </>
      )}

      <div className="relative px-6 py-9 sm:px-10 sm:py-11 max-w-xl">
        {eyebrow && (
          <p className="text-[10.5px] tracking-[0.2em] uppercase text-[#E3C46A] font-medium mb-3">
            {eyebrow}
          </p>
        )}
        <p className="font-serif text-[1.6rem] sm:text-[1.9rem] leading-snug font-semibold text-white">
          {title}
        </p>
        {sub && <p className="text-white/80 text-[15px] leading-relaxed font-light mt-3">{sub}</p>}

        <div className="mt-6 flex flex-wrap gap-3">
          <LeadModalButton className="inline-flex items-center justify-center rounded-md bg-[#C49A2B] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#a9831f] focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
            {primaryLabel}
          </LeadModalButton>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-md border border-white/40 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <FaPhoneAlt className="text-xs" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-md border border-white/40 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <FaWhatsapp className="text-base" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </aside>
  );
}
