export function Experience() {
    const experience = [
        {
            company: "TeamOB",
            role: "Full Stack & React Native Dev",
            duration: "Jan 2025 – Present",
            location: "Nagpur, India"
        },
    ]
    return <>
        <div className="flex my-3 flex-col gap-1">
            {experience.map((exp, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg py-4">
                    <div className="flex items-center gap-4">
                        {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center">
                            <span className="text-white text-xl font-bold">T</span>
                        </div> */}
                        <div className="flex flex-col">
                            <span className="text-base font-semibold text-white/70">{exp.company}</span>
                            <span className="text-xs text-gray-400">{exp.role}</span>
                        </div>
                    </div>
                <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-300">{exp.location}</span>
                        <span className="text-xs text-gray-500 mt-1">{exp.duration}</span>
                    </div>
                </div>
            ))}
        </div>
    </>
}
