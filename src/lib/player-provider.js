// Player provider interface
export class PlayerProvider {
  async getStatus() {
    throw new Error('Not implemented');
  }

  async playPause() {
    throw new Error('Not implemented');
  }

  async next() {
    throw new Error('Not implemented');
  }

  async previous() {
    throw new Error('Not implemented');
  }

  async seek() {
    throw new Error('Not implemented');
  }
}

// MPD Provider implementation
import mpd from 'mpd2';

export class MPDProvider extends PlayerProvider {
  constructor() {
    super();
    this.config = {
      host: process.env.MPD_HOST || 'localhost',
      port: process.env.MPD_PORT || 6600,
      password: process.env.MPD_PASSWORD
    };
  }

  async createClient() {
    return mpd.connect(this.config);
  }

  async getStatus() {
    const client = await this.createClient();
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

  async playPause() {
    const client = await this.createClient();
    try {
      const statusString = await client.sendCommand('status');
      const status = mpd.parseObject(statusString);
      const command = status.state === 'play' ? 'pause' : 'play';
      await client.sendCommand(command);
      return status;
    } finally {
      await client.disconnect();
    }
  }

  async next() {
    const client = await this.createClient();
    try {
      await client.sendCommand('next');
    } finally {
      await client.disconnect();
    }
  }

  async previous() {
    const client = await this.createClient();
    try {
      await client.sendCommand('previous');
    } finally {
      await client.disconnect();
    }
  }

  async seek(position) {
    const client = await this.createClient();
    try {
      await client.sendCommand(`seekcur ${position}`);
    } finally {
      await client.disconnect();
    }
  }
}

// HTTP Provider implementation
export class HTTPProvider extends PlayerProvider {
  constructor() {
    super();
    this.baseUrl = process.env.HTTP_PLAYER_URL || 'http://localhost:8601';
  }

  async getStatus() {
    try {
      const response = await fetch(`${this.baseUrl}/api/player/status`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Transform the HTTP player response to match MPD format
      let formattedStatus = 'stop';
      if (data.status === 'Playing') {
        formattedStatus = 'play';
      } else if (data.status === 'Paused') {
        formattedStatus = 'pause';
      }
      var songData = {
        status: {
          state: formattedStatus,
          elapsed: 0, // Note: Position/duration not provided in current format
          duration: 0
        },
        currentSong: {
          file: data.artUrl ? data.artUrl.split('//')[1] : '', // Using artUrl as file path since it's available
          title: data.title || '',
          artist: Array.isArray(data.artist) ? data.artist[0] : data.artist || '',
          album: data.album || '',
          date: '' // Date not provided in current format
        }
      };
      return songData;
    } catch (error) {
      console.error('Error fetching player status:', error);
      var songData = {
        status: {
          state: 'stop',
          elapsed: 0, // Note: Position/duration not provided in current format
          duration: 0
        },
        currentSong: {
          file: '', // Using artUrl as file path since it's available
          title: 'MPRIS Not Present',
          artist: '',
          album: '',
          date: '' // Date not provided in current format
        }
      };
      return songData;
    }
  }

  async playPause() {
    const response = await fetch(`${this.baseUrl}/api/player/play`, {
      method: 'POST'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return this.getStatus();
  }

  async next() {
    const response = await fetch(`${this.baseUrl}/api/player/next`, {
      method: 'POST'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  async previous() {
    const response = await fetch(`${this.baseUrl}/api/player/previous`, {
      method: 'POST'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  async seek() {
    // Note: The HTTP API doesn't seem to have a seek endpoint in the provided routes
    // You may need to implement this if your HTTP player supports seeking
    throw new Error('Seek not supported by HTTP player');
  }
}

// Provider factory
export function createPlayerProvider(type) {
  switch (type) {
    case 'mpd':
      return new MPDProvider();
    case 'http':
      return new HTTPProvider();
    default:
      throw new Error(`Unknown player type: ${type}`);
  }
} 