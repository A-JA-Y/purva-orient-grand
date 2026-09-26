"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { theme } from "@/utils/theme";
import logo from "@/assets/pog/purva-orient-grand-logo.webp";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Record that a form was submitted
    if (typeof window !== "undefined") {
      localStorage.setItem("formSubmitted", "true");
    }

    // 2. Redirect back to home page after 3 seconds
    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${theme.bg} px-4`}>
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-lg w-full text-center flex flex-col items-center">
        {/* Brand Logo */}
        <Image
          src={logo}
          alt="Purva Orient Grand logo"
          width={150}
          height={37}
          className="w-auto object-contain mb-6"
          priority
        />

        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Messaging */}
        <h1 className={`${theme.fontHeading} text-2xl md:text-3xl font-bold ${theme.textPrimary} mb-3`}>
          Thank you.
        </h1>
        <p className={`${theme.fontBody} text-gray-600 mb-8`}>
          Your Purva Orient Grand brochure is downloading now. If it has not started, check your browser&apos;s downloads. Because inventory here is limited, one of our Central Bengaluru specialists will call shortly with the live availability position rather than a generic price list.
          <span className="block mt-4">
            Prefer to talk now? Call or WhatsApp{" "}
            <a href="tel:+916356663535" className={`${theme.textPrimary} font-semibold underline underline-offset-2 whitespace-nowrap`}>
              +91 63566 63535
            </a>{" "}
            or email{" "}
            <a href="mailto:vishalajitsaria1988@gmail.com" className={`${theme.textPrimary} font-semibold underline underline-offset-2 break-all`}>
              vishalajitsaria1988@gmail.com
            </a>
          </span>
          <span className="block mt-4 text-xs text-gray-500">Taking you back to the home page…</span>
        </p>

        {/* Loading Spinner */}
        <div className="w-6 h-6 border-2 border-[#c8952a] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
