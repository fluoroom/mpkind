import { getCurrentSong } from './actions';
import { PlayPauseButton } from '@/components/PlayPauseButton';
import { TimePositionControl } from '@/components/TimePositionControl';
import { NextButton } from '@/components/NextButton';
import { PreviousButton } from '@/components/PreviousButton';
import { SongInfo } from '@/components/SongInfo';
import { UpdateRateSelector } from '@/components/UpdateRateSelector';
import { VolumeButtons } from '@/components/VolumeButtons';

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams: rawSearchParams }) {
  const searchParams = await Promise.resolve(rawSearchParams);
  const updateRate = searchParams.rate ? parseInt(searchParams.rate) : 10;
  const songInfo = await getCurrentSong();
  if (searchParams.position) {
    const position = parseInt(searchParams.position);
    if (!isNaN(position)) {
      await fetch('/api/seek', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ position }),
      });
    }
  }
  
  const styles = {
    main: {
      minHeight: '100vh',
      maxWidth: '100vw',
      backgroundColor: '#ffffff',
      padding: '1rem',
      paddingBottom: '5rem'
    },
    container: {
      maxWidth: '100vw',
      margin: '0',
    },
    coverArt: {
      width: '100%',
      paddingBottom: '100%',
      backgroundColor: '#f3f4f6',
      position: 'relative',
      textAlign: 'center',
      overflow: 'hidden'
    },
    coverImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '1.25em auto',
      position: 'relative',
    },
    controlsCenter: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center'
    },
    syncButton: {
      padding: '0.75rem',
      borderRadius: '9999px',
      border: '1px solid #aaa',
      position: 'absolute',
      right: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      cursor: 'pointer'
    },
    syncButtonHover: {
      backgroundColor: '#1f2937'
    },
    syncIcon: {
      width: '1.25rem',
      height: '1.25rem',
      opacity:0.6
    },
    timeControl: {
      width: '100%',
      margin:'1em auto'
    }
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {/* Cover Art */}
        <div style={styles.coverArt}>
          {songInfo.currentSong.file && (
            <img
              src={`/api/cover?file=${encodeURIComponent(songInfo.currentSong.file)}`}
              alt="Album Cover"
              style={styles.coverImage}
              loading="eager"
              fetchPriority="high"
            />
          )}
        </div>

        {/* Playback Controls */}
        <div style={styles.controls}>
          <VolumeButtons />
          <div style={styles.controlsCenter}>
            <PreviousButton />
            <PlayPauseButton isPlaying={songInfo.status.state === 'play'} />
            <NextButton />
          </div>
          <a
            href="."
            style={styles.syncButton}
            aria-label="Reload page"
          >
            <img 
              src="/assets/sync.png" 
              alt="Sync" 
              style={styles.syncIcon}
              width={20}
              height={20}
            />
          </a>
        </div>

        {/* Time Position Control */}
        <div style={styles.timeControl}>
          <TimePositionControl 
            currentPosition={parseInt(songInfo.status.elapsed || '0')} 
            duration={parseInt(songInfo.status.duration || '0')} 
          />
        </div>

        {/* Song Info */}
        <SongInfo song={songInfo.currentSong} />

        {/* Update Rate Selector */}
        <UpdateRateSelector currentRate={updateRate} />
      </div>
    </main>
  );
} 