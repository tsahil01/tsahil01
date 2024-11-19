import { ProjectCard } from "./projectCard";

export function Projects() {
    return <>
        <div className="flex my-3 flex-col gap-2">
            <h2 className="font-semibold text-2xl">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ProjectCard
                    title="Portfolio"
                    description="My personal portfolio built with React and TailwindCSS."
                    github=""
                    website=""
                    technologies={["React", "Tailwind", "Next.js"]}
                />
            </div>
        </div>
    </>
}
