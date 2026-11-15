import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/site-config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"]
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Aanya Jain — Interior & Industrial Design Student",
  description:
    "Portfolio of Aanya Jain: 7th-semester Industrial Design student at Banasthali Vidyapith exploring sustainable, ergonomic, and smart interior design solutions, furniture, and spatial experiences.",
  keywords: [
    "Aanya Jain",
    "Interior Design Student",
    "Industrial Design Student",
    "Banasthali Vidyapith",
    "Banasthali Vidyapeeth",
    "Spatial Design",
    "Furniture Design",
    "Ergonomic Furniture",
    "Sustainable Interior Design",
    "Modular Shelter",
    "Rayon",
    "AutoCAD",
    "SketchUp",
    "3ds Max",
    "Agra Interior Designer"
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.siteUrl }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Aanya Jain — Interior & Industrial Design Student",
    description:
      "A 7th-semester Industrial Design student passionate about sustainable, ergonomic, and smart interior design solutions. Explore selected design projects.",
    url: SITE_CONFIG.siteUrl,
    siteName: "Aanya Jain Design Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/aanya-portrait.webp",
        width: 1200,
        height: 630,
        alt: "Aanya Jain — Interior and Industrial Design Student"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aanya Jain — Interior & Industrial Design Student",
    description:
      "Thoughtful spaces. Meaningful living. Selected industrial and interior design projects.",
    images: ["/images/aanya-portrait.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://aanya-interior-portfolio.vercel.app/#person",
      name: SITE_CONFIG.name,
      jobTitle: SITE_CONFIG.role,
      url: SITE_CONFIG.siteUrl,
      image: "https://aanya-interior-portfolio.vercel.app/images/aanya-portrait.webp",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        postalCode: SITE_CONFIG.postalCode,
        addressCountry: "IN"
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: SITE_CONFIG.university
      },
      sameAs: [
        SITE_CONFIG.youtubeUrl,
        SITE_CONFIG.instagramUrl,
        SITE_CONFIG.portfolioBookUrl
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://aanya-interior-portfolio.vercel.app/#website",
      url: SITE_CONFIG.siteUrl,
      name: "Aanya Jain Design Portfolio",
      description:
        "Portfolio of interior and industrial design projects by Aanya Jain, Bachelor of Design student at Banasthali Vidyapith.",
      publisher: {
        "@id": "https://aanya-interior-portfolio.vercel.app/#person"
      }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/images/portfolio-qr.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
