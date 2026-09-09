"use client";

import { useState } from "react";
import { socialLinks } from "../data/portfolio";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Works", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const styles = {
    header: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      backdropFilter: 'blur(16px)',
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '0 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '70px',
    },
    logo: {
      fontFamily: 'EB Garamond, serif',
      fontSize: '1.5rem',
      fontWeight: 700,
      color: 'var(--fg)',
      textDecoration: 'none',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
    navLink: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.7rem',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
      color: 'var(--muted-fg)',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem',
    },
    socialLink: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.7rem',
      color: 'var(--muted-fg)',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
    toggle: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: '1px solid var(--border)',
      background: 'var(--card-bg)',
      color: 'var(--fg)',
      cursor: 'pointer',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s',
    },
    menuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: 'var(--fg)',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    mobileMenu: {
      padding: '1.5rem',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
    },
    mobileNav: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1.25rem',
    },
    mobileLink: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.9rem',
      textTransform: 'uppercase' as const,
      color: 'var(--fg)',
      textDecoration: 'none',
    },
    mobileSocial: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      marginTop: '1rem',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a href="#home" style={styles.logo}>RU.</a>

        <nav style={styles.nav} className="desktop-nav">
          {links.map((link) => (
            <a key={link.name} href={link.href} style={styles.navLink}>
              {link.name}
            </a>
          ))}
        </nav>

        <div style={styles.rightSection} className="desktop-right">
          <a href={socialLinks.github} target="_blank" rel="noopener" style={styles.socialLink}>
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener" style={styles.socialLink}>
            LinkedIn
          </a>
        </div>

        <button onClick={() => setOpen(!open)} style={styles.menuButton} className="mobile-menu-btn">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div style={styles.mobileMenu}>
          <nav style={styles.mobileNav}>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                style={styles.mobileLink}
              >
                {link.name}
              </a>
            ))}
            <div style={styles.mobileSocial}>
              <a href={socialLinks.github} target="_blank" rel="noopener" style={styles.socialLink}>
                GitHub
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener" style={styles.socialLink}>
                LinkedIn
              </a>
              <button onClick={toggleTheme} style={{...styles.toggle, width: '36px', height: '36px'}}>
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-right { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
        .desktop-nav a:hover { color: var(--fg) !important; }
        .desktop-right a:hover { color: var(--fg) !important; }
        .desktop-right button:hover { background: var(--muted) !important; border-color: var(--accent) !important; }
      `}</style>
    </header>
  );
}