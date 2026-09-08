import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-black/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="section-number mb-16">03 / EXPERIENCE</p>

        <div className="space-y-0">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className="grid border-t border-black/10 py-10 md:grid-cols-[180px_1fr_280px] md:gap-12"
            >
              <div className="mono text-xs uppercase tracking-wider text-neutral-500">
                {item.period}
              </div>

              <div>
                <h3 className="serif text-3xl">{item.role}</h3>

                <p className="mt-2 text-sm text-neutral-500">
                  {item.company}
                </p>

                <p className="mt-6 max-w-2xl leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 md:mt-0 md:justify-end md:content-start">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="mono h-fit border border-black/10 px-2 py-1 text-[10px] uppercase"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mono mt-4 text-xs text-neutral-400 md:col-start-1">
                0{index + 1}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}