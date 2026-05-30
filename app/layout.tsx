import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// Single typeface for the whole site — Manrope gives the geometric, premium
// feel of the source design. Kept under the --font-inter var so Tailwind's
// fontFamily mapping needs no change.
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Perceptyne — AI Robots for Intelligent, Dexterous Tasks",
  description:
    "Intelligent robotics platform designed to handle complex industrial work; rapidly deployed, workflow-friendly, and powered by real-time AI.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
