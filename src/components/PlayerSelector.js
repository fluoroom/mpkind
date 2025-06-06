
const PLAYERS = [
  { value: 'mpd', label: 'MPD Player' },
  { value: 'http', label: 'HTTP Player' },
];

export function PlayerSelector({ currentPlayer }) {

  const styles = {
    container: {
      position: 'relative',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      gap: '1rem'
    },
    selectContainer: {
      backgroundColor: '#ffffff',
      padding: '0.5rem 1rem'
    },
    select: {
      backgroundColor: '#ffffff',
      color: '#111827',
      padding: '0.5rem 0.75rem',
      borderRadius: '0.375rem',
      border: '1px solid #d1d5db',
      minWidth: '200px',
      textAlign: 'center'
    },
    form: {
      margin: 0
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.selectContainer}>
        <form action="/" method="get" style={styles.form}>
          <select
            name="player"
            defaultValue={currentPlayer}
            onChange="(e) => e.target.form.submit()"
            style={styles.select}
          >
            {PLAYERS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
} 