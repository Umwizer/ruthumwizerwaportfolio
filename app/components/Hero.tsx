import { contact } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center px-6 pt-28 pb-16 relative overflow-hidden">
      <div className="container relative z-10">
        <p className="mono text-xs uppercase tracking-wider text-muted mb-6">Software Engineer · Kigali, Rwanda</p>
        <h1 className="serif text-6xl md:text-8xl lg:text-9xl leading-tight font-bold">
          Ruth<br />
          <span className="italic text-accent">Umwizerwa.</span>
        </h1>
        <div className="grid-2-col mt-12">
          <p className="text-lg leading-8 text-muted max-w-xl">
            Backend-focused software engineer passionate about building reliable APIs, scalable systems and useful digital products.
          </p>
          <div className="md:text-right">
            <p className="mono text-xs uppercase tracking-wider text-muted">Currently focusing on</p>
            <p className="text-xl font-medium mt-3">Backend · APIs · React · Next.js · Spring Boot</p>
            <p className="text-sm text-muted mt-4">{contact.location}</p>
          </div>
        </div>
        <div className="mt-20">
          <a href="#about" className="mono text-xs uppercase tracking-wider text-muted hover-underline">Scroll to explore ↓</a>
        </div>
      </div>
    </section>
  );
}