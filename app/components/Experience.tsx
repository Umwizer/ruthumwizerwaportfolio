// app/components/Experience.tsx
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <span className="section-number">03 / EXPERIENCE</span>
        </div>

        {experience.map((item, index) => (
          <div key={`${item.company}-${item.role}`} className="experience-row">
            <div className="experience-left">
              <span className="experience-period">{item.period}</span>
              <span className="experience-company">{item.company}</span>
              <span className="experience-index">0{index + 1}</span>
            </div>

            <div className="experience-right">
              <h3 className="experience-role">{item.role}</h3>
              <p className="experience-description">{item.description}</p>

              <ul className="experience-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="experience-tags">
                {item.technologies.map((tech) => (
                  <span key={tech} className="experience-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .experience-section {
          padding: 5rem 1.5rem;
          border-top: 1px solid var(--border);
          background: var(--bg);
        }

        .experience-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .experience-header {
          margin-bottom: 3rem;
        }

        .section-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--accent);
          text-transform: uppercase;
          font-weight: 500;
        }

        .experience-row {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 2rem;
          padding: 2.5rem 0;
          border-bottom: 1px solid var(--border);
        }

        .experience-row:last-child {
          border-bottom: none;
        }

        .experience-left {
          display: grid;
          grid-template-rows: auto auto auto;
          gap: 0.25rem;
          align-content: start;
        }

        .experience-period {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--muted-fg);
        }

        .experience-company {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: var(--muted-fg);
          opacity: 0.6;
        }

        .experience-index {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: var(--muted-fg);
          opacity: 0.3;
          margin-top: 0.5rem;
        }

        .experience-right {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .experience-role {
          font-family: 'EB Garamond', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--fg);
          line-height: 1.2;
        }

        .experience-description {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: var(--muted-fg);
          line-height: 1.7;
          max-width: 650px;
        }

        .experience-bullets {
          margin: 0.25rem 0 0.5rem;
          padding-left: 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .experience-bullets li {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: var(--muted-fg);
          line-height: 1.6;
        }

        .experience-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }

        .experience-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--muted-fg);
          border: 1px solid var(--border);
          padding: 0.35rem 0.6rem;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .experience-row {
            grid-template-columns: 1fr;
            gap: 0.75rem;
            padding: 1.75rem 0;
          }

          .experience-left {
            grid-template-columns: auto 1fr auto;
            grid-template-rows: auto;
            gap: 1rem;
            align-items: center;
          }

          .experience-role {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}