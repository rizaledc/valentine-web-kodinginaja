import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vow to My Beautiful Girl",
  description: "A digital love letter from Rizal Wahyu.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Vow to My Beautiful Girl",
    description: "A digital love letter from Rizal Wahyu.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Happy Valentine's Day - Gold Heart",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vow to My Beautiful Girl",
    description: "A digital love letter from Rizal Wahyu.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <body
        className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
