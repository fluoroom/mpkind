import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET(request) {
  try {
    await execAsync(process.env.VOLDN_COMMAND);
    const referer = request.headers.get('referer') || '/';
    return NextResponse.redirect(referer);
  } catch (error) {
    console.error('Error executing volume down command:', error);
    const referer = request.headers.get('referer') || '/';
    const url = new URL(referer);
    url.searchParams.set('error', 'volume-down');
    return NextResponse.redirect(url.toString());
  }
} 