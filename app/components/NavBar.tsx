"use client";
import { useState } from "react";
import { socialLinks } from "../data/portfolio";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-bottom" style={{ background: 'var(--bg)', backdropFilter: 'blur(12px)' }}>
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="serif text-2xl font-bold">RU.</a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="mono text-xs uppercase tracking-wider text-muted hover-underline">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a href={socialLinks.github} target="_blank" rel="noopener" className="mono text-xs text-muted hover:text-fg transition">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener" className="mono text-xs text-muted hover:text-fg transition">
            LinkedIn
          </a>
          <button onClick={toggleTheme} className="p-1.5 rounded-full hover:bg-muted transition" aria-label="Toggle theme">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-fg">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-bottom px-6 py-6 md:hidden" style={{ background: 'var(--bg)' }}>
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setOpen(false)} className="mono text-sm uppercase text-fg">
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 mt-4">
              <a href={socialLinks.github} target="_blank" rel="noopener" className="mono text-xs text-muted">GitHub</a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener" className="mono text-xs text-muted">LinkedIn</a>
              <button onClick={toggleTheme} className="text-muted">{theme === "dark" ? "☀️" : "🌙"}</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}