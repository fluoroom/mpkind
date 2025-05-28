'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const UPDATE_RATES = [
  { value: '3', label: '3 seconds' },
  { value: '5', label: '5 seconds' },
  { value: '10', label: '10 seconds' },
  { value: '30', label: '30 seconds' },
  { value: '60', label: '1 minute' },
  { value: '120', label: '2 minutes' },
];

export function UpdateRateSelector({ currentRate }) {
  const router = useRouter();

  useEffect(() => {
    let interval = setInterval(() => {
      router.refresh();
    }, currentRate * 1000);
    return () => clearInterval(interval);

  }, [currentRate, router]);

  const styles = {
    container: {
      position: 'relative',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem'
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
            name="rate"
            defaultValue={currentRate.toString()}
            onChange={(e) => e.target.form.submit()}
            style={styles.select}
          >
            {UPDATE_RATES.map(({ value, label }) => (
              <option key={value} value={value}>
                Update every {label}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
} 