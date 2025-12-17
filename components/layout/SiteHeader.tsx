import Link from "next/link";
import { AppLink } from "@/components/ui/app-link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mainNav, externalNav } from "@/lib/nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <AppLink href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">{siteConfig.name}</span>
        </AppLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {mainNav.map((item) => (
            <AppLink
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </AppLink>
          ))}
          <div className="h-4 w-px bg-border mx-2" />
          {externalNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors opacity-80 hover:opacity-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu - Native <details> element */}
        <details className="relative md:hidden group">
          <summary
            className="list-none cursor-pointer inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 group-open:hidden" />
            <X className="h-6 w-6 hidden group-open:inline" />
            <span className="sr-only">Toggle menu</span>
          </summary>
          <div className="absolute right-0 mt-2 w-64 glass-panel p-4 hidden group-open:block border border-border rounded-lg shadow-lg">
            <nav className="space-y-2">
              {mainNav.map((item) => (
                <AppLink
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </AppLink>
              ))}
              <div className="h-px bg-border my-2" />
              {externalNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors opacity-80 hover:opacity-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
