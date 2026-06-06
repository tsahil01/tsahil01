import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export function Achievements() {
    const achievements = [
        {
            title: "Superteam Solana Hackathon",
            organization: "100x Devs",
            link: "https://earn.superteam.fun/listing/100xdevs-solana-mini-hackathon-lfg/",
            projectLink: "https://solvmbot.vercel.app/",
            prize: "550 USDC",
            experience: "First place. Built a bot to rent Solana VMs on Telegram using web3.js, GCP, a Redis store for payment status, and the Telegram Bot API.",
            date: "May 2025",
            highlight: true,
        },
    ];

    return (
        <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
                <h2 className="text-sm text-muted-foreground font-mono lowercase tracking-tight">great experiences</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
            </div>

            <div className="flex flex-col gap-3">
                {achievements.map((a, index) => (
                    <Card key={index} className="border-border/50 bg-primary/[0.03] p-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                            <div className="flex flex-col gap-1.5 min-w-0">
                                <h3 className="text-sm font-mono font-medium text-foreground">
                                    <Link href={a.link} target="_blank" className="hover:text-primary transition-colors break-words">
                                        {a.organization}
                                        <span className="text-primary/30"> / </span>
                                        <span className="text-muted-foreground">{a.title}</span>
                                        <ArrowUpRight className="inline w-3 h-3 ml-0.5 -translate-y-px text-primary/40" />
                                    </Link>
                                </h3>
                                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                                    {a.experience}
                                </p>
                                {a.projectLink && (
                                    <Link href={a.projectLink} target="_blank" className="mt-0.5 inline-flex w-fit items-center gap-1 text-xs font-mono text-primary/50 hover:text-primary transition-colors">
                                        view project
                                        <ArrowUpRight className="w-3 h-3" />
                                    </Link>
                                )}
                            </div>
                            <div className="flex flex-row items-center gap-2 flex-shrink-0">
                                {a.prize && (
                                    <span className="text-xs font-mono font-medium text-foreground bg-primary/10 border border-border/60 px-2 py-0.5 rounded">
                                        {a.prize}
                                    </span>
                                )}
                                <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                                    {a.date}
                                </span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
