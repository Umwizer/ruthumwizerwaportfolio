
import { skills } from "../data/portfolio";
export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <span className="section-number">05 / SKILLS</span>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="skills-tag"
              style={{ animationDelay: `${index * 40}ms` }}
            >
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
          cursor: default;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px) scale(0.9);
          animation: skillFadeIn 0.5s ease forwards;
        }

        .skills-tag:hover {
          transform: translateY(-6px) scale(1.05) rotate(1deg);
          border-color: var(--accent);
          background: linear-gradient(135deg, var(--accent), #a78bfa);
          color: #fff;
          box-shadow: 0 8px 25px rgba(74, 108, 247, 0.3);
          animation-play-state: paused;
        }

        @keyframes skillFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 768px) {
          .skills-tag {
            font-size: 0.75rem;
            padding: 0.5rem 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}