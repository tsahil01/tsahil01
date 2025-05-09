import { Project } from "@/lib/types";
import { ProjectCard } from "./projectCard";

let ProjectsData: Project[] = [

    {
        title: "BuildX Website",
        description: "A platform for building and deploying your projects.",
        github: "https://github.com/tsahil01/buildx-website",
        website: "https://www.buildx.website/",
        technologies: ["Next.js", "Typescript", "Express.js", "Prisma", "Reverse Proxy", "Cron"]
    },
    {
        title: "SOL GCP VM",
        description: "Rent Cloud VMs with Solana on Telegram",
        github: "https://github.com/tsahil01/sol-vm",
        website: "https://solvmbot.vercel.app/",
        technologies: ["Solana", "GCP", "Typescript", "Prisma", "Telegram-Bot-API"]
    },
    {
        title: "Up-Time Guard",
        description: "Keep track of your website's uptime, performance, and health.",
        github: "https://github.com/tsahil01/uptime-guard",
        website: "https://uptime.buildx.website/",
        technologies: ["Next.js", "Typescript", "Express.js", "Prisma", "ShadCN", "Cron"]
    },
    {
        title: "AI Subtitler",
        description: "Create accurate subtitles for your videos in seconds.",
        github: "https://github.com/tsahil01/ai-subtitles-generator",
        website: "https://transcribe.sahiltiwaskar.tech/",
        technologies: ["Solana", "Solana-Wallet-adapter", "Next.js", "Prisma"]
    },
    {
        title: "Centralized LST",
        description: "Created my own LST on Solana which works on Devnet.",
        github: "https://github.com/tsahil01/Centralized-Liquid-Staking-Token",
        website: "https://solanalst.sahiltiwaskar.tech/",
        technologies: ["Sol.devnet", "Next.js", "Typescript", "ShadCN", "Prisma"]
    },

    {
        title: "Portfolio",
        description: "My personal portfolio website which is open-source and can be used by anyone.",
        github: "https://github.com/tsahil01/tsahil01",
        website: "https://sahiltiwaskar.tech",
        technologies: ["Next.js", "Typescript", "ShadCN"]
    },
    {
        title: "Fit Track",
        description: "An web & mobile application which tracks humans pose while performing various exercises",
        github: "https://github.com/tsahil01/pose-detection",
        website: "https://fit-track-theta.vercel.app",
        technologies: ["Computer Vision", "Media-Pipe", "Next.js", "Typescript", "ShadCN"]
    },

]

export function AllProjects() {
    return <>
        <div className="flex my-3 flex-col gap-2">
            <h2 className="text-lg text-white/70 font-semibold">Explore Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ProjectsData.map((project, index) => {
                    return <ProjectCard key={index} {...project} />
                })}
            </div>

        </div>
    </>
}
