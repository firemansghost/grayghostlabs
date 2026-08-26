import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="container px-4 pt-8 pb-10 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16" style={{ contentVisibility: "auto" }}>
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">Built because I wanted the tools myself.</h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            GrayGhost Labs started as a digital junkyard for questions that
            wouldn&apos;t stay inside a spreadsheet. The rule is simple: build it
            for real use, show the receipts, admit uncertainty, and share it when
            it becomes useful.
          </p>
          <p>
            Built by a stubborn firefighter with an ex-IT past and too many models.
          </p>
        </div>
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <AppLink href="/about">Why GrayGhost Labs exists</AppLink>
        </Button>
      </div>
    </section>
  );
}
