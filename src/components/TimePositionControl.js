export function TimePositionControl({ currentPosition, duration }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    timeLabel: {
      fontSize: '0.875rem',
      color: '#4b5563',
      textAlign: 'right'
    },
    timeLabelRight: {
      fontSize: '0.875rem',
      color: '#4b5563',
    },
    progressBar: {
      flex: 1,
      height: '0.5rem',
      backgroundColor: '#e5e7eb',
      borderRadius: '0.5rem',
      position: 'relative',
      margin:'0 1em',
    },
    progressFill: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      backgroundColor: '#111827',
      borderRadius: '0.5rem',
      transition: 'width 0.1s linear'
    }
  };

  const progress = duration > 0 ? (currentPosition / duration) * 100 : 0;

  return (
    <div style={styles.container}>
      <span style={styles.timeLabel}>
        {formatTime(currentPosition)}
      </span>
      
      <div style={styles.progressBar}>
        <div 
          style={{
            ...styles.progressFill,
            width: `${progress}%`
          }}
        />
      </div>
      
      <span style={styles.timeLabelRight}>
        {formatTime(duration)}
      </span>
    </div>
  );
} 