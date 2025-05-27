import { NextResponse } from 'next/server';

export function middleware(request) {
  const basicAuth = request.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':');

    // Check credentials against environment variables
    if (user === process.env.HTTP_USER && pwd === process.env.HTTP_PASSWORD) {
      return NextResponse.next();
    }
  }

  // Return 401 Unauthorized response with simpler headers
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic',
    },
  });
}

// Configure which routes to protect
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/cover (cover art API)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api/cover|_next/static|_next/image|favicon.ico).*)',
  ],
}; 