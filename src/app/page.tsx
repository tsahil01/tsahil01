import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
    <div className="flex flex-col mt-4 max-w-3xl mx-auto p-5 gap-7 border-b">
      <Header />
      <About />
      <Projects />
      <Skills />
    </div>
      <Footer />
    </>
    );
}
