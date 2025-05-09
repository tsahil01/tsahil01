"use client"
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { Github, Linkedin, MailPlusIcon, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Header() {
    const imake = ["websites.", "apps.", "backend.", "frontend."]
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
                <div className="flex flex-col gap-3 my-auto">
                    <div className='flex flex-row gap-3'>
                        <div className="flex flex-col my-auto">
                            <Image src="/profile.jpg" alt="Sahil Tiwaskar" width={100} height={100} className="rounded-2xl w-10" />
                        </div>

                        <div className='flex flex-col my-auto'>
                            <h1 className="md:text-xl font-semibold">Sahil</h1>
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
                    <div className='flex flex-col gap-1'>
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
                            Open to startups, big tech, and fixing my mom’s Wi-Fi.
                        </p>
                    </div>


                    <div className='flex flex-row justify-start gap-1 flex-wrap'>
                        <Link href="mailto:sahiltiwaskar2003@gmail.com" target='blank'>
                            <Button variant={'outline'} size={'sm'}>
                                <MailPlusIcon />
                            </Button>
                        </Link>
                        <Link href="https://github.com/tsahil01" target='blank'>
                            <Button variant={'outline'} size={'sm'}>
                                <Github />
                            </Button>
                        </Link>
                        <Link href="https://x.com/t__sahil" target='blank'>
                            <Button variant={'outline'} size={'sm'}>
                                <Twitter />
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sahil-tiwaskar/" target='blank'>
                            <Button variant={'outline'} size={'sm'}>
                                <Linkedin />
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>



        </div >
    </>
}