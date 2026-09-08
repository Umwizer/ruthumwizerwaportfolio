  import { education } from "../data/portfolio";
  export default function Education() {
    return (
      <section id="education" className="border-t border-black/10 bg-white px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <p className="section-number mb-16 text-neutral-400">04 / EDUCATION</p>

          <div className="space-y-6">
            {education.map((item, index) => (
              <article
                key={item.institution}
                className="group relative border-l-4 border-amber-500/30 pl-6 transition hover:border-amber-500"
              >
                <div className="grid gap-2 md:grid-cols-[180px_1fr] md:gap-8">
                  <div>
                    <p className="mono text-xs font-medium tracking-wider text-neutral-500">
                      {item.period}
                    </p>
                    <p className="mono text-xs text-neutral-400">{item.location}</p>
                    <span className="mono mt-3 inline-block text-[11px] text-neutral-300">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="serif text-2xl font-bold leading-tight text-neutral-900">
                      {item.institution}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-neutral-700">
                      {item.degree}
                    </p>
                    <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }