import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import JsonLd from "./json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://hashtag-finder-pro.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Hashtag Finder Pro - Temukan Hashtag Terbaik untuk Kontenmu",
    template: "%s | Hashtag Finder Pro",
  },
  description:
    "Generate hashtag yang relevan dan terbukti efektif untuk YouTube, TikTok, dan Instagram. Tingkatkan discoverability kontenmu sekarang!",
  keywords: [
    "hashtag generator",
    "hashtag finder",
    "hashtag YouTube",
    "hashtag TikTok",
    "hashtag Instagram",
    "hashtag Indonesia",
    "tools content creator",
    "hashtag research",
    "viral hashtag",
    "trending hashtag",
    "SEO hashtag",
    "hashtag recommendation",
  ],
  authors: [{ name: "Hashtag Finder Pro" }],
  creator: "Hashtag Finder Pro",
  publisher: "Hashtag Finder Pro",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Hashtag Finder Pro",
    title: "Hashtag Finder Pro - Temukan Hashtag Terbaik untuk Kontenmu",
    description:
      "Generate hashtag yang relevan dan terbukti efektif untuk YouTube, TikTok, dan Instagram. Tingkatkan discoverability kontenmu sekarang!",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hashtag Finder Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashtag Finder Pro - Temukan Hashtag Terbaik untuk Kontenmu",
    description:
      "Generate hashtag yang relevan dan terbukti efektif untuk YouTube, TikTok, dan Instagram.",
    images: ["/og-image.png"],
    creator: "@hashtagfinderpro",
  },
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
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="application-name" content="Hashtag Finder Pro" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Hashtag Finder Pro" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#4F46E5" />
        <meta name="google-site-verification" content="verification-token" />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}