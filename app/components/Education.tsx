// app/components/Education.tsx
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">

        {/* Section header */}
        <div className="education-header">
          <span className="section-number">04 / EDUCATION</span>
        </div>

        {/* Education items */}
        {education.map((item, index) => (
          <div key={`${item.institution}-${item.degree}`} className="education-grid">
            {/* Left column: period + location + index */}
            <div className="education-left">
              <span className="education-period">{item.period}</span>
              <span className="education-location">{item.location}</span>
              <span className="education-index">0{index + 1}</span>
            </div>

            {/* Right column: institution, degree, description */}
            <div className="education-right">
              <h3 className="education-institution">{item.institution}</h3>
              <p className="education-degree">{item.degree}</p>
              <p className="education-description">{item.description}</p>
            </div>
          </div>
        ))}
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
        }

        .section-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--accent);
          text-transform: uppercase;
          font-weight: 500;
        }

        /* ─── Grid Row ─── */
        .education-grid {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 2rem;
          padding: 2rem 0;
          border-bottom: 1px solid var(--border);
        }

        .education-grid:last-child {
          border-bottom: none;
        }

        /* ─── Left Column ─── */
        .education-left {
          display: grid;
          grid-template-rows: auto auto auto;
          gap: 0.25rem;
          align-content: start;
        }

        .education-period {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--muted-fg);
        }

        .education-location {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: var(--muted-fg);
          opacity: 0.6;
        }

        .education-index {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: var(--muted-fg);
          opacity: 0.3;
          margin-top: 0.5rem;
        }

        /* ─── Right Column ─── */
        .education-right {
          display: grid;
          grid-template-rows: auto auto auto;
          gap: 0.25rem;
          align-content: start;
        }

        .education-institution {
          font-family: 'EB Garamond', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--fg);
          line-height: 1.2;
        }

        .education-degree {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--accent);
        }

        .education-description {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: var(--muted-fg);
          line-height: 1.7;
          margin-top: 0.25rem;
          max-width: 600px;
        }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .education-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
            padding: 1.5rem 0;
          }

          .education-left {
            display: grid;
            grid-template-columns: auto 1fr auto;
            grid-template-rows: auto;
            gap: 1rem;
            align-items: center;
          }

          .education-period {
            font-size: 0.75rem;
          }

          .education-location {
            font-size: 0.65rem;
            opacity: 0.5;
          }

          .education-index {
            font-size: 0.6rem;
            margin-top: 0;
            opacity: 0.3;
          }

          .education-institution {
            font-size: 1.5rem;
          }

          .education-degree {
            font-size: 0.85rem;
          }

          .education-description {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
} 