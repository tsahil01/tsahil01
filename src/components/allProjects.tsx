import { Project } from "@/lib/types";
import { ProjectCard } from "./projectCard";

let ProjectsData: Project[] = [
    {
        title: "Up-Time Guard",
        description: "Keep track of your website's uptime, performance, and health with our powerful monitoring solution. Get instant alerts when things go wrong.",
        github: "https://github.com/tsahil01/uptime-guard",
        website: "https://uptimeguard.sahiltiwaskar.tech/",
        technologies: ["Next.js", "Typescript", "Express.js", "Prisma", "ShadCN", "Cron"]
    },
    {
        title: "AI Subtitler",
        description: "Create accurate subtitles for your videos in seconds. Powered by advanced AI and secured by Solana Blockchain",
        github: "https://github.com/tsahil01/ai-subtitles-generator",
        website: "https://transcribe.sahiltiwaskar.tech/",
        technologies: ["Solana", "Solana-Wallet-adapter", "Next.js", "Prisma"]
    },
    {
        title: "Pouch",
        description: "An open-source HD wallet generator for Sol and Eth. Also used as an adapter + token Management.",
        github: "https://github.com/tsahil01/web3-wallet",
        website: "https://web3pouch.vercel.app",
        technologies: ["Solana/web3.js", "Solana-Wallet-adapter", "Next.js", "Prisma","Typescript", "ShadCN", "ethers", "bip39", "bs58"]
    },
    {
        title: "Quick Share",
        description: "A unique file sharing application where users can upload files which are stored for 24 hrs on the server, accessible via /anything",
        github: "https://github.com/tsahil01/fileShare",
        website: "https://ezfiles.vercel.app",
        technologies: ["Next.js", "Typescript", "ShadCN", "Prisma", "Uploadthing"]
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
            <h2 className="font-semibold text-2xl">Explore Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {ProjectsData.map((project, index) => {
                    return <ProjectCard key={index} {...project} />
                })}
            </div>
            
        </div>
    </>
}
