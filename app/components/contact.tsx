"use client";

import { contact, socialLinks } from "../data/portfolio";
import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ruthumwizerwa@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("sent");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-number">07 / CONTACT</span>
          <div className="contact-divider" />
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-heading">
              Let's build something <span className="heading-accent">great.</span>
            </h2>

            <p className="contact-subtext">
              I'm open to collaborating on meaningful projects.
            </p>

            <div className="contact-links">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href={`mailto:${contact.email}`} className="contact-value">
                  {contact.email}
                </a>
              </div>

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

              <div className="contact-item">
                <span className="contact-label">LinkedIn</span>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  Ruth Umwizerwa
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New message from portfolio" />
              <input type="text" name="_honey" style={{ display: "none" }} />

              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  placeholder="What's on your mind?"
                  rows={4}
                  required
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                className="form-button"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending"
                  ? "Sending..."
                  : formStatus === "sent"
                  ? "✓ Sent!"
                  : formStatus === "error"
                  ? "✗ Error, try again"
                  : "Send Message"}
              </button>

              {formStatus === "sent" && (
                <p className="form-feedback sent">Thanks , I'll get back to you soon.</p>
              )}
              {formStatus === "error" && (
                <p className="form-feedback error">Something went wrong. Please try again.</p>
              )}
            </form>
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

        .contact-header {
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

        .contact-divider {
          height: 1px;
          background: var(--border);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .contact-heading {
          font-family: 'EB Garamond', serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 700;
          color: var(--fg);
          line-height: 1.2;
        }

        .heading-accent {
          color: var(--accent);
        }

        .contact-subtext {
          margin-top: 1rem;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: var(--muted-fg);
        }

        .contact-links {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact-item {
          display: grid;
          grid-template-columns: 80px 1fr;
          align-items: center;
          padding: 0.6rem 0;
          border-bottom: 1px solid var(--border);
        }

        .contact-item:last-child {
          border-bottom: none;
        }

        .contact-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--muted-fg);
          opacity: 0.6;
        }

        .contact-value {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: var(--fg);
          text-decoration: none;
          transition: color 0.3s;
        }

        .contact-value:hover {
          color: var(--accent);
        }

        .contact-form-wrapper {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
        }

        .contact-form {
          display: grid;
          gap: 1.25rem;
        }

        .form-group {
          display: grid;
          gap: 0.4rem;
        }

        .form-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--muted-fg);
        }

        .form-input,
        .form-textarea {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          padding: 0.7rem 1rem;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--fg);
          outline: none;
          transition: border-color 0.3s;
          width: 100%;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--accent);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--muted-fg);
          opacity: 0.4;
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-button {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.8rem 2rem;
          background: var(--accent);
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
          justify-self: start;
        }

        .form-button:hover:not(:disabled) {
          background: var(--accent-hover);
          transform: translateY(-2px);
        }

        .form-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-feedback {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          margin-top: 0.25rem;
        }

        .form-feedback.sent {
          color: #34d399;
        }

        .form-feedback.error {
          color: #f87171;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-header {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .contact-item {
            grid-template-columns: 70px 1fr;
          }

          .contact-form-wrapper {
            padding: 1.5rem;
          }

          .form-button {
            width: 100%;
            justify-self: stretch;
          }
        }
      `}</style>
    </section>
  );
}