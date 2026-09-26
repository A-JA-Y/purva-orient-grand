
import Image from "next/image";
import heroDesktop from "@/assets/pog/hero-desktop.webp";
import heroMobile from "@/assets/pog/hero-mobile.webp";

const Hero = () => {
  return (
    <section className="w-full">
      {/* Mobile & Tablet */}
      <div className="block md:hidden">
        <Image
          src={heroMobile}
          alt="Purva Orient Grand by Puravankara, a single G+24 tower with lit private decks rising above the greenery of Sudhama Nagar at dusk, Central Bengaluru skyline behind (artistic impression)"
          width={1536}


          priority

          sizes="100vw"
          quality={80}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Desktop Background */}
      <div
        className="
          hidden md:flex
          w-full md:h-[70vh]
          items-center
          relative
          overflow-hidden
        "
      >
        <Image
          src={heroDesktop}
          alt="Purva Orient Grand tower on Lal Bagh Main Road at night, warm light on its private decks and balconies against a deep-blue Bengaluru sky (artistic impression)"
          fill
          priority
          className="object-cover object-[right_top]"
          sizes="100vw"
          quality={80}
        />

        {/* Overlay to mimic background-blend-mode: lighten if needed,
            though usually object-cover is enough if the design allows */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>

        {/* RERA details — top-right over the sky, as on the original hero */}
        <div className="absolute top-6 right-8 lg:right-12 text-right text-white text-[11px] uppercase tracking-[0.2em] leading-[1.8] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          <p>RERA NO.: PRM/KA/RERA/1251/310/PR/210907/004299</p>
          <p>
            <a
              href="https://rera.karnataka.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="normal-case tracking-[0.12em] text-white/85 hover:text-white no-underline"
            >
              https://rera.karnataka.gov.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
