import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Purva Orient Grand Price List 2026 | 3 & 4 BHK Lal Bagh",
  description: "Purva Orient Grand price and configuration guide for 3 and 4 BHK residences on Lal Bagh Main Road, Central Bengaluru.",
};

const priceTable = [
  ["Super Premium", "3 BHK", "1,902-2,262 sq ft", "Rs 6.00 Cr onwards"],
  ["Elegance", "4 BHK", "2,155-2,489 sq ft", "Rs 7.50 Cr onwards"],
  ["Luxury (Corner Ultra)", "4 BHK", "2,629-2,741 sq ft", "Rs 8.43 Cr onwards"],
  ["Grandeur (Corner)", "4 BHK", "3,095-3,360 sq ft", "Rs 9.93-10.78 Cr"],
];

export default function PricePage() {
  return <>
    <PageBanner eyebrow="Limited Inventory" title="Purva Orient Grand Price" subtitle="3 and 4 BHK residences on Lal Bagh Main Road, Central Bengaluru" />
    <section className="w-full bg-white py-16 px-6"><div className="max-w-5xl mx-auto space-y-10">
      <div className="prose max-w-none text-gray-700"><h1 className="text-3xl font-semibold text-gray-900 mb-5">Purva Orient Grand Price List 2026</h1><p>Inventory is limited and Puravankara's current published position is <strong>Rs 9 crore onwards</strong>, indicating that larger and higher-floor residences are what remain. The launch range below is provided for reference. Ask for live availability before planning around a configuration.</p></div>
      <div className="overflow-x-auto border border-[#e5dcc5] shadow-sm"><table className="w-full text-sm text-left"><thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider"><tr><th className="px-5 py-4">Grade</th><th className="px-5 py-4">Config</th><th className="px-5 py-4">Super Built-Up</th><th className="px-5 py-4">Indicative Price</th></tr></thead><tbody>{priceTable.map((row) => <tr key={row[0]} className="border-t border-[#e5dcc5]"><td className="px-5 py-4 font-semibold text-gray-900">{row[0]}</td><td className="px-5 py-4 text-gray-600">{row[1]}</td><td className="px-5 py-4 text-gray-600">{row[2]}</td><td className="px-5 py-4 font-semibold text-gray-800">{row[3]}</td></tr>)}</tbody></table></div>
      <div className="prose max-w-none text-gray-700"><h2 className="text-2xl font-semibold text-gray-900">What to budget for</h2><p>Balcony areas range from 45 to 290 sq ft. Working rates are approximately Rs 27,900 to Rs 30,100 per sq ft on super built-up area. GST at 5% applies to under-construction consideration, along with stamp duty, registration, floor rise, infrastructure, corpus and maintenance charges as applicable.</p><p>Carpet-to-super-built-up efficiency is approximately 60-67%, reflecting the zero-shared-wall design and the rooftop amenity deck spread across only 97 homes.</p></div>
      <Link href="/contact-us" className="inline-block bg-[#c8922a] text-white px-6 py-3 rounded-md">Check Live Inventory</Link>
    </div></section><div className="relative"><StickyDownloadButton /></div>
  </>;
}
