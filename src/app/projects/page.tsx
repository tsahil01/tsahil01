import { AllProjects } from "@/components/allProjects";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";

export const metadata = {
    title: "Projects",
    description: "Things I've built - web apps, tools, and experiments.",
};

export default function Page() {
    return (
        <>
        <div className="flex flex-col my-4 max-w-3xl mx-auto p-5 gap-7">
            <Reveal delay={0}><Header /></Reveal>
        </div>
        <div className="max-w-3xl mx-auto p-5">
            <Reveal delay={0.12}><AllProjects /></Reveal>
        </div>
        </>
    )
}