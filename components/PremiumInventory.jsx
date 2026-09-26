

const interiorFeatures = [
  "Imported marble in living, dining, foyer and passages",
  "Laminated wood flooring in the bedrooms",
  "BluNex home automation in every residence",
  "Private decks, with no wall shared with a neighbour",
];
const kitchenProvisions = ["Chimney", "Hob", "Water purifier", "Dishwasher"];
const homeMix = [
  { value: "23", label: "3 BHK" },
  { value: "74", label: "4 BHK" },
  { value: "97", label: "Homes" },
];
const gradeFeatures = [
  "3 BHK Super Premium · 1,275–1,318 sq ft carpet · 1,902–2,262 sq ft super built-up · ₹6.00 Cr onwards",
  "4 BHK Elegance · 1,438–1,467 sq ft carpet · 2,155–2,489 sq ft super built-up · ₹7.50 Cr onwards",
  "4 BHK Luxury, corner · 1,668 sq ft carpet · 2,629–2,741 sq ft super built-up · ₹8.43 Cr onwards",
  "4 BHK Grandeur, corner · 2,023 sq ft carpet · 3,095–3,360 sq ft super built-up · ₹9.93–10.78 Cr",
];

const availability = {
  "Current published price": ["₹9 Cr onwards"],
  "What remains": ["Larger residences", "Higher floors", "No next phase"],
  "Ask us for": ["Live availability sheet", "Floor-wise areas", "A site visit"],
};

export default function PremiumInventory() {
  return (
    <section
      className="w-full py-12 px-4 sm:px-8"
      style={{ backgroundColor: "#faf6e8" }}
      id="investment-benefits"
    >
      <div className="max-w-5xl mx-auto">
        <h6 className="text-center uppercase mb-3" style={{ color: "#c8922a", letterSpacing: "2.5px", fontSize: "11px", fontWeight: 600 }}>
          Limited inventory
        </h6>
        <h2
          className="text-center font-bold text-gray-900 mb-10"
          style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", lineHeight: "1.25", color: "#2c1f0e" }}
        >
          Ninety-seven homes. Most of them are already gone.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Card 1 — Interiors */}
          <div className="bg-white p-7" style={{ borderTop: "3px solid #DCA54A" }}>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              In Every Residence
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              MIVAN-built, finished in marble and wood
            </h3>
            <ul className="space-y-2 mb-4">
              {interiorFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="rounded-full flex-shrink-0" style={{ width: 5, height: 5, background: "#DCA54A", display: "inline-block" }} />
                  <span style={{ fontSize: "13px", color: "#5c4a2a" }}>{f}</span>
                </li>
              ))}
            </ul>
            <div style={{ borderTop: "0.5px solid #e8dfc8", paddingTop: "10px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, color: "#8a7a5a", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                Kitchen provisions for
              </p>
              <div className="flex flex-wrap gap-1.5">
                {kitchenProvisions.map((item) => (
                  <span key={item} style={{ fontSize: "12px", background: "#faf6e8", color: "#7a5c1e", padding: "3px 10px", borderRadius: "20px", border: "0.5px solid #d4c9ae" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Space & Layout */}
          <div className="bg-white p-7" style={{ borderTop: "3px solid #DCA54A" }}>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              Grades & Launch Prices
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              3 and 4 BHK in four grades
            </h3>
            <div className="flex gap-2 mb-4">
              {homeMix.map((m) => (
                <div key={m.label} className="flex-1 text-center py-3" style={{ background: "#faf6e8", border: "0.5px solid #d4c9ae" }}>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#DCA54A" }}>{m.value}</div>
                  <div style={{ fontSize: "11px", color: "#8a7a5a" }}>{m.label}</div>
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {gradeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="rounded-full flex-shrink-0" style={{ width: 5, height: 5, background: "#DCA54A", display: "inline-block" }} />
                  <span style={{ fontSize: "13px", color: "#5c4a2a" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 — Availability */}
          <div className="bg-white p-7" style={{ borderTop: "3px solid #DCA54A" }}>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              Availability
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              The larger, higher-floor homes remain
            </h3>
            <div className="flex flex-col gap-3">
              {Object.entries(availability).map(([category, items]) => (
                <div key={category}>
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "#8a7a5a", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "5px" }}>
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} style={{ fontSize: "12px", color: "#5c4a2a", background: "#faf6e8", padding: "3px 9px", borderRadius: "20px", border: "0.5px solid #d4c9ae" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
