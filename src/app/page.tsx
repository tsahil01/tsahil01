import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (

    <div className="relative z-20">
      <div className="flex flex-col max-w-2xl mx-auto p-5 gap-7">
        <Header />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

