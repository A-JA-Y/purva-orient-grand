"use client";
import dynamic from "next/dynamic";
const LiteYT = dynamic(() => import("@/components/LiteYT"), {
  ssr: false,
});
export default function WalkthroughSection() {
  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="walkthrough">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Official Project Film
          </h6>

          <h2 className="text-3xl   md:text-4xl font-bold text-gray-900">
            Purva Orient Grand on Lalbagh Road
          </h2>

          <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
            Watch Puravankara&apos;s official film on Purva Orient Grand and its
            Lal Bagh Main Road address. Then see the tower, the residences and
            the Level 25 rooftop in person on a site visit.
          </p>
        </div>


        <div className="relative w-full rounded-xl overflow-hidden shadow-lg max-w-[720px] mx-auto">
          <div className="aspect-video w-full h-full">
            <LiteYT />
          </div>
        </div>


        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            Want the live availability sheet and floor-wise areas?
          </p>

          <a
            href="#book-site-visit"
            className="inline-block bg-[#DCA54A] text-white text-xs px-6 py-3 rounded uppercase"
          >
            Book a Site Visit
          </a>
        </div>

      </div>
    </section>
  );
}
