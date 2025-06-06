export function PlayPauseButton({ isPlaying, playerType = 'mpd' }) {

  

  const styles = {
    button: {
      backgroundColor: '#ffffff',
      border: '1px solid #111',
      borderRadius: '50%',
      width: '64px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      padding:0,
      margin:"0 1em",
      textDecoration: 'none'
    },
    svg: {
      width: '32px',
      height: '32px',
      stroke: '#111',
      strokeWidth: '2',
      marginLeft:'.2em'
    },
    svgPause: {
      width: '32px',
      height: '32px',
      stroke: '#111',
      strokeWidth: '2',
    }
  };

  return (
    <a
      href={`/api/playpause?player=${playerType}`}
      style={styles.button}
      aria-label={isPlaying ? 'Pause' : 'Play'}
    >
      {isPlaying ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          style={styles.svgPause}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
          />
        </svg>
      ) : (
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
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>
      )}
    </a>
  );
} 