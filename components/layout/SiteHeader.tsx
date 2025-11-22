"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">{SITE_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Products
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 rounded-md border border-border bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <Link
                  href="/ghostgauge"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                >
                  GhostGauge
                </Link>
                <Link
                  href="/sports-lab"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                >
                  Sports Lab
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <div className="text-sm font-medium text-foreground/60 mb-2">
                Products
              </div>
              <Link
                href="/ghostgauge"
                className="block py-2 pl-4 text-sm text-foreground/80 hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                GhostGauge
              </Link>
              <Link
                href="/sports-lab"
                className="block py-2 pl-4 text-sm text-foreground/80 hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sports Lab
              </Link>
            </div>
            <Link
              href="/about"
              className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

