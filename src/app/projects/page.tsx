import { AllProjects } from "@/components/allProjects";
import { Header } from "@/components/header";

export default function Page() {
    return (
        <>
        <div className="flex flex-col my-4 max-w-3xl mx-auto p-5 gap-7 border-b">
            <Header />
        </div>
        <div className="max-w-6xl mx-auto p-5">
            <AllProjects />
        </div>
        </>
    )
}