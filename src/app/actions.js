'use server';

import { getSongInfo as fetchSongInfo, togglePlayPause, nextSong, previousSong, setVolume } from '@/lib/mpd';

export async function playPause() {
  await togglePlayPause();
  return fetchSongInfo();
}

export async function next() {
  await nextSong();
  return fetchSongInfo();
}

export async function previous() {
  await previousSong();
  return fetchSongInfo();
}

export async function updateVolume(volume) {
  await setVolume(volume);
  return fetchSongInfo();
}

export async function getCurrentSong() {
  return await fetchSongInfo();
} 