"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { mainNav, externalNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" prefetch={false} className="flex items-center space-x-2">
          <span className="text-xl font-bold">{siteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className={cn(
                "text-sm font-medium text-foreground/80 hover:text-foreground transition-colors",
                isActive(item.href) &&
                  "text-foreground underline underline-offset-4"
              )}
            >
              {item.label}
            </Link>
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

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </>
          ) : (
            <>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </>
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container px-4 py-4 space-y-2">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                onClick={closeMobileMenu}
                className={cn(
                  "block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors",
                  isActive(item.href) && "text-foreground font-semibold"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            {externalNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors opacity-80 hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
