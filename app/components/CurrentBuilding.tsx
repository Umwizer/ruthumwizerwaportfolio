export default function CurrentBuilding() {
  return (
    <section className="section-padding">
      <div className="container">
        <p className="section-number mb-12">06 / CURRENTLY BUILDING</p>
        <div className="grid gap-12 md:grid-cols-[1fr_280px]">
          <div>
            <p className="serif text-4xl md:text-6xl leading-tight max-w-4xl">
              Moving deeper into <span className="text-accent">backend engineering.</span>
            </p>
            <p className="text-muted leading-8 mt-8 max-w-2xl">
              Currently expanding my backend knowledge with Java and Spring Boot while continuing to explore cloud technologies, software testing and reliable system design.
            </p>
          </div>
          <div className="card">
            <p className="mono text-xs uppercase tracking-wider text-muted">Exploring</p>
            <div className="mt-4 space-y-2">
              {["Java", "Spring Boot", "REST APIs", "Docker", "Cloud", "Software Testing"].map((item) => (
                <p key={item} className="text-sm font-medium">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}