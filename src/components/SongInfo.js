export function SongInfo({ song }) {
  
  const styles = {
    container: {
      textAlign: 'center'
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    artist: {
      fontSize: '1.125rem',
      color: '#4b5563',
      marginBottom: '0.25rem'
    },
    album: {
      fontSize: '1rem',
      color: '#6b7280'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{song.title || 'Unknown Title'}</h1>
      <p style={styles.artist}>{song.artist || 'Unknown Artist'}</p>
      <p style={styles.album}>
        {song.album && `${song.album}${song.date ? ` (${song.date})` : ''}`}
      </p>
    </div>
  );
} 