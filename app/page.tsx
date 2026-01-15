import About from "@/components/About";
import Hero from "@/components/Hero";
import WorkList from "@/components/Works";
// import ProjectList from "@/components/ProjectList";
import ClientLogoSlider from "@/components/ClientLogoSlider";

export default function Home() {
  return (
    <main>
      <Hero />
    <ClientLogoSlider />
      <About />
      <WorkList />

    </main>
  );
}
