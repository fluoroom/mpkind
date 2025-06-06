'use server';

import { createPlayerProvider } from '@/lib/player-provider';

export async function getCurrentSong(playerType = 'mpd') {
  const provider = createPlayerProvider(playerType);
  return provider.getStatus();
}

export async function playPause(playerType = 'mpd') {
  const provider = createPlayerProvider(playerType);
  await provider.playPause();
  return getCurrentSong(playerType);
}

export async function next(playerType = 'mpd') {
  const provider = createPlayerProvider(playerType);
  await provider.next();
  return getCurrentSong(playerType);
}

export async function previous(playerType = 'mpd') {
  const provider = createPlayerProvider(playerType);
  await provider.previous();
  return getCurrentSong(playerType);
}

export async function seek(position, playerType = 'mpd') {
  const provider = createPlayerProvider(playerType);
  await provider.seek(position);
  return getCurrentSong(playerType);
}

export async function updateVolume(volume) {
  const provider = createPlayerProvider('mpd');
  await provider.setVolume(volume);
  return getCurrentSong();
} 