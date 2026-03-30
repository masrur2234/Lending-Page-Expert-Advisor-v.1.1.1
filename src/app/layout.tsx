import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EA Platform - Download EA & Indicator MT4/MT5 Gratis",
  description: "Download EA dan Indicator MT4/MT5 gratis tanpa batas. Auto trading, no ribet. Tinggal pakai, gas cuan! Platform sharing tools trading untuk trader pemula sampai pro.",
  keywords: ["EA", "Expert Advisor", "MT4", "MT5", "MetaTrader", "Indicator", "Trading", "Forex", "Auto Trading", "Scalping", "Gratis", "Free"],
  authors: [{ name: "EA Platform Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "EA Platform - Download EA & Indicator MT4/MT5 Gratis",
    description: "Download EA dan Indicator MT4/MT5 gratis tanpa batas. Auto trading, no ribet. Tinggal pakai, gas cuan!",
    url: "https://eaplatform.com",
    siteName: "EA Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EA Platform - Download EA & Indicator MT4/MT5 Gratis",
    description: "Download EA dan Indicator MT4/MT5 gratis tanpa batas. Auto trading, no ribet!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
