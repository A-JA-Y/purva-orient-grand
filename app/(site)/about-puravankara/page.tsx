import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import logo from "@/assets/purva-logo.png";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "About Puravankara | Purva Orient Grand",
  description:
    "Learn about Puravankara, the developer behind Purva Orient Grand in Central Bengaluru.",
  alternates: { canonical: "https://www.godrejgolflink.in/about-godrej-properties" },
};

export default function AboutGodrejPropertiesPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Developer"
        title="About Puravankara"
        subtitle="A Bengaluru-founded real estate group behind Purva Orient Grand's WorldHome Collection."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={logo}
              alt="Puravankara"
              width={160}
              height={140}
              className="w-auto h-auto max-w-[140px]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              Puravankara Limited was founded in 1975 by Ravi Puravankara, listed on the BSE and NSE in 2007, and is headquartered in Bengaluru.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Purva Orient Grand belongs to the WorldHome Collection, Puravankara's ultra-luxury line, and is registered with Karnataka RERA under PRM/KA/RERA/1251/310/PR/210907/004299.
            </p>

            <ul className="flex flex-col gap-2 mt-2">
              {[
                "Founded in 1975 in Bengaluru",
                "WorldHome Collection ultra-luxury line",
                "Operations across major Indian cities",
                "Purva Orient Grand: 97 homes on 1.15 acres",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#c8952a] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Link
                href="/about-godrej-golf-links"
                className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
              >
                Explore Purva Orient Grand
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
