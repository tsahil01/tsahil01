import { About } from "@/components/about";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col mt-4 max-w-3xl mx-auto p-5 gap-7">
      <Header />
      <About />
    </div>);
}
