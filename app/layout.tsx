import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { buildMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = buildMetadata({
  title: "GrayGhost Labs – Data-Driven Tools for Bitcoin and Ball",
  description:
    "GrayGhost Labs is a small collection of obsessively-built tools for markets and sports: Bitcoin risk dashboards, college football models, and other experiments that probably took way too many hours.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),_transparent_55%)]">
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}


