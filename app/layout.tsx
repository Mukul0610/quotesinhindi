import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quotes and Shayari in Hindi",
  description: "Discover a treasure trove of heartfelt Hindi Shayari and Quotes on love, life, motivation,poetry,politics and philosophy. Daily updated collection featuring inspirational thoughts, good morning messages, sad shayari, and timeless wisdom in Hindi. Explore 10,000+ handpicked quotes across emotions, share with loved ones, and find words that touch your soul. Your daily destination for shayari in hindi and meaningful quotes. Visit now for fresh content daily!",
  keywords: "quotes in hindi,Love Quotes in Hindi,shayari in hindi",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
    <meta name="p:domain_verify" content="8c2fc0c02cd41d55426a95764aa392bf"/>
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center justify-center`}
        style={{ backgroundColor: "#ede7e1", color: "#4b281e" }} // Set background and text color
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
