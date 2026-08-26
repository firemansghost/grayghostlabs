import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";
import { getProjectsByCategory, type Project } from "@/lib/projects";

function consoleStatus(project: Project): string {
  if (project.status === "LIVE") return "LIVE";
  if (project.status === "ACTIVE_RESEARCH") return "ACTIVE RESEARCH";
  return "PREVIEW";
}

function ConsoleRow({
  name,
  status,
  cursor = false,
}: {
  name: string;
  status: string;
  cursor?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-2 min-w-0">
      <span className="text-primary shrink-0">▸</span>
      <span className="min-w-0 flex-1 flex items-baseline gap-1">
        <span className="shrink-0">{name}</span>
        <span
          className="flex-1 border-b border-dotted border-foreground/25 min-w-3 translate-y-[-0.35em]"
          aria-hidden="true"
        />
        <span className="shrink-0">
          {status}
          {cursor ? (
            <span className="text-muted-foreground motion-safe:animate-pulse">
              _
            </span>
          ) : null}
        </span>
      </span>
    </div>
  );
}

export function Hero() {
  const markets = getProjectsByCategory("markets");
  const sports = getProjectsByCategory("sports");

  return (
    <section className="container px-4 pt-10 pb-8 sm:pt-14 sm:pb-10 md:pt-24 md:pb-12">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            GrayGhost Labs
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Markets, models, and whatever breaks next.
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
            GrayGhost Labs is a one-person lab for tools that turn messy systems
            into something you can interrogate: Bitcoin risk, portfolio research,
            market structure, sports models, and experiments that started as
            questions I couldn&apos;t leave alone. No hype. No black-box
            certainty. Just data, receipts, and enough skepticism to keep the
            models honest.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <AppLink href="/markets">Explore Markets</AppLink>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <AppLink href="/sports-lab">Enter Sports Lab</AppLink>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <AppLink href="/coming-soon">View Roadmap</AppLink>
            </Button>
          </div>
        </div>

        <div className="glass-panel-subtle p-5 sm:p-6 font-mono text-xs sm:text-sm min-w-0">
          <div className="space-y-4 text-foreground/90">
            <div className="text-accent tracking-wide">
              GRAYGHOST LABS / CURRENT SYSTEMS
            </div>

            <div className="space-y-1">
              <div className="text-muted-foreground">MARKETS</div>
              {markets.map((project) => (
                <ConsoleRow
                  key={project.id}
                  name={project.name}
                  status={consoleStatus(project)}
                />
              ))}
            </div>

            <div className="space-y-1">
              <div className="text-muted-foreground">SPORTS</div>
              {sports.map((project) => (
                <ConsoleRow
                  key={project.id}
                  name={project.name}
                  status={consoleStatus(project)}
                />
              ))}
            </div>

            <div className="space-y-1">
              <div className="text-muted-foreground">LAB</div>
              <ConsoleRow name="GhostFlow" status="PREVIEW" />
              <ConsoleRow name="More bad ideas" status="QUEUED" cursor />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
