import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req: request, res });

    const {
      data: { session },
    } = await supabase.auth.getSession();

    // If user is signed in and trying to access auth pages, redirect to home
    if (session && ['/login', '/signup'].includes(request.nextUrl.pathname)) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = '/';
      return NextResponse.redirect(redirectUrl);
    }

    return res;
  } catch (e) {
    // If there is an error, just continue without redirecting
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login (login page)
     * - signup (signup page)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|login|signup).*)',
  ],
}; 