import SmoothScroll from "@/components/SmoothScroll";
import NavbarAnimation from "@/components/NavbarAnimation";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XeonSec | Product Strategy & High-Leverage Tech Studio",
  description: "We don’t just build software. We design product strategy for high-leverage tech ideas. 4 projects at a time, senior-level focus, rapid execution.",
  keywords: [
    "Product Strategy",
    "Tech Studio",
    "Software Engineering",
    "Machine Learning",
    "Cybersecurity",
    "Next.js Development",
    "Blockchain",
    "MLOps",
    "DevOps",
    "High-Leverage Tech"
  ],
  icons: {
    icon: '/xeonsec.jpg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground selection:bg-white selection:text-black" suppressHydrationWarning>
        {/* Animated Navbar */}
        <NavbarAnimation />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
