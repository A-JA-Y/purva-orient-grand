import {
  FaChartPie,
  FaCity,
  FaTree,
  FaRupeeSign,
  FaSubway,
  FaUserTie,
  FaAward,
  FaShieldAlt,
  FaLock,
} from "react-icons/fa";

export default function ReasonsToInvest() {
  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="investment">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Reasons to Invest
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Central Bengaluru
          </h2>

          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto">
            Every ₹8 crore project in Bengaluru has an infinity pool. The case for the CBD is not about amenities; it is about land, and land here is no longer being made.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 md:px-[8rem]">

          {/* Left: Key Reasons */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Why the Land Holds Value
            </h4>

            <ul className="space-y-4">
              {[
                { icon: <FaChartPie />, text: "Land is 52% of this project's RERA-filed cost, against 20–30% in the suburbs" },
                { icon: <FaCity />, text: "New CBD supply arrives only by redeveloping small parcels" },
                { icon: <FaTree />, text: "Lalbagh's 240 protected acres can never be built over" },
                { icon: <FaRupeeSign />, text: "₹27,900–30,100 per sq ft: top of the premium band, below Lavelle Road's ₹35,000–55,000" },
                { icon: <FaSubway />, text: "Lalbagh Metro (Green Line) five minutes, MG Road Metro ten" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#DCA54A] text-lg">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Additional Value */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              What Stands Behind It
            </h4>

            <ul className="space-y-4">
              {[
                { icon: <FaUserTie />, text: "Buyers: corporate leaders, CBD professionals, old-Bangalore families and NRIs" },
                { icon: <FaAward />, text: "Puravankara: founded 1975, listed on the BSE and NSE since 2007" },
                { icon: <FaShieldAlt />, text: "Karnataka RERA registered, completion filed for 30 June 2027" },
                { icon: <FaLock />, text: "70% of collections held in a designated RERA escrow account" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#DCA54A] text-lg">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Closing */}

          </div>

        </div>
          <p className="text-gray-600 text-sm mt-6 leading-relaxed text-center">
              Ninety-seven homes on 1.15 acres is a normal CBD format, and there is no next phase or second tower to follow. For a family, that is an address that will still read correctly in twenty years; for an investor, it is a scarce asset in a part of the city where new supply arrives only through redevelopment.
            </p>
      </div>
    </section>
  );
}
