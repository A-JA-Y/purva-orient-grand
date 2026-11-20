"use client";

import { useId, useMemo, useState } from "react";
import LeadModalButton from "@/components/LeadModalButton";

/**
 * Rent vs buy calculator for the /rent-vs-buy-house-bangalore guide.
 *
 * Model (the same one behind the break-even table on the page):
 *  - The buyer pays the down payment, GST (if under construction) and 7.6% stamp duty,
 *    registration and cess up front, then the EMI plus upkeep every month.
 *  - The tenant pays rent, rising once a year, and invests the buyer's upfront cash plus
 *    the monthly difference at a steady annual return, compounded monthly.
 *  - Break-even is the yearly appreciation at which the owner's equity (home value less
 *    the outstanding loan) equals the tenant's portfolio at the end of the stay.
 *  - Selling costs and tax on gains are left out, as on the page.
 */

const STAMP_AND_REGISTRATION = 0.076; // Karnataka: 5% stamp duty + 2% registration + 0.6% cess and surcharge
const GST_UNDER_CONSTRUCTION = 0.05;

function simulate({ price, rent, rate, tenure, rentGrowth, ret, stay, gst, upkeep, downPct }) {
  const P = price * 1e7;
  const loan = P * (1 - downPct / 100);
  const r = rate / 1200;
  const n = tenure * 12;
  const emi = r > 0 ? (loan * r * (1 + r) ** n) / ((1 + r) ** n - 1) : loan / n;
  const upfront = P * (downPct / 100) + (gst ? P * GST_UNDER_CONSTRUCTION : 0) + P * STAMP_AND_REGISTRATION;

  const monthlyReturn = (1 + ret / 100) ** (1 / 12) - 1;
  let portfolio = upfront;
  let balance = loan;
  let rentNow = rent * 1e5;
  let firstYearInterest = 0;

  for (let m = 0; m < stay * 12; m++) {
    if (m > 0 && m % 12 === 0) rentNow *= 1 + rentGrowth / 100;
    const emiNow = m < n ? emi : 0;
    portfolio = portfolio * (1 + monthlyReturn) + (emiNow + upkeep - rentNow);
    if (m < n) {
      const interest = balance * r;
      if (m < 12) firstYearInterest += interest;
      balance = Math.max(0, balance + interest - emi);
    }
  }

  const ratio = (portfolio + balance) / P;
  const breakEven = ratio > 0 ? ratio ** (1 / stay) - 1 : -1;
  const ownMonthly = emi + upkeep;
  const rentMonthly = rent * 1e5;
  const catchUpYears =
    rentGrowth > 0 && rentMonthly < ownMonthly
      ? Math.log(ownMonthly / rentMonthly) / Math.log(1 + rentGrowth / 100)
      : null;

  return {
    P,
    loan,
    emi,
    upfront,
    ownMonthly,
    rentMonthly,
    gap: ownMonthly - rentMonthly,
    yieldPct: (rentMonthly * 12 * 100) / P,
    firstYearInterest,
    breakEven,
    valueNeeded: P * (1 + breakEven) ** stay,
    catchUpYears,
  };
}

/** ₹ in crore / lakh, the way Indian buyers read prices. */
function inr(v) {
  const abs = Math.abs(v);
  const sign = v < 0 ? "−" : "";
  if (abs >= 1e7) return `${sign}₹${(abs / 1e7).toFixed(2)} crore`;
  if (abs >= 1e5) return `${sign}₹${(abs / 1e5).toFixed(2)} lakh`;
  return `${sign}₹${Math.round(abs).toLocaleString("en-IN")}`;
}

const DEFAULTS = {
  price: 6,
  rent: 1.5,
  rate: 8,
  tenure: 20,
  downPct: 25,
  upkeep: 15000,
  rentGrowth: 5,
  ret: 9,
  stay: 10,
  gst: true,
};

function Slider({ label, value, display, min, max, step, onChange, hint }) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-[13px] text-gray-600">
          {label}
        </label>
        <span className="text-[13px] font-medium text-gray-900 tabular-nums">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-emerald-700 cursor-pointer"
      />
      {hint && <p className="text-[11px] text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

export default function RentVsBuyCalculator() {
  const [v, setV] = useState(DEFAULTS);
  const set = (key) => (value) => setV((prev) => ({ ...prev, [key]: value }));
  const res = useMemo(() => simulate(v), [v]);

  const max = Math.max(res.ownMonthly, res.rentMonthly);
  const bars = [
    {
      label: "Renting",
      total: res.rentMonthly,
      segments: [{ name: "Rent", value: res.rentMonthly, color: "#2a78d6" }],
    },
    {
      label: "Buying",
      total: res.ownMonthly,
      segments: [
        { name: "EMI", value: res.emi, color: "#047857" },
        { name: "Upkeep", value: v.upkeep, color: "#C49A2B" },
      ],
    },
  ];

  const isDefault = JSON.stringify(v) === JSON.stringify(DEFAULTS);

  return (
    <section
      aria-label="Rent vs buy calculator"
      className="not-prose my-12 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
    >
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-5">
        <p className="text-[10.5px] tracking-[0.2em] uppercase text-emerald-700 font-medium">
          Rent vs buy calculator
        </p>
        <p className="font-serif text-[1.35rem] font-semibold text-gray-900 mt-1">
          Change the inputs and watch the break-even move
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* INPUTS */}
        <div className="px-6 py-6 space-y-5 md:border-r border-gray-100">
          <Slider
            label="Home price"
            value={v.price}
            display={`₹${v.price.toFixed(2)} crore`}
            min={1}
            max={15}
            step={0.25}
            onChange={set("price")}
          />
          <Slider
            label="Rent for a similar home"
            value={v.rent}
            display={`₹${v.rent.toFixed(2)} lakh / month`}
            min={0.25}
            max={5}
            step={0.05}
            onChange={set("rent")}
          />
          <Slider
            label="Home-loan rate"
            value={v.rate}
            display={`${v.rate.toFixed(1)}%`}
            min={6.5}
            max={11}
            step={0.1}
            onChange={set("rate")}
          />
          <Slider
            label="Loan tenure"
            value={v.tenure}
            display={`${v.tenure} years`}
            min={5}
            max={30}
            step={1}
            onChange={set("tenure")}
          />
          <Slider
            label="Down payment"
            value={v.downPct}
            display={`${v.downPct}%`}
            min={25}
            max={100}
            step={5}
            onChange={set("downPct")}
            hint="Banks lend at most 75% on loans above ₹75 lakh."
          />
          <Slider
            label="Upkeep a tenant wouldn’t pay"
            value={v.upkeep}
            display={`${inr(v.upkeep)} / month`}
            min={0}
            max={50000}
            step={1000}
            onChange={set("upkeep")}
          />
          <Slider
            label="Rent rise each year"
            value={v.rentGrowth}
            display={`${v.rentGrowth.toFixed(1)}%`}
            min={0}
            max={12}
            step={0.5}
            onChange={set("rentGrowth")}
          />
          <Slider
            label="Return on the tenant’s investments"
            value={v.ret}
            display={`${v.ret.toFixed(1)}% a year`}
            min={4}
            max={14}
            step={0.5}
            onChange={set("ret")}
          />
          <Slider
            label="How long you’ll stay"
            value={v.stay}
            display={`${v.stay} years`}
            min={3}
            max={25}
            step={1}
            onChange={set("stay")}
          />

          <fieldset>
            <legend className="text-[13px] text-gray-600 mb-2">When you buy</legend>
            <div className="grid grid-cols-2 gap-2">
              {[
                { gst: true, label: "Under construction", note: "5% GST" },
                { gst: false, label: "After completion cert.", note: "No GST" },
              ].map((o) => (
                <button
                  key={o.label}
                  type="button"
                  aria-pressed={v.gst === o.gst}
                  onClick={() => set("gst")(o.gst)}
                  className={`rounded-lg border px-3 py-2 text-left text-[12.5px] transition-colors ${
                    v.gst === o.gst
                      ? "border-emerald-700 bg-emerald-50 text-emerald-900"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <span className="block font-medium">{o.label}</span>
                  <span className="block text-[11px] opacity-70">{o.note}</span>
                </button>
              ))}
            </div>
          </fieldset>

          {!isDefault && (
            <button
              type="button"
              onClick={() => setV(DEFAULTS)}
              className="text-[12px] text-emerald-700 underline underline-offset-4"
            >
              Reset to the ₹6 crore example
            </button>
          )}
        </div>

        {/* RESULTS */}
        <div className="px-6 py-6 bg-white" aria-live="polite">
          <p className="text-[13px] text-gray-500">To match renting, the home must gain</p>
          <p className="text-[3rem] leading-none font-semibold text-gray-900 mt-2">
            {res.breakEven < 0 ? "—" : `${(res.breakEven * 100).toFixed(1)}%`}
            <span className="text-base font-normal text-gray-500"> a year</span>
          </p>
          <p className="text-[13px] text-gray-500 mt-2">
            for {v.stay} years
            {res.breakEven >= 0 && (
              <>
                , taking {inr(res.P)} to about <strong className="font-medium text-gray-900">{inr(res.valueNeeded)}</strong>
              </>
            )}
            .
          </p>

          {/* Monthly outgo, year one */}
          <div className="mt-7">
            <p className="text-[12px] font-medium text-gray-900">Monthly outgo in year one</p>
            <div className="mt-3 space-y-3">
              {bars.map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between text-[12px] text-gray-600 mb-1">
                    <span>{b.label}</span>
                    <span className="tabular-nums text-gray-900">{inr(b.total)}</span>
                  </div>
                  <div className="flex h-4 w-full gap-[2px]">
                    {b.segments.map((s, i) =>
                      s.value > 0 ? (
                        <div
                          key={s.name}
                          title={`${s.name}: ${inr(s.value)}`}
                          className={i === b.segments.length - 1 ? "rounded-r" : ""}
                          style={{ width: `${(s.value / max) * 100}%`, background: s.color }}
                        />
                      ) : null
                    )}
                  </div>
                </div>
              ))}
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11.5px] text-gray-500">
              {[
                { name: "Rent", color: "#2a78d6" },
                { name: "EMI", color: "#047857" },
                { name: "Upkeep", color: "#C49A2B" },
              ].map((k) => (
                <li key={k.name} className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: k.color }} />
                  {k.name}
                </li>
              ))}
            </ul>
          </div>

          <dl className="mt-7 grid grid-cols-2 gap-x-4 gap-y-4 text-[13px]">
            <div>
              <dt className="text-gray-500">Your own money up front</dt>
              <dd className="font-medium text-gray-900 tabular-nums">{inr(res.upfront)}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Loan</dt>
              <dd className="font-medium text-gray-900 tabular-nums">{inr(res.loan)}</dd>
            </div>
            <div>
              <dt className="text-gray-500">EMI</dt>
              <dd className="font-medium text-gray-900 tabular-nums">{inr(res.emi)}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Monthly gap, year one</dt>
              <dd className="font-medium text-gray-900 tabular-nums">{inr(res.gap)}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Rent as a yield on price</dt>
              <dd className="font-medium text-gray-900 tabular-nums">{res.yieldPct.toFixed(1)}%</dd>
            </div>
            <div>
              <dt className="text-gray-500">Rent catches up with EMI + upkeep</dt>
              <dd className="font-medium text-gray-900 tabular-nums">
                {res.catchUpYears === null
                  ? res.rentMonthly >= res.ownMonthly
                    ? "Already"
                    : "Never, at 0% growth"
                  : `In about ${Math.round(res.catchUpYears)} years`}
              </dd>
            </div>
          </dl>

          <div className="mt-7 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-4">
            <p className="text-[13px] text-emerald-900 leading-relaxed">
              Want these numbers on a real unit? We’ll send the live cost sheet, with GST, stamp duty and
              floor rise, for the homes still available.
            </p>
            <LeadModalButton className="mt-3 inline-flex items-center rounded-md bg-emerald-800 px-4 py-2 text-[13px] font-medium text-white hover:bg-emerald-900 transition-colors">
              Get the live cost sheet
            </LeadModalButton>
          </div>
        </div>
      </div>

      <p className="px-6 py-4 border-t border-gray-100 text-[11.5px] text-gray-400 leading-relaxed">
        Illustration only. Assumes 7.6% stamp duty, registration and cess, rent rising once a year, and a tenant who
        invests the buyer’s upfront cash and every rupee of the monthly difference. Selling costs and tax on gains are
        left out. Not financial advice.
      </p>
    </section>
  );
}
