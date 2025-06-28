"use client"
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SiNextdotjs, SiPrisma, SiSolana, SiTypescript, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiDocker, SiPostgresql, SiGithub, SiLinkedin, SiX, SiGmail, SiTelegram } from "react-icons/si";

export function Header() {
    const imake = ["websites.", "apps.", "backend.", "frontend."]
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
        name: "Github",
        icon: <SiGithub />,
        link: "https://github.com/tsahil01"
    }, {
        name: "Gmail",
        icon: <SiGmail />,
        link: "mailto:sahiltiwaskar2003@gmail.com"
    }, {
        name: "X",
        icon: <SiX />,
        link: "https://x.com/sahiltwtz"
    }, {
        name: "LinkedIn",
        icon: <SiLinkedin />,
        link: "https://www.linkedin.com/in/sahil-tiwaskar/"
    }, {
        name: "Telegram",
        icon: <SiTelegram />,
        link: "https://t.me/SahilTiwaskar"
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
                            <Image src="/profile.jpg" alt="Sahil Tiwaskar" width={100} height={100} className="rounded-sm w-10" />
                        </div>

                        <div className='flex flex-col my-auto'>
                            <h1 className="md:text-xl font-semibold font-sans">Sahil Tiwaskar</h1>
                            <p className="md:text-sm text-xs text-primary/40 font-sans hover:underline hover:cursor-pointer" onClick={() => {
                                window.open('https://github.com/tsahil01', '_blank')
                            }}>@tsahil01</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className="text-sm text-white font-sans font-bold">
                            Ship fast, break things.
                        </p>

                    </div>
                    <div className='flex flex-col gap-1 overflow-hidden'>
                        <div className='flex flex-row gap-1'>
                            <p className="text-sm text-primary/70 font-sans">I can make </p>
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={currentIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-sm text-primary/70 font-sans"
                                >
                                    {imake[currentIndex]}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                        <p className='text-sm text-primary/70 font-sans'>
                            A random 22 year old guy from India, fixing bugs I created.
                        </p>
                        <p className='text-sm text-primary/70 font-sans'>
                            Open to startups, big tech, and fixing my mom's Wi-Fi.
                        </p>
                        <div className="flex flex-row gap-2 mt-2 overflow-hidden w-full">
                            <motion.div 
                                className="flex gap-2 whitespace-nowrap scroll-smooth"
                                animate={{ x: [0, -800] }}
                                transition={{ 
                                    duration: 30, 
                                    repeat: Infinity, 
                                    ease: "linear",
                                    repeatType: "loop"
                                }}
                            >
                                {skills.map((skill, index) => (
                                    <span key={index} className="flex items-center gap-1 bg-[#232323] rounded-md px-2 py-1 text-xs text-white/90 font-bold flex-shrink-0">
                                        {skill.icon} {skill.name}
                                    </span>
                                ))}
                                {skills.map((skill, index) => (
                                    <span key={`duplicate-${index}`} className="flex items-center gap-1 bg-[#232323] rounded-md px-2 py-1 text-xs text-white/90 font-bold flex-shrink-0">
                                        {skill.icon} {skill.name}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>


                    <div className='flex flex-row justify-start gap-1 flex-wrap'>
                        {social.map((item, index) => (
                            <Link href={item.link} target='blank' key={index}>
                                <Button variant={'outline'} size={'sm'} className='hover:bg-primary/10 hover:text-primary'>
                                    {item.icon}
                                </Button>
                            </Link>
                        ))}

                    </div>
                </div>

            </div>
        </div >
    </>
}