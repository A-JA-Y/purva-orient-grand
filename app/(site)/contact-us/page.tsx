import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import EnquirySection from "@/components/EnquirySection";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Contact Purva Orient Grand | Live Inventory & Site Visits",
  description:
    "Contact Real Revenue for Purva Orient Grand pricing, live inventory, brochure and site visits on Lal Bagh Main Road, Central Bengaluru.",
  alternates: { canonical: "https://www.godrejgolflink.in/contact-us" },
};

export default function ContactUsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Speak with our team for pricing, availability, site visits, and personalised assistance."
      />
      <ModalWrapper />
      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </section>
      <EnquirySection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
