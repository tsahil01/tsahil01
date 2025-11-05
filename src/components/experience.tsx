import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';

export function Experience() {
    const experience = [
        {
          company: "Dodo Payments",
          role: "AI & TypeScript Developer",
          duration: "Aug '25 - Oct '25",
          location: "Bengaluru, India",
          description: `
- Core contributor to the [BillingSDK](https://billingsdk.com/) (#4 on Product Hunt)
- Built **[Sentra](https://dodopayments.com/sentra)** → AI Agent that automates billing, payment workflows (#2 on Product Hunt)
- Worked on [Index by Dodo Payments](https://index.dodopayments.com/) - The definitive index of startups, indie hackers, and SaaS tools
          `,
          logo: "/dodo.jpg"
        },
        {
          company: "TeamOB",
          role: "Full Stack & React Native Developer",
          duration: "Jan '25 - June '25",
          location: "Nagpur, India",
          description: `
- Developed features for the TeamOB mobile app using React Native
- Built a web-based Kanban productivity tool and an AI-powered database chat system
- Worked across both UI and backend to improve performance and user workflows
          `,
        },
      ]
      
      
    return (
        <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
                <h2 className="text-base sm:text-lg text-muted-foreground font-semibold">cookin' here</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-muted to-transparent"></div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
                {experience.map((exp, index) => (
                    <Card key={index} className="group relative overflow-hidden border-border/50 bg-primary/5 transition-all duration-300">
                        <CardHeader className="pb-3 sm:pb-4">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center flex-shrink-0 overflow-hidden">
                                        {exp.logo ? (
                                            <img 
                                                src={exp.logo} 
                                                alt={`${exp.company} logo`}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-foreground text-lg sm:text-xl font-bold">{exp.company.charAt(0)}</span>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1 sm:gap-2 min-w-0 flex-1">
                                        <CardTitle className="text-base sm:text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                                            {exp.company}
                                        </CardTitle>
                                        <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                                            {exp.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start sm:items-end gap-1 sm:gap-2">
                                    <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded">
                                        {exp.duration}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        {exp.location}
                                    </span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            {exp.description && (
                                <div className="text-sm text-muted-foreground leading-relaxed prose prose-sm dark:prose-invert max-w-none prose-ul:my-2 prose-li:my-1 prose-p:my-0 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:list-disc prose-ul:ml-4">
                                    <ReactMarkdown>{exp.description.trim()}</ReactMarkdown>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
