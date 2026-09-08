"use client";

import { useState } from "react";
import { socialLinks } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f7f6f2]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#home"
          className="serif text-xl font-semibold tracking-tight"
        >
          RU.
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mono text-xs uppercase tracking-wider text-neutral-600 transition hover:text-black"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-xs"
          >
            GitHub
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-xs"
          >
            LinkedIn
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="mono text-xs md:hidden"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-[#f7f6f2] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mono text-sm uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}