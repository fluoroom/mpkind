import { NextResponse } from 'next/server';
import { seek } from '@/app/actions';

export async function POST(request) {
  try {
    const { position, playerType = 'mpd' } = await request.json();
    
    if (typeof position !== 'number' || position < 0) {
      return new NextResponse('Invalid position', { status: 400 });
    }

    await seek(position, playerType);
    return new NextResponse('OK');
  } catch (error) {
    console.error('Error seeking:', error);
    return new NextResponse('Error seeking', { status: 500 });
  }
} 