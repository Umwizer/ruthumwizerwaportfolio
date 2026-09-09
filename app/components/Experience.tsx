import { experience } from "../data/portfolio";

export default function Experience() {
  const icons = ['▣', '◈', '⌗', '◉'];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <span className="section-number">04 / EXPERIENCE</span>
          <div className="experience-divider" />
        </div>

        <div className="experience-grid">
          {experience.map((item, index) => (
            <div key={`${item.company}-${item.role}`} className="experience-card">
              <div className="experience-card-top">
                <span className="experience-period">{item.period}</span>
                <span className="experience-index">0{index + 1}</span>
              </div>

              <div className="experience-card-middle">
                <div className="experience-icon">{icons[index]}</div>
                <div>
                  <h3 className="experience-role">{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                </div>
              </div>

              {item.description && (
                <p className="experience-description">{item.description}</p>
              )}

              <ul className="experience-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="experience-tags">
                {item.technologies.map((tech) => (
                  <span key={tech} className="experience-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
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

        .experience-divider {
          height: 1px;
          background: var(--border);
        }

        .experience-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .experience-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.75rem;
          transition: all 0.3s ease;
          display: grid;
          grid-template-rows: auto auto auto 1fr auto;
          gap: 0.75rem;
        }

        .experience-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 8px 30px rgba(0,0,0,0.25);
        }

        .experience-card-top {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
        }

        .experience-period {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--muted-fg);
        }

        .experience-index {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: var(--muted-fg);
          opacity: 0.3;
        }

        .experience-card-middle {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 0.75rem;
          align-items: center;
        }

        .experience-icon {
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

        .experience-role {
          font-family: 'EB Garamond', serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--fg);
          line-height: 1.2;
        }

        .experience-company {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 500;
        }

        .experience-description {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: var(--muted-fg);
          line-height: 1.7;
          margin: 0.25rem 0;
        }

        .experience-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.35rem;
        }

        .experience-bullets li {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: var(--muted-fg);
          line-height: 1.6;
          padding-left: 1.2rem;
          position: relative;
        }

        .experience-bullets li::before {
          content: '–';
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        .experience-tags {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(70px, auto));
          gap: 0.5rem;
          margin-top: 0.25rem;
        }

        .experience-tag {
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

        .experience-tag:hover {
          border-color: var(--accent);
          color: var(--fg);
        }

        @media (max-width: 768px) {
          .experience-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .experience-header {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .experience-card {
            padding: 1.25rem;
          }

          .experience-card-middle {
            grid-template-columns: 40px 1fr;
          }

          .experience-icon {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }

          .experience-role {
            font-size: 1.1rem;
          }

          .experience-tags {
            grid-template-columns: repeat(auto-fill, minmax(60px, auto));
          }
        }
      `}</style>
    </section>
  );
}