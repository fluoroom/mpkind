import { NextResponse } from 'next/server';
import { togglePlayPause } from '@/lib/mpd';

export async function GET(request) {
  try {
    await togglePlayPause();
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