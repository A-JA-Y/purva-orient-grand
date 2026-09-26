import { FaPhoneAlt } from "react-icons/fa";

const PHONE = "+916356663535";

export default function FloatingCall() {
  return (
    <a
      href={`tel:${PHONE}`}
      aria-label="Call us at +91 63566 63535"
      title="Call +91 63566 63535"
      className="
        fixed bottom-30 right-6 z-[1000]
        flex items-center justify-center
        w-12 h-12
        rounded-full
        bg-blue-600 text-white
        shadow-xl
        hover:bg-blue-700
        hover:scale-110
        transition-all duration-300
        animate-float
      "
    >
      <FaPhoneAlt size={28} />
    </a>
  );
}