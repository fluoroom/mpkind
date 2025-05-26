import mpd from 'mpd2';

export async function createMPDClient() {
  const config = {
    host: process.env.MPD_HOST || 'localhost',
    port: process.env.MPD_PORT || 6600,
    password: process.env.MPD_PASSWORD
  };

  return mpd.connect(config);
}

export async function getSongInfo() {
  const client = await createMPDClient();
  
  try {
    const [statusString, currentSongString] = await Promise.all([
      client.sendCommand('status'),
      client.sendCommand('currentsong')
    ]);

    const status = mpd.parseObject(statusString);
    const currentSong = mpd.parseObject(currentSongString);

    return {
      status,
      currentSong
    };
  } finally {
    await client.disconnect();
  }
}

export async function sendCommand(command) {
  const client = await createMPDClient();
  
  try {
    const response = await client.sendCommand(command);
    return mpd.parseObject(response);
  } finally {
    await client.disconnect();
  }
}

export async function seekTo(position) {
  return sendCommand(`seekcur ${position}`);
}

export async function setVolume(volume) {
  return sendCommand(`setvol ${volume}`);
}

export async function togglePlayPause() {
  const client = await createMPDClient();
  try {
    // First get the current state
    const statusString = await client.sendCommand('status');
    const status = mpd.parseObject(statusString);
    
    // Then send the appropriate command based on current state
    const command = status.state === 'play' ? 'pause' : 'play';
    await client.sendCommand(command);
    
    return status;
  } finally {
    await client.disconnect();
  }
}

export async function nextSong() {
  return sendCommand('next');
}

export async function previousSong() {
  return sendCommand('previous');
} 