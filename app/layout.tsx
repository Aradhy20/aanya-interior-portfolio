import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Aanya Jain — Industrial Designer & Spatial Practitioner",
  description:
    "Portfolio of Aanya Jain: thoughtful spatial design, ergonomic furniture, sustainable architecture, and human-centred everyday experiences. Banasthali Vidyapith Bachelor of Design.",
  keywords: [
    "Aanya Jain",
    "Industrial Design",
    "Spatial Design",
    "Furniture Design",
    "Interior Architecture",
    "Banasthali Vidyapith",
    "Ergonomic Furniture",
    "Sustainable Architecture",
    "Modular Shelter",
    "Design Portfolio"
  ],
  authors: [{ name: "Aanya Jain", url: "https://aanya-interior-portfolio.vercel.app" }],
  creator: "Aanya Jain",
  metadataBase: new URL("https://aanya-interior-portfolio.vercel.app"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Aanya Jain — Industrial Designer & Spatial Practitioner",
    description:
      "Thoughtful spaces. Meaningful living. Explore selected industrial design, spatial architecture, and furniture projects by Aanya Jain.",
    url: "https://aanya-interior-portfolio.vercel.app",
    siteName: "Aanya Jain Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/aanya-portrait.webp",
        width: 1200,
        height: 630,
        alt: "Aanya Jain — Industrial Designer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aanya Jain — Industrial Designer & Spatial Practitioner",
    description:
      "Thoughtful spaces. Meaningful living. Selected industrial and furniture design projects.",
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
      name: "Aanya Jain",
      jobTitle: "Industrial Designer",
      url: "https://aanya-interior-portfolio.vercel.app",
      image: "https://aanya-interior-portfolio.vercel.app/images/aanya-portrait.webp",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Banasthali Vidyapith"
      },
      sameAs: [
        "https://www.instagram.com/jainj_enny/",
        "https://www.youtube.com/@aanyajain234",
        "https://heyzine.com/flip-book/4908923594.html"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://aanya-interior-portfolio.vercel.app/#website",
      url: "https://aanya-interior-portfolio.vercel.app",
      name: "Aanya Jain Portfolio",
      description: "Portfolio of industrial and spatial design by Aanya Jain.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
