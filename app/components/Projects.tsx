import { projects } from "../data/portfolio";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="border-t border-black/10 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-number mb-5">
              05 / SELECTED WORK
            </p>

            <h2 className="serif text-5xl leading-none md:text-7xl">
              Things I&apos;ve
              <br />
              <span className="italic">built.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-neutral-500">
            A selection of projects that reflect my interests in backend
            engineering, APIs, real-time systems, mobile applications and
            full-stack development.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className={`group grid gap-8 border-t border-black/10 pt-8 md:grid-cols-[120px_1fr_180px] ${
                index === 0 ? "md:pt-10" : ""
              }`}
            >

              {/* Number */}
              <div>
                <span className="mono text-xs tracking-widest text-neutral-400">
                  {project.number}
                </span>
              </div>

              {/* Main content */}
              <div>

                {/* Category */}
                <p className="mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  {project.category}
                </p>

                {/* Project title */}
                <h3
                  className={`serif mt-4 leading-none transition-transform duration-300 group-hover:translate-x-1 ${
                    index === 0
                      ? "text-6xl md:text-8xl"
                      : "text-5xl md:text-6xl"
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-8 flex max-w-2xl flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="mono border border-black/10 px-3 py-2 text-[10px] uppercase tracking-wide text-neutral-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub */}
              <div className="md:text-right">
                {project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono inline-block text-[10px] uppercase tracking-[0.2em] hover-line"
                  >
                    View GitHub ↗
                  </a>
                ) : (
                  <span className="mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    Coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* More work */}
        <div className="mt-24 border-t border-black/10 pt-8">
          <div className="grid gap-8 md:grid-cols-[120px_1fr]">

            <p className="mono text-xs tracking-widest text-neutral-400">
              MORE
            </p>

            <div>
              <p className="serif text-3xl">
                More projects are coming.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500">
                I&apos;m continuously building and learning, especially around
                Java, Spring Boot, cloud technologies and software testing.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}