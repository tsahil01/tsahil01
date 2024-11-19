import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Header() {
    return <>
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">

                <div className="flex flex-col my-auto">
                    <h1 className="text-4xl font-semibold">Sahil Tiwaskar</h1>
                    <p className="text-base text-primary/40">FullStack & Web3 Developer</p>
                </div>

                <div className="flex flex-col">
                    <Image src="/profile.jpg" alt="Sahil Tiwaskar" width={100} height={100} className="rounded-full w-32" />
                </div>

            </div>

            <div className='flex flex-row justify-start gap-3'>
                <Link href="https://github.com/tsahil01" target='blank'>
                    <Button variant={'outline'}>
                        <Github className='w-9' />
                    </Button>
                </Link>
                <Link href="https://x.com/t__sahil" target='blank'>
                    <Button variant={'outline'}>
                        <Twitter className='w-9' />
                    </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/sahil-tiwaskar/" target='blank'>
                    <Button variant={'outline'}>
                        <Linkedin className='w-9' />
                    </Button>
                </Link>

            </div>

        </div>
    </>
}