import { NextResponse } from 'next/server';
import { next } from '@/app/actions';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const playerType = url.searchParams.get('player') || 'mpd';
    await next(playerType);
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