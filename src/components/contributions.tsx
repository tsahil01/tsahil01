import Link from "next/link";
import { ArrowUpRight, GitPullRequest } from "lucide-react";
import { Card } from "@/components/ui/card";
import { contributions } from "@/lib/contributions";

export function Contributions() {
    return (
        <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
                <h2 className="text-sm text-muted-foreground font-mono lowercase tracking-tight">open source</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
                <Link href="/logs" className="flex items-center gap-1 my-auto text-xs text-primary/60 font-mono hover:text-primary transition-colors">
                    all prs
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
            </div>

            <div className="flex flex-col gap-3">
                {contributions.map((c) => (
                    <Link key={c.id} href={`/logs?repo=${c.id}`} className="group block">
                        <Card className="border-border/50 bg-primary/[0.03] p-4 transition-colors group-hover:border-primary/30">
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex flex-col gap-1 min-w-0">
                                    <h3 className="text-sm font-mono font-medium text-foreground truncate">
                                        {c.company}
                                        <span className="text-primary/30"> / </span>
                                        <span className="text-muted-foreground">{c.repo}</span>
                                    </h3>
                                    <p className="text-xs text-muted-foreground font-sans leading-relaxed line-clamp-2">
                                        {c.description}
                                    </p>
                                </div>
                                <div className="flex flex-row items-center gap-2 flex-shrink-0">
                                    {c.bounty && (
                                        <span className="text-xs font-mono font-medium text-foreground bg-primary/10 border border-border/60 px-2 py-0.5 rounded">
                                            {c.bounty}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                                        <GitPullRequest className="w-3.5 h-3.5" />
                                        {c.prs.length}
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
