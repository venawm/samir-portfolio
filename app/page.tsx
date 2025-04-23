import About from "@/components/About";
import Game from "@/components/Game";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="px-8 md:px-0">
      <Hero />
      <About />
      <Services />
      <Game />
      <Work />
    </main>
  );
}
