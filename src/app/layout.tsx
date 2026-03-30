import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B0F1A" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F1A" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "EA Platform - Download EA & Indicator MT4/MT5 Gratis",
    template: "%s | EA Platform",
  },
  description: "Download EA dan Indicator MT4/MT5 gratis tanpa batas. Auto trading, no ribet. Tinggal pakai, gas cuan! Platform sharing tools trading untuk trader pemula sampai pro.",
  keywords: ["EA", "Expert Advisor", "MT4", "MT5", "MetaTrader", "Indicator", "Trading", "Forex", "Auto Trading", "Scalping", "Gratis", "Free"],
  authors: [{ name: "EA Platform Team" }],
  creator: "EA Platform",
  publisher: "EA Platform",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "EA Platform - Download EA & Indicator MT4/MT5 Gratis",
    description: "Download EA dan Indicator MT4/MT5 gratis tanpa batas. Auto trading, no ribet. Tinggal pakai, gas cuan!",
    url: "https://eaplatform.com",
    siteName: "EA Platform",
    type: "website",
    locale: "id_ID",
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
