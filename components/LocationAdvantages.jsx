const PROJECT_ADDRESS =
  "Purva Orient Grand, Lal Bagh Main Road, Sudhama Nagar, Bengaluru 560027";

// Indicative drive times / distances as published by the developer
// (content file Section 9 and the brochure's "Connected To The City's Finest").
const checkItems = [
  "Lalbagh Botanical Garden — 5 mins (240 protected acres)",
  "Lalbagh Metro Station, Green Line — 5 mins (approx. 0.5 km)",
  "MG Road Metro Station — 10 mins",
  "Sir M. Visvesvaraya Metro (Purple Line) — approx. 2 km · Cubbon Park Metro — approx. 3 km",
  "The Ritz-Carlton and St. Joseph's University — 4 mins",
  "Bangalore Club (est. 1868) — 5 mins · Cubbon Park — 8 mins",
  "Bishop Cotton Boys' School — 6 mins · HCG Hospital — 7 mins",
  "UB City — 15 mins · Vidhana Soudha — 19 mins",
  "KSR Bengaluru City Railway Station — approx. 2.8 km",
  "Kempegowda International Airport — approx. 60 mins (approx. 35 km)",
];

export default function LocationAdvantages() {
  return (
    <section className="w-full bg-white py-16 px-6" id="location">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <p className="text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]">
          Location & Connectivity
        </p>

        {/* Heading */}
        <h2 className="text-center font-bold text-gray-900 mb-14 text-3xl md:text-4xl leading-tight">
          Lal Bagh Main Road — An Address Central Bengaluru Cannot Reproduce
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT: TEXT */}
          <div className="flex-1 max-w-lg">

            <h3 className="font-bold text-gray-900 mb-3 text-base">
              Municipal No. 5, Lal Bagh Main Road, Sudhama Nagar
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              This is the address that does not exist anymore. Central Bengaluru stopped producing new residential land
              decades ago, and what comes to market now arrives one redeveloped parcel at a time — no next phase, no
              adjoining launch, no future tower in front of you. The 24.1-metre road frontage and the Lalbagh adjacency
              cannot be reproduced elsewhere in the city at any price. Times below are indicative drive times published by
              the developer; verify your own commute during a site visit.
            </p>

            <ul className="space-y-4">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">

                  {/* Check Icon */}
                  <span className="text-[#c8922a] mt-1">
                    ✓
                  </span>

                  <span className="text-gray-800 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: MAP */}
          <div className="flex-1 w-full">
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(PROJECT_ADDRESS)}&output=embed`}
                title="Map of Purva Orient Grand, Lal Bagh Main Road, Sudhama Nagar, Bengaluru 560027"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            {/* Small CTA */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROJECT_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-[#c8922a] hover:underline"
            >
              View on Google Maps →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
