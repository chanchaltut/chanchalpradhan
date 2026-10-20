import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import { site } from "@/data/site";
import { structuredData } from "@/lib/structured-data";
import "./globals.css";

const fullTitle = `${site.name} | ${site.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: fullTitle, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
    types: { "text/plain": [{ url: "/llms.txt", title: "LLM-readable profile" }] },
  },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: site.name,
    title: fullTitle,
    description: site.description,
    locale: "en_US",
    firstName: "Chanchal",
    lastName: "Pradhan",
    username: "chanchaltut",
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitter,
    creator: site.twitter,
    title: fullTitle,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Kolkata",
    "geo.position": "22.5726;88.3639",
    ICBM: "22.5726, 88.3639",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#070709" },
  ],
};

// Runs before paint so the stored theme never flashes. Dark is the default.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light')document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()).replace(/</g, "\\u003c") }}
        />
        <link rel="author" href="/humans.txt" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
