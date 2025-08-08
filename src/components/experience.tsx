import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Experience() {
    const experience = [{
        company: "Dodo Payments",
        role: "Frontend/ Typescript Developer",
        duration: "Aug '25 - Present",
        location: "Bengaluru, India",
        description: "Working as a Frontend/Typescript Developer, primarily using React, Next, and Typescript. ",
        logo: "/dodo.jpg"
    },
        {
            company: "TeamOB",
            role: "Full Stack & React Native Dev",
            duration: "Jan '25 - June '25",
            location: "Nagpur, India",
            description: "Worked as a Full Stack and React Native Developer, primarily using React and Node.js. Contributed to three main projects: the TeamOB mobile app, a web-based Kanban board, and an AI-powered database chat tool",
        },
    ]
    
    return (
        <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
                <h2 className="text-base sm:text-lg text-white/70 font-semibold">cookin' here</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
                {experience.map((exp, index) => (
                    <Card key={index} className="group relative overflow-hidden border-gray-800/50 bg-primary/5 transition-all duration-300 hover:border-gray-700/70 hover:bg-primary/10 hover:shadow-lg hover:shadow-gray-900/20">
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
                                            <span className="text-white text-lg sm:text-xl font-bold">{exp.company.charAt(0)}</span>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1 sm:gap-2 min-w-0 flex-1">
                                        <CardTitle className="text-base sm:text-lg font-semibold text-white/70 group-hover:text-white/90 transition-colors">
                                            {exp.company}
                                        </CardTitle>
                                        <p className="text-sm text-gray-300 leading-relaxed font-sans">
                                            {exp.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start sm:items-end gap-1 sm:gap-2">
                                    <span className="text-xs text-white/70 bg-primary/10 px-2 py-1 rounded">
                                        {exp.duration}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {exp.location}
                                    </span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <p className="text-sm text-gray-300 leading-relaxed">
                                {exp.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
