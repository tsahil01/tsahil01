import { Project } from "@/lib/types";
import { ProjectCard } from "./projectCard";
import { ChevronsDown } from "lucide-react";
import Link from "next/link";

let ProjectsData: Project[] = [
    {
        title: "BuildX Website",
        description: "A platform for building and deploying your projects.",
        github: "https://github.com/tsahil01/buildx-website",
        website: "https://www.buildx.website/",
        technologies: ["Next.js", "Typescript", "Express.js", "Prisma", "Reverse Proxy", "Cron"],
        highlight: true,
    },
    {
        title: "SOL GCP VM",
        description: "Rent Cloud VMs with Solana on Telegram",
        github: "https://github.com/tsahil01/sol-vm",
        website: "https://solvmbot.vercel.app/",
        technologies: ["Solana", "GCP", "Typescript", "Prisma", "Telegram-Bot-API"],
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

]

export function Projects() {
    return <>
        <div className="flex my-3 flex-col gap-6">
            <div className="flex items-center gap-3">
                <h2 className="text-lg text-white/70 font-semibold">my builds</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
                <Link href="/projects" className="flex items-center my-auto text-xs text-primary/70 font-sans hover:underline">
                    more
                    <ChevronsDown className="w-4 h-4" />
                </Link>
            </div>
            <div className="flex flex-col gap-3">
                {ProjectsData.map((project, index) => {
                    return <ProjectCard key={index} {...project} highlight={project.highlight} />
                })}
            </div>
        </div>
    </>
}
