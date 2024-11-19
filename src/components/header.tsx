import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { Github, Linkedin, MailPlusIcon, Twitter } from 'lucide-react';

export function Header() {
    return <>
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">

                <div className="flex flex-col gap-3 my-auto">

                    <div className='flex flex-col'>
                        <h1 className="md:text-4xl text-3xl font-semibold">Sahil Tiwaskar</h1>
                        <p className="md:text-base text-sm text-primary/40 font-sans">FullStack & Web3 Developer</p>
                    </div>

                    <div className='flex flex-row justify-start gap-1 flex-wrap'>
                        <Link href="mailto:sahiltiwaskar2003@gmail.com" target='blank'>
                            <Button variant={'outline'} size={'sm'}>
                                <MailPlusIcon className='w-9' />
                            </Button>
                        </Link>
                        <Link href="https://github.com/tsahil01" target='blank'>
                            <Button variant={'outline'} size={'sm'}>
                                <Github className='w-9' />
                            </Button>
                        </Link>
                        <Link href="https://x.com/t__sahil" target='blank'>
                            <Button variant={'outline'} size={'sm'}>
                                <Twitter className='w-9' />
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sahil-tiwaskar/" target='blank'>
                            <Button variant={'outline'} size={'sm'}>
                                <Linkedin className='w-9' />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col">
                    <Image src="/profile.jpg" alt="Sahil Tiwaskar" width={100} height={100} className="rounded-3xl w-32" />
                </div>

            </div>



        </div>
    </>
}