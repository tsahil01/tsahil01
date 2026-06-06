import { ProjectCard } from "./projectCard";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { featuredProjects } from "@/lib/projects";

export function Projects() {
    return <>
        <div className="flex my-3 flex-col gap-6">
            <div className="flex items-center gap-3">
                <h2 className="text-sm text-muted-foreground font-mono lowercase tracking-tight">my builds</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
                <Link href="/projects" className="flex items-center gap-1 my-auto text-xs text-primary/60 font-mono hover:text-primary transition-colors">
                    more
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
            </div>
            <div className="flex flex-col gap-3">
                {featuredProjects.map((project, index) => {
                    return <ProjectCard key={index} {...project} highlight={true} />
                })}
            </div>
        </div>
    </>
}
