import Navbar from "../app/components/NavBar"
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import Skills from "../app/components/Skills";
import Experience from "../app/components/Experience";
import Education from "../app/components/Education";
// import Projects from "../app/components/Projects";
import Contact from "../app/components/contact";
import CurrentBuilding from "../app/components/CurrentBuilding";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Experience />

        <Education />

        {/* <Projects /> */}
        <CurrentBuilding />
        <Contact />
      </main>

      <footer className="border-t border-black/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p className="mono text-xs text-neutral-500">
            © {new Date().getFullYear()} Ruth Umwizerwa
          </p>

          <p className="mono text-xs text-neutral-500">
            Software Engineering · Kigali, Rwanda
          </p>
        </div>
      </footer>
    </>
  );
}