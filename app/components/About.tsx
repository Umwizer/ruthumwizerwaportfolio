export default function About() {
  const styles = {
    section: {
      padding: '5rem 1.5rem',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
    },
    header: {
      marginBottom: '3rem',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '2rem',
      alignItems: 'center',
    },
    sectionNumber: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.7rem',
      letterSpacing: '0.2em',
      color: 'var(--accent)',
      textTransform: 'uppercase' as const,
      fontWeight: 500,
    },
    divider: {
      height: '1px',
      background: 'var(--border)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr 1fr',
      gap: '2.5rem',
    },
    left: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1rem',
    },
    photoWrapper: {
      position: 'relative' as const,
      borderRadius: '16px',
      overflow: 'hidden' as const,
      background: 'var(--muted)',
      border: '1px solid var(--border)',
      aspectRatio: '1/1.1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    photoPlaceholder: {
      fontSize: '5rem',
      color: 'var(--muted-fg)',
      opacity: 0.5,
    },
    photoLabel: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.6rem',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.15em',
      color: 'var(--muted-fg)',
      textAlign: 'center' as const,
      opacity: 0.5,
    },
    middle: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1.5rem',
    },
    quote: {
      fontFamily: 'EB Garamond, serif',
      fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
      fontWeight: 700,
      color: 'var(--fg)',
      lineHeight: 1.3,
      fontStyle: 'italic',
    },
    quoteAccent: {
      color: 'var(--accent)',
    },
    description: {
      fontSize: '0.95rem',
      lineHeight: 1.8,
      color: 'var(--muted-fg)',
    },
    right: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.75rem',
      alignContent: 'start',
    },
    statCard: {
      background: 'var(--card-bg)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      padding: '1.25rem 1rem',
      textAlign: 'center' as const,
      transition: 'all 0.3s ease',
    },
    statNumber: {
      fontFamily: 'EB Garamond, serif',
      fontSize: '1.8rem',
      fontWeight: 700,
      color: 'var(--fg)',
      lineHeight: 1.2,
    },
    statLabel: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.55rem',
      color: 'var(--muted-fg)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.08em',
      marginTop: '0.2rem',
    },
    statIcon: {
      fontSize: '1.2rem',
      marginBottom: '0.3rem',
      color: 'var(--accent)',
    },
    techStack: {
      gridColumn: '1 / -1',
      background: 'var(--card-bg)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      padding: '0.75rem 1.25rem',
      textAlign: 'center' as const,
      transition: 'all 0.3s ease',
      fontSize: '0.8rem',
      color: 'var(--muted-fg)',
    },
    techStackAccent: {
      color: 'var(--accent)',
      fontWeight: 500,
    },
  };

  return (
    <section style={styles.section} id="about">
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.sectionNumber}>02 About Me</span>
          <div style={styles.divider} />
        </div>
        <div style={styles.grid}>
          <div style={styles.left}>
            <div style={styles.photoWrapper}>
              <span style={styles.photoPlaceholder}>📸</span>
              <img src="/profile.jpg" alt="Ruth Umwizerwa" style={{ width: '150%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={styles.photoLabel}>Ruth Umwizerwa · Software Engineer</p>
          </div>
          <div style={styles.middle}>
            <p style={styles.quote}>
              &quot;I build software that <span style={styles.quoteAccent}>works and feels great.</span>&quot;
            </p>
            <p style={styles.description}>
              I focus on backend development, but I also enjoy building frontend and mobile apps.
              I'm passionate about clean code, thoughtful design, and building solutions that are
              both reliable and user‑friendly.
            </p>
          </div>
          <div style={styles.right}>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>▣</div>
              <div style={styles.statNumber}>2+</div>
              <div style={styles.statLabel}>Years Experience</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>◈</div>
              <div style={styles.statNumber}>4+</div>
              <div style={styles.statLabel}>Projects Built</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>⌗</div>
              <div style={styles.statNumber}>10+</div>
              <div style={styles.statLabel}>APIs Created</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>◉</div>
              <div style={styles.statNumber}>Js</div>
              <div style={styles.statLabel}>Primary Language</div>
            </div>
            <div style={styles.techStack}>
              <span style={styles.techStackAccent}>Tech Stack:</span>
              &nbsp; Java · Spring Boot · Node.js · React · Next.js · TypeScript · MongoDB · MySQL
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ─── Hover Effects ─── */
        .stat-card:hover {
          transform: translateY(-3px);
          border-color: var(--accent);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        .tech-stack:hover {
          border-color: var(--accent);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        /* ─── Responsive ─── */
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          .about-left {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .about-right {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-quote {
            font-size: 1.5rem !important;
          }
          .about-header {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .about-right {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}