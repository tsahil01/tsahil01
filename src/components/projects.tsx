import { Code, CodeSquare, ExternalLink, Github, Link2, Link2Icon, Linkedin } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Project {
    title: string;
    description: string;
    github: string;
    website: string;
    technologies: string[];
}

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

function ProjectCard({ title, description, github, website, technologies }: Project) {
    return <Card>
        <CardHeader>
            <div className="flex flex-row gap-1 justify-between">
                <h3 className="flex flex-col font-bold my-auto">{title}</h3>
                <div className='flex flex-row justify-start gap-2'>
                    <Link href={github} target='blank'>
                        <Button variant={'outline'} size={'sm'}>
                            <Github className='w-9' />
                        </Button>
                    </Link>
                    <Link href={website} target='blank'>
                        <Button variant={'outline'} size={'sm'}>
                            <ExternalLink className='w-9' />
                        </Button>
                    </Link>
                </div>
            </div>
        </CardHeader>

        <CardContent>
            <CardDescription>
                {description}
            </CardDescription>
        </CardContent>

        <CardFooter>
            <div className='flex flex-row gap-1'>
                {technologies.map((tech, i) => <Badge variant={'secondary'} key={i}>{tech}</Badge>)}
            </div>
        </CardFooter>
    </Card>
}