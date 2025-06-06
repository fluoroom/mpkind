export function VolumeButtons() {
  const styles = {
    container: {
      display: 'flex',
      gap: '0.5rem',
      position: 'absolute',
      left: '1rem'
    },
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
      textDecoration: 'none',
      marginRight: '0.5rem'
    },
    svg: {
      width: '24px',
      height: '24px',
      stroke: '#333',
      strokeWidth: '2'
    }
  };

  return (
    <div style={styles.container}>
      <a
        href="/api/volume/down"
        style={styles.button}
        aria-label="Volume Down"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          style={styles.svg}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
          />
        </svg>
      </a>
      <a
        href="/api/volume/up"
        style={styles.button}
        aria-label="Volume Up"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          style={styles.svg}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
          />
        </svg>
      </a>
    </div>
  );
} 