import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Project } from "@/lib/types";

export function ProjectCard({ title, description, github, website, technologies }: Project) {
    return <Card className="bg-primary/5">
        <CardHeader>
            <div className="flex flex-row gap-1 justify-between flex-wrap">
                <h3 className="flex flex-col font-bold my-auto">{title}</h3>
                <div className='flex flex-row justify-start gap-2 flex-wrap'>
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
            <CardDescription className="italic">
                {description}
            </CardDescription>
        </CardContent>

        <CardFooter>
            <div className='flex flex-row gap-2 flex-wrap'>
                {technologies.map((tech, i) => <Badge className="bg-primary/5 rounded-md italic" variant={'secondary'} key={i}>{tech}</Badge>)}
            </div>
        </CardFooter>
    </Card>
}