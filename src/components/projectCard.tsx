import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Card } from "./ui/card";
import Link from "next/link";
import { Project } from "@/lib/types";

export function ProjectCard({ title, description, github, website, technologies }: Project) {
    return (
        <Card className="border-border/50 bg-primary/[0.03] p-4" key={title}>
            <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1.5 min-w-0">
                    <h3 className="text-sm font-mono font-medium text-foreground flex items-center gap-1.5">
                        <span className="text-primary/30">/</span>
                        {title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                        {technologies.map((tech, i) => (
                            <span key={i} className="flex items-center gap-1 bg-muted/50 border border-border/40 rounded-md px-2 py-0.5 text-xs text-muted-foreground font-mono">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center gap-3 flex-shrink-0 text-primary/50">
                    <Link href={github} target="blank" aria-label={`${title} GitHub repository`} className="hover:text-primary transition-colors">
                        <SiGithub className="w-4 h-4" />
                    </Link>
                    {website && (
                        <Link href={website} target="blank" aria-label={`${title} live site`} className="hover:text-primary transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    )}
                </div>
            </div>
        </Card>
    );
}
