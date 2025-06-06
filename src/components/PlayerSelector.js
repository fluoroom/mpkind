
const PLAYERS = [
  { value: 'mpd', label: 'MPD Player' },
  { value: 'http', label: 'HTTP Player' },
];

export function PlayerSelector({ currentPlayer, searchParams }) {

  const styles = {
    container: {
      position: 'relative',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem .5rem',
      gap: '1rem'
    },
    selectContainer: {
      backgroundColor: '#ffffff',
      padding: '0.5rem 1rem'
    },
    select: {
      backgroundColor: '#ffffff',
      color: '#111827',
      padding: '0.5rem 0.5rem',
      borderRadius: '0.375rem',
      border: '1px solid #d1d5db',
      minWidth: '150px',
      textAlign: 'left'
    },
    form: {
      margin: 0
    },
    button: {
      backgroundColor: '#ffffff',
      color: '#111827',
      padding: '0.375rem 0.5rem',
      marginLeft: '0.5rem',
      borderRadius: '0.375rem',
      border: '1px solid #d1d5db',
      textAlign: 'left'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.selectContainer}>
        <form action="/" method="get" style={styles.form}>
          <select
            name="player"
            defaultValue={currentPlayer}
            style={styles.select}
          >
            {PLAYERS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {searchParams?.showInfo &&
            <input type="hidden" name="showInfo" value={searchParams?.showInfo?.toString()} />
          }
          {searchParams?.rate &&
            <input type="hidden" name="rate" value={searchParams?.rate?.toString()} />
          }
          <button type="submit" style={styles.button}>
            Go
          </button>
        </form>
      </div>
    </div>
  );
} 