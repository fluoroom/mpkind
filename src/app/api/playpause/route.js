import { NextResponse } from 'next/server';
import { playPause } from '@/app/actions';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const playerType = url.searchParams.get('player') || 'mpd';
    await playPause(playerType);
    const referer = request.headers.get('referer') || '/';
    return NextResponse.redirect(referer);
  } catch (error) {
    console.error('Error toggling play/pause:', error);
    const referer = request.headers.get('referer') || '/';
    const url = new URL(referer);
    url.searchParams.set('error', 'playpause');
    return NextResponse.redirect(url.toString());
  }
} 