import Image from "next/image";
import purvaMonogram from "@/assets/pog/purva-monogram.webp";

const QRSection = () => {
  return (
    <section className="w-full bg-[#141004] px-[30px] py-[45px]">
      <div className="max-w-screen-xl mx-auto overflow-hidden">


        <div className="float-right ml-4">
          <Image
            src={purvaMonogram}
            alt="Purva Orient Grand monogram: a gold P on a navy tile"
            width={110}
            height={110}
            className="block object-contain"
          />
        </div>

        <address className="not-italic text-right text-white text-[13px] leading-[1.7] tracking-wide">

          <p className="mb-0.5">
            <strong className="tracking-widest">RERA NO.:</strong>{" "}
            <span itemProp="identifier">PRM/KA/RERA/1251/310/PR/210907/004299</span>
          </p>
          <p className="mb-2 text-[#cccccc] text-[12px]">
            <a
              href="https://rera.karnataka.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cccccc] hover:text-white no-underline"
            >
              https://rera.karnataka.gov.in
            </a>
          </p>

          <p className="mb-1">
            <strong className="tracking-widest">PROJECT</strong>: PURVA ORIENT GRAND
          </p>
          <p className="mb-0">
            <strong className="tracking-widest">PROMOTER</strong>: PURAVANKARA LIMITED
          </p>
          <p className="mb-0">
            <strong className="tracking-widest">RERA REGISTRATION</strong>: 07 SEP 2021
          </p>
          <p className="mb-1">
            <strong className="tracking-widest">RERA COMPLETION</strong>: 30 JUN 2027
          </p>
          <p className="mb-0.5">
            <strong className="tracking-widest">APPROVING AUTHORITY</strong>: BBMP, BENGALURU URBAN
          </p>
          <p className="mb-0">
            <strong className="tracking-widest">SITE</strong>: MUNICIPAL NO. 5, LAL BAGH MAIN ROAD,
          </p>
          <p>SUDHAMA NAGAR, BENGALURU 560027</p>

        </address>

        <div className="clear-both" />
      </div>
    </section>
  );
};

export default QRSection;
