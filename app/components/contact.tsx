
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <span className="section-number">06 / SELECTED WORK</span>

        <div className="projects-list">
          {projects.map((project) => (
            <article key={project.title} className="project-row">
              <span className="project-number">{project.number}</span>

              <div className="project-main">
                <div className="project-heading">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: 5rem 1.5rem;
          border-top: 1px solid var(--border);
          background: var(--bg);
        }

        .projects-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-number {
          display: block;
          margin-bottom: 3rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--accent);
          text-transform: uppercase;
          font-weight: 500;
        }

        .project-row {
          display: grid;
          grid-template-columns: 60px 1fr 140px;
          gap: 2rem;
          padding: 2.5rem 0;
          border-bottom: 1px solid var(--border);
        }

        .project-row:last-child {
          border-bottom: none;
        }

        .project-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: var(--muted-fg);
          opacity: 0.4;
        }

        .project-main {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .project-heading {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 0.75rem;
        }

        .project-title {
          font-family: 'EB Garamond', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--fg);
        }

        .project-category {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent);
        }

        .project-description {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: var(--muted-fg);
          line-height: 1.7;
          max-width: 620px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }

        .project-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--muted-fg);
          border: 1px solid var(--border);
          padding: 0.35rem 0.6rem;
          border-radius: 4px;
        }

        .project-links {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
          justify-content: flex-start;
        }

        .project-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--muted-fg);
          text-decoration: none;
          transition: color 0.3s;
        }

        .project-link:hover {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .project-row {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 2rem 0;
          }

          .project-links {
            align-items: flex-start;
            flex-direction: row;
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
