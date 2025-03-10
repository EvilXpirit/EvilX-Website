import type { Metadata } from "next";
import { Geist, Geist_Mono, Aldrich } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aldrich  = Aldrich({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "EvilX Games",
  description: "Discover and play hundreds of free games with friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aldrich.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
