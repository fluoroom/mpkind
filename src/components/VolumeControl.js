'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export function VolumeControl({ volume }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const newVolume = parseInt(e.target.value, 10);
    startTransition(() => {
      fetch('/api/volume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ volume: newVolume }),
      }).then(() => router.refresh());
    });
  };

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    svg: {
      width: '20px',
      height: '20px',
      stroke: '#111827',
      strokeWidth: '2'
    },
    input: {
      width: '100px',
      height: '4px',
      WebkitAppearance: 'none',
      appearance: 'none',
      backgroundColor: '#d1d5db',
      borderRadius: '2px',
      outline: 'none'
    },
    inputThumb: {
      WebkitAppearance: 'none',
      appearance: 'none',
      width: '12px',
      height: '12px',
      backgroundColor: '#111827',
      borderRadius: '50%',
      cursor: 'pointer',
      marginTop: '-4px'
    }
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>
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
            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
          />
        </svg>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleChange}
          disabled={isPending}
          style={styles.input}
        />
      </label>
    </div>
  );
} 