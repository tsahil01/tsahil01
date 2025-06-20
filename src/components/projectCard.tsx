import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";
import { Project } from "@/lib/types";

export function ProjectCard({ title, description, github, website, technologies, highlight }: Project) {
    return <Card className={`bg-primary/5 ${highlight ? "border-primary/20" : ""}`} key={title}>
        <CardHeader className="pb-3">
            <div className="flex flex-row gap-1 justify-between flex-wrap">
                <h3 className="text-sm font-semibold text-white/70 my-auto">{title}</h3>
                <div className='flex flex-row justify-start flex-wrap gap-3 text-primary/70'>
                    <Link href={github} target='blank' className="hover:text-primary transition-colors">
                        <Github className='w-4 h-4' />
                    </Link>
                    <Link href={website} target='blank' className="hover:text-primary transition-colors">
                        <ExternalLink className='w-4 h-4' />
                    </Link>
                </div>
            </div>
        </CardHeader>

        <CardContent className="text-sm ">
            <CardDescription className="italic">
                {description}
            </CardDescription>
        </CardContent>

        <CardFooter>
            <div className='flex flex-row gap-2 flex-wrap'>
                {technologies.map((tech, i) => {
                    return <span className="flex items-center gap-1 bg-[#232323] rounded-md px-2 py-1 text-xs text-white/70 font-bold" key={i}>
                        {tech}
                    </span>
                })}
            </div>
        </CardFooter>
    </Card>
}