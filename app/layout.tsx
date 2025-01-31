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
  openGraph: {
    title: 'Quotes and Shayari in Hindi',
    description: "Discover a treasure trove of heartfelt Hindi Shayari and Quotes on love, life, motivation,poetry,politics and philosophy. Daily updated collection featuring inspirational thoughts, good morning messages, sad shayari, and timeless wisdom in Hindi. Explore 10,000+ handpicked quotes across emotions, share with loved ones, and find words that touch your soul. Your daily destination for shayari in hindi and meaningful quotes. Visit now for fresh content daily!",
    images: [
      {
        url: 'https://res.cloudinary.com/dtezihsb8/image/upload/v1737181044/Untitled_design_a3fy2f.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
    ],
  }
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
    <meta name="msvalidate.01" content="E049F255AEE662738072C8F1538BA6FF" />
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
