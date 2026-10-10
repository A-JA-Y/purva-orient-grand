"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import NewsData from "@/data/newsData";
import StickyDownloadButton from "@/components/StickyButton";
import { useModal } from "@/components/ModalContext";

type News = {
  id: string;
  slug: string;
  title: string;
  image: string;
  altText?: string;
  category: string;
  excerpt: string;
  date: string;
};

const CATEGORIES = [
  {
    name: "Project Update",
    description: "Construction progress, approvals, handover milestones.",
  },
  {
    name: "Price & Inventory",
    description: "Changes to the published position and what remains.",
  },
  {
    name: "Developer",
    description:
      "Puravankara announcements that bear on this tower, including any Puravankara new launch in the WorldHome Collection.",
  },
];

const STATUS_ROWS = [
  {
    label: "Construction",
    value:
      "Under construction, final stages per the developer; occupancy certificate not yet received",
  },
  { label: "RERA-filed completion", value: "30 June 2027" },
  {
    label: "RERA registration",
    value:
      "PRM/KA/RERA/1251/310/PR/210907/004299, registered 7 September 2021; sales launched January 2022; no appeals or complaints on the filing",
  },
  {
    label: "Purva Orient Grand for sale",
    value: "The larger 4 BHK homes on the higher floors; exact list on the live sheet",
  },
  {
    label: "Current published position",
    value: "₹9 Cr onwards, against a launch range of ₹6.00–10.78 Cr",
  },
  {
    label: "Configurations",
    value:
      "3 BHK Super Premium · 4 BHK Elegance, Luxury, Grandeur · 1,275–2,023 sq ft carpet · 1,902–3,360 sq ft super built-up",
  },
  { label: "Offers", value: "None published by the developer" },
];

const REPORT_ITEMS = [
  "Structural and façade completion, and the start of interior fit-outs on the upper floors",
  "The occupancy certificate, the day it is received",
  "Any change to the developer's published price position or payment schedule",
  "Inventory milestones: when a grade sells out, when a floor is released",
  "Handover dates and the formation of the residents' association",
];

const WHATSAPP_URL = `https://wa.me/916356663535?text=${encodeURIComponent(
  "Hi, please send me Purva Orient Grand updates on WhatsApp when something changes."
)}`;

export default function NewsIndex() {
  const { openModal } = useModal();

  const sorted: News[] = useMemo(
    () =>
      [...NewsData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  const categories = ["All", ...CATEGORIES.map((c) => c.name)];
  const [active, setActive] = useState("All");

  // "All" lists everything after the featured story; a category lists every story in it
  const filtered = active === "All" ? rest : sorted.filter((n) => n.category === active);
  const activeCategory = CATEGORIES.find((c) => c.name === active);

  if (!featured) return null;

  return (
    <section className="w-full min-h-screen bg-white">

      {/* ── HERO ── */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 pt-12 pb-8">
        <div className="max-w-5xl mx-auto">

          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            News &amp; Updates · Lal Bagh Road, Bengaluru
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-5 leading-tight">
            Purva Orient Grand News – Construction Status, Possession and Inventory
          </h1>

          <p className="text-base text-gray-600 leading-relaxed max-w-3xl mb-10">
            A project in its final stages changes faster than a brochure can. This page is
            where we log what moves at Purva Orient Grand Lalbagh: construction milestones as
            Puravankara publishes them, RERA filings and the occupancy certificate when it
            arrives, revisions to the published price, and which homes are still available.
            Each update is dated, sourced to the developer, the Karnataka RERA portal or our own
            site visits, and short enough to read in the time it takes the lift to reach the
            25th level.
          </p>

          {/* ── STATUS AT A GLANCE ── */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Status at a Glance</h2>
          <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {STATUS_ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100 last:border-0 align-top">
                    <th
                      scope="row"
                      className="text-left font-semibold text-gray-900 px-4 py-3 w-1/3 md:w-1/4"
                    >
                      {row.label}
                    </th>
                    <td className="text-gray-600 px-4 py-3 leading-relaxed">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed mb-10">
            Last reviewed: October 2026. The full Purva Orient Grand price table and cost
            breakup are on the{" "}
            <Link href="/price" className="underline hover:text-gray-900">
              Price page
            </Link>
            ; availability comes through the{" "}
            <Link href="/contact-us" className="underline hover:text-gray-900">
              Contact form
            </Link>{" "}
            the same day.
          </p>

          {/* Featured */}
          <Link href={`/news/${featured.slug}`}>
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-gray-100 overflow-hidden group hover:border-gray-200 transition-colors bg-white">
              <div className="relative w-full h-56 md:h-auto bg-gradient-to-br from-indigo-50 to-blue-100">
                <Image
                  src={featured.image}
                  alt={featured.altText || featured.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold tracking-wide text-blue-600 bg-blue-50 rounded-full px-3 py-1 mb-4 w-fit">
                  {featured.category}
                </span>

                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors mb-3">
                  {featured.title}
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {featured.excerpt}
                </p>

                <p className="text-xs text-gray-400">
                  {new Date(featured.date).toLocaleDateString("en-IN", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    timeZone: "Asia/Kolkata",
                  })}
                </p>
              </div>
            </div>
          </Link>

          {/* ── FILTERS ── */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-all ${active === cat
                    ? "bg-gray-900 text-white border-gray-900"
                    : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {activeCategory ? (
            <p className="text-sm text-gray-500 mt-4">{activeCategory.description}</p>
          ) : (
            <dl className="grid md:grid-cols-3 gap-4 mt-6">
              {CATEGORIES.map((c) => (
                <div key={c.name}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-blue-500 mb-1">
                    {c.name}
                  </dt>
                  <dd className="text-sm text-gray-500 leading-relaxed">{c.description}</dd>
                </div>
              ))}
            </dl>
          )}

        </div>
      </div>

      {/* ── GRID ── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-sm text-gray-400 mb-6">
          {filtered.length}{" "}
          {active === "All"
            ? filtered.length === 1 ? "more update" : "more updates"
            : filtered.length === 1 ? "update" : "updates"}
          {active !== "All" && ` in ${active}`}
        </p>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-16">No updates in this category yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((news) => (
              <Link key={news.id} href={`/news/${news.slug}`}>
                <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors h-full flex flex-col">
                  <div className="relative w-full h-40 bg-gradient-to-br from-purple-50 to-indigo-100">
                    <Image
                      src={news.image}
                      alt={news.altText || news.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-500 mb-2">
                      {news.category}
                    </p>

                    <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors mb-2 flex-1">
                      {news.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                      {news.excerpt}
                    </p>

                    <p className="text-xs text-gray-400 mt-3">
                      {new Date(news.date).toLocaleDateString("en-IN", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        timeZone: "Asia/Kolkata",
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* ── WHAT WE WILL REPORT ── */}
      <div className="bg-gray-50 border-t border-gray-100 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Will Report Here</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed mb-6">
            {REPORT_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you want these as they happen rather than on your next visit, leave a number and
            we message you when something changes, not before.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-5 py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#1ebe57] transition-colors"
            >
              Get Updates on WhatsApp
            </a>
            <button
              onClick={() => openModal()}
              className="text-sm font-semibold px-5 py-2.5 rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            >
              Check Remaining Inventory
            </button>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mt-10 max-w-3xl">
            Central Bangalore real estate rarely gets a dedicated news feed for a single tower.
            This one has 97 homes and no second phase, so there will be an end to it; until
            then, everything that moves is here.
          </p>
        </div>
      </div>

      <div className="relative">
        <StickyDownloadButton />
      </div>

    </section>
  );
}

