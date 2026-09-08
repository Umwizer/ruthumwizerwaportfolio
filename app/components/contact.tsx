import { contact, socialLinks } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-black/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="section-number mb-16">06 / CONTACT</p>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="serif text-5xl leading-tight md:text-7xl">
              Let's build something useful.
            </h2>

            <p className="mt-8 max-w-xl leading-8 text-neutral-600">
              I'm always interested in learning, collaborating and working on
              meaningful software projects.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-t border-black/10 pt-5">
              <p className="mono text-xs uppercase text-neutral-400">
                Email
              </p>

              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block text-lg hover:underline"
              >
                {contact.email}
              </a>
            </div>

            <div className="border-t border-black/10 pt-5">
              <p className="mono text-xs uppercase text-neutral-400">
                GitHub
              </p>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg hover:underline"
              >
                github.com/Umwizer
              </a>
            </div>

            <div className="border-t border-black/10 pt-5">
              <p className="mono text-xs uppercase text-neutral-400">
                LinkedIn
              </p>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}