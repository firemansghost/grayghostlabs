import Link from "next/link";
import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EXTERNAL_LINKS } from "@/lib/constants";
import {
  COMING_SOON,
  COMING_SOON_FAMILIES,
  getComingSoonByFamily,
} from "@/lib/comingSoon";

export function ComingSoonList() {
  return (
    <>
      <p className="text-sm text-muted-foreground">
        {COMING_SOON.length} unfinished ideas, grouped by the problems they came from.
      </p>

      <div className="space-y-12">
        {COMING_SOON_FAMILIES.map((family) => {
          const items = getComingSoonByFamily(family.id);
          return (
            <section key={family.id} className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">{family.title}</h2>
                <p className="text-sm text-muted-foreground">{family.descriptor}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {items.map((item) => (
                  <Card key={item.title}>
                    <CardHeader>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t border-border">
        <Button asChild size="lg">
          <Link
            href={EXTERNAL_LINKS.substack}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read TWIMM on Substack
          </Link>
        </Button>
        <Link
          href={EXTERNAL_LINKS.x}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
        >
          Follow @GrayGhost on X
        </Link>
      </div>

      <div className="text-center pt-4">
        <AppLink
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
        >
          <span aria-hidden="true" className="mr-1">
            ←
          </span>
          Back to GrayGhost Labs
        </AppLink>
      </div>
    </>
  );
}
