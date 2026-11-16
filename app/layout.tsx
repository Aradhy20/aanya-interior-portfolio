import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/site-config";
import { FAQS } from "@/data/faq";

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

const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Aanya Jain | Interior & Industrial Design Portfolio",
  description:
    "Explore Aanya Jain's interior and industrial design portfolio featuring sustainable spatial design, furniture concepts, ergonomic solutions, 3D visualization and creative design projects.",
  keywords: [
    // Primary Keywords
    "Aanya Jain Interior Design Portfolio",
    "Interior Design Portfolio",
    "Interior and Industrial Design",
    "Spatial Design Portfolio",
    "Furniture Design Portfolio",
    // Secondary Keywords
    "Sustainable Interior Design",
    "Ergonomic Furniture Design",
    "Residential Space Planning",
    "Hospitality Interior Design",
    "3D Interior Visualization",
    "Furniture Layout Design",
    "Interior Design Student in India",
    "Interior Design Projects",
    "Architectural Space Planning",
    // Location Keywords
    "Interior Design Portfolio Agra",
    "Interior Designer Agra",
    "Interior Design Student Agra",
    "Spatial Design India",
    "Interior Design Portfolio India",
    // Institution Keywords
    "Banasthali Vidyapith Design Student",
    "AutoCAD Interior Designer",
    "3ds Max Spatial Renders"
  ],
  authors: [{ name: SITE_CONFIG.name, url: baseUrl }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Aanya Jain | Interior & Industrial Design Portfolio",
    description:
      "Explore Aanya Jain's interior and industrial design portfolio featuring sustainable spatial design, furniture concepts, ergonomic solutions, 3D visualization and creative design projects.",
    url: baseUrl,
    siteName: "Aanya Jain Design Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/aanya-jain-interior-designer-agra-portrait.webp",
        width: 1200,
        height: 630,
        alt: "Aanya Jain — Interior and Industrial Design Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aanya Jain | Interior & Industrial Design Portfolio",
    description:
      "Explore Aanya Jain's interior and industrial design portfolio featuring sustainable spatial design, furniture concepts, ergonomic solutions, 3D visualization and creative design projects.",
    images: ["/images/aanya-jain-interior-designer-agra-portrait.webp"]
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
      "@id": `${baseUrl}/#person`,
      name: SITE_CONFIG.name,
      givenName: "Aanya",
      familyName: "Jain",
      jobTitle: SITE_CONFIG.role,
      description: SITE_CONFIG.profileDescription,
      url: baseUrl,
      image: `${baseUrl}/images/aanya-jain-interior-designer-agra-portrait.webp`,
      email: `mailto:${SITE_CONFIG.email}`,
      telephone: SITE_CONFIG.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        postalCode: SITE_CONFIG.postalCode,
        addressCountry: "IN"
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: SITE_CONFIG.university,
        url: "https://www.banasthali.org/"
      },
      knowsAbout: [
        "Interior Design",
        "Industrial Design",
        "Spatial Planning",
        "Ergonomic Furniture Design",
        "Sustainable Architecture",
        "Passive Cooling",
        "AutoCAD",
        "3ds Max",
        "SketchUp",
        "Rayon"
      ],
      sameAs: [
        SITE_CONFIG.portfolioBookUrl,
        SITE_CONFIG.youtubeUrl,
        SITE_CONFIG.instagramUrl
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: "Aanya Jain | Interior & Industrial Design Portfolio",
      description:
        "Explore Aanya Jain's interior and industrial design portfolio featuring sustainable spatial design, furniture concepts, ergonomic solutions, 3D visualization and creative design projects.",
      publisher: {
        "@id": `${baseUrl}/#person`
      },
      inLanguage: "en-US"
    },
    {
      "@type": "ProfilePage",
      "@id": `${baseUrl}/#profilepage`,
      url: `${baseUrl}/`,
      name: "Aanya Jain — Interior & Industrial Design Portfolio",
      mainEntity: {
        "@id": `${baseUrl}/#person`
      },
      dateCreated: "2026-01-15T00:00:00Z",
      dateModified: "2026-03-09T00:00:00Z"
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faqpage`,
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
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
