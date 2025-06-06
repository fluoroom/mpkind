import { NextResponse } from 'next/server';
import path from 'path';
import { parseFile } from 'music-metadata';
import fs from 'fs/promises';

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const file = searchParams.get('file');
  const player = searchParams.get('player');
  console.log(player);

  if (!file) {
    return new NextResponse('Missing file parameter', { status: 400 });
  }

  try {
    let filePath = file;
    if (player === 'mpd') {
      const musicPath = process.env.MUSIC_DIRECTORY;

      if (!musicPath) {
        throw new Error('MUSIC_DIRECTORY environment variable not set');
      }
      filePath = path.join(musicPath, file);

      // For MPD, extract artwork from audio file metadata
      const metadata = await parseFile(filePath, { skipCovers: false });

      if (!metadata.common.picture || metadata.common.picture.length === 0) {
        return new NextResponse('No embedded artwork found', { status: 404 });
      }

      // Get the largest picture
      const picture = metadata.common.picture.reduce((largest, current) => {
        return (current.size > largest.size) ? current : largest;
      }, metadata.common.picture[0]);

      // Determine content type from picture format
      const contentType = picture.format === 'image/jpeg' ? 'image/jpeg' :
        picture.format === 'image/png' ? 'image/png' :
          'image/jpeg'; // Default to JPEG if format is unknown

      return new NextResponse(picture.data, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000',
          'Accept-Ranges': 'bytes',
          'Content-Length': picture.data.length.toString(),
        },
      });
    } else {
      // For other services, file is already an image - just read and serve it
      const imageData = await fs.readFile(filePath);
      const ext = path.extname(filePath).toLowerCase();
      const contentType = ext === '.png' ? 'image/png' : 'image/jpeg';

      return new NextResponse(imageData, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000',
          'Accept-Ranges': 'bytes',
          'Content-Length': imageData.length.toString(),
        },
      });
    }
  } catch (error) {
    console.error('Error fetching cover art:', error);
    return new NextResponse('Error fetching cover art', { status: 500 });
  }
} 