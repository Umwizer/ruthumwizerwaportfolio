
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";   
import Experience from "./components/Experience";  
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 1.5rem',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap' as const,
          gap: '1rem',
        }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--muted-fg)' }}>
            © {new Date().getFullYear()} Ruth Umwizerwa
          </p>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--muted-fg)' }}>
            Software Engineering · Kigali, Rwanda
          </p>
        </div>
      </footer>
    </>
  );
}