export function NextButton() {

  const styles = {
    button: {
      backgroundColor: '#ffffff',
      border: '1px solid #111',
      borderRadius: '50%',
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      padding: '12px',
      textDecoration: 'none',
      boxSizing: 'border-box'
    },
    svg: {
      width: '100%',
      height: '100%',
      stroke: '#111',
      strokeWidth: '2',
      objectFit: 'cover'
    }
  };

  return (
    <a
      href="/api/next"
      style={styles.button}
      aria-label="Next track"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        style={styles.svg}
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.811V8.69zM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 0112.75 16.811V8.69z"
        />
      </svg>
    </a>
  );
} 