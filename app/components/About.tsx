
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
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: '3rem',
    },
    left: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '0.5rem',
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
      width: '40px',
      height: '2px',
      background: 'var(--accent)',
      marginTop: '0.5rem',
    },
    right: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1.5rem',
    },
    quote: {
      fontFamily: 'EB Garamond, serif',
      fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
      fontWeight: 700,
      color: 'var(--fg)',
      lineHeight: 1.2,
      fontStyle: 'italic',
    },
    quoteAccent: {
      color: 'var(--accent)',
    },
    description: {
      fontSize: '1rem',
      lineHeight: 1.8,
      color: 'var(--muted-fg)',
      maxWidth: '650px',
    },
    descriptionSecond: {
      fontSize: '1rem',
      lineHeight: 1.8,
      color: 'var(--muted-fg)',
      maxWidth: '650px',
      marginTop: '0.5rem',
    },
  };

  return (
    <section style={styles.section} id="about">
      <div style={styles.container}>
        {/* Left side - section number */}
        <div style={styles.left}>
          <p style={styles.sectionNumber}>02 About Me</p>
          <div style={styles.divider} />
        </div>

        <div style={styles.right}>
          {/* Highlighted quote */}
          <p style={styles.quote}>
            &quot;I build  <span style={styles.quoteAccent}>reliable and user friendly software .</span>&quot;
          </p>

          {/* Description */}
          <p style={styles.description}>
            I'm Ruth Umwizerwa, a Software Engineering student at AUCA with a 
            strong focus on backend development. I build scalable applications 
            using Java, Spring Boot, Node.js, while crafting intuitive 
            user experiences with React and Next.js.
          </p>

          <p style={styles.descriptionSecond}>
            I'm passionate about clean code, and building 
            solutions that are both reliable and user‑friendly .
          </p>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .about-container {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .about-left {
            flex-direction: row !important;
            align-items: center !important;
          }
          .about-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}