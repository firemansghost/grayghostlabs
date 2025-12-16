import Link from "next/link";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} GrayGhost Labs. Built by a stubborn firefighter with
            too many models.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="/coming-soon"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href={EXTERNAL_LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              X / Twitter
            </Link>
            <Link
              href={EXTERNAL_LINKS.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Newsletter
            </Link>
            <Link
              href={siteConfig.links.email}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

