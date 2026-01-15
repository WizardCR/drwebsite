import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from '@/components/Cursor'
import SmoothScroll from '@/components/SmoothScroll'
import Header from '@/components/Header';
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DIGITAL RENDER STUDIOS",
  description: "Diseñamos y construimos experiencias digitales para marcas modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {`${geistSans.variable} ${geistMono.variable} antialiased "bg-neutral-950 text-neutral-100`}
      ><Header />

          <Cursor />

          <SmoothScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
