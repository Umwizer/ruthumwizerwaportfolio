import { contact } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid-background flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="mono mb-8 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Software Engineer · Kigali, Rwanda
        </p>

        <h1 className="serif max-w-5xl text-6xl leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          Ruth
          <br />
          <span className="italic">Umwizerwa.</span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <p className="max-w-xl text-lg leading-8 text-neutral-600">
            Backend-focused software engineer passionate about building
            reliable APIs, scalable systems and useful digital products.
          </p>

          <div className="md:text-right">
            <p className="mono text-xs uppercase tracking-widest text-neutral-500">
              Currently focusing on
            </p>

            <p className="mt-3 text-xl">
              Backend · APIs · React · Next.js · Spring Boot
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              {contact.location}
            </p>
          </div>
        </div>

        <div className="mt-20">
          <a
            href="#about"
            className="mono text-xs uppercase tracking-widest hover-line"
          >
            Scroll to explore ↓
          </a>
        </div>
      </div>
    </section>
  );
}