import { NextResponse } from 'next/server';
import { previous } from '@/app/actions';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const playerType = url.searchParams.get('player') || 'mpd';
    await previous(playerType);
    const referer = request.headers.get('referer') || '/';
    return NextResponse.redirect(referer);
  } catch (error) {
    console.error('Error playing previous song:', error);
    const referer = request.headers.get('referer') || '/';
    const url = new URL(referer);
    url.searchParams.set('error', 'previous');
    return NextResponse.redirect(url.toString());
  }
} 