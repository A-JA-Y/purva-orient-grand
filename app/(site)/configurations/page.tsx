import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ReasonsToInvest from "@/components/ReasonToInvest";
import VillaFeatures from "@/components/PremiumInventory";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Godrej Golf Links Villas Price — Complete V1 to V7 Price Chart",
  description:
    "Godrej Golf Links villa prices range from ₹3.7 Cr for the V1 up to ₹33 Cr for the V7. Explore indicative price ranges, complete breakdown and configuration details.",
  alternates: { canonical: "https://www.godrejgolflink.in/villas-configurations" },
};

const priceTable = [
  { type: "V1 Villa", size: "100 sq. yd", config: "3 BHK", price: "₹3.7 Cr" },
  { type: "V2 Villa", size: "125 sq. yd", config: "4 BHK", price: "₹4.0 Cr" },
  { type: "V3 Villa", size: "150 sq. yd", config: "4 BHK", price: "₹5.25 Cr" },
  { type: "V4 Villa", size: "220 sq. yd", config: "4 BHK", price: "₹7.50 Cr" },
  { type: "V5 Villa", size: "300 sq. yd", config: "5 BHK", price: "₹14 Cr" },
  { type: "V6 Villa", size: "500 sq. yd", config: "6 BHK", price: "₹22 Cr" },
  { type: "V7 Villa", size: "1000 sq. yd", config: "9 BHK", price: "₹33 Cr" },
];

export default function VillasConfigurationsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Residences"
        title="Villas & Configurations"
        subtitle="Godrej Golf Links Villas Price — Complete V1 to V7 Price Chart"
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">Godrej Golf Links Villas Price — Complete V1 to V7 Price Chart</h1>
            <p className="text-lg leading-relaxed mb-6">
              Godrej Golf Links villa prices range from <strong>₹3.7 Cr</strong> for the V1 (3 BHK, 100 sq. yd) up to <strong>₹33 Cr</strong> for the V7 (9 BHK, 1,000 sq. yd) — across seven indicative villa configurations in the 100-acre Godrej Properties township in Sector 27, Greater Noida. Pricing varies by configuration, plot size, floor, orientation, and whether the unit is a fresh allotment or resale. The project is RERA-registered under UPRERAPRJ151 (verify on up-rera.in).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Godrej Golf Links Price Chart (V1–V7)</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Villa Type</th>
                    <th className="px-5 py-4">Super Area</th>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4">Indicative Price*</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row) => (
                    <tr key={row.type} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.type}</td>
                      <td className="px-5 py-4 text-gray-600">{row.size}</td>
                      <td className="px-5 py-4 text-gray-600">{row.config}</td>
                      <td className="px-5 py-4 text-gray-800 font-semibold">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 italic">
              *All prices are indicative and subject to change. They exclude registration, stamp duty, GST (where applicable), and other statutory charges. For live availability and the official current price list, request a callback.
            </p>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Price by Configuration — Detailed Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V1 Villa Price — 3 BHK at ₹3.7 Cr</h3>
                <p>The entry-point villa. 3 BHK on a 100 sq. yd plot, indicatively priced at ₹3.7 Cr. Strong value for first-time villa buyers moving up from apartments, with full access to every township amenity (golf course, 55,000 sq. ft. clubhouse, indoor heated pool) included.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V2 Villa Price — 4 BHK at ₹4.0 Cr</h3>
                <p>4 BHK on 125 sq. yd at ₹4.0 Cr. The most cost-efficient 4 BHK option in the township. Suited to growing families who need the extra bedroom without stepping up to the larger 150+ sq. yd formats.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V3 Villa Price — 4 BHK at ₹5.25 Cr</h3>
                <p>4 BHK on 150 sq. yd at ₹5.25 Cr. The most-searched mid-range 4 BHK and typically the most actively traded configuration in the resale market. The sweet spot of space, lawn area, and price for upgraders.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V4 Villa Price — 4 BHK at ₹7.50 Cr</h3>
                <p>4 BHK on 220 sq. yd at ₹7.50 Cr. A premium 4 BHK with substantially larger plot area — proper private lawn, larger balconies, multiple-vehicle parking. The upper end of the 4 BHK range.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V5 Villa Price — 5 BHK at ₹14 Cr</h3>
                <p>5 BHK on 300 sq. yd at ₹14 Cr. The first of the large-format villas. Built for joint families, multi-generational households, or buyers prioritising entertainment and home-office space.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V6 Villa Price — 6 BHK at ₹22 Cr</h3>
                <p>6 BHK on 500 sq. yd at ₹22 Cr. Estate-grade villa. Substantial private grounds, premium positioning within the township, often with prime golf-facing or corner-plot orientations.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5] md:col-span-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V7 Villa Price — 9 BHK at ₹33 Cr</h3>
                <p>The flagship — 9 BHK on 1,000 sq. yd at ₹33 Cr. The largest configuration in the township. Built as a standalone estate-style home for ultra-high-net-worth buyers wanting maximum plot, privacy, and bedrooms.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What's Included in the Price</h2>
              <p className="mb-4">The indicative prices above cover the villa structure and standard finishes:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Engineered marble flooring in main living areas</li>
                <li>Wooden flooring in bedrooms</li>
                <li>Spacious balconies with glass railings</li>
                <li>Private lawn and/or terrace as per plot configuration</li>
                <li>Standard fittings and fixtures</li>
                <li>Full access to all township amenities (golf course, 4 clubhouses totaling 55,000 sq. ft., indoor heated pool, gymnasium, spa, squash courts, 24×7 security)</li>
                <li>Private parking</li>
                <li>Allotted share of common areas and landscaped greens</li>
              </ul>
              <p className="font-semibold mb-2">Optional / extra cost (subject to availability):</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Fully furnished package — modular kitchen, air-conditioning, wardrobes, appliances</li>
                <li>Premium concierge service tier upgrades</li>
                <li>Selected interior customizations</li>
              </ul>
              <Link href="/floor-plans" className="text-[#c8922a] hover:underline font-semibold">Check floor plans</Link>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Costs to Plan For</h2>
              <p className="mb-4">Indicative prices typically exclude these statutory and ancillary costs. Budget for them separately:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Stamp duty & registration</strong> — currently 7% in Uttar Pradesh (5% stamp duty + 2% registration, subject to government revision)</li>
                <li><strong>GST</strong> — applicable on under-construction units; not on completed/ready-to-move units with OC</li>
                <li><strong>Maintenance charges</strong> — monthly society/township maintenance, billed by configuration and plot size</li>
                <li><strong>Club membership fee</strong> — one-time, where applicable</li>
                <li><strong>Power backup & utility connections</strong> — meter and connection charges</li>
                <li><strong>Brokerage / channel partner fee</strong> — confirm in advance; ours is fully transparent and disclosed upfront</li>
              </ul>
              <p>For a personalized total-cost calculation on your chosen unit, <Link href="/contact-us" className="text-[#c8922a] hover:underline font-semibold">request a callback</Link>.</p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Plan & Financing</h2>
            <p className="mb-4">Most villa purchases at Godrej Golf Links are structured through one of:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Outright purchase</strong> — full payment, typically with negotiated discount</li>
              <li><strong>Down payment plan</strong> — large initial tranche, smaller balance on registry</li>
              <li><strong>Construction-linked plan</strong> (for any under-construction inventory) — milestone-based payments</li>
              <li><strong>Home loan</strong> — leading banks (HDFC, ICICI, SBI, Axis) and HFCs (LIC HFL, Bajaj) offer financing on this project; loan eligibility typically up to 75–80% of property value</li>
            </ul>
            <p className="mb-4">Use the EMI calculator on this page to estimate monthly outflow at different loan amounts and tenures.</p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-sm text-yellow-800">
              ⚠️ <strong>Note:</strong> Interest rates and loan terms are bank-dependent and change frequently. Verify the current rate with your bank or financial advisor before committing.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Villa Prices Vary Within the Same Configuration</h2>
              <p className="mb-4">Two villas of the same type (e.g., two V3 villas) can be priced differently. The main factors:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Plot orientation</strong> — golf-facing or park-facing units carry a premium</li>
                <li><strong>Corner vs. internal plots</strong> — corner plots usually priced higher</li>
                <li><strong>Phase of the township</strong> — older phases (Crest, Evoke, Exquisite) trade at different levels</li>
                <li><strong>Furnishing status</strong> — fully furnished units command a premium</li>
                <li><strong>Resale vs. fresh allotment</strong> — resale pricing reflects current market sentiment, often above the original allotment price</li>
                <li><strong>Floor / level</strong> (for the apartment formats) — higher floors typically priced higher</li>
              </ul>
              <p>For a clear comparison on units you're shortlisting, <Link href="/contact-us" className="text-[#c8922a] hover:underline font-semibold">contact our team</Link>.</p>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Is Godrej Golf Links Worth the Price?</h2>
              <p className="mb-4">A practical investment view rather than marketing claims:</p>
              <p className="font-semibold mb-2">Value drivers:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Low-density villa township</strong> — rare in an apartment-dominated NCR market, supports long-term price stability</li>
                <li><strong>9-hole golf-course</strong> central feature — a differentiated amenity that's hard to replicate</li>
                <li><strong>Connectivity</strong> — 2-min walk to Delta 1 Metro, 20-min to Jewar airport (Noida International Airport)</li>
                <li><strong>Godrej Properties brand</strong> — established developer with delivery track record</li>
                <li><strong>Largely ready-to-move inventory</strong> — see and verify the actual home, no construction risk</li>
              </ul>
              <p className="font-semibold mb-2 mt-4 text-red-700">Risks to weigh:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6 text-red-900">
                <li><strong>Premium pricing</strong> relative to broader Greater Noida — entry cost is high</li>
                <li><strong>Resale market depth</strong> varies by configuration — smaller villas (V1–V3) trade more actively than V6–V7</li>
                <li><strong>Maintenance charges</strong> scale with plot size — large villas carry meaningful recurring costs</li>
                <li>Always verify clear title, OC status, and RERA compliance for the specific unit</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-[#e5dcc5]">
            <Link
              href="/contact-us"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
            >
              Get Latest Price List & Availability
            </Link>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
      <VillaFeatures />
      <ReasonsToInvest />
    </>
  );
}
