import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...buildMetadata({
    title: "GrayGhost Labs – Data-Driven Tools for Markets, Models, and Sports",
    description:
      "GrayGhost Labs is a collection of obsessively built tools for market risk, portfolio research, sports analytics, and other problems that refused to stay inside a spreadsheet.",
  }),
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "GrayGhost Labs",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "GrayGhost Labs",
      url: SITE_URL,
      logo: `${SITE_URL}/icons/icon-512.png`,
      sameAs: [EXTERNAL_LINKS.x, EXTERNAL_LINKS.substack],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "GrayGhost Labs",
      url: SITE_URL,
    },
  ];

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_55%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.95),transparent_70%)]">
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}


