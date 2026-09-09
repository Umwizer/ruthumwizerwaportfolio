export default function Hero() {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '7rem 1.5rem 4rem',
      position: 'relative' as const,
      overflow: 'hidden',
      background: 'var(--bg)',
    },
    glow: {
      position: 'absolute' as const,
      inset: 0,
      pointerEvents: 'none' as const,
      opacity: 0.05,
      background: 'radial-gradient(circle at 20% 50%, var(--accent) 0%, transparent 60%)',
    },
    content: {
      maxWidth: '1100px',
      margin: '0 auto',
      width: '100%',
      position: 'relative' as const,
      zIndex: 10,
    },
    label: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.7rem',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.2em',
      color: 'var(--accent)',
      marginBottom: '1.5rem',
    },
    name: {
      fontFamily: 'EB Garamond, serif',
      fontSize: 'clamp(3.5rem, 12vw, 8rem)',
      fontWeight: 700,
      lineHeight: 0.9,
      color: 'var(--fg)',
    },
    nameAccent: {
      color: 'var(--accent)',
    },
    role: {
      fontFamily: 'EB Garamond, serif',
      fontSize: 'clamp(1.8rem, 4vw, 3rem)',
      fontWeight: 500,
      color: 'var(--muted-fg)',
      marginTop: '0.75rem',
    },
    description: {
      fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
      maxWidth: '550px',
      color: 'var(--muted-fg)',
      lineHeight: 1.8,
      marginTop: '1.5rem',
    },
    buttons: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '1rem',
      marginTop: '2rem',
    },
    btnPrimary: {
      display: 'inline-block',
      padding: '0.8rem 2.4rem',
      background: 'var(--accent)',
      color: '#fff',
      borderRadius: '50px',
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.75rem',
      fontWeight: 500,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.08em',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    btnOutline: {
      display: 'inline-block',
      padding: '0.8rem 2.4rem',
      background: 'transparent',
      color: 'var(--fg)',
      borderRadius: '50px',
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.75rem',
      fontWeight: 500,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.08em',
      border: '1px solid var(--border)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    scroll: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.65rem',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.15em',
      color: 'var(--muted-fg)',
      opacity: 0.6,
      marginTop: '4rem',
      display: 'inline-block',
      animation: 'floatDown 2s ease-in-out infinite',
    },
  };

  return (
    <section id="home" style={styles.container}>
      <div style={styles.glow} />
      <div style={styles.content}>
        <p style={styles.label}>Hello, I&apos;m</p>

        <h1 style={styles.name}>
          Ruth<br />
          <span style={styles.nameAccent}>Umwizerwa.</span>
        </h1>

        <p style={styles.role}>Junior Software Engineer</p>

        <p style={styles.description}>
          Building scalable backend systems and intuitive interfaces that 
          make technology feel effortless.
        </p>

        <div style={styles.buttons}>
          <a href="#contact" style={styles.btnPrimary}>Hire Me</a>
          <a href="/Ruth_Umwizerwa_CV.pdf" target="_blank" rel="noopener noreferrer" style={styles.btnOutline}>View CV</a>
        </div>

        <div style={styles.scroll}>Scroll ↓</div>
      </div>

      <style>{`
        @keyframes floatDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .btn-primary-hero:hover { background: var(--accent-hover) !important; transform: translateY(-2px); }
        .btn-outline-hero:hover { background: var(--muted) !important; border-color: var(--accent) !important; transform: translateY(-2px); }
      `}</style>
    </section>
  );
}