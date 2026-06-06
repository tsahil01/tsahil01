import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';

// Build a 2-letter monogram from a company name (e.g. "Team OB" -> "TO").
function getInitials(name: string) {
    return name
        .split(/\s+/)
        .map((word) => word[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
}

export function Experience() {
    const experience = [
        {
          company: "Dodo Payments",
          role: "Frontend Engineer",
          duration: "Aug '25 - Present",
          location: "Bengaluru, India",
          description: `
- Core contributor to the [BillingSDK](https://billingsdk.com/) (#4 on Product Hunt)
- Built **[Sentra](https://dodopayments.com/sentra)** → AI Agent that automates billing, payment workflows (#2 on Product Hunt)
- Worked on [Index by Dodo Payments](https://index.dodopayments.com/) - The definitive index of startups, indie hackers, and SaaS tools
          `,
          logo: "/dodo.jpg"
        },
        {
          company: "Team OB",
          role: "Full Stack & React Native Engineer",
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
                <h2 className="text-sm text-muted-foreground font-mono lowercase tracking-tight">cookin' here</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
            </div>

            <div className="flex flex-col gap-3">
                {experience.map((exp, index) => (
                    <Card key={index} className="border-border/50 bg-primary/[0.03] p-4">
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3 min-w-0">
                                <div className="w-9 h-9 rounded-lg bg-primary/[0.04] border border-border/60 flex items-center justify-center flex-shrink-0 overflow-hidden">
                                    {exp.logo ? (
                                        <img
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-xs font-mono font-semibold tracking-tight text-primary/70">{getInitials(exp.company)}</span>
                                    )}
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <h3 className="text-sm font-mono font-medium text-foreground">
                                        {exp.company}
                                    </h3>
                                    <p className="text-xs text-muted-foreground font-sans">
                                        {exp.role}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                <span className="text-xs text-foreground bg-primary/10 border border-border/60 px-2 py-0.5 rounded font-mono whitespace-nowrap">
                                    {exp.duration}
                                </span>
                                <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                                    {exp.location}
                                </span>
                            </div>
                        </div>
                        {exp.description && (
                            <div className="mt-3 text-xs text-muted-foreground leading-relaxed prose prose-sm dark:prose-invert max-w-none prose-ul:my-0 prose-li:my-1 prose-li:marker:text-primary/40 prose-p:my-0 prose-a:text-primary prose-strong:text-foreground prose-ul:list-disc prose-ul:ml-4">
                                <ReactMarkdown>{exp.description.trim()}</ReactMarkdown>
                            </div>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
}
