import type { Metadata } from "next";
import { Zen_Dots } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";

// Initialize the Zen Dots font
const zenDots = Zen_Dots({
  weight: ['400'], // Zen Dots is only available in 400 weight
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen-dots',
});


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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${zenDots.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html> 
  );
}
