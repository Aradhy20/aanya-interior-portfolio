import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aanya Jain — Industrial Designer",
  description:
    "Portfolio of Aanya Jain: spatial design, furniture, hospitality concepts and thoughtful everyday experiences.",
  openGraph: {
    title: "Aanya Jain — Industrial Designer",
    description:
      "Thoughtful spaces. Meaningful living. Explore Aanya Jain’s selected design projects.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
