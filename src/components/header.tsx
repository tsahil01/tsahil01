"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SiNextdotjs, SiPrisma, SiSolana, SiTypescript, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiDocker, SiPostgresql } from "react-icons/si";

export function Header() {
    const imake = ["websites", "apps", "backends", "frontends", "AI agents"]
    const skills =[{
        name: "Next.js",
        icon: <SiNextdotjs className="w-4 h-4" />
    }, {
        name: "React.js",
        icon: <SiReact className="w-4 h-4" />
    }, {
        name: "Express.js",
        icon: <SiExpress className="w-4 h-4" />
    }, {
        name: "Prisma",
        icon: <SiPrisma className="w-4 h-4" />
    }, {
        name: "Solana",
        icon: <SiSolana className="w-4 h-4" />
    }, {
        name: "Docker",
        icon: <SiDocker className="w-4 h-4" />
    }, {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-4 h-4" />
    }, {
        name: "Node.js",
        icon: <SiNodedotjs className="w-4 h-4" />
    }, {
        name: "Typescript",
        icon: <SiTypescript className="w-4 h-4" />
    }, {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-4 h-4" />
    }]
    const social = [{
        name: "github",
        link: "https://github.com/tsahil01"
    }, {
        name: "x",
        link: "https://x.com/sahiltwtz"
    }, {
        name: "linkedin",
        link: "https://www.linkedin.com/in/sahil-tiwaskar/"
    }, {
        name: "telegram",
        link: "https://t.me/SahilTiwaskar"
    }, {
        name: "email",
        link: "mailto:sahiltiwaskar2003@gmail.com"
    }]
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imake.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

        return <>
        <div className="flex flex-col mt-5">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-3 my-auto overflow-hidden">
                    <div className='flex flex-row gap-3'>
                        <div className="flex flex-col my-auto">
                            <Image src="/profile.jpeg" alt="Sahil Tiwaskar" width={100} height={100} className="rounded-sm w-10" />
                        </div>

                        <div className='flex flex-col my-auto'>
                            <h1 className="text-lg md:text-xl font-semibold font-sans tracking-tight leading-tight">Sahil Tiwaskar</h1>
                            <p className="md:text-sm text-xs text-primary/40 font-sans">ps. i love dogs.</p>
                        </div>
                    </div>

                    <p className="text-sm text-foreground font-sans font-bold">
                        ship fast, break things.
                    </p>
                    <div className='flex flex-col gap-1 overflow-hidden'>
                        <div className='flex flex-row items-center gap-1.5 text-sm'>
                            <span className="text-primary/70 font-sans">I can make</span>
                            <span className="relative inline-flex items-center overflow-hidden h-5">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={currentIndex}
                                        initial={{ y: 14, opacity: 0, filter: 'blur(4px)' }}
                                        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                        exit={{ y: -14, opacity: 0, filter: 'blur(4px)' }}
                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                        className="font-mono font-medium text-foreground whitespace-nowrap"
                                    >
                                        {imake[currentIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </div>
                        <p className='text-sm text-primary/70 font-sans'>
                            a random 23 year old guy from India, fixing bugs I created.
                        </p>
                        <p className='text-sm text-primary/70 font-sans'>
                            open to startups, big tech, and fixing my mom's wifi.
                        </p>
                    </div>

                    <div className='flex flex-row items-center justify-start gap-x-2.5 gap-y-1 flex-wrap font-mono text-[13px]'>
                        {social.map((item, index) => (
                            <div key={index} className='flex flex-row items-center gap-x-2.5'>
                                {index > 0 && <span className='text-primary/20 select-none text-xs'>/</span>}
                                <Link
                                    href={item.link}
                                    target='blank'
                                    className='group relative text-primary/50 hover:text-primary transition-colors duration-200'
                                >
                                    {item.name}
                                    <span className='absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full' />
                                </Link>
                            </div>
                        ))}

                    </div>

                    <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                        <div className="flex w-max animate-marquee">
                            {[0, 1].map((copy) => (
                                <div
                                    key={copy}
                                    aria-hidden={copy === 1}
                                    className="flex shrink-0 gap-2 pr-2"
                                >
                                    {skills.map((skill, index) => (
                                        <span
                                            key={`${copy}-${index}`}
                                            className="flex items-center gap-1.5 whitespace-nowrap rounded-md border border-border/40 bg-muted/50 px-2.5 py-1 text-xs font-mono text-muted-foreground transition-colors duration-200 hover:border-primary/30 hover:text-foreground"
                                        >
                                            {skill.icon} {skill.name}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    </>
}