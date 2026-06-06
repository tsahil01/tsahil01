import { ProjectCard } from "./projectCard";
import { projects } from "@/lib/projects";

export function AllProjects() {
    return <>
        <div className="flex my-3 flex-col gap-2">
            <h2 className="text-sm text-muted-foreground font-mono lowercase tracking-tight">explore projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />
                })}
            </div>

        </div>
    </>
}
