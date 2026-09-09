// app/components/Skills.tsx
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <span className="section-number">05 / SKILLS</span>

        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill} className="skills-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 5rem 1.5rem;
          border-top: 1px solid var(--border);
          background: var(--bg);
        }

        .skills-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-number {
          display: block;
          margin-bottom: 2.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--accent);
          text-transform: uppercase;
          font-weight: 500;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skills-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: var(--fg);
          border: 1px solid var(--border);
          background: var(--card-bg);
          padding: 0.6rem 1.1rem;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}