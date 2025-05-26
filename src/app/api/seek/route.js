import { NextResponse } from 'next/server';
import { seekTo } from '@/lib/mpd';

export async function POST(request) {
  try {
    const { position } = await request.json();
    
    if (typeof position !== 'number' || position < 0) {
      return new NextResponse('Invalid position', { status: 400 });
    }

    await seekTo(position);
    return new NextResponse('OK');
  } catch (error) {
    console.error('Error seeking:', error);
    return new NextResponse('Error seeking', { status: 500 });
  }
} 