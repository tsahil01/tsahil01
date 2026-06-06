import { AllProjects } from "@/components/allProjects";
import { Header } from "@/components/header";

export const metadata = {
    title: "Projects",
    description: "Things I've built - web apps, tools, and experiments.",
};

export default function Page() {
    return (
        <>
        <div className="flex flex-col my-4 max-w-3xl mx-auto p-5 gap-7">
            <Header />
        </div>
        <div className="max-w-3xl mx-auto p-5">
            <AllProjects />
        </div>
        </>
    )
}