import { NextResponse } from 'next/server';
import { nextSong } from '@/lib/mpd';

export async function GET(request) {
  try {
    await nextSong();
    const referer = request.headers.get('referer') || '/';
    return NextResponse.redirect(referer);
  } catch (error) {
    console.error('Error playing next song:', error);
    const referer = request.headers.get('referer') || '/';
    const url = new URL(referer);
    url.searchParams.set('error', 'next');
    return NextResponse.redirect(url.toString());
  }
} 