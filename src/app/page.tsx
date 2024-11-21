import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Noise } from "@/components/noise";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (

    <div className="relative z-20">
      <div className="flex flex-col max-w-3xl mx-auto p-5 gap-7">
        <Header />
        <About />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

