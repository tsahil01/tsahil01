import { Badge } from "./ui/badge";

const skills = ['TypeScript', 'JavaScript', 'Next.js', 'React', 'Node.js',
    'Express', 'Postgres', 'Prisma', 'Solidity', 'Web3.js', 'TailwindCSS',
    '@solana/web3.js', 'Solana', 'C/C++',
    'AWS', 'Docker', 'Git', 'GitHub', 'GitLab'
];

export function Skills() {
    return <>
        <div className="flex my-3 flex-col gap-2">
            <h2 className="font-semibold text-2xl">Skills</h2>
            <p className="md:text-base/loose text-base/6 mb-2 font-sans italic md:text-justify text-center">
                I mostly know Full-Stack & Blockchain Development.
            </p>
            <div className="flex md:gap-3 gap-2 flex-wrap justify-evenly">
                {skills.map(skill => <Badge variant={'secondary'} key={skill}>{skill}</Badge>)}
            </div>
        </div>
    </>
}