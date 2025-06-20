import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Achievements } from "@/components/achievements";

export default function Home() {
  return (

    <div className="relative z-20">
      <div className="flex flex-col max-w-2xl mx-auto p-5 gap-7">
        <Header />
        <Experience />
        <Projects />
        <Achievements />
      </div>
    </div>
  );
}

