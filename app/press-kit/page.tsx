import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { EXTERNAL_LINKS, SITE_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Press Kit | GrayGhost Labs",
  description: "Brand assets, links, and boilerplate for GrayGhost Labs.",
  path: "/press-kit",
  ogImage: "/og/default.png",
});

export default function PressKitPage() {
  return (
    <>
      <BreadcrumbJsonLd
        id="jsonld-breadcrumb-press-kit"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Press Kit", path: "/press-kit" },
        ]}
      />
      <PageJsonLd
        type="WebPage"
        name="Press Kit"
        path="/press-kit"
        description="Brand assets, links, and boilerplate for GrayGhost Labs."
        id="jsonld-press-kit-page"
      />
      <div className="container px-4 py-10 sm:py-14 md:py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold">Press Kit</h1>
          <p className="text-lg text-muted-foreground">
            Brand basics, assets, and links for GrayGhost Labs.
          </p>
        </div>

        {/* Boilerplate Card */}
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle>Boilerplate</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              GrayGhost Labs is a small collection of obsessively-built tools at the
              intersection of markets, football, and automation—built for signal, not hype.
            </p>
            <div className="p-3 bg-background/50 rounded-md border border-border/50">
              <code className="text-xs text-foreground/80 font-mono break-all">
                GrayGhost Labs is a small collection of obsessively-built tools at the
                intersection of markets, football, and automation—built for signal, not hype.
              </code>
            </div>
          </CardContent>
        </Card>

        {/* Links Card */}
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle>Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">Main</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href={SITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground underline underline-offset-2"
                    >
                      GrayGhost Labs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={EXTERNAL_LINKS.substack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground underline underline-offset-2"
                    >
                      Substack Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={EXTERNAL_LINKS.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground underline underline-offset-2"
                    >
                      X / Twitter
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">Products</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href={EXTERNAL_LINKS.ghostGaugeApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground underline underline-offset-2"
                    >
                      GhostGauge
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={EXTERNAL_LINKS.ghostAllocatorApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground underline underline-offset-2"
                    >
                      Ghost Allocator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={EXTERNAL_LINKS.gridironEdgeApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground underline underline-offset-2"
                    >
                      Gridiron Edge
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assets Card */}
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle>Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold mb-2">Icons</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">PWA Icon (512×512)</span>
                    <Link
                      href="/icons/icon-512.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:underline underline-offset-2"
                    >
                      Download
                    </Link>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">PWA Icon (192×192)</span>
                    <Link
                      href="/icons/icon-192.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:underline underline-offset-2"
                    >
                      Download
                    </Link>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Apple Touch Icon (180×180)</span>
                    <Link
                      href="/apple-touch-icon.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:underline underline-offset-2"
                    >
                      Download
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">OpenGraph Images</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Home (1200×630)</span>
                    <Link
                      href="/og/home.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:underline underline-offset-2"
                    >
                      Download
                    </Link>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Default (1200×630)</span>
                    <Link
                      href="/og/default.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:underline underline-offset-2"
                    >
                      Download
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Colors Card */}
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle>Colors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-md border border-border/50" style={{ backgroundColor: "#0a1224" }} />
                  <div>
                    <p className="text-sm font-semibold">Background</p>
                    <code className="text-xs text-muted-foreground">#0a1224</code>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-md border border-border/50" style={{ backgroundColor: "#0a1226" }} />
                  <div>
                    <p className="text-sm font-semibold">Glass Panel</p>
                    <code className="text-xs text-muted-foreground">#0a1226</code>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-md border border-border/50" style={{ backgroundColor: "#f1f5f9" }} />
                  <div>
                    <p className="text-sm font-semibold">Text</p>
                    <code className="text-xs text-muted-foreground">#f1f5f9</code>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-md border border-border/50" style={{ backgroundColor: "#94a3b8" }} />
                  <div>
                    <p className="text-sm font-semibold">Muted Text</p>
                    <code className="text-xs text-muted-foreground">#94a3b8</code>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-md border border-border/50" style={{ backgroundColor: "#2563eb" }} />
                  <div>
                    <p className="text-sm font-semibold">Accent Blue</p>
                    <code className="text-xs text-muted-foreground">#2563eb</code>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-md border border-border/50" style={{ backgroundColor: "#22c55e" }} />
                  <div>
                    <p className="text-sm font-semibold">Emerald</p>
                    <code className="text-xs text-muted-foreground">#22c55e</code>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Note */}
        <p className="text-sm text-muted-foreground text-center">
          Fastest contact: X DMs. If it&apos;s worth building, start there.
        </p>
      </div>
    </div>
    </>
  );
}

