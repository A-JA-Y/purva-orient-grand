import { FaWhatsapp } from "react-icons/fa";

const PHONE = "916356663535";
const MESSAGE =
  "Hi, I'm interested in Purva Orient Grand on Lal Bagh Road. Please share live availability.";

export default function FloatingWhatsapp() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp at +91 63566 63535"
      title="+91 63566 63535"
      className="
        fixed bottom-6 right-3 z-[1000]
        flex items-center justify-center
        w-16 h-16
        rounded-full bg-[#25D366] text-white
        shadow-xl
        hover:bg-[#1ebe57] hover:scale-110
        transition-all duration-300
        animate-bounce
      "
    >
      <FaWhatsapp
        size={34}
        className="animate-pulse"
      />
    </a>
  );
}