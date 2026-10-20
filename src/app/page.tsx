import { Nav } from "@/components/nav";
import { Background } from "@/components/background";
import { Hero } from "@/components/hero";
import { Contributions } from "@/components/contributions";
import { Stack, Stats } from "@/components/stack";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Background />
      <main className="relative mx-auto w-full max-w-3xl px-6 lg:px-0">
        <section id="top">
          <Hero />
          <Stats />
          <Contributions />
          <Stack />
        </section>
        <Projects />
        <Experience />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
