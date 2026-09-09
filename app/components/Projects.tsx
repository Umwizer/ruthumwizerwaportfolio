import { projects } from "../data/portfolio";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <div className="projects-header">
          <span className="section-number">06 / SELECTED WORK</span>
          <div className="projects-divider" />
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className="project-card">
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
              </div>

              <div className="project-card-middle">
                <div className="project-icon">
                  {index === 0 ? '◆' : index === 1 ? '●' : index === 2 ? '■' : '▲'}
                </div>
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="project-tag">{tech}</span>
                ))}
              </div>

              <div className="project-card-footer">
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
                {/* {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live ↗
                  </a>
                )} */}
              </div>
            </div>
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

        .projects-header {
          margin-bottom: 3rem;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 2rem;
          align-items: center;
        }

        .section-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--accent);
          text-transform: uppercase;
          font-weight: 500;
        }

        .projects-divider {
          height: 1px;
          background: var(--border);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.75rem;
          transition: all 0.3s ease;
          display: grid;
          grid-template-rows: auto auto 1fr auto auto;
          gap: 0.75rem;
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 8px 30px rgba(0,0,0,0.25);
        }

        .project-card-top {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
        }

        .project-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: var(--muted-fg);
          opacity: 0.4;
        }

        .project-card-middle {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 0.75rem;
          align-items: center;
        }

        .project-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--muted);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--accent);
          border: 1px solid var(--border);
        }

        .project-title {
          font-family: 'EB Garamond', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--fg);
          line-height: 1.2;
        }

        .project-category {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent);
        }

        .project-description {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: var(--muted-fg);
          line-height: 1.7;
          margin: 0.25rem 0;
        }

        .project-tags {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(70px, auto));
          gap: 0.5rem;
          margin-top: 0.25rem;
        }

        .project-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--muted-fg);
          border: 1px solid var(--border);
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          text-align: center;
          background: var(--muted);
          transition: border-color 0.3s, color 0.3s;
        }

        .project-tag:hover {
          border-color: var(--accent);
          color: var(--fg);
        }

        .project-card-footer {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          border-top: 1px solid var(--border);
          padding-top: 0.75rem;
          margin-top: 0.25rem;
        }

        .project-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: var(--accent);
          text-decoration: none;
          transition: opacity 0.3s;
        }

        .project-link:hover {
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .projects-header {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .project-card {
            padding: 1.25rem;
          }

          .project-card-middle {
            grid-template-columns: 40px 1fr;
          }

          .project-icon {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }

          .project-title {
            font-size: 1.2rem;
          }

          .project-tags {
            grid-template-columns: repeat(auto-fill, minmax(60px, auto));
          }
        }
      `}</style>
    </section>
  );
}