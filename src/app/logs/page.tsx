import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { contributions, allPrs } from "@/lib/contributions";

export const metadata = {
    title: "Open Source",
    description: "Merged pull requests and open-source contributions.",
};

function FilterChip({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className={`rounded-md border px-2.5 py-1 transition-colors ${
                active
                    ? "border-primary/40 bg-primary/10 text-foreground"
                    : "border-border/40 bg-muted/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
        >
            {children}
        </Link>
    );
}

export default async function Page({ searchParams }: { searchParams: Promise<{ repo?: string }> }) {
    const { repo } = await searchParams;
    const active = contributions.find((c) => c.id === repo);
    const prs = active ? allPrs.filter((p) => p.contribution.id === active.id) : allPrs;

    return (
        <>
            <div className="flex flex-col my-4 max-w-3xl mx-auto p-5 gap-7">
                <Header />
            </div>

            <div className="max-w-3xl mx-auto p-5 w-full flex flex-col gap-5">
                <div className="flex items-center gap-3">
                    <h2 className="text-sm text-muted-foreground font-mono lowercase tracking-tight">
                        {active ? `${active.company} / ${active.repo}` : "all prs"}
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
                    <span className="text-xs font-mono text-primary/40">{prs.length} merged</span>
                </div>

                {active?.bounty && (
                    <p className="text-xs font-mono text-muted-foreground">
                        bounty: <span className="text-foreground">{active.bounty}</span>
                    </p>
                )}

                <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <FilterChip href="/logs" active={!active}>all</FilterChip>
                    {contributions.map((c) => (
                        <FilterChip key={c.id} href={`/logs?repo=${c.id}`} active={active?.id === c.id}>
                            {c.company} / {c.repo}
                        </FilterChip>
                    ))}
                </div>

                <div className="flex flex-col">
                    {prs.map((pr) => (
                        <Link
                            key={`${pr.contribution.id}-${pr.number}`}
                            href={pr.url}
                            target="_blank"
                            className="group flex items-center gap-3 py-2.5 border-b border-border/40 last:border-b-0"
                        >
                            <span className="font-mono text-xs text-primary/30 w-12 shrink-0">#{pr.number}</span>
                            <span className="text-sm text-foreground/90 group-hover:text-primary transition-colors truncate flex-1">
                                {pr.title}
                            </span>
                            {!active && (
                                <span className="hidden sm:inline text-xs font-mono text-muted-foreground shrink-0">
                                    {pr.contribution.repo}
                                </span>
                            )}
                            <span className="text-xs font-mono text-primary/30 shrink-0 w-[5.5rem] text-right hidden xs:inline sm:inline">
                                {pr.date}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-primary/30 group-hover:text-primary transition-colors shrink-0" />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
