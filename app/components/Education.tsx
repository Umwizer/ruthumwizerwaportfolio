// app/components/Education.tsx
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">

        {/* Section Header */}
        <div className="education-header">
          <span className="section-number">03 / EDUCATION</span>
          <div className="education-divider" />
        </div>

        {/* Education Grid */}
        <div className="education-grid">
          {education.map((item, index) => (
            <div key={`${item.institution}-${item.degree}`} className="education-card">
              {/* Card Top: Period + Index */}
              <div className="education-card-top">
                <span className="education-period">{item.period}</span>
                <span className="education-index">0{index + 1}</span>
              </div>

              {/* Card Middle: Icon + Institution */}
              <div className="education-card-middle">
                <div className="education-icon">
                  {index === 0 ? '🎓' : '🏫'}
                </div>
                <div>
                  <h3 className="education-institution">{item.institution}</h3>
                  <p className="education-degree">{item.degree}</p>
                </div>
              </div>

              {/* Card Bottom: Description */}
              <p className="education-description">{item.description}</p>

              {/* Card Footer: Location + Progress */}
              <div className="education-card-footer">
                <span className="education-location">📍 {item.location}</span>
                {index === 0 && (
                  <span className="education-progress">● In Progress</span>
                )}
                {index === 1 && (
                  <span className="education-progress">✓ Completed</span>
                )}
              </div>

              {/* Progress Bar (for university only) */}
              {index === 0 && (
                <div className="education-progress-bar">
                  <div className="education-progress-fill" style={{ width: '60%' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ─── Section ─── */
        .education-section {
          padding: 5rem 1.5rem;
          border-top: 1px solid var(--border);
          background: var(--bg);
        }

        .education-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .education-header {
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

        .education-divider {
          height: 1px;
          background: var(--border);
        }

        /* ─── Grid ─── */
        .education-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        /* ─── Card ─── */
        .education-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.75rem;
          transition: all 0.3s ease;
          display: grid;
          grid-template-rows: auto auto 1fr auto auto;
          gap: 0.75rem;
        }

        .education-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 8px 30px rgba(0,0,0,0.25);
        }

        /* ─── Card Top ─── */
        .education-card-top {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
        }

        .education-period {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--muted-fg);
        }

        .education-index {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: var(--muted-fg);
          opacity: 0.3;
        }

        /* ─── Card Middle ─── */
        .education-card-middle {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 0.75rem;
          align-items: center;
        }

        .education-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--muted);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          border: 1px solid var(--border);
        }

        .education-institution {
          font-family: 'EB Garamond', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--fg);
          line-height: 1.2;
        }

        .education-degree {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 500;
        }

        /* ─── Description ─── */
        .education-description {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: var(--muted-fg);
          line-height: 1.7;
          margin: 0.25rem 0;
        }

        /* ─── Card Footer ─── */
        .education-card-footer {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          border-top: 1px solid var(--border);
          padding-top: 0.75rem;
          margin-top: 0.25rem;
        }

        .education-location {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: var(--muted-fg);
          opacity: 0.6;
        }

        .education-progress {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.55rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent);
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          border: 1px solid var(--border);
          background: var(--muted);
        }

        /* ─── Progress Bar ─── */
        .education-progress-bar {
          width: 100%;
          height: 4px;
          background: var(--muted);
          border-radius: 4px;
          overflow: hidden;
          margin-top: 0.25rem;
        }

        .education-progress-fill {
          height: 100%;
          background: var(--accent);
          border-radius: 4px;
          transition: width 0.6s ease;
        }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .education-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .education-header {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .education-card {
            padding: 1.25rem;
          }

          .education-institution {
            font-size: 1.2rem;
          }

          .education-card-middle {
            grid-template-columns: 40px 1fr;
          }

          .education-icon {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}