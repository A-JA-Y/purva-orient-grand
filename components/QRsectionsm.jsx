const ReraStrip = () => {
  return (
    <div className="block md:hidden w-full bg-[#F2EDE0]  py-[5px] text-[1rem]">
      <div className="px-4 py-2 text-center text-[#1A1A1A] text-[11px] leading-[1.7] tracking-wide">
        <p>
          <strong className="tracking-widest">RERA NO.:</strong>{" "}
          <span className="whitespace-nowrap">PRM/KA/RERA/1251/310/PR/210907/004299</span>
        </p>
        <p>
          Verify at{" "}
          <a
            href="https://rera.karnataka.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            https://rera.karnataka.gov.in
          </a>
        </p>
        <p>
          <strong className="tracking-widest">RERA completion:</strong> 30 June 2027
        </p>
      </div>
    </div>
  );
};

export default ReraStrip;
