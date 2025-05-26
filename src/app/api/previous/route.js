import { NextResponse } from 'next/server';
import { previousSong } from '@/lib/mpd';

export async function GET(request) {
  try {
    await previousSong();
    const baseUrl = request.nextUrl.clone();
    baseUrl.pathname = '/';
    return NextResponse.redirect(baseUrl);
  } catch (error) {
    console.error('Error playing previous song:', error);
    const baseUrl = request.nextUrl.clone();
    baseUrl.pathname = '/';
    baseUrl.searchParams.set('error', 'previous');
    return NextResponse.redirect(baseUrl);
  }
} 