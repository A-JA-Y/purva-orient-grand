import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "lite-youtube-embed/src/lite-yt-embed.css";
import { Analytics } from '@vercel/analytics/next';



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
  weight: ["400"]
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  adjustFontFallback: true,
  weight: ["600"],
  preload: false,
});




// Site-wide defaults. The canonical URL and og:url are set per page (see app/page.tsx),
// so inner pages never inherit the homepage canonical. Favicon, app icon and
// apple-touch icon come from the Next.js file conventions (app/favicon.ico,
// app/icon.png, app/apple-icon.png).
export const metadata: Metadata = {
  metadataBase: new URL("https://purvaorientgrandlalbagh.com"),
  title: "Purva Orient Grand | 3 & 4 BHK on Lal Bagh Road, CBD",
  description:
    "Purva Orient Grand — 97 ultra-luxury 3 and 4 BHK residences on Lal Bagh Main Road, Central Bengaluru. Rooftop club at the 25th level. Possession June 2027. RERA approved.",
  applicationName: "Purva Orient Grand",
  keywords: [
    "Purva Orient Grand",
    "Purva Orient Grand price",
    "Purva Orient Grand Lalbagh",
    "4 BHK flats Lalbagh Road",
    "luxury apartments central Bangalore",
    "Puravankara Lal Bagh",
    "Purva Orient Grand floor plan",
    "apartments near Lalbagh",
    "CBD Bangalore luxury flats",
    "Purva Orient Grand possession",
    "WorldHome Collection Puravankara",
  ],
  category: "Real Estate",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Purva Orient Grand | 97 Residences Beside Lalbagh, Central Bengaluru",
    description:
      "One tower. Ninety-seven homes. No shared walls. An infinity pool on the 25th level, and a 240-acre botanical garden that can never be built over.",
    siteName: "Purva Orient Grand",
    images: [
      {
        url: "https://purvaorientgrandlalbagh.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Purva Orient Grand, a single G+24 tower of 97 residences on Lal Bagh Main Road, Central Bengaluru",
        type: "image/webp",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Purva Orient Grand | 97 Residences Beside Lalbagh, Central Bengaluru",
    description:
      "One tower. Ninety-seven homes. No shared walls. An infinity pool on the 25th level, and a 240-acre botanical garden that can never be built over.",
    images: [
      {
        url: "https://purvaorientgrandlalbagh.com/images/og-image.webp",
        alt: "Purva Orient Grand, a single G+24 tower of 97 residences on Lal Bagh Main Road, Central Bengaluru",
      },
    ],
  },
};

import { ModalProvider } from "@/components/ModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}  h-full antialiased light `}
    >
      <Analytics />
      <Script
        id="google-ads-gtag-src"
        src="https://www.googletagmanager.com/gtag/js?id=AW-18344445987"
        strategy="beforeInteractive"
      />
      <Script id="google-ads-gtag" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18344445987');`}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGFWQ73S');`}
      </Script>
      <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wj5sfhnj3d");`}
      </Script>

      <body className="min-h-full flex flex-col overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGFWQ73S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
