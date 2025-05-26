

export function PreviousButton() {

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
      padding: 0,
      textDecoration: 'none'
    },
    svg: {
      width: '24px',
      height: '24px',
      stroke: '#111',
      strokeWidth: '2'
    }
  };

  return (
    <a
      href="/api/previous"
      style={styles.button}
      aria-label="Previous track"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        style={styles.svg}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.689v8.122zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0111.25 8.689v8.122z"
        />
      </svg>
    </a>
  );
} 