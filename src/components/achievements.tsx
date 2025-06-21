import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export function Achievements() {
    const achievements = [
        {
            title: "100x Devs Solana Hackathon",
            description: "First place in 100x Devs Solana Hackathon",
            link: "https://earn.superteam.fun/listing/100xdevs-solana-mini-hackathon-lfg/",
            organization: "100x Devs",
            icon: "/100xdevs.png",    
            organizationLink: "https://100xdevs.com/",
            projectLink: "https://solvmbot.vercel.app/",
            category: "hackathon",
            experience: "My first Solana hackathon. I built a bot that allows you to rent a Solana VM on Telegram. I used solana web3.js library to interact with the Solana blockchain, Google GCP to rent a VM, a Redis db to store payment status and telegram-bot-api to build the bot.",  
            date: "May 2025",
            highlight: true,
        },
    ];


    return (
        <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
                <h2 className="text-base sm:text-lg text-white/70 font-semibold">great experiences</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
                {achievements.map((achievement, index) => {
                    return (
                        <Card key={index} className={`group relative overflow-hidden border-gray-800/50 bg-primary/5 transition-all duration-300 hover:border-gray-700/70 hover:bg-primary/10 hover:shadow-lg hover:shadow-gray-900/20 ${achievement.highlight ? "border-primary/20" : ""}`}>
                            <CardHeader className="pb-3 sm:pb-4">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0">
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                                            <Image src={achievement.icon} alt={achievement.title} width={48} height={48} className='object-contain rounded-xl w-full h-full' />
                                        </div>
                                        <div className="flex flex-col gap-1 sm:gap-2 min-w-0 flex-1">
                                            <CardTitle className="text-base sm:text-lg font-semibold text-white/70 group-hover:text-white/90 transition-colors">
                                                <Link href={achievement.link} target="_blank" className="hover:text-primary transition-colors duration-200 flex items-center gap-1 w-fit">
                                                    {achievement.title}
                                                    <ExternalLink className="w-3 h-3" />
                                                </Link>
                                                <Link href={achievement.organizationLink} target="_blank" className="hover:text-primary transition-colors duration-200 flex items-center gap-1 w-fit text-xs text-gray-400">
                                                    {achievement.organization}
                                                    <ExternalLink className="w-3 h-3" />
                                                </Link>
                                            </CardTitle>
                                            <p className="text-sm text-gray-300 leading-relaxed font-sans">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-end gap-2">
                                        <span className="text-xs text-white/70 bg-primary/10 px-2 py-1 rounded">
                                            {achievement.date}
                                        </span>
                                        {achievement.projectLink && (
                                        <Link href={achievement.projectLink} target='blank' className="hover:text-primary transition-colors text-xs text-gray-400 my-auto">
                                        <ExternalLink className='w-4 h-4' />
                                    </Link>
                                    )}

                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {achievement.experience}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
} 