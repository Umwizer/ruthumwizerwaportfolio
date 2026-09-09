import { contact, socialLinks } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <span className="section-number">07 / CONTACT</span>

        <div className="contact-grid">
          <div className="contact-intro">
            <h2 className="contact-heading">
              Have a project in mind, or just want to say hello?
            </h2>

            <p className="contact-subtext">
              I&apos;m always interested in learning, collaborating and
              working on meaningful software projects.
            </p>
          </div>

          <div className="contact-details">
            {/* Email */}
            <div className="contact-item">
              <span className="contact-label">Email</span>

              <a
                href={`mailto:${contact.email}`}
                className="contact-value"
              >
                {contact.email}
              </a>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <span className="contact-label">Phone</span>

              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="contact-value"
              >
                {contact.phone}
              </a>
            </div>

            {/* GitHub */}
            <div className="contact-item">
              <span className="contact-label">GitHub</span>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-value"
              >
                github.com/Umwizer
              </a>
            </div>

            {/* LinkedIn */}
            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-value"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 5rem 1.5rem 6rem;
          border-top: 1px solid var(--border);
          background: var(--bg);
        }

        .contact-container {
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

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .contact-heading {
          font-family: 'EB Garamond', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: var(--fg);
          line-height: 1.25;
        }

        .contact-subtext {
          margin-top: 1.25rem;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: var(--muted-fg);
          max-width: 480px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
        }

        .contact-item {
          padding: 1.25rem 0;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .contact-item:last-child {
          border-bottom: 1px solid var(--border);
        }

        .contact-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--muted-fg);
          opacity: 0.7;
        }

        .contact-value {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          color: var(--fg);
          text-decoration: none;
        }

        .contact-value:hover {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}

