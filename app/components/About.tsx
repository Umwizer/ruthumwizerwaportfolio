export default function About() {
  return (
    <section id="about" className="border-t border-black/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-[180px_1fr]">
          <div>
            <p className="section-number">01 / ABOUT</p>
          </div>

          <div>
            <h2 className="serif max-w-4xl text-4xl leading-tight md:text-6xl">
              I enjoy understanding how systems work behind the interface.
            </h2>

            <div className="mt-10 grid gap-8 text-neutral-600 md:grid-cols-2">
              <p className="leading-8">
                I am a Software Engineering student at AUCA with practical
                experience building web applications and backend systems.
              </p>

              <p className="leading-8">
                My strongest interest is backend development, APIs and system
                reliability, while my experience with React and Next.js helps
                me understand the complete product from frontend to backend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}