import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/data";
import { Providers } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "CompanyFlow UK | Web Design, Software, AI & Automation",
    template: "%s | CompanyFlow UK",
  },
  description: "CompanyFlow UK builds high-performance websites, custom software, CRM and ERP systems, AI and automation for growing businesses.",
  applicationName: "CompanyFlow",
  authors: [{ name: "CompanyFlow", url: SITE.url }],
  creator: "CompanyFlow",
  publisher: "CompanyFlow",
  category: "technology",
  classification: "Business technology and digital services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "iK_u7FCk5U5mP4TYp3IJ1tPyiHlXPiWjrlhY3dszPaU",
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
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: "CompanyFlow",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SITE.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/twitter-image"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0d12",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
