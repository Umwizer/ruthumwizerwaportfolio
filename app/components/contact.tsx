import { contact, socialLinks } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <p className="section-number mb-16">Contact</p>
        <div className="grid-2">
          <div>
            <h2 className="serif text-4xl md:text-5xl leading-tight">
              Have a project in mind, a question, or just want to say hello?<br />
              <span className="text-accent">My inbox is always open.</span>
            </h2>
            <p className="text-muted mt-4">I typically respond within 24 hours.</p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="mono text-xs uppercase text-muted">Email</p>
                <a href={`mailto:${contact.email}`} className="text-lg hover:text-accent transition">{contact.email}</a>
              </div>
              <div>
                <p className="mono text-xs uppercase text-muted">Subject</p>
                <p className="text-lg">{contact.location}</p>
              </div>
              <div>
                <p className="mono text-xs uppercase text-muted">GitHub</p>
                <a href={socialLinks.github} target="_blank" rel="noopener" className="text-lg hover:text-accent transition">Umwizer</a>
              </div>
              <div className="border-top pt-4">
                <p className="text-accent font-medium">✨ Available for new projects</p>
              </div>
            </div>
          </div>

          <div className="card">
            <form>
              <div className="space-y-4">
                <div>
                  <label className="mono text-xs uppercase text-muted">Your Name</label>
                  <input type="text" className="w-full p-3 rounded border border-border bg-muted text-fg mt-1" placeholder="Your name" />
                </div>
                <div>
                  <label className="mono text-xs uppercase text-muted">Email Address</label>
                  <input type="email" className="w-full p-3 rounded border border-border bg-muted text-fg mt-1" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="mono text-xs uppercase text-muted">Message</label>
                  <textarea rows={4} className="w-full p-3 rounded border border-border bg-muted text-fg mt-1" placeholder="Your message..." />
                </div>
                <p className="text-xs text-muted">* I read every message personally</p>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}