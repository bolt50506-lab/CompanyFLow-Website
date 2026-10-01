import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/data";
import { Providers } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s | CompanyFlow",
  },
  description: SITE.description,
  applicationName: "CompanyFlow",
  keywords: [
    "CompanyFlow",
    "web development UK",
    "custom software development",
    "business automation",
    "AI automation",
    "CRM and ERP",
    "WhatsApp automation",
    "e-commerce development",
    "digital systems",
  ],
  authors: [{ name: "CompanyFlow", url: SITE.url }],
  creator: "CompanyFlow",
  publisher: "CompanyFlow",
  category: "technology",
  alternates: { canonical: "/" },
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
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  icons: { icon: "/icon.svg" },
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