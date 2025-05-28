'use client';

import { useState } from 'react';

export function SongInfoOverlay({ song, searchParams }) {
  const isVisible = searchParams?.showInfo !== 'false';

  const styles = {
    overlay: {
      position: 'absolute',
      bottom: '1rem',
      left: '1rem',
      marginRight: '1rem',
      backgroundColor: '#ffffff',
      padding: '0.75rem 0.75rem',
      maxWidth:'85%',
      zIndex: 10,
      textAlign: 'left',
      lineHeight: '1rem',
      fontFamily: 'monospace',
      cursor: 'pointer',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.2s ease-in-out',
      textDecoration: 'none'
    },
    title: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#000000',
      margin: '0 0 0.25rem 0',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    artist: {
      fontSize: '0.9rem',
      color: '#222',
      margin: '0 0 0.25rem 0',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    album: {
      fontSize: '0.9rem',
      color: '#000000',
      margin: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  };

  return (
    <a 
      href={`?showInfo=${isVisible ? 'false' : 'true'}${searchParams?.rate ? `&rate=${searchParams.rate}` : ''}${searchParams?.position ? `&position=${searchParams.position}` : ''}`}
      style={styles.overlay}
      title="Click to toggle visibility"
    >
      <h2 style={styles.title}>{song.title || 'Unknown Title'}</h2>
      <p style={styles.artist}>{song.artist || 'Unknown Artist'}</p>
      <p style={styles.album}>{song.album || 'Unknown Album'} ({song.date || ''})</p>
    </a>
  );
} 