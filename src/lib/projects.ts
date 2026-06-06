import { Project } from "@/lib/types";

// Single source of truth for projects.
// `featured` projects show on the homepage and keep their live website link.
// All others only appear on /projects and link to GitHub only.
export const projects: Project[] = [
    {
        title: "SOL GCP VM",
        description: "Rent Cloud VMs with Solana on Telegram",
        github: "https://github.com/tsahil01/sol-vm",
        website: "https://solvmbot.vercel.app/",
        technologies: ["Solana", "GCP", "Typescript", "Prisma", "Telegram-Bot-API"],
        featured: true,
    },
    {
        title: "Fit Track",
        description: "A web & mobile application which tracks human pose while performing various exercises",
        github: "https://github.com/tsahil01/pose-detection",
        website: "https://fit-track-theta.vercel.app",
        technologies: ["Computer Vision", "Media-Pipe", "Next.js", "Typescript", "ShadCN"],
        featured: true,
    },
    {
        title: "BuildX Website",
        description: "A platform for building and deploying your projects.",
        github: "https://github.com/tsahil01/buildx-website",
        technologies: ["Next.js", "Typescript", "Express.js", "Prisma", "Reverse Proxy", "Cron"],
    },
    {
        title: "Up-Time Guard",
        description: "Keep track of your website's uptime, performance, and health.",
        github: "https://github.com/tsahil01/uptime-guard",
        technologies: ["Next.js", "Typescript", "Express.js", "Prisma", "ShadCN", "Cron"],
    },
    {
        title: "AI Subtitler",
        description: "Create accurate subtitles for your videos in seconds.",
        github: "https://github.com/tsahil01/ai-subtitles-generator",
        technologies: ["Solana", "Solana-Wallet-adapter", "Next.js", "Prisma"],
    },
    {
        title: "Centralized LST",
        description: "Created my own LST on Solana which works on Devnet.",
        github: "https://github.com/tsahil01/Centralized-Liquid-Staking-Token",
        technologies: ["Sol.devnet", "Next.js", "Typescript", "ShadCN", "Prisma"],
    },
    {
        title: "Portfolio",
        description: "My personal portfolio website which is open-source and can be used by anyone.",
        github: "https://github.com/tsahil01/tsahil01",
        technologies: ["Next.js", "Typescript", "ShadCN"],
    },
];

export const featuredProjects = projects.filter((p) => p.featured);
