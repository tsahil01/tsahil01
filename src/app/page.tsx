import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contributions } from "@/components/contributions";
import { Achievements } from "@/components/achievements";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (

    <div className="relative z-20">
      <div className="flex flex-col max-w-2xl mx-auto p-5 gap-7">
        <Reveal delay={0}><Header /></Reveal>
        <Reveal delay={0.08}><Experience /></Reveal>
        <Reveal delay={0.16}><Projects /></Reveal>
        <Reveal delay={0.24}><Contributions /></Reveal>
        <Reveal delay={0.32}><Achievements /></Reveal>
      </div>
    </div>
  );
}

