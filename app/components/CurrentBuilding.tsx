export default function CurrentlyBuilding() {
  return (
    <section className="border-t border-black/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="section-number mb-12">
          06 / CURRENTLY BUILDING
        </p>

        <div className="grid gap-12 md:grid-cols-[1fr_300px]">
          <div>
            <p className="serif max-w-4xl text-4xl leading-tight md:text-6xl">
              Moving deeper into backend engineering.
            </p>

            <p className="mt-8 max-w-2xl leading-8 text-neutral-600">
              Currently expanding my backend knowledge with Java and Spring
              Boot while continuing to explore cloud technologies, software
              testing and reliable system design.
            </p>
          </div>

          <div className="border-l border-black/10 pl-8">
            <p className="mono text-xs uppercase tracking-widest text-neutral-400">
              Exploring
            </p>

            <div className="mt-6 space-y-4">
              <p>Java</p>
              <p>Spring Boot</p>
              <p>REST APIs</p>
              <p>Docker</p>
              <p>Cloud</p>
              <p>Software Testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}